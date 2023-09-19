var seed = 0;
var timeline = 1;
var nations = [];

var events = {
  "-2024": {
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
    "conditions": {
      iberianUnion: false,
    }
  }
}
var startingEvents = events;
var showText = true;

// RNG Events
var impossible = 0.01
superUnlikely = 0.05;
veryUnlikely = 0.10,
unlikely = 0.20,
uncommon = 0.35,
possible = 0.50,
likely = 0.75,
veryLikely = 0.90,
Default = 1;

var rngEvents = {
  "Ukraine_War": 1,
  "South_Sudan": 1,
  "Breakup_of_Yugoslavia": 1,
}

var rngLimit = 0;
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
    if (year == -1027) {
      events[prevYear]["CHI"].name = "Zhou Dynasty";
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
      addCountry("KOR","Korea",year,1,2250,5 ,2070,350,5);
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
    if (year == -220) {
      events[prevYear]["CHI"].name = "Qin Dynasty";
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
    if (year == -72) {
      events[prevYear]["ROM"].state = 8;
    }
    if (year == -22) {
      events[prevYear]["ROM"].state = 9;
      events[prevYear]["ARM"].state = 1;
    }
    if (year == -1) {
      events[prevYear]["ROM"].state = 10;
    }

    // Year of Our Lord (A.D.)
    if (year == 70) {
      addCountry("CAM","Funan",year,1,3500,5 ,1985,555,8);
    }
    if (year == 193) {
      events[prevYear]["CHI"].state = 3;
      events[prevYear]["CHI"].name = "Chinese Warring Kingdoms";
    }
    if (year == 200) {
      addCountry("YEM","Himyar",year,1,3500,5 ,1560,505,6);
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
    }
    if (year == 300) {
      addCountry("GHA","Ghana Empire",year,1,1050,5 ,1160,500,5);
      addCountry("INC","Tiwanaku Empire",year,1,1250,5 ,727,702,5);
      events[prevYear]["BUR"].name = "Waithali"
    }
    if (year == 350) {
      events[prevYear]["ABY"].state = 2;
    }
    if (year == 360) {
      events[prevYear]["IND"].state = 2;
      events[prevYear]["IND"].name = "Gupta Empire";
    }
    if (year == 384) {
      events[prevYear]["CHI"].name = "Chinese Warring Kingdoms";
      events[prevYear]["CHI"].state = 3;
    }
    if (year == 396) {
      addCountry("AZX","Teotihuacan",year,1,1200,6 ,530,470,5);
      addCountry("BYZ","Byzantine Empire",year,1,1250,6 ,1370,340,9);
      addCountry("NEP","Nepal",year,1,2250,6 ,1820,420,4);
      events[prevYear]["ROM"].state = 11;
      events[prevYear]["CHI"].name = "Jin Dynasty";
      events[prevYear]["CHI"].state = 4;
    }
    if (year == 422) {
      events[prevYear]["CHI"].name = "Wei/Song";
      events[prevYear]["CHI"].state = 3;
      addCountry("TUR","Hunnic Empire",year,1,50,6 ,1366,266,7);
    }
    if (year == 461) {
      addCountry("GTH","Gothic Kingdoms",year,1,500,5);
      events[prevYear]["CHI"].name = "Wei/Qi";
      events[prevYear]["CHI"].state = 4;
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
    }
    if (year == 547) {
      events[prevYear]["TUR"].strength = 100;
      events[prevYear]["TUR"].state = 2;
      events[prevYear]["TUR"].x += 380;
      events[prevYear]["TUR"].size += 5;
      events[prevYear]["TUR"].name = "Turkish Khaganate";
    }
    if (year == 550) {
      events[prevYear]["BYZ"].state = 2;
      events[prevYear]["CAM"].name = "Chemla";
      events[prevYear]["CHI"].name = "W. Wei/N. Qi/Chen";
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
    }
    if (year == 757) {
      addCountry("COR","Cordoba",year,1,600,5);
      addCountry("PAP","Papal States",year,1,2600,5 ,1310,325,3);
      addCountry("ALG","Kharijite Dynasty",year,1,2600,5 ,1270,355,4);
    }
    if (year == 766) {
      events[prevYear]["BYZ"].state = 4;
      events[prevYear]["FRK"].state = 3;
    }
    if (year == 779) {
      events[prevYear]["FRK"].state = 4;
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
    if (year == 843) {
      // Treaty of Verdun
      addCountry("HRE","H.R.E.",year,1,1600,5 ,1320,265,5);
      addCountry("FRA","France",year,1,2600,5 ,1240,290,5);
      addCountry("ITA","",year,1,2600,5 ,1240,290,5);
      events[prevYear]["FRK"].strength = 0;
      events[prevYear]["GTH"].strength = 0;

      events[prevYear]["NEP"].state = 2;
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
    }
    if (year == 880) {
      events[prevYear]["CAM"].state = 4;
    }
    if (year == 896) {
      addCountry("HUN","Hungary",year,1,2600,5 ,1375,295,4);
      events[prevYear]["BUL"].state = 4;
    }
    if (year == 900) {
      events[prevYear]["ENG"].state = 4;
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
      addCountry("POR","Portugal",year,1,3550,7 ,1170,340,4); // Not staying?
      events[prevYear]["ABY"].name = "Aby.";
    }
    if (year == 1150) {
      events[prevYear]["MOR"].name = "Almohads";
    }
    if (year == 1155) {
      events[prevYear]["ENG"].state = 6;
    }
    if (year == 1180) {
      events[prevYear]["JAP"].state = 4;
      addCountry("BUN","Kitara",year,1,2080,6 ,1420,600,5);
    }
    if (year == 1190) {
      events[prevYear]["BUL"].strength = 600;
      events[prevYear]["BUL"].state = 6;
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
    }
    if (year == 1248) {
      events[prevYear]["MON"].state = 7;
    }
    if (year == 1260) {
      events[prevYear]["MON"].state = 8;
      events[prevYear]["SWE"].state = 2;
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
    }
    if (year == 1392) {
      addCountry("KON","Kongo",year,1,1550,6 ,1300,648,7);
    }
    if (year == 1397) {
      events[prevYear]["SWE"].name = "Kalmar Union";
      events[prevYear]["SWE"].state = 7;
      events[prevYear]["NOR"].name = "";
      events[prevYear]["DEN"].strength = 0;
    }
    if (year == 1400) {
      addCountry("MLY","Malacca",year,1,3600,5 ,1970,575,5);
      events[prevYear]["OTT"].state = 4;
      events[prevYear]["BYZ"].size -= 5;
      events[prevYear]["BYZ"].x += 30;
      events[prevYear]["BUL"].strength = 0;
      events[prevYear]["MAY"].name = "Maya";
      addCountry("IRO","Iroquois",year,1,300,5 ,780,310,4);
    }
    if (year == 1433) {
      events[prevYear]["CAM"].name = "Cambodia";
      events[prevYear]["CAM"].size -= 2;
      events[prevYear]["CAM"].y -= 40;
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
    if (year == 1458) {
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
    if (year == 1474) {
      events[prevYear]["OTT"].state = 5;
      events[prevYear]["SER"].strength = 0;
    }
    if (year == 1477) {
      events[prevYear]["JAP"].state = 5;
      events[prevYear]["AUS"].state = 2;
    }
    if (year == 1492) {
      events[prevYear]["SPA"].state = 7;
    }
    if (year == 1494) {
      addCountry("SPAc","New Spain",year,1,750,6 ,670,490,12);
    }
    if (year == 1480) {
      events[prevYear]["ENG"].state = 9;
      events[prevYear]["INC"].state = 2;
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
    }
    if (year == 1500) {
      addCountry("BRA","Portuguese Brazil",year,1,1250,6 ,906,700,8);
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
      events[prevYear]["ROA"].strength = 0;
    }
    if (year == 1524) {
      events[prevYear]["OTT"].state = 6;
    }
    if (year == 1525) {
      events[prevYear]["SPAc"].state = 3;
      addCountry("DENc","Danish Colonies",year,1,3250,6 ,1030,195,8);
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
      events[prevYear]["HUN"].strength = 0;
      events[prevYear]["AUS"].state = 4;
    }
    if (year == 1545) {
      events[prevYear]["ENG"].state = 10;
      addCountry("MAD","Merina",year,1,3250,6 ,1550,740,5);
      events[prevYear]["YEM"].strength = 0;
    }
    if (year == 1558) {
      events[prevYear]["BUR"].name = "Toungoo";
    }
    if (year == 1563) {
      events[prevYear]["SPAc"].state = 5;
      events[prevYear]["AZX"].strength = 0;
      events[prevYear]["BRA"].state = 3;
      events[prevYear]["LIV"].strength = 0;
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
      events[prevYear]["conditions"].iberianUnion = true;
      if (events[prevYear]["conditions"].iberianUnion) {
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
    if (year == 1594) {
      events[prevYear]["RUS"].state = 6;
      events[prevYear]["RUS"].name = "Russian Empire"
      events[prevYear]["SOM"].state = 2;
      events[prevYear]["THA"].name = "Ayutthaya";
    }
    if (year == 1607) {
      events[prevYear]["DENc"].state = 2;
    }
    if (year == 1612) {
      addCountry("CAN","British Colonies",year,1,3250,6 ,830,300,9);
      addCountry("QUE","French Colonies",year,1,200,6 ,750,270,9);
    }
    if (year == 1615) {
      addCountry("DUTc","New Netherlands",year,1,53,6 ,800,340,4);
    }
    if (year == 1615) {
      addCountry("GER","Prussia",year,1,2000,6 ,1330,250,4);
    }
    if (year == 1622) {
      addCountry("DUTi","Dutch East Indies",year,1,2553,6 ,2000,630,8);
    }
    if (year == 1625) {
      addCountry("FRAk","St. Domingue",year,1,700,6 ,700,480,4);
      events[prevYear]["OTT"].state = 9;
      events[prevYear]["SWE"].state = 4;
    }
    if (year == 1630) {
      addCountry("DUTb","Dutch Brazil",year,1,10,6 ,900,600,9);
      addCountry("PORi","Timor",year,1,1553,6 ,2090,670,4);
    }
    if (year == 1635) {
      addCountry("QIN","Qing Dynasty",year,1,700,6 ,1925,290,10);
    }
    if (year == 1637) {
      events[prevYear]["RUS"].state = 7;
      addCountry("ENGk","British Caribbean",year,1,700,6);
      events[prevYear]["GER"].state = 2;
      events[prevYear]["FRA"].state = 4;
    }
    if (year == 1641) {
      events[prevYear]["SPAc"].state = 7;
      events[prevYear]["BRA"].state = 4;
      addCountry("SUR","Dutch Suriname",year,1,3250,6 ,870,560,4);
      addCountry("FGU","French Guiana",year,1,3250,6 ,880,575,4);

      events[prevYear]["conditions"].iberianUnion = false;
      if (!events[prevYear]["conditions"].iberianUnion) {
        events[prevYear]["BRA"].name = "Portuguese Brazil";
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
    }
    if (year == 1680) {
      events[prevYear]["SOM"].name = "Geledi";
    }
    if (year == 1684) {
      events[prevYear]["CAN"].state = 3;
      events[prevYear]["CAN"].x -= 15;
      events[prevYear]["CAN"].y += 30;
      events[prevYear]["QUE"].state = 3;
    }
    if (year == 1686) {
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
    if (year == 1736) {
      events[prevYear]["PER"].name = "Afsharid Empire";
    }
    if (year == 1740) {
      events[prevYear]["GER"].state = 3;
    }
    if (year == 1750) {
      addCountry("AFG","Durrani Empire",year,1,2250,6 ,1650,380,6);
    }
    if (year == 1757) {
      addCountry("RAJ","East India Co.",year,1,2250,6 ,1720,460,8);
      events[prevYear]["PHI"].state = 2;
      events[prevYear]["BUR"].name = "Konbaung";
    }
    if (year == 1762) {
      events[prevYear]["CAN"].state = 4;
      events[prevYear]["QUE"].state = 4;
      events[prevYear]["AFG"].state = 2;
      events[prevYear]["RAJ"].state = 2;
      events[prevYear]["BUR"].state = 4;
      events[prevYear]["PER"].name = "Zands";
    }
    if (year == 1764) {
      events[prevYear]["IND"].state = 9;
      events[prevYear]["IND"].name = "Maratha Empire";
      events[prevYear]["CHO"].state = 8;
      events[prevYear]["CHO"].name = "";
    }
    if (year == 1765) {
      events[prevYear]["SPAc"].state = 8;
      events[prevYear]["BRA"].state = 5;
      events[prevYear]["SUR"].state = 2;
      events[prevYear]["FGU"].state = 2;
    }
    if (year == 1773) {
      // 1st Partition of Poland
      events[prevYear]["THA"].name = "Thonburi";
      events[prevYear]["GER"].state = 4;
      events[prevYear]["AUS"].state = 7;
    }
    if (year == 1776) {
      addCountry("USA","United States of America",year,1,3250,6 ,706,343,11);
      events[prevYear]["CAN"].x = 630;
      events[prevYear]["CAN"].y = 240;
      events[prevYear]["CAN"].size = 11;
      events[prevYear]["CAN"].name = "British America";
      addCountry("BHU","Bhutan",year,1,2250,6 ,1860,418,4);
    }
    if (year == 1765) {
      events[prevYear]["RUS"].state = 8;
    }
    if (year == 1769) {
      events[prevYear]["CAN"].state = 5;
      events[prevYear]["QUE"].strength = 0;
      events[prevYear]["AFG"].state = 1;
    }
    if (year == 1788) {
      addCountry("ENGa","New South Wales",year,1,3250,6 ,2170,780,9);
      events[prevYear]["ENGk"].state = 2;
    }
    if (year == 1792) {
      events[prevYear]["USA"].state = 2;
      events[prevYear]["USA"].x = 550;
      events[prevYear]["FRAk"].state = 2;
      addCountry("RUSc","Russian America",year,1,1250,6 ,375,170,7);
      events[prevYear]["PER"].name = "Qajars";
      events[prevYear]["PER"].x += 20;
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
    if (year == 1799) {
      addCountry("ENGs","South Africa",year,1,3250,6 ,1270,820,9);
      events[prevYear]["DUTs"].name = "";
      events[prevYear]["DUTi"].state = 2;
    }
    if (year == 1801) {
      events[prevYear]["ENG"].name = "United Kingdom";
      events[prevYear]["AFG"].state = 3;
      events[prevYear]["VIE"].name = "Vietnam";
    }
    if (year == 1804) {
      events[prevYear]["USA"].state = 3;
      events[prevYear]["SPAc"].state = 9;
      events[prevYear]["BRA"].state = 6;
      events[prevYear]["RAJ"].state = 3;
      events[prevYear]["AUS"].state = 9;

      events[prevYear]["SUR"].state = 3;
      events[prevYear]["FGU"].state = 3;
      events[prevYear]["FRAk"].state = 1;
      events[prevYear]["FRAk"].name = "";
      addCountry("HAI","Haiti",year,1,700,6 ,740,480,4);
      addCountry("DOM","Dom. Rep.",year,1,700,6 ,760,490,4);
      addCountry("GUY","British Guiana",year,1,3250,6 ,840,550,4);
    }
    if (year == 1811) {
      addCountry("ARG","Argentina",year,1,3250,6 ,793,810,7);
      addCountry("PAR","Paraguay",year,1,3250,6 ,850,770,4);
      events[prevYear]["NEP"].state = 4;
      events[prevYear]["RUSc"].state = 2;
    }
    if (year == 1812) {
      events[prevYear]["SWE"].state = 6;
    }
    if (year == 1815) {
      events[prevYear]["GER"].state = 6;
      events[prevYear]["DUT"].state = 2;
      events[prevYear]["DUT"].name = "Neth.";
      events[prevYear]["SWE"].state = 5;
    }
    if (year == 1818) {
      events[prevYear]["RAJ"].state = 4;
      events[prevYear]["CHO"].strength = 0;
      events[prevYear]["IND"].strength = 0;
    }
    if (year == 1819) {
      addCountry("CHL","Chile",year,1,3250,6 ,765,790,7);
      addCountry("GCO","Gran Colombia",year,1,700,6 ,700,584,6);
      events[prevYear]["LIV"].strength = 22;
      events[prevYear]["LIV"].state = 2;
      events[prevYear]["LIV"].name = "Estonia";
      events[prevYear]["LIV"].y -= 15;
    }
    if (year == 1821) {
      addCountry("MEX","Mexico",year,1,2250,6 ,510,446,10);
      events[prevYear]["OMA"].state = 3;
    }
    if (year == 1822) {
      events[prevYear]["USA"].state = 4;
      events[prevYear]["BRA"].state = 7;
      events[prevYear]["AFG"].state = 4;
      events[prevYear]["AFG"].name = "Afgans";
      addCountry("FAK","British Falklands",year,1,3250,6 ,940,960,4);
      addCountry("PEU","Peru",year,1,3250,6 ,700,670,9);
      addCountry("CEN","Central America",year,1,2250,6 ,595,520,6);

      events[prevYear]["BRA"].size = 14;
      events[prevYear]["BRA"].x = 850;
      events[prevYear]["BRA"].y = 650;
      events[prevYear]["BRA"].name = "Brazil";

      events[prevYear]["GRE"].strength = 500;
      events[prevYear]["GRE"].name = "Greece";
      events[prevYear]["GRE"].state = 7;
      events[prevYear]["GRE"].x = 1395;
      events[prevYear]["GRE"].y = 346;
      events[prevYear]["GRE"].size = 4;
    }
    if (year == 1825) {
      addCountry("BOL","Bolivia",year,1,3250,6 ,800,720,7);
      events[prevYear]["SPAc"].state = 1;
      events[prevYear]["SPAc"].name = "";
      events[prevYear]["RUSc"].state = 3;
      addCountry("LBR","Liberia",year,1,2250,6 ,1170,560,5);
      events[prevYear]["ISL"].name = "Najd";
    }
    if (year == 1828) {
      events[prevYear]["CAN"].state = 6;
      events[prevYear]["MAD"].state = 2;
    }
    if (year == 1830) {
      addCountry("EQU","Equador",year,1,3250,6 ,680,610,5);
      addCountry("COL","Colombia",year,1,3250,6 ,710,580,8);
      addCountry("VEZ","Venezuela",year,1,3250,6 ,755,550,7);
      addCountry("URU","Uruguay",year,1,3250,6 ,879,830,5);
      events[prevYear]["GCO"].strength = 0;
      events[prevYear]["ENGa"].state = 2;
      events[prevYear]["OTT"].state = 10;
      addCountry("BEL","Belgium",year,1,3250,6);
    }
    if (year == 1835) {
      events[prevYear]["ENGs"].state = 2;
    }
    if (year == 1837) {
      events[prevYear]["USA"].state = 5;

      events[prevYear]["PEU"].state = 3;
      events[prevYear]["PEU"].name = "Peru-Bolivia";
      events[prevYear]["BOL"].name = "";
    }
    if (year == 1839) {
      events[prevYear]["CEN"].state = 2;
    }
    if (year == 1840) {
      events[prevYear]["PEU"].state = 1;
      events[prevYear]["PEU"].name = "Peru";
      events[prevYear]["BOL"].name = "Bolivia";
      addCountry("FRAx","French Africa",year,1,3250,6 ,1260,365,5);
    }
    if (year == 1848) {
      events[prevYear]["USA"].state = 6;
      events[prevYear]["USA"].x = 400;
      events[prevYear]["USA"].y -= 10;
      events[prevYear]["USA"].size +=3;
    }
    if (year == 1854) {
      events[prevYear]["USA"].state = 7;
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
    if (year == 1861) {
      addCountry("CSA","Confederate States of America",year,1,5,6 ,564,370,8);
      addCountry("FRAi","French Indochina",year,1,93,6 ,1985,500,5);
      events[prevYear]["ITA"].name = "Italy";
      events[prevYear]["ITA"].x = 1330;
      events[prevYear]["ITA"].y = 320;
      events[prevYear]["ITA"].size = 7;
    }
    if (year == 1863) {
      events[prevYear]["CSA"].state = 2;
      events[prevYear]["DUTi"].state = 3;
      events[prevYear]["SVJ"].strength = 0;
    }
    if (year == 1865) {
      events[prevYear]["QIN"].state = 4;
    }
    if (year == 1867) {
      addCountry("USAc","United States of America",year,1,2250,6);
      events[prevYear]["RUSc"].strength = 0;
      events[prevYear]["CAN"].state = 7;
      events[prevYear]["GER"].state = 7;
      events[prevYear]["GER"].name = "N. German Confed."
      events[prevYear]["GER"].x -= 30;
      events[prevYear]["GER"].y += 5;
      events[prevYear]["GER"].size += 2;
      events[prevYear]["AUS"].name = "Austria-Hungary";
    }
    if (year == 1870) {
      events[prevYear]["USA"].state = 8;
      events[prevYear]["ARG"].state = 2;
      events[prevYear]["CHL"].state = 2;
      events[prevYear]["CAN"].name = "Canada";
      events[prevYear]["CAN"].y -= 20;
      events[prevYear]["CAN"].size += 3;
      events[prevYear]["FRAa"].state = 2;
    }
    if (year == 1871) {
      events[prevYear]["GER"].name = "Germany";
      events[prevYear]["GER"].state = 8;
      events[prevYear]["HRE"].strength = 0;
      events[prevYear]["PAP"].strength = 0;
    }
    if (year == 1877) {
      events[prevYear]["ROA"].strength = 1000;
      events[prevYear]["ROA"].state = 2;
      events[prevYear]["ROA"].name = "Romania";
      events[prevYear]["SER"].strength = 1000;
      events[prevYear]["BUL"].strength = 1000;
      events[prevYear]["SER"].state = 3;
      events[prevYear]["BUL"].state = 10;
    }
    if (year == 1880) {
      events[prevYear]["PAR"].state = 2;
      events[prevYear]["CHL"].state = 3;
      events[prevYear]["ARG"].state = 3;
      events[prevYear]["BRA"].state = 8;

      events[prevYear]["EQU"].state = 2;
      events[prevYear]["COL"].state = 2;
      events[prevYear]["PEU"].state = 2;
      events[prevYear]["DENc"].state = 3;
      events[prevYear]["AFG"].state = 5;
      events[prevYear]["AFG"].name = "Afganistan";
      events[prevYear]["RAJ"].state = 6;
      events[prevYear]["PER"].state = 6;
      events[prevYear]["GRE"].state = 8;
    }
    if (year == 1885) {
      events[prevYear]["ENGa"].state = 3;
      addCountry("GERc","German New Guinea",year,1,30,6 ,2270,630,10);
      events[prevYear]["KON"].state = 2;
      events[prevYear]["KON"].name = "Belgian Congo";
      events[prevYear]["KON"].y -= 30;
      events[prevYear]["KON"].x += 30;
      events[prevYear]["BEL"].state = 2;

      events[prevYear]["MLY"].name = "British Malaysia";
      events[prevYear]["BUR"].strength = 0;
    }
    if (year == 1890) {
      addCountry("GERx","German Africa",year,1,30,6 ,1470,660,10);
      addCountry("SPAx","Spanish Sahara",year,1,300,6 ,980,440,8);
      events[prevYear]["PORa"].state = 3;
      events[prevYear]["DUTi"].state = 4;
      events[prevYear]["PHI"].state = 3;
      events[prevYear]["MLY"].state = 2;
    }
    if (year == 1898) {
      events[prevYear]["USAc"].state = 2;
      events[prevYear]["ABY"].state = 5;
      events[prevYear]["ABY"].name = "Abyssina"
      events[prevYear]["ABY"].y += 30;
      events[prevYear]["ABY"].size += 4;
      events[prevYear]["PHI"].name = "Philippines (US)";
      events[prevYear]["THA"].state = 4;
      events[prevYear]["THA"].name = "Siam";

      // Scramble for Africa
      addCountry("ENGx","British Colonies",year,1,300,6 ,1360,484,10);
      events[prevYear]["ENGs"].state = 3;
      addCountry("ITAx","Italian Africa",year,1,300,6 ,1280,430,9);
      events[prevYear]["SOM"].strength = 0;
      events[prevYear]["BUN"].strength = 0;
      events[prevYear]["KIL"].strength = 0;
    }
    if (year == 1899) {
      addCountry("ENGn","British Colonies",year,1,300,6 ,1190,580,7);
    }
    if (year == 1900) {
      events[prevYear]["RUS"].state = 9;
      events[prevYear]["GEO"].strength = 0;
      events[prevYear]["ARM"].strength = 0;

      events[prevYear]["VEZ"].state = 2;
      events[prevYear]["ENGa"].name = "Commonwealth of Australia";
      events[prevYear]["ENGa"].x -= 220;
      events[prevYear]["ENGa"].size += 3;

      events[prevYear]["FRAx"].state = 2;
      events[prevYear]["MAL"].strength = 0;
      events[prevYear]["SON"].strength = 0;
      events[prevYear]["JOL"].strength = 0;
      events[prevYear]["CHA"].strength = 0;
      events[prevYear]["NIG"].strength = 0;
      events[prevYear]["MAD"].strength = 0;
    }
    if (year == 1902) {
      addCountry("CUB","Cuba",year,1,2250,6 ,710,450,7);
      events[prevYear]["BOL"].state = 2;
      events[prevYear]["DUTs"].strength = 0;
    }
    if (year == 1905) {
      events[prevYear]["SWE"].state = 6;
      events[prevYear]["NOR"].name = "Norway";
      events[prevYear]["NOR"].state = 3;
    }
    if (year == 1906) {
      addCountry("JAPc","",year,1,40,6 ,2060,300,5);
      events[prevYear]["RUS"].state = 10;
    }
    if (year == 1912) {
      events[prevYear]["OTT"].state = 11;
      events[prevYear]["OTT"].x += 30;
      events[prevYear]["MOR"].strength = 0;

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
      events[prevYear]["QIN"].x -= 30;
    }
    if (year == 1913) {
      addCountry("ALB","Albania",year,1,440,6 ,1390,332,3);
    }
    if (year == 1915) {
      events[prevYear]["GER"].state = 9;
      events[prevYear]["GRE"].state = 9;
    }
    if (year == 1918) {
      events[prevYear]["SER"].state = 5;
      events[prevYear]["ROA"].state = 3;
      events[prevYear]["SER"].name = "Yugoslavia";
    }
    if (year == 1919) {
      // Treaty of Versailles
      addCountry("FIN","Finland",year,1,2250,6 ,1380,185,7);
      events[prevYear]["CZE"].strength = 400;
      events[prevYear]["CZE"].name = "Czechoslovakia";
      events[prevYear]["CZE"].state = 3;
      events[prevYear]["AUS"].state = 10;
      events[prevYear]["AUS"].name = "Austria";
      events[prevYear]["HUN"].strength = 800;
      events[prevYear]["ITA"].state = 8;

      events[prevYear]["POL"].strength = 500;
      events[prevYear]["POL"].state = 8;
      events[prevYear]["GER"].state = 10;
      
      // Sykes-Picot Agreement
      addCountry("ENGb","British Middle East",year,1,2250,6 ,1440,370,7);
      addCountry("SYR","Syria (Fr.)",year,1,2250,6 ,1430,360,6);
    }
    if (year == 1920) {
      addCountry("ANT","Antarctica",year,1,2250,6 ,1150,1100,20);
      events[prevYear]["BOL"].state = 2;
      events[prevYear]["ISL"].state = 9;
      events[prevYear]["OTT"].y -= 15;
      events[prevYear]["YEM"].state = 4;
      events[prevYear]["OMA"].state = 4;

      events[prevYear]["LIV"].strength = 20;
      events[prevYear]["LIT"].strength = 20;
      events[prevYear]["LIT"].state = 5;
    }
    if (year == 1922) {
      events[prevYear]["RUS"].name = "Soviet Union";
      events[prevYear]["RUS"].x += 80;
      events[prevYear]["RUS"].y -= 12;
      events[prevYear]["RUS"].size += 3;

      events[prevYear]["OTT"].state = 12;
      events[prevYear]["OTT"].name = "Turkey";
      events[prevYear]["OTT"].x += 30;

      events[prevYear]["ENG"].state = 12;
      events[prevYear]["IRE"].name = "Ireland";
      events[prevYear]["IRE"].state = 2;
      events[prevYear]["IRE"].x = 1180;
      events[prevYear]["IRE"].y = 250;
      events[prevYear]["IRE"].size = 5;
    }
    if (year == 1926) {
      events[prevYear]["PER"].name = "Iran";
      events[prevYear]["PER"].size += 3;
      events[prevYear]["PER"].x += 50;
    }
    if (year == 1928) {
      events[prevYear]["ISL"].name = "Hejaz and Najd";
    }
    if (year == 1932) {
      events[prevYear]["JAPc"].state = 2;
      events[prevYear]["THA"].name = "Thailand";
      events[prevYear]["ISL"].name = "Saudi Arabia";
      
      events[prevYear]["MES"].strength = 300;
      events[prevYear]["MES"].name = "Iraq";
      events[prevYear]["MES"].state = 4;
      events[prevYear]["MES"].x += 140;
    }
    if (year == 1937) {
      events[prevYear]["JAPc"].state = 3;
    }
    if (year == 1939) {
      events[prevYear]["POL"].strength = 0;
      events[prevYear]["GER"].state = 11;
      events[prevYear]["ITA"].state = 9;
    }
    if (year == 1940) {
      events[prevYear]["FIN"].state = 2;
      events[prevYear]["GER"].state = 13;
      events[prevYear]["ROA"].state = 4;
    }
    if (year == 1941) {
      events[prevYear]["JAPc"].state = 4;
      events[prevYear]["GER"].state = 14;
      events[prevYear]["ITA"].state = 10;
      events[prevYear]["BUL"].state = 9;
    }
    if (year == 1942) {
      events[prevYear]["ABY"].state = 6;
      events[prevYear]["ABY"].name = "Ethiopia";
    }
    if (year == 1944) {
      events[prevYear]["GER"].state = 11;
    }
    if (year == 1945) {
      // WW2 Aftermath
      events[prevYear]["CZE"].state = 4;
      events[prevYear]["POL"].strength = 500;
      events[prevYear]["POL"].state = 9;
      events[prevYear]["GER"].state = 15;
      events[prevYear]["ITA"].state = 8;
      events[prevYear]["GRE"].state = 10;
      events[prevYear]["ROA"].state = 5;
      events[prevYear]["BUL"].state = 10;

      // Splitting of Korea
      events[prevYear]["KOR"].strength = 500;
      events[prevYear]["KOR"].y += 15;
      events[prevYear]["KOR"].name = "S. Korea";
      addCountry("DRK","N. Korea",year,1,2250,6 ,2070,330,5);
    }
    if (year == 1946) {
      events[prevYear]["JAP"].state = 8;
      events[prevYear]["PHI"].name = "Philippines";
      events[prevYear]["SYR"].state = 2;
      events[prevYear]["SYR"].name = "Syria";
      events[prevYear]["SYR"].x += 30;
    }
    if (year == 1947) {
      addCountry("NEZ","New Zealand",year,1,2250,6 ,2270,870,10);
      addCountry("PAK","Pakistan",year,1,1250,6 ,1660,400,10);
      events[prevYear]["RAJ"].name = "India";
      events[prevYear]["RAJ"].x += 30;
      events[prevYear]["DUTi"].name = "Indonesia";
      events[prevYear]["ITA"].state = 7;
    }
    if (year == 1948) {
      events[prevYear]["BUR"].name = "Burma";
      events[prevYear]["BUR"].strength = 560;
    }
    if (year == 1949) {
      events[prevYear]["CHI"].strength = 3000;
      events[prevYear]["CHI"].state = 7;
      events[prevYear]["CHI"].name = "China";
      events[prevYear]["CHI"].size += 6;
      events[prevYear]["CHI"].x -= 40;
      events[prevYear]["CHI"].y -= 40;

      events[prevYear]["QIN"].x += 180;
      events[prevYear]["QIN"].y += 80;
      events[prevYear]["QIN"].size = 5;
      events[prevYear]["QIN"].name = "Taiwan";

      events[prevYear]["ENGb"].state = 2;
      events[prevYear]["ENGb"].name = "U.A.E.";
      events[prevYear]["ENGb"].y += 45;
      events[prevYear]["ENGb"].x += 150;
      events[prevYear]["ENGb"].size -= 2;
    }
    if (year == 1953) {
      events[prevYear]["DRK"].state = 2;
    }
    if (year == 1946) {
      events[prevYear]["SPA"].state = 9;
    }
    if (year == 1957) {
      events[prevYear]["MLY"].name = "Malaysia";
    }
    if (year == 1960) {
      // Decolonization
      events[prevYear]["SOM"].strength = 150;
      events[prevYear]["SOM"].name = "Somalia";
      events[prevYear]["SOM"].state = 3;

      events[prevYear]["MAD"].strength = 150;
      events[prevYear]["MAD"].name = "Madagascar";
      events[prevYear]["MAD"].state = 3;
      events[prevYear]["MAD"].x -= 15;

      events[prevYear]["ITAx"].state = 2;
      events[prevYear]["ITAx"].name = "Eritrea"
      events[prevYear]["ITAx"].x = 1520;
      events[prevYear]["ITAx"].y = 500;
      events[prevYear]["ITAx"].size = 5;

      events[prevYear]["KON"].state = 3;
      events[prevYear]["KON"].name = "Zaire";
      events[prevYear]["KON"].x += 40;
      events[prevYear]["KON"].size += 5;

      events[prevYear]["FRAx"].state = 3;
      events[prevYear]["FRAx"].name = "Tunisia";
      events[prevYear]["FRAx"].x += 50;
      events[prevYear]["ENGs"].state = 4;
    }
    if (year == 1962) {
      // British Colonization
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

      events[prevYear]["ENGn"].strength = 0;
      events[prevYear]["NIG"].strength = 500;
      events[prevYear]["NIG"].name = "Nigeria";
      events[prevYear]["NIG"].x += 80;
      events[prevYear]["NIG"].size += 3;
      events[prevYear]["NIG"].state = 2;
    }
    if (year == 1966) {
      events[prevYear]["LIB"].strength = 400;
      events[prevYear]["LIB"].state = 2;
      events[prevYear]["LIB"].x -= 10;
      events[prevYear]["LIB"].y += 15;
      events[prevYear]["LIB"].size += 4;
    }
    if (year == 1966) {
      events[prevYear]["GUY"].name = "Guyana";
    }
    if (year == 1968) {
      events[prevYear]["SPAx"].state = 2;
      events[prevYear]["SPAx"].name = "Western Sahara";
    }
    if (year == 1971) {
      events[prevYear]["PAK"].state = 2;
    }
    if (year == 1975) {
      events[prevYear]["SUR"].name = "Suriname";
      events[prevYear]["PORa"].state = 4;
      events[prevYear]["PORa"].x -= 30;
      events[prevYear]["PORa"].name = "Angola Zambia Mozambique";
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
    if (year == 1986) {
      addCountry("AUZ","Australia",year,1,2250,6 ,2070,760,15);
      events[prevYear]["ENGa"].name = "";
    }
    if (year == 1989) {
      events[prevYear]["BUR"].name = "Myanmar";
    }
    if (year == 1990) {
      events[prevYear]["ENGs"].state = 5;
      events[prevYear]["GER"].state = 16;
    }
    if (year == 1991) {
      // Fall of the Soviet Union
      events[prevYear]["RUS"].name = "Russia";
      addCountry("UKR","Ukraine",year,1,2250,6 ,1440,270,6);
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
    }
    if (year == 1993) {
      events[prevYear]["ABY"].state = 5;
      events[prevYear]["CZE"].state = 5;
      events[prevYear]["CZE"].name = "Czechia Slovakia";
    }
    if (year == 1995) {
      if (RNG("Breakup_of_Yugoslavia",year) <= unlikely) {
        events[prevYear]["SER"].strength + 100;
      } else if (RNG("Breakup_of_Yugoslavia",year) <= Default) {
        events[prevYear]["SER"].state = 6;
        events[prevYear]["SER"].name = "Serbia";
        events[prevYear]["SER"].x += 12;
      }
    }
    if (year == 1997) {
      events[prevYear]["KON"].name = "D.R.C.";
    }
    if (year == 2008) {
      if (events[prevYear]["SER"].name == "Serbia") {
        events[prevYear]["SER"].state = 7;
      }
    }
    if (year == 2011) {
      if (RNG("South_Sudan",year) <= unlikely) {
        events[prevYear]["KSH"].strength += 10;
      } else if (RNG("South_Sudan",year) <= Default) {
        events[prevYear]["KSH"].state = 4;
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
        events[year]["conditions"] = { ...events[prevYear]["conditions"] };
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
  swapItems(nations,"HAI","FRAk");
  swapItems(nations,"HAI","SPAc");
  swapItems(nations,"DOM","SPAc");
  swapItems(nations,"CUB","SPAc");
  swapItems(nations,"MAJ","SVJ");
  swapItems(nations,"NAP","ITA");
  swapItems(nations,"AUS","HRE");

  // Latin American Independence
  swapItems(nations,"COL","SPAc");
  swapItems(nations,"EQU","SPAc");
  swapItems(nations,"VEZ","SPAc");
  swapItems(nations,"BOL","SPAc");
  swapItems(nations,"PAR","SPAc");
  swapItems(nations,"URU","SPAc");
  swapItems(nations,"ARG","SPAc");
  swapItems(nations,"CHL","SPAc");
  swapItems(nations,"PEU","SPAc");

  swapItems(nations,"UKR","HUN");
  swapItems(nations,"ENGk","SPAc");
  swapItems(nations,"DUTc","CAN");
  swapItems(nations,"GUY","POR");
  swapItems(nations,"VEZ","GUY");
  swapItems(nations,"SUR","POR");
  swapItems(nations,"FGU","POR");
  swapItems(nations,"CAN","USA");
  swapItems(nations,"MEX","CEN");
  swapItems(nations,"CZE","HRE");
  swapItems(nations,"RAJ","BUR");

  endItem(nations, "RUS");
  endItem(nations, "DUTs");
  endItem(nations, "SPA");
  endItem(nations, "EGY");
  endItem(nations, "FRAk");
  endItem(nations, "SPAc");
  endItem(nations, "ENGa");
  endItem(nations, "CAN");
  endItem(nations, "CAM");
  endItem(nations, "QUE");
  endItem(nations, "BRA");
  endItem(nations, "ENGx");
  endItem(nations, "FRAx");
  endItem(nations, "HUN");

  frontItem(nations, "SWI");
  frontItem(nations, "BEL");
  frontItem(nations, "LIT");
  frontItem(nations, "RAJ");
  swapItems(nations,"BUR","RAJ");
  frontItem(nations, "PAK");
  frontItem(nations, "OTT");
  frontItem(nations, "CSA");
  frontItem(nations, "KZH");
  frontItem(nations, "DRK");
  frontItem(nations, "JAPc");
  frontItem(nations, "FRAi");
  frontItem(nations, "GER");
  frontItem(nations, "PAP");

  if (timeline >= 1870) {
    endItem(nations, "OTT");
    endItem(nations, "ISL");
  }
  if (timeline >= 1948) {
    frontItem(nations, "BUR");
  }
  
  for (let i = 0; i < nations.length; i++) {
    if (events[timeline][nations[i]].strength > 0) {
      const img = new Image();
      img.src = `images/${nations[i]}/${nations[i] + events[timeline][nations[i]].state}.png`;
      img.classList.add("above-layer");

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
      canada = "brightness(0%) grayscale(100%) invert(37%) sepia(76%) saturate(6600%) hue-rotate(338deg) brightness(97%) contrast(96%)";
      brazil = "hue-rotate(260deg) brightness(120%)";
      ussr = "brightness(0%) grayscale(100%) invert(8%) sepia(70%) saturate(6669%) hue-rotate(349deg) brightness(76%) contrast(94%)"
      russia = "brightness(0%) grayscale(100%) invert(55%) sepia(56%) saturate(637%) hue-rotate(160deg) brightness(92%) contrast(87%)";
      philippines = "brightness(0%) grayscale(100%) invert(47%) sepia(64%) saturate(315%) hue-rotate(98deg) brightness(97%) contrast(89%)";
      india = "hue-rotate(44deg) saturate(261%) brightness(105%)";
      exampleHere = "brightness(0%) grayscale(100%)";
      
      // Apply necessary CSS filters
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
      if (events[timeline][nations[i]].name === "Malaysia") {
        img.style.filter = "hue-rotate(124deg) saturate(272%) brightness(31%)";
      }

      if (nations[i] == "NOR" && events[timeline][nations[i]].name === "") {
        img.style.filter = "hue-rotate(30deg) saturate(83%) brightness(157%)";
      } if (nations[i] == "NOR" && events[timeline][nations[i]].name === " ") {
        img.style.filter = "hue-rotate(195deg) saturate(378%) brightness(170%)";
      }

      if (timeline >= 1822 && nations[i] === "BRA") {
        img.style.filter = brazil;
      }
      if (timeline >= 1867 && nations[i] === "CAN") {
        img.style.filter = canada;
      }
      if (timeline >= 1898 && nations[i] === "SPAc") {
        img.style.filter = usa;
      }
      if (nations[i] === "NAP") {
        img.style.filter = "hue-rotate(50deg) brightness(100%)";
      }
      if (timeline > 1910 && nations[i] === "POR") {
        img.style.filter = "hue-rotate(300deg) brightness(90%)";
      }
      if (timeline > 1910 && nations[i] === "PORa") {
        img.style.filter = "hue-rotate(300deg) brightness(90%)";
      }
      if (timeline > 1900 && nations[i] === "HUN") {
        img.style.filter = "hue-rotate(251deg) saturate(132%) brightness(110%)";
      }
      if (events[timeline][nations[i]].name === "Soviet Union") {
        img.style.filter = ussr;
      }
      if (timeline >= 1979 && nations[i] === "DENc") {
        img.style.filter = "brightness(115%)";
      }
      if (events[timeline][nations[i]].name === "Russia") {
        img.style.filter = russia;
      }

      if ((timeline == 1939 || timeline == 1940)) {
        if (nations[i] == "FRA" || nations[i] == "FRAc" || nations[i] == "FRAi" || nations[i] == "FRAx" || nations[i] == "FRAk" || nations[i] == "FGU") {
          img.style.filter = "grayscale(90%)";
        }
      }

      if (events[timeline]["conditions"].iberianUnion && nations[i] === "POR") {
        img.style.filter = "hue-rotate(147deg) saturate(107%) brightness(248%)";
      } if (events[timeline]["conditions"].iberianUnion && nations[i] === "BRA") {
        img.style.filter = "hue-rotate(147deg) saturate(107%) brightness(248%)";
      } if (events[timeline]["conditions"].iberianUnion && nations[i] === "PORa") {
        img.style.filter = "hue-rotate(147deg) saturate(107%) brightness(248%)";
      }

      // Update background images
      const backgroundImage = document.getElementById("bg");
      if (timeline >= -2023) {
        backgroundImage.src = "images/-2023bg.png";
      }
      if (timeline >= -1691) {
        backgroundImage.src = "images/-1691bg.png";
      }
      if (timeline >= -1178) {
        backgroundImage.src = "images/-1178bg.png";
      }
      if (timeline >= -52) {
        backgroundImage.src = "images/-52bg.png";
      }
      if (timeline >= 1450) {
        backgroundImage.src = "images/1450bg.png";
      }

      zoom.appendChild(img);
    }
  }
  showNames("e");
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

// Add event listeners
seedInput.addEventListener("input", function (event) {
  seed = event.target.value;
  seedNumber = stringToNumbers(seed);
  
  for (let e in rngEvents) {
    // Generate seed-based random number
    if (seed == "0" || seed == "" || seed == "@") {
      rngEvents[e] = 1;
    } else {
      if (isValidYearRange(seed) != "" || false) {
        rngLimit = isValidYearRange(seed);
      }
      let rng = new Math.seedrandom(seedNumber);
      rngEvents[e] = parseFloat(rng().toFixed(3));
      seedNumber = seedNumber * rng();
    }
  }
  calculateEvents();
  updateCountries();
  //console.log(rngEvents);
});

timelineInput.addEventListener('input', () => {
  timelineValue.textContent = parseInt(timelineInput.value) + 1;
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

// Physical map option
const mapImage = document.getElementById("map");
const oceanImage = document.getElementById("ocean");
const overlayImage = document.getElementById("overlay");
let isMapShown = true;

function showMap() {
  if (isMapShown) {
    mapImage.src = "images/map2.png";
    oceanImage.src = "images/ocean2.png";
    overlayImage.src = "images/map2.png";
  } else {
    mapImage.src = "images/world.png";
    oceanImage.src = "images/ocean.png";
    overlayImage.src = "images/transparent.png";
  }
  isMapShown = !isMapShown;
}
