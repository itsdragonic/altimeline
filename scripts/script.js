var canvas = document.getElementById('main');
var ctx = canvas.getContext('2d');
var buffer = document.getElementById('buffer');
var ctx2 = buffer.getContext('2d');

buffer.width = 2560;
buffer.height = 1297;

// Toggles
var physicalMap = false;
var showNames = true;
var showNews = true;
var disableSpinning = false;

if (isGlobe) physicalMap = true;

// Zoom
var zoomAmount = 1;
var lastX, lastY, dragStart, dragged;
var scaleFactor = 1.1;

const baseImages = {
    map: null,
    ocean: null,
    world: null,
    loaded: false,
};

function loadBaseMaps() {
    if (baseImages.loaded) return Promise.resolve();

    return Promise.all([
        loadImage("images/map.png"),
        loadImage("images/ocean.png"),
        loadImage("images/world.png")
    ]).then(([map, ocean, world]) => {
        baseImages.map = map;
        baseImages.ocean = ocean;
        baseImages.world = world;
        baseImages.loaded = true;
    });
}

function drawMap(ctx, canvas, thickLines) {
    //console.log(counter);
    if (isGlobe) ctx.imageSmoothingEnabled = false;

    if (physicalMap && baseImages.map) {
        ctx.drawImage(baseImages.map, 0, 0, canvas.width, canvas.height);
    }

    // Draw Map
    ctx.drawImage(buffer, 0, 0, canvas.width, canvas.height);

    if (physicalMap) {
        /*if (baseImages.map) {
            ctx.globalAlpha = 0.25;
            ctx.drawImage(baseImages.map, 0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = 1;
        }*/
        if (baseImages.ocean) {
            ctx.drawImage(baseImages.ocean, 0, 0, canvas.width, canvas.height);
        }
    } else {
        if (baseImages.world) {
            ctx.drawImage(baseImages.world, 0, 0, canvas.width, canvas.height);
        }
    }
  
    // Draw Text
    ctx.fillStyle = 'white';
    ctx.lineWidth = zoomAmount > 4 ? 1 : zoomAmount > 2 ? 2 : 3;
    if (thickLines) {
        ctx.lineWidth = 5;
    }

    ctx.lineJoin = 'miter';
    ctx.miterLimit = 2;
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#a4ff11';
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.9)';
  
    const nations = Object.keys(civs[timeline]).filter(nation => civs[timeline][nation].strength > 0);
  
    if (showNames) {
        for (let i = nations.length - 1; i >= 0; i--) {
            const nation = nations[i];
            const civ = civs[timeline][nation];
    
            if (isGlobe) {
                ctx.font = (civ.size * 3 * canvas.width / buffer.width) + 'px Georgia';
            } else {
                ctx.font = (civ.size * 3 * canvas.width / buffer.width) + 'px carolingia';
            }
    
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

function displayNews(year) {
    const allnews = newsContainer.children;
    for (let i = 0; i < allnews.length; i++) {
        allnews[i].style.display = 'none';
    }
    Object.keys(news).forEach(key => {
        const item = news[key];
        const element = document.getElementById(item.id);
        if (element && showNews) {
            if (item.startDate <= year && year <= item.startDate + item.duration) {
                element.style.display = 'flex';
            }
        }
    });
}

// Generate Random Seed Button
const generateSeedButton = document.getElementById('randomSeed');
const generateDownloadButton = document.getElementById('downloadButton');

generateSeedButton.addEventListener('click', () => {
    seedInput.value = generateRandomString();

    calcSeed(seedInput.value);
    redraw();
    displayNews(timeline);
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
var scaleAmount = 1.5;
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

// Checkboxes
document.getElementById('phy').addEventListener('change', function() {
    physicalMap = this.checked;
    updateCivs();
    fallback();
});
document.getElementById('names').addEventListener('change', function() {
    showNames = this.checked;
    updateCivs();
    fallback();
});
document.getElementById('news').addEventListener('change', function() {
    showNews = this.checked;
    displayNews(timeline);
});
document.getElementById('jagged').addEventListener('change', function() {
    if (this.checked) {
        canvas.style.clipPath = 'var(--jagged-edges)';
        canvas.style.boxShadow = '0 0 50px rgba(0, 0, 0, 0.9)';
    } else {
        canvas.style.clipPath = 'none';
        canvas.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    }
});
document.getElementById('spin').addEventListener('change', function() {
    disableSpinning = this.checked;
});
document.getElementById('glitch').addEventListener('change', function() {
    enableGlitching = this.checked;
});