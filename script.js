/* //////////////////////////////////////////////////////////////

  Altimeline by Dragonic - 2023

    Resources:
      History of the World: https://www.youtube.com/watch?v=-6Wu0Q7x5D0
      Color Filter Adjuster: https://codepen.io/Dragonic/pen/XWoaprP?editors=1000
      Color Adjuster 2: https://codepen.io/sosuke/pen/Pjoqqp?editors=0010
      Image Coordinates: https://www.programminghead.com/Projects/find-coordinates-of-image-online.html
      
      Base64 Encoder: https://www.base64-image.de/
      Base64 Decoder: https://base64.guru/converter/decode/image

////////////////////////////////////////////////////////////// */

var seed = 0;
var timeline = 1;
var nations = [];

var events = {
  "-2024": {
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
      strength: 23, // until -2000
      techecon: 2,

      x: 1477,
      y: 367,
      size: 5,
    },
    "EGY": {
      name: "Egyptian Middle Kingdom",
      state: 1,
      strength: 1574, // until -749
      techecon: 2,

      x: 1330,
      y: 430,
      size: 8,
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
      strength: 5323,
      techecon: 2, // until modern-day

      x: 1883,
      y: 365,
      size: 10,
    },
    "lakes": {
      name: "Lakes",
      state: 1,
      strength: 9999,
      techecon: 0,
    },
    "conditions": {
      big_china: false,
      communist_china: true,
      isChineseCivilWar: false,
      somaliland: false,
      soviet_union: true,
      nuclear: false,

      greater_hungary: false,
      big_japan: false,
      fuhrerreich: false,
      ww2: true,
      kaiserreich: false,
      occupied_iran: false,
      israel: true,
      big_albania: false,

      big_mexico: false,
      big_usa: false,
      csa_cen: false,
      csa_victory: false,
      us_imperialism: false,
      unified_germany: true,

      french_victory: false,
      napoleonic_wars: false,
      usa_exists: true,
      british_raj: true,

      pax_francia: false,
      dutch_brazil: false,
      iberianUnion: false,
      byzantium: false,
      ottoman_romania: false,

      am_colonization: true,
      af_colonization: true,

      christianity: true,
      nova_roma: false,
      roman_empire: true,
      carthage_wins: false,
    }
  }
}
var eventLog = [];

var startingEvents = events;
var showText = true;

// RNG Events
var impossible = 0.01
incrediblyUnlikely = 0.025,
superUnlikely = 0.05,
veryUnlikely = 0.10,
unlikely = 0.20,
uncommon = 0.35,
possible = 0.50,
likely = 0.75,
veryLikely = 0.90,
Default = 1;

var rngEvents = {
  // 2000s
  "Ukraine_War": 1,
  "South_Sudan": 1,
  "Neo_Chinese_Empire": 1,

  // 1900s
  "Breakup_of_Czechoslovakia": 1,
  "Breakup_of_Yugoslavia": 1,
  "Quebec_Independence": 1,
  "Somaliland": 1,
  "Falklands_War": 1,
  "East_African_Federation": 1,
  "European_Federation": 1,
  "Morocco_Expansion": 1,

  "Nuclear_Armageddon": 1,
  "Chinese_Communist_Revolution": 1,
  "Tibet": 1,
  "Korean_War": 1,
  "Cold_War_Winner": 1,
  "American_Expansion": 1,

  "Decolonization": 1,
  "Jewish_Homeland": 1,
  "Greater_Yugoslavia": 1,
  "Occupation_of_Iran": 1,
  "Man_in_the_High_Castle": 1,
  "Japan's_Fate": 1,
  "Lake_Congo_Project": 1,
  "Greater_Hungary": 1,
  "WWII_Aftermath": 1,
  "WWII": 1,
  "Mongolian_Expansion": 1,

  "India's_Fate": 1,
  "Ottoman's_Fate": 1,
  "Austria's_Fate": 1,
  "Arabia's_Fate": 1,
  "Russian_Revolution": 1,
  "Fall_of_Austrian_Empire": 1,
  "WWI_Aftermath": 1,
  "British_Revolution": 1,
  "Big_Albania": 1,

  // 1800s
  "Africa's_Fate": 1,
  "Portuguese_Africa": 1,
  "French_Africa": 1,
  "Italian_Africa": 1,
  "Spanish_Africa": 1,

  "German_Unification": 1,

  "Alaskan_Purchase": 1,
  "Gran_Colombia": 1,
  "Peru-Bolivia": 1,
  "War_of_the_Triple_Alliance": 1,
  "CSA_Expansion": 1,
  "American_Civil_War": 1,
  "Mexican_American_War": 1,
  "Texas_Independence": 1,
  "Oregon_Territory": 1,
  "US_Imperialism": 1,

  "Australia_Colonization": 1,
  "Napoleonic_Wars": 1,

  // 1700s
  "American_Revolution": 1,
  "Seven_Years_War": 1,

  // 1600s
  "Dutch_Invasion_of_Brazil": 1,

  // Other
  "China_Colonizes_America": 1,
  "Big_Portugal": 1,

  "Byzantium": 1,
  "Rome_Survives": 1,
  "Rome_Colonizes_America": 1,
  "Carthage_Wins_Punic_Wars": 1,
}

var rngLimit = -2023;
function RNG(event,year) {
  if (year >= rngLimit) {
    return rngEvents[event];
  } else {
    return 1;
  }
}

function addCountry(id,name,year,state,strength,technecon,x,y,size) {
  events[year][id] = {
    name: name,
    state: state,
    strength: strength,
    techecon: technecon,

    x: x,
    y: y,
    size: size,
  };
}

//////////////////////////////////
// Create events for each year //
//////////////////////////////////

function calculateEvents() {
  events = startingEvents;
  for (let year = -2023; year <= 2023; year ++) {
    let prevYear = year - 1;
    events[year] = {};
    let c = events[prevYear]["conditions"];

    // Events
    if (year == -2014) {
      events[prevYear]["EGY"].state = 2;
    }
    if (year == -1994) {
      addCountry("MES","Mesopotamian Civilizations",year,1,1450,5 ,1400,372,5);
    }
    if (year == -1720) {
      events[prevYear]["EGY"].state = 1;
    }
    if (year == -1700) {
      events[prevYear]["CHI"].name = "Shang Dynasty";
      events[prevYear]["CHI"].state = 2;
      events[prevYear]["EGY"].name = "Egyptian Empire";
      events[prevYear]["EGY"].x = 1380;
    }
    if (year == -1550) {
      events[prevYear]["EGY"].state = 2;
      events[prevYear]["EGY"].name = "Egyptian New Kingdom";
      events[prevYear]["EGY"].x = 1330;
    }
    if (year == -1520) {
      events[prevYear]["lakes"].state = 2;
    }
    if (year == -1504) {
      events[prevYear]["EGY"].state = 3;
      addCountry("BUR","Dhanyawadi",year,1,4450,5 ,1860,470,5);
    }
    if (year == -1500) {
      addCountry("ARM","Hayasha-Azzi",year,1,4450,5 ,1486,330,5);
    }
    if (year == -1454) {
      events[prevYear]["MES"].state = 2;
    }
    if (year == -1348) {
      addCountry("VIE","Van Land",year,1,1450,5 ,1985,465,5);
    }
    if (year == -1270) {
      events[prevYear]["ARM"].name = "Arme-Shu";
      events[prevYear]["ARM"].x += 50;
    }
    if (year == -1100) {
      events[prevYear]["MES"].state = 3;
      events[prevYear]["EGY"].state = 1;
      events[prevYear]["ARM"].name = "Nairi";
    }
    if (year == -1050) {
      events[prevYear]["ISR"].state = 2;
      events[prevYear]["ISR"].strength = 330;
      events[prevYear]["ISR"].name = "Israel";
    }
    if (year == -1027) {
      events[prevYear]["CHI"].name = "Zhou Dynasty";
    }
    if (year == -950) {
      events[prevYear]["ISR"].state = 3;
    }
    if (year == -933) {
      addCountry("LIB","Libya",year,1,210,5 ,1365,400,5);
    }
    if (year == -845) {
      addCountry("GRE","Greek Kingdoms",year,1,750,5 ,1400,335,5);
      events[prevYear]["ARM"].name = "Urartu";
    }
    if (year == -810) {
      addCountry("CAR","Carthage",year,1,750,5 ,1198,345,10);
    }
    if (year == -748) {
      addCountry("KSH","Kushite Empire",year,2,448,5 ,1395,450,8);
      events[prevYear]["EGY"].name = "";
    }
    if (year == -670) {
      events[prevYear]["CAR"].state = 2;
    }
    if (year == -649) {
      events[prevYear]["EGY"].name = "Egypt";
      events[prevYear]["EGY"].state = 4;
      events[prevYear]["KSH"].state = 1;
      events[prevYear]["KSH"].y += 20;
      events[prevYear]["EGY"].x += 90;
      events[prevYear]["EGY"].y -= 25;
    }
    if (year == -611) {
      addCountry("PER","Median Empire",year,1,250,5 ,1543,378,7);
    }
    if (year == -589) {
      addCountry("IND","Indian Kingdoms",year,1,3250,5 ,1701,434,8);
      events[prevYear]["CHI"].name = "Chinese Warring Kingdoms";
      events[prevYear]["CHI"].state = 3;
      events[prevYear]["ARM"].name = "Armenia";
    }
    if (year == -548) {
      events[prevYear]["PER"].name = "Achaemenid Empire";
      addCountry("CHO","Pandyas",year,1,3250,5 ,1730,530,6);
    }
    if (year == -520) {
      events[prevYear]["PER"].state = 2;
    }
    if (year == -472) {
      events[prevYear]["GRE"].state = 2;
    }
    if (year == -385) {
      addCountry("ABY","Axum",year,1,2500,5 ,1500,505,5);
      events[prevYear]["GRE"].state = 3;
    }
    if (year == -339) {
      events[prevYear]["IND"].state = 2;
      events[prevYear]["IND"].name = "Nanda Empire";
    }
    if (year == -341) {
      events[prevYear]["GRE"].state = 4;
      events[prevYear]["CHO"].name = "Cholas";
      events[prevYear]["CHO"].state = 2;
      events[prevYear]["CHO"].x += 10;
    }
    if (year == -330) {
      events[prevYear]["GRE"].name = "Macedonian Empire";
      events[prevYear]["GRE"].state = 5;

      events[prevYear]["GRE"].x = 1520;
      events[prevYear]["GRE"].y = 355;
      events[prevYear]["GRE"].size = 10;
    }
    if (year == -330) {
      addCountry("ROM","Roman Empire",year,1,900,6 ,1257,330,12);
      addCountry("KOR","Korea",year,1,2240,5 ,2070,350,5);
    }
    if (year == -322) {
      events[prevYear]["IND"].name = "Mauryan Empire";
    }
    if (year == -319) {
      events[prevYear]["GRE"].name = "Hellenic Kingdoms";
      events[prevYear]["PER"].name = "Parthian Empire";
      events[prevYear]["GRE"].state = 6;
    }
    if (year == -300) {
      addCountry("GEO","Colchis",year,1,2450,5 ,1500,320,5);
    }
    if (year == -292) {
      events[prevYear]["ROM"].state = 2;
      events[prevYear]["GEO"].state = 3;
      events[prevYear]["GEO"].name = "Iberia";
    }
    if (year == -282) {
      events[prevYear]["CHI"].state = 4;
    }
    if (year == -272) {
      events[prevYear]["ROM"].state = 3;
    }
    if (year == -254) {
      events[prevYear]["VIE"].name = "Au Lac";
      events[prevYear]["VIE"].state = 2;
    }
    if (year == -240) {
      // Punic Wars
      if (RNG("Carthage_Wins_Punic_Wars",year) <= veryUnlikely) {
        c.am_colonization = false;
        c.af_colonization = false;
        c.carthage_wins = true;
        c.roman_empire = false;
        c.christianity = false;
        c.british_raj = false;
        events[prevYear]["CAR"].strength += 800;
        events[prevYear]["ROM"].name = "Rome";
      }
    }
    if (year == -220) {
      events[prevYear]["CHI"].name = "Qin Dynasty";
      if (RNG("Carthage_Wins_Punic_Wars",year) <= veryUnlikely) {
        events[prevYear]["CAR"].state = "a";
      }
    }
    if (year == -222) {
      events[prevYear]["ROM"].state = 4;
      events[prevYear]["PER"].state = 4;
    }
    if (year == -206) {
      events[prevYear]["CHI"].name = "Han Dynasty";
      events[prevYear]["VIE"].name = "Nanyue";
      events[prevYear]["VIE"].state = 1;
    }
    if (year == -198) {
      events[prevYear]["ROM"].state = 5;
    }
    if (year == -180) {
      events[prevYear]["IND"].state = 3;
      events[prevYear]["IND"].name = "Indian Kingdoms";
      events[prevYear]["IND"].x += 35;
      events[prevYear]["CHI"].state = 5;
      events[prevYear]["ARM"].state = 2;
    }
    if (year == -156) {
      events[prevYear]["ROM"].state = 6;
    }
    if (year == -145) {
      events[prevYear]["ISR"].strength = 333;
      events[prevYear]["ISR"].name = "Hasmonea";
      if (!c.carthage_wins) {
        events[prevYear]["CAR"].strength = 0;
      }
    }
    if (year == -136) {
      events[prevYear]["PER"].state = 3;
      events[prevYear]["PER"].strength = 800;
    }
    if (year == -122) {
      events[prevYear]["ROM"].state = 7;
    }
    if (year == -108) {
      events[prevYear]["VIE"].strength = 0;
    }
    if (year == -99) {
      events[prevYear]["ISR"].state = 2;
    }
    if (year == -72) {
      events[prevYear]["ROM"].state = 8;
      events[prevYear]["ISR"].state = 1;
      addCountry("SPAc","New Spain",year,1,0,6 ,670,490,12);
      addCountry("CSA","Confederate States of America",year,1,0,6 ,564,370,8);
    }
    if (year == -60) {
      events[prevYear]["ISR"].state = 3;
      // Rome Colonizes America*
      if (RNG("Rome_Colonizes_America",year) <= superUnlikely) {
        events[prevYear]["SPAc"].name = "Nova Roma";
        events[prevYear]["SPAc"].strength = 3000;
        c.nova_roma = true;
      }
    }
    if (year == -30) {
      events[prevYear]["ISR"].state = 1;
      events[prevYear]["ISR"].name = "Herodia";

      if (c.nova_roma) {
        events[prevYear]["SPAc"].state = 2;
      }
    }
    if (year == -22) {
      events[prevYear]["ROM"].state = 9;
      events[prevYear]["ARM"].state = 1;
    }
    if (year == -1) {
      events[prevYear]["ROM"].state = 10;
      if (c.roman_empire) {
        events[prevYear]["ISR"].strength = 0;
      } else {
        events[prevYear]["ISR"].strength += 470;
      }
    }

    // Year of Our Lord (A.D.)
    if (year == 50) {
      events[prevYear]["ROM"].state = "10a";
    }
    if (year == 70) {
      addCountry("CAM","Funan",year,1,3500,5 ,1985,555,8);
    }
    if (year == 100) {
      addCountry("MOC","Moche",year,1,601,6 ,680,640,5);
    }
    if (year == 193) {
      events[prevYear]["CHI"].state = 3;
      events[prevYear]["CHI"].name = "Chinese Warring Kingdoms";
    }
    if (year == 200) {
      addCountry("YEM","Himyar",year,1,3500,5 ,1560,505,6);
    }
    if (year == 203) {
      if (RNG("Rome_Colonizes_America",year) <= incrediblyUnlikely && c.christianity) {
        events[prevYear]["CSA"].strength = 3000;
        events[prevYear]["CSA"].state = "a1";
        events[prevYear]["CSA"].name = "Nova Christiana";
      }
    }
    if (year == 221) {
      if (RNG("Rome_Colonizes_America",year) <= incrediblyUnlikely && c.christianity) {
        events[prevYear]["CSA"].state = "a2";
      }
    }
    if (year == 222) {
      events[prevYear]["PER"].name = "Sassanid Empire";
    }
    if (year == 240) {
      events[prevYear]["CAM"].state = 2;
      addCountry("CHM","Champa",year,1,2450,4 ,2010,490,5);
    }
    if (year == 250) {
      addCountry("JAP","Japan",year,1,3500,5 ,2150,350,8);
    }
    if (year == 270) {
      events[prevYear]["CHI"].state = 5;
      events[prevYear]["CHI"].name = "Jin Dynasty";
      events[prevYear]["CHI"].x += 50;
      addCountry("BYZ","Eastern Roman Empire",year,1,0,6 ,1370,340,9);
    }
    if (year == 287) {
      if (c.roman_empire) {
        events[prevYear]["ROM"].state = 11;
        events[prevYear]["ROM"].name = "Western Roman Empire";
        events[prevYear]["ROM"].x -= 50;
        events[prevYear]["ROM"].size -= 5;
        events[prevYear]["BYZ"].strength = 1250;
      }
    }
    if (year == 300) {
      addCountry("GHA","Ghana Empire",year,1,1050,5 ,1160,500,5);
      addCountry("INC","Tiwanaku Empire",year,1,2250,5 ,727,702,5);
      events[prevYear]["BUR"].name = "Waithali";
    }
    if (year == 325) {
      events[prevYear]["BYZ"].strength = 0;
      events[prevYear]["ROM"].state = "10a";
      events[prevYear]["ROM"].name = "Roman Empire";
      events[prevYear]["ROM"].x += 50;
       events[prevYear]["ROM"].size += 5;
    }
    if (year == 350) {
      events[prevYear]["ABY"].state = 2;
    }
    if (year == 360) {
      events[prevYear]["IND"].state = 2;
      events[prevYear]["IND"].name = "Gupta Empire";
    }
    if (year == 375) {
      addCountry("HNN","Hunnic Empire",year,1,50,6 ,1366,266,7);
    }
    if (year == 384) {
      events[prevYear]["CHI"].name = "Chinese Warring Kingdoms";
      events[prevYear]["CHI"].state = 3;
      addCountry("BYZ","Eastern Roman Empire",year,1,0,6 ,1370,340,9);
    }
    if (year == 396) {
      addCountry("AZX","Teotihuacan",year,1,2200,6 ,530,470,5);
      addCountry("NEP","Nepal",year,1,2250,6 ,1820,420,4);
      if (c.roman_empire) {
        events[prevYear]["ROM"].state = 11;
        events[prevYear]["ROM"].name = "Western Roman Empire";
        events[prevYear]["ROM"].x -= 50;
        events[prevYear]["ROM"].size -= 5;
        events[prevYear]["BYZ"].strength = 1250;
      }
      events[prevYear]["CHI"].name = "Jin Dynasty";
      events[prevYear]["CHI"].state = 4;
    }
    if (year == 422) {
      events[prevYear]["CHI"].name = "Wei/Song";
      events[prevYear]["CHI"].state = 3;
    }
    if (year == 438) {
      // Vandals
      if (events[prevYear]["CAR"].strength <= 0) {
        events[prevYear]["CAR"].name = "Vandals";
        events[prevYear]["CAR"].strength = 100;
      }
    }
    if (year == 461) {
      addCountry("GTH","Gothic Kingdoms",year,1,500,5 ,1270,315,5);
      events[prevYear]["CHI"].name = "Wei/Qi";
      events[prevYear]["CHI"].state = 4;
    }
    if (year == 476) {
      // Fall of Rome
      if (RNG("Rome_Survives",year) <= unlikely) {
        events[prevYear]["ROM"].strength += 2000;
        events[prevYear]["ROM"].name = "Rome";
      } else {
        events[prevYear]["ROM"].strength = 0;
      }
      events[prevYear]["BYZ"].name = "Byzantine Empire";
    }
    if (year == 480) {
      events[prevYear]["IND"].state = 4;
      events[prevYear]["IND"].name = "Gupta Empire";
      events[prevYear]["CHO"].state = 3;
      events[prevYear]["CHO"].name = "Kalabhras";
    }
    if (year == 500) {
      events[prevYear]["IND"].state = 3;
      events[prevYear]["IND"].name = "Indian Kingdoms";

      events[prevYear]["INC"].state = 2;
      events[prevYear]["INC"].name = "Wari  Tiwanaku Empire";
    }
    if (year == 506) {
      events[prevYear]["GTH"].state = 2;
      addCountry("FRK","Francia",year,1,1500,5 ,1270,290,5);
    }
    if (year == 519) {
      addCountry("ENG","Wessex",year,1,3000,5 ,1234,260,5);
      events[prevYear]["CHI"].name = "We-/Liang";
    }
    if (year == 540) {
      events[prevYear]["JAP"].state = 2;
      events[prevYear]["VIE"].strength = 1000;
      events[prevYear]["VIE"].state = 2;
      events[prevYear]["VIE"].name = "Van Xuan";
      addCountry("TUR","Turkish Khaganate",year,2,120,6 ,1340,280,7);
    }
    if (year == 547) {
      events[prevYear]["TUR"].x += 380;
      events[prevYear]["TUR"].size += 5;
    }
    if (year == 550) {
      events[prevYear]["BYZ"].state = 2;
      events[prevYear]["CAM"].name = "Chemla";
      events[prevYear]["CHI"].name = "W. Wei/N. Qi/Chen";
    }
    if (year == 568) {
      events[prevYear]["HNN"].strength = 237;
      events[prevYear]["HNN"].y += 10;
      events[prevYear]["HNN"].name = "Avar Khaganate";
    }
    if (year == 582) {
      events[prevYear]["TUR"].name = "W. Turkish Khaganate / E. Turkish Khaganate";
      events[prevYear]["TUR"].size -= 3;
      events[prevYear]["TUR"].x -= 150;
    }
    if (year == 592) {
      events[prevYear]["GTH"].state = 3;
      events[prevYear]["FRK"].state = 2;
      events[prevYear]["AZX"].name = "Mixtec";
      events[prevYear]["CHI"].name = "Sui Dynasty";
      events[prevYear]["CHI"].state = 5;
    }
    if (year == 600) {
      events[prevYear]["CHI"].name = "Chinese Warring Kingdoms";
      events[prevYear]["CHI"].state = 4;
      events[prevYear]["VIE"].strength = 0;
    }
    if (year == 610) {
      events[prevYear]["IND"].state = 5;
      events[prevYear]["CHO"].state = 4;
      events[prevYear]["CHO"].name = "Pandyas/Pallavas";
    }
    if (year == 618) {
      addCountry("TIB","Tibet",year,1,1250,6 ,1840,390,8);
    }
    if (year == 628) {
      addCountry("ISL","Rashidun Caliphate",year,1,1250,6 ,1350,400,12);
      events[prevYear]["PER"].state = 3;
      events[prevYear]["CHI"].name = "Tang Dynasty";
      events[prevYear]["CHI"].state = 5;
    }
    if (year == 635) {
      events[prevYear]["ISL"].state = 2;
      addCountry("BUL","Bulgaria",year,1,2250,6 ,1450,280,5);
    }
    if (year == 642) {
      events[prevYear]["ISL"].state = 3;
      events[prevYear]["TIB"].state = 3;
      events[prevYear]["TIB"].size += 4;
      events[prevYear]["TIB"].x -= 20;
      events[prevYear]["TIB"].y -= 20;
    }
    if (year == 651) {
      addCountry("SVJ","Srivijaya",year,1,2250,6 ,1890,620,7);
    }
    if (year == 662) {
      events[prevYear]["ISL"].name = "Umayyad Caliphate";
      events[prevYear]["ISL"].state = 4;
    }
    if (year == 677) {
      events[prevYear]["BYZ"].state = 3;
    }
    if (year == 680) {
      events[prevYear]["BUL"].state = 2;
      events[prevYear]["BUL"].x -= 15;
      events[prevYear]["BUL"].y += 33;
    }
    if (year == 690) {
      events[prevYear]["ENG"].state = 2;
      addCountry("CHA","Kanem Empire",year,1,2250,6 ,1330,530,5);
    }
    if (year == 720) {
      events[prevYear]["JAP"].state = 3;
    }
    if (year == 731) {
      events[prevYear]["ISL"].state = 5;
      events[prevYear]["GTH"].state = 4;
      events[prevYear]["GTH"].name = "Lombards";
      events[prevYear]["GTH"].x = 1330;
      events[prevYear]["GTH"].y = 325;
      events[prevYear]["GTH"].size = 5;
    }
    if (year == 740) {
      addCountry("SPA","Spain",year,1,3250,6  ,1230,325,6);
    }
    if (year == 750) {
      events[prevYear]["ISL"].name = "Abbasid Caliphate";
      events[prevYear]["ISL"].state = 6;
      addCountry("VEN","Venice",year,1,2600,5 ,1330,310,4);
      addCountry("PAP","Papal States",year,1,0,5 ,1310,325,3);
    }
    if (year == 757) {
      addCountry("COR","Cordoba",year,1,600,5);
      addCountry("ALG","Kharijite Dynasty",year,1,2600,5 ,1270,355,4);
      if (c.christianity) {
        events[prevYear]["PAP"].strength = 2600;
      }
    }
    if (year == 766) {
      events[prevYear]["BYZ"].state = 4;
      events[prevYear]["FRK"].state = 3;
    }
    if (year == 779) {
      events[prevYear]["FRK"].state = 4;
      addCountry("BRI","Brittany",year,1,753,5 ,1227,283,3);
    }
    if (year == 785) {
      addCountry("SER","Serbia",year,1,2600,5 ,1375,315,3);
    }
    if (year == 800) {
      events[prevYear]["CAM"].name = "Khmer";
      events[prevYear]["ALG"].name = "Agh.";
      events[prevYear]["GEO"].name = "Georgia";

      addCountry("NOR","Norway",year,1,2600,5 ,1260,180,8);
      addCountry("SWE","Sweden",year,1,2600,5 ,1320,205,7);
      addCountry("DEN","Denmark",year,2,2600,5 ,1309,232,4);
    }
    if (year == 810) {
      events[prevYear]["BUL"].state = 3;
    }
    if (year == 825) {
      events[prevYear]["SPA"].state = 2;
      events[prevYear]["AZX"].name = "Toltecs";
      events[prevYear]["BUR"].name = "Le-Mro";
    }
    if (year == 842) {
      addCountry("HRE","H.R.E.",year,1,1600,5 ,1320,265,5);
      addCountry("FRA","France",year,1,2600,5 ,1240,290,5);
      addCountry("ITA","",year,1,2600,5 ,1240,290,5);
    }
    if (year == 843) {
      // Treaty of Verdun
      events[prevYear]["FRK"].strength = 0;
      if (!c.roman_empire) {
        events[prevYear]["GTH"].strength = 0;
      }

      events[prevYear]["NEP"].state = 2;
      events[prevYear]["TIB"].name = "Lhasa";
      events[prevYear]["TIB"].state = 1;
      events[prevYear]["TIB"].size -= 4;
      events[prevYear]["TIB"].x += 25;
      events[prevYear]["TIB"].y += 20;
    }
    if (year == 850) {
      events[prevYear]["ENG"].state = 3;
    }
    if (year == 855) {
      events[prevYear]["HRE"].state = 2;
      events[prevYear]["FRA"].state = 2;
      events[prevYear]["ITA"].state = 2;
      events[prevYear]["CAM"].state = 3;
    }
    if (year == 860) {
      addCountry("RUS","Kieven Rus'",year,1,3600,5 ,1411,240,14);
      addCountry("OMA","Oman",year,1,3600,5 ,1660,440,5);
      addCountry("ICE","Iceland",year,1,3600,5 ,1160,170,5);
    }
    if (year == 880) {
      events[prevYear]["CAM"].state = 4;
    }
    if (year == 882) {
      events[prevYear]["ICE"].state = 2;
    }
    if (year == 896) {
      addCountry("HUN","Hungary",year,1,2600,5 ,1375,295,4);
      events[prevYear]["BUL"].state = 4;
    }
    if (year == 900) {
      events[prevYear]["ENG"].state = 4;
      events[prevYear]["MOC"].strength = 572;
      events[prevYear]["MOC"].name = "Chimor";
    }
    if (year == 910) {
      events[prevYear]["IND"].state = 6;
      events[prevYear]["IND"].name = "Gurjara";
      events[prevYear]["CHO"].state = 5;
      events[prevYear]["CHO"].name = "Rashtrakuta Dynasty";
    }
    if (year == 912) {
      events[prevYear]["SPA"].state = 3;
      events[prevYear]["RUS"].state = 2;
      events[prevYear]["ALG"].name = "Fatamid Caliphate";
      events[prevYear]["ISL"].strength = 0;
    }
    if (year == 928) {
      events[prevYear]["ENG"].name = "England";
      events[prevYear]["ENG"].state = 5;
    }
    if (year == 930) {
      events[prevYear]["ABY"].state = 3;
      events[prevYear]["ABY"].name = "Zagwe";
      events[prevYear]["CHI"].name = "Chinese Warring Kingdoms";
      events[prevYear]["CHI"].state = 4;
    }
    if (year == 940) {
      events[prevYear]["VIE"].strength = 2500;
      events[prevYear]["VIE"].state = 2;
      events[prevYear]["VIE"].name = "Ngo";
    }
    if (year == 962) {
      addCountry("POL","Poland",year,2,2700,6 ,1375,255,4);
    }
    if (year == 970) {
      addCountry("FAT","Fatamid Caliphate",year,1,700,6 ,1400,400,6);
      events[prevYear]["ALG"].name = "Hamm.";
      events[prevYear]["NOR"].name = "";
      events[prevYear]["BUL"].state = 5;
    }
    if (year == 980) {
      events[prevYear]["CHI"].name = "Song Dynasty";
      events[prevYear]["CHI"].state = 5;
      events[prevYear]["VIE"].state = 3;
      events[prevYear]["VIE"].name = "Dai Viet";
    }
    if (year == 992) {
      events[prevYear]["VIE"].state = 4;
      events[prevYear]["CHM"].strength = 0;
    }
    if (year == 1000) {
      addCountry("IRE","Irish Kingdoms",year,1,2250,6);
      addCountry("MAY","Mayapan",year,1,700,6 ,620,480,6);
      events[prevYear]["NEP"].state = 3;
      events[prevYear]["POL"].state = 3;
    }
    if (year == 1009) {
      events[prevYear]["POL"].state = 1;
      events[prevYear]["CHM"].strength = 1000;
      events[prevYear]["YEM"].name = "Yemen";
    }
    if (year == 1018) {
      events[prevYear]["BYZ"].state = 5;
      events[prevYear]["BUL"].strength = 0;
      events[prevYear]["SER"].strength = 0;

      events[prevYear]["COR"].state = 2;
      events[prevYear]["SPA"].state = 4;
      addCountry("GEN","Genoa",year,1,2600,5 ,1300,313,4);
      events[prevYear]["DEN"].name = "North Sea Empire";
    }
    if (year == 1035) {
      events[prevYear]["NOR"].name = "Norway";
      events[prevYear]["DEN"].name = "Denmark";
    }
    if (year == 1040) {
      events[prevYear]["RUS"].state = 3;
      events[prevYear]["HRE"].state = 3;
      events[prevYear]["FRA"].state = 3;
      events[prevYear]["ITA"].state = 3;
    }
    if (year == 1045) {
      events[prevYear]["TUR"].strength = 200;
      events[prevYear]["TUR"].state = 3;
      events[prevYear]["TUR"].x -= 230;
      events[prevYear]["TUR"].y += 90;
      events[prevYear]["TUR"].size -= 2;
      events[prevYear]["TUR"].name = "Seljuq Empire";
      events[prevYear]["SER"].strength = 2000;

      events[prevYear]["BUR"].state = 2;
      events[prevYear]["BUR"].name = "Pagan";
    }
    if (year == 1060) {
      addCountry("MOR","Almoravids",year,1,1250,6 ,1150,390,6);
      events[prevYear]["HRE"].state = 4;
    }
    if (year == 1100) {
      events[prevYear]["HUN"].state = 2;
      events[prevYear]["INC"].state = 1;
      events[prevYear]["INC"].name = "Tiwanaku";

      // Crusades
      events[prevYear]["ISR"].strength = 195;
      events[prevYear]["ISR"].name = "Crusaders";
    }
    if (year == 1102) {
      events[prevYear]["ISR"].state = 4;
    }
    if (year == 1111) {
      events[prevYear]["ISR"].state = 5;
    }
    if (year == 1120) {
      events[prevYear]["POL"].state = 2;
      events[prevYear]["GEO"].state = 2;
    }
    if (year == 1127) {
      events[prevYear]["HUN"].state = 3;
      addCountry("NAP","Sicily",year,1,1250,6 ,1350,335,3);
    }
    if (year == 1139) {
      events[prevYear]["SPA"].state = 5;
      addCountry("POR","Portugal",year,1,3550,7 ,1170,340,4);
      events[prevYear]["ABY"].name = "Aby.";
    }
    if (year == 1150) {
      events[prevYear]["MOR"].name = "Almohads";
      if (RNG("Big_Portugal",year) <= veryUnlikely) {
        events[prevYear]["POR"].state = 2;
      }
      events[prevYear]["ISR"].state = 1;
    }
    if (year == 1155) {
      events[prevYear]["ENG"].state = 6;
    }
    if (year == 1171) {
      events[prevYear]["FAT"].name = "Ayyubid Sultinate";
    }
    if (year == 1180) {
      events[prevYear]["JAP"].state = 4;
      addCountry("BUN","Kitara",year,1,2080,6 ,1420,600,5);
    }
    if (year == 1190) {
      events[prevYear]["BUL"].strength = 600;
      events[prevYear]["BUL"].state = 6;
      events[prevYear]["GHA"].name = "Sosso";
      events[prevYear]["GHA"].x += 20;
      events[prevYear]["GHA"].size += 2;
    }
    if (year == 1197) {
      events[prevYear]["INC"].state = 3;
      events[prevYear]["INC"].name = "Cuzco";
    }
    if (year == 1200) {
      addCountry("CZE","Bohemia",year,1,2180,6 ,1350,275,4);
    }
    if (year == 1205) {
      events[prevYear]["ENG"].state = 7;
      addCountry("MON","Mongol Empire",year,1,551,6 ,1710,290,15);
    }
    if (year == 1210) {
      events[prevYear]["RUS"].state = 4;
      events[prevYear]["RUS"].name = "";
    }
    if (year == 1215) {
      events[prevYear]["MON"].state = 2;
      addCountry("SOM","Ajuran",year,1,2080,6 ,1540,580,8);
    }
    if (year == 1220) {
      events[prevYear]["MON"].state = 3;
      events[prevYear]["CHI"].y += 30;
    }
    if (year == 1230) {
      events[prevYear]["MON"].state = 4;
      events[prevYear]["SPA"].state = 6;
      addCountry("LIV","Teutonic",year,1,2080,6 ,1390,225,4);
      events[prevYear]["YEM"].name = "Rasulids";
    }
    if (year == 1237) {
      events[prevYear]["MON"].state = 5;
    }
    if (year == 1240) {
      addCountry("LIT","Lithuania",year,5,2080,6 ,1390,235,4);
    }
    if (year == 1242) {
      events[prevYear]["MON"].state = 6;
      events[prevYear]["ALG"].name = "Zayyanids";
      events[prevYear]["GEO"].state = 3;
      events[prevYear]["TIB"].strength = 0;
    }
    if (year == 1248) {
      events[prevYear]["MON"].state = 7;
      events[prevYear]["GHA"].strength = 0;
    }
    if (year == 1250) {
      events[prevYear]["FAT"].name = "Mamluks";
      events[prevYear]["FAT"].size += 3;
      events[prevYear]["FAT"].x += 30;
    }
    if (year == 1260) {
      events[prevYear]["MON"].state = 8;
      events[prevYear]["SWE"].state = 2;
    }
    if (year == 1263) {
      events[prevYear]["ICE"].name = "Iceland (Nor.)"
    }
    if (year == 1265) {
      events[prevYear]["MON"].state = 9;
      events[prevYear]["BUR"].state = 3;
    }
    if (year == 1273) {
      addCountry("MAL","Mali Empire",year,1,1250,6 ,1140,515,6);
      events[prevYear]["BUN"].name = "Bunyoro";
      events[prevYear]["MOR"].name = "Maranids";
    }
    if (year == 1280) {
      addCountry("SCO","Scotland",year,1,1250,6);
      events[prevYear]["ENG"].state = 8;
      addCountry("THA","Sukhothal",year,1,1250,6 ,1890,530,5);
      events[prevYear]["NAP"].name = "Naples";
    }
    if (year == 1289) {
      events[prevYear]["BUR"].name = "Pegu";
      events[prevYear]["BUR"].x += 30;
    }
    if (year == 1292) {
      events[prevYear]["SVJ"].state = 2;
    }
    if (year == 1313) {
      events[prevYear]["CHM"].strength = 0;
      events[prevYear]["LIT"].state = 2;
    }
    if (year == 1317) {
      addCountry("OTT","Ottoman Empire",year,1,1000,5 ,1380,350,9);
      events[prevYear]["AZX"].name = "Tarascans";
      addCountry("KIL","Kilwa",year,1,1250,6 ,1540,650,6);
    }
    if (year == 1320) {
      events[prevYear]["NOR"].name = " ";
    }
    if (year == 1330) {
      events[prevYear]["CZE"].state = 2;
      events[prevYear]["CHM"].strength = 1000;
    }
    if (year == 1333) {
      events[prevYear]["IND"].state = 7;
      events[prevYear]["IND"].name = "Delhi Sultanate";
      events[prevYear]["CHO"].state = 6;
      events[prevYear]["CHO"].name = "Vijayanayaras";
    }
    if (year == 1334) {
      events[prevYear]["OTT"].state = 2;
      events[prevYear]["ABY"].state = 4;
      addCountry("NIG","West African Kingdoms",year,1,1250,6 ,1200,540,5);
    }
    if (year == 1340) {
      events[prevYear]["POL"].state = 3;
      addCountry("MAJ","Majapahit",year,1,2250,6 ,2000,630,7);
      events[prevYear]["SER"].state = 2;
    }
    if (year == 1350) {
      events[prevYear]["PAP"].state = 2;
      addCountry("ROA","Wallachia",year,1,2250,6 ,1430,300,4);
      c.ottoman_romania = true;
    }
    if (year == 1355) {
      events[prevYear]["TIB"].strength = 900;
      events[prevYear]["TIB"].name = "Phagmodrupa";
      events[prevYear]["TIB"].state = 2;
      events[prevYear]["TIB"].x -= 30;
      events[prevYear]["TIB"].y -= 10;
    }
    if (year == 1357) {
      events[prevYear]["KOR"].state = 2;
      addCountry("JOL","Jolof",year,1,1250,6 ,1105,500,6);
      events[prevYear]["THA"].state = 2;
      events[prevYear]["NOR"].name = "Norway";
    }
    if (year == 1363) {
      events[prevYear]["LIT"].state = 3;
    }
    if (year == 1372) {
      events[prevYear]["CHI"].state = 6;
      events[prevYear]["CHI"].name = "Ming Dynasty";
      events[prevYear]["MAJ"].state = 2;
      events[prevYear]["SVJ"].name = "";
      addCountry("CHIa","Chinese America",year,1,0,6 ,300,370,9);
    }
    if (year == 1387) {
      events[prevYear]["OTT"].state = 3;
      events[prevYear]["CHA"].name = "Bornu";
      events[prevYear]["CHA"].x += 20;

      events[prevYear]["MON"].state = 10;
      events[prevYear]["MON"].name = "N. Yuan";
      events[prevYear]["MON"].x += 90;
      events[prevYear]["MON"].size -= 2;
      addCountry("HOR","Golden Horde",year,1,119,6 ,1490,260,10);

      // Chinese colonization of the Americas?
      if (RNG("China_Colonizes_America",year) <= veryUnlikely) {
        eventLog.push("*1387: China establishes a permanent settlement in the Americas");
        events[prevYear]["CHIa"].strength = 2000;
      }
    }
    if (year == 1389) {
      events[prevYear]["TUR"].strength = 120;
      events[prevYear]["TUR"].name = "Timurid Empire";
      events[prevYear]["TUR"].x += 60;
    }
    if (year == 1392) {
      addCountry("KON","Kongo",year,1,1550,6 ,1300,648,7);
    }
    if (year == 1397) {
      events[prevYear]["SWE"].name = "Kalmar Union";
      events[prevYear]["SWE"].state = 7;
      events[prevYear]["NOR"].name = "";
      events[prevYear]["DEN"].strength = 0;
      events[prevYear]["TUR"].state = 4;
    }
    if (year == 1400) {
      addCountry("MLY","Malacca",year,1,3600,5 ,1970,575,5);
      events[prevYear]["OTT"].state = 4;
      events[prevYear]["BYZ"].size -= 5;
      events[prevYear]["BYZ"].x += 30;
      events[prevYear]["BUL"].strength = 0;
      events[prevYear]["MAY"].name = "Maya";
      addCountry("IRO","Iroquois",year,1,2200,5 ,780,310,4);
    }
    if (year == 1409) {
      addCountry("QQO","Qara Qoyunlu",year,1,100,5 ,1490,370,7);
    }
    if (year == 1433) {
      events[prevYear]["CAM"].name = "Cambodia";
      events[prevYear]["CAM"].size -= 2;
      events[prevYear]["CAM"].y -= 40;
      events[prevYear]["CHIa"].state = 2;
    }
    if (year == 1448) {
      addCountry("KUW","Kuwait",year,1,400,5 ,1570,405,4);
    }
    if (year == 1450) {
      addCountry("AUS","Austria",year,1,1000,5 ,1340,285,4);
      events[prevYear]["DEN"].strength = 2000;
      events[prevYear]["SWE"].state = 2;
      events[prevYear]["SWE"].name = "Sweden";
      events[prevYear]["NOR"].name = " ";
    }
    if (year == 1451) {
      events[prevYear]["NOR"].name = "Norway";
    }
    if (year == 1453) {
      if (RNG("Byzantium",year) <= unlikely && c.roman_empire) {
        c.byzantium = true;
        c.ottoman_romania = false;
        c.am_colonization = false;
        events[prevYear]["BYZ"].strength += 700;
        events[prevYear]["OTT"].state = 3;
      } else {
        events[prevYear]["BYZ"].strength = 0;
      }
      events[prevYear]["QQO"].state = 2;
      events[prevYear]["TUR"].state = 5;
    }
    if (year == 1458) {
      if (c.byzantium) {
        events[prevYear]["OTT"].state = 2;
        events[prevYear]["BYZ"].size += 3;
        events[prevYear]["BYZ"].x -= 20;
      }
      events[prevYear]["SWE"].name = "Kalmar Union";
      events[prevYear]["SWE"].state = 7;
      events[prevYear]["NOR"].name = "";
      events[prevYear]["DEN"].strength = 0;
    }
    if (year == 1468) {
      addCountry("SON","Songhay",year,1,1000,5 ,1230,495,6);
      events[prevYear]["MOR"].name = "Morocco";
      events[prevYear]["MOR"].x += 30;
      events[prevYear]["POL"].state = 4;
      events[prevYear]["DEN"].strength = 2000;
      events[prevYear]["SWE"].state = 2;
      events[prevYear]["SWE"].name = "Sweden";
    }
    if (year == 1470) {
      events[prevYear]["QQO"].name = "Aq Qoyunlu";
    }
    if (year == 1474) {
      if (c.byzantium) {
        events[prevYear]["OTT"].strength = 0;
      } else {
        events[prevYear]["OTT"].state = 5;
      }
      events[prevYear]["SER"].strength = 0;
    }
    if (year == 1477) {
      events[prevYear]["JAP"].state = 5;
      events[prevYear]["AUS"].state = 2;
      events[prevYear]["BYZ"].state = 2;
    }
    if (year == 1486) {
      events[prevYear]["TIB"].name = "Ringpungpa";
    }
    if (year == 1492) {
      events[prevYear]["SPA"].state = 7;
      if (c.byzantium) {
        events[prevYear]["BYZ"].state = 1;
        events[prevYear]["FAT"].strength = 0;
      }
    }
    if (year == 1494) {
      if (c.am_colonization) {
        events[prevYear]["SPAc"].strength = 750;
      }
    }
    if (year == 1480) {
      events[prevYear]["ENG"].state = 9;
      events[prevYear]["INC"].state = 4;
      events[prevYear]["INC"].name = "Inca Empire";
      events[prevYear]["INC"].size = 12;
      events[prevYear]["AZX"].state = 2;
      events[prevYear]["AZX"].name = "Aztec Empire";
    }
    if (year == 1498) {
      events[prevYear]["SWE"].name = "Kalmar Union";
      events[prevYear]["SWE"].state = 7;
      events[prevYear]["NOR"].name = "";
      events[prevYear]["DEN"].strength = 0;
      addCountry("BRA","Portuguese Brazil",year,1,0,6 ,906,700,8);
    }
    if (year == 1500) {
      if (c.am_colonization) {
        events[prevYear]["BRA"].strength = 1250;
      }
    }
    if (year == 1501) {
      events[prevYear]["DEN"].strength = 2000;
      events[prevYear]["SWE"].state = 2;
      events[prevYear]["SWE"].name = "Sweden";
    }
    if (year == 1509) {
      events[prevYear]["RUS"].state = 5;
      events[prevYear]["RUS"].y -= 30;
      events[prevYear]["RUS"].name = "Novogrod";

      events[prevYear]["PER"].name = "Safavid Empire";
      events[prevYear]["PER"].strength += 2000;
      events[prevYear]["PER"].state = 5;
    }
    if (year == 1513) {
      events[prevYear]["SPAc"].state = 2;
      addCountry("KZH","Yarkent",year,1,195,6 ,1725,325,9);
      events[prevYear]["LIT"].state = 4;
    }
    if (year == 1524) {
      events[prevYear]["OTT"].state = 6;
      events[prevYear]["FAT"].strength = 0;
      events[prevYear]["ICE"].name = "Iceland (Den.)";
    }
    if (year == 1525) {
      events[prevYear]["SPAc"].state = 3;
      if (c.am_colonization) {
        events[prevYear]["AZX"].strength = 0;
      }
      addCountry("DENc","Greenland (Den.)",year,1,3250,6 ,1030,195,8);
      events[prevYear]["LIV"].name = "Livonia";
      events[prevYear]["CZE"].strength = 0;
      events[prevYear]["AUS"].state = 3;
    }
    if (year == 1529) {
      events[prevYear]["MAJ"].strength = 0;
      events[prevYear]["MLY"].name = "Johor";
    }
    if (year == 1533) {
      events[prevYear]["SPAc"].state = 4;
      events[prevYear]["BRA"].state = 2;
      events[prevYear]["OTT"].state = 7;
      if (!c.byzantium) {
        events[prevYear]["HUN"].strength = 0;
        events[prevYear]["AUS"].state = 4;
      }

      if (c.am_colonization) {
        events[prevYear]["INC"].strength = 0;
      }
    }
    if (year == 1539) {
      if (c.am_colonization) {
        events[prevYear]["INC"].strength = 30;
        events[prevYear]["INC"].name = "Neo-Incan State";
        events[prevYear]["INC"].state = 3;
        events[prevYear]["INC"].size -= 4;
        events[prevYear]["INC"].y -= 30;
        events[prevYear]["INC"].x += 20;
      }
    }
    if (year == 1545) {
      events[prevYear]["ENG"].state = 10;
      addCountry("MAD","Merina",year,1,3250,6 ,1550,740,5);
      events[prevYear]["YEM"].strength = 0;
    }
    if (year == 1555) {
      events[prevYear]["MOR"].name = "Saadis";
      events[prevYear]["MOR"].size ++;
    }
    if (year == 1558) {
      events[prevYear]["BUR"].name = "Toungoo";
    }
    if (year == 1563) {
      if (c.am_colonization) {
        events[prevYear]["SPAc"].state = 5;
        events[prevYear]["AZX"].strength = 0;
        events[prevYear]["BRA"].state = 3;
      }
      events[prevYear]["LIV"].strength = 0;
    }
    if (year == 1566) {
      events[prevYear]["TIB"].name = "Tsangpa";
      events[prevYear]["TIB"].size += 2;
      events[prevYear]["TIB"].y -= 8;
    }
    if (year == 1570) {
      events[prevYear]["OTT"].state = 8;
      events[prevYear]["ALG"].strength = 0;

      // Polish-Lithuania
      events[prevYear]["POL"].state = 5;
      events[prevYear]["POL"].name = "Poland-Lithuania";
      events[prevYear]["LIT"].strength = 0;
    }
    if (year == 1575) {
      addCountry("PHI","Philippines (SP)",year,1,653,6 ,2130,520,7);
      events[prevYear]["ISL"].strength = 1000;
      events[prevYear]["ISL"].name = "Hejaz";
      events[prevYear]["ISL"].size = 8;
      events[prevYear]["ISL"].x += 160;
      events[prevYear]["ISL"].y += 30;
      events[prevYear]["ISL"].state = 8;
    }
    if (year == 1580) {
      c.iberianUnion = true;
      if (c.iberianUnion) {
        events[prevYear]["BRA"].name = "Brazil (Iberian Union)";
        events[prevYear]["POR"].name = "";
        events[prevYear]["SPA"].name = "Iberian Union";
      }
      addCountry("PORa","Portuguese Colonies",year,1,653,6 ,1360,700,6);
      events[prevYear]["MOR"].state = 2;
      events[prevYear]["POL"].state = 6;
    }
    if (year == 1582) {
      addCountry("DUT","U.P.",year,1,653,6 ,1300,250,4);
    }
    if (year == 1590) {
      events[prevYear]["JAP"].state = 6;
      events[prevYear]["SPAc"].state = 6;
      events[prevYear]["POL"].state = 7;
      events[prevYear]["SWE"].state = 3;
      events[prevYear]["NOR"].state = 2;
    }
    if (year == 1592) {
      events[prevYear]["SON"].name = "Gao";
    }
    if (year == 1594) {
      events[prevYear]["RUS"].state = 6;
      events[prevYear]["RUS"].name = "Russian Empire"
      events[prevYear]["SOM"].state = 2;
      events[prevYear]["THA"].name = "Ayutthaya";
      events[prevYear]["SON"].strength = 0;
    }
    if (year == 1600) {
      addCountry("DAR","Darfur Sennar",year,1,3250,5 ,1390,512,6);
    }
    if (year == 1603) {
      events[prevYear]["JAP"].name = "Tokugawa Shogunate";
    }
    if (year == 1607) {
      events[prevYear]["DENc"].state = 2;
      events[prevYear]["MAL"].state = 2;
      events[prevYear]["MAL"].name = "Bamana";
      events[prevYear]["MAL"].x += 10;
      addCountry("CAN","British Colonies",year,1,0,7 ,830,300,9);
      addCountry("QUE","French Colonies",year,1,0,7 ,750,270,9);
      addCountry("DUTc","New Netherlands",year,1,0,7 ,800,340,4);
    }
    if (year == 1612) {
      if (c.am_colonization) {
        events[prevYear]["CAN"].strength = 3250;
        events[prevYear]["QUE"].strength = 200;
      }
    }
    if (year == 1615) {
      if (c.am_colonization) {
        events[prevYear]["DUTc"].strength = 52;
      }
    }
    if (year == 1615) {
      addCountry("GER","Prussia",year,1,2000,8 ,1330,250,4);
    }
    if (year == 1622) {
      addCountry("DUTi","Dutch East Indies",year,1,2553,6 ,2000,630,8);
    }
    if (year == 1625) {
      addCountry("FRAk","St. Domingue",year,1,700,6 ,700,480,4);
      addCountry("DUTb","Dutch Brazil",year,1,0,6 ,900,600,9);
      events[prevYear]["SWE"].state = 4;
    }
    if (year == 1630) {
      events[prevYear]["DUTb"].strength = 9;
      addCountry("PORi","Timor",year,1,1553,6 ,2090,670,4);
    }
    if (year == 1635) {
      addCountry("QIN","Qing Dynasty",year,1,700,9 ,1925,290,10);
    }
    if (year == 1637) {
      events[prevYear]["RUS"].state = 7;
      addCountry("ENGk","British Caribbean",year,1,700,6);
      events[prevYear]["GER"].state = 2;
      events[prevYear]["FRA"].state = 4;

      // Dutch Brazil
      if (RNG("Dutch_Invasion_of_Brazil",year) <= veryUnlikely) {
        c.dutch_brazil = true;
        events[prevYear]["DUTb"].strength = 0;
        events[prevYear]["BRA"].name = "Dutch Brazil";
      }
    }
    if (year == 1641) {
      events[prevYear]["SPAc"].state = 7;
      events[prevYear]["BRA"].state = 4;
      addCountry("SUR","Dutch Suriname",year,1,3250,6 ,870,560,4);
      addCountry("FGU","French Guiana",year,1,3250,6 ,880,575,4);

      c.iberianUnion = false;
      if (!c.iberianUnion) {
        if (events[prevYear]["BRA"].name != "Dutch Brazil") {
          events[prevYear]["BRA"].name = "Portuguese Brazil";
        }
        events[prevYear]["POR"].name = "Portugal";
        events[prevYear]["SPA"].name = "Spain";
      }
    }
    if (year == 1647) {
      events[prevYear]["CAN"].state = 2;
      events[prevYear]["QUE"].state = 2;
    }
    if (year == 1649) {
      events[prevYear]["ENG"].name = "Great Britain";
      events[prevYear]["ENG"].y -= 20;
      events[prevYear]["ENG"].x -= 20;
      events[prevYear]["ENG"].state = 11;
      addCountry("SWI","Switzerland",year,1,3250,6 ,1305,290,2);
      events[prevYear]["QIN"].state = 2;
      events[prevYear]["CHI"].strength = 0;

      events[prevYear]["YEM"].strength = 1000;
      events[prevYear]["YEM"].name = "Yemen";
      events[prevYear]["YEM"].state = 2;
      events[prevYear]["OMA"].state = 2;
      events[prevYear]["ITA"].state = 4;
    }
    if (year == 1655) {
      events[prevYear]["KIL"].name = "Zanzibar";
      addCountry("DUTs","Cape Colony",year,1,3250,6 ,1260,840,7);
    }
    if (year == 1658) {
      events[prevYear]["PORa"].state = 2;
      events[prevYear]["DEN"].state = 3;

      events[prevYear]["IRO"].state = 2;
      events[prevYear]["IRO"].x = 690;
      events[prevYear]["IRO"].y = 320;
      events[prevYear]["IRO"].size = 9;
      events[prevYear]["MOR"].name = "Morocco";
    }
    if (year == 1670) {
      events[prevYear]["CAN"].state = 3;
      events[prevYear]["CAN"].x -= 15;
      events[prevYear]["CAN"].y += 30;
    }
    if (year == 1678) {
      events[prevYear]["IND"].state = 8;
      events[prevYear]["IND"].name = "Mughal Empire";
      events[prevYear]["CHO"].state = 7;
      events[prevYear]["CHO"].name = "Marathas";

      events[prevYear]["MON"].state = 11;
      events[prevYear]["MON"].x -= 70;
      events[prevYear]["MON"].size -= 4;
      events[prevYear]["MON"].name = "Dzungar Khanate";
      events[prevYear]["TIB"].strength = 0;
    }
    if (year == 1680) {
      events[prevYear]["SOM"].name = "Geledi";
      events[prevYear]["QUE"].state = 3;
    }
    if (year == 1682) {
      events[prevYear]["QUE"].state = 4;
      events[prevYear]["SPAc"].state = 8;
    }
    if (year == 1686) {
      events[prevYear]["OTT"].state = 9;
      events[prevYear]["AUS"].state = 5;
    }
    if (year == 1700) {
      events[prevYear]["JAP"].state = 7;
      events[prevYear]["CHM"].strength = 0;
      events[prevYear]["QIN"].state = 3;
      events[prevYear]["QIN"].x -= 50;
      events[prevYear]["QIN"].y += 70;
      events[prevYear]["QIN"].size += 2;
    }
    if (year == 1705) {
      events[prevYear]["DUT"].state = 2;
    }
    if (year == 1710) {
      events[prevYear]["SWE"].state = 3;
    }
    if (year == 1714) {
      events[prevYear]["SPA"].state = 9;
      events[prevYear]["AUS"].state = 6;
      events[prevYear]["DUT"].state = 1;
      events[prevYear]["ITA"].state = 5;
    }
    if (year == 1720) {
      events[prevYear]["MON"].state = 12;
    }
    if (year == 1723) {
      addCountry("FRAa","Mauritius",year,1,2250,6);
    }
    if (year == 1730) {
      events[prevYear]["CAN"].state = 4;
    }
    if (year == 1736) {
      events[prevYear]["PER"].name = "Afsharid Empire";
    }
    if (year == 1740) {
      events[prevYear]["GER"].state = 3;
    }
    if (year == 1750) {
      addCountry("AFG","Durrani Empire",year,1,2250,6 ,1650,380,6);
      addCountry("RAJ","East India Co.",year,1,0,6 ,1720,460,8);
    }
    if (year == 1757) {
      if (c.british_raj) {
        events[prevYear]["RAJ"].strength = 2200;
      }
      events[prevYear]["PHI"].state = 2;
      events[prevYear]["BUR"].name = "Konbaung";
    }
    if (year == 1762) {
      events[prevYear]["AFG"].state = 2;
      events[prevYear]["RAJ"].state = 2;
      events[prevYear]["BUR"].state = 4;
      events[prevYear]["PER"].name = "Zands";
      addCountry("USA","United States of America",year,1,0,6 ,706,343,11);
    }
    if (year == 1763) {
      // Treaty of Paris of 1763
      if (c.am_colonization) {
        events[prevYear]["IRO"].strength = 0;
      }
      if (RNG("Seven_Years_War",year) <= unlikely) {
        events[prevYear]["QUE"].x -= 70;
        events[prevYear]["QUE"].size += 3;
        events[prevYear]["CAN"].state = 5;
        events[prevYear]["CAN"].name = " ";
        events[prevYear]["USA"].strength = 500;
        events[prevYear]["USA"].name = "13 Colonies";
        c.usa_exists = false;
        c.pax_francia = true;
      } else {
        events[prevYear]["SPAc"].state = 9;
        events[prevYear]["CAN"].state = 5;
        events[prevYear]["QUE"].strength = 0;
      }
    }
    if (year == 1764) {
      events[prevYear]["IND"].state = 9;
      events[prevYear]["IND"].name = "Maratha Empire";
      events[prevYear]["CHO"].state = 8;
      events[prevYear]["CHO"].name = "";
    }
    if (year == 1765) {
      events[prevYear]["BRA"].state = 5;
      events[prevYear]["SUR"].state = 2;
      events[prevYear]["FGU"].state = 2;
    }
    if (year == 1773) {
      // 1st Partition of Poland
      events[prevYear]["THA"].name = "Thonburi";
      events[prevYear]["GER"].state = 4;
      events[prevYear]["AUS"].state = 7;
      events[prevYear]["RUS"].state = 9;
    }
    if (year == 1775) {
      events[prevYear]["CAN"].x = 630;
      events[prevYear]["CAN"].y = 240;
      events[prevYear]["CAN"].size = 11;
      if (!c.pax_francia) {
        events[prevYear]["CAN"].name = "British America";
      } else {
        events[prevYear]["CAN"].name = "Quebec";
      }
      addCountry("BHU","Bhutan",year,1,2250,6 ,1860,418,4);
    }
    if (year == 1776) {
      if (RNG("American_Revolution",year) <= impossible || !c.am_colonization) {
        c.usa_exists = false;
      } else {
        events[prevYear]["USA"].strength = 4030;
      }
    }
    if (year == 1777) {
      events[prevYear]["USA"].state = "1a";
    }
    if (year == 1779) {
      events[prevYear]["PAP"].state = 1;
    }
    if (year == 1765) {
      events[prevYear]["RUS"].state = 8;
    }
    if (year == 1769) {
      events[prevYear]["AFG"].state = 1;
    }
    if (year == 1778) {
      if (c.pax_francia) {
        events[prevYear]["QUE"].strength += 400;
      } else {
        events[prevYear]["SPAc"].state = 9;
      }
      events[prevYear]["BRA"].state = 6;
    }
    if (year == 1781) {
      events[prevYear]["USA"].state = 1;
    }
    if (year == 1782) {
      events[prevYear]["USA"].state = "1b";
    }
    if (year == 1783) {
      if (RNG("American_Revolution",year) <= superUnlikely) {
        c.usa_exists = false;
        events[prevYear]["USA"].strength = 0;
      } else {
        events[prevYear]["USA"].state = 2;
        events[prevYear]["USA"].x = 550;
        events[prevYear]["SPAc"].state = 10;
      }
    }
    if (year == 1788) {
      // Australia
      addCountry("PORz","Portuguese Australia",year,1,0,6);
      addCountry("FRAz","French Australia",year,1,0,6);
      addCountry("DUTz","Dutch Australia",year,1,0,6);
      addCountry("ENGa","New South Wales",year,1,3250,6 ,2170,780,9);
      events[prevYear]["ENGk"].state = 2;
    }
    if (year == 1792) {
      events[prevYear]["FRAk"].state = 2;
      addCountry("RUSc","Russian America",year,1,1250,6 ,375,170,7);
      events[prevYear]["PER"].name = "Qajars";
      events[prevYear]["PER"].x += 20;
    }
    if (year == 1794) {
      if (RNG("Australia_Colonization",year) <= unlikely) {
        events[prevYear]["PORz"].strength = 1000;
      }
    }
    if (year == 1795) {
      // Partition of Poland
      events[prevYear]["POL"].strength = 0;
      events[prevYear]["POL"].name = "Poland";
      events[prevYear]["GER"].state = 5;
      events[prevYear]["AUS"].state = 8;

      events[prevYear]["THA"].state = 3;
      events[prevYear]["THA"].name = "Rattanakosin";
    }
    if (year == 1796) {
      c.napoleonic_wars = true;
      if (c.pax_francia) {
        c.napoleonic_wars = false;
      }
      if (c.napoleonic_wars) {
        events[prevYear]["FRA"].state = 5;
        events[prevYear]["DUT"].name = "Bat.";
        events[prevYear]["SWI"].name = "Helvetica";
      }
    }
    if (year == 1799) {
      addCountry("ENGs","South Africa",year,1,3250,6 ,1270,820,9);
      events[prevYear]["DUTs"].name = "";
      events[prevYear]["DUTi"].state = 2;
    }
    if (year == 1800) {
      if (c.am_colonization) {
        events[prevYear]["QUE"].state = 5;
        if (c.usa_exists) {
          events[prevYear]["QUE"].strength = 4;
        } else {
          events[prevYear]["QUE"].strength = 400;
        }
        events[prevYear]["QUE"].name = "Louisiana";
        events[prevYear]["QUE"].x = 555;
        events[prevYear]["QUE"].y = 300;
        events[prevYear]["QUE"].size = 12;
      }
    }
    if (year == 1801) {
      events[prevYear]["ENG"].name = "United Kingdom";
      events[prevYear]["AFG"].state = 3;
      events[prevYear]["VIE"].name = "Vietnam";
    }
    if (year == 1803) {
      addCountry("GUY","British Guiana",year,1,3250,6 ,840,550,4);
    }
    if (year == 1804) {
      events[prevYear]["USA"].state = 3;
      events[prevYear]["CSA"].state = 1;
      events[prevYear]["SPAc"].state = 11;
      events[prevYear]["RAJ"].state = 3;
      events[prevYear]["AUS"].state = 9;

      events[prevYear]["SUR"].state = 3;
      events[prevYear]["FGU"].state = 3;
      events[prevYear]["FRAk"].state = 1;
      events[prevYear]["FRAk"].name = "";
      addCountry("HAI","Haiti",year,1,700,6 ,740,480,4);
    }
    if (year == 1806) {
      events[prevYear]["HRE"].name = "Confed. of Rhine";
      addCountry("SOK","Sokoto",year,1,98,6 ,1270,530,10);
      events[prevYear]["NIG"].y += 10;

      if (c.napoleonic_wars) {
        events[prevYear]["FRA"].state = 6;
      }
    }
    if (year == 1807) {
      if (c.napoleonic_wars) {
        events[prevYear]["FRA"].state = 7;
        events[prevYear]["GER"].state = 4;
      }
      
      // Latin American Countries
      addCountry("ARG","Rio de la Plata",year,1,0,6 ,793,810,7);
      addCountry("PAR","Paraguay",year,1,0,6 ,850,770,4);
      addCountry("CHL","Chile",year,1,0,6 ,765,790,7);
      addCountry("VEZ","Venezuela",year,1,0,6 ,755,550,7);
      addCountry("GCO","Gran Colombia",year,1,0,6 ,700,584,6);
      addCountry("CEN","Central America",year,1,0,6 ,595,520,6);
      addCountry("MEX","Mexico",year,1,0,6 ,510,446,10);
      addCountry("PEU","Peru",year,1,0,6 ,700,670,9);
      addCountry("BOL","Bolivia",year,1,0,6 ,800,720,7);
      addCountry("EQU","Equador",year,1,0,6 ,680,610,5);
      addCountry("COL","Colombia",year,1,0,6 ,710,580,8);
      addCountry("URU","Uruguay",year,1,0,6 ,879,830,5);
    }
    if (year == 1810) {
      if (c.am_colonization) {
        events[prevYear]["ARG"].strength = 3200;
        events[prevYear]["PAR"].strength = 3200;
      }
    }
    if (year == 1811) {
      events[prevYear]["NEP"].state = 4;
      events[prevYear]["RUSc"].state = 2;
    }
    if (year == 1812) {
      events[prevYear]["SWE"].state = 6;
      if (c.napoleonic_wars) {
        events[prevYear]["FRA"].state = 8;
      }
    }
    if (year == 1813) {
      if (c.napoleonic_wars) {
        events[prevYear]["FRA"].state = 7;
      }
    }
    if (year == 1814) {
      if (c.napoleonic_wars) {
        events[prevYear]["FRA"].state = 5;
      }
    }
    if (year == 1815) {
      if (RNG("Napoleonic_Wars",year) <= unlikely) {
        c.french_victory = true;
      } else {
        // End of Napoleonic Wars
        c.napoleonic_wars = false;
        events[prevYear]["HRE"].name = "";
        events[prevYear]["GER"].state = 6;
        events[prevYear]["DUT"].state = 2;
        events[prevYear]["DUT"].name = "Neth.";
        events[prevYear]["SWI"].name = "Switzerland";
        events[prevYear]["SWE"].state = 5;
        events[prevYear]["FRA"].state = 4;
      }
    }
    if (year == 1817) {
      if (c.am_colonization) {
        events[prevYear]["CHL"].strength = 3200;
        events[prevYear]["VEZ"].strength = 3;
      }
    }
    if (year == 1818) {
      if (c.british_raj) {
        events[prevYear]["RAJ"].state = 4;
        events[prevYear]["CHO"].strength = 0;
        events[prevYear]["IND"].strength = 0;
      } else {
        events[prevYear]["IND"].state = 8;
        events[prevYear]["AFG"].strength = 0;
      }
    }
    if (year == 1819) {
      if (c.am_colonization) {
        events[prevYear]["GCO"].strength = 3200;
      }
    }
    if (year == 1821) {
      if (c.am_colonization) {
        events[prevYear]["MEX"].strength = 3200;
      }
      events[prevYear]["OMA"].state = 3;
    }
    if (year == 1822) {
      if (!c.usa_exists) {
        events[prevYear]["MEX"].state = "a";
      }
      events[prevYear]["SPAc"].state = 12;
      events[prevYear]["USA"].state = 4;
      events[prevYear]["BRA"].state = 7;
      events[prevYear]["AFG"].state = 4;
      events[prevYear]["AFG"].name = "Afgans";
      addCountry("FAK","British Falklands",year,1,3250,6 ,940,960,4);
      if (c.am_colonization) {
        events[prevYear]["PEU"].strength = 3200;
        events[prevYear]["CEN"].strength = 3200;
      }

      events[prevYear]["BRA"].size = 14;
      events[prevYear]["BRA"].x = 850;
      events[prevYear]["BRA"].y = 650;
      events[prevYear]["BRA"].name = "Brazil";

      if (!c.byzantium) {
        events[prevYear]["GRE"].strength = 500;
        events[prevYear]["GRE"].name = "Greece";
        events[prevYear]["GRE"].state = 7;
        events[prevYear]["GRE"].x = 1395;
        events[prevYear]["GRE"].y = 346;
        events[prevYear]["GRE"].size = 4;
      }
    }
    if (year == 1824) {
      if (c.am_colonization) {
        events[prevYear]["BOL"].strength = 3200;
      }
      addCountry("LBR","Liberia",year,1,2250,6 ,1170,560,5);
    }
    if (year == 1825) {
      if (RNG("Rome_Colonizes_America",year) > superUnlikely) {
        events[prevYear]["SPAc"].state = 1;
        events[prevYear]["SPAc"].name = "";
      }
      events[prevYear]["RUSc"].state = 3;
      if (c.usa_exists) {
        events[prevYear]["LBR"].strength = 2250;
      }
      if (RNG("US_Imperialism",year) <= unlikely) {
        c.us_imperialism = true;
        events[prevYear]["LBR"].name = "U.S. Africa";
      }
      events[prevYear]["ISL"].name = "Najd";
    }
    if (year == 1828) {
      events[prevYear]["CAN"].state = 6;
      events[prevYear]["MAD"].state = 2;
      if (RNG("Australia_Colonization",year) <= veryUnlikely) {
        events[prevYear]["DUTz"].strength = 1000;
      }
      if (!c.usa_exists && c.am_colonization) {
        events[prevYear]["USA"].strength = 300;
        events[prevYear]["USA"].name = " ";
      }
    }
    if (year == 1829) {
      if (c.am_colonization) {
        events[prevYear]["URU"].strength = 3200;
      }
      if (c.us_imperialism) {
        events[prevYear]["LBR"].state = "a";
      }
    }
    if (year == 1830) {
      if (RNG("Gran_Colombia",year) > veryUnlikely && c.am_colonization) {
        events[prevYear]["EQU"].strength = 3200;
        events[prevYear]["COL"].strength = 3200;
        events[prevYear]["VEZ"].strength = 900;
        events[prevYear]["GCO"].strength = 0;
      }
      events[prevYear]["ENGa"].state = 2;
      events[prevYear]["ARG"].name = "Argentina";
      if (RNG("Australia_Colonization",year) <= superUnlikely) {
        events[prevYear]["FRAz"].strength = 1000;
        events[prevYear]["PORz"].strength = 0;
        events[prevYear]["DUTz"].strength = 0;
      } else if (RNG("Australia_Colonization",year) <= veryUnlikely) {
        events[prevYear]["FRAz"].strength = 1000;
      }
      events[prevYear]["OTT"].state = 10;
      addCountry("BEL","Belgium",year,1,3250,6);
      addCountry("TEX","Texas",year,1,0,8 ,565,385,8);
    }
    if (year == 1835) {
      events[prevYear]["ENGs"].state = 2;
      if (c.am_colonization) {
        events[prevYear]["TEX"].strength = 13;
      }
    }
    if (year == 1836) {
      events[prevYear]["TEX"].state = 2;
    }
    if (year == 1837) {
      events[prevYear]["USA"].state = 5;

      events[prevYear]["PEU"].state = 3;
      events[prevYear]["PEU"].name = "Peru-Bolivia";
      events[prevYear]["BOL"].name = "";
    }
    if (year == 1839) {
      events[prevYear]["CEN"].state = 2;
      if (RNG("Texas_Independence",year) <= superUnlikely) {
        events[prevYear]["TEX"].state = 3;
        events[prevYear]["TEX"].strength = 399;
      }
    }
    if (year == 1840) {
      if (RNG("Peru-Bolivia",year) >= unlikely) {
        events[prevYear]["PEU"].state = 1;
        events[prevYear]["PEU"].name = "Peru";
        events[prevYear]["BOL"].name = "Bolivia";
      }
      addCountry("FRAx","French Africa",year,1,3250,6 ,1260,365,5);
      addCountry("FRAs","French Sudan",year,1,0,6);
    }
    if (year == 1842) {
      events[prevYear]["ENGk"].state = 3;
      addCountry("DOM","Dom. Rep.",year,1,700,6 ,760,490,4);
    }
    if (year == 1848) {
      events[prevYear]["USA"].x = 400;
      events[prevYear]["USA"].y -= 10;
      events[prevYear]["USA"].size +=3;
      if (RNG("Mexican_American_War",year) <= impossible) {
        c.big_mexico = true;
        events[prevYear]["USA"].state = 8;
      } else if (RNG("Mexican_American_War",year) <= superUnlikely) {
        c.big_mexico = true;
        events[prevYear]["USA"].state = 8;
        events[prevYear]["TEX"].strength += 500;
      } else if (RNG("Mexican_American_War",year) <= unlikely) {
        events[prevYear]["USA"].state = "c12";
      } else if (RNG("Mexican_American_War",year) <= possible) {
        events[prevYear]["USA"].state = "c11";
      } else {
        events[prevYear]["USA"].state = 6;
      }
      addCountry("USAo","Oregon Territory",year,1,0,6);
    }
    if (year == 1849) {
      if (RNG("Oregon_Territory",year) <= unlikely && c.usa_exists) {
        events[prevYear]["USAo"].strength = 1000;
      }
    }
    if (year == 1854) {
      if (RNG("Mexican_American_War",year) > possible) {
        events[prevYear]["USA"].state = 7;
      }
      events[prevYear]["DUTs"].state = 2;
      events[prevYear]["DUTs"].name = "SAR";
      events[prevYear]["DUTs"].x = 1440;
      events[prevYear]["DUTs"].y = 765;
      events[prevYear]["YEM"].state = 3;
    }
    if (year == 1856) {
      events[prevYear]["JAP"].state = 9;
    }
    if (year == 1859) {
      events[prevYear]["RAJ"].name = "British Raj";
      events[prevYear]["RAJ"].state = 5;
      events[prevYear]["RAJ"].x += 30;
      events[prevYear]["ITA"].state = 6;
      events[prevYear]["GEN"].strength = 0;
      events[prevYear]["VEN"].strength = 0;
      events[prevYear]["NAP"].strength = 0;

    }
    if (year == 1860) {
      if (c.usa_exists) {
        eventLog.push("1861: American Civil War");
        events[prevYear]["CSA"].strength = 5;
      }
      addCountry("FRAi","French Indochina",year,1,93,6 ,1985,500,5);
      addCountry("MEXa","Mexican Empire",year,1,0,6 ,530,475,6);
      events[prevYear]["ITA"].name = "Italy";
      events[prevYear]["ITA"].x = 1330;
      events[prevYear]["ITA"].y = 320;
      events[prevYear]["ITA"].size = 7;
      events[prevYear]["MAL"].name = "Toucouleur";
    }
    if (year == 1861) {
      events[prevYear]["VIE"].strength = 0;
      events[prevYear]["CAM"].strength = 0;
    }
    if (year == 1863) {
      if (c.usa_exists) {
        events[prevYear]["CSA"].state = 2;
      }
      events[prevYear]["DUTi"].state = 3;
      events[prevYear]["SVJ"].strength = 0;
      events[prevYear]["MEXa"].strength = 4;
    }
    if (year == 1861) {
      // events[prevYear]["VIE"].strength = 0;
    }
    if (year == 1864) {
      if (RNG("American_Civil_War",year) <= unlikely && c.usa_exists) {
        eventLog.push("*1864: Confederates win civil war");
        c.csa_victory = true;
        events[prevYear]["CSA"].strength += 500;
        events[prevYear]["CSA"].state = 3;
      }
    }
    if (year == 1865) {
      events[prevYear]["QIN"].state = 4;
      addCountry("USAc","United States of America",year,1,0,6);
    }
    if (year == 1867) {
      if (RNG("Alaskan_Purchase",year) <= impossible) {
        events[prevYear]["RUSc"].name = "Liechtensteinian Alaska";
        events[prevYear]["RUSc"].x = 300;
        events[prevYear]["RUSc"].y = 163;
        events[prevYear]["RUSc"].size = 9;
        events[prevYear]["RUSc"].strength += 300;
      } else if (RNG("Alaskan_Purchase",year) <= unlikely) {
        events[prevYear]["RUSc"].strength += 300;
      } else if (c.usa_exists) {
        events[prevYear]["USAc"].strength = 555;
        events[prevYear]["RUSc"].strength = 0;
      }
      if (!c.usa_exists || c.pax_francia) {
        events[prevYear]["RUSc"].state = "a";
      }

      events[prevYear]["CAN"].state = 7;
      events[prevYear]["GER"].state = 7;
      events[prevYear]["GER"].name = "N. German Confed."
      events[prevYear]["GER"].x -= 30;
      events[prevYear]["GER"].y += 5;
      events[prevYear]["GER"].size += 2;
      events[prevYear]["AUS"].name = "Austria-Hungary";
      events[prevYear]["AUS"].state = 10;
      events[prevYear]["JAP"].name = "Japan";

      if (RNG("CSA_Expansion",year) <= likely) {
        events[prevYear]["CSA"].state = 4;
      }
    }
    if (year == 1870) {
      if (RNG("Mexican_American_War",year) > possible) {
        events[prevYear]["USA"].state = 8;
      }
      events[prevYear]["ARG"].state = 2;
      events[prevYear]["CHL"].state = 2;
      events[prevYear]["CAN"].name = "Canada";
      if (c.pax_francia) {
        events[prevYear]["CAN"].name = "Quebec";
      }
      events[prevYear]["CAN"].y -= 20;
      events[prevYear]["CAN"].size += 3;
      events[prevYear]["FRAa"].state = 2;

      if (RNG("War_of_the_Triple_Alliance",year) <= veryUnlikely) {
        events[prevYear]["PAR"].state = 3;
      }
    }
    if (year == 1871) {
      if (RNG("German_Unification") <= superUnlikely || c.french_victory || c.pax_francia) {
        c.unified_germany = false;
      } else {
        events[prevYear]["GER"].name = "Germany";
        events[prevYear]["GER"].state = 8;
        events[prevYear]["HRE"].strength = 0;
      }
      events[prevYear]["PAP"].strength = 0;
    }
    if (year == 1877) {
      events[prevYear]["ROA"].strength = 1000;
      events[prevYear]["ROA"].state = 2;
      events[prevYear]["ROA"].name = "Romania";
      c.ottoman_romania = false;
      events[prevYear]["SER"].strength = 1000;
      events[prevYear]["BUL"].strength = 1000;
      events[prevYear]["SER"].state = 3;
      events[prevYear]["BUL"].state = 10;

      if (RNG("CSA_Expansion",year) <= possible) {
        events[prevYear]["CSA"].state = 5;
        events[prevYear]["HAI"].name = "";
      }
    }
    if (year == 1880) {
      if (events[prevYear]["PAR"].state != 3) {
        events[prevYear]["PAR"].state = 2;
      }
      events[prevYear]["CHL"].state = 3;
      events[prevYear]["ARG"].state = 3;
      events[prevYear]["BRA"].state = 8;
      events[prevYear]["COL"].state = 2;

      events[prevYear]["DENc"].state = 3;
      events[prevYear]["AFG"].state = 5;
      events[prevYear]["AFG"].name = "Afganistan";
      events[prevYear]["RAJ"].state = 6;
      events[prevYear]["PER"].state = 6;
      events[prevYear]["GRE"].state = 8;

      if (RNG("CSA_Expansion",year) <= unlikely && events[prevYear]["CSA"].strength > 5) {
        c.csa_cen = true;
        events[prevYear]["CEN"].state = 1;
        events[prevYear]["CEN"].name = "";
      }
    }
    if (year == 1885) {
      events[prevYear]["ENGa"].state = 3;
      addCountry("GERc","German New Guinea",year,1,30,6 ,2270,630,10);
      if (c.af_colonization) {
        events[prevYear]["KON"].state = 2;
        events[prevYear]["KON"].name = "Belgian Congo";
      }
      events[prevYear]["KON"].y -= 30;
      events[prevYear]["KON"].x += 30;
      events[prevYear]["BEL"].state = 2;

      events[prevYear]["MLY"].name = "British Malaysia";
      events[prevYear]["BUR"].strength = 0;

      // Scramble for Africa
      addCountry("GERx","German Africa",year,1,0,6 ,1470,660,10);
      addCountry("SPAx","Spanish Sahara",year,1,0,6 ,980,440,8);
      addCountry("ITAx","Italian Africa",year,1,0,6 ,1280,430,9);
      addCountry("ENGx","British Colonies",year,1,0,6 ,1360,484,10);
      addCountry("ENGn","British Colonies",year,1,0,6 ,1190,580,7);
    }
    if (year == 1890) {
      events[prevYear]["MLY"].state = 2;

      if (c.af_colonization) {
        events[prevYear]["GERx"].strength = 30;
        events[prevYear]["SPAx"].strength = 300;
        events[prevYear]["ITAx"].strength = 300;
        events[prevYear]["DUTi"].state = 4;
        events[prevYear]["PORa"].state = 3;

        if (RNG("Portuguese_Africa",year) <= unlikely) {
          events[prevYear]["PORa"].state = "b";
        } else if (RNG("Portuguese_Africa",year) <= possible) {
          events[prevYear]["PORa"].state = "a";
        }
      }
      events[prevYear]["PHI"].state = 3;

      events[prevYear]["SOM"].strength = 0;
    }
    if (year == 1898) {
      events[prevYear]["USAc"].state = 2;
      events[prevYear]["ABY"].state = 5;
      events[prevYear]["ABY"].name = "Abyssina";
      events[prevYear]["ABY"].y += 30;
      events[prevYear]["ABY"].size += 4;
      if (c.usa_exists) {
        events[prevYear]["PHI"].name = "Philippines (US)";
      }
      events[prevYear]["THA"].state = 4;
      events[prevYear]["THA"].name = "Siam";

      if (c.af_colonization) {
        events[prevYear]["ENGx"].strength = 300;
        events[prevYear]["ENGs"].state = 3;
        events[prevYear]["BUN"].strength = 0;
        events[prevYear]["KIL"].strength = 0;
        events[prevYear]["DAR"].strength = 0;
      }
    }
    if (year == 1899) {
      if (c.af_colonization) {
        events[prevYear]["ENGn"].strength = 300;
        if (RNG("Spanish_Africa",year) <= unlikely) {
          events[prevYear]["SPAx"].state = "a";
        }
      }
    }
    if (year == 1900) {
      events[prevYear]["RUS"].state = 10;
      events[prevYear]["GEO"].strength = 0;
      events[prevYear]["ARM"].strength = 0;

      events[prevYear]["VEZ"].state = 2;
      events[prevYear]["ENGa"].name = "Commonwealth of Australia";
      events[prevYear]["ENGa"].x -= 220;
      events[prevYear]["ENGa"].size += 3;

      if (c.af_colonization) {
        events[prevYear]["FRAx"].state = 2;
        if (RNG("French_Africa",year) <= impossible || c.french_victory || c.pax_francia) {
          events[prevYear]["FRAs"].strength = 61;
          events[prevYear]["FRAs"].state = 2;
          events[prevYear]["KON"].strength = 0;
          events[prevYear]["ABY"].strength = 0;
        } else if (RNG("French_Africa",year) <= veryUnlikely) {
          events[prevYear]["FRAs"].strength = 61;
        }

        events[prevYear]["MAL"].strength = 0;
        events[prevYear]["SON"].strength = 0;
        events[prevYear]["JOL"].strength = 0;
        events[prevYear]["CHA"].strength = 0;
        events[prevYear]["NIG"].strength = 0;
        events[prevYear]["MAD"].strength = 0;
      }
    }
    if (year == 1902) {
      addCountry("CUB","Cuba",year,1,0,6 ,710,450,7);
      events[prevYear]["DUTs"].strength = 0;
    }
    if (year == 1903) {
      if (!c.csa_victory && c.am_colonization && !c.us_imperialism && !c.nova_roma) {
        events[prevYear]["CUB"].strength = 900;
      }
    }
    if (year == 1905) {
      events[prevYear]["SWE"].state = 6;
      events[prevYear]["NOR"].name = "Norway";
      events[prevYear]["NOR"].state = 3;
    }
    if (year == 1906) {
      addCountry("JAPc","",year,1,40,6 ,2060,300,5);
      events[prevYear]["RUS"].state = 11;

      if (RNG("CSA_Expansion",year) <= superUnlikely && c.usa_exists) {
        eventLog.push("*1906: The Confederate States of America forms The Confederacy of the Golden Circle");
        events[prevYear]["CSA"].state = 6;
        events[prevYear]["CSA"].name = "Confederacy of the Golden Circle";
        events[prevYear]["CSA"].y += 40;
        events[prevYear]["CSA"].size += 2;
        events[prevYear]["MEX"].name = "Mexico (CSA)";
        events[prevYear]["MEX"].size -= 4;
        events[prevYear]["MEX"].y += 20;
      }
    }
    if (year == 1912) {
      if (c.af_colonization) {
        events[prevYear]["OTT"].state = 11;
        events[prevYear]["OTT"].x += 30;
        events[prevYear]["MOR"].strength = 0;
        events[prevYear]["ITAx"].state = 2;
        if (RNG("Italian_Africa",year) <= unlikely) {
          events[prevYear]["ITAx"].state = "a";
        }
      }

      events[prevYear]["TIB"].name = "Tibet";
      events[prevYear]["TIB"].strength = 300;
      events[prevYear]["TIB"].state = 4;
      events[prevYear]["TIB"].y += 15;

      events[prevYear]["MON"].strength = 300;
      events[prevYear]["MON"].state = 13;
      events[prevYear]["MON"].name = "Mongolia";
      events[prevYear]["MON"].x = 1840;
      events[prevYear]["MON"].y = 280;
      events[prevYear]["MON"].size += 2;
      events[prevYear]["SPA"].state = 8;

      events[prevYear]["SER"].state = 4;
      events[prevYear]["BUL"].state = 7;
      events[prevYear]["QIN"].name = "Republic of China";
      events[prevYear]["QIN"].x -= 40;
      events[prevYear]["GRE"].state = 9;
      addCountry("ALB","Albania",year,1,0,6 ,1390,332,3);
    }
    if (year == 1913) {
      if (!c.byzantium) {
        events[prevYear]["ALB"].strength = 696;
      }
    }
    if (year == 1914) {
      if (RNG("Big_Albania",year) <= unlikely) {
        events[prevYear]["ALB"].state = 2;
        c.big_albania = true;
      }
    }
    if (year == 1915) {
      if (c.unified_germany) {
        events[prevYear]["GER"].state = 9;
      }
    }
    if (year == 1916) {
      events[prevYear]["QIN"].state = 5;
      addCountry("SIB","White Army",year,1,0,6 ,1770,140,20);
    }
    if (year == 1917) {
      // Russion Revolution
      if (RNG("Russian_Revolution",year) > unlikely) {
        events[prevYear]["RUS"].name = "Red Army";
        events[prevYear]["RUS"].x += 80;
        events[prevYear]["RUS"].y -= 12;
        events[prevYear]["RUS"].size += 3;
        events[prevYear]["SIB"].strength = 27;
        c.soviet_union = true;
      } else {
        c.soviet_union = false;
      }
    }
    if (year == 1918) {
      events[prevYear]["SER"].state = 5;
      events[prevYear]["ROA"].state = 3;
      events[prevYear]["SER"].name = "Yugoslavia";

      // Sykes-Picot Agreement
      addCountry("ENGb","British Middle East",year,1,0,6 ,1440,370,7);
      addCountry("SYR","Syria (Fr.)",year,1,0,6 ,1430,360,6);
      addCountry("UKR","Ukraine",year,1,0,6 ,1440,270,6);
    }
    if (year == 1919) {
      addCountry("FIN","Finland",year,1,2250,6 ,1380,185,7);
      events[prevYear]["SIB"].state = 2;
      events[prevYear]["LIV"].strength = 22;
      events[prevYear]["LIV"].state = 2;
      events[prevYear]["LIV"].name = "Estonia";
      events[prevYear]["LIV"].y -= 15;
      events[prevYear]["KZH"].name = "Alash Orda";
      events[prevYear]["KZH"].state = "a";
      events[prevYear]["KZH"].x = 1605;
      events[prevYear]["KZH"].y = 275;
      events[prevYear]["KZH"].size = 10;

      // Treaty of Versailles (WWI Aftermath)
      if (!c.byzantium) {
        events[prevYear]["SYR"].strength = 400;
        events[prevYear]["ENGb"].strength = 500;
      }
      events[prevYear]["BYZ"].state = 2;

      if (c.unified_germany) {
        c.ww2 = false;
      if (RNG("WWI_Aftermath",year) <= unlikely) {
        // Kaiserreich
        c.kaiserreich = true;
        c.ww2 = false;

        events[prevYear]["GERc"].strength += 500;
        events[prevYear]["GERx"].strength += 500;
        events[prevYear]["GERx"].state = "a";
        events[prevYear]["GERx"].x = 1330;
        events[prevYear]["GERx"].y = 610;
        events[prevYear]["GERx"].name = "MittelAfrika";
        events[prevYear]["LIB"].name = "Tripolitania";
        events[prevYear]["LIB"].x -= 20;
        events[prevYear]["ITA"].state = 5;

        events[prevYear]["GER"].state = "a";
        events[prevYear]["KON"].strength = 0;
        events[prevYear]["FRAi"].name = "German Indochina";
        events[prevYear]["MLY"].name = "German Malay";

        events[prevYear]["AFG"].state = 6;
        events[prevYear]["RAJ"].state = "a";
        events[prevYear]["NEP"].state = "a";
        events[prevYear]["SYR"].strength = 0;
        events[prevYear]["ENGb"].strength = 0;

        events[prevYear]["ARG"].state = "a";
        events[prevYear]["PAR"].strength = 0;
        events[prevYear]["URU"].strength = 0;

        events[prevYear]["GEO"].state = "a";
        events[prevYear]["GEO"].strength = 1000;
        events[prevYear]["UKR"].state = "a";
        events[prevYear]["UKR"].strength = 1000;

        events[prevYear]["KZH"].strength = 500;
      } else if (RNG("WWI_Aftermath",year) <= Default) {

        // Normal WWI
        c.ww2 = true;
        if (RNG("Arabia's_Fate",year) <= unlikely) {
          // Arabic Union
          events[prevYear]["ISL"].name = "Arabic Union";
          events[prevYear]["MES"].strength = 0;
          events[prevYear]["SYR"].strength = 0;
          events[prevYear]["ENGb"].strength = 0;
        }

        events[prevYear]["CZE"].strength = 400;
        events[prevYear]["CZE"].name = "Czechoslovakia";
        events[prevYear]["CZE"].state = 3;

        if (RNG("Fall_of_Austrian_Empire",year) <= unlikely) {
          events[prevYear]["AUS"].strength += 100;
        } else {
          events[prevYear]["AUS"].state = 11;
          events[prevYear]["AUS"].name = "Austria";
        }
        events[prevYear]["HUN"].strength = 800;
        events[prevYear]["ITA"].state = 8;

        events[prevYear]["POL"].strength = 500;
        events[prevYear]["POL"].state = 8;
        events[prevYear]["GER"].state = 10;

        if (RNG("WWI_Aftermath",year) <= possible) {
          events[prevYear]["GER"].state = "b";
          c.ww2 = false;
        }   
      }
      } else {
        c.ww2 = false;
      }
    }
    if (year == 1920) {
      addCountry("ANT","Antarctica",year,1,2250,6 ,1150,1100,20);
      events[prevYear]["ISL"].state = 9;
      events[prevYear]["OTT"].y -= 15;
      events[prevYear]["YEM"].state = 4;
      events[prevYear]["OMA"].state = 4;

      events[prevYear]["SIB"].state = 3;
      events[prevYear]["SIB"].x = 1800;
      events[prevYear]["SIB"].y = 260;
      events[prevYear]["SIB"].size = 4;
      events[prevYear]["SIB"].name = "Tannu Tuva";
      events[prevYear]["LIV"].strength = 20;
      events[prevYear]["LIT"].strength = 20;
      events[prevYear]["LIT"].state = 5;

      if (RNG("Mongolian_Expansion",year) <= unlikely) {
        events[prevYear]["MON"].state = "a";
      } else if (RNG("Mongolian_Expansion",year) <= Default) {
        events[prevYear]["MON"].strength += 10;
      }
      
      // Fate of Austria?
      if (events[prevYear]["AUS"].state != 11) {
        if (RNG("Austria's_Fate",year) <= unlikely) {
          events[prevYear]["AUS"].name = "Triple Monarchy";
          events[prevYear]["AUS"].state = "b";
        } else if (RNG("Austria's_Fate",year) <= likely) {
          events[prevYear]["AUS"].state = "a";
          events[prevYear]["AUS"].name = "United States of Austria";
        }
      }
    }
    if (year == 1921) {
      events[prevYear]["GRE"].state = 11;
    }
    if (year == 1922) {
      if (RNG("Russian_Revolution",year) > unlikely) {
        events[prevYear]["RUS"].name = "Soviet Union";
      }
      if (c.kaiserreich) {
        events[prevYear]["FRA"].name = "French Commune";
        events[prevYear]["FRAx"].name = "French Republic";
      }

      if (!c.kaiserreich) {
        events[prevYear]["OTT"].state = 12;
        events[prevYear]["OTT"].name = "Turkey";
        events[prevYear]["OTT"].x += 30;
      }

      events[prevYear]["ENG"].state = 12;
      events[prevYear]["IRE"].name = "Ireland";
      events[prevYear]["IRE"].state = 2;
      events[prevYear]["IRE"].x = 1180;
      events[prevYear]["IRE"].y = 250;
      events[prevYear]["IRE"].size = 5;
    }
    if (year == 1923) {
      if (RNG("Ottoman's_Fate",year) <= veryUnlikely && !c.kaiserreich) {
        events[prevYear]["GRE"].state = "a";
      } else if (RNG("Ottoman's_Fate",year) <= unlikely && !c.kaiserreich) {
        events[prevYear]["GRE"].strength += 10;
      } else {
        events[prevYear]["GRE"].state = 10;
      }
    }
    if (year == 1926) {
      // Post WW1 - UK Revolution?
      if (c.kaiserreich) {
        if (RNG("British_Revolution",year) <= unlikely) {
          events[prevYear]["ENG"].name = "Union of Britain";
        } else if (RNG("British_Revolution",year) <= Default) {
          events[prevYear]["ENG"].strength += 100;
        }
      }

      events[prevYear]["PER"].name = "Iran";
      events[prevYear]["PER"].size += 3;
      events[prevYear]["PER"].x += 50;
    }
    if (year == 1928) {
      if (RNG("Arabia's_Fate",year) <= unlikely) {
        events[prevYear]["OMA"].strength = 0;
      } else {
        events[prevYear]["ISL"].name = "Hejaz and Najd";
      }
    }
    if (year == 1932) {
      events[prevYear]["JAPc"].state = 2;
      events[prevYear]["THA"].name = "Thailand";
      if (RNG("Arabia's_Fate",year) <= unlikely) {
        events[prevYear]["YEM"].strength = 0;
      } else {
        events[prevYear]["ISL"].name = "Saudi Arabia";
      }
      
      if (!c.kaiserreich && !c.byzantium && RNG("Arabia's_Fate",year) > unlikely) {
        events[prevYear]["MES"].strength = 300;
        events[prevYear]["MES"].name = "Iraq";
        events[prevYear]["MES"].state = 4;
        events[prevYear]["MES"].x += 140;
      }
    }
    if (year == 1933) {
      if (c.ww2) {
        events[prevYear]["GER"].name = "German Reich";
      }
    }
    if (year == 1935) {
      if (events[prevYear]["PAR"].state != 3) {
        events[prevYear]["BOL"].state = 2;
      }
    }
    if (year == 1936) {
      events[prevYear]["ABY"].name = "Italian East Africa";
    }
    if (year == 1937) {
      events[prevYear]["JAPc"].state = 3;
    }
    if (year == 1939) {
      if (c.ww2) {
        events[prevYear]["POL"].strength = 0;
        events[prevYear]["CZE"].strength = 0;
        events[prevYear]["GER"].state = 11;
        events[prevYear]["ITA"].state = 9;
      }
    }
    if (year == 1940) {
      if (c.ww2) {
        events[prevYear]["FIN"].state = 2;
        events[prevYear]["GER"].state = 13;
        events[prevYear]["ROA"].state = 4;
      }
      events[prevYear]["ISR"].name = "Israel";

      if (RNG("Jewish_Homeland",year) <= superUnlikely) {
        events[prevYear]["ISR"].state = "a";
        events[prevYear]["ISR"].strength = 2000;
        events[prevYear]["ISR"].x = 1550;
        events[prevYear]["ISR"].y = 760;
        events[prevYear]["ISR"].size = 5;
        c.israel = false;
      } else if (RNG("Jewish_Homeland",year) <= veryUnlikely) {
        events[prevYear]["ISR"].state = "c";
        events[prevYear]["ISR"].strength = 2000;
        events[prevYear]["ISR"].name = "Jewish Oblast";
        events[prevYear]["ISR"].x = 2050;
        events[prevYear]["ISR"].y = 275;
        events[prevYear]["ISR"].size = 4;
        c.israel = false;
      }
    }
    if (year == 1941) {
      events[prevYear]["QIN"].state = 4;
      events[prevYear]["JAPc"].state = 4;
      c.occupied_iran = true;
      events[prevYear]["PER"].name = "Iran ";
      if (c.ww2) {
        events[prevYear]["GER"].state = 14;
        events[prevYear]["ITA"].state = 10;
        events[prevYear]["BUL"].state = 9;
      }
    }
    if (year == 1942) {
      if (RNG("WWII",year) >= superUnlikely) {
        events[prevYear]["ABY"].state = 6;
        events[prevYear]["ABY"].name = "Ethiopia";
      }
    }
    if (year == 1943) {
      if (RNG("Peru-Bolivia",year) >= unlikely && events[prevYear]["GCO"].strength > 0) {
        events[prevYear]["EQU"].state = 2;
        events[prevYear]["PEU"].state = 2;
      }
    }
    if (year == 1944) {
      events[prevYear]["ICE"].name = "Iceland";

      if (c.ww2) {
        if (RNG("WWII",year) <= superUnlikely) {
          events[prevYear]["GER"].strength += 100;
        } else {
          events[prevYear]["GER"].state = 11;
        }
      }
    }
    if (year == 1945) {
      // WW2 Aftermath 7452534675436784564
      if (c.ww2) {
        if (RNG("WWII",year) <= superUnlikely) {
          // Fuhrerreich
          eventLog.push("*1945: Nazi Germany wins World War II");
          c.fuhrerreich = true;
          events[prevYear]["ITAx"].state = "a";
          events[prevYear]["SIB"].state = "a";
          events[prevYear]["SIB"].strength = 100;
          events[prevYear]["RUS"].name = "Russian Anarchy";
          events[prevYear]["KZH"].strength = 100;
          events[prevYear]["KZH"].x += 30;
          events[prevYear]["KZH"].name = "Kazakhs";
          events[prevYear]["KZH"].state = 2;

          events[prevYear]["GER"].state = 13;

          events[prevYear]["UKR"].state = "a";
          events[prevYear]["UKR"].strength = 100;
          events[prevYear]["LIV"].strength = 100;
          events[prevYear]["LIT"].strength = 100;
        } else {
          // Normal WWII Outcome
          events[prevYear]["GER"].name = "Germany";
          events[prevYear]["CZE"].state = 4;
          events[prevYear]["CZE"].strength = 500;
          events[prevYear]["POL"].strength = 500;
          events[prevYear]["POL"].state = 9;
          events[prevYear]["GER"].state = 15;
          events[prevYear]["ITA"].state = 8;
          events[prevYear]["ROA"].state = 5;
          events[prevYear]["BUL"].state = 10;

          if (RNG("Greater_Hungary",year) <= unlikely) {
            c.greater_hungary = true;
          }
        }
        if (RNG("WWII",year) <= incrediblyUnlikely) {
          events[prevYear]["CAN"].name = "Greater Nazi Reich";
          events[prevYear]["CAN"].x -= 60;
          events[prevYear]["CAN"].y += 20;
        }
      }
      addCountry("JAPn","DPR Japan",year,1,0,6 ,2130,315,6);
      addCountry("DRK","N. Korea",year,1,0,6 ,2070,330,5);
    }
    if (year == 1946) {
      events[prevYear]["JAP"].state = 8;
      if (RNG("US_Imperialism",year) >= unlikely) {
        events[prevYear]["PHI"].name = "Philippines";
      }
      events[prevYear]["SYR"].state = 2;
      events[prevYear]["SYR"].name = "Syria";
      events[prevYear]["SYR"].x += 30;

      // WW2 Aftermath
      if (!c.fuhrerreich) {
        if (RNG("WWII_Aftermath",year) <= unlikely) {
          events[prevYear]["KOR"].strength = 500;
          events[prevYear]["JAPn"].strength = 600;
        } else if (RNG("WWII_Aftermath",year) <= Default) {
          // Splitting of Korea
          events[prevYear]["KOR"].strength = 500;
          events[prevYear]["KOR"].y += 15;
          events[prevYear]["KOR"].name = "S. Korea";
          events[prevYear]["DRK"].strength = 400;
        }
      } else if (RNG("Japan's_Fate",year) <= veryUnlikely) {
        events[prevYear]["JAPc"].strength += 200;
        c.big_japan = true;
      }
      if (!c.fuhrerreich) {
        if (RNG("Greater_Yugoslavia",year) <= veryUnlikely) {
          events[prevYear]["SER"].name = "Greater Yugoslavia";
          events[prevYear]["SER"].state = "a";
          events[prevYear]["BUL"].name = "";
        }
      }
      // Man in the High Castle
      if (c.fuhrerreich && RNG("Japan's_Fate",year) <= impossible) {
        events[prevYear]["USA"].state = "d";
        events[prevYear]["USA"].name = "Japan / Neutral Zone";
        events[prevYear]["USA"].size -= 4;
        c.big_japan = true;
      }
      addCountry("PAK","Pakistan",year,1,0,6 ,1660,400,10);
    }
    if (year == 1947) {
      addCountry("ZEA","New Zealand",year,1,2250,6 ,2270,870,10);
      if (c.british_raj) {
        events[prevYear]["RAJ"].name = "India";
        events[prevYear]["RAJ"].x += 30;
        events[prevYear]["PAK"].strength = 300;
      }
      events[prevYear]["DUTi"].name = "Indonesia";
      events[prevYear]["ITA"].state = 7;
      events[prevYear]["PER"].name = "Iran";
      if (RNG("Occupation_of_Iran",year) >= possible || c.fuhrerreich) {
        c.occupied_iran = false;
      }
      // Chinese Communist Revolution
      c.isChineseCivilWar = true;
      events[prevYear]["QIN"].state = 1;
      events[prevYear]["CHI"].strength = 1000;
      events[prevYear]["CHI"].state = 7;
      events[prevYear]["CHI"].name = "China";
      events[prevYear]["CHI"].size += 6;
      events[prevYear]["CHI"].x += 40;
      events[prevYear]["CHI"].y -= 70;
    }
    if (year == 1948) {
      if (c.fuhrerreich) {
        events[prevYear]["PAK"].state = "a";
        events[prevYear]["PAK"].name = "Bengal";
        events[prevYear]["PAK"].x = 1840;
        events[prevYear]["PAK"].y = 440;
        events[prevYear]["PAK"].size -= 3;
      }
      events[prevYear]["BUR"].name = "Burma";
      events[prevYear]["BUR"].strength = 560;

      if (c.israel) {
        events[prevYear]["ISR"].strength = 2000;
        events[prevYear]["ISR"].state = 7;
      }
      events[prevYear]["QIN"].state = 2;
    }
    if (year == 1949) {
      // Chinese Communist Revolution
      c.isChineseCivilWar = false;
      events[prevYear]["QIN"].state = 4;
      events[prevYear]["CHI"].x -= 110;
      events[prevYear]["CHI"].y += 20;
      events[prevYear]["CHI"].size +=4;

      if (c.fuhrerreich) {
        c.communist_china = false;
      } else if (RNG("Chinese_Communist_Revolution",year) <= unlikely) {
        events[prevYear]["QIN"].state = 4;
        events[prevYear]["CHI"].strength = 0;
        c.communist_china = false;
      } else if (RNG("Chinese_Communist_Revolution",year) <= possible) {
        events[prevYear]["QIN"].strength = 0;
        events[prevYear]["CHI"].strength = 3000;
        events[prevYear]["CHI"].state = "a";
      } else {
        events[prevYear]["CHI"].strength = 3000;
        events[prevYear]["QIN"].x += 210;
        events[prevYear]["QIN"].y += 80;
        events[prevYear]["QIN"].size = 4;
        events[prevYear]["QIN"].name = "Taiwan";
      }
      events[prevYear]["ENGb"].state = 2;
      events[prevYear]["ENGb"].name = "U.A.E.";
      events[prevYear]["ENGb"].y += 45;
      events[prevYear]["ENGb"].x += 150;
      events[prevYear]["ENGb"].size -= 2;
      if (!c.pax_francia) {
        events[prevYear]["ENGk"].state = 2;
      }
    }
    if (year == 1950) {
      if (RNG("Tibet",year) <= possible || RNG("Chinese_Communist_Revolution",year) <= possible) {
        events[prevYear]["TIB"].strength ++;
      } else {
        events[prevYear]["TIB"].strength = 0;
      }
    }
    if (year == 1953) {
      eventLog.push("1953: Korean War");
      if (RNG("Korean_War",year) <= superUnlikely) {
        events[prevYear]["KOR"].name = "DPR. Korea";
        events[prevYear]["DRK"].strength = 0;
        events[prevYear]["KOR"].y -= 10;
        events[prevYear]["JAP"].x += 15;
      } else if (RNG("Korean_War",year) <= veryUnlikely) {
        events[prevYear]["DRK"].strength = 0;
        events[prevYear]["KOR"].y -= 10;
        events[prevYear]["JAP"].x += 15;
      } else if (RNG("Korean_War",year) <= unlikely) {
        events[prevYear]["DRK"].strength += 0;
      } else {
        events[prevYear]["DRK"].state = 2;
      }
    }
    if (year == 1954) {
      if (c.fuhrerreich && RNG("Lake_Congo_Project",year) <= superUnlikely) {
        eventLog.push("*1954: The damming of the Congo River is complete...");
        events[prevYear]["lakes"].state = "a";
      }
      events[prevYear]["CAM"].strength = 200;
    }
    if (year == 1955) {
      // Vietnam War
      events[prevYear]["VIE"].strength = 200;
      events[prevYear]["VIE"].name = "N. Vietnam";
      events[prevYear]["CHM"].strength = 20;
      events[prevYear]["CHM"].name = "S. Vietnam";
      events[prevYear]["CHM"].y += 45;
    }
    if (year == 1956) {
      if (c.af_colonization) {
        events[prevYear]["MOR"].state = 3;
        events[prevYear]["MOR"].strength = 560;
      } else {
        events[prevYear]["MOR"].state = "b";
        events[prevYear]["MOR"].name = "Greater Morocco";
      }
      events[prevYear]["SPA"].state = 9;
    }
    if (year == 1957) {
      events[prevYear]["MLY"].name = "Malaysia";
    }
    if (year == 1960) {
      // Decolonization
      if (c.af_colonization) {
        if (!c.fuhrerreich) {
          events[prevYear]["ITAx"].state = 3;
          events[prevYear]["ITAx"].name = "Eritrea"
          events[prevYear]["ITAx"].x = 1520;
          events[prevYear]["ITAx"].y = 500;
          events[prevYear]["ITAx"].size = 5;
    
          events[prevYear]["KON"].state = 3;
          events[prevYear]["KON"].name = "Zaire";
          events[prevYear]["KON"].x += 40;
          events[prevYear]["KON"].size += 5;

          events[prevYear]["SOM"].strength = 150;
          events[prevYear]["SOM"].name = "Somalia";
          events[prevYear]["SOM"].state = 3;
        }

        events[prevYear]["MAD"].strength = 150;
        events[prevYear]["MAD"].name = "Madagascar";
        events[prevYear]["MAD"].state = 3;
        events[prevYear]["MAD"].x -= 15;

        if (RNG("Jewish_Homeland",year) <= impossible && events[prevYear]["ISR"].state == "a") {
          events[prevYear]["ISR"].state = "b";
          events[prevYear]["MAD"].name = "";
          events[prevYear]["ISR"].name = "Jewish Madagascar";
          events[prevYear]["ISR"].y -= 20;
          events[prevYear]["ISR"].size += 2;
        }

        if (RNG("Decolonization",year) >= veryUnlikely && c.usa_exists) {
          events[prevYear]["FRAx"].state = 3;
          events[prevYear]["FRAx"].name = "Tunisia";
          events[prevYear]["FRAx"].x += 50;
        } else if (events[prevYear]["FRAs"].strength > 0) {
          events[prevYear]["FRAs"].strength = 200;
        }
        events[prevYear]["ENGs"].state = 4;
      }
    }
    if (year == 1961) {
      addCountry("nuclear","Nuclear Armageddon",year,1,0,0);
    }
    if (year == 1962) {
      // British Colonization
      if (c.af_colonization) {
        if (RNG("Decolonization",year) >= unlikely && c.usa_exists) {
        events[prevYear]["ENGx"].state = 2;
        events[prevYear]["ENGx"].name = "Kenya";
        events[prevYear]["ENGx"].x = 1450;
        events[prevYear]["ENGx"].y = 650;
        events[prevYear]["ENGx"].size = 6;

        events[prevYear]["KSH"].strength = 150;
        events[prevYear]["KSH"].name = "Sudan";
        events[prevYear]["KSH"].state = 3;
        events[prevYear]["KSH"].x += 20;
        events[prevYear]["KSH"].y += 20;
        events[prevYear]["KSH"].size += 4;
        }

        if (RNG("Decolonization",year) >= possible) {
          events[prevYear]["ENGn"].strength = 0;
          events[prevYear]["NIG"].strength = 500;
          events[prevYear]["NIG"].name = "Nigeria";
          events[prevYear]["NIG"].x += 80;
          events[prevYear]["NIG"].size += 3;
          events[prevYear]["NIG"].state = 2;
        }
      }

      // Cuban Missile Crisis
      if (RNG("Nuclear_Armageddon",year) <= superUnlikely) {
        eventLog.push("Nuclear Armageddon...");
        events[prevYear]["nuclear"].strength += 3000;
        events[prevYear]["nuclear"].state = 2;
        events[prevYear]["USA"].strength = 0;
        events[prevYear]["RUS"].strength = 0;
        events[prevYear]["CHI"].strength = 0;
        events[prevYear]["ENG"].strength = 0;
        events[prevYear]["FRA"].strength = 0;
        events[prevYear]["GER"].strength = 0;
        events[prevYear]["BUL"].strength = 0;
        events[prevYear]["ROA"].strength = 0;
        events[prevYear]["GRE"].strength = 0;
        events[prevYear]["ITA"].strength = 0;
        events[prevYear]["DUT"].strength = 0;
        events[prevYear]["BEL"].strength = 0;
        events[prevYear]["SPA"].strength = 0;
        events[prevYear]["POR"].strength = 0;
        events[prevYear]["RUS"].strength = 0;
        events[prevYear]["CHI"].strength = 0;
        events[prevYear]["ROM"].strength = 0;
        events[prevYear]["GEO"].strength = 0;
        events[prevYear]["MON"].strength = 0;
        events[prevYear]["JAP"].strength = 0;
        events[prevYear]["KOR"].strength = 0;
        events[prevYear]["DRK"].strength = 0;

        events[prevYear]["IRE"].strength = 0;
        events[prevYear]["DEN"].strength = 0;
        events[prevYear]["NOR"].strength = 0;
        events[prevYear]["SWE"].strength = 0;
        events[prevYear]["FIN"].strength = 0;
        events[prevYear]["SWI"].strength = 0;
        events[prevYear]["AUS"].strength = 0;
        events[prevYear]["HUN"].strength = 0;
        events[prevYear]["SER"].strength = 0;
        events[prevYear]["OTT"].strength = 0;
        events[prevYear]["SYR"].strength = 0;
        
        events[prevYear]["LIV"].strength = 0;
        events[prevYear]["LIT"].strength = 0;
        events[prevYear]["POL"].strength = 0;
        events[prevYear]["ALB"].strength = 0;
        events[prevYear]["CZE"].strength = 0;
        events[prevYear]["ANT"].strength = 0;
      } else if (RNG("Nuclear_Armageddon",year) <= veryUnlikely) {
        eventLog.push("The Cold War goes hot...");
        events[prevYear]["nuclear"].strength += 3000;
      }
      addCountry("AFR","African Tribal Nations",year,1,0,6 ,1000,580,10);
      events[prevYear]["ALG"].strength = 200;
      events[prevYear]["ALG"].name = "Algeria";
      events[prevYear]["ALG"].x = 1230;
      events[prevYear]["ALG"].y = 410;
      events[prevYear]["ALG"].size = 9;
    }
    if (year == 1965) {
      addCountry("EU","European Federation",year,1,0,9 ,1250,290,5);

      if (RNG("Africa's_Fate",year) <= unlikely || !c.af_colonization) {
        events[prevYear]["AFR"].strength = 1000;
      }
    }
    if (year == 1966) {
      if (!c.fuhrerreich && !c.byzantium) {
        events[prevYear]["LIB"].strength = 400;
        events[prevYear]["LIB"].state = 2;
        events[prevYear]["LIB"].x -= 10;
        events[prevYear]["LIB"].y += 15;
        events[prevYear]["LIB"].size += 4;
      }
      events[prevYear]["GUY"].name = "Guyana";

      // European Union Unites?
      if (RNG("European_Federation",year) <= veryUnlikely) {
        if (!c.kaiserreich) {
          events[prevYear]["EU"].strength += 1000;
          events[prevYear]["FRA"].name = "";
          events[prevYear]["ITA"].name = "";
          events[prevYear]["DUT"].name = "";
          events[prevYear]["GER"].name = "E. Germany";
          eventLog.push("*1966: The European Federation is formed");
        }
      }
      addCountry("EAF","East African Federation",year,2,0,6 ,1520,645,7);
    }
    if (year == 1967) {
      // East African Community formed
      if (RNG("East_African_Federation",year) <= veryUnlikely) {
        if (!c.kaiserreich) {
          events[prevYear]["EAF"].strength += 1000;
          events[prevYear]["ENGx"].name = "";
          eventLog.push("*1967: The East African Federation is formed");
        }
      }
    }
    if (year == 1968) {
      events[prevYear]["SPAx"].name = "Western Sahara";
      if (events[prevYear]["SPAx"].state == "a") {
        events[prevYear]["SPAx"].state = "b";
      } else {
        events[prevYear]["SPAx"].state = 2;
      }

      if (RNG("American_Expansion",year) <= veryUnlikely && c.usa_exists) {
        eventLog.push("*1968: The United States annexes Canada");
        c.big_usa = true;
        events[prevYear]["USA"].state = "c";
        events[prevYear]["CAN"].strength = 0;
        events[prevYear]["USAc"].strength = 0;
         events[prevYear]["USAo"].strength = 0;
      }
    }
    if (year == 1969) {
      // Sino-Soviet Split
      if (RNG("Neo_Chinese_Empire",year) <= superUnlikely && events[prevYear]["CHI"].strength > 0) {
        c.big_china = true;
        events[prevYear]["CHI"].state = "c";
        events[prevYear]["CHI"].name = "Chinese Empire";
        events[prevYear]["CHI"].x -= 70;
      } else if (RNG("Neo_Chinese_Empire",year) <= superUnlikely && events[prevYear]["CHI"].strength > 0) {
        c.big_china = true;
        events[prevYear]["CHI"].state = "b";
        events[prevYear]["CHI"].name = "Chinese Empire";
        events[prevYear]["CHI"].x -= 70;
      }
    }
    if (year == 1971) {
      if (!c.fuhrerreich) {
        events[prevYear]["PAK"].state = 2;
      }
      if (c.big_china) {
        events[prevYear]["MON"].strength = 0;
        events[prevYear]["QIN"].strength = 0;
      }
    }
    if (year == 1975) {
      // Vietnam War Over
      events[prevYear]["VIE"].name = "Vietnam";

      events[prevYear]["SUR"].name = "Suriname";
      if (events[prevYear]["PORa"].state == "b") {
        events[prevYear]["PORa"].state = "c";
      } else {
        events[prevYear]["PORa"].state = 4;
      }
      events[prevYear]["PORa"].x -= 30;
      events[prevYear]["PORa"].name = "Angola Zambia Mozambique";

      if (RNG("Morocco_Expansion",year) <= superUnlikely) {
        events[prevYear]["MOR"].state = "b";
        events[prevYear]["MOR"].name = "Greater Morocco";
        events[prevYear]["SPAx"].name = "";
      } else if (RNG("Morocco_Expansion",year) <= possible) {
        events[prevYear]["MOR"].state = "a";
        events[prevYear]["SPAx"].name = "";
      } else if (RNG("Morocco_Expansion",year) <= likely) {
        events[prevYear]["MOR"].strength += 1;
      } else {
        events[prevYear]["MOR"].state = 4;
      }
    }
    if (year == 1977) {
      if (events[prevYear]["MOR"].state == 4) {
        events[prevYear]["MOR"].state = 3;
      }
    }
    if (year == 1979) {
      events[prevYear]["DENc"].name = "Greenland";
      events[prevYear]["DENc"].x -= 30;
      events[prevYear]["DENc"].y -= 75;
      events[prevYear]["DENc"].size += 5;
    }
    if (year == 1975) {
      addCountry("PNG","Papau New Guinea",year,1,2250,6 ,2270,630,10);
    }
    if (year == 1982) {
      if (RNG("Falklands_War",year) <= veryUnlikely || c.kaiserreich || c.fuhrerreich) {
        events[prevYear]["FAK"].name = "";
      }
    }
    if (year == 1986) {
      addCountry("AUZ","Australia",year,1,2250,6 ,2070,760,15);
      events[prevYear]["ENGa"].name = "";
    }
    if (year == 1989) {
      events[prevYear]["BUR"].name = "Myanmar";
    }
    if (year == 1990) {
      events[prevYear]["ENGs"].state = 5;
      if (c.ww2 && !c.fuhrerreich) {
        events[prevYear]["GER"].state = 16;
      }
      events[prevYear]["EU"].state = 2;
      if (events[prevYear]["EU"].strength > 0) {
        events[prevYear]["GER"].name = " ";
      }
    }
    if (year == 1991) {
      if (c.usa_exists) {
      if (RNG("Cold_War_Winner",year) <= impossible) {
        // USA loses?
        eventLog.push("*1991: The United States is officially dissolved");
        events[prevYear]["USA"].state = "b";
        events[prevYear]["USA"].name = "U.S. Anarchy";
        events[prevYear]["USA"].x += 110;
        events[prevYear]["CAN"].strength += 500;
        events[prevYear]["USAc"].strength += 500;
        events[prevYear]["USAo"].strength = 0;
      } else if (RNG("Cold_War_Winner",year) <= superUnlikely) {
        eventLog.push("*1991: The United States fractures");
        events[prevYear]["USA"].state = "a";
        events[prevYear]["USA"].name = "Disunited States of America";
        events[prevYear]["USA"].size -= 3;
        events[prevYear]["USA"].x += 30;
        events[prevYear]["CAN"].strength += 500;
        events[prevYear]["USAc"].strength += 500;
        events[prevYear]["USAo"].strength = 0;
      } else if (c.soviet_union) {
        // Fall of the Soviet Union
        eventLog.push("1991: Soviet Union dissolves");
        events[prevYear]["RUS"].name = "Russia";
        events[prevYear]["ARM"].state = 3;
        events[prevYear]["GEO"].state = 4;
        events[prevYear]["ARM"].strength = 300;
        events[prevYear]["GEO"].strength = 400;
        events[prevYear]["KZH"].strength = 500;
        events[prevYear]["KZH"].name = "Kazakhstan";
        events[prevYear]["KZH"].state = 2;
        events[prevYear]["KZH"].x = 1605;
        events[prevYear]["KZH"].y = 275;
        events[prevYear]["KZH"].size = 10;
        events[prevYear]["LIV"].strength = 500;
        events[prevYear]["LIT"].strength = 500;
        events[prevYear]["LIT"].state = 1;
        events[prevYear]["UKR"].strength = 1000;
        events[prevYear]["UKR"].state = 1;
        c.occupied_iran = false;
      }
      }

      if (RNG("Somaliland",year) <= possible) {
        c.somaliland = true;
      }
    }
    if (year == 1993) {
      events[prevYear]["ABY"].state = 5;
      if (RNG("Breakup_of_Czechoslovakia",year) <= unlikely) {
        events[prevYear]["CZE"].strength += 100;
      } else if (RNG("Breakup_of_Czechoslovakia",year) <= Default) {
        events[prevYear]["CZE"].state = 5;
        events[prevYear]["CZE"].name = "Czechia Slovakia";
      }
      if (events[prevYear]["nuclear"].state == 2) {
        events[prevYear]["nuclear"].state = 3;
      }
    }
    if (year == 1995) {
      if (RNG("Breakup_of_Yugoslavia",year) <= unlikely) {
        events[prevYear]["SER"].strength += 100;
      } else if (RNG("Breakup_of_Yugoslavia",year) <= Default) {
        eventLog.push("1995: Breakup of Yugoslavia");
        events[prevYear]["SER"].state = 6;
        events[prevYear]["SER"].name = "Serbia";
        events[prevYear]["SER"].x += 12;
        events[prevYear]["BUL"].name = "Bulgaria";
      }

      if (RNG("Quebec_Independence",year) <= possible && events[prevYear]["QUE"].strength <= 0) {
        eventLog.push("*1995: Quebec gains independence");
        events[prevYear]["QUE"].strength = 500;
        events[prevYear]["QUE"].state = "a";
        events[prevYear]["QUE"].name = "Quebec";
        events[prevYear]["QUE"].x = 770;
        events[prevYear]["QUE"].y = 250;
      }
      events[prevYear]["EU"].state = 3;
      if (events[prevYear]["EU"].strength > 0) {
        events[prevYear]["SPA"].name = "";
      }
    }
    if (year == 1997) {
      events[prevYear]["KON"].name = "D.R.C.";
    }
    if (year == 1999) {
      // Drying of the Aral Sea...
      if (events[prevYear]["lakes"].state == 2) {
        events[prevYear]["lakes"].strength = 0;
      }
    }
    if (year == 2008) {
      if (events[prevYear]["SER"].name == "Serbia") {
        events[prevYear]["SER"].state = 7;
      }
      events[prevYear]["EU"].state = 4;
      if (events[prevYear]["EU"].strength > 0) {
        events[prevYear]["POR"].name = "";
        events[prevYear]["IRE"].name = "";
      }
    }
    if (year == 2011) {
      if (RNG("South_Sudan",year) <= unlikely) {
        events[prevYear]["KSH"].strength += 10;
      } else if (RNG("South_Sudan",year) <= Default) {
        events[prevYear]["KSH"].state = 4;
      }
    }
    if (year == 2013) {
      if (events[prevYear]["EAF"].strength > 0 && events[prevYear]["KSH"].state == 4) {
        events[prevYear]["EAF"].state = 1;
      }
    }
    if (year == 2014) {
      events[prevYear]["UKR"].state = 2;
    }
    if (year == 2022) {
      events[prevYear]["UKR"].state = 3;
    }
    if (year == 2023) {
      // Ukraine War
      eventLog.push("2022: Ukraine War")
      if (RNG("Ukraine_War",year) <= superUnlikely) {
        events[prevYear]["UKR"].strength = 0;
      } else if (RNG("Ukraine_War",year) <= veryUnlikely) {
        events[prevYear]["UKR"].state = 4;
        events[prevYear]["UKR"].name = "";
      } else if (RNG("Ukraine_War",year) <= unlikely) {
        events[prevYear]["UKR"].state = 1;
      } else if (RNG("Ukraine_War",year) <= uncommon) {
        events[prevYear]["UKR"].state = 2;
      } else if (RNG("Ukraine_War",year) <= Default) {
        events[prevYear]["UKR"].state = 3;
      }
    }

    // Transfer nations from the previous year to current year
    for (const nation in events[prevYear]) {
      let prevNation = events[prevYear][nation];
      let updatedStrength = prevNation.strength - 1;

      if (nation === "conditions") {
        events[year]["conditions"] = { ...c };
      } else {
        events[year][nation] = {
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
}
calculateEvents();

// Zooming in and out
var scale = 1.2,
panning = false,
pointX = 10,
pointY = 0,
additionalScaleY = 1,
skew = 0,
start = { x: 0, y: 0 },
zoom = document.getElementById("zoom");
setTransform();

function setTransform() {
  zoom.style.transform = `translate(${pointX}px, ${pointY}px) skewX(${skew}deg) scale(${scale}) scaleY(${additionalScaleY})`;
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
  
  if (scale > 4) {
    zoom.classList.add("pixelated");
    
    const images = document.querySelectorAll("img.above-layer");
    images.forEach((img) => {
      img.classList.add("pixelated");
    });
    
    additionalScaleY = 0.8;
    skew = -1;

    if (scale > 17) {
      showNames("stop");
      if (pointX > -5000) {
        skew = 10;
      } else {
        skew = -10;
      }
    } else {
      showNames("e");
    }
  } else {
    document.getElementById("zoom").classList.remove("pixelated");
    
    const images = document.querySelectorAll("img.above-layer");
    images.forEach((img) => {
      img.classList.remove("pixelated");
    });

    additionalScaleY = 1;
    skew = 0;
    showNames("e");
  }
  setTransform();
}

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

const seedInput = document.getElementById('seedInput');
const timelineInput = document.getElementById('timelineInput');
const timelineValue = document.getElementById('timelineValue');

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 2560;
canvas.height = 1297;

// Physical map option
const mapImage = document.getElementById("map");
const oceanImage = document.getElementById("ocean");
const overlayImage = document.getElementById("overlay");
let isMapShown = false;

// Display countries on map
function updateCountries() {
  nations = [];
  
  for (const nation in events[timeline]) {
    nations.push(nation);
  }

  // Delete images and text
  const imagesToDelete = document.querySelectorAll("img.above-layer");
  imagesToDelete.forEach((img) => {
    img.parentNode.removeChild(img);
  });

  const textToDelete = document.querySelectorAll(".nation-text");
  textToDelete.forEach((a) => {
    a.parentNode.removeChild(a);
  })

  // Adjust order of nations
  swapItems(nations,"POR","SPA");
  swapItems(nations,"FRK","ROM");
  swapItems(nations,"GTH","ROM");
  swapItems(nations,"ISL","BYZ");
  swapItems(nations,"BUL","BYZ");
  swapItems(nations,"SER","BYZ");
  swapItems(nations,"ISL","FRK");
  swapItems(nations,"COR","SPA");
  swapItems(nations,"SPAc","INC");
  swapItems(nations,"SPAc","AZX");
  swapItems(nations,"DUTb","BRA");
  swapItems(nations,"GCO","SPAc");
  swapItems(nations,"MON","ISL");
  swapItems(nations,"MON","CHI");
  swapItems(nations,"MON","PER");
  swapItems(nations,"DOM","SPAc");
  swapItems(nations,"CUB","SPAc");
  swapItems(nations,"MAJ","SVJ");
  swapItems(nations,"NAP","ITA");
  swapItems(nations,"AUS","HRE");
  swapItems(nations,"AUS","SER");

  // Latin American Independence
  swapItems(nations,"COL","SPAc");
  swapItems(nations,"EQU","SPAc");
  swapItems(nations,"VEZ","SPAc");
  swapItems(nations,"BOL","SPAc");
  swapItems(nations,"PAR","SPAc");
  swapItems(nations,"ARG","SPAc");
  swapItems(nations,"CHL","SPAc");
  swapItems(nations,"PEU","SPAc");

  swapItems(nations,"UKR","HUN");
  swapItems(nations,"ENGk","SPAc");
  swapItems(nations,"DUTc","CAN");
  swapItems(nations,"GUY","POR");
  swapItems(nations,"VEZ","GUY");
  swapItems(nations,"FGU","POR");
  swapItems(nations,"CAN","USA");
  swapItems(nations,"MEX","CEN");
  swapItems(nations,"CZE","HRE");
  swapItems(nations,"RAJ","BUR");
  swapItems(nations,"AFR","ABY");
  swapItems(nations,"YEM","ENGb");
  
  endItem(nations, "RUS");
  if (events[timeline]["conditions"].occupied_iran) {
    endItem(nations, "PER");
  }
  endItem(nations, "HUN");
  endItem(nations, "DUTs");
  endItem(nations, "SPA");
  endItem(nations, "EGY");
  endItem(nations, "BRA");
  if (timeline >= 1822) {
    frontItem(nations, "BRA");
  }
  if (timeline >= 1800) {
    endItem(nations, "SPAc");
    frontItem(nations, "URU");
  }
  if (events[timeline]["conditions"].dutch_brazil) {
    endItem(nations, "SUR");
  }
  endItem(nations, "IRO");
  endItem(nations, "ENGa");
  endItem(nations, "CAN");
  endItem(nations, "CAM");
  endItem(nations, "QUE");
  endItem(nations, "ENGx");
  endItem(nations, "FRAx");

  if (events[timeline]["conditions"].isChineseCivilWar) {
    frontItem(nations, "QIN");
  }
  frontItem(nations, "EAF");
  frontItem(nations, "SWI");
  frontItem(nations, "DUT");
  frontItem(nations, "BEL");
  frontItem(nations, "LIT");
  frontItem(nations, "FRAk");
  frontItem(nations, "HAI");
  frontItem(nations, "RAJ");
  swapItems(nations,"BUR","RAJ");
  frontItem(nations, "JAPn");
  frontItem(nations, "PAK");
  frontItem(nations, "OTT");
  frontItem(nations, "CSA");
  frontItem(nations, "MEXa");
  frontItem(nations, "USAo");
  frontItem(nations, "KZH");
  frontItem(nations, "DRK");
  frontItem(nations, "JAPc");
  frontItem(nations, "FRAi");
  frontItem(nations, "TEX");
  frontItem(nations, "PAP");

  if (timeline >= 1870) {
    endItem(nations, "OTT");
    endItem(nations, "ISL");
  }
  if (timeline >= 1948) {
    frontItem(nations, "BUR");
  }
  if (timeline >= 1825 && events[timeline]["PEU"].name == "Peru-Bolivia") {
    frontItem(nations, "PEU");
  }
  if (timeline >= 1949 && events[timeline]["ENG"].name == "Union of Britain") {
    frontItem(nations, "IRE");
  }
  if (timeline >= 1900 && events[timeline]["SER"].name == "Greater Yugoslavia") {
    frontItem(nations, "SER");
  }
  if (events[timeline]["conditions"].kaiserreich) {
    frontItem(nations, "AFG");
  }
  if (events[timeline]["conditions"].big_albania) {
    frontItem(nations, "ALB");
  }
  if (events[timeline]["conditions"].greater_hungary) {
    frontItem(nations, "HUN");
    frontItem(nations, "SER");
  }
  if (timeline >= 1700 && events[timeline]["QUE"].name == "Louisiana") {
    frontItem(nations, "QUE");
  }
  if (timeline >= 1800 && events[timeline]["USA"].name == " ") {
    endItem(nations, "USA");
  }
  if (timeline >= 1800 && events[timeline]["ALG"].name == "Algeria") {
    endItem(nations, "ALG");
  }
  if (timeline >= 1700 && events[timeline]["CHM"].name == "S. Vietnam") {
    frontItem(nations, "CHM");
  }
  if (events[timeline]["conditions"].napoleonic_wars) {
    frontItem(nations, "FRA");
  }
  if (events[timeline]["conditions"].somaliland) {
    frontItem(nations, "ITAx");
  }
  if (events[timeline]["conditions"].big_mexico) {
    frontItem(nations, "MEX");
    frontItem(nations, "CEN");
    frontItem(nations, "TEX");
  }

  if ("PORa" in events[timeline]) {
    if (events[timeline]["PORa"].state == "b") {
      frontItem(nations, "PORa");
    }
  }
  if ("ROM" in events[timeline]) {
    if (timeline < 0) {
      frontItem(nations, "ROM");
    }
  }
  frontItem(nations, "SIB");
  frontItem(nations, "MON");
  frontItem(nations, "KZH");
  frontItem(nations, "TIB");
  frontItem(nations, "GER");
  frontItem(nations, "EU");

  // Americas
  if (timeline >= 1989) {
    frontItem(nations, "QUE");
    frontItem(nations, "YEM");
  }
  if (events[timeline]["PAR"]) {
    if (events[timeline]["PAR"].state == 3) {
      frontItem(nations, "PAR");
    }
  }

  // Pax Francia
  if (events[timeline]["USA"]) {
    if (events[timeline]["CAN"].name == "Quebec" && events[timeline]["CAN"].state >= 6) {
      events[timeline]["CAN"].state = "a";
    }
    if (events[timeline]["USA"].name == "13 Colonies") {
      events[timeline]["USA"].state = 1;
      events[timeline]["USA"].x = 760;
      events[timeline]["USA"].y = 345;
      events[timeline]["USA"].size = 9;
    }
  }
  if (timeline >= 1800 && events[timeline]["USA"].name == "13 Colonies") {
    frontItem(nations, "USA");
  }

  if (events[timeline]["ROM"] && events[timeline]["ROM"].name == "Rome") {
    events[timeline]["ROM"].state = 3;
    events[timeline]["ROM"].size = 6;
    events[timeline]["ROM"].x += 80;
  }
  
  frontItem(nations, "nuclear");
  frontItem(nations, "lakes");
  for (let i = 0; i < nations.length; i++) {
    if (events[timeline][nations[i]].strength > 0) {
      const img = new Image();
      //img.src = `images/${nations[i]}/${nations[i] + events[timeline][nations[i]].state}.png`;
      //Base64
      img.src = `${states[nations[i].toLowerCase() + events[timeline][nations[i]].state]}`;
      img.classList.add("above-layer");
      img.style.loading = "lazy";
      img.style.decoding = "async";
      img.style.fetchpriority = "high";

      const txt = document.createElement("a");
      txt.textContent = events[timeline][nations[i]].name;

      txt.style.left = (events[timeline][nations[i]].x/3.125 - 20) + "px";
      txt.style.top = (events[timeline][nations[i]].y/2.667) + "px";
      txt.style.fontSize = events[timeline][nations[i]].size + "px";
      txt.classList.add("nation-text");
      zoom.appendChild(txt);

      // New Colors
      spain = "brightness(0%) grayscale(100%) invert(100%) sepia(80%) saturate(1994%) hue-rotate(312deg) contrast(103%)";
      usa = "brightness(0%) grayscale(100%) invert(64%) sepia(81%) saturate(6008%) hue-rotate(192deg) brightness(97%) contrast(95%)";
      csa = "brightness(0%) grayscale(100%) invert(29%) sepia(28%) saturate(3568%) hue-rotate(332deg) brightness(100%) contrast(98%)";
      canada = "brightness(0%) grayscale(100%) invert(37%) sepia(76%) saturate(6600%) hue-rotate(338deg) brightness(97%) contrast(96%)";
      brazil = "hue-rotate(260deg) brightness(120%)";
      philippines = "brightness(0%) grayscale(100%) invert(47%) sepia(64%) saturate(315%) hue-rotate(98deg) brightness(97%) contrast(89%)";
      india = "hue-rotate(44deg) saturate(261%) brightness(105%)";
      uk = "brightness(0%) grayscale(100%) invert(69%) sepia(19%) saturate(732%) hue-rotate(314deg) brightness(93%) contrast(86%)";
      germany = "brightness(0%) grayscale(100%) invert(23%) sepia(13%) saturate(212%) hue-rotate(357deg) brightness(93%) contrast(79%)";
      nuclear = "hue-rotate(337deg) saturate(74%) brightness(98%)";
      dutch = "brightness(0%) grayscale(100%) invert(86%) sepia(24%) saturate(4919%) hue-rotate(320deg) brightness(94%) contrast(89%)";
      exampleHere = "brightness(0%) grayscale(100%)";
      
      // Apply necessary CSS filters
      oceanImage.style.filter = "";
      overlayImage.style.filter = "";
      if ("nuclear" in events[timeline]) {
        if (events[timeline]["nuclear"].strength > 0) {
          oceanImage.style.filter = nuclear;
          overlayImage.style.filter = nuclear;
        } else {
          oceanImage.style.filter = "";
          overlayImage.style.filter = "";
        }
      }

      if (events[timeline][nations[i]].name === "Mauryan Empire") {
        img.style.filter = "hue-rotate(195deg) brightness(350%)";
      }
      if (events[timeline][nations[i]].name === "India") {
        img.style.filter = india;
      }
      if (events[timeline][nations[i]].name === "Philippines (US)") {
        img.style.filter = usa;
      }
      if (events[timeline][nations[i]].name === "Philippines") {
        img.style.filter = philippines;
      }
      // condition-based color
      if (events[timeline][nations[i]].name === "Iran " && events[timeline]["conditions"].occupied_iran) {
        img.style.filter = uk;
      }
      if (nations[i] == "ROA" && events[timeline]["conditions"].ottoman_romania) {
        img.style.filter = "hue-rotate(297deg) saturate(165%) brightness(90%)";
      }

      if (events[timeline][nations[i]].name === "Malaysia") {
        img.style.filter = "hue-rotate(124deg) saturate(272%) brightness(31%)";
      }
      if (nations[i] == "NOR" && events[timeline][nations[i]].name === "") {
        img.style.filter = "hue-rotate(30deg) saturate(83%) brightness(157%)";
      } if (nations[i] == "NOR" && events[timeline][nations[i]].name === " ") {
        img.style.filter = "hue-rotate(195deg) saturate(378%) brightness(170%)";
      }
      if (nations[i] == "KOR" && events[timeline][nations[i]].name === "DPR. Korea") {
        img.style.filter = "hue-rotate(135deg) saturate(384%) brightness(47%)";
      }

      if (nations[i] === "NAP") {
        img.style.filter = "hue-rotate(50deg) brightness(100%)";
      }
      
      if (timeline > 1900 && nations[i] === "HUN") {
        img.style.filter = "hue-rotate(251deg) saturate(132%) brightness(110%)";
      }
      if (timeline >= 1979 && nations[i] === "DENc") {
        img.style.filter = "brightness(115%)";
      }

      // Rome
      if ("ROM" in events[timeline]) {
        if (events[timeline]["conditions"].carthage_wins && nations[i] === "ROM") {
          img.style.filter = "hue-rotate(182deg) saturate(27%) brightness(250%)";
        }
      }
      if ("SPAc" in events[timeline]) {
        if (events[timeline]["SPAc"].name === "Nova Roma" && nations[i] === "SPAc") {
          img.style.filter = "hue-rotate(303deg) saturate(4000%) brightness(70%)";
        }
      }
      if ("CAR" in events[timeline]) {
        if (events[timeline]["CAR"].name === "Vandals" && nations[i] === "CAR") {
          img.style.filter = "hue-rotate(225deg) saturate(319%) brightness(85%)";
        }
      }

      if ("CHM" in events[timeline]) {
        if (events[timeline]["CHM"].name === "S. Vietnam" && nations[i] == "CHM") {
          img.style.filter = "hue-rotate(45deg) saturate(3604%) brightness(99%)";
        }
      }

      if ("RUS" in events[timeline]) {
      if (events[timeline]["RUS"].name === "Russia" && (nations[i] == "RUS" || nations[i] == "RUSc")) {
        img.style.filter = "hue-rotate(63deg) saturate(400%) brightness(126%)";
      }
      if (events[timeline]["RUS"].name === "Russian Anarchy" && (nations[i] == "RUS" || nations[i] == "RUSc")) {
        img.style.filter = "grayscale(90%)";
      }

      // Communist Colors
      if ((events[timeline]["RUS"].name === "Red Army" || events[timeline]["RUS"].name === "Soviet Union") && (nations[i] == "RUS" || nations[i] == "RUSc")) {
        img.style.filter = "hue-rotate(223deg) saturate(512%) brightness(50%)";
      }
      }
      if (events[timeline][nations[i]].name === "French Commune") {
        img.style.filter = "hue-rotate(121deg) saturate(126%) brightness(83%)";
      }
      if (events[timeline][nations[i]].name === "Union of Britain") {
        img.style.filter = "hue-rotate(358deg) saturate(619%) brightness(72%)";
      }

      // Americas
      if (nations[i] === "CEN" && events[timeline][nations[i]].name === "") {
        img.style.filter = "hue-rotate(180deg) saturate(440%) brightness(83%)";
      }
      if (nations[i] === "GUY" && events[timeline][nations[i]].name === "Guyana") {
        img.style.filter = "hue-rotate(20deg) brightness(90%)";
      }
      if (nations[i] === "SUR" && events[timeline][nations[i]].name === "Suriname") {
        img.style.filter = "hue-rotate(280deg) brightness(75%)";
      }
      if (nations[i] === "RUSc" && events[timeline][nations[i]].name === "Liechtensteinian Alaska") {
        img.style.filter = "hue-rotate(117deg) saturate(1070%) brightness(75%)";
      }
      if (nations[i] === "USAc" && events[timeline]["conditions"].big_usa) {
        img.style.filter = canada;
      }
      if (nations[i] === "USAc" && events[timeline]["conditions"].big_japan) {
        img.style.filter = "hue-rotate(147deg) saturate(101%) brightness(260%)";
      }
      if (nations[i] === "USA" && (events[timeline][nations[i]].name === " " || events[timeline][nations[i]].name === "13 Colonies")) {
        img.style.filter = "hue-rotate(144deg) saturate(33%) brightness(140%)";
      }
      if (nations[i] === "LBR" && events[timeline][nations[i]].name === "U.S. Africa") {
        img.style.filter = "hue-rotate(323deg) saturate(393%) brightness(112%)";
      }
      if (nations[i] === "FAK" && events[timeline][nations[i]].name === "") {
        img.style.filter = "hue-rotate(196deg) saturate(84%) brightness(131%)";
      }
      if (timeline >= 1867 && nations[i] === "CAN") {
        img.style.filter = canada;
      }
      if (timeline >= 1867 && nations[i] === "CAN" && events[timeline]["conditions"].fuhrerreich) {
        img.style.filter = germany;
      }
      if (timeline >= 1867 && nations[i] == "USA" && events[timeline][nations[i]].name === " ") {
        img.style.filter = canada;
      }
      if (timeline >= 1760 && nations[i] === "CAN") {
        if (events[timeline]["conditions"].pax_francia) {
          img.style.filter = "hue-rotate(245deg) saturate(936%) brightness(87%)";
        }
      }
      if (timeline >= 1898 && nations[i] === "SPAc") {
        if (events[timeline]["conditions"].csa_victory) {
          img.style.filter = csa;
        } else if (events[timeline]["conditions"].usa_exists && !events[timeline]["conditions"].nova_roma) {
          img.style.filter = usa;
        }
      }

      // German Colors
      if (events[timeline][nations[i]].name === "German Indochina") {
        img.style.filter = " hue-rotate(174deg) saturate(4%) brightness(64%)";
      }
      if (events[timeline][nations[i]].name === "German Malay") {
        img.style.filter = "hue-rotate(10deg) saturate(8%) brightness(45%)";
      }

      if (((timeline == 1940 || timeline == 1941) && events[timeline]["conditions"].ww2) || events[timeline]["conditions"].fuhrerreich) {
        if (nations[i] == "FRA" || nations[i] == "FRAc" || nations[i] == "FRAi" || nations[i] == "FRAx" || nations[i] == "FRAk" || nations[i] == "FGU") {
          img.style.filter = "grayscale(90%)";
        }
      }

      if (events[timeline][nations[i]].name === "Italian East Africa" && nations[i] === "ABY") {
        if (nations[i] == "ABY") {
          img.style.filter = "hue-rotate(207deg) saturate(159%) brightness(102%)";
        }
      }

      if (nations[i] == "GER" && events[timeline][nations[i]].name === " ") {
        img.style.filter = "hue-rotate(173deg) saturate(4000%) brightness(88%)";
      }

      // Portugal
      if (timeline > 1799 && nations[i] === "POR") {
        img.style.filter = "hue-rotate(300deg) brightness(90%)";
      }
      if (timeline > 1799 && nations[i] === "PORa") {
        img.style.filter = "hue-rotate(300deg) brightness(90%)";
      }
      if (timeline > 1799 && nations[i] === "PORi") {
        img.style.filter = "hue-rotate(300deg) brightness(90%)";
      }
      if (timeline > 1799 && nations[i] === "PORz") {
        img.style.filter = "hue-rotate(300deg) brightness(90%)";
      }

      // Brazil
      if (timeline > 1799 && nations[i] === "BRA") {
        img.style.filter = "hue-rotate(300deg) brightness(90%)";
      }
      if (events[timeline]["conditions"].dutch_brazil && nations[i] == "BRA") {
        img.style.filter = "hue-rotate(160deg) saturate(56%) brightness(136%)";
      }
      if (nations[i] == "BRA" && events[timeline][nations[i]].name === "Brazil") {
        img.style.filter = brazil;
      }

      if (events[timeline]["conditions"].iberianUnion && nations[i] === "POR") {
        img.style.filter = "hue-rotate(147deg) saturate(107%) brightness(248%)";
      } if (events[timeline]["conditions"].iberianUnion && nations[i] === "BRA") {
        img.style.filter = "hue-rotate(147deg) saturate(107%) brightness(248%)";
      } if (events[timeline]["conditions"].iberianUnion && nations[i] === "PORa") {
        img.style.filter = "hue-rotate(147deg) saturate(107%) brightness(248%)";
      }

      // Asia
      if (events[timeline]["conditions"].isChineseCivilWar && nations[i] === "CHI") {
        img.style.filter = "hue-rotate(60deg) saturate(65%) brightness(263%)";
      } if (events[timeline]["conditions"].isChineseCivilWar && nations[i] === "QIN") {
        img.style.filter = "hue-rotate(351deg) saturate(1417%) brightness(80%)";
      }

      // Update background images
      const backgroundImage = document.getElementById("bg");
      if (timeline >= -2024) {
        backgroundImage.src = states._2023bg;
      }
      if (timeline >= -1691) {
        backgroundImage.src = states._1691bg;
      }
      if (timeline >= -1178) {
        backgroundImage.src = states._1178bg;
      }
      if (timeline >= -52) {
        backgroundImage.src = states._52bg;
      }
      if (timeline >= 1450) {
        backgroundImage.src = states.bg1450;
      }
      if (!events[timeline]["conditions"].am_colonization) {
        if (timeline >= 1800) {
          backgroundImage.src = states.bg1800;
        }
        if (timeline >= 1900) {
          backgroundImage.src = states.bg1900;
        }
      }

      zoom.appendChild(img);
    }
  }
  if (scale > 17) {
    showNames("stop");
  } else {
    showNames("e");
  }
}
updateCountries();

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
    if (year >= -2023 && year <= 2023) {
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
    else if (seed == "test" || seed == "insanity") {
      if (e == "Nuclear_Armageddon") {
        rngEvents[e] = 1;
      } else {rngEvents[e] = 0;}
    }
    else if (seed == "Kaiserreich" || seed == "kaiserreich") {
      if (e == "WWI_Aftermath") {
        rngEvents[e] = 0;
      } else {rngEvents[e] = 1;}
    }
    else if (seed == "Fuhrerreich" || seed == "fuhrerreich") {
      if (e == "WWII") {
        rngEvents[e] = 0;
      } else {rngEvents[e] = 1;}
    }
    else if (seed == "Fallout" || seed == "fallout") {
      if (e == "Nuclear_Armageddon") {
        rngEvents[e] = 0;
      } else {rngEvents[e] = 1;}
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
  rngLimit = -2023;
  calculateEvents();
  updateCountries();
  //console.log(rngEvents);
}

function grabData(url,val1,val2) {
  if (url.includes(val1)) {
    let foo = url.split(val1);

    let foo1 = foo[1];
    foo2 = foo1.split(val2);

    return foo2[0]
  } else return 0;
}

// Shared seeds
var url = window.location.href;

seed = grabData(url,'?seed=','?year=');
altimeline = parseInt(grabData(url,'?year=','?seed='));
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
timeline--;
seedInput.value = seed;
updateCountries();

// Add event listeners
seedInput.addEventListener("input", function (event) {
  calcSeed(event.target.value);
});

timelineInput.addEventListener('input', () => {
  timelineValue.textContent = parseInt(timelineInput.value) + 1;
  if (timelineValue.textContent == 0) {
    timelineValue.textContent = 1;
  }
  timeline = timelineInput.value;

  updateCountries();
});

// Display / hide nation names
function showNames(txt) {
  if (txt == undefined) {
    showText = !showText;
  }
  const nationTextElements = document.querySelectorAll('.nation-text');
  if (txt == 'stop') {
    nationTextElements.forEach(function(element) {
      element.style.display = 'none';
    });
  } else {
    nationTextElements.forEach(function(element) {
      element.style.display = showText ? 'block' : 'none';
    });
  }
}

function showMap() {
  if (isMapShown) {
    mapImage.src = "map.png";
    oceanImage.src = "ocean.png";
    overlayImage.src = "map.png";
  } else {
    mapImage.src = states.map;
    oceanImage.src = states.ocean;
    overlayImage.src = states.transparent;
  }
  isMapShown = !isMapShown;
}
showMap();

// Achievements Modal
const achievementsButton = document.getElementById("achievements-button");
const achievementsModal = document.getElementById("achievements-modal");
const closeAchievementsModal = document.getElementById("close-achievements-modal");

achievementsButton.addEventListener("click", () => {
  achievementsModal.classList.add("active");
});

closeAchievementsModal.addEventListener("click", () => {
  achievementsModal.classList.remove("active");
});
