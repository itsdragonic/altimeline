var canvas = document.getElementById('main');
var ctx = canvas.getContext('2d');
var buffer = document.getElementById('buffer');
var ctx2 = buffer.getContext('2d');

buffer.width = 2560;
buffer.height = 1297;

trackTransforms(ctx);

function clearCanvas() {
    var p1 = ctx.transformedPoint(0,0);
    var p2 = ctx.transformedPoint(canvas.width,canvas.height);
    ctx.clearRect(p1.x,p1.y,p2.x-p1.x,p2.y-p1.y);

    ctx.save();
    ctx.setTransform(1,0,0,1,0,0);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.restore();
}

function drawMap(ctx, canvas, thickLines) {
    let img = new Image;
    if (physicalMap) {
        img.src = "images/map.png";
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }

    // Draw Map
    ctx.drawImage(buffer, 0, 0, canvas.width, canvas.height);

    let img2 = new Image;
    if (physicalMap) {
        img2.src = "images/map.png";
        ctx.globalAlpha = 0.25;
        ctx.drawImage(img2, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1;

        let img3 = new Image;
        img3.src = "images/ocean.png";
        ctx.drawImage(img3, 0, 0, canvas.width, canvas.height);
    } else {
        let img4 = new Image;
        img4.src = "images/world.png";
        ctx.drawImage(img4, 0, 0, canvas.width, canvas.height);

        /*let img5 = new Image;
        img5.src = "data:image/png;base64,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";
        ctx2.drawImage(img5, 1618, 349);*/
    }
  
    // Draw Text
    ctx.fillStyle = 'white';
    ctx.lineWidth = zoomAmount > 4 ? 1 : zoomAmount > 2 ? 2 : 3;
    if (thickLines) {
        ctx.lineWidth = 5;
    }

    ctx.lineJoin = 'miter';
    ctx.miterLimit = 2; // adjust
    // ctx.lineJoin = 'round';
    // ctx.lineJoin = 'bevel';
    ctx.strokeStyle = '#a4ff11';
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.9)';
  
    const nations = Object.keys(civs[timeline]).filter(nation => civs[timeline][nation].strength > 0);
  
    if (showNames) {
        for (let i = nations.length - 1; i >= 0; i--) {
            const nation = nations[i];
            const civ = civs[timeline][nation];
    
            ctx.font = (civ.size * 3 * canvas.width / buffer.width) + 'px carolingia';
    
            const scaledX = civ.x * 0.96 * canvas.width / buffer.width;
            const scaledY = civ.y * canvas.height / buffer.height;
    
            if (civ.hideName == false || civ.hideName == null) {
                ctx.strokeText(civ.name, scaledX, scaledY);
                ctx.fillText(civ.name, scaledX, scaledY);
            }
        }
    }
}

function redraw() {
    clearCanvas();
    drawMap(ctx, canvas, false);   
}  

var zoomAmount = 1;
var intervalId;
var lastX, lastY, dragStart, dragged;
var scaleFactor = 1.1;

function loadScreen() {
    clearInterval(intervalId);
    zoomAmount = 1;

    // Reset the canvas context transformation
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    redraw();

    intervalId = setInterval(() => {
        redraw();
    }, 500);

    lastX = canvas.width / 2;
    lastY = canvas.height / 2;

    dragStart = null;
    dragged = false;

    canvas.addEventListener('mousemove', handleMouseMove, false);
    canvas.addEventListener('mousedown', handleMouseDown, false);
    canvas.addEventListener('mouseup', handleMouseUp, false);
    canvas.addEventListener('DOMMouseScroll', handleScroll, false);
    canvas.addEventListener('mousewheel', handleScroll, false);
}

function handleMouseMove(evt) {
    lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
    lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
    dragged = true;
    if (dragStart) {
        var pt = ctx.transformedPoint(lastX, lastY);
        ctx.translate(pt.x - dragStart.x, pt.y - dragStart.y);
        redraw();
    }
}

function handleMouseDown(evt) {
    document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';
    lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
    lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
    dragStart = ctx.transformedPoint(lastX, lastY);
    dragged = false;
    canvas.style.cursor = 'move';
}

function handleMouseUp(evt) {
    dragStart = null;
    if (!dragged) zoom(evt.shiftKey ? -1 : 1);
    canvas.style.cursor = 'pointer';
}

function zoom(clicks) {
    var pt = ctx.transformedPoint(lastX, lastY);
    ctx.translate(pt.x, pt.y);
    var factor = Math.pow(scaleFactor, clicks);
    ctx.scale(factor, factor);
    zoomAmount *= factor;
    ctx.imageSmoothingEnabled = zoomAmount <= 0.5;
    ctx.translate(-pt.x, -pt.y);
    redraw();
}

function handleScroll(evt) {
    var delta = evt.wheelDelta ? evt.wheelDelta / 40 : evt.detail ? -evt.detail : 0;
    if (zoomAmount < 0.3) {
        delta = Math.abs(delta);
    } else if (zoomAmount > 2000) {
        delta = -Math.abs(delta);
    }

    if (delta) zoom(delta);

    return evt.preventDefault() && false;
}

function refresh() {
    canvas.removeEventListener('mousemove', handleMouseMove);
    canvas.removeEventListener('mousedown', handleMouseDown);
    canvas.removeEventListener('mouseup', handleMouseUp);
    canvas.removeEventListener('DOMMouseScroll', handleScroll);
    canvas.removeEventListener('mousewheel', handleScroll);

    loadScreen();
    trackTransforms(ctx);
}

document.addEventListener('DOMContentLoaded', function () {
    refresh();
});

window.addEventListener('resize', function () {
    refresh();    
});

// Adds ctx.getTransform() - returns an SVGMatrix
// Adds ctx.transformedPoint(x,y) - returns an SVGPoint
function trackTransforms(ctx) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
    var xform = svg.createSVGMatrix();
    ctx.getTransform = function() { return xform; };

    var savedTransforms = [];
    var save = ctx.save;
    ctx.save = function() {
        savedTransforms.push(xform.translate(0,0));
        return save.call(ctx);
    };
  
    var restore = ctx.restore;
    ctx.restore = function() {
        xform = savedTransforms.pop();
        return restore.call(ctx);
    };

    var scale = ctx.scale;
    ctx.scale = function(sx,sy) {
        xform = xform.scaleNonUniform(sx,sy);
        return scale.call(ctx,sx,sy);
    };
  
    var rotate = ctx.rotate;
    ctx.rotate = function(radians) {
        xform = xform.rotate(radians*180/Math.PI);
        return rotate.call(ctx,radians);
    };
  
    var translate = ctx.translate;
    ctx.translate = function(dx,dy) {
        xform = xform.translate(dx,dy);
        return translate.call(ctx,dx,dy);
    };
  
    var transform = ctx.transform;
    ctx.transform = function(a,b,c,d,e,f) {
        var m2 = svg.createSVGMatrix();
        m2.a=a; m2.b=b; m2.c=c; m2.d=d; m2.e=e; m2.f=f;
        xform = xform.multiply(m2);
        return transform.call(ctx,a,b,c,d,e,f);
    };
  
    var setTransform = ctx.setTransform;
    ctx.setTransform = function(a,b,c,d,e,f) {
        xform.a = a;
        xform.b = b;
        xform.c = c;
        xform.d = d;
        xform.e = e;
        xform.f = f;
        return setTransform.call(ctx,a,b,c,d,e,f);
    };
  
    var pt = svg.createSVGPoint();
    ctx.transformedPoint = function(x,y) {
        pt.x=x; pt.y=y;
        return pt.matrixTransform(xform.inverse());
    }
}

function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789';
    let randomString = '';
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }
    return randomString;
}

// Generate Random Seed Button
const generateSeedButton = document.getElementById('randomSeed');
const generateDownloadButton = document.getElementById('downloadButton');

generateSeedButton.addEventListener('click', () => {
    seedInput.value = generateRandomString();

    calcSeed(seedInput.value);
    fallback();
});

generateDownloadButton.addEventListener('click', () => {
    let tempCanvas = document.createElement('canvas');
    let tempCtx = tempCanvas.getContext('2d');
    tempCanvas.width = buffer.width;
    tempCanvas.height = buffer.height;

    tempCtx.fillStyle = 'white';
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

    drawMap(tempCtx, buffer, true);

    let link = document.createElement('a');
    link.href = tempCanvas.toDataURL('image/png');
    if (seed != "" && seed != 0 && seed != null) {
        link.download = `year${timeline}_seed${seed}.png`;
    } else {
        link.download = `year${timeline}.png`;
    }
    link.click();
});

// Scale map
var scaleAmount = 1.5
window.addEventListener('resize', function() {
    const canvas = document.getElementById('main');
    canvas.width = window.innerWidth / scaleAmount;
    canvas.height = window.innerWidth / scaleAmount * 9 / 16;
});
window.dispatchEvent(new Event('resize'));


// Settings Modal
document.getElementById("settings").addEventListener("click", function() {
    document.getElementById("popup").classList.toggle("hidden");
    addOverlay(); // Call function to add overlay
});
  
document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("popup").classList.add("hidden");
    removeOverlay(); // Call function to remove overlay
});
  
const links = document.querySelectorAll(".sidebar ul li a");
  
links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        // Toggle active class on sidebar links
        links.forEach(link => link.classList.remove("active"));
        this.classList.add("active");

        // Show the relevant section
        const targetSection = document.querySelector(this.getAttribute("href"));
        document.querySelectorAll(".content-section").forEach(section => section.classList.add("hidden"));
        targetSection.classList.remove("hidden");
    });
});
  
function addOverlay() {
    // Create overlay element
    const overlay = document.createElement("div");
    overlay.classList.add("overlay"); // Add class for styling
    document.body.appendChild(overlay); // Append overlay to the body
}
  
function removeOverlay() {
    const overlay = document.querySelector(".overlay");
    if (overlay) {
        overlay.parentNode.removeChild(overlay); // Remove overlay if exists
    }
}

// Toggles
var physicalMap = false;
var showNames = true;
var showNews = true;

// Checkboxes
document.getElementById('phy').addEventListener('change', function() {
    physicalMap = this.checked;
    updateCivs();
    fallback();
});
document.getElementById('show').addEventListener('change', function() {
    showNames = this.checked;
    updateCivs();
    fallback();
});
document.getElementById('news').addEventListener('change', function() {
    showNews = this.checked;
    updateCivs();
    fallback();
});
document.getElementById('jagged').addEventListener('change', function() {
    if (this.checked) {
        canvas.style.clipPath = 'polygon(3% 0, 7% 1%, 11% 0%, 16% 2%, 20% 0, 23% 2%, 28% 2%, 32% 1%, 35% 1%, 39% 3%, 41% 1%, 45% 0%, 47% 2%, 50% 2%, 53% 0, 58% 2%, 60% 2%, 63% 1%, 65% 0%, 67% 2%, 69% 2%, 73% 1%, 76% 1%, 79% 0, 82% 1%, 85% 0, 87% 1%, 89% 0, 92% 1%, 96% 0, 98% 3%, 99% 3%, 99% 6%, 100% 11%, 98% 15%, 100% 21%, 99% 28%, 100% 32%, 99% 35%, 99% 40%, 100% 43%, 99% 48%, 100% 53%, 100% 57%, 99% 60%, 100% 64%, 100% 68%, 99% 72%, 100% 75%, 100% 79%, 99% 83%, 100% 86%, 100% 90%, 99% 94%, 99% 98%, 95% 99%, 92% 99%, 89% 100%, 86% 99%, 83% 100%, 77% 99%, 72% 100%, 66% 98%, 62% 100%, 59% 99%, 54% 99%, 49% 100%, 46% 98%, 43% 100%, 40% 98%, 38% 100%, 35% 99%, 31% 100%, 28% 99%, 25% 99%, 22% 100%, 19% 99%, 16% 100%, 13% 99%, 10% 99%, 7% 100%, 4% 99%, 2% 97%, 1% 97%, 0% 94%, 1% 89%, 0% 84%, 1% 81%, 0 76%, 0 71%, 1% 66%, 0% 64%, 0% 61%, 0% 59%, 1% 54%, 0% 49%, 1% 45%, 0% 40%, 1% 37%, 0% 34%, 1% 29%, 0% 23%, 2% 20%, 1% 17%, 1% 13%, 0 10%, 1% 6%, 1% 3%)';
        canvas.style.boxShadow = '0 0 50px rgba(0, 0, 0, 0.9)';
    } else {
        canvas.style.clipPath = 'none';
        canvas.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    }
});
