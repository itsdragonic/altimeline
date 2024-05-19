var civs = {};
civs[-2024] = {
    "BG": {
        name: "background civs",
        state: 1,
        strength: 9999,
    },
    "ISR": {
        // civ info
        name: "Canaan",
        state: 1,
        strength: 525,
        techecon: 2,

        // text position info
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

        x: 1993,
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
    }
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
function rearrange(array) {
    frontItem(array, "GRE");
    frontItem(array, "ROM");
    if (civs[timeline]["CAR"].strong) {
        frontItem(array, "CAR");
    }

    frontItem(array, "lakes");
    frontItem(array, "nuclear");
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

    // Events
    if (nextYear == -2014) {
        civ["EGY"].state = 2;
    }
    if (nextYear == -1994) {
        civ["MES"].strength = 1450;
    }
    if (nextYear == -1720) {
        civ["EGY"].state = 1;
    }

    /*////////////////////////////////////

                ANCIENT EGYPT

    ////////////////////////////////////*/

    if (nextYear == -1700) {
        
        civ["EGY"].name = "Egyptian Empire";
        civ["EGY"].x = 1380;
    }
    if (nextYear == -1673) {
        civ["CHI"].name = "Shang Dynasty";
        civ["CHI"].state = 2;
        worldNews("Shang Dynasty founded",
                "The Shang Dynasty has overthrown the Xia dynasty in China.",
                "https://i.pinimg.com/originals/a1/16/7a/a1167a77515cd85570170995ed947be7.gif",
                false, 10, nextYear, 6, false);
    }
    if (nextYear == -1691) {
        worldTech = 200;
    }
    if (nextYear == -1550) {
        civ["EGY"].state = 2;
        civ["EGY"].name = "Egyptian New Kingdom";
        civ["EGY"].x = 1330;
    }
    if (nextYear == -1520) {
        civ["lakes"].state = 2;
    }
    if (nextYear == -1504) {
        civ["EGY"].state = 3;
        civ["BUR"].strength = 4400;
    }
    if (nextYear == -1500) {
        civ["ARM"].strength = 4000;
    }
    
    if (nextYear == -1454) {
        civ["MES"].state = 2;
    }
    if (nextYear == -1348) {
        civ["VIE"].strength = 1450;
    }
    if (nextYear == -1270) {
        civ["ARM"].name = "Arme-Shu";
        civ["ARM"].x += 50;
    }
    if (nextYear == -1178) {
        worldTech = 300;
    }

    worldNews("Bronze Age Collapse...",
                "Major cities have been destroyed, whole civilizations have fallen, diplomatic and trade relations are severed, and even writing systems have vanished.",
                "https://cdn.thecollector.com/wp-content/uploads/2021/07/fall-of-troy-bronze-age-collapse.jpg",
                false, 7, rngRange(rng(5),-1200,-1100), 35, true);

    if (nextYear == -1100) {
        civ["MES"].state = 3;
        civ["EGY"].state = 1;
        civ["ARM"].name = "Nairi";
    }
    if (nextYear == -1050) {
        civ["ISR"].state = 2;
        civ["ISR"].strength = 330;
        civ["ISR"].name = "Israel";
    }
    if (nextYear == -1046) {
        civ["CHI"].name = "Zhou Dynasty";
        worldNews("Zhou Dynasty founded",
                "The Zhou Dynasty has overthrown the Shang dynasty in China.",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/States_of_Zhou_Dynasty.png/310px-States_of_Zhou_Dynasty.png",
                false, 11, nextYear, 6, false);
    }
    if (nextYear == -950) {
        civ["ISR"].state = 3;
    }
    if (nextYear == -933) {
        civ["LIB"].strength = 210;
    }
    if (nextYear == -845) {
        civ["GRE"].strength = 750;
        civ["ARM"].name = "Urartu";
    }
    if (nextYear == -810) {
        // Carthage
        civ["CAR"].strength = 3000;
    }
    if (nextYear == -776) {
        worldNews("First Olympic Games Held",
                "Koroibos, a cook from the Greek city of Elis, won the stadion race, a foot race 600 feet long. The next game will be held in 4 years.",
                "https://www.historyonthenet.com/wp-content/uploads/2014/07/anicent-olympics-games.jpg",
                false, 15, nextYear, 6, false);
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
    if (nextYear == -611) {
        civ["PER"].strength = 300;
    }
    if (nextYear == -589) {
        civ["IND"].strength = 4330;
        civ["CHI"].name = "Chinese Warring Kingdoms";
        civ["CHI"].state = 3;
        civ["ARM"].name = "Armenia";
    }
    if (nextYear == -586) {
        worldNews("Temple of Jerusalem Destroyed",
                "The First Temple of Jerusalem has been destroyed by the Babylonian Empire...",
                "https://upload.wikimedia.org/wikipedia/commons/0/00/%28Venice%29_La_distruzione_del_tempio_di_Gerusalemme_-Francesco_Hayez_-_gallerie_Accademia_Venice.jpg",
                false, 14, nextYear, 2, true);
    }
    if (nextYear == -548) {
        civ["PER"].name = "Achaemenid Empire";
        civ["CHO"].strength = 4200;
    }
    if (nextYear == -520) {
        civ["PER"].state = 2;
    }

    // Buddha
    worldNews("The Buddha is Enlightened",
                "Siddhartha Gautama achieves spiritual awakening under the Bodhi Tree.",
                "https://qph.cf2.quoracdn.net/main-qimg-138efc066fd50ef90c4a13b9d2d0df58-pjlq",
                false, 6, rngRange(rng(3),-563,-400), 10, true);


    if (nextYear == -480) {
        worldNews("The Battle of Thermopylae",
                "In central Greece at the mountain pass of Thermopylae, Xerxes of Peria has won. The Greco-Persian wars still rages on however...",
                "https://cdn.thecollector.com/wp-content/uploads/2023/04/battle-thermopylae-marathon.jpg",
                false, 12, nextYear, 3, false);
    }
    if (nextYear == -472) {
        civ["GRE"].state = 2;
    }
    if (nextYear == -385) {
        civ["ABY"].strength = 4200;
        civ["GRE"].state = 3;
    }
    if (nextYear == -339) {
        civ["IND"].state = 2;
        civ["IND"].name = "Nanda Empire";
    }

/*
    __  ___                    __            _                ______                _         
   /  |/  /___ _________  ____/ /___  ____  (_)___ _____     / ____/___ ___  ____  (_)_______ 
  / /|_/ / __ `/ ___/ _ \/ __  / __ \/ __ \/ / __ `/ __ \   / __/ / __ `__ \/ __ \/ / ___/ _ \
 / /  / / /_/ / /__/  __/ /_/ / /_/ / / / / / /_/ / / / /  / /___/ / / / / / /_/ / / /  /  __/
/_/  /_/\__,_/\___/\___/\__,_/\____/_/ /_/_/\__,_/_/ /_/  /_____/_/ /_/ /_/ .___/_/_/   \___/ 
                                                                         /_/                  
*/

    // Alexander the Great
    worldNews("Alexander III Becomes King",
                "Succeeding his father Phillip II, King Alexander III of Macedon has ambitious plans...",
                "https://images.immediate.co.uk/production/volatile/sites/7/2019/05/GettyImages-184255971-0a90115-30ece46.jpg",
                false, 9, -336, 3, false);

    // Collapse of Persia
    if (nextYear == -330) {
        civ["PER"].strength = 0;
        worldNews("Macedonia Conquers Persia",
                "With the death of Darius III, Alexander the Great has managed to conquer the mighty Persian Empire and continues to march onward.",
                "https://historyfair0729.weebly.com/uploads/3/8/6/2/38626189/3739680_orig.jpg",
                false, 8, -330, 10, true);
    }
    if (nextYear == -341) {
        civ["GRE"].state = 4;
        civ["CHO"].name = "Cholas";
        civ["CHO"].state = 2;
        civ["CHO"].x += 10;
    }
    if (nextYear == -330) {
        civ["GRE"].name = "Macedonian Empire";
        civ["GRE"].state = 5;

        civ["GRE"].x = 1520;
        civ["GRE"].y = 355;
        civ["GRE"].size = 10;
    }
    if (nextYear == -322) {
        civ["IND"].name = "Mauryan Empire";
    }
    if (civ["IND"].name == "Mauryan Empire") {
        civ["IND"].color = [9, 64, 24];
    } else {
        civ["IND"].color = [];
    }
    if (nextYear == -319) {
        civ["GRE"].name = "Hellenic Kingdoms";
        civ["PER"].name = "Parthian Empire";
        civ["GRE"].state = 6;
    }
    if (nextYear == -300) {
        civ["GEO"].strength = 2450;
    }
    if (nextYear == -292) {
        civ["GEO"].state = 3;
        civ["GEO"].name = "Iberia";
    }
    if (nextYear == -282) {
        civ["CHI"].state = 4;
    }
    if (nextYear == -254) {
        civ["VIE"].name = "Au Lac";
        civ["VIE"].state = 2;
    }  

/*//////////////////////////////////////////////////////////////////////////////////////

  ________            ____  _      __  __             ____   ____                     
 /_  __/ /_  ___     / __ )(_)____/ /_/ /_     ____  / __/  / __ \____  ____ ___  ___ 
  / / / __ \/ _ \   / __  / / ___/ __/ __ \   / __ \/ /_   / /_/ / __ \/ __ `__ \/ _ \
 / / / / / /  __/  / /_/ / / /  / /_/ / / /  / /_/ / __/  / _, _/ /_/ / / / / / /  __/
/_/ /_/ /_/\___/  /_____/_/_/   \__/_/ /_/   \____/_/    /_/ |_|\____/_/ /_/ /_/\___/ 
                                                                                      

/////////////////////////////////////////////////////////////////////////////////////*/
   
    if (nextYear == -753) {
        civ["ROM"].strength = 3000;
        civ["KOR"].strength = 3000;
    }
    if (civ["ROM"].techecon >= 461) {
        civ["ROM"].state = 2;
    } if (civ["ROM"].techecon >= 483) {
        civ["ROM"].state = 3;
    } if (civ["ROM"].techecon >= 531) {
        civ["ROM"].state = 4;
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
    civ["ROM"].strong = false;
    if (civ["ROM"].techecon >= 552) {
        if (rng(1) > veryUnlikely) {
        civ["CAR"].strength = 0;
        civ["ROM"].strong = true;
        worldNews("Rome Wins Punic Wars",
                    "After many gruelling wars with Carthage, Rome managed to pull out on top. What will the fate of the Mediterranean be now?",
                    "https://www.worldhistory.org/img/c/p/360x202/2171.jpg",
                    false, 1, -201, 20, true);
        } else {
            civ["CAR"].state = "a";
            civ["CAR"].strong = true;
            civ["ROM"].state = 4;
            civ["ROM"].color = [98, 145, 140];
            worldNews("Carthage Wins Punic Wars",
                        "After many gruelling wars with Rome, the mighty Carthage managed to pull out on top. What will the fate of the Mediterranean be now?",
                        "https://assets.editorial.aetnd.com/uploads/2009/10/gettyimages-534251372.jpg",
                        true, 2, -200, 20, true);
              
        }
    }
    if (civ["CAR"].techecon >= 100) {
        worldNews("Battle of Cannae",
                    "Against all odds, Hannibal defeats Rome's biggest army. Current estimates are that over 70,000 Romans lay slain on the battlefield.",
                    "https://sites.psu.edu/successoftheromans/wp-content/uploads/sites/10644/2014/04/battle-of-cannae-struggle.jpg",
                    false, 4, -216, 2, false);
    }

    // Carthage Wings
    if (nextYear == -218) {
        civ["CHI"].name = "Qin Dynasty";
    }

    // Expansion of Rome
    if (civ["ROM"].strong) {
        if (civ["ROM"].techecon >= 597) {
            civ["ROM"].state = 6;
        } if (civ["ROM"].techecon >= 631) {
            civ["ROM"].state = 7;
        } if (civ["ROM"].techecon >= 681) {
            civ["ROM"].state = 8;
        } if (civ["ROM"].techecon >= 731) {
            civ["ROM"].state = 9;
        } if (civ["ROM"].techecon >= 752) {
            civ["ROM"].state = 10;
        }
    }


    // Continue Timeline
    
    if (nextYear == -222) {
        civ["PER"].state = 4;
    }
    if (nextYear == -206) {
        civ["CHI"].name = "Han Dynasty";
        civ["VIE"].name = "Nanyue";
        civ["VIE"].state = 1;
    }
    if (nextYear == -198) {
        civ["ROM"].state = 5;
    }
    if (nextYear == -180) {
        civ["IND"].state = 3;
        civ["IND"].name = "Indian Kingdoms";
        civ["IND"].x += 35;
        civ["CHI"].state = 5;
        civ["ARM"].state = 2;
    }
    if (nextYear == -145) {
        civ["ISR"].strength = 333;
        civ["ISR"].name = "Hasmonea";
    }
    if (nextYear == -136) {
        civ["PER"].state = 3;
        civ["PER"].strength = 800;
    }
    if (nextYear == -122) {
        civ["ROM"].state = 7;
    }
    if (nextYear == -108) {
        civ["VIE"].strength = 0;
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
    if (nextYear == -42) {
        // Rome Colonizes America*
        if (rng(2) <= superUnlikely && civ["ROM"].strong) {
          civ["SPAc"].name = "Nova Roma";
          civ["SPAc"].strength = 3000;
          civ["SPAc"].color = [178, 0, 0];
          civ["ROM"].america = true;
        }
    }
    if (civ["ROM"].america) {
        worldNews("Rome Discovers New World",
                    "Greek geographer Strabo has discovered what many believe to be a previously unknown continent. Merchants have already begun trading with the natives.",
                    "https://i0.wp.com/www.forge22.com/wp-content/uploads/caribbean-map-11-18x12-colored-web.jpg",
                    true, 3, -42, 20, true);
    }
    if (nextYear == -52) {
        worldTech = 400;
    }
    if (nextYear == -44 && civ["ROM"].strong) {
        worldNews("Julius Caesar Assassinated",
                "After declaring himself emperor of Rome, Brutus and other conspirators have murdered him in cold blood. What will be the fate of Rome now?",
                "https://upload.wikimedia.org/wikipedia/commons/8/81/Death_of_Julius_Caesar_2.png",
                false, 13, nextYear, 2, true);
    }
    if (nextYear == -30) {
        civ["ISR"].state = 1;
        civ["ISR"].name = "Herodia";
  
        /*if (c.nova_roma) {
          civ["SPAc"].state = 2;
        }*/
    }
    if (nextYear == -22) {
        civ["ARM"].state = 1;
    }
    if (nextYear == -1) {
        if (civ["ROM"].strong) {
          civ["ISR"].strength = 0;
        } else {
          civ["ISR"].strength += 470;
        }
    }
  
    worldNews("Jesus Christ is Born",
                "In the small town of Bethlehem, a holy child from Mary and Joseph is born in a humble manger.",
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_NG569JegPVJsNULvmeEg7cBnSBC-rL_7TyvMrdyB1-LTMJbzZkdieBJds0JdE28Dfu855BTIbPlmq7H7w1hM9H_zep0FMIyuboElL3i6-5SuuJO-7C3nBCHN_xRGFggDlaAqnAEXXGhK/s1600/23+Jesus.jpg",
                false, 5, rngRange(rng(4),-6,-4), 4, true);
    // Year of Our Lord (A.D.)
}