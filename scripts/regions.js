function regions(year) {
    let nextYear = year + 1;
    let civ = civs[nextYear];
    
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
    } else {
        civ["CHI"].x = 1930;
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
    
    if (nextYear == 1865) {
        civ["QIN"].state = 4;
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
    if (nextYear == 600) {
        civ["VIE"].strength = 0;
    }
    if (nextYear == 880) {
        civ["CAM"].state = 4;
    }
    if (nextYear == 940) {
        civ["VIE"].strength = 2500;
        civ["VIE"].state = 2;
        civ["VIE"].name = "Ngo";
    }
    if (nextYear == 992) {
        civ["VIE"].state = 4;
        civ["CHM"].strength = 0;
    }
    if (nextYear == 1045) {
        civ["BUR"].state = 2;
        civ["BUR"].name = "Pagan";
    }

    if (nextYear == 1289) {
        civ["BUR"].name = "Pegu";
        civ["BUR"].x += 30;
    }
    if (nextYear == 1433) {
        civ["CAM"].name = "Cambodia";
        civ["CAM"].size -= 2;
    }
    if (nextYear == 1558) {
        civ["BUR"].name = "Toungoo";
    }

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
    if (nextYear == -600) {
        // Lydia in Anatolia
        civ["HIT"].state = 6;
        civ["HIT"].color = [212, 152, 69];
        civ["HIT"].x += 10;
        civ["HIT"].size += 2;
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |   -=- CAUCASUS -=-         |.
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

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |   -=- GREECE -=-           |.
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
     *   -=- Greece VS Persia -=-
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
        civ["ABY"].strength = 4200;
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
        civ["CHO"].strength = 4200;
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

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |   -=- ROMAN EMPIRE -=-     |.
    |                            |.
    | Alternate timelines:       |.
    | ! Carthage Wins Punic Wars |.
    | ! Nova Roma                |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (nextYear == -753) {
        civ["ROM"].strength = 3000;
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
                    false, 1, -201, 7, true);
        } else {
            /* MAJOR alternate history branch:
            Carthage winning Punic Wars - civ["CAR"].strong
            */
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
            worldNews("Carthage Wins Punic Wars",
                        "After many gruelling wars with Rome, the mighty Carthage managed to pull out on top. What will the fate of the Mediterranean be now?",
                        "https://assets.editorial.aetnd.com/uploads/2009/10/gettyimages-534251372.jpg",
                        true, 2, -200, 7, true);
              
        }
    }
    if (civ["CAR"].techecon == 100) {
        worldNews("Battle of Cannae",
                    "Against all odds, Hannibal defeats Rome's biggest army. Current estimates are that over 70,000 Romans lay slain on the battlefield.",
                    "https://sites.psu.edu/successoftheromans/wp-content/uploads/sites/10644/2014/04/battle-of-cannae-struggle.jpg",
                    false, 4, -216, 2, false);
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
        } if (civ["ROM"].techecon >= 731) {
            civ["ROM"].state = 9;
        } if (civ["ROM"].techecon >= 752) {
            civ["ROM"].state = 10;
        } if (civ["ROM"].techecon >= 803) {
            civ["ROM"].state = "10a";
        }
    }
     
    if (nextYear == -42) {
        // Rome Colonizes America*
        if (rng(2) <= superUnlikely && civ["ROM"].strong) {
          civ["SPAc"].name = "Nova Roma";
          civ["SPAc"].strength = 3000;
          civ["SPAc"].color = [178, 0, 0];
          civ["ROM"].america = true;
        }
    }
    /*   MAJOR alternate history branch:
     *       Rome discovers America - civ["ROM"].america
     */

    if (civ["ROM"].america) {
        worldNews("Rome Discovers New World",
                    "Greek geographer Strabo has discovered what many believe to be a previously unknown continent. Merchants have already begun trading with the natives.",
                    "https://i0.wp.com/www.forge22.com/wp-content/uploads/caribbean-map-11-18x12-colored-web.jpg",
                    true, 3, -42, 20, true);
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
        }
        if (nextYear == 221) {
            civ["CSA"].state = "a2";
        }
    }

    // Rome Splits
    if (nextYear == 287) {
        if (civ["ROM"].strong) {
          civ["ROM"].state = 11;
          civ["ROM"].name = "Western Roman Empire";
          civ["ROM"].x -= 50;
          civ["ROM"].y -= 10;
          civ["ROM"].size -= 4;
          civ["BYZ"].strength = 1250;
        }
    }
    if (nextYear == 325) {
        civ["BYZ"].strength = 0;
        civ["ROM"].state = "10a";
        if (civ["ROM"].name == "Western Roman Empire") {
            civ["ROM"].name = "Roman Empire";
        }
        civ["ROM"].x += 50;
        civ["ROM"].y += 10;
        civ["ROM"].size += 4;
    }
    if (nextYear == 396 && civ["ROM"].strong) {
        civ["ROM"].state = 11;
        civ["ROM"].name = "Western Roman Empire";
        civ["ROM"].x -= 50;
        civ["ROM"].y -= 10;
        civ["ROM"].size -= 4;
        civ["BYZ"].strength = 1250;
    }

    if (nextYear == 438) {
        // Vandals
        if (civ["CAR"].strength <= 0) {
            civ["CAR"].name = "Vandals";
            civ["CAR"].strength = 100;
            civ["CAR"].x += 10;
            civ["CAR"].y += 20;
            civ["CAR"].color = [213, 158, 78];
        }
    }
    if (nextYear == 461) {
        civ["GTH"].strength = 500;
    }
    if (nextYear == 476) {
        // Fall of Rome
        if (rng(7) <= unlikely) {
            civ["ROM"].strength += 2000;
            civ["ROM"].name = "Rome";
        } else {
            civ["ROM"].strength = 0;
        }
        civ["BYZ"].name = "Byzantine Empire";
    }

    /*
     *    BYZANTINE EMPIRE
     */

    if (nextYear == 550) {
        civ["BYZ"].state = 2;
        civ["CAM"].name = "Chenla";
        civ["CHI"].name = "W. Wei/N. Qi/Chen";
    }
    if (nextYear == 677) {
        civ["BYZ"].state = 3;
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
    if (nextYear == -30) {
        if (civ["ROM"].america) {
          civ["SPAc"].state = 2;
        }
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
        worldNews("Japan becomes Christian",
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
        civ["PHI"].name = "Philippines ( JP )";
        civ["PHI"].color = [255, 200, 178];
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
            if (civ["RUS"].communist) {
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
                        "an American B-29 bomber dropped the world's first deployed atomic bombs over Japan. Casualties are estimated to be in the hundreds of thousands.",
                        "https://assets.nationbuilder.com/ican/pages/321/meta_images/original/header-hiroshimadamage.jpg?1579887815",
                        false, 31, nextYear, 2, true);
            worldNews("Japan Surrenders",
                        "After the atomic bombings over Japan, the government has unconditionally surrendered to the United States",
                        "https://cdn.aarp.net/content/dam/aarp/politics/events-and-history/2020/08/1140-vj-day-times-square-flag.imgcache.rev3b2f37bf6356a65ebe23b52c068e42cc.jpg",
                        false, 32, nextYear, 2, true);
            civ["KOR"].strength = 500;
            civ["FRAi"].strength = 500;
        }
    }

    // Big Japan
    if (civ["JAP"].big && !civ["JAP"].loses) {
        civ["USAc"].color = [255, 200, 178];
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
        civ["SOM"].strength = 2080;
    }
    if (nextYear == 1220) {
        civ["MON"].state = 3;
        civ["CHI"].y += 30;
    }
    if (nextYear == 1230) {
        civ["MON"].state = 4;
        civ["SPA"].state = 6;
        civ["LIV"].strength = 2080;
        civ["YEM"].name = "Rasulids";
    }
    if (nextYear == 1237) {
        civ["MON"].state = 5;
    }
    if (nextYear == 1248) {
        civ["MON"].state = 7;
        civ["GHA"].strength = 0;
    }
    if (nextYear == 1260) {
        civ["MON"].state = 8;
        civ["SWE"].state = 2;
    }
    if (nextYear == 1265) {
        civ["MON"].state = 9;
        civ["BUR"].state = 3;
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

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |     -=- FRANCE -=-         |.
    |                            |.
    |   Alternate timelines:     |.
    |       ? Celts              |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (nextYear == 506) {
        civ["GTH"].state = 2;
        civ["FRK"].strength = 1500;
    }
    if (nextYear == 507) {
        /*if (c.celtics) {
          civ["FRK"].name = "Gaulic Empire";
        }*/
    }
    if (nextYear == 779) {
        civ["FRK"].state = 4;
        civ["BRI"].strength = 573;
    }
    if (nextYear == 780) {
        /*if (c.celtics) {
          civ["BRI"].name = "Armorica";
        }*/
    }

    // Treaty of Verdun    
    if (nextYear == 842) {
        civ["HRE"].strength = 1600;
        civ["FRA"].strength = 2600;
        civ["ITA"].strength = 2600;
    }
    if (nextYear == 843) {
        civ["FRK"].strength = 0;
        /*if (!c.roman_empire) {
          civ["GTH"].strength = 0;
        }*/
  
        /*if (c.celtics) {
          civ["HRE"].name = "H.G.E";
          civ["FRA"].name = "Gaul";
          civ["FRA"].size += 2;
        }*/
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

    if (nextYear == 519) {
        civ["ENG"].strength = 3000;
    }
    if (nextYear == 520) {
        /*if (c.celtics) {
          civ["ENG"].name = "Prydain";
        }*/
    }
    if (nextYear == 850) {
        civ["ENG"].state = 3;
        civ["ENG"].x = 1225;
        civ["ENG"].y = 235;
    }
    if (nextYear == 928) {
        civ["ENG"].name = "England";
        civ["ENG"].state = 5;
    }
    if (nextYear == 1001) {
        /*if (c.celtics) {
          civ["IRE"].name = "Celtic Kingdoms";
        }*/
    }

    // Vikings
    if (nextYear == 1016) {
        civ["ENG"].name = " ";
        civ["DEN"].name = "North Sea Empire";
        civ["DEN"].x -= 50;
    }

    if (nextYear == 1155) {
        civ["ENG"].state = 6;
    }
    if (nextYear == 1205) {
        civ["ENG"].state = 7;
    }
    if (nextYear == 1280) {
        civ["SCO"].strength = 1250;
        civ["ENG"].state = 8;
        civ["THA"].strength = 1250;
        civ["NAP"].name = "Naples";
    }
    if (nextYear == 1281) {
        /*if (c.celtics) {
          civ["SCO"].name = "Pictland";
        }*/
    }
    if (nextYear == 1480) {
        civ["ENG"].state = 9;
    }

    if (nextYear == 1707) {
        civ["SCO"].strength = 0;
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

    if (nextYear == 882) {
        civ["ICE"].state = 2;
    }
    if (nextYear == 1035) {
        civ["NOR"].name = "Norway";
        civ["DEN"].name = "Denmark";
        civ["DEN"].x += 50;
        civ["ENG"].name = "England";
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
        civ["TUR"].state = 4;
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
    if (nextYear == 1605) {
        civ["DENc"].strength = 2250;
    }

    if (nextYear == 1710) {
        civ["SWE"].state = 3;
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
        civ["HUN"].strength = 2600;
        civ["BUL"].state = 4;
    }

/* ______________________________
 / \                             \.
|   |                            |.
 \_ |  -=- ISLAMIC WORLD -=-     |.
    |                            |.
    |   Alternate timelines:     |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /.                           /.
    \_/___________________________*/

    if (nextYear == 628) {
        civ["ISL"].strength = 1250;
        civ["PER"].state = 3;
    }
    if (nextYear == 635) {
        civ["ISL"].state = 2;
        civ["YEM"].strength = 0;
        civ["PER"].name = "";
        civ["BUL"].strength = 2250;
    }
    if (nextYear == 662) {
        civ["ISL"].name = "Umayyad Caliphate";
        civ["ISL"].state = 4;
    }
    if (nextYear == 715) {
        civ["ISL"].state = 5;
    }
    if (nextYear == 642) {
        civ["ISL"].state = 3;
    }
    if (nextYear == 750) {
        civ["ISL"].name = "Abbasid Caliphate";
        civ["VEN"].strength = 2600;
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

    if (civ["SPA"].iberianUnion) {
        civ["POR"].color = [255, 223, 102];
        civ["BRA"].color = [255, 223, 102];
    } else {
        civ["POR"].color = [];
        civ["BRA"].color = [];
    }
    if (nextYear > 1799) {
        civ["POR"].color = [0, 136, 118];
        civ["PORa"].color = [0, 136, 118];
        civ["PORi"].color = [0, 136, 118];
        civ["PORz"].color = [0, 136, 118];
    }
    if (nextYear > 1950) {
        civ["PORa"].color = [];
        civ["PORi"].color = [];
        civ["PORz"].color = [];
    }
    
    // Start
    if (nextYear == 718) {
        civ["SPA"].strength = 3250;
    }
    if (nextYear == 757) {
        civ["COR"].strength = 1000;
    }
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
        civ["SPA"].color = [];
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
        civ["SPA"].color = [];
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
    if (nextYear == 1234) {
        civ["COR"].state = 3;
    }
    if (nextYear == 1237) {
        civ["COR"].name = "Granada";
        civ["COR"].x += 5;
        civ["COR"].y += 9;
    }
    if (nextYear == 1357) {
        civ["SPA"].x += 15;
        civ["SPA"].y += 25;
        civ["SPA"].size += 2;
    }
    if (nextYear == 1469) {
        civ["SPA"].name = "Spain";
        civ["ARA"].strength = 0;
        worldNews("Marriage of Ferdinand & Isabella",
                    "Ferdinand of Aragon and Isabella of Castile have married, uniting their two powerful kingdoms and laying the foundation for a unified Spain.",
                    "https://sites.psu.edu/sdapassion/files/2018/09/899-base_image_4.1424284781-10caq4t.jpg",
                    false, 37, 1469, 3, true);
    }
    // End of Reconquista
    if (nextYear == 1492) {
        civ["SPA"].state = 7;
        civ["COR"].strength = 0;
    }

    worldNews("Spain Discovers New World",
                "Christopher Columbus set sail from Spain with three ships, seeking a westward route to Asia. However, he accidently discovered an unknown landmass.",
                "https://assets.editorial.aetnd.com/uploads/2019/10/columbus-ships-gettyimages-1056336226.jpg",
                false, 36, 1492, 5, true);

    // Iberian Union
    if (nextYear == 1580) {
        civ["SPA"].iberianUnion = true;
        if (civ["SPA"].iberianUnion) {
            civ["BRA"].name = "Brazil (Iberian Union)";
            civ["POR"].strength = 0;
            civ["SPA"].name = "Iberian Union";
        }
    }
    if (nextYear == 1641) {
        civ["SPA"].iberianUnion = false;
        if (!civ["SPA"].iberianUnion) {
            if (civ["BRA"].name != "Dutch Brazil") {
                civ["BRA"].name = "Portuguese Brazil";
            }
            civ["POR"].strength = 1000;
            civ["SPA"].name = "Spain";
        }
    }

    if (nextYear == 1714) {
        civ["SPA"].state = 9;
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

    if (civ["PHI"].name == "Philippines ( JP )") {
        civ["PHI"].color = [255, 200, 178];
    } else if (civ["PHI"].name == "Philippines ( US )") {
        civ["PHI"].color = [20, 134, 240];
    } else if (civ["PHI"].name == "Philippines") {
        civ["PHI"].color = [70, 152, 112];
    } else {
        civ["PHI"].color = [];
    }

    if (nextYear == 651) {
        civ["SVJ"].strength = 2250;
    }
    if (nextYear == 1292) {
        civ["SVJ"].state = 2;
    }
    if (nextYear == 1372) {
        civ["MAJ"].state = 2;
        civ["SVJ"].name = "";
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

    if (nextYear == 300) {
        civ["GHA"].strength = 1050;
    }
    if (nextYear == 1180) {
        civ["BUN"].strength = 2080;
    }
    if (nextYear == 1273) {
        civ["MAL"].strength = 1250;
        civ["BUN"].name = "Bunyoro";
        civ["MOR"].name = "Maranids";
    }
    if (nextYear == 1392) {
        civ["KON"].strength = 1550;
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

    if (civ["BRA"].name == "Brazil") {
        civ["BRA"].color = [13, 185, 57];
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

    // Europeans
    if (nextYear == 1533) {
        civ["INC"].strength = 0;
    }
    if (nextYear == 1539) {
        civ["INC"].strength = 30;
        civ["INC"].name = "Neo-Incan State";
        civ["INC"].state = 3;
        civ["INC"].size -= 8;
        civ["INC"].y -= 10;
    }
    if (nextYear == 1545) {
        civ["VEZ"].name = "Venezuela";
    }

    // Latin America Independence
    if (nextYear == 1810) {
        civ["ARG"].strength = 3200;
        civ["PAR"].strength = 3200;
    }
    if (nextYear == 1817) {
        civ["CHL"].strength = 3200;
        civ["VEZ"].strength = 3;
    }
    if (nextYear == 1819) {
        civ["GCO"].strength = 3200;
    }
    if (nextYear == 1822) {
        civ["BRA"].state = 7;
        civ["PEU"].strength = 3200;
  
        civ["BRA"].size = 20;
        civ["BRA"].x = 790;
        civ["BRA"].y = 735;
        civ["BRA"].name = "Brazil";
    }
    if (nextYear == 1829) {
        civ["URU"].strength = 3200;
    }
    if (nextYear == 1830) {
        if (rng(16) > veryUnlikely) {
          civ["EQU"].strength = 3200;
          civ["COL"].strength = 3200;
          civ["VEZ"].strength = 900;
          civ["GCO"].strength = 0;
        }
        
        civ["ARG"].name = "Argentina";
    }
    if (nextYear == 1837) {
        civ["PEU"].state = 3;
        civ["PEU"].name = "Peru-Bolivia";
        civ["BOL"].name = "";
    }
    if (nextYear == 1840) {
        if (rng(17) >= unlikely) {
          civ["PEU"].state = 1;
          civ["PEU"].name = "Peru";
          civ["BOL"].name = "Bolivia";
        }
    }

    worldNews("War of the Triple Alliance",
          "The War of the Triple Alliance has begun, with Paraguay against Argentina, Brazil, and Uruguay in one of South America's bloodiest conflicts ever seen.",
          "https://maps.quickworld.com/maps/qmg/qmg-soa-w70-q01.png",
          false, 34, 1864, 4, true);

    if (nextYear == 1870) {
        civ["ARG"].state = 2;
        civ["CHL"].state = 2;
        /*if (RNG("War_of_the_Triple_Alliance",year) <= veryUnlikely) {
          civ["PAR"].state = 3;
          civ["URU"].strength = 0;
        }*/
    }
    if (nextYear == 1880) {
        if (civ["PAR"].state != 3) {
            civ["PAR"].state = 2;
        }
        civ["CHL"].state = 3;
        civ["ARG"].state = 3;
        civ["BRA"].state = 8;
        civ["COL"].state = 2;
    }
    if (nextYear == 1900) {
        civ["VEZ"].state = 2;
    }
    if (nextYear == 1943) {
        if (rng(17) && civ["GCO"].strength <= 0) {
          civ["EQU"].state = 2;
          civ["PEU"].state = 2;
        }
    }


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
    if (nextYear == 1804) {
        civ["HAI"].strength = 700;
    }
    if (nextYear == 1821) {
        civ["MEX"].strength = 3200;

        /*if (!c.usa_exists || !c.manifest_destiny) {
          civ["MEX"].state = "a";
        }*/
    }
    if (nextYear == 1822) {
        civ["CEN"].strength = 3200;
    }
    if (nextYear == 1839) {
        civ["CEN"].state = 2;
    }
    if (nextYear == 1842) {
        civ["DOM"].strength = 700;
    }

    // French Invasion of Mexico
    if (nextYear == 1863) {
        civ["MEXa"].strength = 4;
    }

    // Spanish-American War
    if (nextYear == 1898) {
        //if (!c.csa_victory && c.am_colonization && !c.us_imperialism && !c.nova_roma) {
          civ["CUB"].strength = 900;
          civ["CUB"].color = [69, 154, 234];
        //}
    }
    if (nextYear == 1902) {
        civ["CUB"].name = "Cuba";
        civ["CUB"].color = [];
    }

    worldNews("Panama Canal Completed",
          "The Panama Canal has been completed, revolutionizing global trade by connecting the Atlantic and Pacific Oceans.",
          "https://pancanal.com/wp-content/uploads/2021/10/vaporancon.webp",
          false, 28, 1914, 3, true);

    worldNews("Cuban Missile Crisis",
          "The Cuban Missile Crisis has brought the world to the brink of nuclear war, with the Soviet Union placing missiles in Cuba, just 90 miles from the U.S. coast.",
          "https://th-thumbnailer.cdn-si-edu.com/2dYxg9oELPPN0aBXvEXHaWOerFQ=/800x600/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/Cuban-Missile-Crisis-631.jpg",
          false, 35, 1962, 4, true);

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

    // Pre-Columbian America
}