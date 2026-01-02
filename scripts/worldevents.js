function worldEvents(year) {
    let nextYear = year + 1;
    let civ = civs[nextYear];
    c = civ["conditions"];

    // Backgground civs
    if (worldTech >= 700) {
        civ["BG"].state = 'b';
    } else if (worldTech >= 600) {
        civ["BG"].state = 'a';
    } else if (worldTech >= 500) {
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
        |      France Beats Britain     |.
        |      Napoleon Wins            |.
        |                               |.
        |      Kaiserreich              |.
        |      Fuhrerreich              |.
        |                               |.
        |                               |.
        |                               |.
        |   ____________________________|___
        |  /.                              /.
        \_/______________________________*/

    if (nextYear == rngRange(rng(18, nextYear), -1701, -1681)) {
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
    if (nextYear == 1900) {
        worldTech = 600;
    }
    if (nextYear == 2000) {
        worldTech = 700;
    }

    // Bronze Age
    worldNews("Bronze Age Collapse...",
            "Major cities have been destroyed, whole civilizations have fallen, diplomatic and trade relations are severed, and even writing systems have vanished.",
            "https://cdn.thecollector.com/wp-content/uploads/2021/07/fall-of-troy-bronze-age-collapse.jpg",
            false, 7, rngRange(rng(5, nextYear), -1200, -1100), 35, true);
    worldNews(`Solar Eclipse Observed`,
                `One of the first solar eclipses to ever be recorded has been observed in Mesopotamia, darkening the sky and prompting awe, fear, and religious interpretation.`,
                "https://cdn.discovermagazine.com/assets/image/57938/illustration-of-an-ancient-total-solar-eclipse-x.png",
                false, 148, -1223, 1, false);

    // Classical

    // Rome Colonizes America
    if (rng(2, nextYear) <= superUnlikely && civ["ROM"].strong) {
        if (nextYear == rngRange(rng(19, nextYear), -44, 100)) {
            civ["ROM"].america = true;
            civ["ROM"].yearsColonizing = 0;
        }
    }

    /*
     *   ~ Year of Our Lord (A.D.) ~
     */


    // European Colonization

    // War of Spanish Succession
    if (nextYear == 1701 &&
        !civ["COR"].strong
    ) {
        worldNews(`War of Spanish Succession`,
                    `A major war has erupted over the Spanish throne, drawing the great European powers into conflict.`,
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSynctALLNNHNPvjZdw32nNschDOme_SOS1Qw&s",
                    false, 106, nextYear, 3, true);
    }
    if (nextYear == 1714 &&
        rng(146, nextYear) <= unlikely &&
        !civ["COR"].strong
    ) {
        // If France won timeline
        worldNews(`France Prevails in Spain`,
                        `French forces have secured victory in the War of Spanish Succession, placing a Bourbon ruler on the Spanish throne and expanding their influence.`,
                        "https://64.media.tumblr.com/9752d11f85054b09b676bab6766c30ad/2ff61cd89bfbbf20-4e/s640x960/eb671542f298f3b16907e80539f2f9fe57664e56.jpg",
                        true, 107, nextYear, 3, true);

        colonizeOldWorld["FRA"] += 30;
        c.pax_francia = true;
        civ["FRA"].state = 5;
        civ["DUT"].name = "Bat.";
        civ["DUT"].color = [74, 124, 226];

        civ["HUN"].strength = 3000;
        civ["HUN"].strong = true;
        civ["HUN"].state = 2;
        civ["AUS"].size -= 3;
        civ["AUS"].x -= 10;

        // Britain steals Dutch colonies
        for (const key in civs[nextYear]) {
            if (key == "DUTs" && civ[key].owner == "DUT") {
                civ["DUTs"].strength = 0;
                civ["ENGs"].strength = 3000;
                civ["ENGs"].owner = "ENG";
            }
            if (civ[key].owner == "DUT") {
                civ[key].owner = "ENG";
            }
        }
    }

    // Seven Years War
    if (nextYear == 1763) {
        // Treaty of Paris of 1763
        
        if (rng(32, nextYear) <= superUnlikely &&
            civ["AQU"].strength <= 0
        ) {
            // France wins altimeline
            worldNews(`Treaty of Paris of ${nextYear}`,
                        `${civ["ENG"].name} and ${civ["FRA"].name} have signed the Treaty of Paris, ending the Seven Years’ War and securing ${civ["FRA"].name} as the dominating power.`,
                        "https://www.constitutionfacts.com/images/2-9ToP/TreatyofParis.jpg",
                        true, 105, nextYear, 2, true);

            civ["QUE"].x -= 70;
            civ["QUE"].size += 3;
            civ["CAN"].state = 5;
            civ["CAN"].owner = "FRA";
            civ["CAN"].hideName = true;

            civ["USA"].strength = 500;
            civ["USA"].name = "13 Colonies";
            civ["USA"].owner = "none";
            civ["AUS"].strong = true;
            c.usa_exists = false;
            c.pax_francia = true;
            c.unified_italy = false;
        } else {
            // Britain wins (normal)
            worldNews(`Treaty of Paris of ${nextYear}`,
                        `${civ["ENG"].name} and ${civ["FRA"].name} have signed the Treaty of Paris, ending the Seven Years’ War and securing ${civ["ENG"].name} as the dominating power.`,
                        "https://www.constitutionfacts.com/images/2-9ToP/TreatyofParis.jpg",
                        false, 104, nextYear, 2, true);

            civ["SPAc"].state = 9;
            civ["CAN"].state = 5;
            civ["QUE"].strength = 0;
            civ["IRO"].strength = 0;

            // If Prussia is still defeated
            if (rng(32, nextYear) <= unlikely) {
                civ["AUS"].strong = true;
            }
        }
    }

    if (c.unitedStates == 1912) {
        worldNews(`The Titanic Sinks`,
                    `The RMS Titanic has sunk in the North Atlantic after striking an iceberg, resulting in massive loss of life and global shock.`,
                    "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638882458/EducationHub/photos/titanic-sinking.jpg",
                    false, 114, nextYear, 2, false);
    }

    // WWI
    if (c.ww1) {
        if (nextYear == 1914) {
            // Choosing sides
            if (civ["POL"].strength > 0) {
                Allies.push("POL");
            }
            if (rng(140) <= uncommon) {
                Axis.push("ITA");
            } else {
                Allies.push("ITA");
            }
            if (rng(141) <= uncommon) {
                Axis = Axis.filter(item => item !== "OTT");
                civ["OTT"].strong = true;
            }
            
            const alliesStr = formatSide(civ, Allies);
            const axisStr   = formatSide(civ, Axis);

            worldNews(`The Great War`,
                        `${axisStr} are at war with ${alliesStr}`,
                        "https://www.historyonthenet.com/wp-content/uploads/2016/12/135151-004-0D4D550E.jpg",
                        false, 100, nextYear, 3, true);
        }
        if (nextYear == 1915) {
            if (currentAlliance("FRA") != currentAlliance("GER") && currentAlliance("RUS") != currentAlliance("GER")) {
                civ["GER"].state = 9;

                if (civ["GER"].name == "Prussia") {
                    civ["GER"].name = "N. German Confed.";
                    civ["HRE"].state = 6;
                }
            }
        }
        if (nextYear == 1917) {
            if (civ["CSA"].strength > 0) {
                Allies.push("USA");
                Axis.push("CSA");
            } else if (c.louisiana_purchase && c.manifest_destiny &&
                civ["USA"].strength > 0 && !c.csa_victory) {
                Allies.push("USA");
            }

            // Russian Revolution
            //if (RNG("Russian_Revolution",year) > unlikely) {
            civ["RUS"].name = "Red Army";
            civ["RUS"].x += 80;
            civ["RUS"].y -= 12;
            civ["RUS"].size += 3;
            civ["RUS"].color = [124, 13, 24];
            civ["SIB"].strength = 27;
            civ["FIN"].strength = 2250;
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
            if (rng(62, nextYear) <= unlikely) {
                // Kaiserreich (Central Powers win)
                c.kaiserreich = true;
                c.ww1Winner = Axis;
                c.ww1Loser = Allies;
                c.ww2 = false;
                c.af_decolonization_level = 1;

                worldNews(`Treaty of Berlin`,
                        `The victorious Central Powers have imposed the Treaty of Berlin, reshaping Europe’s borders, and securing German dominance.`,
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEYqBhf5IjB8p5KmDxNvVmEkcunjPukw8k_w&s",
                        true, 102, nextYear, 2, true);

                civ["GERx"].state = "a";
                civ["GERx"].x = 1330;
                civ["GERx"].y = 610;
                civ["GERx"].defaultname = "MittelAfrika";

                if (c.ww1Loser.includes("ITA")) {
                    civ["LIB"].name = "Tripolitania";
                    civ["LIB"].x -= 20;
                    civ["ITA"].state = 5;
                }

                civ["GER"].state = "a";
                civ["AUS"].strong = true;
                civ["OTT"].strong = true;
                civ["POL"].strength = 0;
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
                civ["ARM"].state = 3;
                civ["ARM"].strength = 1000;
                civ["UKR"].state = "a";
                civ["UKR"].strength = 1000;
                civ["KZH"].strength = 500;

                civ["BYZ"].state = 2;

            } else {

                // Normal WWI
                c.ww1Winner = Allies;
                c.ww1Loser = Axis;
                c.ww2 = true;

                worldNews(`Treaty of Versailles`,
                        `The victorious Allied powers have imposed the Treaty of Versailles on Germany, redrawing borders, assigning war guilt, and potentially sowing future instability.`,
                        "https://www.mediastorehouse.com/p/690/signing-versailles-peace-treaty-1919-photo-38458878.jpg.webp",
                        false, 101, nextYear, 3, true);
                worldNews(`League of Nations Formed`,
                        `World leaders have established the League of Nations to prevent future conflicts through diplomacy and collective security.`,
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF-WcH0TAfN3gFcVMqSo0j-TGoXzweqp-6Q&s",
                        false, 111, nextYear, 2, false);

                if (Allies.includes("USA")) {
                    c.superpowers.push("USA");
                }
                c.superpowers.push("RUS");

                /* if (RNG("German_Venezuela",year) <= unlikely) {
                civ["VEZ"].name = "Welserland ";
                } */
                if (rng(137, nextYear) <= unlikely) {
                    // Arabic Union
                    civ["ISL"].name = "Arabic Union";
                    civ["ISL"].strong = true;
                    civ["MES"].strength = 0;
                    civ["SYR"].strength = 0;
                    civ["ENGb"].strength = 0;
                }

                civ["ITA"].state = 8;

                civ["POL"].strength = 500;
                civ["POL"].state = 8;
                if (civ["POL"].name == "Poland-Lithuania") {
                    annex(civ, "POL", ["LIT"]);
                }

                civ["GER"].state = 10;
                civ["SER"].name = "Yugoslavia";

                if (civ["CSA"].strength > 0) {
                    annex(civ, "USA", ["CSA"]);
                    if (civ["ENGk"].owner == "CSA") {
                        civ["ENGk"].owner = "USA";
                    }
                    if (civ["CEN"].hideName) {
                        civ["CEN"].color = [];
                        civ["CEN"].state = 2;
                        civ["CEN"].hideName = false;
                    }
                    if (civ["MEX"].name == "Mexico (CSA)") {
                        civ["MEX"].strength = 0;
                    }
                }

                // Germany not punished severely
                if (rng(62, nextYear) <= possible) {
                    civ["GER"].state = "b";
                    c.ww2 = false;
                }
            }

            // Adjust colonies
            for (const nation in colonizeOldWorld) {
                if (c.ww1Winner.includes(nation)) {
                    if (nation == "GER") {
                        colonizeOldWorld[nation] += 20;
                    }
                } else {
                    colonizeOldWorld[nation] = 0;
                }
            }

            for (let i = 0; i < c.ww1Loser.length; i++) {
                colonizeOldWorld[c.ww1Loser[i]] = 0;
            }
            if (c.ww1Loser.includes(civ["GERx"].owner)) {
                civ["GERx"].strength = 0;
            }
            let counter = 0;
            for (const key in civs[nextYear]) {
                if (c.ww1Loser.includes(civ[key].owner)) {
                    civ[key].owner = colonizingPercentage(rng(70+counter, nextYear), colonizeOldWorld, "ENG", 1);
                }
                counter++;
            }

            // Special losing cases
            if (c.ww1Loser.includes("AUS")) {
                civ["CZE"].strength = 400;
                civ["CZE"].name = "Czechoslovakia";
                civ["CZE"].state = 3;

                if (rng(63, nextYear) <= unlikely) {
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
                civ["SYR"].owner = colonizingPercentage(rng(75, nextYear), colonizeOldWorld, "FRA", 50);
                civ["ENGb"].strength = 500;
                civ["ENGb"].owner = colonizingPercentage(rng(76, nextYear), colonizeOldWorld, "ENG", 50);
                civ["ENGb"].hideName = true;
            }
        }
    }

    owner(civ, "SYR", [], "Syria", "Syria", false);
    owner(civ, "ENGb", [], "U.A.E", "Iraq", false);

    // WWII (Germany)
    if (civ["GER"].ideology == "fascism") {
        if (nextYear == 1939) {
            //if (c.ww2) {
            civ["AUS"].strength = 0;
            civ["CZE"].name = "Bohemia";
            civ["CZE"].state = null;
            civ["POL"].state = null;
            civ["GER"].state = 11;

            worldNews(`Germany Invades Poland`,
                        `German forces have crossed into Poland, plunging Europe into potentially further conflict.`,
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Defenders_of_Warsaw_%281939%29.jpg/250px-Defenders_of_Warsaw_%281939%29.jpg",
                        false, 84, nextYear, 1, false);
        }
        if (nextYear == 1940) {
            civ["GER"].state = 13;
            civ["FRA"].name = "Vichy France";
            civ["FRA"].y += 15;
            civ["FRA"].size -= 2;
            civ["FRA"].color = [88, 86, 83];
            civ["FRA"].state = 4;
            c.pax_francia = false;
            civ["DUT"].name = "Neth.";
            civ["DUT"].color = [226, 145, 83];

            worldNews(`Fall of France`,
                        `German armies have defeated France in a swift campaign, forcing surrender and leaving much of Western Europe under Axis control.`,
                        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Bundesarchiv_Bild_146-1994-036-09A%2C_Paris%2C_Parade_auf_der_Champs_Elys%C3%A9e.jpg",
                        false, 85, nextYear, 1, false);
            worldNews(`Dunkirk Evacuation`,
                        `Allied forces have been evacuated from Dunkirk as military and civilian vessels rescue troops, preserving Britain’s ability to continue the war.`,
                        "https://i.redd.it/sbpwibk1k0011.jpg",
                        false, 99, nextYear, 1, false);
        }
        if (nextYear == 1941) {
            civ["GER"].state = 14;
            civ["ITA"].state = 10;
            civ["GRE"].color = [102, 168, 96];
            civ["BUL"].state = 9;
        }
        if (nextYear == 1942) {
            worldNews(`Stalingrad Encirclement`,
                        `Soviet forces have surrounded German troops at Stalingrad, marking a major turning point on the Eastern Front.`,
                        "https://res.cloudinary.com/aenetworks/image/upload/c_fill,w_1200,h_630,g_auto/dpr_auto/f_auto/q_auto:eco/v1/soviet-stalingrad-gettyimages-3289320",
                        false, 87, nextYear, 1, false);
        }

        if (nextYear == 1943) {
            civ["ITA"].color = [88, 86, 83];
            civ["ITA"].y -= 20;
            civ["NAP"].strength = 2;
            civ["NAP"].name = "Allies";
            civ["NAP"].color = civ["ENG"].color;
            civ["FRA"].color = [57, 113, 228];
        }
        if (nextYear == 1944) {
            civ["ICE"].owner = "none";

            /*if (c.ww2) {
            if (RNG("WWII",year) <= superUnlikely) {
                civ["GER"].strength += 100;
            } else {
                civ["GER"].state = 11;
            }
            }*/
            civ["GER"].state = 11;
            worldNews(`D-Day Landings`,
                        `Allied forces have landed in Normandy, opening a Western Front and beginning the liberation of Nazi-occupied Europe.`,
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQunpLcEMwi7BNfSZsYd2AvC16t-kfx5BbVCg&s",
                        false, 88, nextYear, 1, false);


            civ["ALB"].strength = 300;
            civ["GRE"].color = [];
            civ["SER"].weak = false;
            civ["FRA"].name = "France";
            civ["FRA"].y -= 15;
            civ["FRA"].size += 2;
        }
        if (nextYear == 1945) {
            if (rng(92, nextYear) <= superUnlikely) {
                // Fuhrerreich
                c.fuhrerreich = true;
                c.af_decolonization_level = 0;
                
                civ["ITAx"].state = "a";
                civ["SIB"].state = "a";
                civ["SIB"].strength = 100;
                civ["RUS"].name = "Russian Anarchy States";
                civ["RUS"].color = [88, 86, 83];
                civ["RUS"].ideology = "anarchy";
                civ["KZH"].strength = 100;
                civ["KZH"].x += 30;
                civ["KZH"].name = "Kazakhs";
                civ["KZH"].state = 2;
                civ["GEO"].strength = 100;
                civ["ARM"].strength = 100;
                civ["HOR"].strength = 100;
                civ["HOR"].hideName = true;
                civ["HOR"].color = [104, 102, 100];

                civ["GER"].state = 13;

                civ["UKR"].state = "a";
                civ["UKR"].strength = 100;
                civ["LIV"].strength = 100;
                civ["LIT"].strength = 100;
                c.ww1Winner = Axis;
                c.ww1Loser = Allies;
            } else {

                // Normal WWII Outcome
                worldNews(`Germany Surrenders`,
                            `Nazi Germany has formally surrendered to Allied forces, bringing the war in Europe to an end after years of devastation.`,
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSboddKhKN9QFhHnZwHsaB4dkcemiVRbSEj9Q&s",
                            false, 89, nextYear, 2, true);
                worldNews(`United Nations Founded`,
                        `Nations have created the United Nations to promote cooperation, security, and humanitarian efforts after the devastation of global war.`,
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrb5V6OnreO3lUL1ZiPFOLtli3ITAKV4EdQ&s",
                        false, 112, nextYear, 2, false);

                civ["GER"].name = "West Germany";
                civ["GER"].size = 5;
                civ["GER"].ideology = "democracy";
                civ["GERe"].strength = 200;
                if (civ["RUS"].ideology != "communism") civ["GERe"].color = [110, 162, 128];
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

                c.occupied_iran = false;
                c.cold_war = true;

                altHist(nextYear,"post_ww2_europe_borders");
            }

            // Adjust colonies
            for (const nation in colonizeOldWorld) {
                if (c.ww1Winner.includes(nation)) {
                    if (nation == "GER") {
                        colonizeOldWorld[nation] += 20;
                    }
                } else {
                    colonizeOldWorld[nation] = 0;
                }
            }

            let counter = 0;
            for (const key in civs[nextYear]) {
                if (c.ww1Loser.includes(civ[key].owner)) {
                    civ[key].owner = colonizingPercentage(rng(93+counter, nextYear), colonizeOldWorld, "ENG", 1);
                }
                counter++;
            }
        }
        if (nextYear == 1946) {
            // WW2 Aftermath (Normal)
            if (!c.fuhrerreich) {
                if (rng(130, nextYear) <= unlikely) {
                    civ["KOR"].strength = 500;
                    civ["JAPn"].strength = 600;
                } else {
                    // Splitting of Korea (Normal)
                    civ["KOR"].strength = 500;
                    civ["KOR"].y += 15;
                    civ["KOR"].name = "S. Korea";
                    civ["DRK"].strength = 400;
                }

                if (rng(132, nextYear) <= veryUnlikely) {
                    civ["SER"].name = "Greater Yugoslavia";
                    civ["SER"].state = "a";
                    civ["BUL"].name = "";
                }
            }
            // Big Japan
            if (rng(131, nextYear) <= veryUnlikely || !c.manifest_destiny) {
                civ["JAPc"].strength += 200;
                c.big_japan = true;
            }
        }
    }

    // WWII
    if (!c.kaiserreich) {
        if (nextYear == 1939) {
            civ["ITA"].state = 9;
            civ["ALB"].strength = 0;
            civ["SER"].weak = true;
        }
        if (nextYear == 1940) {
            civ["FIN"].state = 2;
            civ["ROA"].state = 4;
        }
    }
    
    if (nextYear == 1941) {
        /*if (RNG("Boxer's_Rebellion",year) > unlikely) {
          civ["QIN"].state = 4;
        }*/
        civ["VIE"].owner = "JAP";
        c.occupied_iran = true;
        civ["PER"].name = "Iran ";
        //if (c.ww2) {

        if (c.manifest_destiny) {
            worldNews(`Pearl Harbor Attacked`,
                    `Japanese aircraft have launched a surprise attack on Pearl Harbor, destroying ships and drawing the United States into the war.`,
                    "https://i0.wp.com/www.nationalreview.com/wp-content/uploads/2016/12/pearl-harbor-attack-photos-116-1.jpg?fit=920%2C537&ssl=1",
                    false, 86, nextYear, 2, false);
        }

        //}

        civ["ABY"].state = 6;
        civ["ABY"].owner = "none";
        civ["ITAx"].weak = true;
        civ["ITAx"].owner = "FRA";
        civ["ITAx"].hideName = true;
    }
    
    if (nextYear == 1947) {
        if (!c.kaiserreich) {
            civ["ROA"].state = 5;
            civ["HUN"].small = true;
        }

        if (c.cold_war) {
            worldNews(`Iron Curtain Falls`,
                        `Europe has been divided into rival spheres as Soviet-backed governments consolidate control in the East, hardening Cold War tensions.`,
                        "https://alchetron.com/cdn/iron-curtain-5610ac48-e82d-4b46-b22d-a0e5cd96f37-resize-750.jpeg",
                        false, 91, nextYear, 3, true);
        }
    }
    if (nextYear == 1954) {
        if (c.fuhrerreich && rng(127, nextYear) <= rare) {
            worldNews(`Congo River Dammed`,
                            `The damming of the Congo River is complete, another project by the Nazi regime...`,
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnKd3Kd82UEXmti9veIrn1YdLSj9hHMHvTIg&s",
                            true, 95, nextYear, 2, true);
            civ["lakes"].state = "a";
        }
    }

    if (rng(99, nextYear) <= impossible) {
        altHist(nextYear, "1984");
        c.cold_war = false;
    }

    // Modern Era
    if (c.cold_war) {
        if (nextYear == 1962) {            
            worldNews("Cuban Missile Crisis",
                "The Cuban Missile Crisis has brought the world to the brink of nuclear war, with the Soviet Union placing missiles in Cuba, just 90 miles from the U.S. coast.",
                "https://th-thumbnailer.cdn-si-edu.com/2dYxg9oELPPN0aBXvEXHaWOerFQ=/800x600/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/Cuban-Missile-Crisis-631.jpg",
                false, 35, nextYear, 2, true);

            if (rng(128, nextYear) <= incrediblyUnlikely) {
                altHist(nextYear, "major_nuclear_war");
            } else if (rng(128, nextYear) <= rare) {
                altHist(nextYear, "minor_nuclear_war");
            }
        }

        if (nextYear == 1969 &&
            c.defcon > 2
        ) {
            if (!c.superpowers.includes("USA")) {
                c.firstMoonAdj = "Russian";
                if (civ["RUS"].ideology == "communism") {
                    c.firstMoon = "USSR";
                    c.firstMoonImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_r81JnJHIIhFDpLPNwrnjfl9Rc3o8QBELsQ&s";
                } else {
                    c.firstMoon = "Russia";
                    c.firstMoonImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOBraD97ILpWf4Art5iFMd_o0QsWpJISO2qsXW8M-T2CEp4Aw&s";
                }
                
            } else if (c.manifest_destiny) {
                c.firstMoon = `US${c.newWorld.charAt(0)}`;
                c.firstMoonAdj = `${c.newWorld}n`;
                c.firstMoonImg = "https://upload.wikimedia.org/wikipedia/commons/d/dd/Buzz_salutes_the_U.S._Flag.jpg";
            } else {
                c.firstMoon = "British";
                c.firstMoonAdj = "English";
                c.firstMoonImg = "https://www.shutterstock.com/shutterstock/videos/1084916227/thumb/9.jpg?ip=x480";
            }

            if (c.fuhrerreich) {
                c.firstMoon = "Nazis";
                c.firstMoonAdj = "German";
                c.firstMoonImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7t7GL1O9avMZHdQPPtNHu4bYQR3nyFiUew&s";
            }

            worldNews(`${c.firstMoon} on Moon`,
                    `${c.firstMoonAdj} astronauts have successfully landed on the Moon, marking humanity’s first steps on another world.`,
                    c.firstMoonImg,
                    c.firstMoon == "USA" ? false : true, 79, nextYear, 3, true);
        }
    }
    
    if (nextYear == 1995 &&
        c.defcon > 1
    ) {
        worldNews(`Internet Goes Global`,
                    `The internet has rapidly expanded into daily life, transforming communication, commerce, and access to information worldwide.`,
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_MDWZhaFJiv3EAsI5joQqARJqGHkRXbOz2Q&s",
                    false, 92, nextYear, 2, false);
    }

    if (nextYear == 2019 && rng(94, nextYear) > possible &&
        civ["CHI"].strength > 0 && c.defcon > 2) {
        worldNews(`Covid-19 Pandemic`,
            `A novel coronavirus, later named COVID-19, has been identified in Wuhan, China. The virus has rapidly spread across the globe, leading to quarantining.`,
            `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Covid-19_SP_-_UTI_V._Nova_Cachoeirinha.jpg/1200px-Covid-19_SP_-_UTI_V._Nova_Cachoeirinha.jpg`,
            false, 63, nextYear, 4, true);
    }
}