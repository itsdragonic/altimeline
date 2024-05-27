var civs = {};
civs[-2024] = {
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
    "conditions": {},
}

// News
var news = {
    /* Example News
    "Rome vs. Carthage": {
        subtext: "Rome defeats Carthage!",
        image: "https://www.worldhistory.org/img/c/p/360x202/2171.jpg",
        altHistory: false,
        //blackandwhite: false,
        id: 1,
        startDate: -271,
        duration: 10,
        major: true,
    }*/
}
function worldNews(title,subtext,image,altHistory,id,startDate,duration,major) {
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

// Re-arrange Nations (lower = higher priority)
function rearrange(nations) {
    let civ = civs[timeline];
    let c = civ["conditions"];

    if (civ["GRE"].strong) {
        frontItem(nations, "GRE");
    }
    frontItem(nations, "ROM");
    frontItem(nations, "BYZ");
    if (civ["CAR"].strong || civ["CAR"].name == "Vandals") {
        frontItem(nations, "CAR");
    }

    if (civ["ISR"].name != "") {
        frontItem(nations, "ISR");
    }

    if (civ["PER"].name == "Seleucid Empire" || civ["PER"].name == "Parthian Empire") {
        frontItem(nations, "PER");
    }

    if (civ["MON"].name != "Mongol Empire") {
        endItem(nations, "MON");
    } else {
        frontItem(nations, "MON");
    }
    endItem(nations, "IRE");
    endItem(nations, "SCO");
    endItem(nations, "ITA");
    endItem(nations, "GTH");
    endItem(nations, "ALG");

    endItem(nations, "RUS");
    /*if (events[timeline]["conditions"].occupied_iran) {
      endItem(nations, "PER");
    }*/
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
    if (timeline > 855 && timeline < 1861) {
        endItem(nations, "ITA");
    }
    if (timeline > 1800) {
        endItem(nations, "HRE");
    }
    if (civ["DUT"].dutch_brazil) {
      endItem(nations, "SUR");
    }
    endItem(nations, "IRO");
    endItem(nations, "ENGa");
    endItem(nations, "CAN");
    endItem(nations, "CAM");
    endItem(nations, "QUE");
    endItem(nations, "ENGx");
    endItem(nations, "FRAx");
    endItem(nations, "SPA");

    frontItem(nations, "VEN");
    frontItem(nations, "GEN");
    frontItem(nations, "BRI");
    frontItem(nations, "ISL");
    frontItem(nations, "OTT");
    
    if (timeline > 1800) {
        endItem(nations, "ISL");
        endItem(nations, "OTT");
    }
    if (civ["CHI"].communist) {
        endItem(nations, "QIN");
    }

    frontItem(nations, "SOK");
    frontItem(nations, "EAF");
    frontItem(nations, "SWI");
    frontItem(nations, "DUT");
    frontItem(nations, "BEL");
    frontItem(nations, "LIT");
    frontItem(nations, "FRAk");
    frontItem(nations, "HAI");
    frontItem(nations, "RAJ");
    frontItem(nations, "JAPn");
    frontItem(nations, "PAK");
    frontItem(nations, "MEXa");
    frontItem(nations, "USAo");
    frontItem(nations, "KZH");
    frontItem(nations, "DRK");
    frontItem(nations, "JAPc");
    frontItem(nations, "FRAi");
    frontItem(nations, "TEX");
    frontItem(nations, "FLO");
    frontItem(nations, "VEZ");
    frontItem(nations, "PAP");  

    frontItem(nations, "CEN");
    frontItem(nations, "SIB");
    frontItem(nations, "MON");
    frontItem(nations, "KZH");
    frontItem(nations, "TIB");
    frontItem(nations, "GER");
    frontItem(nations, "EU");
    frontItem(nations, "DUTc");
    frontItem(nations, "SWEc");
    frontItem(nations, "USA");
    frontItem(nations, "CSA");
    
    if (civ["RAJ"].name == "India") {
        frontItem(nations, "BUR");
    }

    frontItem(nations, "lakes");
    frontItem(nations, "nuclear");
    endItem(nations, "BG");
}

function worldEvents(year) {
    let nextYear = year + 1;
    let civ = civs[nextYear];

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
    |                               |.
    |                               |.
    |                               |.
    |                               |.
    |                               |.
    |                               |.
    |                               |.
    |   ~ to 1700 AD                |.
    |                               |.
    |   ____________________________|___
    |  /.                              /.
    \_/______________________________*/

    if (nextYear == -1691) {
        worldTech = 200;
    }
    if (nextYear == -1178) {
        worldTech = 300;
    }

    // Bronze Age
    worldNews("Bronze Age Collapse...",
                "Major cities have been destroyed, whole civilizations have fallen, diplomatic and trade relations are severed, and even writing systems have vanished.",
                "https://cdn.thecollector.com/wp-content/uploads/2021/07/fall-of-troy-bronze-age-collapse.jpg",
                false, 7, rngRange(rng(5),-1200,-1100), 35, true);

    if (nextYear == -933) {
        civ["LIB"].strength = 210;
    }

    // Buddha
    worldNews("The Buddha is Enlightened",
                "Siddhartha Gautama achieves spiritual awakening under the Bodhi Tree.",
                "https://qph.cf2.quoracdn.net/main-qimg-138efc066fd50ef90c4a13b9d2d0df58-pjlq",
                false, 6, rngRange(rng(3),-563,-400), 10, true);

    if (nextYear == -52) {
        worldTech = 400;
    }
    
    /*
     *   ~ Year of Our Lord (A.D.) ~
     */
    
    if (nextYear == 200) {
        civ["YEM"].strength = 3500;
    }
    if (nextYear == 350) {
        civ["ABY"].state = 2;
    }
    if (nextYear == 375) {
        civ["HNN"].strength = 50;
    }
    if (nextYear == 396) {
        civ["NEP"].strength = 2250;
    }

    if (nextYear == 540) {
      civ["TUR"].strength = 120;
  }
    if (nextYear == 568) {
        civ["HNN"].strength = 237;
        civ["HNN"].y += 10;
        civ["HNN"].name = "Avar Khaganate";
    }
    if (nextYear == 592) {
        civ["GTH"].state = 3;
        civ["FRK"].state = 2;
    }
    if (nextYear == 690) {
        civ["ENG"].state = 2;
        civ["CHA"].strength = 2250;
    }  

    // 700s
    if (nextYear == 731) {
        civ["GTH"].state = 4;
        civ["GTH"].name = "Lombards";
        civ["GTH"].x = 1330;
        civ["GTH"].y = 325;
        civ["GTH"].size = 5;
    }
    if (nextYear == 757) {
        civ["ALG"].strength = 2600;
        civ["PAP"].strength = 2600;
    }
    if (nextYear == 766) {
        civ["BYZ"].state = 4;
        civ["FRK"].state = 3;
    }
    
    // 800s
    if (nextYear == 800) {
        civ["CAM"].name = "Khmer";
        civ["GEO"].name = "Georgia";
        civ["ISL"].state = 6;
  
        civ["NOR"].strength = 2600;
        civ["SWE"].strength = 2600;
        civ["DEN"].strength = 2600;
    }  
    if (nextYear == 825) {
        civ["BUR"].name = "Le-Mro";
    }
    if (nextYear == 855) {
        civ["HRE"].state = 2;
        civ["FRA"].state = 2;
        civ["ITA"].state = 2;
        civ["CAM"].state = 3;
    }
    if (nextYear == 860) {
        civ["RUS"].strength = 3000;
        civ["OMA"].strength = 2600;
        civ["ICE"].strength = 2600;
    }

     // 900s
    if (nextYear == 900) {
        civ["ENG"].state = 4;
    } 
    if (nextYear == 912) {
        civ["RUS"].state = 2;
        civ["ALG"].name = "Fatamid Caliphate";
        civ["ISL"].strength = 0;
    }
    if (nextYear == 930) {
        civ["ABY"].state = 3;
        civ["ABY"].name = "Zagwe";
        civ["ABY"].y += 30;
        civ["CHI"].name = "Chinese Warring Kingdoms";
        civ["CHI"].state = 4;
    }
    if (nextYear == 962) {
        civ["POL"].strength = 2700;
    }
    if (nextYear == 970) {
        civ["FAT"].strength = 700;
        civ["ALG"].name = "Hamm.";
        civ["NOR"].name = "";
        civ["BUL"].state = 5;
    }
    if (nextYear == 980) {
        civ["CHI"].name = "Song Dynasty";
        civ["CHI"].state = 5;
        civ["VIE"].state = 3;
        civ["VIE"].name = "Dai Viet";
    }
    if (nextYear == 985) {
        civ["VIN"].strength = 139;
    }

    // 1000s
    if (nextYear == 1000) {
        civ["IRE"].strength = 2250;
        civ["NEP"].state = 3;
        civ["POL"].state = 3;
    } 
    if (nextYear == 1009) {
        civ["POL"].state = 1;
        civ["CHM"].strength = 1000;
        civ["YEM"].name = "Yemen";
    }
    if (nextYear == 1018) {
        civ["BYZ"].state = 5;
        civ["BUL"].strength = 0;
        civ["SER"].strength = 0;
        civ["GEN"].strength = 2600;
    }
    if (nextYear == 1040) {
        civ["RUS"].state = 3;
        civ["HRE"].state = 3;
        civ["FRA"].state = 3;
        civ["ITA"].state = 3;
    }
    if (nextYear == 1045) {
        civ["TUR"].strength = 200;
        civ["TUR"].state = 3;
        civ["TUR"].x += 10;
        civ["TUR"].y += 90;
        civ["TUR"].size -= 2;
        civ["TUR"].name = "Seljuq Empire";
        civ["SER"].strength = 2000;
    }
    if (nextYear == 1060) {
        civ["MOR"].strength = 1250;
        civ["HRE"].state = 4;
    }

    // 1100s
    if (nextYear == 1100) {
        civ["HUN"].state = 2;
    }
    if (nextYear == 1120) {
        civ["POL"].state = 2;
        civ["GEO"].state = 2;
    }
    if (nextYear == 1127) {
        civ["HUN"].state = 3;
        civ["NAP"].strength = 1250;
    }
    if (nextYear == 1139) {
      civ["ABY"].name = "Abyssinia";
    }
    if (nextYear == 1150) {
        civ["MOR"].name = "Almohads";
        /*if (RNG("Big_Portugal",year) <= veryUnlikely) {
          civ["POR"].state = 2;
        }*/
        civ["ISR"].state = 1;
    }
    if (nextYear == 1171) {
        civ["FAT"].name = "Ayyubid Sultinate";
    }
    if (nextYear == 1190) {
        civ["BUL"].strength = 600;
        civ["BUL"].state = 6;
        civ["GHA"].name = "Sosso";
        civ["GHA"].x += 20;
        civ["GHA"].size += 2;
    }

    // 1200s
    if (nextYear == 1200) {
        civ["CZE"].strength = 2550;
        civ["HAW"].strength = 2550;
    } 
    if (nextYear == 1240) {
        civ["LIT"].strength = 2080;
    }
    if (nextYear == 1242) {
        civ["MON"].state = 6;
        civ["ALG"].name = "Zayyanids";
        civ["GEO"].state = 3;
        civ["TIB"].strength = 0;
    }
    if (nextYear == 1250) {
        civ["FAT"].name = "Mamluks";
        civ["FAT"].size += 3;
        civ["FAT"].x += 30;
    }

    // 1300s
    if (nextYear == 1313) {
        civ["CHM"].strength = 0;
        civ["LIT"].state = 2;
    }
    // Ottoman Empire
    if (nextYear == 1317) {
        civ["OTT"].strength = 1000;
        civ["KIL"].strength = 1250;
    }
    if (nextYear == 1330) {
        civ["CZE"].state = 2;
        civ["CHM"].strength = 1000;
    }
    if (nextYear == 1334) {
        civ["OTT"].state = 2;
        civ["ABY"].state = 4;
        civ["NIG"].strength = 1250;
    }
    if (nextYear == 1340) {
        civ["POL"].state = 3;
        civ["MAJ"].strength = 2250;
        civ["SER"].state = 2;
    }
    if (nextYear == 1350) {
        civ["PAP"].state = 2;
        civ["ROA"].strength = 2250;
        // c.ottoman_romania = true;
    }
    if (nextYear == 1357) {
        civ["JOL"].strength = 1250;
        civ["THA"].state = 2;
        civ["NOR"].name = "Norway";
    }
    if (nextYear == 1363) {
        civ["LIT"].state = 3;
    }
    if (nextYear == 1387) {
        civ["OTT"].state = 3;
        civ["CHA"].name = "Bornu";
        civ["CHA"].x += 20;
  
        civ["MON"].state = 10;
        civ["MON"].name = "N. Yuan";
        civ["MON"].x += 90;
        civ["MON"].size -= 2;
        civ["HOR"].strength = 119;
  
        /*// Chinese colonization of the Americas?
        if (RNG("China_Colonizes_America",year) <= veryUnlikely) {
          eventLog.push("*1387: China establishes a permanent settlement in the Americas");
          civ["CHIa"].strength = 2000;
        }*/
    }
    if (nextYear == 1389) {
        civ["TUR"].strength = 120;
        civ["TUR"].name = "Timurid Empire";
        civ["TUR"].x += 10;
        civ["TUR"].y += 10;
        civ["TUR"].size += 3;
    }

    // 1400s
    if (nextYear == 1400) {
        civ["MLY"].strength = 3600;
        civ["OTT"].state = 4;
        civ["BYZ"].size -= 5;
        civ["BYZ"].x += 30;
        civ["BYZ"].y -= 10;
        civ["BUL"].strength = 0;
        civ["IRO"].strength = 2200;
    }
    if (nextYear == 1409) {
        /*if (c.new_china) {
          civ["MLY"].strength = 0;
        }*/
        civ["QQO"].strength = 100;
    }
    if (nextYear == 1448) {
        civ["KUW"].strength = 400;
    }
    if (nextYear == 1450) {
        civ["AUS"].strength = 1000;
        civ["DEN"].strength = 2000;
        civ["SWE"].state = 2;
        civ["SWE"].name = "Sweden";
        civ["NOR"].name = " ";
        worldTech = 500;
    }
    if (nextYear == 1453) {
        /*if (RNG("Byzantium",year) <= unlikely && c.roman_empire) {
          c.byzantium = true;
          c.ottoman_romania = false;
          //c.am_colonization = false;
          civ["BYZ"].strength += 700;
          civ["OTT"].state = 3;
        } else {
          civ["BYZ"].strength = 0;
        }*/ civ["BYZ"].strength = 0;
        civ["QQO"].state = 2;
        civ["TUR"].state = 5;
    }
    if (nextYear == 1458) {
        /*if (c.byzantium) {
          civ["OTT"].state = 2;
          civ["BYZ"].size += 3;
          civ["BYZ"].x -= 20;
        }*/
    }
    if (nextYear == 1468) {
        civ["SON"].strength = 1000;
        civ["MOR"].name = "Morocco";
        civ["MOR"].x += 30;
        civ["POL"].state = 4;
        civ["DEN"].strength = 2000;
        civ["SWE"].state = 2;
        civ["SWE"].name = "Sweden";
    }
    if (nextYear == 1470) {
        civ["QQO"].name = "Aq Qoyunlu";
    }
    if (nextYear == 1474) {
        /*if (c.byzantium) {
          civ["OTT"].strength = 0;
        } else {
          civ["OTT"].state = 5;
        }*/ civ["OTT"].state = 5;
        civ["SER"].strength = 0;
    }
    if (nextYear == 1477) {
        civ["AUS"].state = 2;
        civ["BYZ"].state = 2;
    }
    if (nextYear == 1492) {
        /*if (c.byzantium) {
          civ["BYZ"].state = 1;
          civ["FAT"].strength = 0;
        }*/
    }
    if (nextYear == 1494) {
        civ["SPAc"].strength = 750;
    }

    // 1500s
    if (nextYear == 1500) {
        civ["BRA"].strength = 1250;
    }  
    if (nextYear == 1509) {
        civ["RUS"].state = 5;
        civ["RUS"].y -= 30;
        civ["RUS"].name = "Novogrod";
  
        civ["PER"].name = "Safavid Empire";
        civ["PER"].strength += 2000;
        civ["PER"].state = 5;
    }
    if (nextYear == 1513) {
        civ["SPAc"].state = 2;
        civ["KZH"].strength = 195;
        civ["LIT"].state = 4;
    }
    if (nextYear == 1524) {
        civ["OTT"].state = 6;
        civ["FAT"].strength = 0;
        civ["ICE"].name = "Iceland (Den.)";
    }
    if (nextYear == 1525) {
        civ["SPAc"].state = 3;
        civ["AZX"].strength = 0;
        civ["LIV"].name = "Livonia";
        civ["CZE"].strength = 0;
        civ["AUS"].state = 3;
    }
    if (nextYear == 1528) {
        civ["VEZ"].strength = 18;
    }
    /*if (civ["VEZ"].name != "Venezuela") {
        civ["VEZ"].color = [72, 70, 67];
    } else {
        civ["VEZ"].color = [];
    }*/
    if (nextYear == 1529) {
        civ["MAJ"].strength = 0;
        civ["MLY"].name = "Johor";
    }
    if (nextYear == 1533) {
        civ["SPAc"].state = 4;
        civ["BRA"].state = 2;
        civ["OTT"].state = 7;
        /*if (!c.byzantium) {
          civ["HUN"].strength = 0;
          civ["AUS"].state = 4;
        }*/
        civ["HUN"].strength = 0;
        civ["AUS"].state = 4;
    }
    if (nextYear == 1545) {
        civ["ENG"].state = 10;
        civ["MAD"].strength = 2250;
        civ["YEM"].strength = 0;
  
        /*if (RNG("German_Venezuela",year) <= unlikely) {
          civ["VEZ"].name = "Welserland";
          civ["VEZ"].strength += 700;
          civ["VEZ"].state = 2;
        } else {
          civ["VEZ"].name = "Venezuela";*/
    }
    if (nextYear == 1555) {
        civ["MOR"].name = "Saadis";
        civ["MOR"].size ++;
    }
    if (nextYear == 1563) {
        civ["SPAc"].state = 5;
        civ["AZX"].strength = 0;
        civ["BRA"].state = 3;
        civ["LIV"].strength = 0;
    }
    if (nextYear == 1570) {
        civ["OTT"].state = 8;
        civ["ALG"].strength = 0;
  
        // Polish-Lithuania
        civ["POL"].state = 5;
        civ["POL"].name = "Poland-Lithuania";
        civ["LIT"].strength = 0;
    }
    if (nextYear == 1575) {
        civ["PHI"].strength = 653;
        civ["ISL"].strength = 1000;
        civ["ISL"].name = "Hejaz";
        civ["ISL"].size = 8;
        civ["ISL"].x += 160;
        civ["ISL"].y += 30;
        civ["ISL"].state = 8;
    }
    if (nextYear == 1580) {
        civ["PORa"].strength = 653;
        civ["MOR"].state = 2;
        civ["POL"].state = 6;
    }
    if (nextYear == 1582) {
        civ["DUT"].strength = 653;
    }
    if (nextYear == 1590) {
        civ["SPAc"].state = 6;
        civ["POL"].state = 7;
        civ["SWE"].state = 3;
        civ["NOR"].state = 2;
    }
    if (nextYear == 1592) {
        civ["SON"].name = "Gao";
        /*if (RNG("Admiral_Yi",year) <= unlikely) {
          civ["KOR"].name = "";
        }*/
    }
    if (nextYear == 1594) {
        civ["RUS"].state = 6;
        civ["RUS"].name = "Russian Empire"
        civ["SOM"].state = 2;
        civ["THA"].name = "Ayutthaya";
        civ["SON"].strength = 0;
    }

    // 1600s
    if (nextYear == 1600) {
        civ["DAR"].strength = 2250;
    }  
    if (nextYear == 1607) {
        civ["MAL"].state = 2;
        civ["MAL"].name = "Bamana";
        civ["MAL"].x += 10;
    }
    if (nextYear == 1612) {
        civ["CAN"].strength = 3250;
        civ["QUE"].strength = 200;
    }
    if (nextYear == 1615) {
        civ["DUTc"].strength = 52;
    }
    if (nextYear == 1615) {
        civ["GER"].strength = 2000;
    }
    if (nextYear == 1622) {
        civ["DUTi"].strength = 2553;
    }
    if (nextYear == 1625) {
        civ["FRAk"].strength = 700;
        civ["SWE"].state = 4;
        /*if (c.new_china) {
          civ["DUTi"].name = "";
        }*/
    }
    if (nextYear == 1630) {
        civ["DUTb"].strength = 9;
        civ["PORi"].strength = 1553;
    }
    if (nextYear == 1637) {
        civ["RUS"].state = 7;
        civ["ENGk"].strength = 700;
        civ["SWEc"].strength = 17;
        civ["GER"].state = 2;
        civ["FRA"].state = 4;
  
        // Dutch Brazil
        /*if (RNG("Dutch_Invasion_of_Brazil",year) <= veryUnlikely) {
          c.dutch_brazil = true;
          civ["DUTb"].strength = 0;
          civ["BRA"].name = "Dutch Brazil";
        }*/
    }
    if (nextYear == 1641) {
        civ["SPAc"].state = 7;
        civ["BRA"].state = 4;
        civ["SUR"].strength = 2250;
        civ["FGU"].strength = 2250;
    }
    if (nextYear == 1642) {
        /*if (c.celtics) {
          civ["FGU"].name = "Gallic Guiana";
        }*/
    }
    if (nextYear == 1647) {
        civ["CAN"].state = 2;
        civ["QUE"].state = 2;
    }
    if (nextYear == 1649) {
        civ["ENG"].name = "Great Britain";
        civ["ENG"].y -= 20;
        civ["ENG"].x -= 20;
        civ["ENG"].state = 11;
        civ["SWI"].strength = 5000;
        civ["QIN"].state = 2;
        civ["CHI"].strength = 0;
  
        civ["YEM"].strength = 1000;
        civ["YEM"].name = "Yemen";
        civ["YEM"].state = 2;
        civ["OMA"].state = 2;
        civ["ITA"].state = 4;
    }
    if (nextYear == 1655) {
        civ["KIL"].name = "Zanzibar";
        civ["DUTs"].strength = 2250;
  
        /*if (RNG("New_Sweden",year) <= unlikely) {
          civ["SWEc"].state = 2;
          civ["SWEc"].strength = 500;
          civ["SWEc"].size += 3;
        }*/
    }
    if (nextYear == 1658) {
        civ["PORa"].state = 2;
        civ["DEN"].state = 3;
  
        civ["IRO"].state = 2;
        civ["IRO"].x = 690;
        civ["IRO"].y = 320;
        civ["IRO"].size = 9;
        civ["MOR"].name = "Morocco";
    }
    if (nextYear == 1667) {
        /*if (RNG("New_Sweden",year) <= superUnlikely) {
          civ["SWEc"].state = 3;
          civ["SWEc"].x += 30;
          civ["SWEc"].y -= 10;
        } else {
          civ["SWEc"].strength = 0;
        }*/ civ["SWEc"].strength = 0;
      }
    if (nextYear == 1670) {
        civ["CAN"].state = 3;
        civ["CAN"].x -= 15;
        civ["CAN"].y += 30;
    }
    if (nextYear == 1680) {
        civ["SOM"].name = "Geledi";
        civ["QUE"].state = 3;
    }
    if (nextYear == 1682) {
        civ["QUE"].state = 4;
        civ["SPAc"].state = 8;
    }
    if (nextYear == 1686) {
        civ["OTT"].state = 9;
        civ["AUS"].state = 5;
    }

    // 1700s
    if (nextYear == 1700) {
        civ["CHM"].strength = 0;
        civ["QIN"].state = 3;
        civ["QIN"].x -= 50;
        civ["QIN"].y += 70;
        civ["QIN"].size += 2;
    }  
    if (nextYear == 1705) {
        civ["DUT"].state = 2;
    }
    if (nextYear == 1714) {
        civ["AUS"].state = 6;
        civ["DUT"].state = 1;
        civ["ITA"].state = 5;
    }
    if (nextYear == 1723) {
        civ["FRAa"].strength = 2250;
    }
    if (nextYear == 1730) {
        civ["CAN"].state = 4;
    }
    if (nextYear == 1736) {
        civ["PER"].name = "Afsharid Empire";
    }
    if (nextYear == 1740) {
        civ["GER"].state = 3;
    }
    if (nextYear == 1750) {
        civ["AFG"].strength = 2250;
    }
    if (nextYear == 1757) {
        // British Raj
        civ["RAJ"].strength = 2200;
        civ["PHI"].state = 2;
        civ["BUR"].name = "Konbaung";
    }
    if (nextYear == 1762) {
        civ["AFG"].state = 2;
        civ["RAJ"].state = 2;
        civ["BUR"].state = 4;
        civ["PER"].name = "Zands";
    }
    if (nextYear == 1763) {
        // Treaty of Paris of 1763
        civ["IRO"].strength = 0;

        /*if (RNG("Seven_Years_War",year) <= unlikely) {
          civ["QUE"].x -= 70;
          civ["QUE"].size += 3;
          civ["CAN"].state = 5;
          civ["CAN"].name = " ";
          civ["USA"].strength = 500;
          civ["USA"].name = "13 Colonies";
          c.usa_exists = false;
          c.pax_francia = true;
        } else {*/
          civ["SPAc"].state = 9;
          civ["CAN"].state = 5;
          civ["QUE"].strength = 0;
        //}
    }
    if (nextYear == 1764) {
        civ["IND"].state = 9;
        civ["IND"].name = "Maratha Empire";
        civ["CHO"].state = 8;
        civ["CHO"].name = "";
    }
    if (nextYear == 1765) {
        civ["BRA"].state = 5;
        civ["SUR"].state = 2;
        civ["FGU"].state = 2;
    }
    if (nextYear == 1773) {
        // 1st Partition of Poland
        civ["THA"].name = "Thonburi";
        civ["GER"].state = 4;
        civ["AUS"].state = 7;
        civ["RUS"].state = 9;
    }
    if (nextYear == 1775) {
        civ["CAN"].x = 630;
        civ["CAN"].y = 240;
        civ["CAN"].size = 11;

        civ["CAN"].name = "British America";
        /*if (!c.pax_francia) {
          civ["CAN"].name = "British America";
        } else {
          civ["CAN"].name = "Quebec";
        }*/
        civ["BHU"].strength = 2250;
    }
    if (nextYear == 1776) {
        /*if (RNG("American_Revolution",year) <= impossible || !c.am_colonization) {
          c.usa_exists = false;
        } else {*/
          civ["USA"].strength = 4030;
        //}
    }
    if (nextYear == 1777) {
        civ["USA"].state = "1a";
    }
    if (nextYear == 1779) {
        civ["PAP"].state = 1;
    }
    if (nextYear == 1765) {
        civ["RUS"].state = 8;
    }
    if (nextYear == 1769) {
        civ["AFG"].state = 1;
    }
    if (nextYear == 1778) {
        /*if (c.pax_francia) {
          civ["QUE"].strength += 400;
        } else {*/
          civ["SPAc"].state = 9;
        //}
        civ["BRA"].state = 6;
    }
    if (nextYear == 1781) {
        civ["USA"].state = 1;
    }
    if (nextYear == 1782) {
        civ["USA"].state = "1b";
    }
    if (nextYear == 1783) {
        /*if (RNG("American_Revolution",year) <= superUnlikely) {
          c.usa_exists = false;
          civ["USA"].strength = 0;
        } else {*/
          civ["USA"].state = 2;
          civ["USA"].x = 550;
          civ["SPAc"].state = 10;
        //}
    }
    if (nextYear == 1788) {
        // Australia
        civ["ENGa"].strength = 2250;
        civ["ENGk"].state = 2;
    }
    if (nextYear == 1792) {
        civ["FRAk"].state = 2;
        civ["RUSc"].strength = 1250;
        civ["PER"].name = "Qajars";
        civ["PER"].x += 20;
    }
    if (nextYear == 1794) {
        /*if (RNG("Australia_Colonization",year) <= unlikely) {
          civ["PORz"].strength = 1000;
        }*/
    }
    if (nextYear == 1795) {
        // Partition of Poland
        civ["POL"].strength = 0;
        civ["POL"].name = "Poland";
        civ["GER"].state = 5;
        civ["AUS"].state = 8;
  
        civ["THA"].state = 3;
        civ["THA"].name = "Rattanakosin";
        civ["HAW"].state = 2;
    }
    if (nextYear == 1796) {
        /*c.napoleonic_wars = true;
        if (c.pax_francia) {
          c.napoleonic_wars = false;
        }
        if (c.napoleonic_wars) {*/
          civ["FRA"].state = 5;
          civ["DUT"].name = "Bat.";
          civ["SWI"].name = "Helvetica";
        //}
    }
    if (nextYear == 1799) {
        civ["ENGs"].strength = 3250;
        civ["DUTs"].name = "";
        civ["DUTi"].state = 2;
    }

    // 1800s
    if (nextYear == 1800) {
          civ["QUE"].state = 5;
          //if (c.usa_exists) {
            civ["QUE"].strength = 4;
          //} else {
          //  civ["QUE"].strength = 400;
          //}
          civ["QUE"].name = "Louisiana";
          civ["QUE"].x = 555;
          civ["QUE"].y = 300;
          civ["QUE"].size = 12;
    }  
    if (nextYear == 1801) {
        civ["ENG"].name = "United Kingdom";
        civ["AFG"].state = 3;
        civ["VIE"].name = "Vietnam";
    }
    if (nextYear == 1803) {
        civ["GUY"].strength = 2250;
        civ["FLO"].strength = 17;
    }
    if (nextYear == 1804) {
        civ["USA"].state = 3;
        civ["CSA"].state = 1;
        civ["SPAc"].state = 11;
        civ["RAJ"].state = 3;
        civ["AUS"].state = 9;
  
        civ["SUR"].state = 3;
        civ["FGU"].state = 3;
        civ["FRAk"].state = 1;
        civ["FRAk"].name = "";
  
        /*if (RNG("Fredonia",year) <= impossible && civ["USA"].name == "United States of America") {
          civ["USA"].name = "Fredonia";
          civ["USA"].y -= 15;
          civ["USA"].size += 5;
        }*/
    }
    if (nextYear == 1805) {
        /*if (c.usa_exists) {
          if (RNG("Burr_Plot",year) <= superUnlikely) {
            c.burr_plot = true;
            c.manifest_destiny = false;
            civ["QUE"].strength = 112;
            civ["QUE"].name = "Kingdom of Burr";
            civ["QUE"].x -= 45;
          }
        }*/
    }
    if (nextYear == 1806) {
        civ["HRE"].name = "Confed. of Rhine";
        civ["SOK"].strength = 98;
        civ["NIG"].y += 10;
  
        //if (c.napoleonic_wars) {
          civ["FRA"].state = 6;
        //}
    }
    if (nextYear == 1807) {
        //if (c.napoleonic_wars) {
          civ["FRA"].state = 7;
          civ["GER"].state = 4;
        //}
  
        civ["EGY"].state = 1;
        civ["EGY"].name = "Muhammad Ali";
        civ["EGY"].strength = 33;
        civ["EGY"].x -= 40;
        
        // Latin American Countries
        civ["VEZ"].state = 1;
    }
    if (nextYear == 1811) {
        civ["NEP"].state = 4;
        civ["RUSc"].state = 2;
    }
    if (nextYear == 1812) {
        civ["SWE"].state = 6;
        //if (c.napoleonic_wars) {
        civ["FRA"].state = 8;
        //}
    }
    if (nextYear == 1813) {
        //if (c.napoleonic_wars) {
        civ["FRA"].state = 7;
        //}
    }
    if (nextYear == 1814) {
        //if (c.napoleonic_wars) {
          civ["FRA"].state = 5;
        //}
        /*if (RNG("War_of_1812",year) <= veryUnlikely || civ["SWEc"].strength > 0) {
          civ["DUTc"].strength = 300;
          civ["DUTc"].name = "New England";
          civ["DUTc"].state = "a";
          civ["DUTc"].y -= 20;
        }*/
    }
    if (nextYear == 1815) {
        /*if (RNG("Napoleonic_Wars",year) <= unlikely) {
          c.french_victory = true;
        } else {*/
          // End of Napoleonic Wars
          //c.napoleonic_wars = false;
          civ["HRE"].name = "Bavaria";
          civ["HRE"].size -= 2;
          civ["HRE"].x += 10;
          civ["HRE"].y += 10;
          civ["HRE"].state = 5;
          civ["GER"].state = 6;
          civ["DUT"].state = 2;
          civ["DUT"].name = "Neth.";
          civ["DUT"].y += 5;
          civ["DUT"].x -= 8;
          civ["SWI"].name = "Switzerland";
          civ["SWE"].state = 5;
          civ["FRA"].state = 4;
        //}
    }
    if (nextYear == 1818) {
        //if (c.british_raj) {
          civ["RAJ"].state = 4;
          civ["CHO"].strength = 0;
          civ["IND"].strength = 0;
        /*} else {
          civ["IND"].state = 8;
          civ["AFG"].strength = 0;
        }*/
    }
    if (nextYear == 1821) {
        civ["SPAc"].state = 12;
        //if (c.manifest_destiny) {
          civ["USA"].state = 4;
        //}
        civ["OMA"].state = 3;
    }
    if (nextYear == 1822) {
        civ["AFG"].state = 4;
        civ["AFG"].name = "Afgans";
        civ["FAK"].strength = 3250;

        //if (!c.byzantium) {
          civ["GRE"].strength = 500;
          civ["GRE"].name = "Greece";
          civ["GRE"].state = 7;
          civ["GRE"].x = 1395;
          civ["GRE"].y = 346;
          civ["GRE"].size = 4;
        //}
    }
    if (nextYear == 1824) {
        //if (c.am_colonization) {
          civ["BOL"].strength = 3200;
        //}
        civ["LBR"].strength = 2250;
    }
    if (nextYear == 1825) {
        //if (RNG("Rome_Colonizes_America",year) > superUnlikely) {
          civ["SPAc"].state = 1;
          civ["SPAc"].name = "";
        //}
        civ["RUSc"].state = 3;
        //if (c.usa_exists) {
          civ["LBR"].strength = 2250;
        //}
        /*if (RNG("US_Imperialism",year) <= unlikely && c.usa_exists) {
          c.us_imperialism = true;
          civ["LBR"].name = "U.S. Africa";
        }*/
        civ["ISL"].name = "Najd";
        civ["ISL"].x += 30;
        civ["ISL"].y += 30;
    }
    if (nextYear == 1828) {
        civ["CAN"].state = 6;
        /*if (!c.manifest_destiny) {
          civ["CAN"].state = "a";
        }*/
        civ["MAD"].state = 2;
        /*if (RNG("Australia_Colonization",year) <= veryUnlikely) {
          civ["DUTz"].strength = 1000;
        }
        if (!c.usa_exists && c.am_colonization) {
          civ["USA"].strength = 300;
          civ["USA"].name = " ";
        }*/
    }
    if (nextYear == 1829) {
        /*if (c.us_imperialism) {
          civ["LBR"].state = "a";
        }*/
    }
    if (nextYear == 1830) {
        civ["ENGa"].state = 2;
        /*if (RNG("Australia_Colonization",year) <= superUnlikely) {
          civ["FRAz"].strength = 1000;
          civ["PORz"].strength = 0;
          civ["DUTz"].strength = 0;
        } else if (RNG("Australia_Colonization",year) <= veryUnlikely) {
          civ["FRAz"].strength = 1000;
        }*/
        civ["OTT"].state = 10;
        civ["BEL"].strength = 2250;
    }
    if (nextYear == 1831) {
        civ["EGY"].name = "Muhammad Ali ";
        civ["EGY"].state = 3;
    }
    if (nextYear == 1835) {
        civ["ENGs"].state = 2;
        //if (c.am_colonization) {
          civ["TEX"].strength = 13;
        //}
    }
    if (nextYear == 1836) {
        civ["TEX"].state = 2;
        /*if (!c.usa_exists || !c.manifest_destiny || c.pax_francia) {
          civ["TEX"].state = "a";
        }*/
    }
    if (nextYear == 1837) {
        //if (c.manifest_destiny) {
          civ["USA"].state = 5;
        //}
        if (civ["QUE"].name == "Kingdom of Burr") {
          civ["QUE"].name = "Republic of Burr";
        }
    }
    if (nextYear == 1839) {
        /*if (RNG("Texas_Independence",year) <= superUnlikely) {
          civ["TEX"].state = 3;
          civ["TEX"].strength = 399;
          if (!c.usa_exists) {
            civ["TEX"].state = "a";
          }
        }*/
    }
    if (nextYear == 1840) {
        civ["FRAx"].strength = 2250;
    }
    if (nextYear == 1841) {
        /*if (c.celtics) {
          civ["FRAx"].name = "Gallic Africa";
          civ["FRAs"].name = "Gallic Sudan";
        }*/
    }
    if (nextYear == 1842) {
        civ["ENGk"].state = 3;
    }
    if (nextYear == 1848) {
        //if (c.manifest_destiny) {
          if (civ["USA"].name == "United States of America") {
            civ["USA"].x = 400;
            civ["USA"].y -= 10;
            civ["USA"].size +=3;
          }
          /*if (RNG("Mexican_American_War",year) <= impossible) {
            c.big_mexico = true;
            civ["USA"].state = 8;
          } else if (RNG("Mexican_American_War",year) <= superUnlikely) {
            c.big_mexico = true;
            civ["USA"].state = 8;
            civ["TEX"].strength += 500;
          } else if (RNG("Mexican_American_War",year) <= unlikely) {
            civ["USA"].state = "c12";
          } else if (RNG("Mexican_American_War",year) <= possible) {
            civ["USA"].state = "c11";
          } else {
            civ["USA"].state = 6;
          }*/
        //}
    }
    if (nextYear == 1849) {
        /*if (RNG("Oregon_Territory",year) <= unlikely && c.usa_exists) {
          civ["USAo"].strength = 1000;
        }*/
    }
    if (nextYear == 1854) {
        //if (RNG("Mexican_American_War",year) > possible && c.manifest_destiny) {
          civ["USA"].state = 7;
        //}
        civ["DUTs"].state = 2;
        civ["DUTs"].name = "SAR";
        civ["DUTs"].x = 1440;
        civ["DUTs"].y = 765;
        civ["YEM"].state = 3;
    }
    if (nextYear == 1859) {
        civ["RAJ"].name = "British Raj";
        civ["RAJ"].state = 5;
        civ["RAJ"].x += 30;
        civ["ITA"].state = 6;
        civ["GEN"].strength = 0;
        civ["VEN"].strength = 0;
        civ["NAP"].strength = 0;
    }
    if (nextYear == 1860) {
        /*if (c.usa_exists && civ["DUTc"].strength <= 0) {
          eventLog.push("1861: American Civil War");*/
          civ["CSA"].strength = 5;
        //}
        civ["FRAi"].strength = 93;
        civ["ITA"].name = "Italy";
        civ["ITA"].x = 1330;
        civ["ITA"].y = 320;
        civ["ITA"].size = 7;
        civ["MAL"].name = "Toucouleur";
    }
    if (nextYear == 1861) {
        civ["VIE"].strength = 0;
        civ["CAM"].strength = 0;
        /*if (c.celtics) {
          civ["FRAi"].name = "Gallic Indochina";
        }*/
    }
    if (nextYear == 1863) {
        //if (c.usa_exists) {
          civ["CSA"].state = 2;
        //}
        civ["DUTi"].state = 3;
        civ["SVJ"].strength = 0;
    }
    if (nextYear == 1861) {
        // civ["VIE"].strength = 0;
    }
    if (nextYear == 1864) {
        /*if (RNG("American_Civil_War",year) <= unlikely && c.usa_exists) {
          eventLog.push("*1864: Confederates win civil war");
          c.csa_victory = true;
          civ["CSA"].strength += 500;
          civ["CSA"].state = 3;
        }*/
    }
    if (nextYear == 1867) {
        /*if (RNG("Alaskan_Purchase",year) <= impossible) {
          civ["RUSc"].name = "Liechtensteinian Alaska";
          civ["RUSc"].x = 300;
          civ["RUSc"].y = 163;
          civ["RUSc"].size = 9;
          civ["RUSc"].strength += 300;
        } else if (RNG("Alaskan_Purchase",year) <= unlikely) {
          civ["RUSc"].strength += 300;
        } else if (c.usa_exists && c.manifest_destiny) {*/
          civ["USAc"].strength = 555;
          civ["RUSc"].strength = 0;
        //}
        civ["CAN"].state = 7;
        /*if (!c.usa_exists || c.pax_francia) {
          civ["RUSc"].state = "a";
          civ["CAN"].state = "a";
        }
        if (!c.manifest_destiny) {
          civ["CAN"].state = "a";
        }*/
  
        civ["GER"].state = 7;
        civ["GER"].name = "N. German Confed."
        civ["GER"].x -= 30;
        civ["GER"].y += 5;
        civ["GER"].size += 2;
        civ["AUS"].name = "Austria-Hungary";
        civ["AUS"].state = 10;
  
        /*if (RNG("CSA_Expansion",year) <= likely) {
          civ["CSA"].state = 4;
        }*/
  
        civ["EGY"].strength = 400;
        civ["EGY"].name = "Egyptian Khedivate";
        civ["DAR"].strength = 0;
    }
    if (nextYear == 1870) {
        //if (RNG("Mexican_American_War",year) > possible && c.manifest_destiny) {
          civ["USA"].state = 8;
        //}
    
        civ["CAN"].name = "Canada";
        civ["CAN"].color = [243, 40, 68];
        /*if (c.pax_francia) {
          civ["CAN"].name = "Quebec";
        }*/
        civ["CAN"].x -= 30;
        civ["CAN"].y -= 20;
        civ["CAN"].size += 8;
        civ["FRAa"].state = 2;
    }
    if (nextYear == 1871) {
        /*if (RNG("German_Unification") <= superUnlikely || c.french_victory || c.pax_francia) {
          c.unified_germany = false;
        } else {*/
          civ["GER"].name = "Germany";
          civ["GER"].state = 8;
          civ["HRE"].strength = 0;
        //}
        civ["PAP"].strength = 0;
    }
    if (nextYear == 1875) {
        civ["EGY"].state = 5;
    }
    if (nextYear == 1877) {
        civ["ROA"].strength = 1000;
        civ["ROA"].state = 2;
        civ["ROA"].name = "Romania";
        //c.ottoman_romania = false;
        civ["SER"].strength = 1000;
        civ["SER"].state = 3;
  
        //if (!c.byzantium) {
          civ["BUL"].strength = 1000;
          civ["BUL"].state = 10;
        //}
  
        /*if (RNG("CSA_Expansion",year) <= possible) {
          civ["CSA"].state = 5;
          civ["HAI"].name = "";
        }*/
    }
    if (nextYear == 1880) {
        civ["DENc"].state = 3;
        civ["AFG"].state = 5;
        civ["AFG"].name = "Afganistan";
        civ["RAJ"].state = 6;
        civ["PER"].state = 6;
        civ["GRE"].state = 8;
  
        /*if (RNG("CSA_Expansion",year) <= unlikely && civ["CSA"].strength > 5) {
          c.csa_cen = true;
          civ["CEN"].state = 1;
          civ["CEN"].name = "";
        }*/
  
        if (civ["AFG"].strength <= 0) {
            civ["AFG"].strength = 300;
            civ["AFG"].state = 2;
        }
    }
    if (nextYear == 1882) {
        civ["EGY"].name = "Egypt ( UK )";
        civ["EGY"].size += 3;
    }
    if (nextYear == 1885) {
        civ["ENGa"].state = 3;
        civ["GERc"].strength = 30;
        //if (c.af_colonization) {
          civ["KON"].state = 2;
          civ["KON"].name = "Belgian Congo";
        //}
        civ["KON"].y -= 30;
        civ["KON"].x += 30;
        civ["BEL"].state = 2;
  
        //if (c.british_raj) {
          civ["MLY"].name = "British Malaysia";
          civ["BUR"].strength = 0;
        //}
  
        // Scramble for Africa
    }
    if (nextYear == 1890) {
        civ["MLY"].state = 2;
  
        //if (c.af_colonization) {
          civ["GERx"].strength = 30;
          civ["SPAx"].strength = 300;
          civ["ITAx"].strength = 300;
          civ["DUTi"].state = 4;
          civ["PORa"].state = 3;
  
        /*  if (RNG("Portuguese_Africa",year) <= unlikely) {
            civ["PORa"].state = "b";
          } else if (RNG("Portuguese_Africa",year) <= possible) {
            civ["PORa"].state = "a";
          }
        }*/
        civ["PHI"].state = 3;
  
        civ["SOM"].strength = 0;
    }
    if (nextYear == 1898) {
        civ["USAc"].state = 2;
        civ["ABY"].state = 5;
        civ["ABY"].name = "Abyssina";
        civ["ABY"].y += 30;
        civ["ABY"].size += 4;

        // Spanish-American War
        if (civ["PHI"].name == "Philippines ( SP )") {
          civ["PHI"].name = "Philippines ( US )";
          civ["HAW"].strength = 0;
        }
        civ["SPAc"].color = [20, 134, 240];

        civ["THA"].state = 4;
        civ["THA"].name = "Siam";
  
        //if (c.af_colonization) {
          civ["ENGx"].strength = 300;
          civ["ENGs"].state = 3;
  
          /*// Hala'ib Triangle
          if (RNG("Hala'ib_Triangle",year) <= possible) {
            civ["EGY"].state = 6;
          } else {*/
            civ["EGY"].state = 7;
          //}
          civ["BUN"].strength = 0;
          civ["KIL"].strength = 0;
          civ["DAR"].strength = 0;
        //}
    }
    if (nextYear == 1899) {
        //if (c.af_colonization) {
          civ["ENGn"].strength = 300;
          /*if (RNG("Spanish_Africa",year) <= unlikely) {
            civ["SPAx"].state = "a";
          }*/
        //}
    }

    // 1900s
    if (nextYear == 1900) {
        civ["RUS"].state = 10;
        civ["GEO"].strength = 0;
        civ["ARM"].strength = 0;
  
        civ["ENGa"].name = "Commonwealth of Australia";
        civ["ENGa"].x -= 220;
        civ["ENGa"].size += 3;
  
        //if (c.af_colonization) {
          civ["FRAx"].state = 2;
        /*  if (RNG("French_Africa",year) <= impossible || c.french_victory || c.pax_francia) {
            civ["FRAs"].strength = 61;
            civ["FRAs"].state = 2;
            civ["KON"].strength = 0;
            civ["ABY"].strength = 0;
          } else if (RNG("French_Africa",year) <= veryUnlikely) {
            civ["FRAs"].strength = 61;
          }*/
  
        if (civ["OTT"].strength <= 0) {
            civ["ITAx"].state = 2;
        }
        civ["MAL"].strength = 0;
        civ["SON"].strength = 0;
        civ["JOL"].strength = 0;
        civ["CHA"].strength = 0;
        civ["NIG"].strength = 0;
        civ["MAD"].strength = 0;
        //}
    }
    if (nextYear == 1901) {
        /*if (RNG("Boxer's_Rebellion",year) <= unlikely) {
            civ["QIN"].state = 5;
            civ["QIN"].name = "Chinese Warring States";
        }*/
    }
    if (nextYear == 1902) {
        civ["DUTs"].strength = 0;
  
        /*if (RNG("Boxer's_Rebellion",year) <= unlikely) {
          civ["QIN"].state = "a";
          civ["QIN"].name = "China";
          civ["QIN"].x += 72;
          civ["QIN"].y -= 8;
          civ["QIN"].size -= 3;
          civ["KOR"].strength = 0;
          civ["JAPc"].strength = 44;
        }*/
    }
    if (nextYear == 1905) {
        civ["SWE"].state = 6;
        civ["NOR"].name = "Norway";
        civ["NOR"].state = 3;
    }
    if (nextYear == 1906) {
        civ["RUS"].state = 11;
  
        /*if (RNG("CSA_Expansion",year) <= superUnlikely && c.usa_exists) {
          eventLog.push("*1906: The Confederate States of America forms The Confederacy of the Golden Circle");
          civ["CSA"].state = 6;
          civ["CSA"].name = "Confederacy of the Golden Circle";
          civ["CSA"].y += 40;
          civ["CSA"].size += 2;
          civ["MEX"].name = "Mexico (CSA)";
          civ["MEX"].size -= 4;
          civ["MEX"].y += 20;
        }*/
    }
    if (nextYear == 1912) {
        //if (c.af_colonization) {
          civ["OTT"].state = 11;
          civ["OTT"].x += 30;
          civ["MOR"].strength = 0;
          civ["ITAx"].state = 2;
          /*if (RNG("Italian_Africa",year) <= unlikely) {
            civ["ITAx"].state = "a";
          }*/
        //}
        //if (RNG("Boxer's_Rebellion",year) > unlikely) {
          civ["TIB"].name = "Tibet";
          civ["TIB"].strength = 300;
          civ["TIB"].state = 4;
          civ["TIB"].y += 15;
  
          civ["MON"].strength = 300;
          civ["MON"].state = 13;
          civ["MON"].name = "Mongolia";
          civ["MON"].x = 1840;
          civ["MON"].y = 280;
          civ["MON"].size += 2;
          civ["SPA"].state = 8;
        //}
  
        civ["SER"].state = 4;
        civ["BUL"].state = 7;
        civ["QIN"].name = "Republic of China";
        civ["QIN"].x -= 40;
        civ["GRE"].state = 9;
    }
    if (nextYear == 1913) {
        //if (!c.byzantium) {
          civ["ALB"].strength = 696;
        //}
    }
    if (nextYear == 1914) {
        /*if (RNG("Big_Albania",year) <= unlikely) {
          civ["ALB"].state = 2;
          c.big_albania = true;
        }*/
    }
    if (nextYear == 1915) {
        //if (c.unified_germany) {
        civ["GER"].state = 9;
        //}
    }
    if (nextYear == 1916) {
        //if (RNG("Boxer's_Rebellion",year) > unlikely) {
          civ["QIN"].state = 5;
        //}
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
        /*  c.soviet_union = true;
        } else {
          c.soviet_union = false;
        }*/
    }
    if (nextYear == 1918) {
        civ["SER"].state = 5;
        civ["ROA"].state = 3;
        civ["SER"].name = "Yugoslavia";
  
        // Sykes-Picot Agreement
    }
    if (nextYear == 1919) {
        civ["FIN"].strength = 2250;;
        civ["SIB"].state = 2;
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
        //if (!c.byzantium) {
          civ["SYR"].strength = 400;
          civ["ENGb"].strength = 500;
        //}
  
        /*if (c.unified_germany) {
          c.ww2 = false;
        if (RNG("WWI_Aftermath",year) <= unlikely) {
          // Kaiserreich
          c.kaiserreich = true;
          c.ww2 = false;
  
          civ["GERc"].strength += 500;
          if (c.af_colonization) {
            civ["GERx"].strength += 500;
          }
          civ["GERx"].state = "a";
          civ["GERx"].x = 1330;
          civ["GERx"].y = 610;
          civ["GERx"].name = "MittelAfrika";
          civ["LIB"].name = "Tripolitania";
          civ["LIB"].x -= 20;
          civ["ITA"].state = 5;
  
          civ["GER"].state = "a";
          civ["KON"].strength = 0;
          civ["FRAi"].name = "German Indochina";
          civ["MLY"].name = "German Malay";
  
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
  
        } else if (RNG("WWI_Aftermath",year) <= Default) {
  
          // Normal WWI
          c.ww2 = true;*/
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
  
          civ["CZE"].strength = 400;
          civ["CZE"].name = "Czechoslovakia";
          civ["CZE"].state = 3;
  
          /*if (RNG("Fall_of_Austrian_Empire",year) <= unlikely) {
            civ["AUS"].strength += 100;
          } else {*/
            civ["AUS"].state = 11;
            civ["AUS"].name = "Austria";
          //}
          civ["HUN"].strength = 800;
          civ["ITA"].state = 8;
  
          civ["POL"].strength = 500;
          civ["POL"].state = 8;
          civ["GER"].state = 10;
  
          /*if (RNG("WWI_Aftermath",year) <= possible) {
            civ["GER"].state = "b";
            c.ww2 = false;
          }  */ 
    }

    if (nextYear == 1920) {
        civ["ANT"].strength = 2250;
        civ["ISL"].state = 9;
        civ["OTT"].y -= 15;
        civ["YEM"].state = 4;
        civ["OMA"].state = 4;
  
        civ["SIB"].state = 3;
        civ["SIB"].x = 1800;
        civ["SIB"].y = 260;
        civ["SIB"].size = 4;
        civ["SIB"].name = "Tannu Tuva";
        civ["LIV"].strength = 20;
        civ["LIT"].strength = 20;
        civ["LIT"].state = 5;
  
        /*if (c.byzantium) {
          civ["OTT"].strength = 200;
          civ["OTT"].state = 12;
          civ["OTT"].name = "Kurdistan";
          civ["OTT"].x = 1520;
          civ["OTT"].y = 337;
          civ["OTT"].size = 4;
        }*/
  
        /*if (RNG("Mongolian_Expansion",year) <= unlikely) {
          civ["MON"].state = "a";
        } else if (RNG("Mongolian_Expansion",year) <= Default) {
          civ["MON"].strength += 10;
        }*/
        
        // Fate of Austria
        /*if (civ["AUS"].state != 11) {
          if (RNG("Austria's_Fate",year) <= unlikely) {
            civ["AUS"].name = "Triple Monarchy";
            civ["AUS"].state = "b";
          } else if (RNG("Austria's_Fate",year) <= likely) {
            civ["AUS"].state = "a";
            civ["AUS"].name = "United States of Austria";
          }
        }*/
    }
    if (nextYear == 1921) {
        civ["GRE"].state = 11;
    }
    if (nextYear == 1922) {
        //if (RNG("Russian_Revolution",year) > unlikely) {
          civ["RUS"].name = "Soviet Union";
          civ["RUS"].size += 4;
          civ["RUS"].y += 10;
        //}
        /*if (c.kaiserreich) {
          civ["FRA"].name = "French Commune";
          civ["FRAx"].name = "French Republic";
        }*/
  
        //if (!c.kaiserreich && !c.byzantium) {
          civ["OTT"].state = 12;
          civ["OTT"].name = "Turkey";
          civ["OTT"].x += 45;
          civ["OTT"].y += 12;
        //}
  
        civ["ENG"].state = 12;
        civ["IRE"].name = "Ireland";
        civ["IRE"].state = 2;
        civ["IRE"].x = 1190;
        civ["IRE"].y = 230;
        civ["IRE"].size = 5;
    }
    if (nextYear == 1923) {
        /*if (RNG("Ottoman's_Fate",year) <= veryUnlikely && !c.kaiserreich) {
          civ["GRE"].state = "a";
        } else if (RNG("Ottoman's_Fate",year) <= unlikely && !c.kaiserreich) {
          civ["GRE"].strength += 10;
        } else {*/
          civ["GRE"].state = 10;
        //}
    }
    if (nextYear == 1926) {
        /*// Post WW1 - UK Revolution?
        if (c.kaiserreich) {
          if (RNG("British_Revolution",year) <= unlikely) {
            civ["ENG"].name = "Union of Britain";
          } else if (RNG("British_Revolution",year) <= Default) {
            civ["ENG"].strength += 100;
          }
        }*/
  
        civ["PER"].name = "Iran";
        civ["PER"].size += 3;
        civ["PER"].x += 50;
    }
    if (nextYear == 1928) {
        /*if (RNG("Arabia's_Fate",year) <= unlikely) {
          civ["OMA"].strength = 0;
        } else {*/
          civ["ISL"].name = "Hejaz and Najd";
        //}
    }
    if (nextYear == 1932) {
        civ["THA"].name = "Thailand";
        /*if (RNG("Arabia's_Fate",year) <= unlikely) {
          civ["YEM"].strength = 0;
        } else {*/
          civ["ISL"].name = "Saudi Arabia";
        //}
        
        //if (!c.kaiserreich && !c.byzantium && RNG("Arabia's_Fate",year) > unlikely) {
          civ["MES"].strength = 300;
          civ["MES"].name = "Iraq";
          civ["MES"].state = 4;
          civ["MES"].x += 40;
          civ["MES"].y += 15;
          civ["MES"].size += 2;
        //}
    }
    if (nextYear == 1933) {
        //if (c.ww2) {
          civ["GER"].name = "German Reich";
        //}
        if (civ["ISL"].name == "Najd") {
            civ["ISL"].name = "Arabia";
            civ["ISL"].size += 4;
        }
    }
    if (nextYear == 1935) {
        if (civ["PAR"].state != 3) {
            civ["BOL"].state = 2;
        }
    }
    if (nextYear == 1936) {
        civ["ABY"].name = "Italian East Africa";
    }
    if (nextYear == 1939) {
        //if (c.ww2) {
          civ["POL"].strength = 0;
          civ["CZE"].strength = 0;
          civ["GER"].state = 11;
          civ["ITA"].state = 9;
        //}
    }
    if (nextYear == 1940) {
        //if (c.ww2) {
          civ["FIN"].state = 2;
          civ["GER"].state = 13;
          civ["ROA"].state = 4;
        //}
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
        civ["FRAi"].strength = 0;
        //c.occupied_iran = true;
        civ["PER"].name = "Iran ";
        //if (c.ww2) {
          civ["GER"].state = 14;
          civ["ITA"].state = 10;
          civ["BUL"].state = 9;
        //}
    }
    if (nextYear == 1942) {
        //if (RNG("WWII",year) >= superUnlikely) {
          civ["ABY"].state = 6;
          civ["ABY"].name = "Ethiopia";
        //}
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
            civ["GER"].name = "Germany";
            civ["CZE"].state = 4;
            civ["CZE"].strength = 500;
            civ["POL"].strength = 500;
            civ["POL"].state = 9;
            civ["GER"].state = 15;
            civ["ITA"].state = 8;
            civ["ROA"].state = 5;
            civ["BUL"].state = 10;
  
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
        //if (RNG("US_Imperialism",year) >= unlikely) {
          civ["PHI"].name = "Philippines";
        //}
        civ["SYR"].state = 2;
        civ["SYR"].name = "Syria";
        civ["SYR"].x += 30;
        civ["FRAi"].strength = 9;
  
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
        civ["ZEA"].strength = 2250;
        //if (c.british_raj) {
          civ["RAJ"].name = "India";
          civ["RAJ"].x += 35;
          civ["RAJ"].y -= 15;
          civ["RAJ"].size += 5;
          civ["PAK"].strength = 300;
        //}
        //if (!c.new_china) {
          civ["DUTi"].name = "Indonesia";
          civ["DUTi"].size += 4;
          civ["DUTi"].x += 20;
        //}
        civ["ITA"].state = 7;
        civ["PER"].name = "Iran";
        /*if (RNG("Occupation_of_Iran",year) >= possible || c.fuhrerreich) {
          c.occupied_iran = false;
        }
        // Chinese Communist Revolution
        c.isChineseCivilWar = true;*/
        //if (RNG("Boxer's_Rebellion",year) > unlikely) {
          civ["QIN"].state = 1;
        //}
        civ["CHI"].strength = 1000;
        civ["CHI"].state = 7;
        civ["CHI"].name = "China";
        civ["CHI"].size += 6;
        civ["CHI"].y -= 70;
    }
    if (nextYear == 1948) {
        /*if (c.fuhrerreich) {
          civ["PAK"].state = "a";
          civ["PAK"].name = "Bengal";
          civ["PAK"].x = 1840;
          civ["PAK"].y = 440;
          civ["PAK"].size -= 3;
        }*/
        civ["BUR"].name = "Burma";
        civ["BUR"].strength = 560;
  
        //if (c.israel) {
          civ["ISR"].strength = 2000;
          civ["ISR"].state = 7;
        //}
        civ["QIN"].state = 2;
    }
    if (nextYear == 1949) {
        // Chinese Communist Revolution
        //c.isChineseCivilWar = false;
        civ["QIN"].state = 4;
        civ["CHI"].x -= 100;
        civ["CHI"].y += 50;
        civ["CHI"].size +=4;
        civ["CHI"].color = [217, 18, 18];
        civ["CHI"].communist = true;
  
        /*if (c.fuhrerreich) {
          c.communist_china = false;
        } else if (RNG("Chinese_Communist_Revolution",year) <= unlikely) {
          civ["QIN"].state = 4;
          civ["CHI"].strength = 0;
          c.communist_china = false;
        } else if (RNG("Chinese_Communist_Revolution",year) <= possible) {
          civ["QIN"].strength = 0;
          civ["CHI"].strength = 3000;
          civ["CHI"].state = "a";
        } else {*/
          civ["CHI"].strength = 3000;
          civ["QIN"].x += 280;
          civ["QIN"].y += 100;
          civ["QIN"].size = 4;
          civ["QIN"].name = "Taiwan";
          /*if (c.new_china) {
            civ["QIN"].name = "";
          }
        }*/
        civ["ENGb"].state = 2;
        civ["ENGb"].name = "U.A.E.";
        civ["ENGb"].y += 45;
        civ["ENGb"].x += 150;
        civ["ENGb"].size -= 2;
        //if (!c.pax_francia) {
          civ["ENGk"].state = 2;
        //}
    }
    if (civ["CHI"].communist) {
        civ["CHI"].color = [217, 18, 18];
    }
    if (nextYear == 1950) {
        /*if (RNG("Tibet",year) <= possible || RNG("Chinese_Communist_Revolution",year) <= possible) {
          civ["TIB"].strength ++;
        } else {*/
          civ["TIB"].strength = 0;
        //}
    }
    if (nextYear == 1951) {
        civ["LIB"].strength = 100;
    }
    if (nextYear == 1952) {
        civ["LIB"].state = 2;
    }
    if (nextYear == 1953) {
        civ["EGY"].name = "Egypt";
        civ["EGY"].x += 40;
    }
    if (nextYear == 1954) {
        /*if (c.fuhrerreich && RNG("Lake_Congo_Project",year) <= superUnlikely) {
          eventLog.push("*1954: The damming of the Congo River is complete...");
          civ["lakes"].state = "a";
        }*/
        civ["CAM"].strength = 200;
    }
    if (nextYear == 1955) {
        // Vietnam War
        civ["VIE"].strength = 200;
        civ["VIE"].name = "N. Vietnam";
        civ["CHM"].strength = 20;
        civ["CHM"].name = "S. Vietnam";
        civ["CHM"].state = 2;
        civ["CHM"].y += 45;
    }
    if (nextYear == 1956) {
        //if (c.af_colonization) {
          civ["MOR"].state = 3;
          civ["MOR"].strength = 560;
        /*} else {
          civ["MOR"].state = "b";
          civ["MOR"].name = "Greater Morocco";
        }*/
        civ["SPA"].state = 9;
    }
    if (nextYear == 1957) {
        civ["MLY"].name = "Malaysia";
        civ["MLY"].size += 3;
        civ["MLY"].x += 20;
    }
    if (nextYear == 1960) {
        // Decolonization
        //if (c.af_colonization) {
          //if (!c.fuhrerreich) {
            civ["KON"].state = 3;
            civ["KON"].name = "Zaire";
            civ["KON"].x += 40;
            civ["KON"].size += 5;
  
            civ["SOM"].strength = 150;
            civ["SOM"].name = "Somalia";
            civ["SOM"].state = 3;
  
            civ["ITAx"].state = 3;
            civ["ITAx"].name = "Eritrea";
            civ["ITAx"].x = 1520;
            civ["ITAx"].y = 500;
            civ["ITAx"].size = 5;
          //}
  
          civ["MAD"].strength = 150;
          civ["MAD"].name = "Madagascar";
          civ["MAD"].state = 3;
          civ["MAD"].x -= 15;
          civ["MAD"].y += 25;
  
          /*if (RNG("Jewish_Homeland",year) <= impossible && civ["ISR"].state == "a") {
            civ["ISR"].state = "b";
            civ["MAD"].name = "";
            civ["ISR"].name = "Jewish Madagascar";
            civ["ISR"].y -= 20;
            civ["ISR"].size += 2;
          }
  
          if (RNG("Decolonization",year) >= veryUnlikely && c.usa_exists) {
            civ["FRAx"].state = 3;
            civ["FRAx"].name = "Tunisia";
            civ["FRAx"].x += 50;
          } else if (civ["FRAs"].strength > 0) {
            civ["FRAs"].strength = 200;
          }*/
          civ["FRAx"].state = 3;
          civ["FRAx"].name = "Tunisia";
          civ["FRAx"].x += 50;
        
          civ["ENGs"].state = 4;
  
          if (civ["LIB"].strength <= 0) {
            civ["LIB"].strength = 200;
            civ["LIB"].name = "Tripolitania";
            civ["LIB"].state = 2;
            civ["LIB"].x -= 40;
            //c.tripolitania = true;
          }
        //}
    }
    if (nextYear == 1961) {
        // Cuban Missile Crisis
    }
    if (nextYear == 1962) {
        // British Colonization
        //if (c.af_colonization) {
          //if (RNG("Decolonization",year) >= unlikely && c.usa_exists) {
          civ["ENGx"].state = 2;
          civ["ENGx"].name = "Kenya";
          civ["ENGx"].x = 1510;
          civ["ENGx"].y = 645;
          civ["ENGx"].size = 6;
  
          civ["KSH"].strength = 150;
          civ["KSH"].name = "Sudan";
          civ["KSH"].state = 3;
          civ["KSH"].x += 25;
          civ["KSH"].y += 50;
          civ["KSH"].size += 4;
          //}
  
          //if (RNG("Decolonization",year) >= possible) {
            civ["ENGn"].strength = 0;
            civ["NIG"].strength = 500;
            civ["NIG"].name = "Nigeria";
            civ["NIG"].x += 50;
            civ["NIG"].y -= 20;
            civ["NIG"].size += 3;
            civ["NIG"].state = 2;
          //}}
  
        /*// Cuban Missile Crisis
        if (RNG("Nuclear_Armageddon",year) <= superUnlikely) {
          eventLog.push("Nuclear Armageddon...");
          civ["nuclear"].strength += 3000;
          civ["nuclear"].state = 2;
          civ["USA"].strength = 0;
          civ["RUS"].strength = 0;
          civ["CHI"].strength = 0;
          civ["ENG"].strength = 0;
          civ["FRA"].strength = 0;
          civ["GER"].strength = 0;
          civ["BUL"].strength = 0;
          civ["ROA"].strength = 0;
          civ["GRE"].strength = 0;
          civ["ITA"].strength = 0;
          civ["DUT"].strength = 0;
          civ["BEL"].strength = 0;
          civ["SPA"].strength = 0;
          civ["POR"].strength = 0;
          civ["RUS"].strength = 0;
          civ["CHI"].strength = 0;
          civ["ROM"].strength = 0;
          civ["GEO"].strength = 0;
          civ["MON"].strength = 0;
          civ["JAP"].strength = 0;
          civ["KOR"].strength = 0;
          civ["DRK"].strength = 0;
  
          civ["IRE"].strength = 0;
          civ["DEN"].strength = 0;
          civ["NOR"].strength = 0;
          civ["SWE"].strength = 0;
          civ["FIN"].strength = 0;
          civ["SWI"].strength = 0;
          civ["AUS"].strength = 0;
          civ["HUN"].strength = 0;
          civ["SER"].strength = 0;
          civ["OTT"].strength = 0;
          civ["SYR"].strength = 0;
          
          civ["LIV"].strength = 0;
          civ["LIT"].strength = 0;
          civ["POL"].strength = 0;
          civ["ALB"].strength = 0;
          civ["CZE"].strength = 0;
          civ["ANT"].strength = 0;
        } else if (RNG("Nuclear_Armageddon",year) <= veryUnlikely) {
          eventLog.push("The Cold War goes hot...");
          civ["nuclear"].strength += 3000;
        }*/
        civ["ALG"].strength = 200;
        civ["ALG"].name = "Algeria";
        civ["ALG"].x = 1230;
        civ["ALG"].y = 410;
        civ["ALG"].size = 9;
    }
    if (nextYear == 1965) {
        /*if (RNG("Africa's_Fate",year) <= unlikely || !c.af_colonization) {
          civ["AFR"].strength = 1000;
        }*/
    }
    if (nextYear == 1966) {
        //if (!c.fuhrerreich && !c.byzantium) {
          civ["LIB"].strength = 400;
          civ["LIB"].state = 2;
          civ["LIB"].x -= 10;
          civ["LIB"].y += 15;
          civ["LIB"].size += 4;
        //}
        civ["GUY"].name = "Guyana";
  
        /*// European Union Unites?
        if (RNG("European_Federation",year) <= veryUnlikely) {
          if (!c.kaiserreich) {
            civ["EU"].strength += 1000;
            civ["FRA"].name = "";
            civ["ITA"].name = "";
            civ["DUT"].name = "";
            civ["GER"].name = "E. Germany";
            eventLog.push("*1966: The European Federation is formed");
          }
        }*/
    }
    if (nextYear == 1967) {
        // East African Community formed
        /*if (RNG("East_African_Federation",year) <= veryUnlikely) {
          if (!c.kaiserreich) {
            civ["EAF"].strength += 1000;
            civ["ENGx"].name = "";
            eventLog.push("*1967: The East African Federation is formed");
          }
        }*/
    }
    if (nextYear == 1968) {
        civ["SPAx"].name = "Western Sahara";
        if (civ["SPAx"].state == "a") {
            civ["SPAx"].state = "b";
        } else {
            civ["SPAx"].state = 2;
        }
  
        /*if (RNG("American_Expansion",year) <= veryUnlikely && c.usa_exists) {
          eventLog.push("*1968: The United States annexes Canada");
          c.big_usa = true;
          civ["USA"].state = "c";
          civ["CAN"].strength = 0;
          civ["USAc"].strength = 0;
           civ["USAo"].strength = 0;
        }*/
    }
    if (nextYear == 1969) {
        // Sino-Soviet Split
        /*if (RNG("Neo_Chinese_Empire",year) <= superUnlikely && civ["CHI"].strength > 0) {
          c.big_china = true;
          civ["CHI"].state = "c";
          civ["CHI"].name = "Chinese Empire";
          civ["CHI"].x -= 70;
        } else if (RNG("Neo_Chinese_Empire",year) <= superUnlikely && civ["CHI"].strength > 0) {
          c.big_china = true;
          civ["CHI"].state = "b";
          civ["CHI"].name = "Chinese Empire";
          civ["CHI"].x -= 70;
        }*/
    }
    if (nextYear == 1971) {
        //if (!c.fuhrerreich) {
          civ["PAK"].state = 2;
        //}
        /*if (c.big_china) {
          civ["MON"].strength = 0;
          civ["QIN"].strength = 0;
        }*/
    }
    if (nextYear == 1975) {
        // Vietnam War Over
        civ["VIE"].name = "Vietnam";
        /*if (RNG("Vietnam_War",year) <= uncommon) {
          c.south_vietnam = true;
        }*/
  
        civ["SUR"].name = "Suriname";
        if (civ["PORa"].state == "b") {
            civ["PORa"].state = "c";
        } else {
            civ["PORa"].state = 4;
        }
        civ["PORa"].x -= 30;
        civ["PORa"].name = "Angola Zambia Mozambique";
  
        /*if (RNG("Morocco_Expansion",year) <= superUnlikely) {
          civ["MOR"].state = "b";
          civ["MOR"].name = "Greater Morocco";
          civ["SPAx"].name = "";
        } else if (RNG("Morocco_Expansion",year) <= possible) {
          civ["MOR"].state = "a";
          civ["SPAx"].name = "";
        } else if (RNG("Morocco_Expansion",year) <= likely) {
          civ["MOR"].strength += 1;
        } else {*/
          civ["MOR"].state = 4;
        //}
    }
    if (nextYear == 1977) {
        // Invasion of Western Sahara
        if (civ["MOR"].state == 4) {
            civ["MOR"].state = 3;
        }
    }
    if (nextYear == 1979) {
        civ["DENc"].name = "Greenland";
        civ["DENc"].x -= 30;
        civ["DENc"].y -= 75;
        civ["DENc"].size += 5;
    }
    if (nextYear == 1975) {
        civ["PNG"].strength = 2250;
    }
    if (nextYear == 1982) {
        /*if (RNG("Falklands_War",year) <= veryUnlikely || c.kaiserreich || c.fuhrerreich) {
          civ["FAK"].name = "";
        }
        if (c.new_china) {
          civ["PNG"].name = "Guinea";
        }*/
    }
    if (nextYear == 1986) {
        civ["AUZ"].strength = 2250;
        civ["ENGa"].name = "";
    }
    if (nextYear == 1989) {
        civ["BUR"].name = "Myanmar";
    }
    if (nextYear == 1990) {
        civ["ENGs"].state = 5;
        //if (c.ww2 && !c.fuhrerreich) {
          civ["GER"].state = 16;
        //}
        civ["EU"].state = 2;
        if (civ["EU"].strength > 0) {
            civ["GER"].name = " ";
        }
    }
    if (nextYear == 1991) {
        /*if (c.usa_exists) {
        if (RNG("Cold_War_Winner",year) <= impossible) {
          // USA loses?
          eventLog.push("*1991: The United States is officially dissolved");
          civ["USA"].state = "b";
          civ["USA"].name = "U.S. Anarchy";
          civ["USA"].x += 110;
          civ["CAN"].strength += 500;
          civ["USAc"].strength += 500;
          civ["USAo"].strength = 0;
        } else if (RNG("Cold_War_Winner",year) <= superUnlikely) {
          eventLog.push("*1991: The United States fractures");
          civ["USA"].state = "a";
          civ["USA"].name = "Disunited States of America";
          civ["USA"].size -= 3;
          civ["USA"].x += 30;
          civ["CAN"].strength += 500;
          civ["USAc"].strength += 500;
          civ["USAo"].strength = 0;
        } else if (c.soviet_union) {*/
          // Fall of the Soviet Union
          //eventLog.push("1991: Soviet Union dissolves");
          civ["RUS"].name = "Russia";
          civ["RUS"].color = [0, 158, 224];
          civ["ARM"].state = 3;
          civ["GEO"].state = 4;
          civ["ARM"].strength = 300;
          civ["GEO"].strength = 400;
          civ["KZH"].strength = 500;
          civ["KZH"].name = "Kazakhstan";
          civ["KZH"].state = 2;
          civ["KZH"].x = 1605;
          civ["KZH"].y = 275;
          civ["KZH"].size = 10;
          civ["LIV"].strength = 500;
          civ["LIT"].strength = 500;
          civ["LIT"].state = 1;
          civ["UKR"].strength = 1000;
          civ["UKR"].state = 1;
          civ["POL"].strength = 500;
          civ["POL"].state = 9;
          //c.occupied_iran = false;
        /*}
        }
  
        if (RNG("Somaliland",year) <= possible) {
          c.somaliland = true;
        }*/
    }
    if (nextYear == 1993) {
        civ["ABY"].state = 5;
        /*if (RNG("Breakup_of_Czechoslovakia",year) <= unlikely) {
          civ["CZE"].strength += 100;
        } else if (RNG("Breakup_of_Czechoslovakia",year) <= Default) {*/
          civ["CZE"].state = 5;
          civ["CZE"].name = "Czechia Slovakia";
          civ["CZE"].x -= 15;
        //}
        if (civ["nuclear"].state == 2) {
            civ["nuclear"].state = 3;
        }
    }
    if (nextYear == 1995) {
        /*if (RNG("Breakup_of_Yugoslavia",year) <= unlikely) {
            civ["SER"].strength += 100;
        } else if (RNG("Breakup_of_Yugoslavia",year) <= Default) {
            eventLog.push("1995: Breakup of Yugoslavia");*/
            civ["SER"].state = 6;
            civ["SER"].name = "Serbia";
            civ["SER"].x += 12;
            civ["BUL"].name = "Bulgaria";
        //}
  
        /*if (RNG("Quebec_Independence",year) <= possible && civ["QUE"].strength <= 0) {
          eventLog.push("*1995: Quebec gains independence");
          civ["QUE"].strength = 500;
          civ["QUE"].state = "a";
          civ["QUE"].name = "Quebec";
          civ["QUE"].x = 770;
          civ["QUE"].y = 250;
        }*/
        civ["EU"].state = 3;
        if (civ["EU"].strength > 0) {
            civ["SPA"].name = "";
        }
    }
    if (nextYear == 1997) {
        civ["KON"].name = "D.R.C.";
        civ["KON"].x -= 20;
    }
    if (nextYear == 1999) {
        // Drying of the Aral Sea...
        if (civ["lakes"].state == 2) {
            civ["lakes"].strength = 0;
        }
    }
    
    // 2000s
    if (nextYear == 2008) {
        if (civ["SER"].name == "Serbia") {
            civ["SER"].state = 7;
        }
        civ["EU"].state = 4;
        if (civ["EU"].strength > 0) {
            civ["POR"].name = "";
            civ["IRE"].name = "";
        }
    }
    if (nextYear == 2011) {
        /*if (RNG("South_Sudan",year) <= unlikely) {
          civ["KSH"].strength += 10;
        } else if (RNG("South_Sudan",year) <= Default) {*/
          civ["KSH"].state = 4;
        //}
    }
    if (nextYear == 2013) {
        if (civ["EAF"].strength > 0 && civ["KSH"].state == 4) {
          civ["EAF"].state = 1;
        }
    }
    if (nextYear == 2014) {
        civ["UKR"].state = 2;
        /*if (RNG("Scotland_Independence",year) <= uncommon) {
          civ["SCO"].state = 2;
          civ["SCO"].strength = 100;
          c.scotland = true;
        }*/
    }
    if (nextYear == 2022) {
        civ["UKR"].state = 3;
    }
    if (nextYear == 2023) {
        /*if (!c.kaiserreich && !c.fuhrerreich) {
          // Ukraine War
          eventLog.push("2022: Ukraine War")
          if (RNG("Ukraine_War",year) <= superUnlikely) {
            civ["UKR"].strength = 0;
          } else if (RNG("Ukraine_War",year) <= veryUnlikely) {
            civ["UKR"].state = 4;
            civ["UKR"].name = "";
          } else if (RNG("Ukraine_War",year) <= unlikely) {
            civ["UKR"].state = 1;
          } else if (RNG("Ukraine_War",year) <= uncommon) {
            civ["UKR"].state = 2;
          } else if (RNG("Ukraine_War",year) <= Default) {
            civ["UKR"].state = 3;
          }*/
    }

    // The End
}
