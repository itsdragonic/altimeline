const presentYear = 2024;
const oppositeYear = -presentYear;
var civs = {};

civs[oppositeYear] = {
  "BG": {
    name: "background civs",
    state: 1,
    strength: 9999,
  },
  "EGY": {
    // civ info
    name: "Egyptian Middle Kingdom",
    state: 1,
    strength: 1574, // until -749
    techecon: 2,

    // text position info
    x: 1330,
    y: 430,
    size: 8,
  },
  "ISR": {
    name: "Canaan",
    state: 1,
    strength: 525,
    techecon: 2,

    x: 1470,
    y: 390,
    size: 4,
  },
  "NSE": {
    name: "Neo-Sumerian Empire",
    state: 1,
    strength: 19, // until -2000
    techecon: 2,

    x: 1477,
    y: 367,
    size: 5,
  },
  "IRV": {
    name: "Indus Valley",
    state: 1,
    strength: 323, // until -1700
    techecon: 2,

    x: 1682,
    y: 443,
    size: 5,
  },
  "CHI": {
    name: "Xia Dynasty",
    state: 1,
    strength: 5323, // until modern-day
    techecon: 2,

    x: 1930,
    y: 380,
    size: 10,
  },
  "lakes": {
    name: "Lakes",
    state: 1,
    strength: 9999,
    techecon: 0,
  },
  "conditions": {
    constantinopleSurvives: true,
    usa_exists: true,
    pax_francia: false,
  },
}

var colonizeNewWorld = {
  "ENG": 40,
  "SPA": 80,
  "FRA": 30,
  "POR": 60,
  "DUT": 10,
  "SWE": 5,
  "CHI": 0,
  "JAP": 0,
  "USA": 0,
  "none": 0,
};
var colonizeOldWorld = {
  "ENG": 80,
  "SPA": 30,
  "FRA": 50,
  "POR": 30,
  "DUT": 30,
  "CHI": 0,
  "JAP": 0,
  "USA": 0,
  "none": 10,
};

function colonizingPercentage(rng,array,bias,biasAmount,canBeFree) {
  // Create an array to hold the cumulative weights
  let cumulativeWeights = [];
  let totalWeight = 0;
  let colonizers = array;
  if (!canBeFree) {
    colonizers["none"] = 0;
  }

  if (seed == "0" || seed == "" || seed == null) {
    return bias;
  }

  // Calculate the cumulative weights
  for (var key in colonizers) {
    totalWeight += colonizers[key];
    if (colonizers[key] == bias) {
      totalWeight += biasAmount;
    }
    cumulativeWeights.push({ key: key, weight: totalWeight });
  }

  // Generate a random number between 0 and the total weight
  var random = rng * totalWeight;

  // Find the key that corresponds to the random number
  for (var i = 0; i < cumulativeWeights.length; i++) {
    if (random < cumulativeWeights[i].weight) {
      return cumulativeWeights[i].key;
    }
  }
}

function owner(civ,id,color,name,name2,nameFirst) {
  if (civ[id].owner == "none") {
    civ[id].name = name;
    civ[id].color = color;
  } else if (civ[id].owner != null) {
    if (nameFirst) {
      civ[id].name = civ[civ[id].owner].adjective + " " + name2;
    } else {
      civ[id].name = `${name2} ( ${civ[civ[id].owner].adjective.slice(0,2)}. )`;
    }
    civ[id].color = civ[civ[id].owner].colonizationColor;
  }
}

function newLand(civ,nation) {
  if (civ[nation].owner != null) {
    if (civ[civ[nation].owner].defaultname != null) {
      civ[nation].name = `New ${civ[civ[nation].owner].defaultname}`;
    } else {
      civ[nation].name = `New ${civ[civ[nation].owner].name}`;
    }
  }
}

// Alliances
var Allies = ["ENG","FRA","RUS","SER"];

var Axis = ["GER","AUS","BUL","OTT"];

function joinAlliance(nation, alliance) {
  let otherAlliance = Allies;
  if (alliance == Allies) {
    otherAlliance = Axis;
  }

  otherAlliance.remove(nation);
  alliance.remove(nation);
  alliance.append(nation);
}

function joinSameAlliance(nation, joinNation) {
  if (Allies.includes(joinNation)) {
    joinAlliance(nation, Allies);
  }
  if (Axis.includes(joinNation)) {
    joinAlliance(nation, Axis);
  }
}

function currentAlliance(nation) {
  if (Allies.includes(nation)) {
    return Allies;
  }
  if (Axis.includes(nation)) {
    return Axis;
  }
}

function addCountry(id, name, state, x, y, size) {
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

addCountry("BER", "Berbers", null, 1255, 385, 5);

// Civilizations
addCountry("MES", "Assyria / Babylon", 1, 1500, 372, 5);
addCountry("GEO", "Colchis", 1, 1520, 315, 5);
addCountry("ARM", "Hayasha-Azzi", 1, 1486, 325, 5);
addCountry("BUR", "Dhanyawadi", 1, 1900, 490, 5);
addCountry("ROM", "Roman Empire", '1a', 1257, 330, 6);
addCountry("KOR", "Jin", 2, 2115, 375, 7);
addCountry("DRK", "Gojoseon", 2, 2080, 330, 5);

addCountry("MON", "Xiongnu", 1, 1890, 290, 15);
addCountry("HIT", "Hittites", 1, 1470, 343, 5);

addCountry("VIE", "Van Land", 1, 1985, 480, 5);
addCountry("LIB", "Libya", 1, 1365, 400, 5);
addCountry("GRE", "Greek Kingdoms", 1, 1400, 335, 5);
addCountry("CAR", "Carthage", 1, 1205, 345, 10);
addCountry("KSH", "Kushite Empire", 2, 1395, 460, 8);
addCountry("PER", "Median Empire", 1, 1543, 378, 7);
addCountry("IND", "Indian Kingdoms", 1, 1710, 454, 8);
addCountry("CHO", "Pandyas", 1, 1780, 560, 6);
addCountry("ABY", "Axum", 1, 1500, 530, 6);
addCountry("SPAc", "New Spain", 1, 670, 490, 12);
addCountry("CSA", "Confederate States of America", 1, 480, 390, 8);
addCountry("CAM", "Funan", 1, 1970, 555, 8);
addCountry("MOC", "Moche", 1, 640, 700, 6);
addCountry("YEM", "Himyar", 1, 1560, 530, 6);
addCountry("CHM", "Champa", 1, 2010, 540, 5);
addCountry("JAP", "Yamato", 1, 2185, 380, 8);
addCountry("BYZ", "Eastern Roman Empire", 1, 1370, 340, 9);
addCountry("GHA", "Ghana Empire", 1, 1145, 530, 5);
addCountry("INC", "Tiwanaku Empire", 1, 710, 780, 6);
addCountry("HNN", "Hunnic Empire", 1, 1375, 266, 7);
addCountry("AZX", "Teotihuacan", 1, 500, 500, 5);
addCountry("NEP", "Nepal", 1, 1845, 430, 4);

addCountry("GTH", "Gothic Kingdoms", 1, 1270, 300, 5);
addCountry("FRK", "Gallic Empire", 1, 1245, 260, 7);
addCountry("AQU", "Aquitaine", 1, 1235, 295, 5);
addCountry("ENG", "Wessex", 1, 1210, 250, 5);
addCountry("TUR", "Turkish Khaganate", 2, 1340, 280, 7);
addCountry("TIB", "Tibet", 1, 1860, 410, 8);
addCountry("ISL", "Rashidun Caliphate", 1, 1360, 410, 11);
addCountry("BUL", "Bulgaria", 1, 1450, 280, 5);
addCountry("SVJ", "Srivijaya", 1, 1930, 670, 8);
addCountry("CHA", "Kanem Empire", 1, 1310, 540, 5);
addCountry("SPA", "Asturias", 1, 1200, 310, 5);
addCountry("COR", "Visigoths", 0, 1190, 340, 7);
addCountry("ARA", "Aragon", 2, 1250, 320, 4);
addCountry("VEN", "Venice", 1, 1330, 290, 4);
addCountry("PAP", "Papal States", 1, 1315, 305, 3);
addCountry("ALG", "Tahert", 1, 1250, 365, 5);
addCountry("BRI", "Brittany", 1, 1227, 265, 3);
addCountry("SER", "Serbia", 1, 1375, 305, 3);
addCountry("NOR", "Norway", 1, 1260, 170, 8);
addCountry("SWE", "Sweden", 1, 1320, 188, 7);
addCountry("DEN", "Denmark", 2, 1309, 210, 4);

addCountry("HRE", "H.R.E.", 1, 1305, 250, 6);
addCountry("FRA", "France", 1, 1250, 280, 6);
addCountry("ITA", "", 1, 1240, 290, 5);
addCountry("RUS", "Kieven Rus'", 1, 1411, 240, 14);
addCountry("OMA", "Oman", 1, 1660, 470, 6);
addCountry("ICE", "Iceland", 1, 1145, 143, 5);
addCountry("HUN", "Hungary", 1, 1370, 275, 5);
addCountry("POL", "Poland", 2, 1375, 245, 4);
addCountry("FAT", "Fatamid Caliphate", 1, 1390, 400, 6);
addCountry("VIN", "Vinland", 1, 868, 250, 6);
addCountry("IRE", "Irish Kingdoms", 1);
addCountry("MAY", "Mayapan", 1, 570, 500, 6);
addCountry("GEN", "Genoa", 1, 1300, 313, 4);
addCountry("MOR", "Almoravids", 1, 1150, 390, 6);

addCountry("NAP", "Sicily", 1, 1350, 320, 3.5);
addCountry("POR", "Portugal", 1, 1150, 340, 4);
addCountry("BUN", "Kitara", 1, 1425, 650, 5);
addCountry("CZE", "Bohemia", 1, 1350, 255, 4);
addCountry("HAW", "Hawai'i", 1, 130, 485, 6);
addCountry("SOM", "Ajuran", 1, 1540, 620, 8);
addCountry("LIV", "Teutonic", 1, 1390, 200, 4);
addCountry("LIT", "Lithuania", 5, 1390, 215, 4);
addCountry("MAL", "Mali Empire", 1, 1140, 545, 6);
addCountry("SCO", "Scotland", 1, 1215, 205, 5);
addCountry("THA", "Sukhothal", 1, 1940, 530, 5);

addCountry("OTT", "Ottoman Empire", 1, 1380, 345, 9);
addCountry("KIL", "Kilwa", 1, 1545, 720, 6);
addCountry("NIG", "West African Kingdoms", 1, 1220, 585, 5);
addCountry("ZEA", "Maori", 1, 2350, 960, 10);
addCountry("MAJ", "Kediri", 1, 2050, 710, 7);
addCountry("ROA", "Wallachia", 1, 1410, 290, 4);
addCountry("JOL", "Jolof", 1, 1105, 535, 6);
addCountry("CHIi", "New China", 1, 2000, 540, 8); // *
addCountry("CHIa", "Chinese America", 1, 300, 370, 9); // *
addCountry("HOR", "Golden Horde", 1, 1490, 260, 10);
addCountry("KON", "Kongo", 1, 1325, 715, 7);
addCountry("MLY", "Malacca", 1, 1970, 630, 5);
addCountry("IRO", "Iroquois", 1, 755, 305, 4);
addCountry("QQO", "Qara Qoyunlu", 1, 1520, 360, 7);
addCountry("KUW", "Kuwait", 1, 1575, 415, 4);
addCountry("AUS", "Austria", 1, 1320, 275, 4);
addCountry("SON", "Songhay", 1, 1200, 530, 8);
addCountry("BRA", "Portuguese Brazil", 1, 906, 700, 8);

addCountry("KZH", "Yarkent", 1, 1735, 340, 9);
addCountry("VEZ", "Klein-Venedig", "a", 690, 580, 7);
addCountry("MAD", "Merina", 1, 1570, 790, 5);
addCountry("PHI", "Philippines ( SP )", 1, 2130, 555, 7);
addCountry("PORa", "Portuguese Colonies", 1, 1345, 775, 7);
addCountry("DUT", "U.P.", 1, 1290, 233, 4);
addCountry("DAR", "Darfur Sennar", 1, 1380, 540, 6);

addCountry("DENc", "Greenland ( Den. )", 2, 1000, 160, 8);
addCountry("CAN", "British Colonies", 1, 810, 290, 9);
addCountry("QUE", "French Colonies", 1, 750, 270, 9);
addCountry("DUTc", "New Netherlands", 1, 760, 330, 4);
addCountry("GER", "Prussia", 1, 1340, 230, 5);
addCountry("DUTi", "Dutch East Indies", 1, 2000, 680, 9);
addCountry("FRAk", "St. Domingue", 1, 700, 505, 4);
addCountry("DUTb", "Dutch Brazil", 1, 900, 680, 9);
addCountry("PORi", "Timor", 1, 2170, 725, 4);
addCountry("QIN", "Qing Dynasty", 1, 1915, 290, 12);
addCountry("ENGk", "British Caribbean", 1);
addCountry("SWEc", "New Sweden", 1, 735, 343, 4);
addCountry("SUR", "Suriname", 1, 835, 595, 4);
addCountry("FGU", "French Guiana", 1, 860, 605, 4);
addCountry("SWI", "Switzerland", 1, 1310, 280, 2);
addCountry("DUTs", "Cape Colony", 1, 1280, 915, 7);

addCountry("FRAa", "Mauritius", 1);
addCountry("AFG", "Durrani Empire", 1, 1680, 390, 6);
addCountry("RAJ", "East India Co.", 1, 1720, 480, 8);
addCountry("USA", "United States of America", 1, 706, 343, 11);
addCountry("BHU", "Bhutan", 1, 1885, 430, 4);
addCountry("PORz", "Portuguese Australia", 1);
addCountry("FRAz", "French Australia", 1);
addCountry("DUTz", "Dutch Australia", 1);
addCountry("ENGa", "Pacific Islands", 1, 2170, 860, 9);
addCountry("RUSc", "Russian America", 1, 360, 180, 7);
addCountry("ENGs", "South Africa", 1, 1270, 910, 9);

addCountry("GUY", "British Guiana", 1, 820, 585, 4);
addCountry("FLO", "Spanish Florida", 1);
addCountry("HAI", "Haiti", 1, 710, 500, 4);
addCountry("SOK", "Sokoto", 1, 1270, 565, 10);
addCountry("ARG", "Rio de la Plata", 1, 762, 885, 8);
addCountry("PAR", "Paraguay", 1, 830, 845, 4);
addCountry("CHL", "Chile", 1, 740, 910, 7);
addCountry("GCO", "Gran Colombia", 1, 660, 610, 7);
addCountry("CEN", "Central America", 1, 570, 560, 6);
addCountry("MEX", "Mexico", 1, 480, 470, 10);
addCountry("PEU", "Peru", 1, 678, 755, 10);
addCountry("BOL", "Bolivia", 1, 765, 795, 7);
addCountry("EQU", "Equador", 1, 660, 665, 5.5);
addCountry("COL", "Colombia", 1, 670, 630, 8);
addCountry("URU", "Uruguay", 1, 854, 912, 5);
addCountry("FAK", "Falklands", 1, 900, 1070, 4);
addCountry("LBR", "Liberia", 1, 1145, 605, 5);
addCountry("BEL", "Bel.", 1, 1286, 249, 4);
addCountry("TEX", "Texan Rebels", 1, 545, 390, 8);
addCountry("AUZ", "Australia", 1, 2120, 850, 15);
addCountry("FRAx", "French Africa", 1, 1250, 365, 5);
addCountry("FRAs", "French Sudan", 1);
addCountry("DOM", "Dom. Rep.", 1, 745, 505, 4);
addCountry("USAo", "Oregon Territory", 1);
addCountry("FRAi", "Indochina", 1, 1985, 500, 5); //fix
addCountry("MEXa", "Mexican Empire ( Fr. )", 1, 520, 490, 6);
addCountry("PNG", "Papau New Guinea", 1, 2340, 725, 10);
addCountry("GERc", "New Guinea", 1, 2300, 688, 10);
addCountry("GERx", "German Africa", 1, 1470, 720, 10);
addCountry("SPAx", "Spanish Sahara", 1, 980, 445, 8);
addCountry("ITAx", "Italian Africa", 1, 1290, 450, 9);
addCountry("ENGx", "British Colonies", 1, 1360, 484, 10);
addCountry("ENGn", "British Colonies", 1, 1200, 580, 7);

addCountry("JAPc", "", 1, 2060, 300, 5);
addCountry("CUB", "Cuba ( US )", 1, 680, 480, 7);
addCountry("ALB", "Albania", 1, 1390, 325, 3);
addCountry("SIB", "White Army", 1, 1770, 140, 20);
addCountry("ENGb", "British Middle East", 1, 1440, 370, 7);
addCountry("SYR", "Syria", 1, 1440, 375, 6);
addCountry("UKR", "Ukraine", "a", 1445, 260, 6);
addCountry("FIN", "Finland", 1, 1380, 160, 7);
addCountry("ANT", "Antarctica", 1, 1155, 1260, 20);
addCountry("JAPn", "DPR Japan", 1, 2130, 325, 6);
addCountry("PAK", "Pakistan", 1, 1670, 430, 10);
addCountry("nuclear", "Nuclear Armageddon", 1);
addCountry("AFR", "African Nation States", 1, 1000, 600, 10);
addCountry("EU", "European Federation", 1, 1250, 350, 5);
addCountry("EAF", "East African Federation", 2, 1520, 675, 7);

// News
var news = {
  /* Example News
  "Rome vs. Carthage": {
      subtext: "Rome defeats Carthage!",
      image: "https://www.worldhistory.org/img/c/p/360x202/2171.jpg",
      altHistory: false,
      id: 1,
      startDate: -271,
      duration: 10,
      major: true,
  }*/
}
function worldNews(title, subtext, image, altHistory, id, startDate, duration, major) {
  news[title] = {
    subtext: subtext,
    image: image,
    altHistory: altHistory,
    id: id,
    startDate: startDate,
    duration: duration,
    major: major,
  };
}

function worldEvents(year) {
  let nextYear = year + 1;
  let civ = civs[nextYear];
  c = civ["conditions"];

  // Backgground civs
  if (worldTech >= 500) {
    civ["BG"].state = 5;
  } else if (worldTech >= 400) {
    civ["BG"].state = 4;
  } else if (worldTech >= 300) {
    civ["BG"].state = 3;
  } else if (worldTech >= 200) {
    civ["BG"].state = 2;
  } else {
    civ["BG"].state = 1;
  }

  // Lakes
  if (nextYear == -1520) {
    civ["lakes"].state = 2;
  }

  // Load Regions
  regions(year);

  /* _________________________________
   / \                                \.
  |   |                               |.
   \_ |    -=- WORLD EVENTS -=-       |.
      |                               |.
      |  Major Alternate timelines:   |.
      |      Greece conquered         |.
      |      Carthage Wins            |.
      |      Nova Roma                |.
      |                               |.
      |      Rome Survives            |.
      |      Battle of Tours          |.
      |                               |.
      |                               |.
      |                               |.
      |                               |.
      |                               |.
      |                               |.
      |                               |.
      |                               |.
      |   ____________________________|___
      |  /.                              /.
      \_/______________________________*/

  if (nextYear == rngRange(rng(18), -1701, -1681)) {
    worldTech = 200;
  }
  if (nextYear == -1178) {
    worldTech = 300;
  }
  if (nextYear == -52) {
    worldTech = 400;
  }
  if (nextYear == 1450) {
    worldTech = 500;
  }

  // Bronze Age
  worldNews("Bronze Age Collapse...",
            "Major cities have been destroyed, whole civilizations have fallen, diplomatic and trade relations are severed, and even writing systems have vanished.",
            "https://cdn.thecollector.com/wp-content/uploads/2021/07/fall-of-troy-bronze-age-collapse.jpg",
            false, 7, rngRange(rng(5), -1200, -1100), 35, true);

  // Rome Colonizes America
  if (rng(2) <= superUnlikely && civ["ROM"].strong) {
    if (nextYear == rngRange(rng(19), -44, 100)) {
      civ["ROM"].america = true;
      civ["ROM"].yearsColonizing = 0;
    }
  }

  /*
   *   ~ Year of Our Lord (A.D.) ~
   */

  // Nuclear Fallout
  //if (nextYear == 1963) {c.nuclear = true;}
  if (c.yearsNuclear == null) {
    c.yearsNuclear = 0;
  }
  if (c.nuclear) {
    c.yearsNuclear ++;
  }
  if (c.yearsNuclear == 1) {
    if (0 <= veryUnlikely) {
      civ["nuclear"].strength += 3000;
      civ["nuclear"].state = 3;
      civ["FRAx"].name = "";
      
      const countriesNuked = [
        "USA", "RUS", "CHI", "ENG", "FRA", "GER", "BUL", "ROA", "GRE", "ITA", 
        "DUT", "BEL", "SPA", "POR", "ROM", "GEO", "MON", "JAP", "KOR", "DRK", 
        "IRE", "DEN", "NOR", "SWE", "FIN", "SWI", "AUS", "HUN", "SER", "OTT", 
        "SYR", "LIV", "LIT", "POL", "ALB", "CZE", "ANT", "ISL", "EGY", "ALG",
        "MOR", "LIB", "ISR", "PER", "MES", "OMA", "YEM", "QIN", "SPAx", "ENGb",
      ];
      countriesNuked.forEach(country => {
        civ[country].strength = 0;
      }); 

    } else {
      civ["nuclear"].strength += 3000;
    }
  }
  if (c.yearsNuclear == rngRange(rng(23), 1, 8)) {
    if (civ["nuclear"].state == 3) {
      civ["nuclear"].state = 2;
    }
  }
  if (c.yearsNuclear == rngRange(rng(24), 4, 12)) {
    civ["DENc"].name = "Greenland";
    civ["FRAx"].strength = 0;
    civ["MAL"].strength = 100;
    civ["MAL"].name = "";
    civ["TIB"].strength = 100;
    civ["VIE"].y += 30;
    civ["MEX"].y += 20;

    civ["RUSc"].x = 360;
    civ["RUSc"].y = 140;
    civ["RUSc"].size = 8;
  }

  // European Colonization


  // Seven Years War (rng32)
  if (nextYear == 1763) {
    // Treaty of Paris of 1763
    civ["IRO"].strength = 0;

    if (rng(32) <= superUnlikely) {
      civ["QUE"].x -= 70;
      civ["QUE"].size += 3;
      civ["CAN"].state = 5;
      civ["CAN"].owner = "FRA";
      civ["CAN"].hideName = true;
      
      civ["USA"].strength = 500;
      civ["USA"].name = "13 Colonies";
      civ["USA"].owner = "ENG";
      civ["AUS"].strong = true;
      c.usa_exists = false;
      c.pax_francia = true;
    } else {
      civ["SPAc"].state = 9;
      civ["CAN"].state = 5;
      civ["QUE"].strength = 0;

      // If Prussia is still defeated
      if (rng(32) <= unlikely) {
        civ["AUS"].strong = true;
      }
    }
  }

  // WWI
  if (nextYear == 1915) {
    if (currentAlliance("FRA") != currentAlliance("GER") && currentAlliance("RUS") != currentAlliance("GER")) {
    civ["GER"].state = 9;
    }
  }
  if (nextYear == 1917) {
    // Russian Revolution
    //if (RNG("Russian_Revolution",year) > unlikely) {
    civ["RUS"].name = "Red Army";
    civ["RUS"].x += 80;
    civ["RUS"].y -= 12;
    civ["RUS"].size += 3;
    civ["RUS"].color = [124, 13, 24];
    civ["SIB"].strength = 27;
    civ["FIN"].strength = 2250;;

    /*  c.soviet_union = true;
    } else {
      c.soviet_union = false;
    }*/
  }
  if (nextYear == 1918) {
    civ["GER"].state = "a";
    civ["UKR"].strength = 1;
    civ["UKR"].color = [88, 86, 83];

    civ["SER"].state = 5;
    civ["ROA"].state = 3;
    civ["SER"].name = "Yugoslavia";

    // Sykes-Picot Agreement
  }
  if (nextYear == 1919) {
    civ["UKR"].color = [];
    civ["SIB"].state = 2;
    civ["LIT"].strength = 22;
    civ["LIT"].state = 5;
    civ["LIV"].strength = 22;
    civ["LIV"].state = 2;
    civ["LIV"].name = "Estonia";
    civ["LIV"].y -= 15;
    civ["KZH"].name = "Alash Orda";
    civ["KZH"].state = "a";
    civ["KZH"].x = 1605;
    civ["KZH"].y = 275;
    civ["KZH"].size = 10;

    /*if (RNG("Russian_Revolution",year) > unlikely && RNG("Boxer's_Rebellion",year) <= unlikely) {
      civ["QIN"].state = "b";
      civ["SIB"].strength = 0;
    }*/

    // Treaty of Versailles (WWI Aftermath)
    if (rng(62) <= unlikely) {
      // Kaiserreich (Central Powers win)
      c.kaiserreich = true;
      c.ww1Winner = Axis;
      c.ww1Loser = Allies;
      c.ww2 = false;
 
      civ["GERx"].state = "a";
      civ["GERx"].x = 1330;
      civ["GERx"].y = 610;
      civ["GERx"].name = "MittelAfrika";
      civ["LIB"].name = "Tripolitania";
      civ["LIB"].x -= 20;
      civ["ITA"].state = 5;
 
      civ["GER"].state = "a";
      civ["KON"].strength = 0;
      civ["VIE"].owner = "GER";
      civ["MLY"].owner = "GER";
 
      if (c.british_raj) {
        civ["AFG"].state = 6;
        civ["RAJ"].state = "a";
      }
      civ["NEP"].state = "a";
      civ["SYR"].strength = 0;
      civ["ENGb"].strength = 0;
 
      civ["ARG"].state = "a";
      civ["PAR"].strength = 0;
      civ["URU"].strength = 0;
 
      civ["GEO"].state = "a";
      civ["GEO"].strength = 1000;
      civ["UKR"].state = "a";
      civ["UKR"].strength = 1000;
      civ["KZH"].strength = 500;
 
      civ["BYZ"].state = 2;
 
    } else if (rng(62) <= Default) {
 
      // Normal WWI
      c.ww1Winner = Allies;
      c.ww1Loser = Axis;
      c.ww2 = true;
      /* if (RNG("German_Venezuela",year) <= unlikely) {
        civ["VEZ"].name = "Welserland ";
      }
      if (RNG("Arabia's_Fate",year) <= unlikely) {
        // Arabic Union
        civ["ISL"].name = "Arabic Union";
        civ["MES"].strength = 0;
        civ["SYR"].strength = 0;
        civ["ENGb"].strength = 0;
      }*/

      civ["ITA"].state = 8;

      civ["POL"].strength = 500;
      civ["POL"].state = 8;
      civ["GER"].state = 10;

      if (rng(62) <= possible) {
        civ["GER"].state = "b";
        c.ww2 = false;
      }
    }

    // Adjust colonies
    for (let i=0;i<c.ww1Winner.length;i++) {
      if (colonizeOldWorld[c.ww1Winner[i]] > 0) {
        colonizeOldWorld[c.ww1Winner[i]] += 500;
      }
    }
    for (let i=0;i<c.ww1Loser.length;i++) {
      colonizeOldWorld[c.ww1Loser[i]] = 0;
    }
    if (c.ww1Loser.includes(civ["GERx"].owner)) {
      civ["GERx"].strength = 0;
    }
    for (const key in civs[nextYear]) {
      if (c.ww1Loser.includes(civ[key].owner)) {
        civ[key].owner = colonizingPercentage(rng(70),colonizeOldWorld,"ENG",1);
      }
    }
    
    // Special losing cases
    if (c.ww1Loser.includes("AUS")) {
      civ["CZE"].strength = 400;
      civ["CZE"].name = "Czechoslovakia";
      civ["CZE"].state = 3;

      if (rng(63) <= unlikely) {
        civ["AUS"].strength += 100;
      } else {
      civ["AUS"].state = 11;
      civ["AUS"].name = "Austria";
      civ["AUS"].x -= 20;
      civ["AUS"].size -= 3;
      }
      civ["HUN"].strength = 800;
    }
    if (c.ww1Loser.includes("OTT")) {
      civ["SYR"].strength = 400;
      civ["SYR"].owner = colonizingPercentage(rng(75),colonizeOldWorld,"FRA",50);
      civ["ENGb"].strength = 500;
      civ["ENGb"].owner = colonizingPercentage(rng(76),colonizeOldWorld,"ENG",50);
      civ["ENGb"].hideName = true;
    }
  }

  owner(civ,"SYR",[],"Syria","Syria",false);
  owner(civ,"ENGb",[],"U.A.E","Iraq",false);

  // WWII
  if (civ["GER"].fascist) {
    if (nextYear == 1939) {
      //if (c.ww2) {
      civ["AUS"].strength = 0;
      civ["CZE"].name = "Bohemia";
      civ["CZE"].state = null;
      civ["POL"].state = null;
      civ["GER"].state = 11;
    }
    if (nextYear == 1940) {
      civ["GER"].state = 13;
    }
  }

  if (nextYear == 1939) {
    civ["ITA"].state = 9;
    civ["ALB"].strength = 0;
    civ["SER"].weak = true;
  }
  if (nextYear == 1940) {
    civ["FIN"].state = 2;
    civ["ROA"].state = 4;
    civ["FRA"].name = "Vichy France";
    civ["FRA"].y += 15;
    civ["FRA"].size -= 2;
    civ["FRA"].color = [88, 86, 83];
    civ["FRA"].colonizationColor = [88, 86, 83];

    civ["ISR"].name = "Israel";

    /*if (RNG("Jewish_Homeland",year) <= superUnlikely) {
      civ["ISR"].state = "a";
      civ["ISR"].strength = 2000;
      civ["ISR"].x = 1550;
      civ["ISR"].y = 760;
      civ["ISR"].size = 5;
      c.israel = false;
    } else if (RNG("Jewish_Homeland",year) <= veryUnlikely) {
      civ["ISR"].state = "c";
      civ["ISR"].strength = 2000;
      civ["ISR"].name = "Jewish Oblast";
      civ["ISR"].x = 2050;
      civ["ISR"].y = 275;
      civ["ISR"].size = 4;
      c.israel = false;
    }*/
  }
  if (nextYear == 1941) {
    /*if (RNG("Boxer's_Rebellion",year) > unlikely) {
      civ["QIN"].state = 4;
    }*/
    civ["VIE"].owner = "JAP";
    //c.occupied_iran = true;
    civ["PER"].name = "Iran ";
    //if (c.ww2) {
    civ["GER"].state = 14;
    civ["ITA"].state = 10;
    civ["GRE"].color = [102, 168, 96];
    civ["BUL"].state = 9;
    //}

    civ["ABY"].state = 6;
    civ["ABY"].owner = "none";
    civ["ITAx"].weak = true;
    civ["ITAx"].owner = "FRA";
    civ["ITAx"].hideName = true;
  }
  if (nextYear == 1943) {
    civ["ITA"].color = [88, 86, 83];
    civ["ITA"].colonizationColor = [88, 86, 83];
    civ["ITA"].y -= 20;
    civ["NAP"].strength = 2;
    civ["NAP"].name = "Allies";
    civ["NAP"].color = civ["ENG"].colonizationColor;
    civ["FRA"].colonizationColor = [57, 113, 228];
  }
  if (nextYear == 1944) {
    civ["ICE"].name = "Iceland";

    /*if (c.ww2) {
      if (RNG("WWII",year) <= superUnlikely) {
        civ["GER"].strength += 100;
      } else {
        civ["GER"].state = 11;
      }
    }*/ civ["GER"].state = 11;

    civ["ALB"].strength = 300;
    civ["GRE"].color = [];
    civ["SER"].weak = false;
    civ["FRA"].name = "France";
    civ["FRA"].y -= 15;
    civ["FRA"].size += 2;
    civ["FRA"].color = [];
    civ["ITA"].colonizationColor = [86, 167, 79];
  }
  if (nextYear == 1945) {
    /*if (c.ww2) {
      if (RNG("WWII",year) <= superUnlikely) {
        // Fuhrerreich
        eventLog.push("*1945: Nazi Germany wins World War II");
        c.fuhrerreich = true;
        civ["ITAx"].state = "a";
        civ["SIB"].state = "a";
        civ["SIB"].strength = 100;
        civ["RUS"].name = "Russian Anarchy";
        civ["KZH"].strength = 100;
        civ["KZH"].x += 30;
        civ["KZH"].name = "Kazakhs";
        civ["KZH"].state = 2;
        civ["GEO"].strength = 100;
        civ["ARM"].strength = 100;
        civ["HOR"].strength = 100;
        civ["HOR"].name = " ";
 
        civ["GER"].state = 13;
 
        civ["UKR"].state = "a";
        civ["UKR"].strength = 100;
        civ["LIV"].strength = 100;
        civ["LIT"].strength = 100;
      } else {*/
    // Normal WWII Outcome
    civ["GER"].name = "W. Germany";
    civ["CZE"].name = "Czechoslovakia";
    civ["CZE"].state = 4;
    civ["CZE"].strength = 500;
    civ["POL"].strength = 500;
    civ["POL"].state = 9;
    civ["GER"].state = 15;
    civ["ITA"].state = 8;
    civ["ITA"].color = [];
    civ["AUS"].strength = 300;
    civ["BUL"].state = 10;
    civ["VIE"].owner = "none";

    /*if (RNG("Greater_Hungary",year) <= unlikely) {
      c.greater_hungary = true;
    }
  }
  if (RNG("WWII",year) <= incrediblyUnlikely) {
    civ["CAN"].name = "Greater Nazi Reich";
    civ["CAN"].x -= 60;
    civ["CAN"].y += 20;
  }
}*/
  }
  if (nextYear == 1946) {
    // WW2 Aftermath
    /*if (!c.fuhrerreich) {
      if (RNG("WWII_Aftermath",year) <= unlikely) {
        civ["KOR"].strength = 500;
        civ["JAPn"].strength = 600;
      } else if (RNG("WWII_Aftermath",year) <= Default) {
        // Splitting of Korea
        civ["KOR"].strength = 500;
        civ["KOR"].y += 15;
        civ["KOR"].name = "S. Korea";
        civ["DRK"].strength = 400;
      }
    } else if (RNG("Japan's_Fate",year) <= veryUnlikely || !c.usa_exists) {
      civ["JAPc"].strength += 200;
      c.big_japan = true;
    }
    if (!c.fuhrerreich) {
      if (RNG("Greater_Yugoslavia",year) <= veryUnlikely) {
        civ["SER"].name = "Greater Yugoslavia";
        civ["SER"].state = "a";
        civ["BUL"].name = "";
      }
    }
    // Man in the High Castle
    if (c.fuhrerreich && RNG("Japan's_Fate",year) <= impossible) {
      civ["USA"].state = "d";
      civ["USA"].name = "Japan / Neutral Zone";
      civ["USA"].size -= 4;
      c.big_japan = true;
    }*/
  }
  if (nextYear == 1947) {
    civ["ROA"].state = 5;
    civ["HUN"].small = true;
  }
  if (nextYear == 1954) {
    /*if (c.fuhrerreich && RNG("Lake_Congo_Project",year) <= superUnlikely) {
      eventLog.push("*1954: The damming of the Congo River is complete...");
      civ["lakes"].state = "a";
    }*/
  }

  // Modern Era
  if (nextYear == 1961) {
    // Cuban Missile Crisis
  }
}
