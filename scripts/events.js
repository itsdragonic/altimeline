/* //////////////////////////////////////////////////////////////

  Altimeline II
      by Dragonic - 2024

      Resources:
          History of the World: https://www.youtube.com/watch?v=-6Wu0Q7x5D0
          Image Coordinates: https://www.programminghead.com/Projects/find-coordinates-of-image-online.html
          
          Base64 Encoder: https://www.base64-image.de/
          Base64 Decoder: https://base64.guru/converter/decode/image

  ////////////////////////////////////////////////////////////// */

const presentYear = 2024;
const oppositeYear = -presentYear;

var seed = 0;
var timeline = 1;
var seedNumber = 0;
var waittime = 2000;

var worldTech = 100;

var showNames = true;
var physicalMap = false;
var showNews = true;

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

function addCountry(id,name,state,x,y,size) {
  civs[oppositeYear][id] = {
    name: name,
    state: state,
    strength: 0,
    techecon: 0,

    x: x,
    y: y,
    size: size,
  };
}

addCountry("MES","Mesopotamian Civilizations",1 ,1500,372,5);
addCountry("GEO","Colchis",1 ,1620,320,5);
addCountry("ARM","Hayasha-Azzi",1 ,1586,330,5);
addCountry("BUR","Dhanyawadi",1 ,1980,470,5);
addCountry("ROM","Roman Empire",'1a' ,1257,330,12);
addCountry("KOR","Korea",1 ,2220,350,7);

addCountry("VIE","Van Land",1 ,1985,465,5);
addCountry("LIB","Libya",1 ,1365,400,5);
addCountry("GRE","Greek Kingdoms",1 ,1400,335,5);
addCountry("CAR","Carthage",1 ,1198,345,10);
addCountry("KSH","Kushite Empire",2 ,1395,450,8);
addCountry("PER","Median Empire",1 ,1543,378,7);
addCountry("IND","Indian Kingdoms",1 ,1701,434,8);
addCountry("CHO","Pandyas",1 ,1730,530,6);
addCountry("ABY","Axum",1 ,1500,505,5);
addCountry("SPAc","New Spain",1 ,670,490,12);
addCountry("CSA","Confederate States of America",1 ,564,370,8);
addCountry("CAM","Funan",1 ,1985,555,8);
addCountry("MOC","Moche",1 ,680,640,5);
addCountry("YEM","Himyar",1 ,1560,505,6);
addCountry("CHM","Champa",1 ,2010,490,5);
addCountry("JAP","Japan",1 ,2150,350,8);
addCountry("BYZ","Eastern Roman Empire",1 ,1370,340,9);
addCountry("GHA","Ghana Empire",1 ,1160,500,5);
addCountry("INC","Tiwanaku Empire",1 ,727,702,5);
addCountry("HNN","Hunnic Empire",1 ,1366,266,7);
addCountry("BYZ","Eastern Roman Empire",1 ,1370,340,9);
addCountry("AZX","Teotihuacan",1 ,530,470,5);
addCountry("NEP","Nepal",1 ,1820,420,4);
addCountry("GTH","Gothic Kingdoms",1 ,1270,300,5);
addCountry("FRK","Francia",1 ,1270,290,5);
addCountry("ENG","Wessex",1 ,1234,260,5);
addCountry("TUR","Turkish Khaganate",2 ,1340,280,7);
addCountry("TIB","Tibet",1 ,1840,390,8);
addCountry("ISL","Rashidun Caliphate",1 ,1350,400,12);
addCountry("BUL","Bulgaria",1 ,1450,280,5);
addCountry("SVJ","Srivijaya",1 ,1890,620,7);
addCountry("CHA","Kanem Empire",1 ,1330,530,5);
addCountry("SPA","Spain",1  ,1230,325,6);
addCountry("VEN","Venice",1 ,1330,300,4);
addCountry("PAP","Papal States",1 ,1310,325,3);
addCountry("COR","Cordoba",1 ,1190,340,7);
addCountry("ALG","Tahert",1 ,1270,355,5);
addCountry("BRI","Brittany",1 ,1227,283,3);
addCountry("SER","Serbia",1 ,1375,315,3);
addCountry("NOR","Norway",1 ,1260,180,8);
addCountry("SWE","Sweden",1 ,1320,205,7);
addCountry("DEN","Denmark",2 ,1309,232,4);
addCountry("HRE","H.R.E.",1 ,1320,265,5);
addCountry("FRA","France",1 ,1255,290,5);
addCountry("ITA","",1 ,1240,290,5);
addCountry("RUS","Kieven Rus'",1 ,1411,240,14);
addCountry("OMA","Oman",1 ,1660,450,5);
addCountry("ICE","Iceland",1 ,1160,170,5);
addCountry("HUN","Hungary",1 ,1375,295,4);
addCountry("POL","Poland",2 ,1375,255,4);
addCountry("FAT","Fatamid Caliphate",1 ,1400,400,6);
addCountry("VIN","Vinland",1 ,868,250,6);
addCountry("IRE","Irish Kingdoms",1);
addCountry("MAY","Mayapan",1 ,620,480,6);
addCountry("GEN","Genoa",1 ,1300,313,4);
addCountry("MOR","Almoravids",1 ,1150,390,6);
addCountry("NAP","Sicily",1 ,1350,335,3);
addCountry("POR","Portugal",1 ,1170,340,4);
addCountry("BUN","Kitara",1 ,1420,600,5);
addCountry("CZE","Bohemia",1 ,1350,275,4);
addCountry("HAW","Hawai'i",1 ,135,474,6);
addCountry("MON","Mongol Empire",1 ,1710,290,15);
addCountry("SOM","Ajuran",1 ,1540,580,8);
addCountry("LIV","Teutonic",1 ,1390,225,4);
addCountry("LIT","Lithuania",5 ,1390,235,4);
addCountry("MAL","Mali Empire",1 ,1140,515,6);
addCountry("SCO","Scotland",1 ,1220,225,5);
addCountry("THA","Sukhothal",1 ,1890,530,5);
addCountry("OTT","Ottoman Empire",1 ,1380,350,9);
addCountry("KIL","Kilwa",1 ,1540,650,6);
addCountry("NIG","West African Kingdoms",1 ,1200,540,5);
addCountry("MAJ","Majapahit",1 ,2000,630,7);
addCountry("ROA","Wallachia",1 ,1430,300,4);
addCountry("JOL","Jolof",1 ,1105,500,6);
addCountry("CHIi","New China",1 ,2000,540,8);
addCountry("CHIa","Chinese America",1 ,300,370,9);
addCountry("HOR","Golden Horde",1 ,1490,260,10);
addCountry("KON","Kongo",1 ,1300,648,7);
addCountry("MLY","Malacca",1 ,1970,575,5);
addCountry("IRO","Iroquois",1 ,780,310,4);
addCountry("QQO","Qara Qoyunlu",1 ,1490,370,7);
addCountry("KUW","Kuwait",1 ,1570,405,4);
addCountry("AUS","Austria",1 ,1340,285,4);
addCountry("SON","Songhay",1 ,1230,495,6);
addCountry("BRA","Portuguese Brazil",1 ,906,700,8);
addCountry("KZH","Yarkent",1 ,1725,325,9);
addCountry("VEZ","Klein-Venedig","a" ,755,550,7);
addCountry("MAD","Merina",1 ,1550,740,5);
addCountry("PHI","Philippines (SP)",1 ,2130,520,7);
addCountry("PORa","Portuguese Colonies",1 ,1360,700,6);
addCountry("DUT","U.P.",1 ,1300,250,4);
addCountry("DAR","Darfur Sennar",1 ,1390,512,6);
addCountry("DENc","Greenland (Den.)",2 ,1030,195,8);
addCountry("CAN","British Colonies",1 ,830,300,9);
addCountry("QUE","French Colonies",1 ,750,270,9);
addCountry("DUTc","New Netherlands",1 ,800,340,4);
addCountry("GER","Prussia",1 ,1340,250,5);
addCountry("DUTi","Dutch East Indies",1 ,2000,630,8);
addCountry("FRAk","St. Domingue",1 ,700,480,4);
addCountry("DUTb","Dutch Brazil",1 ,900,600,9);
addCountry("PORi","Timor",1 ,2090,670,4);
addCountry("QIN","Qing Dynasty",1 ,1925,290,10);
addCountry("ENGk","British Caribbean",1);
addCountry("SWEc","New Sweden",1 ,717,338,4);
addCountry("SUR","Dutch Suriname",1 ,870,560,4);
addCountry("FGU","French Guiana",1 ,880,575,4);
addCountry("SWI","Switzerland",1 ,1305,295,2);
addCountry("DUTs","Cape Colony",1 ,1260,840,7);
addCountry("FRAa","Mauritius",1);
addCountry("AFG","Durrani Empire",1 ,1650,380,6);
addCountry("RAJ","East India Co.",1 ,1720,460,8);
addCountry("USA","United States of America",1 ,706,343,11);
addCountry("BHU","Bhutan",1 ,1860,418,4);
addCountry("PORz","Portuguese Australia",1);
addCountry("FRAz","French Australia",1);
addCountry("DUTz","Dutch Australia",1);
addCountry("ENGa","New South Wales",1 ,2170,780,9);
addCountry("RUSc","Russian America",1 ,375,170,7);
addCountry("ENGs","South Africa",1 ,1270,820,9);
addCountry("GUY","British Guiana",1 ,840,550,4);
addCountry("FLO","Spanish Florida",1);
addCountry("HAI","Haiti",1 ,740,480,4);
addCountry("SOK","Sokoto",1 ,1270,530,10);
addCountry("ARG","Rio de la Plata",1 ,793,810,7);
addCountry("PAR","Paraguay",1 ,850,770,4);
addCountry("CHL","Chile",1 ,765,790,7);
addCountry("GCO","Gran Colombia",1 ,700,584,6);
addCountry("CEN","Central America",1 ,595,520,6);
addCountry("MEX","Mexico",1 ,510,446,10);
addCountry("PEU","Peru",1 ,700,670,9);
addCountry("BOL","Bolivia",1 ,800,720,7);
addCountry("EQU","Equador",1 ,680,610,5);
addCountry("COL","Colombia",1 ,710,580,8);
addCountry("URU","Uruguay",1 ,879,830,5);
addCountry("FAK","British Falklands",1 ,940,960,4);
addCountry("LBR","Liberia",1 ,1170,560,5);
addCountry("BEL","Belgium",1);
addCountry("TEX","Texas",1 ,565,385,8);
addCountry("FRAx","French Africa",1 ,1260,365,5);
addCountry("FRAs","French Sudan",1);
addCountry("DOM","Dom. Rep.",1 ,760,490,4);
addCountry("USAo","Oregon Territory",1);
addCountry("FRAi","French Indochina",1 ,1985,500,5);
addCountry("MEXa","Mexican Empire",1 ,530,475,6);
addCountry("USAc","United States of America",1);
addCountry("GERc","German New Guinea",1 ,2270,630,10);
addCountry("GERx","German Africa",1 ,1470,660,10);
addCountry("SPAx","Spanish Sahara",1 ,980,440,8);
addCountry("ITAx","Italian Africa",1 ,1280,430,9);
addCountry("ENGx","British Colonies",1 ,1360,484,10);
addCountry("ENGn","British Colonies",1 ,1190,580,7);
addCountry("JAPc","",1 ,2060,300,5);
addCountry("CUB","Cuba",1 ,710,450,7);
addCountry("ALB","Albania",1 ,1390,332,3);
addCountry("SIB","White Army",1 ,1770,140,20);
addCountry("ENGb","British Middle East",1 ,1440,370,7);
addCountry("SYR","Syria (Fr.)",1 ,1430,360,6);
addCountry("UKR","Ukraine",1 ,1440,270,6);
addCountry("FIN","Finland",1 ,1380,185,7);
addCountry("ANT","Antarctica",1 ,1150,1100,20);
addCountry("JAPn","DPR Japan",1 ,2130,315,6);
addCountry("DRK","N. Korea",1 ,2070,330,5);
addCountry("PAK","Pakistan",1 ,1660,400,10);
addCountry("ZEA","New Zealand",1 ,2270,870,10);
addCountry("nuclear","Nuclear Armageddon",1);
addCountry("AFR","African Tribal Nations",1 ,1000,580,10);
addCountry("EU","European Federation",1 ,1250,290,5);
addCountry("EAF","East African Federation",2 ,1520,645,7);
addCountry("PNG","Papau New Guinea",1 ,2270,630,10);
addCountry("AUZ","Australia",1 ,2070,760,15);

/* 
<-- To-Do List -->
  physical map
  Hittite

<-- Cool Seeds -->
    Nova Roma: D92y465x
    Carthage: c1Vsgk9V
                1G01187i

<-- Last ID used -->
    RNG: 5
    News: 15

*/

var newsContainer = document.getElementById('newsContainer');

function changeColor(img, r, g, b) {
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
  ctx2.drawImage(canvas1, 0, 0, buffer.width, buffer.height);
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
        civs[nextYear][nation].techecon ++;
        civs[nextYear][nation].strength --;
      }
    }

    worldEvents(year);
  }

  // News
  newsContainer.replaceChildren();
  createNewsCanvas(news);
}
calculateEvents();
//console.log(civs[-291]["ROM"].state);
var loading = document.getElementById("loading");


function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function updateCivs() {
  loading.style.display = 'inline';
  ctx2.clearRect(0, 0, buffer.width, buffer.height);

  const nations = Object.keys(civs[timeline]).filter(nation => civs[timeline][nation].strength > 0);
  const images = [];
  
  // Re-arrange order of nations
  rearrange(nations);

  for (const nation of nations) {
    const civ = civs[timeline][nation];
    const imgPromise = loadImage(`${states[nation.toLowerCase() + civ.state]}`);
    images.push(imgPromise);
  }

  try {
    await Promise.all(images);
  } catch (error) {
    console.error('Failed to load images', error);
    return;
  }

  for (let i = 0; i < nations.length; i++) {
    const nation = nations[i];
    const civ = civs[timeline][nation];
    const img = await loadImage(`${states[nation.toLowerCase() + civ.state]}`);

    if (JSON.stringify(civ.color) !== "[]" && civ.color !== undefined) {
      changeColor(img, civ.color[0], civ.color[1], civ.color[2]);
    } else {
      ctx2.drawImage(img, 0, 0, buffer.width, buffer.height);
    }
  }

  // Draw Map
  const oceanImage = await loadImage(states.ocean);
  ctx2.drawImage(oceanImage, 0, 0, buffer.width, buffer.height);

  // News
  const allnews = newsContainer.children;
  for (let i = 0; i < allnews.length; i++) {
    allnews[i].style.display = 'none';
  }
  Object.keys(news).forEach(key => {
    const item = news[key];
    const element = document.getElementById(item.id);

    // Set the new 'display' property conditionally
    if (item.startDate <= timeline && timeline <= item.startDate + item.duration) {
      element.style.display = 'flex';
    }
  });

  // Wait time and loading wheel
  const waittime = timeline > 1600 ? 2000 : 1000;
  setTimeout(() => {
    loading.style.display = 'none';
  }, waittime);
}

updateCivs();

function toPlainString(num) {
  return (''+ +num).replace(/(-?)(\d*)\.?(\d*)e([+-]\d+)/,
    function(a,b,c,d,e) {
      return e < 0
        ? b + '0.' + Array(1-e-c.length).join(0) + c + d
        : b + c + d + Array(e-d.length+1).join(0);
    });
}

function stringToNumbers(inputString) {
  const numbers = [];

  for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
      // Assign ASCII value if not number
      if (!isNaN(char) && char !== ' ') {
          numbers.push(parseInt(char));
      } else {
          const charCode = inputString.charCodeAt(i);
          numbers.push(charCode);
      }
  }

  // Join the numbers array and parse it as an integer
  let result = parseInt(numbers.join(''));
  result = result.toString().substring(0, 16);

  return toPlainString(result);
}
  
function calcSeed(val) {
  seed = val;
  seedNumber = stringToNumbers(seed);

  calculateEvents();
  updateCivs();
  redraw();
  // ddd124
  //console.log(seedNumber);
}

function rng(val) {
  if (seed == "0" || seed == "" || seed == null) {
    return 1;
  } else {
    let rng = new Math.seedrandom(seedNumber + val);
    return rng();
  }
}

function rngRange(val, lowerBound, upperBound) {
  if (seed == "0" || seed == "") {
    return Math.floor((upperBound+lowerBound)/2);
  } else {
    return Math.floor(rng(val+1) * (upperBound - lowerBound + 1)) + lowerBound;
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
  
    //console.log(civs[timeline]["ROM"].techecon);
    updateCivs();
    redraw();
    fallback();
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
    bgImage.onload = function() {
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
      wrapText(ctx, item.subtext, 30, 110, canvas.width - 50, 20); // Display news subtext

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
      
      overlayImage.onload = function() {
          ctx.drawImage(overlayImage, 195, 135, 210, 115);

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
          
          canvas.style.top = rngRange(item.id,30,80) + '%';

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
      };
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

// Fallback if map doesn't load
function fallback() {
  setTimeout(() => {
    redraw();
  }, 500);
}

fallback();