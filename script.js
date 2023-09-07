var seed = 0;
var timeline = 1;
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
    if (year == -1994) {
      addCountry("MES","Mesopotamian Civilizations",year,1,2050,5);
    }
    if (year == -1720) {
      events[prevYear]["EGY"].state = 1;
    }
    if (year == -1700) {
      events[prevYear]["CHI"].name = "Shang Dynasty";
      events[prevYear]["CHI"].state = 2;
    }
    if (year == -1691) {
    }
    if (year == -1550) {
      events[prevYear]["EGY"].state = 2;
    }
    if (year == -1504) {
      events[prevYear]["EGY"].state = 3;
    }
    if (year == -1454) {
      events[prevYear]["MES"].state = 2;
    }
    if (year == -1318) {
    }
    if (year == -1100) {
      events[prevYear]["MES"].state = 3;
    }
    if (year == -845) {
      addCountry("GRE","Greek Kingdoms",year,1,750,5);
    }
    if (year == -810) {
      addCountry("CAR","Carthage",year,1,750,5);
    }
    if (year == -770) {
      addCountry("GRE","Greek Kingdoms",year,1,750,5);
    }
    if (year == -670) {
      events[prevYear]["CAR"].state = 2;
    }
    if (year == -615) {
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
    if (year == -472) {
      events[prevYear]["GRE"].state = 2;
    }
    if (year == -385) {
      addCountry("ABY","Axumite Empire",year,1,1500,5);
      events[prevYear]["GRE"].state = 3;
    }
    if (year == -341) {
      events[prevYear]["GRE"].state = 4;
    }
    if (year == -330) {
      events[prevYear]["GRE"].name = "Macedonian Empire";
      events[prevYear]["GRE"].state = 5;
    }
    if (year == -330) {
      addCountry("ROM","Roman Empire",year,1,900,6);
      addCountry("KOR","Korea",year,1,2250,5);
    }
    if (year == -319) {
      events[prevYear]["GRE"].name = "Hellenic Kingdoms";
      events[prevYear]["GRE"].state = 6;
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

    if (year == 250) {
      addCountry("JAP","Japan",year,1,3500,5);
    }
    if (year == 300) {
      addCountry("GHA","Ghana Empire",year,1,1050,5);
      addCountry("INC","Tiwanaku Empire",year,1,1200,5);
    }
    if (year == 396) {
      addCountry("AZX","Teotihuacan",year,1,1250,6);
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
    if (year == 540) {
      events[prevYear]["JAP"].state = 2;
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
    if (year == 677) {
      events[prevYear]["BYZ"].state = 3;
    }
    if (year == 690) {
      events[prevYear]["ENG"].state = 2;
    }
    if (year == 720) {
      events[prevYear]["JAP"].state = 3;
    }
    if (year == 731) {
      events[prevYear]["ISL"].state = 5;
      events[prevYear]["GTH"].state = 4;
    }
    if (year == 740) {
      addCountry("SPA","Kingdom of Spain",year,1,3250,6);
    }
    if (year == 750) {
      events[prevYear]["ISL"].name = "Abbasid Caliphate";
      events[prevYear]["ISL"].state = 6;
    }
    if (year == 757) {
      addCountry("COR","Cordoba",year,1,600,5);
      addCountry("PAP","The Papal States",year,1,2600,5);
    }
    if (year == 766) {
      events[prevYear]["BYZ"].state = 4;
    }
    if (year == 766) {
      events[prevYear]["FRK"].state = 3;
    }
    if (year == 779) {
      events[prevYear]["FRK"].state = 4;
    }
    if (year == 825) {
      events[prevYear]["SPA"].state = 2;
    }
    if (year == 843) {
      addCountry("HRE","Holy Roman Empire",year,1,1600,5);
      addCountry("FRA","France",year,1,2600,5);
      addCountry("ITA","Italian Kingdoms",year,1,2600,5);
      events[prevYear]["FRK"].strength = 0;
    }
    if (year == 850) {
      events[prevYear]["ENG"].state = 3;
    }
    if (year == 855) {
      events[prevYear]["HRE"].state = 2;
      events[prevYear]["FRA"].state = 2;
      events[prevYear]["ITA"].state = 2;
    }
    if (year == 860) {
      addCountry("RUS","Kieven Rus",year,1,3600,5);
    }
    if (year == 896) {
      addCountry("HUN","Hungary",year,1,2600,5);
    }
    if (year == 900) {
      events[prevYear]["ENG"].state = 4;
    }
    if (year == 911) {
      events[prevYear]["SPA"].state = 3;
      events[prevYear]["RUS"].state = 2;
    }
    if (year == 928) {
      events[prevYear]["ENG"].name = "England";
      events[prevYear]["ENG"].state = 5;
    }
    if (year == 1000) {
      addCountry("IRE","Irish Kingdoms",year,1,1250,6);
      addCountry("MAY","Maya",year,1,550,6);
    }
    if (year == 1018) {
      events[prevYear]["BYZ"].state = 5;
      events[prevYear]["COR"].state = 2;
      events[prevYear]["SPA"].state = 4;
    }
    if (year == 1040) {
      events[prevYear]["RUS"].state = 3;
    }
    if (year == 1100) {
      events[prevYear]["HUN"].state = 2;
    }
    if (year == 1139) {
      events[prevYear]["SPA"].state = 5;
      addCountry("POR","Kingdom of Portugal",year,1,2250,6); // Not staying?
    }
    if (year == 1155) {
      events[prevYear]["ENG"].state = 6;
    }
    if (year == 1180) {
      events[prevYear]["JAP"].state = 4;
    }
    if (year == 1205) {
      events[prevYear]["ENG"].state = 7;
      addCountry("MON","Mongol Empire",year,1,180,6);
    }
    if (year == 1210) {
      events[prevYear]["RUS"].state = 4;
    }
    if (year == 1215) {
      events[prevYear]["MON"].state = 2;
    }
    if (year == 1220) {
      events[prevYear]["MON"].state = 3;
    }
    if (year == 1230) {
      events[prevYear]["MON"].state = 4;
      events[prevYear]["SPA"].state = 6;
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
    if (year == 1273) {
      addCountry("MAL","Mali",year,1,1250,6);
    }
    if (year == 1280) {
      addCountry("SCO","Scotland",year,1,1250,6);
      events[prevYear]["ENG"].state = 8;
    }
    if (year == 1317) {
      addCountry("OTT","Ottoman Empire",year,1,1000,5);
    }
    if (year == 1334) {
      events[prevYear]["OTT"].state = 2;
    }
    if (year == 1357) {
      events[prevYear]["KOR"].state = 2;
    }
    if (year == 1372) {
      events[prevYear]["CHI"].state = 6;
    }
    if (year == 1387) {
      events[prevYear]["OTT"].state = 3;
    }
    if (year == 1440) {
      events[prevYear]["OTT"].state = 4;
    }
    if (year == 1468) {
      addCountry("SON","Songhay",year,1,1000,5);
    }
    if (year == 1474) {
      events[prevYear]["OTT"].state = 5;
    }
    if (year == 1477) {
      events[prevYear]["JAP"].state = 5;
    }
    if (year == 1492) {
      events[prevYear]["SPA"].state = 7;
    }
    if (year == 1494) {
      addCountry("SPAc","New Spain",year,1,350,6);
    }
    if (year == 1480) {
      events[prevYear]["ENG"].state = 9;
      events[prevYear]["INC"].state = 2;
      events[prevYear]["AZX"].state = 2;
    }
    if (year == 1500) {
      addCountry("BRA","Portuguese Brazil",year,1,1250,6);
    }
    if (year == 1509) {
      events[prevYear]["RUS"].state = 5;
    }
    if (year == 1513) {
      events[prevYear]["SPAc"].state = 2;
    }
    if (year == 1334) {
      events[prevYear]["OTT"].state = 6;
    }
    if (year == 1525) {
      events[prevYear]["SPAc"].state = 3;
    }
    if (year == 1533) {
      events[prevYear]["SPAc"].state = 4;
      events[prevYear]["BRA"].state = 2;
      events[prevYear]["OTT"].state = 7;
    }
    if (year == 1545) {
      events[prevYear]["ENG"].state = 10;
    }
    if (year == 1563) {
      events[prevYear]["SPAc"].state = 5;
      events[prevYear]["BRA"].state = 3;
    }
    if (year == 1571) {
      events[prevYear]["OTT"].state = 8;
    }
    if (year == 1590) {
      events[prevYear]["JAP"].state = 6;
      events[prevYear]["SPAc"].state = 6;
    }
    if (year == 1594) {
      events[prevYear]["RUS"].state = 6;
    }
    if (year == 1612) {
      addCountry("CAN","British Colonies",year,1,3250,6);
      addCountry("QUE","French Colonies",year,1,200,6);
    }
    if (year == 1637) {
      events[prevYear]["RUS"].state = 7;
    }
    if (year == 1641) {
      events[prevYear]["SPAc"].state = 7;
      events[prevYear]["BRA"].state = 4;
      addCountry("SUR","Dutch Suriname",year,1,3250,6);
      addCountry("FGU","French Guiana",year,1,3250,6);
    }
    if (year == 1647) {
      events[prevYear]["CAN"].state = 2;
      events[prevYear]["QUE"].state = 2;
    }
    if (year == 1649) {
      events[prevYear]["ENG"].name = "Great Britain";
      events[prevYear]["ENG"].state = 11;
    }
    if (year == 1684) {
      events[prevYear]["CAN"].state = 3;
      events[prevYear]["QUE"].state = 3;
    }
    if (year == 1700) {
      events[prevYear]["JAP"].state = 7;
    }
    if (year == 1762) {
      events[prevYear]["CAN"].state = 4;
      events[prevYear]["QUE"].state = 4;
    }
    if (year == 1765) {
      events[prevYear]["SPAc"].state = 8;
      events[prevYear]["BRA"].state = 5;
      events[prevYear]["SUR"].state = 2;
      events[prevYear]["FGU"].state = 2;
    }
    if (year == 1776) {
      addCountry("USA","United States of America",year,1,3250,6);
    }
    if (year == 1765) {
      events[prevYear]["RUS"].state = 8;
    }
    if (year == 1769) {
      events[prevYear]["CAN"].state = 5;
    }
    if (year == 1788) {
      addCountry("ENGa","New South Wales",year,1,3250,6);
    }
    if (year == 1792) {
      events[prevYear]["USA"].state = 2;
    }
    if (year == 1804) {
      events[prevYear]["USA"].state = 3;
      events[prevYear]["SPAc"].state = 9;
      events[prevYear]["BRA"].state = 6;
    }
    if (year == 1804) {
      events[prevYear]["SUR"].state = 3;
      events[prevYear]["FGU"].state = 3;
      addCountry("GUY","British Guyana",year,1,3250,6);
    }
    if (year == 1811) {
      addCountry("ARG","Argentina",year,1,3250,6);
      addCountry("PAR","Paraguay",year,1,3250,6);
    }
    if (year == 1819) {
      addCountry("CHL","Chile",year,1,3250,6);
      addCountry("GCO","Gran Colombia",year,1,250,6);
    }
    if (year == 1821) {
      addCountry("MEX","Mexico",year,1,2250,6);
    }
    if (year == 1822) {
      events[prevYear]["USA"].state = 4;
      events[prevYear]["BRA"].state = 7;
      addCountry("PEU","Peru",year,1,3250,6);
      addCountry("CEN","Central America",year,1,2250,6);
    }
    if (year == 1825) {
      addCountry("BOL","Bolivia",year,1,3250,6);
    }
    if (year == 1825) {
      addCountry("EQU","Equador",year,1,3250,6);
      addCountry("COL","Colombia",year,1,3250,6);
      addCountry("VEZ","Venezuela",year,1,3250,6);
      addCountry("URU","Uruguay",year,1,3250,6);
      events[prevYear]["GCO"].strength = 0;
    }
    if (year == 1828) {
      events[prevYear]["CAN"].state = 6;
    }
    if (year == 1837) {
      events[prevYear]["USA"].state = 5;
    }
    if (year == 1839) {
      events[prevYear]["CEN"].state = 2;
    }
    if (year == 1848) {
      events[prevYear]["USA"].state = 6;
    }
    if (year == 1854) {
      events[prevYear]["USA"].state = 7;
    }
    if (year == 1856) {
      events[prevYear]["JAP"].state = 9;
    }
    if (year == 1867) {
      addCountry("USAc","United States of America",year,1,2250,6);
    }
    if (year == 1870) {
      events[prevYear]["USA"].state = 8;
      events[prevYear]["ARG"].state = 2;
      events[prevYear]["CHL"].state = 2;
    }
    if (year == 1880) {
      events[prevYear]["PAR"].state = 2;
      events[prevYear]["CHL"].state = 3;
      events[prevYear]["ARG"].state = 3;
      events[prevYear]["BRA"].state = 8;

      events[prevYear]["EQU"].state = 2;
      events[prevYear]["COL"].state = 2;
      events[prevYear]["PEU"].state = 2;
    }
    if (year == 1898) {
      events[prevYear]["USAc"].state = 2;
    }
    if (year == 1900) {
      events[prevYear]["RUS"].state = 9;
    }
    if (year == 1946) {
      events[prevYear]["JAP"].state = 8;
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
  swapItems(nations,"COR","SPA");
  swapItems(nations,"POR","SPA");
  swapItems(nations,"SPAc","INC");
  swapItems(nations,"SPAc","AZX");
  swapItems(nations,"MON","ISL");
  swapItems(nations,"MON","CHI");
  swapItems(nations,"MON","PER");

  swapItems(nations,"GUY","POR");
  swapItems(nations,"SUR","POR");
  swapItems(nations,"FGU","POR");
  swapItems(nations,"CAN","USA");
  swapItems(nations,"MEX","CEN");

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
      if (timeline >= 1822 && nations[i] === "BRA") {
        img.style.filter = "hue-rotate(260deg) brightness(120%)";
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
