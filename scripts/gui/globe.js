let scene, camera, renderer, globe, starField;
let isDragging = false;
let previousMouse = { x: 0, y: 0 };
let rotation = { x: 0, y: 0 };
let targetRotation = { x: 0, y: 0 };
let zoom = 5;
let targetZoom = 5;

let activePointers = new Map();
let lastPinchDistance = null;

let fastSpinOriginY = 0;
let wasFastSpinning = false;

// Robinson projection coefficients
const ROBINSON_AA = [
    0.9986, 0.9954, 0.9900, 0.985, 0.9745, 0.965, 0.95, 0.934, 0.915, 0.89,
    0.86, 0.83, 0.79, 0.75, 0.7135, 0.6623, 0.6122, 0.5522
];
const ROBINSON_BB = [
    0.0000, 0.0620, 0.1240, 0.1860, 0.2480, 0.3100, 0.3720, 0.4340, 0.4958, 0.5571,
    0.6176, 0.6769, 0.7346, 0.7903, 0.8435, 0.8936, 0.9394, 0.9761
];

function robinsonInverse(x, y, imgWidth, imgHeight) {
    // Normalize coordinates from image space to Robinson space
    const normX = (x / imgWidth) * 2 - 1;  // -1 to 1
    const normY = 1 - (y / imgHeight) * 2;  // 1 to -1 (flip Y)

    // Robinson uses a scale factor
    const scale = 0.8487;
    const robX = normX / scale;
    const robY = normY / scale;

    // Inverse Y to latitude using lookup table
    let lat = 0;
    const absRobY = Math.abs(robY);
    
    if (absRobY > 0.9761) return null; // Outside projection bounds
    
    // Find latitude using inverse interpolation
    for (let i = 0; i < ROBINSON_BB.length - 1; i++) {
        if (absRobY >= ROBINSON_BB[i] && absRobY <= ROBINSON_BB[i + 1]) {
            const t = (absRobY - ROBINSON_BB[i]) / (ROBINSON_BB[i + 1] - ROBINSON_BB[i]);
            const latDeg = (i + t) * 5; // 5 degree intervals
            lat = latDeg * Math.PI / 180;
            if (robY < 0) lat = -lat;
            break;
        }
    }

    // Find corresponding AA value
    const latDeg = Math.abs(lat) * 180 / Math.PI;
    const index = latDeg / 5;
    const i = Math.floor(index);
    const t = index - i;
    
    let aa;
    if (i >= ROBINSON_AA.length - 1) {
        aa = ROBINSON_AA[ROBINSON_AA.length - 1];
    } else {
        aa = ROBINSON_AA[i] + t * (ROBINSON_AA[i + 1] - ROBINSON_AA[i]);
    }

    // Calculate longitude
    const lon = robX / aa;
    
    if (Math.abs(lon) > Math.PI) return null; // Outside bounds

    return { lat, lon };
}

function convertRobinsonToEquirectangular(sourceCanvas) {
    const canvas = document.createElement('canvas');
    const width = 2048;
    const height = 1024;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // Get pixel data from source canvas
    const srcCtx = sourceCanvas.getContext('2d');
    const srcData = srcCtx.getImageData(0, 0, sourceCanvas.width, sourceCanvas.height);

    const destData = ctx.createImageData(width, height);

    // For each pixel in equirectangular output
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            // Convert to lat/lon
            const lon = (x / width) * 2 * Math.PI - Math.PI;
            const lat = Math.PI / 2 - (y / height) * Math.PI;

            // Forward Robinson projection
            const latDeg = lat * 180 / Math.PI;
            const absLatDeg = Math.abs(latDeg);
            const index = absLatDeg / 5;
            const i = Math.floor(index);
            const t = index - i;

            let aa, bb;
            if (i >= ROBINSON_AA.length - 1) {
                aa = ROBINSON_AA[ROBINSON_AA.length - 1];
                bb = ROBINSON_BB[ROBINSON_BB.length - 1];
            } else {
                aa = ROBINSON_AA[i] + t * (ROBINSON_AA[i + 1] - ROBINSON_AA[i]);
                bb = ROBINSON_BB[i] + t * (ROBINSON_BB[i + 1] - ROBINSON_BB[i]);
            }

            const scale = 0.8487;
            const robX = scale * aa * lon;
            const robY = scale * bb * (lat >= 0 ? 1 : -1);

            // Convert to image coordinates
            const maxRobX = scale * Math.PI;
            const srcX = ((robX + maxRobX) / (2 * maxRobX)) * sourceCanvas.width;
            const srcY = ((scale - robY) / (2 * scale)) * sourceCanvas.height;

            // Sample from source (bilinear interpolation)
            if (srcX >= 0 && srcX < sourceCanvas.width && srcY >= 0 && srcY < sourceCanvas.height) {
                const x0 = Math.floor(srcX);
                const x1 = Math.min(x0 + 1, sourceCanvas.width - 1);
                const y0 = Math.floor(srcY);
                const y1 = Math.min(y0 + 1, sourceCanvas.height - 1);
                const fx = srcX - x0;
                const fy = srcY - y0;

                const destIdx = (y * width + x) * 4;

                for (let c = 0; c < 4; c++) {
                    const p00 = srcData.data[(y0 * sourceCanvas.width + x0) * 4 + c];
                    const p10 = srcData.data[(y0 * sourceCanvas.width + x1) * 4 + c];
                    const p01 = srcData.data[(y1 * sourceCanvas.width + x0) * 4 + c];
                    const p11 = srcData.data[(y1 * sourceCanvas.width + x1) * 4 + c];

                    const val = p00 * (1 - fx) * (1 - fy) +
                                p10 * fx * (1 - fy) +
                                p01 * (1 - fx) * fy +
                                p11 * fx * fy;

                    destData.data[destIdx + c] = val;
                }
            }
        }
    }

    ctx.putImageData(destData, 0, 0);
    return canvas;
}

function generateMapTexture() {
    // Get buffer canvas
    const bufferCanvas = document.getElementById('buffer');
    const bufferCtx = bufferCanvas.getContext('2d');

    // Create temp canvas for map generation
    let tempCanvas = document.createElement('canvas');
    let tempCtx = tempCanvas.getContext('2d');
    tempCanvas.width = bufferCanvas.width;
    tempCanvas.height = bufferCanvas.height;

    tempCtx.fillStyle = 'white';
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    drawMap(tempCtx, tempCanvas, false);

    // Draw the generated map onto buffer canvas
    bufferCtx.drawImage(tempCanvas, 0, 0);
    
    // Convert from buffer canvas to equirectangular
    const equirectCanvas = convertRobinsonToEquirectangular(bufferCanvas);
    return equirectCanvas;
}

function drawToGlobe() {
    if (!globe) {
        console.warn('Globe not initialized yet');
        return;
    }

    try {
        // Generate new map texture
        const equirectCanvas = generateMapTexture();
        
        // Create new texture and update globe material
        const newTexture = new THREE.CanvasTexture(equirectCanvas);
        globe.material.map = newTexture;
        if (!physicalMap) globe.material.bumpMap = null;
        else if (globe.material.bumpMap == null) {
            const bumpTexture = new THREE.TextureLoader().load('images/bump_map.jpg');
            globe.material.bumpMap = bumpTexture;
        }
        globe.material.needsUpdate = true;
        
        //console.log('Globe texture updated successfully');
    } catch (error) {
        console.error('Error updating globe:', error);
    }
}

function createStarField() {
    const starGroup = new THREE.Group();
    const starCount = 150;
    const orbitRadius = 50; // Distance from Earth center

    for (let i = 0; i < starCount; i++) {
        // Random position on sphere around Earth
        const phi = Math.random() * Math.PI * 2;
        const theta = Math.random() * Math.PI;
        
        const x = orbitRadius * Math.sin(theta) * Math.cos(phi);
        const y = orbitRadius * Math.sin(theta) * Math.sin(phi);
        const z = orbitRadius * Math.cos(theta);

        // Random star size
        const size = 0.01 + Math.random() * 0.1;
        
        const starGeometry = new THREE.SphereGeometry(size, 8, 8);
        const starMaterial = new THREE.MeshBasicMaterial({ 
            color: 0xffffff,
            transparent: true,
            opacity: 0.6 + Math.random() * 0.4
        });
        
        const star = new THREE.Mesh(starGeometry, starMaterial);
        star.position.set(x, y, z);
        starGroup.add(star);
    }

    return starGroup;
}

function createGlowMaterial(intensity, fade, color) {
    return new THREE.ShaderMaterial({
        uniforms: {
            c: { value: intensity },
            p: { value: fade },
            glowColor: { value: new THREE.Color(color) },
            viewVector: { value: new THREE.Vector3() }
        },
        vertexShader: `
            uniform vec3 viewVector;
            uniform float c;
            uniform float p;
            varying float intensity;
            void main() {
                vec3 vNormal = normalize(normalMatrix * normal);
                vec3 vNormel = normalize(normalMatrix * viewVector);
                intensity = pow(c - dot(vNormal, vNormel), p);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform vec3 glowColor;
            varying float intensity;
            void main() {
                vec3 glow = glowColor * intensity;
                gl_FragColor = vec4(glow, 1.0);
            }
        `,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false
    });
}

function init() {
    scene = new THREE.Scene();
    
    camera = new THREE.PerspectiveCamera(
        isMobile ? 45 : 35,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = zoom;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('globe').appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.75);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Get buffer canvas and set dimensions
    const bufferCanvas = document.getElementById('buffer');
    bufferCanvas.width = 2560;
    bufferCanvas.height = 1297;

    // Load Robinson map
    const img = new Image();
    img.onload = function() {
        document.getElementById('loading').style.display = 'block';
        
        setTimeout(() => {
            try {
                // Generate initial map texture
                const equirectCanvas = generateMapTexture();
                const texture = new THREE.CanvasTexture(equirectCanvas);
                const bumpTexture = new THREE.TextureLoader().load('images/bump_map.jpg');
                
                const geometry = new THREE.SphereGeometry(1, 64, 64);
                const material = new THREE.MeshPhongMaterial({
                    map: texture,
                    bumpMap: bumpTexture,
                    bumpScale: 0.015,
                    shininess: 5,
                    specular: new THREE.Color(0x444444)
                });
                
                globe = new THREE.Mesh(geometry, material);
                scene.add(globe);

                // Atmospheric glow
                const glowMaterial = createGlowMaterial(0.7, 7.0, 0x93cfef);
                glow = new THREE.Mesh(
                    new THREE.SphereGeometry(1.12, 64, 64),
                    glowMaterial
                );
                scene.add(glow);

                // keep glow aligned with globe
                globe.glow = glow;


                // Create moon
                const moonTexture = new THREE.TextureLoader().load('images/moon.jpg', () => {
                    // Geometry for the Moon
                    const moonGeometry = new THREE.SphereGeometry(0.27, 32, 32); // ~27% size of Earth
                    const moonMaterial = new THREE.MeshLambertMaterial({
                        map: moonTexture,
                        side: THREE.FrontSide
                    });

                    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

                    // Position Moon relative to Earth
                    moon.position.set(2, 0, 0); // 2 units away on X axis
                    scene.add(moon);

                    // Optional: store moon in scene for rotation animation
                    globe.moon = moon;
                });


                // Star field
                starField = createStarField();
                scene.add(starField);

                document.getElementById('loading').style.display = 'none';
                animate();
            } catch (error) {
                showError('Error converting projection: ' + error.message);
            }
        }, 100);
    };
    img.onerror = function() {
        showError('Could not load map.png. Please ensure the file is in the same directory.');
    };
    img.src = 'images/map.png';

    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    renderer.domElement.addEventListener('pointermove', onPointerMove);
    renderer.domElement.addEventListener('pointerup', onPointerUp);
    renderer.domElement.addEventListener('pointercancel', onPointerUp);
    renderer.domElement.addEventListener('wheel', onWheel, { passive: false });
    renderer.domElement.addEventListener('contextmenu', (e) => e.preventDefault());
    renderer.domElement.style.touchAction = 'none';
    window.addEventListener('resize', onWindowResize);
}

function onPointerDown(e) {
    renderer.domElement.setPointerCapture(e.pointerId);
    activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (activePointers.size === 1) {
        isDragging = true;
        previousMouse = { x: e.clientX, y: e.clientY };
    }
}

function onPointerMove(e) {
    if (!activePointers.has(e.pointerId)) return;

    const prev = activePointers.get(e.pointerId);
    const dx = e.clientX - prev.x;
    const dy = e.clientY - prev.y;
    activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    // ONE finger → rotate
    if (activePointers.size === 1 && isDragging) {
        targetRotation.y += dx * 0.005;
        targetRotation.x += dy * 0.005;
        targetRotation.x = Math.max(
            -Math.PI / 2,
            Math.min(Math.PI / 2, targetRotation.x)
        );
    }

    // TWO fingers → pinch zoom
    if (activePointers.size === 2) {
        const pts = [...activePointers.values()];
        const dist = Math.hypot(
            pts[0].x - pts[1].x,
            pts[0].y - pts[1].y
        );

        if (lastPinchDistance !== null) {
            const delta = lastPinchDistance - dist;
            targetZoom += delta * 0.005;
            targetZoom = Math.max(1.5, Math.min(10, targetZoom));
        }
        lastPinchDistance = dist;
    }
}

function onPointerUp(e) {
    activePointers.delete(e.pointerId);
    renderer.domElement.releasePointerCapture(e.pointerId);

    if (activePointers.size < 2) {
        lastPinchDistance = null;
    }
    if (activePointers.size === 0) {
        isDragging = false;
    }
}

function onWheel(event) {
    event.preventDefault();
    targetZoom += event.deltaY * 0.001;
    targetZoom = Math.max(1.5, Math.min(10, targetZoom));
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    if (globe) {
        rotation.x += (targetRotation.x - rotation.x) * 0.1;
        rotation.y += (targetRotation.y - rotation.y) * 0.1;
        globe.rotation.x = rotation.x;
        globe.rotation.y = rotation.y;
        
        // Stars
        if (starField) {
            starField.rotation.x = rotation.x;
            starField.rotation.y = rotation.y;
        }

        // Zoom
        zoom += (targetZoom - zoom) * 0.1;
        camera.position.z = zoom;
        
        if (!isDragging && !disableSpinning) {
            const timeDir = goingBackwards ? -1 : 1;

            if (isLoading) {
                // Fast spin just started -> store origin
                if (!wasFastSpinning) {
                    fastSpinOriginY = targetRotation.y;
                    wasFastSpinning = true;
                }

                targetRotation.y += 0.1 * timeDir;
            } else {
                // Fast spin just ended -> snap back
                if (wasFastSpinning) {
                    targetRotation.y = fastSpinOriginY;
                    wasFastSpinning = false;
                }

                // Normal slow spin
                targetRotation.y += 0.0001 * timeDir;
            }
        }

    }
    if (glow) {
        glow.material.uniforms.viewVector.value = 
            new THREE.Vector3().subVectors(camera.position, glow.position);
    }
    
    if (globe.moon) {
        const radius = 20; // distance from Earth
        const tilt = -23.44 * (Math.PI / 180); // orbit tilt in radians
        const phaseOffset = 3 * Math.PI / 2; // tweak this to set starting position

        const time = -globe.rotation.y + phaseOffset;

        // Tilted orbit plane
        globe.moon.position.x = radius * Math.cos(time);
        globe.moon.position.z = radius * Math.sin(time) * Math.cos(tilt);
        globe.moon.position.y = radius * Math.sin(time) * Math.sin(tilt);
        globe.moon.lookAt(globe.position);
    }
    renderer.render(scene, camera);
}

function showError(message) {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('errorMsg').textContent = message;
    document.getElementById('error').style.display = 'block';
}

function downloadCanvasPNG(canvas, filename = "equirectangular_debug.png") {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

init();