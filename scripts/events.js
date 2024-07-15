var seed = 0;
var timeline = 1;
var seedNumber = 0;
var waittime = 2000;

var worldTech = 100;

// RNG Events
let impossible = 0.01,
  incrediblyUnlikely = 0.025,
  superUnlikely = 0.05,
  veryUnlikely = 0.10,
  unlikely = 0.20,
  uncommon = 0.35,
  possible = 0.50,
  likely = 0.75,
  veryLikely = 0.90,
  Default = 1.0;

/* 
<-- To-Do List -->
  australia bug

<-- Band-aids over underlying issues -->
  *Handle Overlapping and Overwhelming timelines*

<-- Game To-Do's -->
  Arabia & Persia in 1000s
  Sardinia/Savoy/Piedmont
  australia antipode
  oregon joint occupation

<-- Cool Seeds -->
    Nova Roma:  
    Carthage:   
    No Greece:  

    WTF: 7n35545u

<-- Last ID used -->
    RNG: 86
    News: 56

<-- Region Theory -->
  Beginning: Regular year-based increments
  Transition to Modern: more conditional based
  - Use counters as they build on each other
  - As world becomes more interconnected, just use conditionals
    that will be fleshed out in the World Events

<-- Player Interactive Ideas -->
  Ultimate goal: to make fiddling with rng values as fun and realistic as possible.

  A full run through a timeline would be called a 'campaign'
  Play as a certain region
   - Decisions are panels with buttons for different options
   - Battles would be decided with dice

*/

var newsContainer = document.getElementById('newsContainer');

function changeColor(img, id, r, g, b) {
  const canvas1 = document.createElement('canvas');
  const ctx1 = canvas1.getContext('2d');
  canvas1.width = img.width;
  canvas1.height = img.height;

  ctx1.drawImage(img, 0, 0);

  // Get image data
  const imageData = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
  const data = imageData.data;

  // Color to change
  const specificColor = { r: r, g: g, b: b, a: 255 };

  // Iterate through each pixel and replace
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];

    if (!((r === 0 && g === 0 && b === 0) || (r === 255 && g === 255 && b === 255) || a === 0)) {
      data[i] = specificColor.r;
      data[i + 1] = specificColor.g;
      data[i + 2] = specificColor.b;
      data[i + 3] = specificColor.a;
    }
  }

  ctx1.putImageData(imageData, 0, 0);
  ctx2.drawImage(canvas1, id.x, id.y);
}

// Calculate & Update
function calculateEvents() {

  news = {};
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

    // All human history...
    worldEvents(year);
  }

  // News
  newsContainer.replaceChildren();
  createNewsCanvas(news);
}
calculateEvents();

var loading = document.getElementById("loading");

async function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null); // Resolve with null if the image fails to load
    img.src = src;
  });
}

let nations = [];
let images = [];

async function updateCivs() {
  loading.style.display = 'inline';
  ctx2.clearRect(0, 0, buffer.width, buffer.height);

  // Handle news display
  const allnews = newsContainer.children;
  for (let i = 0; i < allnews.length; i++) {
    allnews[i].style.display = 'none';
  }
  Object.keys(news).forEach(key => {
    const item = news[key];
    const element = document.getElementById(item.id);
    if (element && showNews) {
      if (item.startDate <= timeline && timeline <= item.startDate + item.duration) {
        element.style.display = 'flex';
      }
    }
  });

  nations = Object.keys(civs[timeline]).filter(nation => civs[timeline][nation].strength > 0).filter(nation => civs[timeline][nation].state != null);

  // Re-arrange order of nations
  rearrange(nations);

  const redrawInterval = setInterval(() => {
    redraw();
  }, 100);

  for (const nation of nations) {
    const civ = civs[timeline][nation];
    const currentCiv = states[nation.toLowerCase() + civ.state];
    const imgPromise = loadImage(`${currentCiv.img}`);
    images.push(imgPromise);
  }

  try {
    await Promise.all(images);
  } catch (error) {
    //console.error('Failed to load images', error);
    loading.style.display = 'none';
    clearInterval(redrawInterval);
    return;
  }

  for (let i = 0; i < nations.length; i++) {
    const nation = nations[i];
    const civ = civs[timeline][nation];
    const currentCiv = states[nation.toLowerCase() + civ.state];
    const img = await loadImage(`${currentCiv.img}`);

    if (Array.isArray(civ.color) && civ.color.length === 3) {
      changeColor(img, currentCiv, civ.color[0], civ.color[1], civ.color[2]);
    } else {
      ctx2.drawImage(img, currentCiv.x, currentCiv.y);
    }
  }
  clearInterval(redrawInterval);

  // Wait time + loading wheel
  const waittime = timeline > 1600 ? 2000 : 500;
  setTimeout(() => {
    loading.style.display = 'none';
  }, waittime);
}
updateCivs();

String.prototype.hashCode = function() {
  var hash = 0,
    i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

function stringToNumbers(inputString) {
  // Check if the input is a number
  if (!isNaN(inputString)) {
    return Number(inputString);
  }

  // If the input is a string, compute its hash code
  return inputString.hashCode();
}

function calcSeed(val) {
  seed = val;
  seedNumber = stringToNumbers(seed);

  calculateEvents();
  updateCivs();
  redraw();
  // ddd124

  /*// Example usage
  let testy = false;
  const result = rngInfluence(1984,[
    [testy, -50],
  ]);
  console.log(result);*/

}

function rng(val) {
  if (val == 320) { // for testing
    return 0;
  } else if (seed == "0" || seed == "" || seed == null) {
    return 1;
  } else if (seed == "test" || seed == "insanity") {
    return 0;
  } else {
    let rng = new Math.seedrandom(seedNumber + val);
    return rng();
  }
}

function rngRange(val, lowerBound, upperBound) {
  if (seed == "0" || seed == "") {
    return Math.ceil((upperBound + lowerBound) / 2);
  } else {
    return Math.ceil(rng(val + 1) * (upperBound - lowerBound + 1)) + lowerBound;
  }
}

function rngInfluence(val, normalVal, conditionals,) {
  if (seed == "0" || seed == "") {
      return normalVal;
  } else {
    let newValue = normalVal;

    conditionals.forEach(condition => {
        const [name, weight] = condition;
        if (name === true) {
          newValue -= rngRange(rng(val),0,2*weight);
        }
    });

    return newValue;
  }
}

function frontItem(array, phraseToMove) {
  const index = array.indexOf(phraseToMove);

  if (index !== -1) {
    array.splice(index, 1);
    array.push(phraseToMove);
  }
}

function endItem(arr, phrase) {
  const index = arr.indexOf(phrase);

  if (index !== -1) {
    arr.splice(index, 1);
    arr.unshift(phrase);
  }
  return arr;
}

function grabData(url,val1,val2) {
  if (url.includes(val1)) {
    let foo = url.split(val1);

    let foo1 = foo[1];
    foo2 = foo1.split(val2);

    return foo2[0]
  } else return 0;
}

// Seeds
const seedInput = document.getElementById('seedInput');

seedInput.addEventListener("input", function (event) {
  calcSeed(event.target.value);

  fallback();
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
  timelineValue.textContent = timelineInput.value;
  // Skip year 0
  if (timelineValue.textContent == 0) {
    timelineValue.textContent = 1;
  }
  timeline = timelineInput.value;

  nations = [];
  images = [];

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
        canvas.style.display = 'none';
        canvas.id = item.id;
        if (!item.major) {
          canvas.style.width = '15%';
        }

        // Determine Position
        if (rng(item.id) < 0.5) {
          canvas.style.left = '12%';
        } else {
          canvas.style.left = '88%';
        }

        canvas.style.top = rngRange(item.id, 30, 80) + '%';

        // Special case for 0
        if (seed == 0 || seed == "") {
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

function makeDraggable(element) {
  let isDragging = false;
  let startX, startY, offsetX, offsetY;

  element.addEventListener('mousedown', startDrag);
  element.addEventListener('touchstart', startDrag);

  document.addEventListener('mouseup', endDrag);
  document.addEventListener('touchend', endDrag);

  function startDrag(event) {
    event.preventDefault();
    isDragging = true;
    if (event.type === 'mousedown') {
      startX = event.clientX;
      startY = event.clientY;
    } else if (event.type === 'touchstart') {
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
    }
    offsetX = element.offsetLeft - startX;
    offsetY = element.offsetTop - startY;
    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag);
    element.style.cursor = 'grabbing';
  }

  function endDrag() {
    isDragging = false;
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('touchmove', drag);
    element.style.cursor = 'pointer';
  }

  function drag(event) {
    if (!isDragging) return;
    event.preventDefault();
    let x, y;
    if (event.type === 'mousemove') {
      x = event.clientX + offsetX;
      y = event.clientY + offsetY;
    } else if (event.type === 'touchmove') {
      x = event.touches[0].clientX + offsetX;
      y = event.touches[0].clientY + offsetY;
    }
    element.style.left = x + 'px';
    element.style.top = y + 'px';
  }
}

// Shared seeds
var url = window.location.href;

seed = grabData(url,'?seed=','?year=');
let altimeline = parseInt(grabData(url,'?year=','?seed='));
timelineInput.value = altimeline;
if (timelineInput.value == 0) {
  timelineInput.value = 1;
}
if (seed == 0) {
  seed = "";
} else {
  calcSeed(seed);
}
timelineValue.textContent = timelineInput.value;
timeline = parseInt(timelineInput.value);
seedInput.value = seed;
updateCivs();

// Fallback if map doesn't load
function fallback() {
  setTimeout(() => {
    redraw();
  }, 500);
}
