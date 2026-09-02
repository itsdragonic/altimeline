var seed = "";
var timeline = 1;
var seedNumber = 0;

var previousTime = 1;
var isLoading = false;
var goingBackwards = null;
var waittime = 2000;

// RNG Events
const impossible = 0.01,
    incrediblyUnlikely = 0.025,
    superUnlikely = 0.05,
    veryUnlikely = 0.10,
    rare = 0.15,
    unlikely = 0.20,
    uncommon = 0.35,
    atypical = 0.45,
    possible = 0.50,
    typical = 0.55,
    likely = 0.75,
    veryLikely = 0.85,
    incrediblyLikely = 0.95,
    Default = 1.0;

var loading = document.getElementById("loading");
let nations = [];
let images = [];

// Keybinds
document.addEventListener('keydown', (event) => {
    if (document.activeElement.tagName === 'INPUT' || 
        document.activeElement.tagName === 'TEXTAREA') {
        return;
    }
    
    const keyName = event.key;
    const outputElement = document.getElementById('output');

    switch (keyName) {
        case 'n':
            showNames = !showNames;
            updateCivs();
            break;
        case 'm':
            physicalMap = !physicalMap;
            updateCivs();
            break;
        case 's':
            disableSpinning = !disableSpinning;
            break;
        case 'g':
            enableGlitching = !enableGlitching;
            break;
    }
    if (event.key === ' ') {
        const direction = event.shiftKey ? -1 : 1;

        timeline = Number(timeline) + direction;
        if (timeline == 0) timeline--; // Skip year 0
        timelineValue.textContent = timeline;
        timelineInput.value = timeline;
        console.log(timeline);
        nations = [];
        images = [];

        goingBackwards = event.shiftKey;
        previousTime = Number(timeline);
        
        updateCivs();
    }
});

// Calculate & Update
function calculateEvents() {

    civs = null;
    civs = structuredClone(firstYear);
    news = null;
    news = {};

    // TODO
    Allies = ["ENG", "FRA", "RUS", "SER"];
    Axis = ["GER", "AUS", "OTT"];

    colonizeNewWorld = null;
    colonizeNewWorld = {
        "SPA": 80,
        "FRA": 30,
        "POR": 60,
        "DUT": 10,
        "SWE": 5,
        "DEN": 3,
        "CHI": 0,
        "JAP": 0,
        "USA": 0,
        "ENG": 40,
        "none": 10,
    };
    colonizeOldWorld = null;
    colonizeOldWorld = {
        "SPA": 30,
        "FRA": 50,
        "POR": 30,
        "DUT": 30,
        "BEL": 3,
        "GER": 10,
        "ITA": 0,
        "SWE": 3,
        "AUS": 3,
        "DEN": 3,
        "CHI": 0,
        "JAP": 0,
        "USA": 0,
        "ENG": 80,
        "none": 10,
    };

    for (let year = oppositeYear; year <= presentYear; year++) {
        let nextYear = year + 1;
        civs[nextYear] = {};

        // Transfer nations from the previous year to the current year
        for (let nation in civs[year]) {

            civs[nextYear][nation] = { ...civs[year][nation] }

            if (civs[nextYear][nation].strength > 0) {
                civs[nextYear][nation].techecon++;
                civs[nextYear][nation].strength--;
            }
        }

        // All of human history...
        worldEvents(year);
    }

    // News
    newsContainer.replaceChildren();
    createNewsCanvas(news);
}

async function updateCivs() {
    isLoading = true;

    loading.style.display = 'inline';
    ctx2.clearRect(0, 0, buffer.width, buffer.height);

    // Handle news display
    displayNews(timeline);

    nations = Object.keys(civs[timeline]).filter(nation => civs[timeline][nation].strength > 0).filter(nation => civs[timeline][nation].state != null);

    // Re-arrange order of nations
    rearrange(nations);

    const redrawInterval = setInterval(() => {
        redraw();
    }, 300);

    for (const nation of nations) {
        const civ = civs[timeline][nation];
        const currentCiv = states[nation.toLowerCase() + civ.state];
        const imgPromise = loadImage(`${currentCiv.img}`);
        images.push(imgPromise);
    }

    try {
        await Promise.all(images);
    } catch (error) {
        console.error('Failed to load images', error);
        loading.style.display = 'none';
        isLoading = false;
        goingBackwards = null;
        clearInterval(redrawInterval);
        return;
    }

    for (let i = 0; i < nations.length; i++) {
        const nation = nations[i];
        const civ = civs[timeline][nation];
        const currentCiv = states[nation.toLowerCase() + civ.state];
        let img = await loadImage(`${currentCiv.img}`);
        let x, y, defaultColor, showWhite;

        if (Array.isArray(civ.color) && civ.color.length === 3) {
            img = changeColor(img, civ.color);
        }

        if (Array.isArray(civ.merge) && civ.merge.length > 0) {
            if (civ.whiteLines) {
                showWhite = true;
            }

            defaultColor = civ.color;
            if (civ.color == undefined || civ.color == null || civ.color == []) {
                defaultColor = [100, 100, 100];
            }

            const images = civ.merge.map((civName) => {
                let img2 = states[civName.toLowerCase() + civs[timeline][civName].state];
                return loadImage(img2.img).then((image) => ({ image, img2 }));
            });

            // Wait for all images to load
            const loadedImages = await Promise.all(images);

            // Perform the merging operations
            loadedImages.forEach(({ image, img2 }) => {
                img = mergeCivs(img, x, y, currentCiv, defaultColor, image, img2, showWhite, 0);
                x = mergeCivs(img, x, y, currentCiv, defaultColor, image, img2, showWhite, 1);
                y = mergeCivs(img, x, y, currentCiv, defaultColor, image, img2, showWhite, 2);
            });

            // Draw the final image
            drawOutline(ctx2, img, x, y);

        } else {
            ctx2.drawImage(img, currentCiv.x, currentCiv.y);
        }
    }
    clearInterval(redrawInterval);

    // Wait time + loading wheel
    const waittime = timeline > 1600 ? 1500 : 500;
    setTimeout(() => {
        loading.style.display = 'none';
        isLoading = false;
        goingBackwards = null;
        loadBaseMaps();
        if (isGlobe) drawToGlobe();
        displayNews(timeline);
    }, waittime);
}

function calcSeed(val) {
    seed = val;
    seedNumber = stringToNumbers(seed);

    calculateEvents();
    updateCivs();
    redraw();
    // ddd124ddd124

    /*// Example usage
    let testy = false;
    const result = rngInfluence(1984,[
      [testy, -50],
    ]);
    console.log(result);*/

}

// Seeds
const seedInput = document.getElementById('seedInput');

let typingTimer;
let enableGlitching = false;
let changingDimensions = false;
const typingDelay = 400;

seedInput.addEventListener("input", function (event) {
    clearTimeout(typingTimer); // clear the previous timer

    typingTimer = setTimeout(() => {
        changingDimensions = enableGlitching ? true : false;
        calcSeed(event.target.value);
        updateCivs();
        redraw();
    }, typingDelay);

});

// Timeline
var input = document.createElement("input");

input.setAttribute("type", "range");
input.setAttribute("id", "timelineInput");
input.setAttribute("min", oppositeYear);
input.setAttribute("max", presentYear);
input.setAttribute("value", timeline);

var rangeDiv = document.querySelector(".range");
rangeDiv.appendChild(input);

timelineInput.addEventListener('input', () => {
    let year = Number(timelineInput.value);

    // Skip year 0
    if (year === 0) year = 1;

    timelineValue.textContent = year;

    changingDimensions = false;
    displayNews(year);
    
});
timelineInput.addEventListener('change', () => {
    timelineValue.textContent = timelineInput.value;
    
    // Skip year 0
    if (timelineValue.textContent == 0) {
        timelineValue.textContent = 1;
    }
    timeline = timelineInput.value;

    nations = [];
    images = [];

    goingBackwards = (Number(timelineInput.value) < previousTime) ? true : false;
    previousTime = Number(timelineInput.value);

    updateCivs();
    redraw();
});

// News
function createNewsCanvas(news) {
    Object.keys(news).forEach(key => {
        const item = news[key];

        // Step 1: Create base canvas
        const canvas = document.createElement('canvas');
        canvas.classList.add('news');
        canvas.width = 493;
        canvas.height = 315;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Step 2: Draw background image
        const bgImage = new Image();
        if (item.altHistory) {
            bgImage.src = "images/altnews.png";
        } else {
            bgImage.src = "images/worldnews.png";
        }
        bgImage.onload = function () {
            ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

            // Step 3: Add title text
            ctx.fillStyle = 'black';
            let fontSize = 40;
            ctx.font = `${fontSize}px Times`;

            // Measure and adjust the font size until the title fits within the canvas width
            let titleWidth = ctx.measureText(key).width;
            while (titleWidth > canvas.width - 40 && fontSize > 10) { // Ensure a minimum font size
                fontSize -= 2;
                ctx.font = `${fontSize}px Times`;
                titleWidth = ctx.measureText(key).width;
            }

            const titleX = (canvas.width - titleWidth) / 2;
            ctx.fillText(key, titleX, 80);

            ctx.font = '16px Times';

            // Calculate width
            const subtextWidth = ctx.measureText(item.subtext).width;
            wrapText(ctx, item.subtext, 30, 110, canvas.width - 50, 20);

            function wrapText(context, text, x, y, maxWidth, lineHeight) {
                var words = text.split(' ');
                var line = '';
                var yPos = y;

                for (var i = 0; i < words.length; i++) {
                    var testLine = line + words[i] + ' ';
                    var metrics = context.measureText(testLine);
                    var testWidth = metrics.width;
                    if (testWidth > maxWidth && i > 0) {
                        context.fillText(line, x, yPos);
                        line = words[i] + ' ';
                        yPos += lineHeight;
                    } else {
                        line = testLine;
                    }
                }
                context.fillText(line, x, yPos);
            }

            // Step 4: Add second image
            const overlayImage = new Image();
            overlayImage.src = item.image;

            overlayImage.onload = function () {
                ctx.drawImage(overlayImage, 195, 135, 210, 115);
                finalizeCanvas();
            };

            overlayImage.onerror = function () {
                //console.error(`Failed to load image: ${item.image}`);
                finalizeCanvas();
            };

            function finalizeCanvas() {
                newsContainer.appendChild(canvas);
                canvas.style.clipPath = 'var(--jagged-edges)';
                canvas.style.display = 'none';
                canvas.id = item.id;
                if (!item.major) {
                    canvas.style.width = '15%';
                }

                if (isMobile) {
                    canvas.style.width = item.major ? '45%' : '40%';
                }

                // Determine Position
                if (rng(item.id) < 0.5) {
                    canvas.style.left = '12%';
                } else {
                    canvas.style.left = '88%';
                }

                canvas.style.top = rngRange(item.id, 30, 80) + '%';

                // Special case for 0
                if (rng(item.id) == 1) {
                    if (Math.random() < 0.5) {
                        canvas.style.left = '12%';
                    } else {
                        canvas.style.left = '88%';
                    }

                    canvas.style.top = (Math.floor(Math.random() * (80 - 30 + 1)) + 30) + '%';
                }

                makeDraggable(canvas);
            }
        };
    });
}

// Shared seeds
var url = window.location.href;

seed = grabData(url, '?seed=', '?year=');
let altimeline = parseInt(grabData(url, '?year=', '?seed='));
timelineInput.value = altimeline;
if (timelineInput.value == 0) {
    timelineInput.value = 1;
}

timelineValue.textContent = timelineInput.value;
timeline = parseInt(timelineInput.value);

loadBaseMaps();
if (seed != "" || timeline != 1) {
    seedInput.value = seed;
    calcSeed(seed);
} else {
    calculateEvents();
    updateCivs();
}

// Fallback if map doesn't load
function fallback(amount = 500) {
    setTimeout(() => {
        redraw();
    }, amount);
}

// Event List

// Reference to the events container
const eventsDiv = document.getElementById("events");

// Iterate over all events
for (let id in allEvents) {
    const event = allEvents[id];

    // Create a wrapper div for each event
    const eventWrapper = document.createElement("div");
    eventWrapper.classList.add("event");

    // Add event name as a label
    const label = document.createElement("label");
    label.textContent = event.name;
    eventWrapper.appendChild(label);

    // Create input based on type
    let input;

    if (event.type === "boolean") {
        input = document.createElement("input");
        input.type = "checkbox";
        input.checked = event.value;
        input.id = id;
    } else if (event.type === "range") {
        input = document.createElement("input");
        input.type = "range";
        input.min = 0;
        input.max = 1;
        input.step = 0.01;
        input.value = event.value;

        input.style.width = "30%";
        input.style.display = "block";
        input.style.margin = "0 auto";
    }

    // Add input to wrapper
    eventWrapper.appendChild(input);
    eventsDiv.appendChild(eventWrapper);

    // Update allValues on input change
    input.addEventListener("input", () => {
        if (event.type === "boolean") {
            allValues[id] = (event.inverted ? !input.checked : input.checked) ? 1 : 0;

            // Update dependent events
            if (dependencies[id] && input.checked) {
                dependencies[id].forEach((dependentId) => {
                    allValues[dependentId] = 1; // Set dependent value to 1
                    let dependentInput = document.getElementById(dependentId);
                    if (dependentInput) {
                        dependentInput.checked = true; // Reflect in UI
                        //console.log(`Updated UI for dependent event ${dependentId}`);
                    } else {
                        //console.warn(`Dependent input with ID ${dependentId} not found!`);
                    }
                });
            }

        } else if (event.type === "range") {
            if (event.inverted) {
                allValues[id] = parseFloat(1 - Math.pow(input.value, 1 / 10));
            } else {
                allValues[id] = parseFloat(Math.pow(input.value, 2));
            }
        }

        //console.log(allValues);
        calculateEvents();
        updateCivs();
        redraw();
    });
}

const end = document.createElement("p");
eventsDiv.appendChild(end);