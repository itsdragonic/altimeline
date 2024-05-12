/* //////////////////////////////////////////////////////////////

  Altimeline by Dragonic - 2024

    Resources:
      History of the World: https://www.youtube.com/watch?v=-6Wu0Q7x5D0
      Color Filter Adjuster: https://codepen.io/Dragonic/pen/XWoaprP?editors=1000
      Color Adjuster 2: https://codepen.io/sosuke/pen/Pjoqqp?editors=0010
      Image Coordinates: https://www.programminghead.com/Projects/find-coordinates-of-image-online.html
      
      Base64 Encoder: https://www.base64-image.de/
      Base64 Decoder: https://base64.guru/converter/decode/image

  ////////////////////////////////////////////////////////////// */

const presentYear = 2024;
const oppositeYear = -presentYear;

var seed = 0;
var timeline = 1;

var eventLog = [];


// Calculate & Update
function calculateEvents() {

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

  // Loop through every year from -2024 to 2024
  for (let year = oppositeYear; year <= presentYear; year++) {
    let nextYear = year + 1;
    civs[nextYear] = {};

    // Events

    // Transfer nations from the previous year to the current year
    for (let nation in civs[year]) {
      let prevNation = civs[year][nation];
      let updatedStrength = prevNation.strength - 1;

      civs[nextYear][nation] = {
          name: prevNation.name,
          state: prevNation.state,
          strength: updatedStrength,
          techecon: prevNation.techecon,

          x: prevNation.x,
          y: prevNation.y,
          size: prevNation.size,
      };
    }
  }
}

calculateEvents();

function updateCivs() {
  let nations = [];
  
  for (const nation in civs[timeline]) {
    nations.push(nation);
  }

  for (let i = 0; i < nations.length; i++) {
    if (civs[timeline][nations[i]].strength > 0) {
      // Fetch image
      var ctx = canvas.getContext('2d');
      const img = new Image();
      const src = `${states[nations[i].toLowerCase() + civs[timeline][nations[i]].state]}`;
      img.src = src;

      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(img,0,0,canvas.width,canvas.height);
    }
  }
}
  
function stringToNumbers(inputString) {
  const numbers = [];

  for (let i = 0; i < inputString.length; i++) {
    const charCode = inputString.charCodeAt(i);
    numbers.push(charCode);
  }

  const result = parseInt(numbers.join(''));
  return result;
}
  
function isValidYearRange(input) {
  let string = input.toString();
  let inputStr = "";
  let negative = 1;
  if (string.substring(0,1) === "@") {
    if (string.substring(1,2) === "-") {
      inputStr = input.toString().substring(2,6);
      negative = -1;
    } else {
      inputStr = input.toString().substring(1,5);
    }
  }
  if (/^\d+$/.test(inputStr)) {
    const year = parseInt(inputStr, 10) * negative;
    if (year >= oppositeYear && year <= presentYear) {
      return year;
    }
  }
  return false;
}
  
function calcSeed(val) {
  seed = val;
  seedNumber = stringToNumbers(seed);
  
  for (let e in rngEvents) {
    // Generate seed-based random number (+easter egg seeds)
    if (seed == "0" || seed == "") {
      rngEvents[e] = 1;
    }
    else {
      if (isValidYearRange(seed) != "" || false) {
        rngLimit = isValidYearRange(seed);
      }
      let rng = new Math.seedrandom(seedNumber);
      rngEvents[e] = parseFloat(rng().toFixed(3));
      seedNumber = seedNumber * rng();
    }
  }
  rngLimit = oppositeYear;
  //calculateEvents();
  //updateCountries();
  //console.log(rngEvents);
}

// Seeds
const seedInput = document.getElementById('seedInput');

seedInput.addEventListener("input", function (event) {
    calcSeed(event.target.value);
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
    if (timelineValue.value == 0) {
        timelineValue.textContent = 1;
    }
    timeline = timelineInput.value;
  
    redraw();
});
redraw();