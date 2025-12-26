function regions(year) {
    let nextYear = year + 1;
    let civ = civs[nextYear];
    c = civ["conditions"];
    
/* ______________________________
 / \                             \.
|   |                            |.
 \_ |   -=- EGYPT -=-            |.
    |                            |.
    |   Alternate timelines:     |.
    |        ? Kushite           |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (civ["EGY"].name == "Egypt ( UK )") {
        civ["EGY"].color = [220, 160, 160];
    } else {
        civ["EGY"].color = [];
    }

    // Start
    if (nextYear == -2014) {
        civ["EGY"].state = 2;
    }
    if (nextYear == -1720) {
        civ["EGY"].state = 1;
    }
    if (nextYear == -1700) {
        civ["EGY"].name = "Egyptian Empire";
        civ["EGY"].x = 1380;
    }
    if (nextYear == -1550) {
        civ["EGY"].state = 2;
        civ["EGY"].name = "Egyptian New Kingdom";
        civ["EGY"].x = 1330;
    }
    if (nextYear == -1504) {
        civ["EGY"].state = 3;
    }
    if (nextYear == -1100) {
        civ["EGY"].state = 1;
    }
    if (nextYear == -748) {
        civ["KSH"].strength = 448;
        civ["EGY"].name = "";
    }
    if (nextYear == -649) {
        civ["EGY"].name = "Egypt";
        civ["EGY"].state = 4;
        civ["KSH"].state = 1;
        civ["KSH"].y += 20;
        civ["EGY"].x += 90;
        civ["EGY"].y -= 25;
    }

    // Modern Egypt
    if (nextYear == 1807) {
        civ["EGY"].state = 1;
        civ["EGY"].name = "Muhammad Ali";
        civ["EGY"].strength = 33;
        civ["EGY"].x -= 40;
        civ["EGY"].y += 20;
    }
    if (nextYear == 1831) {
        civ["EGY"].name = "Muhammad Ali ";
        civ["EGY"].state = 3;
    }
    if (nextYear == 1867) {
        civ["EGY"].strength = 400;
        civ["EGY"].name = "Egyptian Khedivate";
        civ["DAR"].strength = 0;
    }
    if (nextYear == 1875) {
        civ["EGY"].state = 5;
    }
    if (nextYear == 1882) {
        civ["EGY"].name = "Egypt ( UK )";
        civ["EGY"].size += 3;
    }
    if (nextYear == 1953) {
        civ["EGY"].name = "Egypt";
        civ["EGY"].x += 40;
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |   -=- MESOPOTAMIA -=-      |.
    |                            |.
    |   Alternate timelines:     |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (nextYear == -1881) {
        civ["MES"].strength = 1450;
    }
    if (nextYear == -1774) {
        civ["MES"].state = 2;
        civ["MES"].name = "Yamhad / Babylon";
    }
    if (nextYear == -1762) {
        civ["MES"].name = "Yamhad / Babylonian Empire";
    }
    if (nextYear == -1725) {
        civ["MES"].state = 1;
    }
    if (nextYear == -1722) {
        civ["MES"].name = "Yamhad / Babylonia";
    }
    if (nextYear == -1588) {
        civ["MES"].name = "Mitanni / Kassite Babylonia";
    }
    if (nextYear == -1454) {
        civ["MES"].state = 2;
    }
    if (nextYear == -1352) {
        civ["MES"].name = "Assyria / Kassite Babylonia";
    }
    if (nextYear == -1268) {
        civ["MES"].name = "Assyrian Empire / Kassite Babylonia";
        civ["MES"].state = 3;
    }
    if (nextYear == -1235) {
        civ["MES"].name = "Assyrian Empire";
        civ["MES"].color = [11, 61, 115];
    }
    if (nextYear == -1206) {
        civ["MES"].name = "Assyrian Empire / Kassite Babylonia";
        civ["MES"].color = [];
    }
    if (nextYear == -1189) {
        civ["MES"].name = "Assyrian Empire / Elam";
    }
    if (nextYear == -1155) {
        civ["MES"].name = "Assyrian Empire / Isin-Babylonia";
    }
    if (nextYear == -1100) {
        civ["MES"].state = 3;
    }
    if (nextYear == -1020) {
        civ["MES"].name = "Assyria / Kassite Babylonia";
        civ["MES"].state = 1;
    }
    if (nextYear == -979) {
        civ["MES"].name = "Assyria / Babylonia";
    }
    if (nextYear == -895) {
        civ["MES"].name = "Neo-Assyrian Empire / Babylonia";
        civ["MES"].state = 3;
    }
    // Assyrian Empire
    if (nextYear == -728) {
        civ["MES"].name = "Neo-Assyrian Empire";
        civ["MES"].color = [11, 61, 115];
    }
    if (nextYear == -710) {
        civ["MES"].strength = 0;
        civ["NSE"].strength = 500;
        civ["NSE"].name = "Neo-Assyrian Empire";
        civ["NSE"].color = [11, 61, 115];
    }
    // Neo-Babylon
    if (nextYear == -605) {
        civ["NSE"].name = "Neo-Babylonian Empire";
        civ["NSE"].color = [190, 39, 39];
        civ["ISR"].color = [190, 39, 39];
    }

    if (nextYear == 1409) {
        civ["QQO"].strength = 100;
    }
    if (nextYear == 1453) {
        civ["QQO"].state = 2;
    }
    if (nextYear == 1470) {
        civ["QQO"].name = "Aq Qoyunlu";
    }
    
/* ______________________________
 / \                             \.
|   |                            |.
 \_ |   -=- CHINA -=-            |.
    |                            |.
    |   Alternate timelines:     |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/
    
    if (civ["CHI"].name == "Chinese Warring Kingdoms") {
        civ["CHI"].x = 1820;
        civ["CHI"].merge = [];
    } else {
        civ["CHI"].x = 1920;
    }
    if (civ["CHI"].ideology == "communism") {
        civ["CHI"].color = [217, 18, 18];
    }

    if (nextYear == -1673) {
        civ["CHI"].name = "Shang Dynasty";
        civ["CHI"].state = 2;
        worldNews("Shang Dynasty founded",
                "The Shang Dynasty has overthrown the Xia dynasty in China.",
                "https://i.pinimg.com/originals/a1/16/7a/a1167a77515cd85570170995ed947be7.gif",
                false, 10, nextYear, 6, false);
    }
    if (nextYear == -1046) {
        civ["CHI"].name = "Zhou Dynasty";
        worldNews("Zhou Dynasty founded",
                "The Zhou Dynasty has overthrown the Shang dynasty in China.",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/States_of_Zhou_Dynasty.png/310px-States_of_Zhou_Dynasty.png",
                false, 11, nextYear, 6, false);
    }
    if (nextYear == -589) {
        civ["CHI"].name = "Chinese Warring Kingdoms";
        civ["CHI"].state = 3;
    }
    if (nextYear == -282) {
        civ["CHI"].state = 4;
    }
    if (nextYear == -218) {
        civ["CHI"].name = "Qin Dynasty";
    }
    if (nextYear == -206) {
        civ["CHI"].name = "Han Dynasty";
    }
    if (nextYear == -180) {
        civ["CHI"].state = 5;
    }

    if (nextYear == 193) {
        civ["CHI"].state = 3;
        civ["CHI"].name = "Chinese Warring Kingdoms";
    }
    if (nextYear == 270) {
        civ["CHI"].state = 5;
        civ["CHI"].name = "Jin Dynasty";
        civ["CHI"].x += 50;
    }
    if (nextYear == 384) {
        civ["CHI"].name = "Chinese Warring Kingdoms";
        civ["CHI"].state = 3;
    }
    if (nextYear == 396) {
        civ["CHI"].name = "Jin Dynasty";
        civ["CHI"].state = 4;
    }
    if (nextYear == 422) {
        civ["CHI"].name = "Wei / Song";
        civ["CHI"].state = 3;
    }
    if (nextYear == 461) {
        civ["CHI"].name = "Wei / Qi";
        civ["CHI"].state = 4;
    }
    if (nextYear == 519) {
        civ["CHI"].name = "Wei / Liang";
    }
    if (nextYear == 550) {
        civ["CHI"].name = "W. Wei / N. Qi / Chen";
    }
    if (nextYear == 581) {
        civ["CHI"].name = "Sui Dynasty";
        civ["CHI"].state = 5;
    }
    if (nextYear == 600) {
        civ["CHI"].name = "Chinese Warring Kingdoms";
        civ["CHI"].state = 4;
    }
    if (nextYear == 618) {
        civ["CHI"].name = "Tang Dynasty";
        civ["CHI"].state = 5;
    }
    if (nextYear == 930) {
        civ["CHI"].name = "Chinese Warring Kingdoms";
        civ["CHI"].state = 4;
    }
    if (nextYear == 980) {
        civ["CHI"].name = "Song Dynasty";
        civ["CHI"].state = 5;
    }

    if (nextYear == 1365) {
        /*if (RNG("New_China",year) <= veryUnlikely) {
          civ["CHIi"].strength = 1000;
          c.new_china = true;
        }*/
    }
    if (nextYear == 1372) {
        civ["CHI"].state = 6;
        civ["CHI"].name = "Ming Dynasty";
  
        civ["CHIi"].state = 2;
        civ["CHIi"].y += 40;
        civ["CHIi"].size += 4;
    }
    if (nextYear == 1387) {
        /*// Chinese colonization of the Americas?
        if (RNG("China_Colonizes_America",year) <= veryUnlikely) {
          eventLog.push("*1387: China establishes a permanent settlement in the Americas");
          civ["CHIa"].strength = 2000;
        }*/
    }
    if (nextYear == 1409) {
        /*if (c.new_china) {
          civ["MLY"].strength = 0;
        }*/
    }
    if (nextYear == 1433) {
        civ["CHIa"].state = 2;
    }
    if (nextYear == 1577) {
        /*if (c.new_china) {
          civ["PHI"].strength = 0;
        }*/
    }
    if (nextYear == 1635) {
        civ["QIN"].strength = 700;
        /*if (c.new_china) {
          civ["PORi"].strength = 0;
        }*/
    }
    if (nextYear == 1649) {
        civ["QIN"].state = 2;
        civ["CHI"].strength = 0;
    }
    if (nextYear == 1700) {
        civ["QIN"].state = 3;
        civ["QIN"].x -= 50;
        civ["QIN"].y += 70;
        civ["QIN"].size += 2;
    }
    if (nextYear == 1865) {
        civ["QIN"].state = 4;
    }

    // Modern Era
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
    if (nextYear == 1912) {
        civ["QIN"].name = "Republic of China";
        civ["QIN"].x -= 40;
    } 
    if (nextYear == 1916) {
        //if (RNG("Boxer's_Rebellion",year) > unlikely) {
        civ["QIN"].state = 5;
        //}
    }
    if (nextYear == 1947) {
        // Chinese Communist Revolution
        c.isChineseCivilWar = true;
        //if (RNG("Boxer's_Rebellion",year) > unlikely) {
        civ["QIN"].state = 1;
        civ["QIN"].color = [255, 219, 37];
        //}
        civ["CHI"].strength = 1000;
        civ["CHI"].state = 7;
        civ["CHI"].name = "China";
        civ["CHI"].size += 6;
        civ["CHI"].y -= 70;
    }
    if (nextYear == 1948) {
        civ["QIN"].state = 2;
    }
    if (nextYear == 1949) {
        // Chinese Communist Revolution
        //c.isChineseCivilWar = false;
        civ["QIN"].state = 4;
        civ["CHI"].x -= 80;
        civ["CHI"].y += 50;
        civ["CHI"].size += 4;
        civ["CHI"].color = [217, 18, 18];
        civ["CHI"].ideology = "communism";
    
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
        /*if (c.big_china) {
          civ["MON"].strength = 0;
          civ["QIN"].strength = 0;
        }*/
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |   -=- INDIA -=-            |.
    |                            |.
    |   Alternate timelines:     |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (civ["IND"].name == "Mauryan Empire") {
        civ["IND"].color = [9, 64, 24];
    } else {
        civ["IND"].color = [];
    }
    if (civ["RAJ"].name == "India") {
        civ["RAJ"].color = [255, 160, 26];
    } else {
        civ["RAJ"].color = [];
    }

    if (nextYear == -589) {
        civ["IND"].strength = 4330;
    }
    if (nextYear == -548) {
        civ["CHO"].strength = 4200;
    }
    if (nextYear == -339) {
        civ["IND"].state = 2;
        civ["IND"].name = "Nanda Empire";
    }
    if (nextYear == -341) {
        civ["CHO"].name = "Cholas";
        civ["CHO"].state = 2;
        civ["CHO"].x += 10;
    }
    if (nextYear == -322) {
        civ["IND"].name = "Mauryan Empire";
    }
    if (nextYear == -180) {
        civ["IND"].state = 3;
        civ["IND"].name = "Indian Kingdoms";
        civ["IND"].x += 35;
    }

    if (nextYear == 360) {
        civ["IND"].state = 2;
        civ["IND"].name = "Gupta Empire";
    }
    if (nextYear == 480) {
        civ["IND"].state = 4;
        civ["IND"].name = "Gupta Empire";
        civ["CHO"].state = 3;
        civ["CHO"].name = "Kalabhras";
    }
    if (nextYear == 500) {
        civ["IND"].state = 3;
        civ["IND"].name = "Indian Kingdoms";

    }
    if (nextYear == 610) {
        civ["IND"].state = 5;
        civ["CHO"].state = 4;
        civ["CHO"].name = "Pandyas/Pallavas";
        civ["CHO"].x -= 30;
    }
    if (nextYear == 910) {
        civ["IND"].state = 6;
        civ["IND"].name = "Gurjara";
        civ["CHO"].state = 5;
        civ["CHO"].name = "Rashtrakuta Dynasty";
    }
    if (nextYear == 1333) {
        civ["IND"].state = 7;
        civ["IND"].name = "Delhi Sultanate";
        civ["CHO"].state = 6;
        civ["CHO"].name = "Vijayanayaras";
    }
    if (nextYear == 1678) {
        civ["IND"].state = 8;
        civ["IND"].name = "Mughal Empire";
        civ["CHO"].state = 7;
        civ["CHO"].name = "Marathas";
    }
    if (nextYear == 1764) {
        civ["IND"].state = 9;
        civ["IND"].name = "Maratha Empire";
        civ["CHO"].state = 8;
        civ["CHO"].name = "";
    }

    // British Raj
    if (nextYear == 1757) {
        civ["RAJ"].strength = 2200;
    }
    if (nextYear == 1762) {
        civ["RAJ"].state = 2;
    }
    if (nextYear == 1804) {
        civ["RAJ"].state = 3;
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
    if (nextYear == 1859) {
        civ["RAJ"].name = "British Raj";
        civ["RAJ"].state = 5;
        civ["RAJ"].x += 30;
    }
    if (nextYear == 1880) {
        civ["RAJ"].state = 6;
    }

    // Indian Independence
    if (nextYear == 1947) {
        //if (c.british_raj) {
        civ["RAJ"].name = "India";
        civ["RAJ"].x += 35;
        civ["RAJ"].y -= 15;
        civ["RAJ"].size += 5;
        civ["PAK"].strength = 300;

        worldNews(`India Gains Independence`,
                    `Under Mahatma Gandhi’s leadership, India has achieved independence through mass civil disobedience, ending British colonial rule.`,
                    "https://assets.architecturaldigest.in/photos/60084556eebcfd50ede878ff/16:9/w_2560%2Cc_limit/Gandhi-and-Sarojini-Naidu-featured-1366x768.jpg",
                    false, 94, nextYear, 1, true);

        //}
    }
    if (nextYear == 1948) {
        if (c.fuhrerreich) {
            civ["PAK"].state = "a";
            civ["PAK"].name = "Bengal";
            civ["PAK"].x = 1840;
            civ["PAK"].y = 440;
            civ["PAK"].size -= 3;
        }

        civ["SRI"].strength = 500;
    }
    if (nextYear == 1971) {
        if (!c.fuhrerreich) {
            civ["PAK"].state = 2;
        }
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |  -=- SOUTH EAST ASIA -=-   |.
    |                            |.
    |   Alternate timelines:     |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (nextYear == -1504) {
        civ["BUR"].strength = 4400;

        civ["VIE"].defaultcolor = [];
    }
    if (nextYear == -1348) {
        civ["VIE"].strength = 1450;
    }
    if (nextYear == -254) {
        civ["VIE"].name = "Au Lac";
        civ["VIE"].state = 2;
    } 
    if (nextYear == -206) {
        civ["VIE"].name = "Nanyue";
        civ["VIE"].state = 1;
    }
    if (nextYear == -108) {
        civ["VIE"].strength = 0;
    }

    if (nextYear == 70) {
        civ["CAM"].strength = 3500;
    }
    if (nextYear == 240) {
        civ["CAM"].state = 2;
        civ["CHM"].strength = 2450;
    }
    if (nextYear == 300) {
        civ["BUR"].name = "Waithali";
    }
    if (nextYear == 540) {
        civ["VIE"].strength = 1000;
        civ["VIE"].state = 2;
        civ["VIE"].name = "Van Xuan";
    }
    if (nextYear == 550) {
        civ["CAM"].name = "Chenla";
    }
    if (nextYear == 600) {
        civ["VIE"].strength = 0;
    }
    if (nextYear == 800) {
        civ["CAM"].name = "Khmer";
    }
    if (nextYear == 825) {
        civ["BUR"].name = "Le-Mro";
    }
    if (nextYear == 855) {
        civ["CAM"].state = 3;
    }
    if (nextYear == 880) {
        civ["CAM"].state = 4;
    }
    if (nextYear == 940) {
        civ["VIE"].strength = 2500;
        civ["VIE"].state = 2;
        civ["VIE"].name = "Ngo";
    }
    if (nextYear == 980) {
        civ["VIE"].state = 3;
        civ["VIE"].name = "Dai Viet";
    }
    if (nextYear == 992) {
        civ["VIE"].state = 4;
        civ["CHM"].strength = 0;
    }
    if (nextYear == 1045) {
        civ["BUR"].state = 2;
        civ["BUR"].name = "Pagan";
    }
    if (nextYear == 1009) {
        civ["CHM"].strength = 1000;
    }

    if (nextYear == 1265) {
        civ["BUR"].state = 3;
    }
    if (nextYear == 1289) {
        civ["BUR"].name = "Pegu";
        civ["BUR"].x += 30;
    }
    if (nextYear == 1313) {
        civ["CHM"].strength = 0;
    }
    if (nextYear == 1330) {
        civ["CHM"].strength = 1000;
    }
    if (nextYear == 1357) {
        civ["THA"].state = 2;
    }
    if (nextYear == 1433) {
        civ["CAM"].name = "Cambodia";
        civ["CAM"].size -= 2;
    }
    if (nextYear == 1558) {
        civ["BUR"].name = "Toungoo";
    }
    if (nextYear == 1594) {
        civ["THA"].name = "Ayutthaya";
    }
    if (nextYear == 1700) {
        civ["CHM"].strength = 0;
    } 
    if (nextYear == 1757) {
        civ["BUR"].name = "Konbaung";
    }
    if (nextYear == 1762) {
        civ["BUR"].state = 4;
    }

    if (nextYear == 1773) {
        civ["THA"].name = "Thonburi";
    } 
    if (nextYear == 1795) {
        civ["THA"].state = 3;
        civ["THA"].name = "Rattanakosin";
    }
    if (nextYear == 1801) {
        civ["VIE"].name = "Vietnam";
        civ["VIE"].defaultname = "Vietnam";
    }
    if (nextYear == 1898) {
        civ["THA"].state = 4;
        civ["THA"].name = "Siam";
    }
    if (nextYear == 1932) {
        civ["THA"].name = "Thailand";
    }

    // European Colonization
    if (nextYear == 1860) {
        civ["VIE"].state = 5;
        civ["VIE"].owner = colonizingPercentage(rng(74),colonizeOldWorld,"FRA",40);
        civ["VIE"].y += 30;
    }
    if (nextYear == 1861) {
        civ["CAM"].strength = 0;
    }
    if (nextYear == 1885) {
        //if (c.british_raj) {
        civ["BUR"].strength = 0;
        //}
    }
    if (nextYear == 1949) {
        civ["VIE"].owner = "FRA";
    }

    // Independence
    if (nextYear == 1948) {
        civ["BUR"].name = "Burma";
        civ["BUR"].strength = 560;
    }
    if (nextYear == 1954) {
        civ["CAM"].strength = 200;
    }
    if (nextYear == 1955) {
        // Vietnam War
        civ["VIE"].owner = "none";
        civ["VIE"].state = 4;
        civ["VIE"].defaultname = "N. Vietnam";
        civ["VIE"].y -= 30;
        civ["CHM"].strength = 20;
        civ["CHM"].name = "S. Vietnam";
        civ["CHM"].color = [240, 211, 97];
        civ["CHM"].state = 2;
        civ["CHM"].y += 30;
    }
    if (nextYear == 1975) {
        // Vietnam War Over
        civ["VIE"].name = "Vietnam";
        civ["VIE"].defaultname = "Vietnam";
        civ["VIE"].ideology = "communism";
        if (rng(80) <= uncommon) {
            civ["VIE"].defaultcolor = [240, 211, 97];
            civ["VIE"].ideology = "democracy";
        }
    }
    if (nextYear == 1989) {
        civ["BUR"].name = "Myanmar";
    }
    owner(civ,"VIE",civ["VIE"].defaultcolor,civ["VIE"].defaultname,"Indochina",true);

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |   -=- ANATOLIA -=-         |.
    |                            |.
    |   Alternate timelines:     |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (nextYear == -1740) {
        civ["HIT"].strength = 2000;
    }
    if (nextYear == -1595) {
        civ["HIT"].state = 2;
    }
    if (nextYear == -1590) {
        civ["HIT"].state = 3;
    }
    if (nextYear == -1500) {
        civ["HIT"].state = 2;
    }
    if (nextYear == -1350) {
        civ["HIT"].state = 4;
    }
    if (nextYear == -1180) {
        civ["HIT"].name = "";
        civ["HIT"].color = [110, 110, 110];
        civ["HIT"].state = 5;
    }
    if (nextYear == -1178) {
        civ["HIT"].name = "Phrygia";
        civ["HIT"].x -= 30;
    }
    if (nextYear == -700) {
        civ["HIT"].name = "Lydia";
    }
    // Lydia
    if (nextYear == -600) {
        civ["HIT"].state = 6;
        civ["HIT"].color = [212, 152, 69];
        civ["HIT"].x += 10;
        civ["HIT"].size += 2;
    }

    // Ottoman Empire
    if (nextYear == 1317) {
        civ["OTT"].strength = 1000;
    }
    if (nextYear == 1334) {
        civ["OTT"].state = 2;
    }
    if (nextYear == 1387) {
        civ["OTT"].state = 3;
    }
    if (nextYear == 1400) {
        civ["OTT"].state = 4;
    }
    if (nextYear == 1474) {
        /*if (c.byzantium) {
          civ["OTT"].strength = 0;
        } else {
          civ["OTT"].state = 5;
        }*/ civ["OTT"].state = 5;
    }
    if (nextYear == 1524) {
        civ["OTT"].state = 6;
    }
    if (nextYear == 1533) {
        civ["OTT"].state = 7;
    }
    if (nextYear == 1570) {
        civ["OTT"].state = 8;
    }
    if (nextYear == 1686) {
        civ["OTT"].state = 9;
    }
    if (nextYear == 1830) {
        civ["OTT"].state = 10;
    }
    if (nextYear == 1912) {
        civ["OTT"].state = 11;
        civ["OTT"].x += 30;
    }

    // Modern Era
    if (nextYear == 1920) {
        /*if (c.byzantium) {
        civ["OTT"].strength = 200;
        civ["OTT"].state = 12;
        civ["OTT"].name = "Kurdistan";
        civ["OTT"].x = 1520;
        civ["OTT"].y = 337;
        civ["OTT"].size = 4;
        }*/
    }
    if (nextYear == 1922) {
        //if (!c.kaiserreich && !c.byzantium) {
        civ["OTT"].state = 12;
        civ["OTT"].name = "Turkey";
        civ["OTT"].x += 45;
        civ["OTT"].y += 12;
        //}
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |   -=- CAUCASIA -=-         |.
    |                            |.
    |   Alternate timelines:     |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (nextYear == -1500) {
        civ["ARM"].strength = 4000;
    }
    if (nextYear == -1270) {
        civ["ARM"].name = "Arme-Shu";
        civ["ARM"].x += 50;
    }
    if (nextYear == -1100) {
        civ["ARM"].name = "Nairi";
    }
    if (nextYear == -845) {
        civ["ARM"].name = "Urartu";
    }
    if (nextYear == -589) {
        civ["ARM"].name = "Armenia";
    }
    if (nextYear == -300) {
        civ["GEO"].strength = 2450;
    }
    if (nextYear == -292) {
        civ["GEO"].state = 3;
        civ["GEO"].name = "Iberia";
    }
    if (nextYear == -180) {
        civ["ARM"].state = 2;
    }
    if (nextYear == -22) {
        civ["ARM"].state = 1;
    }

    if (nextYear == 800) {
        civ["GEO"].name = "Georgia";
    }
    if (nextYear == 1120) {
        civ["GEO"].state = 2;
    }
    if (nextYear == 1242) {
        civ["GEO"].state = 3;
    }

    // [Caucasia]

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |   -=- ISRAEL -=-           |.
    |                            |.
    |   Alternate timelines:     |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (nextYear == -1050) {
        civ["ISR"].state = 2;
        civ["ISR"].strength = 1500;
        civ["ISR"].name = "Israel";
    }
    if (nextYear == -950) {
        civ["ISR"].state = 3;
    }
    if (nextYear == -721) {
        civ["ISR"].name = "";
        civ["ISR"].color = [11, 61, 115];
        worldNews("Israel Falls to Assyria",
                "Assyria swept out of the north, capturing the Northern Kingdom of Israel, taking the ten tribes into captivity.",
                "https://thelonghaulwithisaiah.files.wordpress.com/2015/03/assyria-7-lawrencesamaria.jpg",
                false, 16, nextYear, 3, false);
    }
    if (nextYear == -586) {
        worldNews("Temple of Jerusalem Destroyed",
                "The First Temple of Jerusalem has been destroyed by the Babylonian Empire...",
                "https://upload.wikimedia.org/wikipedia/commons/0/00/%28Venice%29_La_distruzione_del_tempio_di_Gerusalemme_-Francesco_Hayez_-_gallerie_Accademia_Venice.jpg",
                false, 14, nextYear, 2, true);
    }
    if (nextYear == -145) {
        civ["ISR"].color = [];
        civ["ISR"].name = "Hasmonea";
        if (!civ["PER"].strong) {
            civ["PER"].name = "Parthian Empire";
            civ["PER"].color = [];
        } else {
            civ["ISR"].strength = 0;
        }
    }
    if (nextYear == -99) {
        civ["ISR"].state = 2;
    }
    if (nextYear == -72) {
        civ["ISR"].state = 1;
    }
    if (nextYear == -60) {
        civ["ISR"].state = 3;
    }
    if (nextYear == -30) {
        civ["ISR"].state = 1;
        civ["ISR"].name = "Herodia";
        civ["ISR"].strength += 470;
    }

    worldNews("Jesus Christ is Born",
                "In the small town of Bethlehem, a holy child from Mary and Joseph is born in a humble manger.",
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_NG569JegPVJsNULvmeEg7cBnSBC-rL_7TyvMrdyB1-LTMJbzZkdieBJds0JdE28Dfu855BTIbPlmq7H7w1hM9H_zep0FMIyuboElL3i6-5SuuJO-7C3nBCHN_xRGFggDlaAqnAEXXGhK/s1600/23+Jesus.jpg",
                false, 5, rngRange(rng(4),-6,-4), 4, true);
    if (nextYear == -1) {
        if (civ["ROM"].strong) {
          civ["ISR"].strength = 0;
        } else {
          civ["ISR"].strength += 470;
        }
    }

    // Crusades
    if (!civ["COR"].strong) {
        if (nextYear == 1100) {
            civ["ISR"].strength = 195;
            civ["ISR"].name = "Crusaders";
        }
        if (nextYear == 1102) {
            civ["ISR"].state = 4;
        }
        if (nextYear == 1111) {
            civ["ISR"].state = 5;
        }
        if (nextYear == 1150) {
            civ["ISR"].state = 1;
        }
    }

    // Jewish State
    if (nextYear == 1948) {
        //if (c.israel) {
        civ["ISR"].strength = 2000;
        civ["ISR"].state = 7;
        //}
        c.islamicExtremism = true;
    }

    if (nextYear == 2023 &&
        civ["ISR"].state == 7
    ) {
        worldNews(`Israel-Hamas War`,
                    `Intense fighting has erupted between Israel and Hamas in Gaza, prompting airstrikes, civilian displacement, and international efforts to halt escalation.`,
                    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Damage_in_Gaza_Strip_during_the_October_2023_-_01_%28cropped%29.jpg",
                    false, 74, nextYear, 1, true);
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |   -=- ANCIENT GREECE -=-   |.
    |                            |.
    |   Alternate timelines:     |.
    | ? Greece moves to Corsica  |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (nextYear == -845) {
        civ["GRE"].strength = 750;
    }
    if (nextYear == -776) {
        worldNews("First Olympic Games Held",
                "Koroibos, a cook from the Greek city of Elis, won the stadion race, a foot race 600 feet long. The next game will be held in 4 years.",
                "https://www.historyonthenet.com/wp-content/uploads/2014/07/anicent-olympics-games.jpg",
                false, 15, nextYear, 6, false);
    }
    if (nextYear == -480) {
        worldNews("The Battle of Thermopylae",
                "In central Greece at the mountain pass of Thermopylae, Xerxes of Peria has won. The Greco-Persian wars still rages on however...",
                "https://cdn.thecollector.com/wp-content/uploads/2023/04/battle-thermopylae-marathon.jpg",
                false, 12, nextYear, 3, false);
    }
    /*
     *   Greece VS Persia
     */

    if (nextYear == -472) {
        civ["GRE"].state = 2;
        if (rng(6) < veryUnlikely) {
            /* MAJOR alternate history branch:
            Persia Conquering Greece - civ["PER"].strong
            */
            civ["PER"].strong = true;
            civ["GRE"].state = 1;
            civ["GRE"].name = "";
            civ["GRE"].color = [220, 191, 122];
            worldNews("Persia Conquers Greece",
                        "The mighty Achaemenid Empire has managed to conquer the squabbling city-states of Greece.",
                        "https://cdn.thecollector.com/wp-content/uploads/2021/10/battle-of-marathon-war.jpg",
                        true, 17, nextYear, 5, true);
        }
    }
    if (nextYear == -385) {
        civ["GRE"].state = 3;
    }
    // Alexander the Great
    if (!civ["PER"].strong) {
        if (nextYear == -336) {
            civ["GRE"].strong = true;
            worldNews("Alexander III Becomes King",
                        "Succeeding his father Phillip II, King Alexander III of Macedon has ambitious plans...",
                        "https://images.immediate.co.uk/production/volatile/sites/7/2019/05/GettyImages-184255971-0a90115-30ece46.jpg",
                        false, 9, -336, 3, false);
        }

        // Collapse of Persia
        if (nextYear == -330) {
            civ["PER"].strength = 0;
            worldNews("Macedonia Conquers Persia",
                    "With the death of Darius III, Alexander the Great has managed to conquer the mighty Persian Empire and continues to march onward.",
                    "https://historyfair0729.weebly.com/uploads/3/8/6/2/38626189/3739680_orig.jpg",
                    false, 8, -330, 10, true);
        }
    }
    if (nextYear == -341) {
        if (!civ["PER"].strong) {
            civ["GRE"].state = 4;
        }
    }
    if (nextYear == -330) {
        if (!civ["PER"].strong) {
            civ["GRE"].name = "Macedonian Empire";
            civ["GRE"].state = 5;

            civ["GRE"].x = 1520;
            civ["GRE"].y = 355;
            civ["GRE"].size = 10;
        }
    }
    if (nextYear == -319) {
        if (!civ["PER"].strong) {
            civ["GRE"].name = "Hellenic Kingdoms";
            civ["GRE"].state = 6;
            civ["GRE"].size -= 2;
            civ["GRE"].x += 30;
        }
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |    -=- PERSIA -=-          |.
    |                            |.
    |   Alternate timelines:     |.
    |      ! Greece conquered    |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (nextYear == -611) {
        civ["PER"].strength = 300;
    }
    if (nextYear == -548) {
        civ["PER"].name = "Achaemenid Empire";
    }
    if (nextYear == -525) {
        civ["PER"].state = 2;
        civ["NSE"].strength = 0;
        civ["EGY"].strength = 0;
        civ["HIT"].strength = 0;
    }
    if (nextYear == -310) {
        civ["PER"].strength = 3000;
        if (!civ["PER"].strong) {
            civ["PER"].name = "Seleucid Empire";
            civ["PER"].state = 1;
            civ["PER"].color = [173, 81, 12];

            civ["GRE"].x -= 150;
            civ["GRE"].y -= 20;
        }
    }
    if (!civ["PER"].strong) {
        if (nextYear == -222) {  
            civ["PER"].state = 4;
        }
        if (nextYear == -136) {
            civ["PER"].state = 3;
        }
    }
    if (nextYear == 221) {
        civ["PER"].name = "Sassanid Empire";
    }
    if (nextYear == 628) {
        civ["PER"].state = 3;
    }
    if (nextYear == 872) {
        civ["PER"].name = "Saffarids";
    }

    // Turks
    if (nextYear == 1045) {
        civ["TUR"].strength = 200;
        civ["TUR"].state = 3;
        civ["TUR"].x += 10;
        civ["TUR"].y += 90;
        civ["TUR"].size -= 2;
        civ["TUR"].name = "Seljuq Empire";
    }
    if (nextYear == 1389) {
        civ["TUR"].strength = 120;
        civ["TUR"].name = "Timurid Empire";
        civ["TUR"].x += 10;
        civ["TUR"].y += 10;
        civ["TUR"].size += 3;
    }
    if (nextYear == 1397) {
        civ["TUR"].state = 4;
    }
    if (nextYear == 1453) {
        civ["TUR"].state = 5;
    }
    if (nextYear == 1509) {
        civ["PER"].name = "Safavid Empire";
        civ["PER"].strength += 2000;
        civ["PER"].state = 5;
        civ["PER"].x += 30;
    }

    if (nextYear == 1736) {
        civ["PER"].name = "Afsharid Empire";
    }
    if (nextYear == 1762) {
        civ["PER"].name = "Zands";
        civ["PER"].x += 20;
        civ["PER"].size += 4;
    }
    if (nextYear == 1792) {
        civ["PER"].name = "Qajar";
    }

    // Modern Era
    if (nextYear == 1880) {
        civ["PER"].state = 6;
    }
    if (nextYear == 1926) {
        civ["PER"].name = "Iran";
        civ["PER"].y += 10;
    }
    if (nextYear == 1947) {
        civ["PER"].name = "Iran";
        if (rng(113) >= possible || c.fuhrerreich) {
            c.occupied_iran = false;
        }
    }
    if (c.occupied_iran && civ["ENG"].name != "Oceania") {
        civ["PER"].color = civ["ENG"].color;
    } else {
        civ["PER"].color = [];
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |    -=- AFGANISTAN -=-      |.
    |                            |.
    |   Alternate timelines:     |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (nextYear == 1750) {
        civ["AFG"].strength = 2250;
    }
    if (nextYear == 1762) {
        civ["AFG"].state = 2;
    }
    if (nextYear == 1769) {
        civ["AFG"].state = 1;
    }
    if (nextYear == 1801) {
        civ["AFG"].state = 3;
    }
    if (nextYear == 1822) {
        civ["AFG"].state = 4;
        civ["AFG"].name = "Afgans";
    }
    if (nextYear == 1880) {
        civ["AFG"].state = 5;
        civ["AFG"].name = "Afganistan";

        if (civ["AFG"].strength <= 0) {
            civ["AFG"].strength = 300;
            civ["AFG"].state = 2;
        }
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |    -=- THE STEPPE -=-      |.
    |                            |.
    |   Alternate timelines:     |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (nextYear == 375) {
        civ["HNN"].strength = 50;
    }
    if (nextYear == 540) {
        civ["TUR"].strength = 120;
    }
    if (nextYear == 568) {
        civ["HNN"].strength = 237;
        civ["HNN"].y += 10;
        civ["HNN"].name = "Avar Khaganate";
        civ["HNN"].color = [255, 125, 96];
    }

    if (nextYear == 1387) {
        civ["HOR"].strength = 119;
    }
    if (nextYear == 1513) {
        civ["KZH"].strength = 195;
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |   -=- ROMAN EMPIRE -=-     |.
    |                            |.
    | Alternate timelines:       |.
    |  - Carthage Wins Punic Wars|.
    |       Seed: 1840Q61t       |.
    |  - Nova Roma               |.
    |  - Rome Survives           |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (nextYear == rngRange(rng(21), -773, -733)) {
        civ["ROM"].strength = 3000;
        worldNews("Founding of Rome",
                    `According to legend, Romulus and Remus have founded the city of Rome. This marks the beginning of what may become one of history's greatest empires.`,
                    "https://upload.wikimedia.org/wikipedia/commons/e/ea/Kapitolinische_W%C3%B6lfin_Museum_Capitolini.jpg",
                    false, 41, nextYear, 2, false);
    }
    if (civ["ROM"].techecon >= 461) {
        civ["ROM"].state = 2;
    } if (civ["ROM"].techecon >= 483) {
        civ["ROM"].state = 3;
    } if (civ["ROM"].techecon >= 531) {
        civ["ROM"].state = 4;
    }

    // Carthage
    if (nextYear == -810) {
        civ["CAR"].strength = 3000;
    }
    if (civ["CAR"].techecon == 140) {
        civ["CAR"].state = 2;
    }

    /*////////////////////////
            PUNIC WARS
         264 BC – 146 BC
    ////////////////////////*/

    if (rng(1) > veryUnlikely && civ["ROM"].techecon >= 544) {
        civ["ROM"].state = 5;
    }
    // Rome Wins
    if (civ["ROM"].techecon == 552) {
        if (rng(1) > veryUnlikely) {
            civ["CAR"].strength = 0;
            civ["ROM"].strong = true;
            civ["ROM"].size = 12;
            worldNews("Rome Wins Punic Wars",
                        "After many gruelling wars with Carthage, Rome managed to pull out on top. What will the fate of the Mediterranean be now?",
                        "https://www.worldhistory.org/img/c/p/360x202/2171.jpg",
                        false, 1, nextYear, 7, true);
        } else {
            /* MAJOR alternate history branch:
            Carthage winning Punic Wars - civ["CAR"].strong
            */
            worldNews("Carthage Wins Punic Wars",
                        "After many gruelling wars with Rome, the mighty Carthage managed to pull out on top. What will the fate of the Mediterranean be now?",
                        "https://assets.editorial.aetnd.com/uploads/2009/10/gettyimages-534251372.jpg",
                        true, 2, nextYear, 7, true);

            civ["CAR"].state = "a";
            civ["CAR"].strong = true;
            civ["CAR"].name = "Carthaginian Empire";
            civ["CAR"].x -= 30;
            civ["CAR"].y += 10;

            civ["ROM"].state = 3;
            civ["ROM"].color = [98, 145, 140];
            civ["ROM"].name = "Rome";
            civ["ROM"].strong = false;
            civ["ROM"].size -= 2;
            civ["ROM"].x = 1330;
            civ["ROM"].y = 320;
            
            c.celtics = true;
            c.yearsCeltic = 0;
        }
    }
    if (civ["CAR"].techecon == 100) {
        worldNews("Battle of Cannae",
                    "Against all odds, Hannibal defeats Rome's biggest army. Current estimates are that over 70,000 Romans lay slain on the battlefield.",
                    "https://sites.psu.edu/successoftheromans/wp-content/uploads/sites/10644/2014/04/battle-of-cannae-struggle.jpg",
                    false, 4, nextYear, 2, false);
    }

    // Expansion of Rome
    if (civ["ROM"].strong) {
        if (civ["ROM"].techecon >= 597) {
            civ["ROM"].state = 6;
        } if (civ["ROM"].techecon >= 631) {
            civ["ROM"].state = 7;
        } if (civ["ROM"].techecon >= 681) {
            civ["ROM"].state = 8;
            if (civ["PER"].strong) {
                civ["PER"].state = 4;
            }
        } if (civ["ROM"].techecon >= 703) {
            civ["ROM"].state = "8a";
            civ["FRK"].strength = 0;
        } if (civ["ROM"].techecon >= 731) {
            civ["ROM"].state = 9;
        } if (civ["ROM"].techecon >= 752) {
            civ["ROM"].state = 10;
        } if (civ["ROM"].techecon >= 803) {
            civ["ROM"].state = "10a";
        }
    }

    if (nextYear == -44 && civ["ROM"].strong) {
        worldNews("Julius Caesar Assassinated",
                "After declaring himself emperor of Rome, Brutus and other conspirators have murdered him in cold blood. What will the fate of Rome be now?",
                "https://upload.wikimedia.org/wikipedia/commons/8/81/Death_of_Julius_Caesar_2.png",
                false, 13, nextYear, 2, true);
    }

    // Anno Domini
    if (nextYear == 33 && civ["ROM"].strong) {
        worldNews("Jesus is Crucified",
                "Condemned by Pilate, Jesus dies on the cross; followers mourn and Roman guards stand watch. However, his tomb was found empty and open 3 days later...",
                "https://cdn.britannica.com/59/12559-004-20DFD91C/Crucifixion-Andrea-Mantegna-Louvre-Paris.jpg",
                false, 19, nextYear, 3, true);
    }


    if (nextYear == 64 && civ["ROM"].strong) {
        worldNews("The Great Fire of Rome",
                "The fire rages six days, destroying ten districts. Nero blames the Christians for this. However, Nero was rumored to haved watched while playing the lyre.",
                "https://upload.wikimedia.org/wikipedia/commons/3/3e/Robert%2C_Hubert_-_Incendie_%C3%A0_Rome_-.jpg",
                false, 18, nextYear, 2, false);
    }
    if (nextYear == 79) {
        worldNews("Pompeii is Destroyed",
                "The violent eruption of Mount Vesuvius has buried the cities of Pompeii and Herculaneum in ash and rubble.",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Karl_Brullov_-_The_Last_Day_of_Pompeii_-_Google_Art_Project.jpg/1280px-Karl_Brullov_-_The_Last_Day_of_Pompeii_-_Google_Art_Project.jpg",
                false, 20, nextYear, 2, false);
    }

    // Rome Discovers America Continued
    if (rng(2) <= incrediblyUnlikely) {
        if (nextYear == 203) {
            civ["CSA"].strength = 3000;
            civ["CSA"].state = "a1";
            civ["CSA"].name = "Nova Christiana";
            civ["CSA"].x += 40;
        }
        if (nextYear == 221) {
            civ["CSA"].state = "a2";
        }
    }

    // Decline of Rome (200 AD)
    civ["ROM"].yearsDecline ++; // rng() fix
    if (civ["ROM"].strong && !civ["CAR"].strong && civ["ROM"].techecon == 953) {
        civ["ROM"].yearsDecline = 0;
    }
    if (civ["ROM"].yearsDecline == 86) {
        civ["ROM"].state = 11;
        civ["ROM"].name = "Western Roman Empire";
        civ["ROM"].x -= 50;
        civ["ROM"].y -= 10;
        civ["ROM"].size -= 4;
        civ["BYZ"].strength = 1250;
        civ["BYZ"].color = [178, 0, 0];
    }
    if (civ["ROM"].yearsDecline == 125) {
        civ["BYZ"].strength = 0;
        civ["ROM"].state = "10a";
        if (civ["ROM"].name == "Western Roman Empire") {
            civ["ROM"].name = "Roman Empire";
        }
        civ["ROM"].x += 50;
        civ["ROM"].y += 10;
        civ["ROM"].size += 4;
    }
    if (civ["ROM"].yearsDecline == 195) {
        civ["ROM"].state = 11;
        civ["ROM"].name = "Western Roman Empire";
        civ["ROM"].x -= 50;
        civ["ROM"].y -= 10;
        civ["ROM"].size -= 4;
        civ["BYZ"].strength = 1250;
        civ["BYZ"].color = [];
    }
    
    if (civ["ROM"].yearsDecline == 276) {
        // Fall of Rome
        if (rng(7) <= unlikely) {
            civ["ROM"].strength += 2000;
            civ["ROM"].name = "Rome";
            civ["ROM"].x += 80;
        } else {
            civ["GTH"].name = "Kingdom of Odoacer";
            civ["ROM"].strength = 0;
            civ["ROM"].strong = false;
            civ["BYZ"].name = "Byzantine Empire";
            worldNews("Fall of Rome",
                        `Odoacer, a Germanic chieftain, has deposed Augustulus, the last emperor of the Western Roman Empire. This event marks the fall of the Western Rome.`,
                        "https://images.aeonmedia.co/images/b1c9cc82-316d-4363-a17f-ae58867e71dc/essay-cole_thomas_the_course_of_empire_destruction_1836.jpg",
                        false, 42, nextYear, 2, true);
        }
    }

    /*
     *    BYZANTINE EMPIRE
     */

    if (nextYear == 550) {
        civ["BYZ"].state = 2;
    }
    if (nextYear == 677) {
        civ["BYZ"].state = 3;
    }
    if (nextYear == 766) {
        civ["BYZ"].state = 4;
    }
    if (nextYear == 1018) {
        civ["BYZ"].state = 5;
        civ["BUL"].strength = 0;
        civ["SER"].strength = 0;
    }
    if (nextYear == 1205) {
        civ["BYZ"].state = 4;
    }
    if (nextYear == 1400) {
        civ["BYZ"].size -= 5;
        civ["BYZ"].x += 30;
        civ["BYZ"].y -= 10;
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
        c.constantinopleSurvives = false;
        worldNews("Fall of Constantinople",
                    `After centuries of being the continuation of Rome, the city of Constantinople has finally fallen to the ${civ["OTT"].name}, marking the end of an era.`,
                    "https://onlineprinceton.princeton.edu/gallerytool/ghl2021/wp-content/uploads/sites/9/2021/09/fall-of-constantinople-1453.jpeg",
                    false, 48, nextYear, 3, true);
    }
    if (nextYear == 1458) {
    /*if (c.byzantium) {
        civ["OTT"].state = 2;
        civ["BYZ"].size += 3;
        civ["BYZ"].x -= 20;
    }*/
    }
    if (nextYear == 1477) {
        civ["BYZ"].state = 2;
    }
    if (nextYear == 1492) {
        /*if (c.byzantium) {
          civ["BYZ"].state = 1;
          civ["FAT"].strength = 0;
        }*/
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |    -=- GOTHS & CELTS -=-   |.
    |                            |.
    |  Alternate timelines:      |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/
    
    if (civ["ROM"].strength > 0 && civ["FRK"].state == null && civ["FRK"].strength == 0 && c.gaul_defeated == null) {
        worldNews("Rome Conquers Gaul",
            "Julius Caesar lead Roman legions into Gaul, initiating a major military campaign and ultimately subduing the region.",
            "https://upload.wikimedia.org/wikipedia/commons/9/93/Siege-alesia-vercingetorix-jules-cesar.jpg",
            false, 65, nextYear, 1, false);
        c.gaul_defeated = true;
    }

    if (nextYear == -1177) {
        civ["FRK"].strength = 3000;
    }

    // Gallic Empire
    if (civ["ROM"].yearsDecline == 60) {
        civ["FRK"].strength = 400;
        civ["FRK"].color = [32, 172, 160];
        civ["FRK"].state = 1;
        civ["FRK"].y -= 20;
        civ["FRK"].name = "Gallic Empire";

        civ["ENG"].strength = 400;
        civ["ENG"].color = [32, 172, 160];
        civ["ENG"].name = "";
        civ["ENG"].state = 9;
    }
    if (civ["ROM"].strong) {
        if (civ["ROM"].yearsDecline == 74) {
            civ["FRK"].strength = 0;
            civ["FRK"].color = [];
            civ["FRK"].name = "Francia";
    
            civ["ENG"].strength = 0;
            civ["ENG"].color = [];
            civ["ENG"].name = "Wessex";
            civ["ENG"].state = 1;
        }    
    }
    
    // Vandals
    if (civ["ROM"].yearsDecline == 238 && !civ["CAR"].strong) {
        if (civ["CAR"].strength <= 0) {
            civ["CAR"].name = "Vandals";
            civ["CAR"].strength = 100;
            civ["CAR"].x += 10;
            civ["CAR"].y += 20;
            civ["CAR"].color = [213, 158, 78];
        }
    }
    if (civ["ROM"].yearsDecline == 261) {
        civ["GTH"].strength = 500;
    }
    // Visigoths
    if (civ["ROM"].yearsDecline == 258) {
        civ["COR"].strength = 1000;
        civ["COR"].color = [217, 185, 42];
    }

    // Fall of Rome
    if (civ["ROM"].yearsDecline == 293) {
        civ["GTH"].name = "Ostrogothic Kingdom";
    }
    if (civ["ROM"].yearsDecline == 306) {
        civ["GTH"].state = 2;
    }
    if (civ["ROM"].yearsDecline == 353) {
        civ["GTH"].name = "";
    }
    if (civ["ROM"].yearsDecline == 392) {
        civ["GTH"].state = 3;
    }
    if (civ["ROM"].yearsDecline == 517) {
        civ["COR"].strength = 0;
        civ["COR"].state = 1;
        civ["COR"].color = [];
        civ["COR"].name = "Cordoba";
    }
    if (civ["ROM"].yearsDecline == 531) {
        civ["GTH"].state = 4;
        civ["GTH"].name = "Lombards";
        civ["GTH"].x = 1330;
        civ["GTH"].y = 325;
        civ["GTH"].size = 5;
    }

    // Celtic Timeline
    if (c.celtics) {
        c.yearsCeltic ++;
        if (c.yearsCeltic == 1) {
            civ["BRI"].name = "Armorica";
            civ["HRE"].name = "Germania";

            civ["FRA"].name = "Gaul";
            civ["FRA"].size += 2;
            civ["FRA"].adjective = "Gallic";

            civ["IRE"].name = "Celtic Kingdoms";
            civ["SCO"].name = "Pictland";

            civ["ENG"].name = "Prydain";
            civ["ENG"].defaultname = "Prydain";
            civ["ENG"].adjective = "Prydainian";

            civ["SPA"].name = "Hispania";
            civ["SPA"].adjective = "Hispanic";
        }
        if (c.yearsCeltic == rngRange(rng(39),200,400)) {
            civ["FRA"].strength = 3000;
        }
        if (c.yearsCeltic == rngRange(rng(40),200,400)) {
            civ["HRE"].strength = 3000;
        }
        if (c.yearsCeltic == rngRange(rng(41),300,500)) {
            civ["SPA"].strength = 3000;
            civ["SPA"].state = 5;
        }
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |       -=- KOREA -=-        |.
    |                            |.
    |  Alternate timelines:      |.
    |    - Korean War            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (civ["KOR"].name == "DPR. Korea") {
        civ["KOR"].color = [114, 30, 30];
    }

    if (nextYear == -300) {
        civ["KOR"].strength = 3000;
        civ["DRK"].strength = 3000;
        civ["DRK"].color = [110, 185, 200];
    }
    if (nextYear == -108) {
        civ["DRK"].strength = 0;
        civ["KOR"].state = 1;
        civ["KOR"].name = "Korea";
        civ["KOR"].y -= 20;
    }
    if (nextYear == 38) {
        civ["DRK"].strength = 3000;
        civ["DRK"].name = "Goguryeo";
        civ["KOR"].name = "Baekje";
    }
    if (nextYear == 454) {
        civ["KOR"].name = "Baekje / Silla";
    }
    if (nextYear == 454) {
        civ["KOR"].name = "Ungjin / Silla";
    }
    if (nextYear == 671) {
        civ["KOR"].name = "Silla";
        civ["DRK"].name = "Andong";
        civ["KOR"].state = 2;
    }
    if (nextYear == 700) {
        civ["DRK"].name = "Goguryeo";
    }
    if (nextYear == 820) {
        civ["DRK"].strength = 0;
    }
    if (nextYear == 892) {
        civ["KOR"].state = 1;
    }
    if (nextYear == 918) {
        civ["KOR"].name = "Goryeo";
    }
    if (nextYear == 937) {
        civ["KOR"].state = 2;
    }
    if (nextYear == 1392) {
        civ["KOR"].name = "Joseon";
    }
    if (nextYear == 1592) {
        /*if (RNG("Admiral_Yi",year) <= unlikely) {
          civ["KOR"].name = "";
        }*/
    }
    if (nextYear == 1944) {
        civ["KOR"].name = "Korea";
    }

    // Splitting of Korea
    if (nextYear == 1945) {
        civ["KOR"].strength = 500;
        civ["KOR"].y += 15;
        civ["KOR"].name = "S. Korea";

        civ["DRK"].strength = 400;
        civ["DRK"].state = 1;
        civ["DRK"].color = [];
        civ["DRK"].name = "N. Korea";
    }
    if (nextYear == 1953) {
        worldNews("The Korean War",
                "After a surprise invasion from North Korea, South Korea with the aid of others managed to hold them off, leading to the creation of a demilitarized zone.",
                "https://images04.military.com/sites/default/files/styles/full/public/2020-08/Korean%20War%20NKPA%201200.jpg",
                false, 33, nextYear-3, 3, true);
        if (rng(15) <= superUnlikely) {
          civ["KOR"].name = "DPR. Korea";
          civ["DRK"].strength = 0;
          civ["KOR"].y -= 10;
          civ["JAP"].x += 15;
        } else if (rng(15) <= veryUnlikely) {
          civ["DRK"].strength = 0;
          civ["KOR"].y -= 10;
          civ["JAP"].x += 15;
        } else if (rng(15) <= unlikely) {
          civ["DRK"].strength += 0;
        } else {
          civ["DRK"].state = 2;
        }
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |      -=- JAPAN -=-         |.
    |                            |.
    |  Alternate timelines:      |.
    |    - Mongols Invade Japan  |.
    |        Seed: da            |.
    |    - Christian Japan 1637  |.
    |        Seed: RK371Cp7      |.
    |    - Admiral Yi fails      |.
    |                            |.
    |                            |.
    |  Interwebs to fix:         |.
    |     - Philippies           |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (nextYear == oppositeYear+1) {
        civ["JAP"].adjective = "Japanese";
        civ["JAP"].color = [255, 200, 178];
    }

    if (nextYear == 250) {
        civ["JAP"].strength = 3500;
    }
    if (nextYear == 540) {
        civ["JAP"].state = 2;
        civ["JAP"].y -= 15;
    }
    worldNews("Taika Reform",
                "The imperial court of Japan successfully breaks the power of the Soga clan and begins centralization. Reforms are based on Chinese Confucioan ideals.",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Irukaansatsuzu.jpg/220px-Irukaansatsuzu.jpg",
                false, 21, 645, 2, false);
    if (nextYear == 659) {
        civ["JAP"].state = 3;
    }
    if (nextYear == 710) {
        civ["JAP"].name = "Japan";
        civ["JAP"].x += 25;
    }
    if (nextYear == 720) {
        civ["JAP"].state = 4;
    }

    worldNews("Fujiwara Clan Dominates",
                "The Fujiwara clan gains total control over the Japanese court by extensively marrying into the imperial family, producing several emperors.",
                "https://www.worldhistory.org/img/c/p/1200x627/6703.jpg",
                false, 22, 858, 5, false);
    if (nextYear == 1095) {
        civ["JAP"].state = 6;
    }
    // Disunited
    if (nextYear == 1180) {
        civ["JAP"].state = 5;
    }
    if (nextYear == 1185) {
        civ["JAP"].state = 6;
    }

    // Mongols
    if (rng(8) < unlikely && nextYear == 1274) {
        worldNews("Mongols Invade Japan",
                    "The Mongol fleet managed to land on the coast of Japan and swiftly conquers the island.",
                    "https://www.kcpinternational.com/wp-content/uploads/2015/04/HakataWall.jpg",
                    true, 25, nextYear, 3, true);
        civ["JAP"].name = "";
        civ["JAP"].color = [1, 170, 167];
    } else if (civ["MON"].state == 9 && nextYear == 1274) {
        worldNews("Typhoon Destroys Mongol Attack",
                "A storm has destroyed much of the Mongol fleet that was sailing to invade Japan.",
                "https://www.ancient-origins.net/sites/default/files/field/image/kamikaze_0.jpg",
                false, 23, nextYear, 2, true);
        worldNews("Typhoon Destroys Mongols Again",
            "Again, another storm has destroyed much of the Mongol fleet that was sailing to invade Japan. The Mongols are forced to abandon their plans.",
            "https://qph.cf2.quoracdn.net/main-qimg-25ca6470f9920e9d6c9ec2308554fe5b.webp",
            false, 24, nextYear+7, 2, true);
    }

    if (rng(8) < unlikely && nextYear == rngRange(rng(9),1279,1284)) {
        civ["JAP"].name = "Japan";
        civ["JAP"].color = [];
    }

    // Disunited again
    if (nextYear == 1467) {
        civ["JAP"].state = 5;
    }
    if (nextYear == 1590) {
        civ["JAP"].state = 6;
    }
    if (nextYear == 1603) {
        civ["JAP"].name = "Tokugawa Shogunate";
    }

    // Christian Rebellion
    if (nextYear == 1637 && rng(10) < veryUnlikely) {
        civ["JAP"].christian = true;
    } else if (nextYear == 1637 && rng(10) > veryUnlikely) {
        worldNews("The Shimabara Rebellion",
                    "Japanese Roman Catholics revolted in Kyushu, Japan, but were ultimately crushed.",
                    "https://static.wikia.nocookie.net/totalwar-ar/images/c/cd/Shimabara_Rebellion.jpg",
                    false, 26, nextYear, 2, false);
    }
    if (nextYear == rngRange(rng(11),1638,1640) && civ["JAP"].christian) {
        civ["JAP"].name = "Japan";
        civ["JAP"].color = [255, 200, 178];
        worldNews("Japan Becomes Christian",
                    "In the Shimabra Rebellion, Japanese Roman Catholics which revolted in Kyushu, were ultimately successful and have now taken over the government.",
                    "https://static.wikia.nocookie.net/totalwar-ar/images/c/cd/Shimabara_Rebellion.jpg",
                    true, 27, nextYear, 2, true);
    }
    if (civ["JAP"].yearsChristian == null) {
        civ["JAP"].yearsChristian = 0;
    }
    if (civ["JAP"].christian) {
        civ["JAP"].yearsChristian ++;
    }
    if (civ["JAP"].yearsChristian == rngRange(rng(12),50,100)) {
        civ["PHI"].owner = "JAP";
    }

    if (nextYear == 1700) {
        civ["JAP"].state = 7;
    }

    // End of Japanese Isolationism
    if (nextYear == 1854) {
        civ["JAP"].isolationism = false;
        civ["JAP"].color = [];
        civ["JAP"].state = 8;
    }
    if (nextYear == 1856) {
        civ["JAP"].state = 9;
    }
    if (nextYear == 1868 && civ["JAP"].name == "Tokugawa Shogunate") {
        civ["JAP"].name = "Japanese Empire";
        worldNews("The Meiji Restoration",
                    "The Tokugawa shôgun, who ruled Japan during the feudal period, has lost his power and the emperor has been restored to the supreme position.",
                    "https://origins.osu.edu/sites/default/files/styles/twitter_card_format/public/2023-01/Kenpohapu-chikanobu.jpg",
                    false, 28, nextYear, 2, false);
        civ["JAP"].yearsImperial = 0;
    }
    civ["JAP"].yearsImperial ++;

    // Japanese Imperialism
    if (civ["JAP"].yearsImperial == rngRange(rng(13),36,40)) {
        civ["KOR"].strength = 0;
        civ["JAPc"].strength = 40;
    }
    if (civ["JAP"].yearsImperial == rngRange(rng(13),36,40)+1) {
        if (rng(14) < unlikely) {
            civ["RUS"].manchuria = true;
            
            worldNews("Russo-Japanese War",
                    "A victorious Russia forced Japan to abandon its expansionist policy in East Asia, thereby cementing its influence in Manchuria and Korea.",
                    "https://www.loc.gov/loc/legacy/images/libguides/news/russo-japanese-war.jpg",
                    true, 29, nextYear, 2, true);
        } else {
            worldNews("Russo-Japanese War",
                    "A victorious Japan forced Russia to abandon its expansionist policy in East Asia, thereby becoming the first modern Asian power to defeat a European one.",
                    "https://assets.editorial.aetnd.com/uploads/2018/03/gettyimages-514890738.jpg",
                    false, 30, nextYear, 2, true);
        }
    }
    if (nextYear == 1932) {
        civ["JAPc"].state = 2;
        if (civ["RUS"].manchuria) {
            civ["JAPc"].color = [87, 126, 101];
            if (civ["RUS"].ideology == "communism") {
                civ["JAPc"].color = [124, 13, 24];
            }
        }
    }

    // WWII
    if (!civ["RUS"].manchuria) {
        if (nextYear == 1937) {
            civ["JAPc"].state = 3;
        }
        if (nextYear == 1941) {
            civ["JAPc"].state = 4;
        }
    }

    civ["JAP"].loses = true;
    if (civ["JAP"].loses) {
        if (nextYear == 1945) {
            civ["JAP"].name = "Japan";
            civ["JAP"].state = 8;
            worldNews("Hiroshima & Nagasaki Bombed",
                        `An ${c.newWorld}n B-29 bomber dropped the world's first deployed atomic bombs over Japan. Casualties are estimated to be in the hundreds of thousands.`,
                        "https://assets.nationbuilder.com/ican/pages/321/meta_images/original/header-hiroshimadamage.jpg?1579887815",
                        false, 31, nextYear, 2, true);
            worldNews("Japan Surrenders",
                        "After the atomic bombings over Japan, the government has unconditionally surrendered to the United States.",
                        "https://cdn.aarp.net/content/dam/aarp/politics/events-and-history/2020/08/1140-vj-day-times-square-flag.imgcache.rev3b2f37bf6356a65ebe23b52c068e42cc.jpg",
                        false, 32, nextYear, 2, true);
            civ["KOR"].strength = 500;
            civ["VIE"].strength = 500;
        }
    }

    // Big Japan
    if (civ["JAP"].big && !civ["JAP"].loses) {
        civ["ALA"].color = [255, 200, 178];
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |     -=- MONGOLS -=-        |.
    |                            |.
    |   Alternate timelines:     |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (nextYear == -209) {
        civ["MON"].strength = 447;
        civ["MON"].color = [110, 110, 110];
    }
    if (nextYear == 95) {
        civ["MON"].name = "Xianbei";
    }
    if (nextYear == 155) {
        civ["MON"].state = 2;
        civ["MON"].x -= 10;
    }
    if (nextYear == 238) {
        civ["MON"].strength = 0;
    }
    if (nextYear == 330) {
        civ["MON"].strength = 300;
        civ["MON"].name = "Rouran Khaganate";
        civ["MON"].x -= 60;
    }
    
    if (nextYear == 547) {
        civ["TUR"].x += 380;
        civ["TUR"].size += 5;
    }
    if (nextYear == 582) {
        civ["TUR"].name = "W. Turkish Khaganate / E. Turkish Khaganate";
        civ["TUR"].size -= 3;
        civ["TUR"].x -= 150;
        civ["MON"].strength = 0;
    }

    // MONGOL EMPIRE \\
    if (nextYear == 1205) {
        civ["MON"].strength = 551;
        civ["MON"].x -= 30;
        civ["MON"].name = "Mongol Empire";
        civ["MON"].color = [];
    }
    if (nextYear == 1210) {
        civ["RUS"].state = 4;
        civ["RUS"].name = "";
    }
    if (nextYear == 1215) {
        civ["MON"].state = 2;
    }
    if (nextYear == 1220) {
        civ["MON"].state = 3;
        civ["CHI"].y += 30;
    }
    if (nextYear == 1230) {
        civ["MON"].state = 4;
    }
    if (nextYear == 1237) {
        civ["MON"].state = 5;
    }
    if (nextYear == 1242) {
        civ["MON"].state = 6;
    }
    if (nextYear == 1248) {
        civ["MON"].state = 7;
    }
    if (nextYear == 1260) {
        civ["MON"].state = 8;
    }
    if (nextYear == 1265) {
        civ["MON"].state = 9;
    }
    // Collapse of Mongol Empire
    if (nextYear == 1387) {
        civ["MON"].state = 10;
        civ["MON"].name = "N. Yuan";
        civ["MON"].x += 90;
        civ["MON"].size -= 2;
    }

    if (nextYear == 1678) {
        civ["MON"].state = 11;
        civ["MON"].x -= 70;
        civ["MON"].size -= 4;
        civ["MON"].name = "Dzungar Khanate";
    }
    if (nextYear == 1720) {
        civ["MON"].state = 12;
    }
    if (nextYear == 1912) {
        civ["MON"].strength = 300;
        civ["MON"].state = 13;
        civ["MON"].name = "Mongolia";
        civ["MON"].x = 1840;
        civ["MON"].y = 280;
        civ["MON"].size += 2;
    }
    if (nextYear == 1920 &&
        civ["MON"].state == 13
    ) {
        if (rng(114) <= unlikely) {
            civ["MON"].state = "a";
        }
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |     -=- FRANCE -=-         |.
    |                            |.
    |   Alternate timelines:     |.
    |      - Battle of Tours     |.
    |          Seed: 49Ft9L33    |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (nextYear == oppositeYear+1) {
        civ["FRA"].adjective = "French";
        civ["FRA"].defaultname = "France";
        civ["FRA"].color = [57, 113, 228];
    }

    if (civ["ROM"].yearsDecline == 281) {
        civ["FRK"].strength = 1500;
    }
    if (civ["ROM"].yearsDecline == 307) {
        civ["FRK"].state = 2;
        civ["FRK"].y += 20;
    }
    if (civ["ROM"].yearsDecline == 428) {
        civ["AQU"].strength = 573;
        civ["AQU"].color = [37, 44, 181];
    }
    // Battle of Tours
    if (civ["ROM"].yearsDecline == 532 && civ["ISL"].strong) {
        if (rng(26) < veryUnlikely) {
            worldNews("Muslim Victory at the Battle of Tours",
                        "The Umayyad forces have defeated Charles Martel and the Frankish army at the Battle of Tours. This victory potentially opens a door for further Islamic expansion.",
                        "https://qph.cf2.quoracdn.net/main-qimg-272faf350bb8c1f66ececa985fd264af-lq",
                        true, 45, nextYear, 3, true);
            
            civ["COR"].strong = true;
            civ["COR"].name = "Al-Andalus";
            civ["COR"].state = 0;
            civ["COR"].x -= 10;
            civ["AQU"].name = "";
            civ["AQU"].color = [32, 90, 13];
            civ["FRA"].y -= 15;
            civ["SPAc"].owner = "ENG";
            civ["BRA"].owner = "FRA";
            //colonizeNewWorld["SPA"] = 0;
        } else {
            civ["COR"].state = 1;
            worldNews("Battle of Tours",
                        "Charles Martel has achieved a decisive victory over the Umayyad forces, halting the advance of Islamic expansion into Western Europe.",
                        "https://cdn.britannica.com/98/141098-050-FB0C37D5/Battle-of-Poitiers-canvas-Charles-de-Steuben.jpg",
                        false, 44, nextYear, 3, true);
        }
    }
    if (civ["ROM"].yearsDecline == 566) {
        civ["FRK"].state = 3;
    }
    if (civ["ROM"].yearsDecline == 568 && !civ["COR"].strong) {
        civ["AQU"].strength = 0;
    }
    if (civ["ROM"].yearsDecline == 579) {
        civ["FRK"].state = 4;
        civ["BRI"].strength = 573;
    }
    if (civ["ROM"].yearsDecline == 600 && !civ["COR"].strong) {
        worldNews("Charlemagne Crowned Emperor",
                    "On Christmas Day, Pope Leo III has crowned Charlemagne as the Emperor of the Romans, marking a restoration of Western Europe.",
                    "https://c1.staticflickr.com/1/649/22690436826_3af9bb034e_b.jpg",
                    false, 46, nextYear, 2, true);
    }

    // Treaty of Verdun    
    if (civ["ROM"].yearsDecline == 642) {
        civ["HRE"].strength = 1600;
        civ["FRA"].strength = 2600;
        civ["ITA"].strength = 2600;
    }
    if (nextYear == 843) {
        civ["FRK"].strength = 0;
        /*if (!c.roman_empire) {
          civ["GTH"].strength = 0;
        }*/
    }
    if (nextYear == 855) {
        civ["FRA"].state = 2;
    }
    if (nextYear == 1040) {
        civ["FRA"].state = 3;
    }
    // Wars against Muslims*
    if (nextYear == 1100 && civ["COR"].strong) {
        civ["AQU"].strength = 2000;
        civ["AQU"].color = [];
        civ["AQU"].name = "Aquitaine";
    }

    if (nextYear == 1637) {
        civ["FRA"].state = 4;
    }

    // Napoleonic Wars
    if (nextYear == 1796) {
        if (c.pax_francia) {
          c.napoleonic_wars = false;
        }
    }
    if (c.napoleonic_wars) {
        if (nextYear == 1796) {
            civ["FRA"].state = 5;
            civ["DUT"].name = "Bat.";
            civ["SWI"].name = "Helvetica";
            civ["DUT"].color = [74, 124, 226];
            civ["SWI"].color = [74, 124, 226];
        }
        if (nextYear == 1806) {
            civ["HRE"].name = "Confed. of Rhine";
            civ["FRA"].state = 6;
        }
        if (nextYear == 1807) {
            civ["FRA"].state = 7;
            civ["GER"].state = 4;
        }
        if (nextYear == 1812) {
            civ["SWE"].state = 6;
            civ["FRA"].state = 8;
        }
        if (nextYear == 1813) {
            civ["FRA"].state = 7;
        }
        if (nextYear == 1814) {
            civ["FRA"].state = 5;
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
            if (!civ["AUS"].strong) {
                civ["GER"].state = 6;
            }
            civ["DUT"].state = 2;
            civ["DUT"].name = "Neth.";
            civ["DUT"].y += 5;
            civ["DUT"].x -= 8;
            civ["DUT"].color = [226, 145, 83];
            civ["SWI"].name = "Switzerland";
            civ["SWI"].color = [];
            civ["SWE"].state = 5;
            civ["FRA"].state = 4;
            //}
        }
    }

    // Communist France
    if (nextYear == 1922) {
        /*if (c.kaiserreich) {
          civ["FRA"].name = "French Commune";
          civ["FRAx"].name = "French Republic";
        }*/
    }

    // [France]
    switch (civ["FRA"].ideology) {
        case "communism":
            civ["FRA"].color = [213, 68, 68];
            civ["FRA"].name = "French Commune";
            break;
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |     -=- GERMANY -=-        |.
    |                            |.
    |   Alternate timelines:     |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (nextYear == oppositeYear+1) {
        civ["GER"].adjective = "German";
        civ["GER"].defaultname = "Germany";
        civ["GER"].color = [72, 70, 67];

        civ["AUS"].adjective = "Austrian";
        civ["AUS"].defaultname = "Austria";
        civ["AUS"].color = [208, 213, 231];
    }

    if (nextYear == 855) {
        civ["HRE"].state = 2;
    }
    if (nextYear == 1040) {
        civ["HRE"].state = 3;
    }
    if (nextYear == 1060) {
        civ["HRE"].state = 4;
    }
    if (nextYear == 1450) {
        civ["AUS"].strength = 1000;
    }
    if (nextYear == 1477) {
        civ["AUS"].state = 2;
    }
    if (nextYear == 1525) {
        civ["AUS"].state = 3;
    }
    if (nextYear == 1533) {
        // Expansion of Austria
        civ["AUS"].state = 4;
        civ["HUN"].strength = 0;
        civ["AUS"].x += 20;
        civ["AUS"].size += 3;
    }
    if (nextYear == 1615) {
        civ["GER"].strength = 2000;
    }
    if (nextYear == 1637) {
        civ["GER"].state = 2;
    }
    if (nextYear == 1649) {
        civ["SWI"].strength = 5000;
    }
    if (nextYear == 1686) {
        civ["AUS"].state = 5;
    }
    if (nextYear == 1714) {
        civ["AUS"].state = 6;
        civ["DUT"].state = 1;
    }    
    if (nextYear == 1740) {
        civ["GER"].state = 3;
    }
    if (nextYear == 1804) {
        civ["AUS"].state = 9;
    }

    // Unification of Germany
    if (nextYear == 1867) {
        civ["GER"].state = 7;
        civ["GER"].name = "N. German Confed."
        civ["GER"].x -= 30;
        civ["GER"].y += 5;
        civ["GER"].size += 2;
        if (civ["AUS"].strong) {civ["GER"].name = "Prussia";}
        civ["AUS"].name = "Austria-Hungary";
        civ["AUS"].state = 10;
    }
    if (nextYear == 1871) {
        c.unified_germany = true;
        if (c.french_victory || c.pax_francia || civ["AUS"].strong) {
          c.unified_germany = false;
        } else {
            civ["GER"].name = "Germany";
            civ["GER"].state = 8;
            civ["HRE"].strength = 0;
        }
    }
    if (nextYear == 1920) {
        // Fate of Austria
        if (civ["AUS"].state != 11) {
          if (rng(33) <= unlikely) {
            civ["AUS"].name = "Triple Monarchy";
            civ["AUS"].state = "b";
          } else if (rng(33) <= likely) {
            civ["AUS"].state = "a";
            civ["AUS"].name = "United States of Austria";
            civ["HUN"].strength = 0;
          }
        }
    }

    // Fascist Germany
    if (nextYear == 1933) {
        if (c.ww2) {
            civ["GER"].name = "German Reich";
            civ["GER"].fascist = true;
        }
    }
        
    // Modern Era
    if (nextYear == 1989 &&
        civ["GERe"].strength > 0 &&
        c.cold_war
    ) {
        worldNews(`Berlin Wall Falls`,
                    `The Berlin Wall has been opened as East German authorities lift restrictions, signaling the approaching end of the Cold War.`,
                    "https://www.magnumphotos.com/wp-content/uploads/2019/09/cortex/par85047.jpg",
                    false, 90, nextYear, 1, true);
    }
    if (nextYear == 1990 &&
        c.ww2 && !c.fuhrerreich && !c.orwell1984 &&
        civ["GERe"].strength > 0
    ) {
        worldNews(`Germany Reunified`,
                    `East and West Germany reunite after decades of division, restoring unity and perhaps signaling the end of the Cold War in Europe.`,
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw1XqM-X_SxmU5TSIDC2Cy7t7nHtlFOvj5jw&s",
                    false, 69, nextYear, 2, true);

        civ["GER"].ideology = "democracy";
        civ["GER"].name = "Germany";
        civ["GER"].size ++;
        if (civ["GERe"].state == 2) {
            civ["GER"].state = 'c';
        } else {
            civ["GER"].state = 16;
        }
        civ["GERe"].strength = 0;

        civ["EU"].merge = ["FRA","GER","ITA","DUT","BEL","SPA","POR","IRE"];
        civ["EU"].merge.push("GERe");
    
    }

    switch (civ["GER"].ideology) {
        case "communism":
            civ["GER"].color = [152, 33, 33];
            break;
        default:
            civ["GER"].color = [];
    }

    // [Germany]

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |      -=- BENELUX -=-       |.
    |                            |.
    |   Alternate timelines:     |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (nextYear == oppositeYear+1) {
        civ["DUT"].adjective = "Dutch";
        civ["DUT"].defaultname = "Netherlands";
        civ["DUT"].color = [226, 145, 83];

        civ["BEL"].adjective = "Belgian";
        civ["BEL"].defaultname = "Belgium";
        civ["BEL"].color = [196, 175, 8];
    }

    if (nextYear == 1582) {
        civ["DUT"].strength = 653;
    }
    if (nextYear == 1705) {
        civ["DUT"].state = 2;
    }
    if (nextYear == 1830) {
        civ["BEL"].strength = 2250;
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |   -=- BRITISH ISLES -=-    |.
    |                            |.
    |   Alternate timelines:     |.
    |         ? Celts            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (civ["ENG"].name == " ") {
        civ["ENG"].color = [153, 115, 93];
    } else if (civ["ENG"].name == civ["ENG"].defaultname) {
        civ["ENG"].color = [223, 147, 147];
    }

    if (nextYear == oppositeYear+1) {
        civ["ENG"].defaultname = "England";
        civ["ENG"].adjective = "British";
        civ["ENG"].color = [223, 147, 147];
        civ["ENG"].merge = [];
    }
    if (nextYear == 519) {
        civ["ENG"].strength = 3000;
    }
    if (nextYear == 690) {
        civ["ENG"].state = 2;
    }
    if (nextYear == 850) {
        civ["ENG"].state = 3;
        civ["ENG"].x = 1225;
        civ["ENG"].y = 235;
    }  
    if (nextYear == 900) {
        civ["ENG"].state = 4;
    }
    if (nextYear == 928) {
        civ["ENG"].name = civ["ENG"].defaultname;
        civ["ENG"].state = 5;
    }
    if (nextYear == 1000) {
        civ["IRE"].strength = 2250;
    }

    // Vikings
    if (nextYear == 1016) {
        civ["ENG"].name = " ";
        civ["DEN"].name = "North Sea Empire";
        civ["DEN"].x -= 60;
    }

    if (nextYear == 1155) {
        civ["ENG"].state = 6;
    }
    if (nextYear == 1205) {
        civ["ENG"].state = 7;
    }
    if (nextYear == 1280) {
        civ["SCO"].strength = 1250; // fix
        civ["ENG"].state = 8;
        civ["THA"].strength = 1250;
        civ["NAP"].name = "Naples";
    }
    if (nextYear == 1480) {
        civ["ENG"].state = 9;
    }
    if (nextYear == 1545) {
        civ["ENG"].state = 10;
    }
    if (nextYear == 1588) {
        c.englandDefeatsSpanishArmada = true;
    }
    if (nextYear == 1649) {
        civ["ENG"].name = "Great Britain";
        civ["ENG"].y -= 20;
        civ["ENG"].x -= 20;
        civ["ENG"].state = 11;
    }

    if (nextYear == 1707) {
        civ["SCO"].strength = 0;
    }
    if (nextYear == 1801) {
        civ["ENG"].name = "United Kingdom";
    }
    if (nextYear == 1922) {
        civ["ENG"].state = 12;
        civ["IRE"].name = "Ireland";
        civ["IRE"].state = 2;
        civ["IRE"].x = 1190;
        civ["IRE"].y = 230;
        civ["IRE"].size = 5;
    }

    // Communist UK
    if (nextYear == 1926) {
        // Post WW1 - UK Revolution
        if (rng(107) <= unlikely && c.kaiserreich) {
            civ["ENG"].name = "Union of Britain";
        }
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |-=- SCANDINAVIA / NORDIC -=-|.
    |                            |.
    |   Alternate timelines:     |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (nextYear == oppositeYear+1) {
        civ["DEN"].adjective = "Danish";
        civ["DEN"].defaultname = "Denmark";
        civ["DEN"].color = [153, 115, 93];

        civ["SWE"].adjective = "Swedish";
        civ["SWE"].defaultname = "Sweden";
        civ["SWE"].color = [53, 179, 242];
    }

    if (nextYear == 800) {
        civ["NOR"].strength = 2600;
        civ["SWE"].strength = 2600;
        civ["DEN"].strength = 2600;
    }
    if (nextYear == 860) {
        civ["ICE"].strength = 2600;
    }
    if (nextYear == 882) {
        civ["ICE"].state = 2;
    }
    if (nextYear == 970) {
        civ["NOR"].name = "";
    }
    if (nextYear == 1035) {
        civ["NOR"].name = "Norway";
        civ["DEN"].name = "Denmark";
        civ["DEN"].x += 60;
        civ["ENG"].name = civ["ENG"].defaultname;
    }
    if (nextYear == 1260) {
        civ["SWE"].state = 2;
    }
    if (nextYear == 1263) {
        civ["ICE"].name = "Iceland (Nor.)"
    }
    if (nextYear == 1320) {
        civ["NOR"].name = " ";
    }
    if (nextYear == 1397) {
        civ["SWE"].name = "Kalmar Union";
        civ["SWE"].state = 7;
        civ["NOR"].name = "";
        civ["DEN"].strength = 0;
    }
    if (nextYear == 1357) {
        civ["NOR"].name = "Norway";
    }
    if (nextYear == 1450) {
        civ["DEN"].strength = 2000;
        civ["SWE"].state = 2;
        civ["SWE"].name = "Sweden";
        civ["NOR"].name = " ";
    }

    if (nextYear == 1451) {
        civ["NOR"].name = "Norway";
    }
    if (nextYear == 1458) {
        civ["SWE"].name = "Kalmar Union";
        civ["SWE"].state = 7;
        civ["NOR"].name = "";
        civ["DEN"].strength = 0;
    }
    if (nextYear == 1468) {
        civ["DEN"].strength = 2000;
        civ["SWE"].state = 2;
        civ["SWE"].name = "Sweden";
    }
    if (nextYear == 1498) {
        civ["SWE"].name = "Kalmar Union";
        civ["SWE"].state = 7;
        civ["NOR"].name = "";
        civ["DEN"].strength = 0;
    }
    if (nextYear == 1501) {
        civ["DEN"].strength = 2000;
        civ["SWE"].state = 2;
        civ["SWE"].name = "Sweden";
    } 
    if (nextYear == 1524) {
        civ["ICE"].owner = "DEN";
    }
    if (nextYear == 1590) {
        civ["SWE"].state = 3;
        civ["NOR"].state = 2;
    }
    if (nextYear == 1605) {
        civ["DENc"].strength = 2250;
        civ["DENc"].owner = "DEN";
    }
    if (nextYear == 1625) {
        civ["SWE"].state = 4;
    }
    if (nextYear == 1658) {
        civ["DEN"].state = 3;
    }

    if (nextYear == 1710) {
        civ["SWE"].state = 3;
    }
    if (nextYear == 1880) {
        civ["DENc"].state = 3;
    }
    if (nextYear == 1905) {
        civ["SWE"].state = 6;
        civ["NOR"].name = "Norway";
        civ["NOR"].state = 3;
    }

    if (nextYear == 1979) {
        civ["DENc"].owner = "none";
        civ["DENc"].x -= 30;
        civ["DENc"].y -= 75;
        civ["DENc"].size += 5;
    }

    owner(civ,"ICE",[125, 130, 223],"Iceland","Iceland",false);
    owner(civ,"DENc",[175, 144, 125],"Greenland","Greenland",false);

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |     -=- ITALY -=-          |.
    |                            |.
    |   Alternate timelines:     |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (nextYear == oppositeYear+1) {
        civ["ITA"].adjective = "Italian";
        civ["ITA"].defaultname = "Italy";
        civ["ITA"].color = [86, 167, 79];
    }

    if (nextYear == 750) {
        civ["VEN"].strength = 2600;
    }
    if (nextYear == 757 && !c.celtics) {
        civ["PAP"].strength = 2600;
    }
    if (nextYear == 855) {
        civ["ITA"].state = 2;
    }
    if (nextYear == 1018) {
        civ["GEN"].strength = 2600;
    }
    if (nextYear == 1040) {
        civ["ITA"].state = 3;
    }
    if (nextYear == 1127 && !c.celtics) {
        civ["NAP"].strength = 1250;
        civ["NAP"].color = [61, 31, 194];
    }
    if (nextYear == 1350) {
        civ["PAP"].state = 2;
    }
    if (nextYear == 1649) {
        civ["ITA"].state = 4;
    }
    if (nextYear == 1714) {
        civ["ITA"].state = 5;
    }
    if (nextYear == 1779) {
        civ["PAP"].state = 1;
    }

    // Italian Unification
    if (nextYear == 1859) {
        civ["ITA"].state = 6;
        civ["GEN"].strength = 0;
        civ["VEN"].strength = 0;
        civ["NAP"].strength = 0;
    }
    if (nextYear == 1860) {
        civ["ITA"].name = "Italy";
        civ["ITA"].x = 1330;
        civ["ITA"].y = 320;
        civ["ITA"].size = 7;
        civ["ITA"].adjective = "Italian";
        civ["ITA"].color = [86, 167, 79];
    }
    if (nextYear == 1871) {
        civ["PAP"].strength = 0;
        civ["PAP"].name = "Vatican City";
    }

    // Modern Era
    if (nextYear == 1947) {
        civ["ITA"].state = 7;
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |     -=- BALKANS -=-        |.
    |                            |.
    |   Alternate timelines:     |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (nextYear == 635) {
        civ["BUL"].strength = 2250;
    }
    if (nextYear == 680) {
        civ["BUL"].state = 2;
        civ["BUL"].x -= 40;
        civ["BUL"].y += 25;
    }
    if (nextYear == 785) {
        civ["SER"].strength = 2600;
    }
    if (nextYear == 810) {
        civ["BUL"].state = 3;
    }
    if (nextYear == 896) {
        civ["BUL"].state = 4;
    }
    if (nextYear == 970) {
        civ["BUL"].state = 5;
    }
    if (nextYear == 1045) {
        civ["SER"].strength = 2000;
    }
    if (nextYear == 1190) {
        civ["BUL"].strength = 600;
        civ["BUL"].state = 6;
    }
    if (nextYear == 1340) {
        civ["SER"].state = 2;
    }
    if (nextYear == 1400) {
        civ["BUL"].strength = 0;
    }
    if (nextYear == 1474) {
        civ["SER"].strength = 0;
    }

    if (nextYear == 1822) {
        //if (!c.byzantium) {
        civ["GRE"].strength = 500;
        civ["GRE"].name = "Greece";
        civ["GRE"].state = 7;
        civ["GRE"].x = 1395;
        civ["GRE"].y = 346;
        civ["GRE"].size = 4;
        //}
    }
    if (nextYear == 1921) {
        civ["GRE"].state = 11;
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
    if (nextYear == 1995) {
        if (rng(108) <= unlikely) {
            civ["SER"].strength += 100;
        } else {
            worldNews(`Yugoslavia Breaks Apart`,
                        `Ethnic tensions, nationalist movements, and political collapse have lead to the breakup of Yugoslavia.`,
                        "https://upload.wikimedia.org/wikipedia/commons/a/a4/Map_of_war_in_Yugoslavia%2C_1993.png",
                        false, 70, nextYear, 2, false);
            civ["SER"].state = 6;
            civ["SER"].name = "Serbia";
            civ["SER"].x += 5;
            civ["BUL"].name = "Bulgaria";
        }
    }
    if (nextYear == 2008) {
        if (civ["SER"].name == "Serbia" && !civ["HUN"].strong) {
            civ["SER"].state = 7;
        }
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |  -=- EASTERN EUROPE -=-    |.
    |                            |.
    |   Alternate timelines:     |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (nextYear >= 1900) {
        civ["HUN"].color = [255, 125, 96];
    }

    if (nextYear == 896) {
        civ["HUN"].strength = 2600;
    }
    if (nextYear == 962) {
        civ["POL"].strength = 2700;
    }
    if (nextYear == 1000) {
        civ["POL"].state = 3;
    }
    if (nextYear == 1009) {
        civ["POL"].state = 1;
    }
    if (nextYear == 1100) {
        civ["HUN"].state = 2;
    }
    if (nextYear == 1120) {
        civ["POL"].state = 2;
    }
    if (nextYear == 1127) {
        civ["HUN"].state = 3;
    }
    if (nextYear == 1200) {
        civ["CZE"].strength = 2550;
    }
    if (nextYear == 1230) {
        civ["LIV"].strength = 2080;
    }

    if (nextYear == 1240) {
        civ["LIT"].strength = 2080;
    }
    if (nextYear == 1313) {
        civ["LIT"].state = 2;
    }
    if (nextYear == 1330) {
        civ["CZE"].state = 2;
    }
    if (nextYear == 1340) {
        civ["POL"].state = 4;
    }

    if (nextYear == 1350) {
        civ["ROA"].strength = 2250;
        c.ottoman_romania = true;
    }
    if (nextYear == 1363) {
        civ["LIT"].state = 3;
    }
    if (nextYear == 1468) {
        civ["POL"].state = 4;
    }
    if (nextYear == 1513) {
        civ["LIT"].state = 4;
    }
    if (nextYear == 1525) {
        civ["LIV"].name = "Livonia";
        civ["CZE"].strength = 0;
    }
    if (nextYear == 1563) {
        civ["LIV"].strength = 0;
    }
    if (nextYear == 1570) {
        // Polish-Lithuania
        civ["POL"].state = 5;
        civ["POL"].name = "Poland-Lithuania";
        civ["LIT"].strength = 0;
    }
    if (nextYear == 1580) {
        civ["POL"].state = 6;
    }
    if (nextYear == 1590) {
        civ["POL"].state = 7;
    }

    // Partition of Poland...
    if (!civ["AUS"].strong) {
        if (nextYear == 1773) {
            civ["GER"].state = 4;
            civ["AUS"].state = 7;
        }
        if (nextYear == 1795) {
            civ["POL"].strength = 0;
            civ["POL"].name = "Poland";
            civ["GER"].state = 5;
            civ["AUS"].state = 8;
        }
    }
    if (nextYear == 1773) {
        civ["RUS"].state = 9;
    }

    // Balkan Independence
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
    }
    if (nextYear == 1880) {
        civ["GRE"].state = 8;
    }
    if (nextYear == 1912) {
        civ["SER"].state = 4;
        civ["BUL"].state = 7; // fix
        civ["GRE"].state = 9;
    }
    if (nextYear == 1913) {
        //if (!c.byzantium) {
        civ["ALB"].strength = 696;
        //}
    }
    if (nextYear == 1914) {
        if (rng(34) <= unlikely) {
          civ["ALB"].state = 2;
          c.big_albania = true;
        }
    }

    // Modern Era
    if (nextYear == 1920) {
        civ["LIV"].strength = 20;
        civ["LIT"].strength = 20;
        civ["LIT"].state = 5;
    }
    if (nextYear == 1993) {
        civ["ABY"].state = 5;
        if (rng(81) <= unlikely) {
            civ["CZE"].strength += 100;
        } else if (!civ["HUN"].strong) {
            civ["CZE"].state = 5;
            civ["CZE"].name = "Czechia Slovakia";
            civ["CZE"].x -= 15;
        }
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |      -=- RUSSIA -=-        |.
    |                            |.
    |   Alternate timelines:     |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (nextYear == oppositeYear+1) {
        civ["RUS"].adjective = "Russian";
        civ["RUS"].defaultname = "Russia";
        civ["RUS"].color = [73, 112, 87];
        civ["RUS"].merge = [];
    } 

    if (nextYear == 860) {
        civ["RUS"].strength = 3000;
    }
    if (nextYear == 912) {
        civ["RUS"].state = 2;
    }
    if (nextYear == 1040) {
        civ["RUS"].state = 3;
    }
    if (nextYear == 1509) {
        civ["RUS"].state = 5;
        civ["RUS"].y -= 30;
        civ["RUS"].name = "Novogrod";
    }
    if (nextYear == 1594) {
        civ["RUS"].state = 6;
        civ["RUS"].name = "Russian Empire";
    }
    if (nextYear == 1637) {
        civ["RUS"].state = 7;
    }
    if (nextYear == 1710) {
        civ["RUS"].merge = ["FIN","LIV"];
    }
    if (nextYear == 1765) {
        civ["RUS"].state = 8;
    }
    if (nextYear == 1900) {
        civ["RUS"].state = 10;
        civ["GEO"].strength = 0;
        civ["ARM"].strength = 0;
    }
    if (nextYear == 1906) {
        civ["RUS"].state = 11;
    }
    if (nextYear == 1920) {
        civ["SIB"].state = 3;
        civ["SIB"].x = 1810;
        civ["SIB"].y = 240;
        civ["SIB"].size = 4;
        civ["SIB"].name = "Tannu Tuva";

        // Russian Revolution
        if (rng(109) <= unlikely) {
            worldNews(`Monarchy Restored Russia`,
                        `Monarchist forces have prevailed in the Russian Civil War, restoring the imperial throne and halting the spread of revolutionary socialism.`,
                        "https://preview.redd.it/could-and-what-if-the-white-guard-won-the-russian-civil-war-v0-s4nlum2t61oa1.jpg?width=640&crop=smart&auto=webp&s=b1cad38b6ed23e31e56bae32e612ff47005e4f33",
                        true, 72, nextYear, 2, true);

            civ["RUS"].ideology = "monarchism";
            civ["RUS"].color = [73, 112, 87];
            civ["RUS"].name = "Russian Empire";
        } else {
            worldNews(`Bolsheviks Win Revolution`,
                        `The Bolsheviks have prevailed in the Russian Civil War, overthrowing the old order and establishing a socialist state under Soviet rule.`,
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdNTsyFiqhOrt8b6tnK2bat4rCDsWgggSBJg&s",
                        false, 71, nextYear, 2, true);

            civ["RUS"].name = "Red Army";
            civ["RUS"].size += 4;
            civ["RUS"].y += 10;
            civ["RUS"].ideology = "communism";
        }
    }
    if (nextYear == 1922) {
        if (civ["RUS"].ideology == "communism") {
            civ["RUS"].name = "Soviet Union";
        }
    }

    if (nextYear == 1991 &&
        c.cold_war &&
        c.superpowers.includes("USA") &&
        c.superpowers.includes("RUS") &&
        !c.orwell1984
    ) {
        if (rng(95) <= impossible) {
            // USA loses?
            worldNews(`United States Dissolves`,
                        `The federal government officially disbands as states declare independence, marking the collapse of the Union.`,
                        "https://st3.depositphotos.com/1106005/13144/i/450/depositphotos_131445752-stock-photo-divided-we-fall-message.jpg",
                        true, 68, nextYear, 3, true);

            civ["USA"].state = "b";
            civ["USA"].name = "U.S. Anarchy";
            civ["USA"].x += 110;
            civ["CAN"].strength += 500;
            civ["ALA"].strength += 500;
            civ["USA"].merge = [];
        } else if (rng(95) <= superUnlikely) {
            worldNews(`United States Fractures`,
                        `Political fractures and state defiance have weaken federal authority to its breaking point as regional alliances emerge, signaling the end of American unity.`,
                        "https://i.redd.it/sq9sjgekg95z.png",
                        true, 67, nextYear, 2, true);

            civ["USA"].state = "a";
            civ["USA"].name = "Disunited States of America";
            civ["USA"].size -= 3;
            civ["USA"].x += 30;
            civ["CAN"].strength += 500;
            civ["ALA"].strength += 500;
            civ["ORE"].strength = 0;
        } else if (civ["RUS"].ideology == "communism") {
            // Fall of the Soviet Union
            worldNews(`Soviet Union Dissolves`,
                        `Following economic decline, nationalist movements, and failed reforms, the Soviet Union is formally dissolved, finally ending the Cold War.`,
                        "https://upload.wikimedia.org/wikipedia/en/3/31/Lowering_the_Soviet_Flag.png",
                        false, 66, nextYear, 2, true);
                        
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
            c.occupied_iran = false;
        }
    }
    if (nextYear == 1999) {
        // Drying of the Aral Sea...
        if (civ["lakes"].state == 2) {
          civ["lakes"].strength = 0;
        }
    }
    if (nextYear == 2014) {
        civ["UKR"].state = 2;
        if (rng(110) <= uncommon) {
            worldNews(`Scotland Gains Independence`,
                        `Scotland has formally separated from the United Kingdom after a successful referendum.`,
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3vZiQQLY1-TmEnlYpyp5zd-72yQmFm3UJw&s",
                        true, 77, nextYear, 1, true);

            civ["SCO"].state = 2;
            civ["SCO"].strength = 100;
        }
    }
    if (nextYear == 2022 &&
        civ["UKR"].strength > 0
    ) {
        civ["UKR"].state = 3;
        worldNews(`Ukraine War Begins`,
                    `Russia has launched a full-scale invasion of Ukraine, triggering widespread fighting, sanctions, and global concern over European security.`,
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Anti-terrorist_operation_in_eastern_Ukraine_%28War_Ukraine%29_%2827843153986%29.jpg/250px-Anti-terrorist_operation_in_eastern_Ukraine_%28War_Ukraine%29_%2827843153986%29.jpg",
                    false, 73, nextYear, 1, true);
    }
    if (nextYear == 2023) {
        if (!c.kaiserreich && !c.fuhrerreich) {
            // Ukraine War
            if (rng(111) <= superUnlikely) {
                civ["UKR"].strength = 0;
            } else if (rng(111) <= veryUnlikely) {
                civ["UKR"].state = 4;
                civ["UKR"].name = "";
            } else if (rng(111) <= unlikely) {
                civ["UKR"].state = 1;
            } else if (rng(111) <= uncommon) {
                civ["UKR"].state = 2;
            } else if (rng(111) <= Default) {
                civ["UKR"].state = 3;
            }
        }
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |      -=- EUROPE -=-        |.
    |                            |.
    |   Alternate timelines:     |.
    |     - European Federation  |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    c.eu ++;
    if (c.ww2 && rng(100) < unlikely && 
        nextYear == rngRange(rng(96),1946,1980)) {
        c.eu = 0;
        civ["EU"].strength = 300;
        civ["EU"].color = [20, 72, 175];
        civ["EU"].adjective = "European";
        civ["EU"].merge = ["FRA","GER","ITA","DUT","BEL"];
        civ["FRA"].strength = 0;
        civ["GER"].strength = 0;
        civ["ITA"].strength = 0;
        civ["DUT"].strength = 0;
        civ["BEL"].strength = 0;

        // Adjust Colonies
        for (const key in civs[nextYear]) {
            if (civ["EU"].merge.includes(civ[key].owner)) {
                civ[key].owner = "EU";
            }
        }
    }
    if (c.eu == 10) {
        civ["EU"].merge = ["FRA","GER","ITA","DUT","BEL"];
        civ["EU"].merge.push("SPA");
        civ["SPA"].strength = 0;
    }
    if (c.eu == 15) {
        civ["EU"].merge = ["FRA","GER","ITA","DUT","BEL","SPA"];
        civ["EU"].merge.push("POR");
        civ["POR"].strength = 0;
        civ["EU"].merge.push("IRE");
        civ["IRE"].strength = 0;
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |     -=- ARABIA -=-         |.
    |                            |.
    |   Alternate timelines:     |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (nextYear == 200) {
        civ["YEM"].strength = 3500;
    }
    if (nextYear == 622) {
        worldNews("Muhammad's Hijra to Medina",
                    "Facing persecution in Mecca, the Prophet Muhammad has migrated to Medina. This event, known as the Hijra, marks the beginning of the Islamic calendar.",
                    "https://www.metmuseum.org/-/media/images/exhibitions/2012/byzantium-and-islam/blog/hajj2a.jpg",
                    false, 43, nextYear, 3, true);
    }
    if (nextYear == 628) {
        civ["ISL"].strength = 1250;
        civ["ISL"].strong = true;
    }
    if (nextYear == 635) {
        civ["ISL"].state = 2;
        civ["YEM"].strength = 0;
        civ["PER"].name = "";
    }
    if (nextYear == 662) {
        civ["ISL"].name = "Umayyad Caliphate";
        civ["ISL"].state = 4;
        civ["BER"].strength = 0;
    }
    if (nextYear == 715) {
        civ["ISL"].state = 5;
    }
    if (nextYear == 642) {
        civ["ISL"].state = 3;
    }
    if (nextYear == 750) {
        civ["ISL"].name = "Abbasid Caliphate";
        civ["ISL"].weak = true;
    }
    if (nextYear == 800) {
        civ["ISL"].state = 6;
    }
    if (nextYear == 860) {
        civ["OMA"].strength = 2600;
    }
    if (nextYear == 1009) {
        civ["YEM"].name = "Yemen";
    }
    if (nextYear == 1230) {
        civ["YEM"].name = "Rasulids";
    }
    if (nextYear == 1448) {
        civ["KUW"].strength = 400;
    }
    if (nextYear == 1545) {
        civ["YEM"].strength = 0;
    }
        
    if (nextYear == 1575) {
        civ["ISL"].weak = false;
        civ["ISL"].strength = 1000;
        civ["ISL"].name = "Hejaz";
        civ["ISL"].size = 8;
        civ["ISL"].x += 160;
        civ["ISL"].y += 30;
        civ["ISL"].state = 8;
    }
    if (nextYear == 1649) {
        civ["YEM"].strength = 1000;
        civ["YEM"].name = "Yemen";
        civ["YEM"].state = 2;
        civ["OMA"].state = 2;
    }
    if (nextYear == 1821) {
        civ["OMA"].state = 3;
    }
    if (nextYear == 1825) {
        civ["ISL"].name = "Najd";
        civ["ISL"].x += 30;
        civ["ISL"].y += 30;
    }
    if (nextYear == 1854) {
        civ["YEM"].state = 3;
    }
    if (nextYear == 1920) {
        civ["ISL"].state = 9;
        civ["OTT"].y -= 15;
        civ["YEM"].state = 4;
        civ["OMA"].state = 4;
    }
    if (nextYear == 1928) {
        // Arabia's Fate
        if (rng(35) <= unlikely) {
            civ["OMA"].strength = 0;
        } else {
            civ["ISL"].name = "Hejaz and Najd";
        }
    }
    if (nextYear == 1932) {
        //if (!c.kaiserreich && !c.byzantium && rng(35) > unlikely) {
        civ["MES"].strength = 300;
        civ["MES"].name = "Iraq";
        civ["MES"].state = 4;
        civ["MES"].x += 40;
        civ["MES"].y += 15;
        civ["MES"].size += 2;
        //}
        
        if (rng(35) <= unlikely) {
            civ["YEM"].strength = 0;
            civ["MES"].strength = 0;
            civ["SYR"].strength = 0;
            c.big_arabia = true;
        } else {
            civ["ISL"].name = "Saudi Arabia";
        }
    }
    if (nextYear == 1933) {
        if (civ["ISL"].name == "Najd") {
            civ["ISL"].name = "Arabia";
            civ["ISL"].size += 4;
        }
    }
    if (nextYear == 1946) {
        civ["SYR"].state = 2;
        civ["SYR"].owner = "none";
        civ["SYR"].x += 30;
    }

    if (nextYear == 1949) {
        civ["ENGb"].state = 2;
        civ["ENGb"].owner = "none";
        civ["ENGb"].y += 70;
        civ["ENGb"].x += 150;
        civ["ENGb"].size -= 2;
    }

    if (nextYear == 1990) {
        civ["YEM"].united = true;
    }

    if (rng(124) < uncommon && nextYear == rngRange(rng(123), 1945, 2017)) {
        civ["KUR"].strength = 1000;
        worldNews(`Kurdistan Declares Independence`,
                    `Kurdish leaders have proclaimed independence following a successful referendum, potentially hightening tensions in the Middle East.`,
                    "https://static01.nyt.com/images/2017/09/22/world/22Kurds1/22Kurds1-superJumbo.jpg",
                    true, 82, nextYear, 2, false);
    }
    if (rng(126) < veryUnlikely && rngRange(rng(125), 1970, 2025)) {
        civ["KUR"].state = 2;
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |     -=- IBERIA -=-         |.
    |                            |.
    |   Alternate timelines:     |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (nextYear == oppositeYear+1) {
        civ["SPA"].adjective = "Spanish";
        civ["SPA"].defaultname = "Spain";
        civ["SPA"].color = [255, 223, 102];
    }
    if (civ["SPA"].iberianUnion) {
        civ["POR"].adjective = "Iberian";
        civ["POR"].color = [255, 223, 102];
    } else {
        civ["POR"].adjective = "Portuguese";
        civ["POR"].defaultname = "Portugal";
        civ["POR"].color = [0, 136, 118];
    }

    if (nextYear == 1150) {
        if (rng(36) <= veryUnlikely) {
          civ["POR"].state = 2;
        }
    }
    
    // Start
    if (!c.celtics) {
        if (nextYear == 718) {
            civ["SPA"].strength = 3250;
        }
        if (nextYear == 757) {
            civ["COR"].strength = 3000;
        }
    }
    if (!civ["COR"].strong && !c.celtics) {
        if (nextYear == 825) {
            civ["SPA"].state = 2;
        }
        if (nextYear == 912) {
            civ["SPA"].state = 3;
        }
        if (nextYear == 914) {
            civ["SPA"].name = "Leon-Galicia";
            civ["SPA"].color = [0, 113, 136];
        }
        if (nextYear == 929) {
            civ["SPA"].name = "Leon";
            civ["SPA"].color = [255, 223, 102];
        }
        if (nextYear == 982) {
            civ["SPA"].state = 5;
        }
        if (nextYear == 1008) {
            civ["SPA"].name = "Leon-Galicia";
            civ["SPA"].color = [0, 113, 136];
        }
        if (nextYear == 1014) {
            civ["COR"].state = 2;
            civ["COR"].size -= 2;
            civ["COR"].x += 15;
            civ["COR"].y += 5;
        }
        if (nextYear == 1022) {
            civ["COR"].name = "";
        }
        if (nextYear == 1034) {
            civ["ARA"].strength = 600;
        }
        if (nextYear == 1036) {
            civ["SPA"].name = "Castile";
            civ["SPA"].state = 6;
            civ["SPA"].color = [255, 223, 102];
        }
        if (nextYear == 1070) {
            civ["COR"].name = "Seville";
        }
        if (nextYear == 1072) {
            civ["SPA"].name = "Leon";
        }
        if (nextYear == 1091) {
            civ["COR"].name = "Almoravids";
        }
        if (nextYear == 1139) {
            civ["POR"].strength = 3550;
        }
        if (nextYear == 1145) {
            civ["COR"].name = "";
        }
        if (nextYear == 1152) {
            civ["COR"].name = "(Almohads)";
            civ["COR"].size -= 1;
        }
        if (nextYear == 1230) {
            civ["SPA"].name = "Castile";
            civ["ARA"].state = 1;
        }
        if (nextYear == 1230) {
            civ["SPA"].state = 6;
        }
        if (nextYear == 1234) {
            civ["COR"].state = 3;
        }
        if (nextYear == 1237) {
            civ["COR"].name = "Granada";
            civ["COR"].x += 5;
            civ["COR"].y += 9;
        }
        if (nextYear == 1325 && civ["ARA"].strength > 0) {
            civ["ITA"].color = [239, 159, 20];
        }
        if (nextYear == 1357) {
            civ["SPA"].x += 15;
            civ["SPA"].y += 25;
            civ["SPA"].size ++;
        }
        if (nextYear == 1469) {
            civ["SPA"].name = "Spain";
            civ["ARA"].strength = 0;
            civ["ITA"].color = [255, 223, 102];
            worldNews("Marriage of Ferdinand & Isabella",
                        "Ferdinand of Aragon and Isabella of Castile have married, uniting their two powerful kingdoms and laying the foundation for a unified Spain.",
                        "https://sites.psu.edu/sdapassion/files/2018/09/899-base_image_4.1424284781-10caq4t.jpg",
                        false, 37, 1469, 2, true);
        }
        // End of Reconquista
        if (nextYear == 1492) {
            civ["SPA"].state = 7;
            civ["COR"].strength = 0;
            c.reconquista = true;
            worldNews("Completion of the Reconquista",
                        "With the fall of Granada, the Reconquista is complete, making the Iberian Peninsula fully controlled by Christian Kingdoms.",
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSta9A141RRen59fWk6awaBb80IPeaDm9dxuw&s",
                        false, 38, 1492, 2, true);
        }

        // Iberian Union
        if (nextYear == 1580) {
            civ["SPA"].iberianUnion = true;
            if (civ["SPA"].iberianUnion) {
                if (civ["BRA"].owner == "POR") {
                    civ["BRA"].name = "Brazil (Iberian Union)";
                }
                civ["POR"].strength = 0;
                civ["SPA"].name = "Iberian Union";
            }
        }
        if (nextYear == 1641) {
            civ["SPA"].iberianUnion = false;
            if (!civ["SPA"].iberianUnion) {
                if (civ["BRA"].owner == "POR") {
                    civ["BRA"].name = "Portuguese Brazil";
                }
                civ["POR"].strength = 1000;
                civ["SPA"].name = "Spain";
            }
        }

        if (nextYear == 1713) {
            civ["ITA"].color = [];
        }
        if (nextYear == 1714) {
            civ["SPA"].state = 9;
        }
        if (nextYear == 1912) {
            civ["SPA"].state = 8;
        }

        // Spanish Civil War
        if (civ["ARA"].strength < 5) {
            if (nextYear == 1936) {
                civ["ARA"].strength = 3;
                civ["ARA"].state = 3;
                civ["ARA"].name = "";
            }
            if (nextYear == 1938) {
                civ["ARA"].state = 2;
            }
        }
        if (nextYear == 1956) {
            civ["SPA"].state = 9;
        }
    }

    if (civ["COR"].strong && civ["COR"].state == 0 && civ["COR"].strength > 0) {
        civ["SPA"].strength = 0;
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |   -=- HIMALAYAS -=-        |.
    |                            |.
    |   Alternate timelines:     |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    // Buddha
    worldNews("The Buddha is Enlightened",
                "Siddhartha Gautama achieves spiritual awakening under the Bodhi Tree.",
                "https://qph.cf2.quoracdn.net/main-qimg-138efc066fd50ef90c4a13b9d2d0df58-pjlq",
                false, 6, rngRange(rng(3),-563,-400), 10, true);

    if (nextYear == 396) {
        civ["NEP"].strength = 2250;
    }
    if (nextYear == 618) {
        civ["TIB"].strength = 1250;
    }
    if (nextYear == 642) {
        civ["TIB"].state = 3;
        civ["TIB"].size += 4;
        civ["TIB"].x -= 20;
        civ["TIB"].y -= 20;
    }
    if (nextYear == 843) {
        civ["NEP"].state = 2;
        civ["TIB"].name = "Lhasa";
        civ["TIB"].state = 1;
        civ["TIB"].size -= 4;
        civ["TIB"].x += 25;
        civ["TIB"].y += 20;
    }
    if (nextYear == 1000) {
        civ["NEP"].state = 3;
    }
    if (nextYear == 1242) {
        civ["TIB"].strength = 0;
    }
    if (nextYear == 1355) {
        civ["TIB"].strength = 900;
        civ["TIB"].name = "Phagmodrupa";
        civ["TIB"].state = 2;
        civ["TIB"].x -= 30;
        civ["TIB"].y -= 10;
    }
    if (nextYear == 1486) {
        civ["TIB"].name = "Ringpungpa";
    }
    if (nextYear == 1566) {
        civ["TIB"].name = "Tsangpa";
        civ["TIB"].size += 2;
        civ["TIB"].y -= 8;
    }
    if (nextYear == 1678) {
        civ["TIB"].strength = 0;
    }
    if (nextYear == 1775) {
        civ["BHU"].strength = 2250;
    }
    if (nextYear == 1811) {
        civ["NEP"].state = 4;
    }
    if (nextYear == 1912) {
        civ["TIB"].name = "Tibet";
        civ["TIB"].strength = 300;
        civ["TIB"].state = 4;
        civ["TIB"].y += 15;
    }
    if (nextYear == 1950) {
        if (rng(112) <= possible || civ["CHI"].ideology != "communism") {
            civ["TIB"].strength ++;
        } else {
            civ["TIB"].strength = 0;
        }
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ | -=- MALAY ARCHIPELAGO -=-  |.
    |                            |.
    |   Alternate timelines:     |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    owner(civ,"MLY",[11, 66, 16],"Malaysia","Malaysia",true);
    owner(civ,"DUTi",[231, 130, 53],"Indonesia","East Indies",true);
    owner(civ,"PORi",[15, 45, 122],"East Timor","Timor",false);

    owner(civ,"PHI",[70, 152, 112],"Philippines","Philippines",false);

    if (nextYear == 651) {
        civ["SVJ"].strength = 2250;
    }
    if (nextYear == 1136) {
        civ["MAJ"].strength = 600;
        civ["MAJ"].color = [208, 162, 69];
    }
    if (nextYear == 1175) {
        civ["MAJ"].state = 2;
    }
    if (nextYear == 1221) {
        civ["MAJ"].name = "Singhasari";
        civ["MAJ"].y -= 10;
    }
    if (nextYear == 1290) {
        civ["SVJ"].state = 2;
    }
    if (nextYear == 1293) {
        civ["MAJ"].name = "Majapahit";
        civ["MAJ"].color = [];
    }
    if (nextYear == 1340) {
        civ["MAJ"].strength = 2250;
    }
    if (nextYear == 1372) {
        civ["MAJ"].state = 2;
        civ["SVJ"].name = "";
    }
    if (nextYear == 1400) {
        civ["MLY"].strength = 3600;
        civ["MLY"].name = "Malacca";
    }
    if (nextYear == 1529) {
        civ["MAJ"].strength = 0;
        civ["MLY"].name = "Johor";
        civ["MLY"].size ++;
        civ["MLY"].x += 10;
    }
    if (nextYear == 1575) {
        civ["PHI"].strength = 653;
        civ["PHI"].owner = colonizingPercentage(rng(46),colonizeOldWorld,"SPA",40);
    }
    if (nextYear == 1757) {
        civ["PHI"].state = 2;
    }

    // New China
    if (nextYear == 1625) {
        /*if (c.new_china) {
          civ["DUTi"].name = "";
        }*/
    }

    // Europeans
    if (nextYear == 1622) {
        civ["DUTi"].strength = 2553;
        civ["DUTi"].owner = colonizingPercentage(rng(45),colonizeOldWorld,"DUT",50);
    }
    if (nextYear == 1630) {
        civ["PORi"].strength = 1553;
        civ["PORi"].owner = colonizingPercentage(rng(47),colonizeOldWorld,"POR",30);
    }
    if (nextYear == 1799) {
        civ["DUTi"].state = 2;
    }
    if (nextYear == 1863) {
        civ["DUTi"].state = 3;
        civ["SVJ"].strength = 0;
    }
    if (nextYear == 1885) {
        civ["MLY"].owner = colonizingPercentage(rng(44),colonizeOldWorld,"ENG",50,true);
        //if (c.british_raj) {
        civ["BUR"].strength = 0;
        //}
    }
    if (nextYear == 1890) {
        civ["MLY"].state = 2;
        civ["DUTi"].state = 4;
        civ["PHI"].state = 3;
    }
    if (nextYear == 1946) {
        //if (RNG("US_Imperialism",year) >= unlikely) {
        civ["PHI"].owner = "none";
        //}
    }
    if (nextYear == 1947) {
        //if (!c.new_china) {
        civ["DUTi"].owner = "none";
        civ["DUTi"].size += 4;
        civ["DUTi"].x += 20;
        //}
    }
    if (nextYear == 1957) {
        civ["MLY"].owner = "none";
        civ["MLY"].size += 3;
    }

    if (nextYear == 2002) {
        civ["PORi"].owner = "none";
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |   -=- NORTH AFRICA -=-     |.
    |                            |.
    |   Alternate timelines:     |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (nextYear == -933) {
        civ["LIB"].strength = 210;
        civ["BER"].strength = 3000;
    }  
    if (nextYear == 757) {
        civ["ALG"].strength = 2600;
    }

    if (nextYear == 912) {
        civ["ALG"].name = "Fatamid Caliphate";
    }
    if (nextYear == 970) {
        civ["FAT"].strength = 700;
        civ["ALG"].name = "Hamm.";
    }
    if (nextYear == 1060) {
        civ["MOR"].strength = 1250;
    }
    if (nextYear == 1150) {
        civ["MOR"].name = "Almohads";
    }
    if (nextYear == 1171) {
        civ["FAT"].name = "Ayyubid Sultinate";
    }
    if (nextYear == 1250) {
        civ["FAT"].name = "Mamluks";
        civ["FAT"].size += 3;
        civ["FAT"].x += 30;
    }
    if (nextYear == 1242) {
        civ["ALG"].name = "Zayyanids";
    }
    if (nextYear == 1468) {
        civ["MOR"].name = "Morocco";
        civ["MOR"].x += 30;
    }
    if (nextYear == 1524) {
        civ["FAT"].strength = 0;
    }
    if (nextYear == 1555) {
        civ["MOR"].name = "Saadis";
        civ["MOR"].size++;
    }
    if (nextYear == 1570) {
        civ["ALG"].strength = 0;
    }
    if (nextYear == 1580) {
        civ["MOR"].state = 2;
    }
    if (nextYear == 1658) {
        civ["MOR"].name = "Morocco";
    }
    if (nextYear == 1951) {
        civ["LIB"].strength = 100;
    }
    if (nextYear == 1952) {
        civ["LIB"].state = 2;
    }
    if (nextYear == 1956) {
        //if (c.af_colonization) {
        civ["MOR"].state = 3;
        civ["MOR"].strength = 560;
        /*} else {
          civ["MOR"].state = "b";
          civ["MOR"].name = "Greater Morocco";
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
    }
    if (nextYear == 1968) {
        civ["SPAx"].owner = "none";
        if (civ["SPAx"].state == "a") {
          civ["SPAx"].state = "b";
        } else {
          civ["SPAx"].state = 2;
        }
    }
    if (nextYear == 1977) {
        // Invasion of Western Sahara
        if (civ["MOR"].state == 4) {
            civ["MOR"].state = 3;
        }
    }
    if (nextYear == 1975) {
        if (rng(106) <= superUnlikely) {
            civ["MOR"].state = "b";
            civ["MOR"].name = "Greater Morocco";
            civ["SPAx"].strength = 0;
        } else if (rng(106) <= possible) {
            civ["MOR"].state = "a";
            civ["SPAx"].name = "";
        } else if (rng(106) <= likely) {
            civ["MOR"].strength += 1;
        } else {
            civ["MOR"].state = 4;
        }
    }
/* ______________________________
 / \                             \.
|   |                            |.
 \_ | -=- SUB-SAHARAN AFRICA -=- |.
    |                            |.
    |   Alternate timelines:     |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (nextYear == -385) {
        civ["ABY"].strength = 4200;
    }
    if (nextYear == 300) {
        civ["GHA"].strength = 1050;
    }
    if (nextYear == 350) {
        civ["ABY"].state = 2;
    }
    if (nextYear == 690) {
        civ["CHA"].strength = 2250;
    }
    if (nextYear == 930) {
        civ["ABY"].state = 3;
        civ["ABY"].name = "Zagwe";
        civ["ABY"].y += 30;
    }
    if (nextYear == 1139) {
        civ["ABY"].name = "Abyssinia";
    }
    if (nextYear == 1180) {
        civ["BUN"].strength = 2080;
    }
    if (nextYear == 1190) {
        civ["GHA"].name = "Sosso";
        civ["GHA"].x += 20;
        civ["GHA"].size += 2;
    }
    if (nextYear == 1215) {
        civ["SOM"].strength = 2080;
    }
    if (nextYear == 1248) {
        civ["GHA"].strength = 0;
    }
    if (nextYear == 1273) {
        civ["MAL"].strength = 1250;
        civ["BUN"].name = "Bunyoro";
        civ["MOR"].name = "Maranids";
    }
    if (nextYear == 1317) {
        civ["KIL"].strength = 1250;
    }
    if (nextYear == 1334) {
        civ["ABY"].state = 4;
        civ["NIG"].strength = 1250;
    }
    if (nextYear == 1357) {
        civ["JOL"].strength = 1250;
    }
    if (nextYear == 1387) {
        civ["CHA"].name = "Bornu";
        civ["CHA"].x += 20;
    }
    if (nextYear == 1392) {
        civ["KON"].strength = 1550;
    }
    if (nextYear == 1468) {
        civ["SON"].strength = 1000;
    }
    if (nextYear == 1545) {
        civ["MAD"].strength = 2250;
    }

    if (nextYear == 1592) {
        civ["SON"].name = "Gao";
    }
    if (nextYear == 1594) {
        civ["SOM"].state = 2;
        civ["SON"].strength = 0;
    }
    if (nextYear == 1600) {
        civ["DAR"].strength = 2250;
    }
    if (nextYear == 1607) {
        civ["MAL"].state = 2;
        civ["MAL"].name = "Bamana";
        civ["MAL"].x += 20;
        civ["MAL"].size += 2;
    }
    if (nextYear == 1655) {
        civ["KIL"].name = "Zanzibar";
    }
    if (nextYear == 1680) {
        civ["SOM"].name = "Geledi";
    }
    if (nextYear == 1806) {
        civ["HRE"].name = "Confed. of Rhine";
        civ["SOK"].strength = 98;
        civ["NIG"].y += 10;
    }
    if (nextYear == 1828) {
        civ["MAD"].state = 2;
    }
    if (nextYear == 1860) {
        civ["MAL"].name = "Toucouleur";
    }

    // Modern Ethiopia
    if (nextYear == 1898) {
        civ["ABY"].state = 5;
        civ["ABY"].name = "Abyssina";
        civ["ABY"].y += 30;
        civ["ABY"].size += 4;
    }

    // European Colonization
    c.colonizingAfrica ++;
    owner(civ,"PORa",[],"Angola Zambia Mozambique","Colonies",true);
    owner(civ,"FRAx",[],"Tunisia","Africa",true);
    owner(civ,"KON",[],civ["KON"].defaultname,"Congo",true);
    owner(civ,"GERx",[],"Tanzania","Africa",true);
    owner(civ,"SPAx",[],"Western Sahara","Sahara",true);
    owner(civ,"ITAx",[],"Eritrea","Africa",true);
    if (civ["EAF"].strength <= 0) {
        owner(civ,"ENGx",[],"Kenya","Colonies",true);
    }
    owner(civ,"ENGn",[],"Nigeria","Colonies",true);
    owner(civ,"ABY",[],"Ethiopia","East Africa",true);

    if (nextYear == rngInfluence(rng(42),1580,[
        [civ["CAR"].strong, -300],
    ])) {
        c.colonizingAfrica = 1580;
    }
    if (c.colonizingAfrica == 1580) {
        civ["PORa"].strength = 653;
        civ["PORa"].owner = colonizingPercentage(rng(64),colonizeOldWorld,"POR",100);
    }
    if (c.colonizingAfrica == 1658) {
        civ["PORa"].state = 2;
    }
    if (c.colonizingAfrica == 1840) {
        civ["FRAx"].strength = 2250;
        civ["FRAx"].owner = colonizingPercentage(rng(65),colonizeOldWorld,"FRA",100);
    }

    // Scramble for Africa
    if (c.colonizingAfrica == 1885) {
        civ["KON"].state = 2;
        civ["KON"].owner = colonizingPercentage(rng(66),colonizeOldWorld,"BEL",50);
        civ["KON"].y -= 30;
        civ["KON"].x += 30;
        civ["BEL"].state = 2;
    }
    if (c.colonizingAfrica == 1890) {
        civ["GERx"].strength = 300;
        civ["SPAx"].strength = 300;
        civ["ITAx"].strength = 300;

        civ["GERx"].owner = colonizingPercentage(rng(67),colonizeOldWorld,"GER",80);
        civ["SPAx"].owner = colonizingPercentage(rng(68),colonizeOldWorld,"SPA",80);
        civ["ITAx"].owner = colonizingPercentage(rng(69),colonizeOldWorld,"ITA",80);

        civ["PORa"].state = 3;
            if (rng(72) <= unlikely) {
                civ["PORa"].state = "b";
            } else if (rng(72) <= possible) {
                civ["PORa"].state = "a";
            }  
        civ["SOM"].strength = 0;
    }
    if (c.colonizingAfrica == 1898) {
        civ["ENGx"].strength = 300;
        civ["ENGx"].owner = colonizingPercentage(rng(69),colonizeOldWorld,"ENG",60);
        civ["ENGs"].state = 3;
    
        // Hala'ib Triangle
        if (rng(37) <= possible) {
            civ["EGY"].state = 6;
        } else {
            civ["EGY"].state = 7;
        }
        civ["BUN"].strength = 0;
        civ["KIL"].strength = 0;
        civ["DAR"].strength = 0;
    }
    if (c.colonizingAfrica == 1899) {
        civ["ENGn"].strength = 300;
        civ["ENGn"].owner = colonizingPercentage(rng(73),colonizeOldWorld,"ENG",60);
        if (rng(71) <= unlikely) {
            civ["SPAx"].state = "a";
        }
    }
    if (c.colonizingAfrica == 1900) {
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
    if (c.colonizingAfrica == 1912) {
        civ["MOR"].strength = 0;
        civ["ITAx"].state = 2;
        if (rng(115) <= unlikely) {
            civ["ITAx"].state = "a";
        }
    }
    if (c.colonizingAfrica == 1936) {
        civ["ABY"].owner = "ITA";
    }
    if (c.colonizingAfrica == 1960) {
        // Decolonization
        //if (c.af_colonization) {
        //if (!c.fuhrerreich) {
        civ["KON"].state = 3;
        civ["KON"].defaultname = "Zaire";
        civ["KON"].owner = "none";
        civ["KON"].x += 40;
        civ["KON"].size += 5;
    
        civ["SOM"].strength = 150;
        civ["SOM"].name = "Somalia";
        civ["SOM"].owner = "none";
        civ["SOM"].state = 3;
    
        civ["ITAx"].state = 3;
        civ["ITAx"].owner = "none";
        civ["ITAx"].x = 1520;
        civ["ITAx"].y = 530;
        civ["ITAx"].size = 5;
        //}
        civ["CHA"].strength = 300;
        civ["CHA"].name = "Chad";
        civ["CHA"].size += 5;
        civ["CHA"].x += 20;
        civ["CHA"].y += 10;
    
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
        civ["FRAx"].owner = "none";
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
    if (c.colonizingAfrica == 1962) {
        // British Colonization
        //if (c.af_colonization) {
        //if (RNG("Decolonization",year) >= unlikely && c.usa_exists) {
        civ["ENGx"].state = 2;
        civ["ENGx"].owner = "none";
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
    
        
        civ["ALG"].strength = 200;
        civ["ALG"].name = "Algeria";
        civ["ALG"].x = 1230;
        civ["ALG"].y = 410;
        civ["ALG"].size = 9;
    }
    if (c.colonizingAfrica == 1965) {
        /*if (RNG("Africa's_Fate",year) <= unlikely || !c.af_colonization) {
          civ["AFR"].strength = 1000;
        }*/
    }
    if (c.colonizingAfrica == 1967) {
        // East African Federation formed
        if (rng(117) <= unlikely) {
            if (!c.kaiserreich) {
                civ["EAF"].strength += 1000;
                civ["ENGx"].name = "";
                worldNews(`East African Federation Formed`,
                        `Kenya, Uganda, and Tanzania have united under a single federal government, forming the East African Federation.`,
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBol1xwztmhVuzt4FOjBd1NuRjk4RlbaMzg&s",
                        true, 75, nextYear, 2, true);
            }
        }
    }
    if (c.colonizingAfrica == 1975) {
        if (civ["PORa"].state == "b") {
          civ["PORa"].state = "c";
        } else {
          civ["PORa"].state = 4;
        }
        civ["PORa"].x -= 30;
        civ["PORa"].owner = "none";
    }
    if (c.colonizingAfrica == 1990) {
        civ["ENGs"].state = 5;
    }
    if (c.colonizingAfrica == 1991) {
        if (rng(116) <= possible) {
            c.somaliland = true;
        }
      }
    if (c.colonizingAfrica == 1993) {
        civ["ABY"].state = 5;
    }
    if (c.colonizingAfrica == 1997) {
        civ["KON"].defaultname = "D.R.C.";
        civ["KON"].x -= 20;
    }
    
    if (c.colonizingAfrica == 2011) {
        if (rng(43) <= unlikely) {
            civ["KSH"].strength += 10;
        } else if (rng(43) <= Default) {
            civ["KSH"].state = 4;
        }
    }
    if (c.colonizingAfrica == 2013) {
        if (civ["EAF"].strength > 0 && civ["KSH"].state == 4) {
            civ["EAF"].state = 1;
        }
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |   -=- SOUTH AFRICA -=-     |.
    |                            |.
    |   Alternate timelines:     |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (c.colonizingAfrica == 1655) {
        civ["DUTs"].strength = 2250;
    }
    if (c.colonizingAfrica == 1799) {
        civ["ENGs"].strength = 3250;
        civ["DUTs"].name = "";
    }
    if (c.colonizingAfrica == 1835) {
        civ["ENGs"].state = 2;
    }
    if (c.colonizingAfrica == 1854) {
        civ["DUTs"].state = 2;
        civ["DUTs"].name = "SAR";
        civ["DUTs"].x = 1420;
        civ["DUTs"].y = 860;
        civ["DUTs"].size += 2;
    }
    if (c.colonizingAfrica == 1902) {
        civ["DUTs"].strength = 0;
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |   -=- SOUTH AMERICA -=-    |.
    |                            |.
    |   Alternate timelines:     |.
    |      - Gran Colombia       |.
    |      - Triple Alliance War |.
    |      - Peru-Bolivia        |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    // Presets
    if (nextYear == oppositeYear + 1) {
        civ["PEU"].defaultname = "Peru";
    }

    // Pre-Columbian America
    if (nextYear == 100) {
        civ["MOC"].strength = 601;
    }
    if (nextYear == 300) {
        civ["INC"].strength = 2250;
    }
    if (nextYear == 500) {
        civ["INC"].state = 2;
        civ["INC"].name = "Wari / Tiwanaku Empire";
        civ["INC"].x -= 40;
    }
    if (nextYear == 900) {
        civ["MOC"].strength = 572;
        civ["MOC"].name = "Chimor";
    }
    if (nextYear == 1100) {
        civ["INC"].state = 1;
        civ["INC"].name = "Tiwanaku";
        civ["INC"].x += 20;
    }
    if (nextYear == 1197) {
        civ["INC"].state = 3;
        civ["INC"].name = "Cuzco";
        civ["INC"].x += 20;
    }
    if (nextYear == 1480) {
        civ["INC"].state = 4;
        civ["INC"].name = "Inca Empire";
        civ["INC"].size = 12;
        civ["INC"].x -= 30;
    }

    if (c.colonizingAmerica == 1500) {
        civ["BRA"].strength = 1250;
        if (civ["BRA"].owner == null) {
            civ["BRA"].owner = colonizingPercentage(rng(30),colonizeNewWorld,"POR",200);
        }
    }
    if (c.colonizingAmerica == 1528) {
        // Klein-Venedig
        civ["VEZ"].strength = 18;
    }
    if (c.colonizingAmerica == 1533) {
        civ["BRA"].state = 2;
        civ["BRA"].size += 2;
    }
    if (c.colonizingAmerica == 1533) {
        civ["INC"].strength = 0;
    }
    if (c.colonizingAmerica == 1539) {
        civ["INC"].strength = 30;
        civ["INC"].name = "Neo-Incan State";
        civ["INC"].state = 3;
        civ["INC"].size -= 8;
        civ["INC"].y -= 10;
    }
    if (c.colonizingAmerica == 1545) {
        if (rng(101) <= unlikely) {
            civ["VEZ"].name = "Welserland";
            civ["VEZ"].color = [95, 96, 95]
            civ["VEZ"].strength += 900;
        } else {
            civ["VEZ"].name = "Venezuela";
            civ["VEZ"].strength = 0;
        }
    }
    if (c.colonizingAmerica == 1563) {
        civ["BRA"].state = 3;
        civ["BRA"].size += 2;
    }
    // Dutch invasion of Brazil
    if (c.colonizingAmerica == 1630) {
        civ["DUTb"].strength = 9;
    }
    if (c.colonizingAmerica == 1637 &&
        civ["DUT"].strength > 0
    ) {
        // Dutch Brazil
        if (rng(102) <= veryUnlikely) {
            c.dutch_brazil = true;
            civ["DUTb"].strength = 0;
            civ["BRA"].owner = "DUT";
        }
    }
    if (c.colonizingAmerica == 1641) {
        civ["SPAc"].state = 7;
        civ["BRA"].state = 4;

        civ["SUR"].strength = 2250;
        civ["FGU"].strength = 2250;
        civ["SUR"].owner = colonizingPercentage(rng(77),colonizeNewWorld,"DUT",50);
        civ["FGU"].owner = colonizingPercentage(rng(78),colonizeNewWorld,"FRA",50);
    }
    if (c.colonizingAmerica == 1682) {
        civ["SPAc"].state = 8;
    }
    if (c.colonizingAmerica == 1765) {
        civ["BRA"].state = 5;
        civ["SUR"].state = 2;
        civ["FGU"].state = 2;
    }
    if (c.colonizingAmerica == 1778) {
        if (c.pax_francia) {
            civ["QUE"].strength += 400;
        } else {
            civ["SPAc"].state = 9;
        }
        civ["BRA"].state = 6;
    }
    if (c.colonizingAmerica == 1783 && !c.pax_francia) { // fix with separate louisiana
        civ["SPAc"].state = 10;
    }
    if (c.colonizingAmerica == 1803) {
        civ["GUY"].strength = 2250;
        civ["GUY"].owner = colonizingPercentage(rng(79),colonizeNewWorld,"ENG",50);
    }
    if (c.colonizingAmerica == 1804) {
        civ["SUR"].state = 3;
        civ["FGU"].state = 3;
    }
    if (c.colonizingAmerica == 1807) {
        civ["VEZ"].state = 1;
    }
    if (c.colonizingAmerica == 1821) {
        civ["SPAc"].state = 12;
    }
    if (c.colonizingAmerica == 1825) {
        //if (RNG("Rome_Colonizes_America",year) > superUnlikely) {
        civ["SPAc"].state = 1;
        civ["SPAc"].name = "";
        //}
    }

    // Latin American Independence
    c.latinAmerica ++;
    if (c.colonizingAmerica == 1810) {
        c.latinAmerica = 1810;
    }
    if (c.latinAmerica == 1810) {
        civ["ARG"].strength = 3200;
        civ["PAR"].strength = 3200;
    }
    if (c.latinAmerica == 1817) {
        civ["CHL"].strength = 3200;
        civ["VEZ"].strength = 3;
    }
    if (c.latinAmerica == 1819) {
        civ["GCO"].strength = 3200;
    }
    if (c.latinAmerica == 1822) {
        civ["BRA"].state = 7;
        civ["PEU"].strength = 3200;
  
        civ["BRA"].size = 20;
        civ["BRA"].x = 790;
        civ["BRA"].y = 735;
        civ["BRA"].owner = "none";
    }
    if (c.latinAmerica == 1824) {
        //if (c.am_colonization) {
        civ["BOL"].strength = 3200;
        //}
    }
    if (c.latinAmerica == 1829) {
        civ["URU"].strength = 3200;
    }
    if (c.latinAmerica == 1830) {
        // Collapse of Gran Colombia
        if (rng(16) > veryUnlikely) {
            civ["EQU"].strength = 3200;
            civ["COL"].strength = 3200;
            civ["VEZ"].strength = 900;
            civ["GCO"].strength = 0;
        }
        
        if (civ["SPAc"].owner == "SPA") {
            civ["ARG"].name = "Argentina";
        }
    }
    if (c.latinAmerica == 1837) {
        if (civ["SPAc"].owner == "SPA") {
            civ["PEU"].name = "Peru-Bolivia";
        } else {
            civ["PEU"].name = "Incan Empire";
        }
        civ["PEU"].color = [196, 188, 203];
        civ["PEU"].merge = ["BOL"];
        civ["BOL"].strength = 0;
    }
    if (c.latinAmerica == 1840) {
        // Collapse of Peru-Bolivia
        if (!(rng(17) <= unlikely)) {
            civ["PEU"].state = 1;
            civ["PEU"].name = civ["PEU"].defaultname;
            civ["PEU"].merge = [];
            civ["BOL"].strength = 1000;
        }
    }

    worldNews("War of the Triple Alliance",
          `The War of the Triple Alliance has begun, with Paraguay against Argentina, Brazil, and Uruguay in one of South ${c.newWorld}'s bloodiest conflicts ever seen.`,
          "https://maps.quickworld.com/maps/qmg/qmg-soa-w70-q01.png",
          false, 34, 1864, 2, false);

    if (c.latinAmerica == 1870) {
        civ["ARG"].state = 2;
        civ["CHL"].state = 2;
        if (rng(103) <= veryUnlikely) {
            civ["PAR"].state = 3;
            civ["URU"].strength = 0;
        }
    }
    if (c.latinAmerica == 1880) {
        if (civ["PAR"].state != 3) {
            civ["PAR"].state = 2;
        }
        civ["CHL"].state = 3;
        civ["ARG"].state = 3;
        civ["BRA"].state = 8;
        civ["COL"].state = 2;
    }
    if (c.latinAmerica == 1900) {
        civ["VEZ"].state = 2;
    }
    if (c.latinAmerica == 1935) {
        if (civ["PAR"].state != 3) {
            civ["BOL"].state = 2;
        }
    }
    if (c.latinAmerica == 1943) {
        if (civ["PEU"].name != "Peru-Bolivia" && civ["GCO"].strength <= 0) {
            civ["EQU"].state = 2;
            civ["PEU"].state = 2;
        }
    }
    if (c.latinAmerica == 1966) {
        civ["GUY"].owner = "none";
    }
    if (c.latinAmerica == 1975) {
        civ["SUR"].owner = "none";
    }

    // Names
    altHist(nextYear,"alternate_american_names");

    switch (civ["BRA"].owner) {
        case "FRA":
            civ["BRA"].defaultname = "Antarctica";
            civ["BRA"].defaultname2 = "Antarctique";
            civ["BRA"].defaultcolor = [13, 159, 185];
            break;
        case "ENG":
            civ["BRA"].defaultname = "Australia";
            civ["BRA"].defaultname2 = civ["BRA"].defaultname;
            civ["BRA"].defaultcolor = [217, 71, 115];
            break;
        case "SPA":
            civ["BRA"].defaultname = "Castilla";
            civ["BRA"].defaultname2 = civ["BRA"].defaultname;
            civ["BRA"].defaultcolor = [213, 186, 35];
            break;
        case "DUT":
            civ["BRA"].defaultname = "Holland";
            civ["BRA"].defaultname2 = civ["BRA"].defaultname;
            civ["BRA"].defaultcolor = [218, 131, 60];
            break;
        case "POR":
        case null:
        default:
            civ["BRA"].defaultname = "Brazil";
            civ["BRA"].defaultname2 = civ["BRA"].defaultname;
            civ["BRA"].defaultcolor = [13, 185, 57];
    }

    owner(civ,"BRA",civ["BRA"].defaultcolor,civ["BRA"].defaultname,civ["BRA"].defaultname2,true);
    owner(civ,"GUY",[192, 136, 115],"Guyana","Guiana",true);
    owner(civ,"SUR",[182, 95, 159],"Suriname","Suriname",true);
    owner(civ,"FGU",[208, 52, 107],"Guyane","Guiana",true);
    owner(civ,"VEZ",[],"Venezuela","Venezuela",true);

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |   -=- MIDDLE AMERICA -=-   |.
    |                            |.
    |   Alternate timelines:     |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

     /*   MAJOR alternate history branch:
     *       Rome discovers America - civ["ROM"].america
     */

    civ["ROM"].yearsColonizing ++;
    let romanExplorer = "Greek geographer Strabo";
    if (rng(20) < 0.5) {
        romanExplorer = "Pomponius Mela";
    }
    if (civ["ROM"].yearsColonizing == 1) {
        worldNews("Rome Discovers New World",
                    `${romanExplorer} has discovered what many believe to be a previously unknown continent. Merchants have already begun trading with the natives.`,
                    "https://i0.wp.com/www.forge22.com/wp-content/uploads/caribbean-map-11-18x12-colored-web.jpg",
                    true, 3, nextYear, 2, true);
    }
    if (civ["ROM"].yearsColonizing == 3) {
        civ["SPAc"].name = "Nova Roma";
        civ["SPAc"].strength = 3000;
        civ["SPAc"].color = [178, 0, 0];
        worldNews("New Rome Founded",
                    `In the year ${nextYear}, Nova Roma was founded as a trading hub and colonial base.`,
                    "https://upload.wikimedia.org/wikipedia/commons/2/2b/Roman_Cologne%2C_reconstruction.JPG",
                    true, 40, nextYear, 2, false);
    }
    if (civ["ROM"].yearsColonizing == 30) {
        civ["SPAc"].state = 2;
    }

    // Pre-Columbian America
    if (nextYear == 396) {
        civ["AZX"].strength = 2200;
    }
    if (nextYear == 592) {
        civ["AZX"].name = "Mixtec";
    }
    if (nextYear == 825) {
        civ["AZX"].name = "Toltecs";
    }
    if (nextYear == 1000) {
        civ["MAY"].strength = 700;
    }
    if (nextYear == 1317) {
        civ["AZX"].name = "Tarascans";
    }
    if (nextYear == 1400) {
        civ["MAY"].name = "Maya";
        civ["MAY"].x += 15;
    }
    if (nextYear == 1480) {
        civ["AZX"].state = 2;
        civ["AZX"].name = "Aztec Empire";
    }

    // Europeans
    c.colonizingAmerica ++;
    owner(civ,"SPAc",[],"Pan-American Union","America",true);
    newLand(civ,"SPAc");

    if (nextYear == rngInfluence(rng(38),1492,[
        [civ["CAR"].strong, -100],
        [c.reconquista, -5],
        [c.constantinopleSurvives, -100],
    ])) {
        c.colonizingAmerica = 1492;
        if (civ["SPAc"].owner == null) {
            civ["SPAc"].owner = colonizingPercentage(rng(60),colonizeNewWorld,"SPA",200);
            //civ["SPAc"].owner = "ENG";
            //colonizeNewWorld[civ["SPAc"].owner] = 0;
        }
        
        altHist(nextYear, "alternate_latin_american_country_names");
    }
    
    if (c.colonizingAmerica == 1493) {
        worldNews("Columbus' Second Voyage",
                    "Christopher Columbus has embarked on a second voyage to the New World, this time with a larger fleet and more settlers.",
                    "https://www.thoughtco.com/thmb/Pd1b4Gol7AfQ9HBp6e0_U5kJWFI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-history-of-rubber--christopher-columbus-173272483-5b2146db0e23d90036f9a511.jpg",
                    false, 39, nextYear, 1, false);
    }

    if (c.colonizingAmerica == 1494) {
        civ["SPAc"].strength = 750;
    }
    if (c.colonizingAmerica == 1513) {
        civ["SPAc"].state = 2;
    }
    if (c.colonizingAmerica == 1525) {
        civ["SPAc"].state = 3;
        civ["AZX"].strength = 0;
    }
    if (c.colonizingAmerica == 1533) {
        civ["SPAc"].state = 4;
    }
    if (c.colonizingAmerica == 1563) {
        civ["SPAc"].state = 5;
        civ["AZX"].strength = 0;
    }
    if (c.colonizingAmerica == 1590) {
        civ["SPAc"].state = 6;
    }
    if (c.colonizingAmerica == 1804) {
        civ["SPAc"].state = 11;
    }

    // Caribbean Colonization
    if (c.colonizingAmerica == 1625) {
        civ["FRAk"].strength = 700;
    }
    if (c.colonizingAmerica == 1637) {
        civ["ENGk"].strength = 700;
    }
    if (c.colonizingAmerica == 1788) {
        civ["ENGk"].state = 2;
    }
    if (c.colonizingAmerica == 1792) {
        civ["FRAk"].state = 2;
    }
    if (c.colonizingAmerica == 1804) {
        civ["FRAk"].state = 1;
        civ["FRAk"].name = "";
        civ["HAI"].strength = 700;
    }
    if (c.colonizingAmerica == 1842) {
        civ["ENGk"].state = 3;
    }
    if (c.colonizingAmerica == 1949) {
        //if (!c.pax_francia) {
        civ["ENGk"].state = 2;
        //}
    }

    // Independent States
    if (c.colonizingAmerica == 1821) {
        civ["MEX"].strength = 3200;

        if (civ["LOU"].strength > 0) {
            civ["MEX"].state = "a";
        }
    }
    if (c.colonizingAmerica == 1822) {
        civ["CEN"].strength = 3200;
    }
    if (c.colonizingAmerica == 1839) {
        civ["CEN"].state = 2;
    }
    if (c.colonizingAmerica == 1842) {
        civ["DOM"].strength = 700;
    }

    // French Invasion of Mexico
    if (c.colonizingAmerica == 1863) {
        civ["MEXa"].strength = 4;
    }

    // Spanish-American War
    if (c.colonizingAmerica == 1898) {
        //if (!c.csa_victory && c.am_colonization && !c.us_imperialism && !c.nova_roma) {
          civ["CUB"].strength = 900;
          civ["CUB"].owner = "USA";
        //}
    }
    if (c.colonizingAmerica == 1902) {
        civ["CUB"].owner = "none";
    }

    worldNews("Panama Canal Completed",
          "The Panama Canal has been completed, revolutionizing global trade by connecting the Atlantic and Pacific Oceans.",
          "https://pancanal.com/wp-content/uploads/2021/10/vaporancon.webp",
          false, 28, 1914, 3, true);

    worldNews("Cuban Missile Crisis",
          "The Cuban Missile Crisis has brought the world to the brink of nuclear war, with the Soviet Union placing missiles in Cuba, just 90 miles from the U.S. coast.",
          "https://th-thumbnailer.cdn-si-edu.com/2dYxg9oELPPN0aBXvEXHaWOerFQ=/800x600/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/Cuban-Missile-Crisis-631.jpg",
          false, 35, 1962, 4, true);

    owner(civ,"CUB",[],"Cuba","Cuba",false);

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |   -=- NORTH AMERICA -=-    |.
    |                            |.
    |   Alternate timelines:     |.
    |      - Natives             |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    // Vikings
    if (nextYear == 985) {
        civ["VIN"].strength = 139;
    }

    // Natives
    if (nextYear == 1400) {
        civ["IRO"].strength = 2200;
    }
    if (nextYear == 1658) {
        civ["IRO"].state = 2;
        civ["IRO"].x = 690;
        civ["IRO"].y = 320;
        civ["IRO"].size = 9;
    }

    // Europeans
    if (c.colonizingAmerica == 1612) {
        civ["CAN"].strength = 3250;
        civ["QUE"].strength = 200;

        civ["CAN"].owner = colonizingPercentage(rng(82),colonizeNewWorld,"ENG",300);
        civ["QUE"].owner = colonizingPercentage(rng(83),colonizeNewWorld,"FRA",280);
    }
    if (c.colonizingAmerica == 1615) {
        civ["DUTc"].strength = 52;
        civ["DUTc"].owner = colonizingPercentage(rng(84),colonizeNewWorld,"DUT",100);
    }
    if (c.colonizingAmerica == 1647) {
        civ["CAN"].state = 2;
        civ["QUE"].state = 2;
    }
    if (c.colonizingAmerica == 1670) {
        civ["CAN"].state = 3;
        civ["CAN"].x -= 15;
        civ["CAN"].y += 30;
    }
    if (c.colonizingAmerica == 1680) {
        civ["QUE"].state = 3;
    }
    if (c.colonizingAmerica == 1682) {
        civ["QUE"].state = 4;
    }
    if (c.colonizingAmerica == 1730) {
        civ["CAN"].state = 4;
    }

    // New Sweden
    if (c.colonizingAmerica == 1637) {
        civ["SWEc"].strength = 17;
        civ["SWEc"].owner = colonizingPercentage(rng(85),colonizeNewWorld,"SWE",100);
    }
    if (c.colonizingAmerica == 1655) {
        if (rng(86) <= unlikely) {
            civ["SWEc"].state = 2;
            civ["SWEc"].strength = 500;
            civ["SWEc"].size += 3;
        }
    }
    if (c.colonizingAmerica == 1667) {
        if (rng(86) <= superUnlikely) {
            civ["SWEc"].state = 3;
            civ["SWEc"].x += 30;
            civ["SWEc"].y -= 10;
        } else {
            civ["SWEc"].strength = 0;
        }
    }

    // British America
    if (c.colonizingAmerica == 1775) {
        civ["CAN"].x = 630;
        civ["CAN"].y = 240;
        civ["CAN"].size = 11;
    
        if (!c.pax_francia) {
          civ["CAN"].name = "British " + c.newWorld;
        } else {
          civ["CAN"].name = "Quebec";
        }
    }
    if (c.colonizingAmerica == 1828) {
        if (!c.usa_exists || civ["USA"].strength <= 0) {
            civ["USA"].strength += 300;
            civ["USA"].state = 3;
        }
    }
    if (c.colonizingAmerica == 1828) {
        civ["CAN"].state = 6;
        if (civ["USA"].techecon < 5) {
            civ["CAN"].state = 8;
        }
    }
    if (c.colonizingAmerica == 1870) {
        civ["CAN"].owner = "none";
        civ["CAN"].hideName = false;
        if (c.pax_francia) {
            civ["CAN"].name = "Quebec";
            civ["CAN"].color = [57, 113, 228];
        }
        civ["CAN"].x -= 30;
        civ["CAN"].y -= 20;
        civ["CAN"].size += 8;
    }

    // French America
    if (c.colonizingAmerica == 1800) {
        if (c.usa_exists && civ["FRA"].strength > 0) {
            civ["LOU"].strength = 200;
            civ["LOU"].owner = "FRA";
        }
    }
    if (nextYear == 1995) {
        if (rng(118) <= atypical
            && civ["QUE"].strength <= 0
        ) {
            worldNews(`Quebec Gains Independence`,
                        `Quebec has formally separated from Canada following a successful independence referendum.`,
                        "https://www.ctvnews.ca/resizer/v2/7JQCVTTBHZEWTPCHK36S2YBEEA.jpg?smart=true&auth=6490e7ec4088f2358bd25eeceaaa2cd438bbc653ffdbb6166d96edbc8ea3b958&width=2000&height=1125",
                        true, 76, nextYear, 2, true);

            civ["QUE"].strength = 500;
            civ["QUE"].state = "a";
            civ["QUE"].name = "Quebec";
            civ["QUE"].owner = "none";
            civ["QUE"].x = 770;
            civ["QUE"].y = 250;
        }
    }

    // Spanish North America
    if (c.colonizingAmerica == 1800) {
        civ["FLO"].strength = 17;
        civ["FLO"].hideName = true;
    }
    if (c.colonizingAmerica == 1803) {
        civ["FLO"].state = 1;
    }

    // Russian America
    if (c.colonizingAmerica == 1792) {
        civ["ALA"].strength = 1250;
    }
    if (c.colonizingAmerica == 1811) {
        civ["ALA"].state = 2;
        civ["ALA"].size += 2;
        civ["ALA"].x -= 30;
    }
    if (c.colonizingAmerica == 1825) {
        civ["ALA"].state = 3;
        civ["ALA"].y -= 25;
        civ["ALA"].size += 2;
    }

    owner(civ,"CAN",[243, 40, 68],"Canada","Colonies",true);
    owner(civ,"QUE",[],"Quebec","Colonies",true);
    if (!c.burr_plot) owner(civ,"LOU",[],"Louisiana","Louisiana",false);
    owner(civ,"DUTc",[],"Amsterdam","Colonies",true);
    owner(civ,"SWEc",[],"Delaware","Colonies",true);
    newLand(civ,"DUTc");
    newLand(civ,"SWEc");

    // UNITED STATES 🦅🦅🗽

    if (nextYear == oppositeYear+1) {
        civ["USA"].adjective = "US";
        civ["USA"].color = [20, 134, 240];
        civ["USA"].merge = [];
    }

    c.unitedStates ++;
    if (c.colonizingAmerica == 1770 && !c.pax_francia && civ["CAN"].owner == "ENG") {
        c.unitedStates = 1770;
    }
    if (c.unitedStates == 1773) {
        worldNews("Boston Tea Party",
                "American colonists, frustrated with British taxation, have boarded ships and dumped tea into Boston Harbor in protest, escalating colonial tensions.",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Boston_Tea_Party_w.jpg/1200px-Boston_Tea_Party_w.jpg",
                false, 50, nextYear, 1, false);
    }
    if (c.unitedStates == 1776) {
        worldNews("The American Revolution",
                    "The first shots of the American Revolution have been fired, marking the beginning of the conflict between the American colonies and Britain.",
                    "https://homeofheroes.com/wp-content/uploads/2020/02/American-Revolution.jpg",
                    false, 51, nextYear, 2, true);
    }
    if (c.unitedStates == 1776) {
        /*if (RNG("American_Revolution",year) <= impossible || !c.am_colonization) {
          c.usa_exists = false;
        } else {*/
        civ["USA"].strength = 4030;
        civ["USA"].name = "United States of " + c.newWorld;
        c.usa_exists = true;
        worldNews("Declaration of Independence",
                    "The United States has adopted the Declaration of Independence, formally announcing the colonies' separation from Britain and the birth of a new nation.",
                    "https://cdn.britannica.com/21/143621-159-3EDE9040/Declaration-of-Independence-canvas-rotunda-John-Trumbull-July-4-1776.jpg",
                    false, 52, nextYear, 3, true);
        //}
    }
    if (c.unitedStates == 1777) {
        civ["USA"].state = "1a";
    }
    if (c.unitedStates == 1781) {
        civ["USA"].state = 1;
    }
    if (c.unitedStates == 1782) {
        civ["USA"].state = "1b";
    }
    if (c.unitedStates == 1783) {
        /*if (RNG("American_Revolution",year) <= superUnlikely) {
          c.usa_exists = false;
          civ["USA"].strength = 0;
        } else {*/
        civ["USA"].state = 2;
        civ["USA"].x = 550;
        worldNews(`Treaty of Paris`,
                `The Treaty of Paris has been signed, thus officially ending the American Revolutionary War and recognizing the independence of the United States.`,
                `https://lh5.googleusercontent.com/proxy/PihA7cPTFsTtBhUgNqVVg7vP_f5TdL7lkCs0OmoYCrDGUxVRTjYE8OiMzun8pP6O5c9jNp1-o8YfrAMXEOE6Zw9NVB5eJH0zL8XAA0YQqM7ZQvdbRNEW6zWBjcQYMEEd20vFM4SWmW3DvcF56D_-685f`,
                false, 53, nextYear, 1, true);
        //}
    }
    if (c.unitedStates == 1803 &&
        civ["USA"].strength > 0
    ) {
        civ["LOU"].strength = 0;
        civ["USA"].state = 3;
        civ["CSA"].state = 1;
        c.louisiana_purchase = true;

        worldNews(`Louisiana Purchase`,
                `The United States has completed the Louisiana Purchase, acquiring a vast territory from France and doubling the size of the nation.`,
                `https://scphistory.org/wp-content/grand-media/image/exclude_La_Purchase_Map.jpeg`,
                false, 54, nextYear, 2, true);
 
    }
    if (c.unitedStates == 1804) {
        if (rng(58) <= impossible) {
            civ["USA"].name = "Fredonia";
            civ["USA"].y -= 15;
            civ["USA"].size += 5;
        }
    }
    if (c.unitedStates == 1805) {
        if (c.usa_exists) {
            if (rng(119) <= incrediblyUnlikely) {
                worldNews(`Kingdom of Burr Formed`,
                        `Aaron Burr has successfully established an independent monarchy in the western territories, breaking from the United States.`,
                        "https://www.albanyinstitute.org/tl_files/pages/collections/Exhibition%20Banners/Aaron_Burr_portrait-og.jpg",
                        true, 78, nextYear, 2, true);

                c.burr_plot = true;
                c.manifest_destiny = false;
                civ["LOU"].strength = 112;
                civ["LOU"].name = "Kingdom of Burr";
                civ["LOU"].owner = "none";
                civ["LOU"].color = [170, 65, 65];
            }
        }
    }
    if (c.unitedStates == 1819) {
        civ["ORE"].strength = 200;
        civ["ORE"].color = [200, 200, 200];
    }
    if (c.unitedStates == 1821) {
        if (c.manifest_destiny) {
            civ["USA"].state = 4;
        }
    }
    if (c.unitedStates == 1835) {
        //if (c.am_colonization) {
        civ["TEX"].strength = 10;
        //}
    }
    if (c.unitedStates == 1836) {
        civ["TEX"].state = 2;
        civ["TEX"].name = "Texas";
        civ["TEX"].x -= 25;
        worldNews(`Texas Declares Independence`,
            `The Republic of Texas has declared its independence from Mexico, leading to a conflict that will shape the future of the region.`,
            `https://www.texasobserver.org/wp-content/uploads/2022/05/texas.webp`,
            false, 55, nextYear, 1, true);
        if (!c.usa_exists || !c.manifest_destiny || c.pax_francia) {
            civ["TEX"].state = "a";
        }
    }
    if (c.unitedStates == 1837) {
        if (c.manifest_destiny) {
            civ["USA"].state = 5;
        }
        if (civ["LOU"].name == "Kingdom of Burr") {
            civ["LOU"].name = "Republic of Burr";
        }
    }
    if (c.manifest_destiny) {
        if (c.unitedStates == 1839) {
            if (rng(120) <= superUnlikely) {
                civ["TEX"].state = 3;
                civ["TEX"].strength = 399;
            }
            if (!c.usa_exists) {
                civ["TEX"].state = "a";
            }
        }
        if (c.unitedStates == 1845) {
            civ["USA"].whiteLines = true;
            civ["USA"].merge = ["TEX"];
            worldNews(`Annexation of Texas`,
                `The Republic of Texas has been annexed by the United States, becoming the 28th state. This move has heightened tensions with Mexico.`,
                `https://cdn11.bigcommerce.com/s-2aln2k/images/stencil/1280x1280/products/240/538/1841map-2__67341.1420582707.jpg?c=2`,
                false, 56, nextYear, 1, false);
        }
        if (c.unitedStates == 1848) {
            civ["USA"].x = 400;
            civ["USA"].y -= 10;
            civ["USA"].size += 3;
            civ["USA"].merge = civ["USA"].merge.filter(item => item !== "TEX");
            civ["ORE"].strength = 0;
            if (rng(88) <= impossible) {
                c.big_mexico = true;
                civ["USA"].state = 8;
            } else if (rng(88) <= superUnlikely) {
                c.big_mexico = true;
                civ["USA"].state = 8;
                civ["TEX"].strength += 500;
            } else if (rng(88) <= unlikely) {
                civ["USA"].state = "c12";
            } else if (rng(88) <= possible) {
                civ["USA"].state = "c11";
            } else {
                civ["USA"].state = 6;
                worldNews(`Treaty of Guadalupe Hidalgo`,
                    `The Mexican-American War has ended, Mexico cedes vast territories to the United States.`,
                    `https://assets.editorial.aetnd.com/uploads/2009/11/gettyimages-113491874.jpg`,
                    false, 57, nextYear, 2, true);
            }
        }
        if (c.unitedStates == 1849) {
            if (rng(87) <= unlikely) {
                civ["ORE"].state = 1;
                civ["USA"].merge.push("ORE");
            }
        }
        if (c.unitedStates == 1854) {
            if (civ["USA"].state == 6 && rng(89) > superUnlikely) {
                civ["USA"].state = 7;
            }
        }

        // Civil War
        if (c.unitedStates == 1861) {
            if (c.usa_exists && civ["DUTc"].strength <= 0) {
                civ["CSA"].strength = 5;
                worldNews(`American Civil War`,
                    `The American Civil War has officially begun. The nation is now divided between the Union in the North and the Confederacy in the South.`,
                    `https://assets.editorial.aetnd.com/uploads/2009/10/civil-war-gettyimages-3427284.jpg`,
                    false, 58, nextYear, 2, true);
            }
        }
        if (c.unitedStates == 1863) {
            civ["CSA"].state = 2;
            worldNews(`Battle of Gettysburg`,
                `The Battle of Gettysburg has ended with a significant Union victory. This may be a turning point, as Union forces have repelled the Confederate invasion.`,
                `https://cdn.britannica.com/13/149613-159-AAE1FE89/Battle-of-Gettysburg-Currier-lithograph-Ives-July-3-1863.jpg`,
                false, 59, nextYear, 1, false);
            worldNews(`The Emancipation Proclamation`,
                `President Abraham Lincoln has issued the Emancipation Proclamation, declaring that all slaves in Confederate-held territory are to be set free.`,
                `https://www.battlefields.org/sites/default/files/styles/wys/public/thumbnails/image/Emancipation%20Proc.jpg`,
                false, 60, nextYear, 1, false); 
        }
        if (c.unitedStates == 1865) {
            if (rng(90) <= unlikely) {
                c.csa_victory = true;
                civ["CSA"].strength += 500;
                civ["CSA"].state = 3;
                worldNews(`American Civil War Ends`,
                    `The American Civil War has come to an end. The South has prevailed. The United States has fractured in two.`,
                    `https://upload.wikimedia.org/wikipedia/commons/b/bc/General_Robert_E._Lee_surrenders_at_Appomattox_Court_House_1865.jpg`,
                    true, 62, nextYear, 2, true);
            } else {
                worldNews(`American Civil War Ends`,
                    `The American Civil War has come to an end. The Union has prevailed. The South will slowly be reincorporated during Reconstruction.`,
                    `https://upload.wikimedia.org/wikipedia/commons/b/bc/General_Robert_E._Lee_surrenders_at_Appomattox_Court_House_1865.jpg`,
                    false, 61, nextYear, 2, true);
            }
        }

        if (c.csa_victory) altHist(nextYear, "csa_victory_timeline");
        

        // Mexican-American War

        if (c.unitedStates == 1867) {
            // Alaskan Purchase
            if (rng(59) <= impossible) {
                civ["ALA"].name = "Liechtensteinian Alaska";
                civ["ALA"].x = 300;
                civ["ALA"].y = 163;
                civ["ALA"].size = 9;
                civ["ALA"].strength += 300;
            } else if (rng(59) <= unlikely) {
                civ["ALA"].strength += 300;
            } else if (c.usa_exists) {
                civ["ALA"].owner = "USA";
                civ["ALA"].hideName = true;
            }
            civ["CAN"].state = 8;
            if (!c.usa_exists || c.pax_francia) {
                civ["ALA"].state = "a";
                civ["CAN"].state = "a";
            }
            if (!c.manifest_destiny) {
                civ["CAN"].state = "a";
            }
        
            
        }
        if (c.unitedStates == 1870) {
            //if (RNG("Mexican_American_War",year) > possible && c.manifest_destiny) {
            civ["USA"].state = 8;
            //}
        }
        if (c.unitedStates == 1898) {
            // Spanish-American War
            if (civ["PHI"].owner == "SPA") {
            civ["PHI"].owner = "USA";
            civ["HAW"].owner = "USA";
            civ["HAW"].hideName = true;
            }
            civ["SPAc"].owner = "USA";
            civ["SPAc"].hideName = true;
        }
        if (c.unitedStates == 1964) {
            worldNews(`Civil Rights Movement`,
                        `Mass protests and landmark legislation have expanded civil rights protections in the United States, dismantling segregation and outlawing discrimination.`,
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxZ-Yry0h0QywjZ6aN_5v1m3X6EQnbcc4fg&s",
                        false, 93, nextYear, 1, false);
        }
        if (c.unitedStates == 1968) {
            if (rng(122) <= veryUnlikely && c.usa_exists && c.manifest_destiny) {
                //eventLog.push("*1968: The United States annexes Canada");
                c.big_usa = true;
                civ["USA"].state = "c";
                civ["CAN"].strength = 0;
                civ["ALA"].strength = 0;
                civ["ORE"].strength = 0;
            }
        }

        if (c.unitedStates == 2001 && c.manifest_destiny &&
             c.islamicExtremism) {
            worldNews("September 11 Attacks",
                "Terrorists hijacked four planes, crashing them into the World Trade Center in New York City and the Pentagon in Washington, D.C.",
                "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/7060821/GettyImages-1161124.jpg",
                false, 49, nextYear, 1, true);
        }
    }
    // [United States]

    // United States Colonies

    owner(civ,"USA",[],"United States","Colonies",true);
    owner(civ,"ALA",[0, 0, 87],"Alaska","Alaska",false);
    owner(civ,"HAW",[],"Hawai'i","Hawaii",false);

    if (c.unitedStates == 1824) {
        civ["LBR"].strength = 2250;
    }
    if (c.unitedStates == 1825) {
        //if (c.usa_exists) {
        civ["LBR"].strength = 2250;
        //}
        /*if (RNG("US_Imperialism",year) <= unlikely && c.usa_exists) {
          c.us_imperialism = true;
          civ["LBR"].name = "U.S. Africa";
        }*/
    }
    if (c.unitedStates == 1829) {
        /*if (c.us_imperialism) {
          civ["LBR"].state = "a";
        }*/
    }
    if (c.unitedStates == 1932) {
        if (rng(97) < superUnlikely) {
            civ["USA"].ideology = "socialism";
            civ["USA"].x -= 50;
            worldNews("United States turns Socialist",
                "After the depression of 1929, the United States was not able to recover economically, leading to a socialist coup.",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/United_Socialist_States_of_America_flag.svg/2560px-United_Socialist_States_of_America_flag.svg.png",
                true, 64, nextYear, 1, false);
        }
    }
    if (c.unitedStates == 1940 && civ["USA"].ideology == "socialism") {
        civ["USA"].merge = ["CAN","ALA"];
        civ["USA"].y -= 50;
        civ["USA"].whiteLines = false;
        civ["CAN"].strength = 0;
        civ["ALA"].strength = 0;
    }
    if (c.unitedStates == 1947 && c.ww2) {
        /*for (const key in civs[nextYear]) {
            if (civ[key].owner == "FRA") {
                civ[key].owner = "USA";
                civ["USA"].merge.push(key);
                civ[key].strength = 0;
            }
        }*/
    }


    // Conditionals
    if (civ["USA"].state == 'a' || civ["USA"].state == 'b') {
        civ["USA"].color = [];
    }
    if (civ["USA"].ideology == "democracy") {
        civ["USA"].name = "United States of " + c.newWorld;
        civ["USA"].color = [20, 134, 240];
    }
    if (civ["USA"].ideology == "socialism") {
        civ["USA"].name = "United Socialist States of " + c.newWorld;
        civ["USA"].color = [79, 62, 147];
    }
    if (civ["USA"].ideology == "communism") {
        civ["USA"].name = "Communist States of " + c.newWorld;
        civ["USA"].color = [183, 105, 105];
    }

    // [North America]

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |      -=- OCEANIA -=-       |.
    |                            |.
    |   Alternate timelines:     |.
    |      - Natives             |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    owner(civ,"FAK",[],"Falklands","Falklands",true);

    if (nextYear == 1200) {
        civ["HAW"].strength = 2550;
    }
    if (nextYear == 1400) {
        civ["ZEA"].strength = 2250;
    }
    if (nextYear == 1795) {
        civ["HAW"].state = 2;
    }

    // European Colonization   
    if (nextYear == 1723) {
        civ["FRAa"].strength = 2250;
    }
    if (nextYear == 1822) {
        civ["FAK"].strength = 3250;
        civ["FAK"].owner = "ENG";
    }
    if (nextYear == 1870) {
        civ["FRAa"].state = 2;
    }
    if (nextYear == 1920) {
        civ["ANT"].strength = 2250;
    }

    // Australia

    if (nextYear == 1788) {
        civ["AUZ"].strength = 2250;
        civ["AUZ"].owner = colonizingPercentage(rng(48),colonizeOldWorld,"ENG",80);
        civ["ZEA"].state = 2;
        civ["ZEA"].owner = colonizingPercentage(rng(61),colonizeOldWorld,"ENG",80);
    }

    // Carving of Australia
    if (nextYear == rngRange(rng(49),1788,1830) && rng(50) < unlikely) {
        civ["PORz"].strength = 1000;
        civ["PORz"].owner = colonizingPercentage(rng(51),colonizeOldWorld,"POR",10);
    }
    if (nextYear == rngRange(rng(52),1788,1830) && rng(53) < unlikely) {
        civ["DUTz"].strength = 1000;
        civ["DUTz"].owner = colonizingPercentage(rng(54),colonizeOldWorld,"DUT",10);
    }
    if (nextYear == rngRange(rng(55),1828,1835) && rng(56) < unlikely) {
        civ["FRAz"].strength = 1000;
        civ["FRAz"].owner = colonizingPercentage(rng(57),colonizeOldWorld,"FRA",10);
    }

    if (nextYear == 1829) {
        civ["AUZ"].state = 2;
    }
    if (nextYear == 1840) {
        civ["ZEA"].state = 3;
    }
    if (nextYear == 1884) {
        civ["GERc"].strength = 300;
        civ["PNG"].strength = 500;
        civ["PNG"].hideName = true;
        civ["GERc"].owner = colonizingPercentage(rng(61),colonizeOldWorld,"GER",80);
        civ["PNG"].owner = colonizingPercentage(rng(61),colonizeOldWorld,civ["AUZ"].owner,300);
        if (civ["GERc"].owner == civ["PNG"].owner) {
            civ["GERc"].strength = 0;
        }
    }

    if (nextYear == 1885) {
        civ["ENGa"].strength = 1000;
        civ["ENGa"].hideName = true;
    }
    if (nextYear == 1900) {
        civ["AUZ"].name = "Commonwealth of Australia";
        civ["AUZ"].x -= 160;
        civ["AUZ"].size += 3;
    }
    if (nextYear == 1947) {
        civ["ZEA"].owner = "none";
    }
    if (nextYear == 1975) {
        civ["GERc"].strength = 0;
        civ["PNG"].owner = "none";
        civ["PNG"].hideName = false;
        civ["PNG"].y -= 20;
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
        civ["AUZ"].owner = "none";
        civ["AUZ"].x += 120;

    }

    owner(civ,"AUZ",[],"Australia","Australia",true);
    owner(civ,"ZEA",[],"New Zealand","New Zealand",false);

    owner(civ,"PORz",[15, 45, 122]," "," ",false);
    owner(civ,"DUTz",[15, 45, 122]," "," ",false);
    owner(civ,"FRAz",[15, 45, 122]," "," ",false);

    owner(civ,"GERc",[],"North Papau Guinea","New Guinea",true);
    owner(civ,"PNG",[],"Papau New Guinea","New Guinea",true);

    if (nextYear < 1900) {
        switch (civ["AUZ"].owner) {
            case "ENG":
                civ["AUZ"].name = "New South Wales";
                break;
            case "FRA":
                civ["AUZ"].name = "New South Occitania";
                break;
            case "SPA":
                civ["AUZ"].name = "New South Granada";
                break;
            case "POR":
                civ["AUZ"].name = "New South Sebastian";
                break;
            case "DUT":
                civ["AUZ"].name = "New South Holland";
                break;
            default:
                civ["AUZ"].name = "Australia";
                break;
        }
    }
}
