var seed = 0;
var timeline = 0;
var nations = [];

var events = {
  "-2023": {
    "NSE": {
      name: "Neo-Sumerian Empire",
      state: 1,
      strength: 23, // until -2000
      techecon: 2,
    },
    "EGY": {
      name: "Egyptian Middle Kingdom",
      state: 1,
      strength: 1274, // until -749
      techecon: 2,
    },
    "IRV": {
      name: "Indus Valley",
      state: 1,
      strength: 323, // until -1700
      techecon: 2,
    },
    "CHI": {
      name: "Xia Dynasty",
      state: 1,
      strength: 5323,
      techecon: 2,
    },
  }
}

// Zooming in and out
var scale = 1,
panning = false,
pointX = 0,
pointY = 0,
start = { x: 0, y: 0 },
zoom = document.getElementById("zoom");

function setTransform() {
  zoom.style.transform = "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
}

zoom.onmousedown = function (e) {
e.preventDefault();
start = { x: e.clientX - pointX, y: e.clientY - pointY };
  panning = true;
}

zoom.onmouseup = function (e) {
  panning = false;
}

zoom.onmousemove = function (e) {
  e.preventDefault();
  if (!panning) {
    return;
  }
  pointX = (e.clientX - start.x);
  pointY = (e.clientY - start.y);
  setTransform();
}
zoom.onwheel = function (e) {
  e.preventDefault();
  var xs = (e.clientX - pointX) / scale,
    ys = (e.clientY - pointY) / scale,
    delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
  (delta > 0) ? (scale *= 1.2) : (scale /= 1.2);
  pointX = e.clientX - xs * scale;
  pointY = e.clientY - ys * scale;

  if (scale > 3) {
    
    // Add a CSS class for pixelation when zoomed in
    document.getElementById("zoom").classList.add("pixelated");
    
    // Add a pixelation class to all images
    const images = document.querySelectorAll("img.above-layer");
    images.forEach((img) => {
      img.classList.add("pixelated");
    });
  } else {
    // Remove the pixelation CSS class when not zoomed in
    document.getElementById("zoom").classList.remove("pixelated");
    
    // Remove the pixelation class from all images
    const images = document.querySelectorAll("img.above-layer");
    images.forEach((img) => {
      img.classList.remove("pixelated");
    });
  }
  setTransform();
}

var deviation = 0.9;

// RNG based on seed
function seededRandom(seed) {
  let state = seed;

  return function() {
    state ^= (state << 13);
    state ^= (state >> 17);
    state ^= (state << 5);
    return ((state < 0 ? ~state + 1 : state) % 1000) / 1000; // Normalize to [0, 1)
  };
}
const rng = seededRandom(seed);

function addCountry(id,names,year,states,strengths,technecons) {
  events[year][id] = {
    name: names,
    state: states,
    strength: strengths,
    techecon: technecons,
  };
}

//////////////////////////////////
// Create events for each year //
//////////////////////////////////

function calculateEvents() {
  for (let year = -2022; year <= 2023; year ++) {
    let prevYear = year - 1;
    events[year] = {}; 

    // Events
    if (year == -2014) {
      events[prevYear]["EGY"].state = 2;
    }
    if (year == -1720) {
      events[prevYear]["EGY"].state = 1;
    }
    if (year == -1700) {
      events[prevYear]["CHI"].name = "Shang Dynasty";
      events[prevYear]["CHI"].state = 2;
    }
    if (year == -1691) {
      addCountry("HIT","Hittite Empire",year,1,750,5);
    }
    if (year == -1550) {
      events[prevYear]["EGY"].state = 2;
    }
    if (year == -1504) {
      events[prevYear]["EGY"].state = 3;
    }
    if (year == -1318) {
      addCountry("ASY","Assyian Empire",year,1,750,5);
    }
    if (year == -845) {
      addCountry("GRE","Greek Kingdoms",year,1,750,5);
    }
    if (year == -810) {
      addCountry("CAR","Carthage",year,1,750,5);
    }
    if (year == -670) {
      events[prevYear]["CAR"].state = 2;
    }
    if (year == -615) {
      addCountry("BAB","Babylonian Empire",year,1,250,5);
    }
    if (year == -589) {
      addCountry("IND","Indian Kingdoms",year,1,3250,5);
      events[prevYear]["CHI"].name = "Chinese Warring Kingdoms";
      events[prevYear]["CHI"].state = 3;
    }
    if (year == -546) {
      addCountry("PER","Achaemenid Empire",year,1,250,5);
    }
    if (year == -520) {
      events[prevYear]["PER"].state = 2;
    }
    if (year == -385) {
      addCountry("ABY","Axumite Empire",year,1,1500,5);
    }
    if (year == -330) {
      addCountry("ROM","Roman Empire",year,1,900,6);
      addCountry("ARM","Armenia",year,1,1250,5);
      addCountry("KOR","Korea",year,1,2250,5);
    }
    if (year == -292) {
      events[prevYear]["ROM"].state = 2;
    }
    if (year == -282) {
      events[prevYear]["IND"].state = 2;
      events[prevYear]["IND"].name = "Mauryan Empire";
      events[prevYear]["CHI"].state = 4;
    }
    if (year == -272) {
      events[prevYear]["ROM"].state = 3;
    }
    if (year == -222) {
      events[prevYear]["ROM"].state = 4;
      events[prevYear]["PER"].state = 4;
      events[prevYear]["PER"].name = "Sassanid Empire";
    }
    if (year == -198) {
      events[prevYear]["ROM"].state = 5;
    }
    if (year == -180) {
      events[prevYear]["IND"].state = 3;
      events[prevYear]["CHI"].state = 5;
    }
    if (year == -156) {
      events[prevYear]["ROM"].state = 6;
    }
    if (year == -136) {
      events[prevYear]["PER"].state = 3;
      events[prevYear]["PER"].strength = 800;
    }
    if (year == -122) {
      events[prevYear]["ROM"].state = 7;
    }
    if (year == -72) {
      events[prevYear]["ROM"].state = 8;
    }
    if (year == -22) {
      events[prevYear]["ROM"].state = 9;
    }
    if (year == 0) {
      events[prevYear]["ROM"].state = 10;
    }

    if (year == 300) {
      addCountry("GHA","Ghana Empire",year,1,1500,5);
      addCountry("INC","Tiwanaku Empire",year,1,2500,5);
    }
    if (year == 396) {
      addCountry("AZX","Teotihuacan",year,1,2250,6);
      addCountry("BYZ","Byzantine Empire",year,1,1250,6);
      events[prevYear]["ROM"].state = 11;
    }
    if (year == 461) {
      addCountry("GTH","Gothic Kingdoms",year,1,500,5);
    }
    if (year == 506) {
      events[prevYear]["GTH"].state = 2;
      addCountry("FRK","Francia",year,1,1500,5);
    }
    if (year == 519) {
      addCountry("ENG","Wessex",year,1,3000,5);
    }
    if (year == 550) {
      events[prevYear]["BYZ"].state = 2;
    }
    if (year == 592) {
      events[prevYear]["GTH"].state = 3;
      events[prevYear]["FRK"].state = 2;
    }
    if (year == 628) {
      addCountry("ISL","Rashidun Caliphate",year,1,1250,6);
      events[prevYear]["PER"].state = 3;
    }
    if (year == 635) {
      events[prevYear]["ISL"].state = 2;
    }
    if (year == 642) {
      events[prevYear]["ISL"].state = 3;
    }
    if (year == 662) {
      events[prevYear]["ISL"].name = "Umayyad Caliphate";
      events[prevYear]["ISL"].state = 4;
    }
    if (year == 690) {
      events[prevYear]["ENG"].state = 2;
    }
    if (year == 731) {
      events[prevYear]["ISL"].state = 5;
    }
    if (year == 750) {
      events[prevYear]["ISL"].name = "Abbasid Caliphate";
      events[prevYear]["ISL"].state = 6;
    }
    if (year == 850) {
      events[prevYear]["ENG"].state = 3;
    }
    if (year == 900) {
      events[prevYear]["ENG"].state = 4;
    }
    if (year == 928) {
      events[prevYear]["ENG"].name = "England";
      events[prevYear]["ENG"].state = 5;
    }
    if (year == 1000) {
      addCountry("IRE","Irish Kingdoms",year,1,1250,6);
    }
    if (year == 1155) {
      events[prevYear]["ENG"].state = 6;
    }
    if (year == 1205) {
      events[prevYear]["ENG"].state = 7;
      addCountry("MON","Mongol Empire",year,1,180,6);
    }
    if (year == 1215) {
      events[prevYear]["MON"].state = 2;
    }
    if (year == 1220) {
      events[prevYear]["MON"].state = 3;
    }
    if (year == 1230) {
      events[prevYear]["MON"].state = 4;
    }
    if (year == 1237) {
      events[prevYear]["MON"].state = 5;
    }
    if (year == 1242) {
      events[prevYear]["MON"].state = 6;
    }
    if (year == 1248) {
      events[prevYear]["MON"].state = 7;
    }
    if (year == 1260) {
      events[prevYear]["MON"].state = 8;
    }
    if (year == 1265) {
      events[prevYear]["MON"].state = 9;
    }
    if (year == 1280) {
      addCountry("SCO","Scotland",year,1,1250,6);
      events[prevYear]["ENG"].state = 8;
    }
    if (year == 1357) {
      events[prevYear]["KOR"].state = 2;
    }
    if (year == 1372) {
      events[prevYear]["CHI"].state = 6;
    }
    if (year == 1480) {
      events[prevYear]["ENG"].state = 9;
      events[prevYear]["INC"].state = 2;
      events[prevYear]["AZX"].state = 2;
    }
    if (year == 1545) {
      events[prevYear]["ENG"].state = 10;
    }
    if (year == 1649) {
      events[prevYear]["ENG"].name = "Great Britain";
      events[prevYear]["ENG"].state = 11;
    }
    if (year == 1776) {
      addCountry("USA","United States of America",year,1,3250,6);
    }
    if (year == 1792) {
      events[prevYear]["USA"].state = 2;
    }
    if (year == 1804) {
      events[prevYear]["USA"].state = 3;
    }
    if (year == 1822) {
      events[prevYear]["USA"].state = 4;
    }
    if (year == 1837) {
      events[prevYear]["USA"].state = 5;
    }
    if (year == 1848) {
      events[prevYear]["USA"].state = 6;
    }
    if (year == 1854) {
      events[prevYear]["USA"].state = 7;
    }
    if (year == 1870) {
      events[prevYear]["USA"].state = 8;
    }

    // Transfer nations from the previous year to the current year
    for (const nation in events[prevYear]) {
      let prevNation = events[prevYear][nation];
      let updatedStrength = prevNation.strength - 1;

      events[year][nation] = {
        name: prevNation.name,
        state: prevNation.state,
        strength: updatedStrength,
        techecon: prevNation.techecon,
      };
    }
  }
}
calculateEvents();

function isPixelTransparent(imagePath, x, y) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const image = new Image();
  image.src = imagePath;

  return new Promise((resolve, reject) => {
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;

      ctx.drawImage(image, 0, 0);
      const pixelData = ctx.getImageData(x, y, 1, 1).data;

      const isTransparent = pixelData[3] === 0;
      resolve(isTransparent);
    };

    image.onerror = () => {
      reject(new Error("Failed to load the image."));
    };
  });
}

/*   isPixelTransparent(imagePath, mouseX, mouseY)
  .then((result) => {
    if (result) {
      console.log(`Pixel (${mouseX},${mouseY}) is transparent.`);
    } else {
      console.log(`Pixel (${mouseX},${mouseY}) is not transparent.`);
    }
  })
  .catch((error) => {
    console.error(error);
  });*/
  
// Hovering Text
var hover = "";
const corner = document.getElementById('map');
const hoverText = document.querySelector('.hover-text');

corner.addEventListener('mousemove', (event) => {
  hoverText.style.left = `${event.clientX}px`;
  hoverText.style.top = `${event.clientY + 10}px`;
  
  // Hover Text
  const clickArea = document.getElementById('map');
  const mouseX = event.clientX - clickArea.getBoundingClientRect().left;
  const mouseY = event.clientY - clickArea.getBoundingClientRect().top;
  console.log("test");

  hoverText.textContent = hover;
});

corner.addEventListener('mouseenter', () => {
  hoverText.style.left = '0';
  hoverText.style.top = '0';
});

corner.addEventListener('mouseleave', () => {
  hoverText.style.left = '-9999px';
});

function swapItems(arr, name1, name2) {
  const index1 = arr.indexOf(name1);
  const index2 = arr.indexOf(name2);

  if (index1 === -1 || index2 === -1) {
    return;
  }
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

const seedInput = document.getElementById('seedInput');
const timelineInput = document.getElementById('timelineInput');
const timelineValue = document.getElementById('timelineValue');

// Display countries on the map
function updateCountries() {
  nations = [];
  
  for (const nation in events[timeline]) {
    nations.push(nation);
  }

  const imagesToDelete = document.querySelectorAll("img.above-layer");
  imagesToDelete.forEach((img) => {
    img.parentNode.removeChild(img);
  });

  swapItems(nations,"FRK","ROM");
  swapItems(nations,"GTH","ROM");
  swapItems(nations,"ISL","BYZ");
  swapItems(nations,"ISL","FRK");
  swapItems(nations,"MON","ISL");
  swapItems(nations,"MON","CHI");
  swapItems(nations,"MON","PER");

  for (let i = 0; i < nations.length; i++) {
    if (events[timeline][nations[i]].strength > 0) {
      const img = document.createElement("img");
      img.src = `images/${nations[i]}/${nations[i]+events[timeline][nations[i]].state}.png`;
      img.alt = events[timeline][nations[i]].name;
      img.classList.add("above-layer");

      // Apply a CSS filter based on the condition
      if (timeline > -321 && timeline < -180 && nations[i] === "IND") {
        img.style.filter = "hue-rotate(195deg) brightness(350%)";
      }

      // Update background images
      const backgroundImage = document.getElementById("bg");
      if (timeline > -2023) {
        backgroundImage.src = "images/-2023bg.png";
      }
      if (timeline > -1691) {
        backgroundImage.src = "images/-1691bg.png";
      }
      if (timeline > -1178) {
        backgroundImage.src = "images/-1178bg.png";
      }
      if (timeline > -52) {
        backgroundImage.src = "images/-52bg.png";
      }
      if (timeline > 1450) {
        backgroundImage.src = "images/1450bg.png";
      }

      document.getElementById("zoom").appendChild(img);
    }
  }
}
updateCountries();

// Add an event listener to display the current value of the timeline input
timelineInput.addEventListener('input', () => {
  timelineValue.textContent = timelineInput.value;
  timeline = timelineInput.value;

  updateCountries();
  //console.log(nations);
});