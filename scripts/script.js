var canvas = document.getElementById('main');
var ctx = canvas.getContext('2d');
var buffer = document.getElementById('buffer');
var ctx2 = buffer.getContext('2d');

buffer.width = 2560;
buffer.height = 1297;

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

    if (physicalMap && baseImages.map) {
        ctx.fillStyle = '#5f9eca';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(baseImages.map, 0, 0, canvas.width, canvas.height);
    }

    // Draw Map
    ctx.drawImage(buffer, 0, 0, canvas.width, canvas.height);

    if (physicalMap) {
        if (baseImages.map) {
            ctx.globalAlpha = 0.25;
            ctx.drawImage(baseImages.map, 0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = 1;
        }
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
    
            //ctx.font = (civ.size * 3 * canvas.width / buffer.width) + 'px carolingia';
            ctx.font = (civ.size * 3 * canvas.width / buffer.width) + 'px Georgia';
    
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
var lastX, lastY, dragStart, dragged;
var scaleFactor = 1.1;

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

setTimeout(() => {
    updateCivs();
}, 3000);