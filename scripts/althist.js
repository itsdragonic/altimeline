function altHist(year,id) {
    let nextYear = year;
    let civ = civs[nextYear];
    c = civ["conditions"];

    switch (id) {
        case "alternate_american_names":
            if (rng(31, nextYear) <= incrediblyUnlikely) {
                c.newWorld = "Vespuccia";
            } else if (rng(31, nextYear) <= veryUnlikely) {
                c.newWorld = "Columbia";
            } else {
                c.newWorld = "America";
            }
            break;

        case "alternate_latin_american_country_names":
            if (civ["SPAc"].owner != "SPA") {
                civ["PEU"].name = "Inca";
                civ["PEU"].defaultname = "Inca";
                civ["PAR"].name = "Guarania";
                civ["MEX"].name = "Mesico";
                civ["MEXa"].name = "Mesican Empire";
                civ["BOL"].name = "Charcas";
                civ["ARG"].name = "Platania";
                civ["EQU"].name = "Quito";
                civ["CHL"].name = "Chili";
            }

            switch (civ["SPAc"].owner) {
                case "ENG":
                    civ["EQU"].name = "Equatoria";
                    civ["BOL"].name = "Victoria";
                    civ["URU"].name = "Richmond";
                    civ["COL"].name = "Columbia";
                    civ["GCO"].name = "Grand Columbia";
                    if (rng(25, nextYear) < unlikely) {
                        civ["ARG"].name = "Silverland";
                    } else {
                        civ["ARG"].name = "New Yorkshire";
                    }
                    if (rng(27, nextYear) < unlikely) {
                        civ["EQU"].name = "Equitoria";
                    }
                    if (rng(28, nextYear) < veryUnlikely) {
                        civ["CHL"].name = "Landend";
                    } else {
                        civ["CHL"].name = "Winchester";
                    }
                    civ["CHL"].x -= 30;
                    if (rng(29, nextYear) < possible) {
                        civ["PAR"].name = "St. George";
                    }
                    break;
                case "FRA":
                    civ["ARG"].name = "Louisiana";
                    break;
                case "DUT":
                    civ["ARG"].name = "New Zealand";
                    civ["ARG"].color = [211, 65, 39];
                    c.taken_names.push("Zealand");
                    break;
                case "POR":
                    civ["ARG"].name = "Argentina";
                    break;
            }

            worldNews(`${civ[civ["SPAc"].owner].name} Discovers New World`,
                        `Christopher Columbus set sail from ${civ[civ["SPAc"].owner].name} with 3 ships, seeking a westward route to Asia. However, he accidently discovered an unknown landmass.`,
                        "https://assets.editorial.aetnd.com/uploads/2019/10/columbus-ships-gettyimages-1056336226.jpg",
                        false, 36, nextYear, 2, true);
            break;

        case "1984":
            if (nextYear == 1947 &&
                civ["USA"].ideology == "socialism"
            ) {
                civ["FRA"].ideology = "communism";
                civ["FRA"].name = "French Commune";
                civ["FRA"].color = [213, 68, 68];
                civ["FRA"].x -= 85;
                civ["USA"].adjective = "Oceanian";
                c.unitedStates = -9999;
                for (const key in civs[nextYear]) {
                    if (civ[key].owner == "FRA") {
                        civ[key].owner = "USA";
                    }
                }
                c.orwell1984 = true;
            }
            if (nextYear == 1950 && c.orwell1984) {
                civ["ENG"].color = [79, 62, 147];
                civ["ENG"].adjective = "Oceanian";
                civ["ENG"].name = "Oceania";
                civ["USA"].name = "Oceania";
                civ["USA"].size ++;
                c.colonizingAfrica = -9999;
            }

            if (nextYear == 1953 && c.orwell1984) {
                civ["USA"].ideology = "orwellian";
                civ["USA"].name = "INGSOC";
                civ["USA"].size += 30;
                civ["RUS"].name = "Union of Eurasian Socialist Republics";
                civ["CHI"].name = "P.R. Eastasia";
                civ["CHI"].ideology = "orwellian";
                civ["CHI"].color = [255, 219, 37];
            }

            if (nextYear == 1954 && c.orwell1984) {
                altHist(nextYear, "minor_nuclear_war");
            }

            if (nextYear == 1955 && c.orwell1984) {
                annex(civ,"USA",["AUZ", "ENGs", "MEX", "PNG", "ZEA"]);
                civ["USA"].whiteLines = true;
            }

            if (nextYear == 1956 && c.orwell1984) {
                annex(civ,"CHI",["BUR", "VIE", "THA", "CAM"]);

                civ["QIN"].strength = 0;
                civ["CHI"].state = 'a';
            }

            if (nextYear == 1956 && c.orwell1984) {
                civ["JAP"].ideology = "communism";
                civ["JAP"].name = "DPR Japan";
                civ["JAP"].color = [173, 88, 88];
                civ["JAP"].x += 20;
            }

            if (nextYear == 1957 && c.orwell1984) {
                civ["RAJ"].state = 'a';
                civ["RAJ"].name = "Indian States";
                civ["PAK"].strength = 0;
                civ["AFG"].state = 6;
                
                civ["NEP"].state = 'a';
                annex(civ,"CHI",["NEP","BHU"]);
                annex(civ,"USA",["CUB", "CEN", "HAI"]);

                c.occupied_iran = true;
            }

            if (nextYear == 1960 && c.orwell1984) {
                annex(civ,"USA",["VEZ", "DUTi", "PORi"]);

                civ["PORa"].strength = 0;
                civ["KON"].strength = 0;
                civ["LIB"].strength = 0;
            }

            if (nextYear == 1964 && c.orwell1984) {
                annex(civ,"RUS",["POL", "CZE", "HUN", "ROA", "BUL"]);
                annex(civ,"USA",["DOM", "COL", "GUY", "FGU", "SUR"]);
                civ["RUS"].whiteLines = true;
            }

            if (nextYear == 1970 && c.orwell1984) {
                annex(civ,"USA",["BRA", "PAR", "BOL", "URU"]);
                annex(civ,"RUS",["GER", "AUS"]);
            }
            if (nextYear == 1971 && c.orwell1984) {
                annex(civ,"USA",["PEU", "EQU", "ENGa", "ENGk", "ARG", "CHL",
                                "FRAa", "FRAk", "FAK", "ANT"]);
                annex(civ,"RUS",["SER", "ALB"]);
            }
            if (nextYear == 1972 && c.orwell1984) {
                annex(civ,"ENG",["ICE", "DENc", "IRE"]);
                annex(civ,"CHI",["MON", "KOR"]);
                annex(civ,"RUS",["ITA", "GRE", "OTT"]);
            }
            if (nextYear == 1974 && c.orwell1984) {
                civ["USA"].whiteLines = false;
                annex(civ,"RUS",["FIN", "DEN", "SWE"]);

                worldNews(`War with Eurasia`,
                        `Oceania is at war with Eurasia: Oceania has always been at war with Eurasia...`,
                        "https://flags.paxhistoria.co/eurasia-1972-present.png",
                        true, 81, nextYear, 8, true);
            }
            if (nextYear == 1976 && c.orwell1984) {
                annex(civ,"RUS",["FRA", "BEL", "DUT"]);
            }
            if (nextYear == 1976 && c.orwell1984) {
                annex(civ,"RUS",["SPA", "POR", "NOR"]);
            }
            if (nextYear == 1980 && c.orwell1984) {
                civ["ALG"].strength = 100;
                civ["ALG"].name = "Algeria ";
                civ["FRAx"].y += 150;
            }
            if (nextYear == 1984 && c.orwell1984) {
                worldNews(`Big Brother is Watching You`,
                        `Big Brother is Watching You... War is peace. Freedom is slavery. Ignorance is strength. Big Brother is Watching You. B̶̰͈̓i̶̧̡̩̞͈̜͇͚̯̜̬̬̾̋́̉̾̈͂̈́̽̃̏̊̒̚͝g̴̨̜͔̱̰͎̯͕͔̬͖̫̲̜͖̍͗͆́̄̒̈́̏͗̚͘͝ ̴̡̨̹͇͎͚̏B̸̢̨̰̮̺̱̟̟̲̭̟̦̑̌̓̀́͋̚͠r̵̭̥͚̲̥̲̠̙͕̱̀͜o̵͙͋̊̀̿́̓ͅt̴͚͚̉͘ḣ̴̩̳̠̮̭̖͈͇̈́͛̆̚ȩ̵̢̣̘̭̰̹̟͔͖͉͉̗̗̈͊̀̄̎̆̚̕͘r̶̙̲̫̹̱͖̹̘͚͖͓̳̬̍̂͗͜͝ ̷̲̗͙͔̦̬͕̲̌ĭ̴̼͉͚̟̹̮͙͍̯̎̄̊̀̌̂̐̄̀̚s̷̢̯̲͉̔̈̓̆̐̒͆̏̏̓̅͘͠͠ ̴͍̗̫̯̳̘̠̱͌̍̀̉̿̌́̓̇ͅW̷̨͚̲̒̊̓̿̆̉̽̓͋̕͜͠͝͠ạ̷̡̘̫̣̟͍͎̘̠̘̿̀̾̀̂̋̒̍̓͘̕̚͠ͅt̶͕̜͉͈͇̠̖̉͌̽͒͋̅̓̒́͋͆̀͆ͅc̷̰̈́̑h̴̻͇̳̭̀̕͠i̵̢̜̳̦̹̝̼̬͆̅́̓̑̉͋n̶̨̨̩̫͔̫͙̹̤͎͓̙͒͜ǧ̵̡̧̫̥̖̯͉̱͔̹̬͙́̊͜͠ͅ ̷̜͙͙̺̫͈́̌̀͗̈́̽͂͑͜Y̵̠̮͙̙̦̫̍͋ǫ̷̬̭͙͍̫̫̤̭̳̱͂͊͌̉͠ȗ̴̗̀̊̔̀̇̐͐̕͠.̵̢̢̲̜̩̱̝̞̱͙̏͠...`,
                        "https://i.ebayimg.com/images/g/KPIAAOSwwLhiaE3j/s-l1200.jpg",
                        true, 80, nextYear, 100, true);
                worldNews(`War with Eastasia`,
                        `Oceania is at war with Eastasia: Oceania has always been at war with Eastasia...`,
                        "https://www.bigmessowires.com/wp-content/uploads/2023/03/eastasia3.jpg",
                        true, 83, nextYear, 8, true);

                annex(civ,"CHI",["JAP"]);
                civ["RUS"].whiteLines = false;
                civ["RUS"].x -= 200;
                civ["MOR"].state = 4;
                civ["MOR"].name = "Morocco";
                civ["LIB"].state = 1;
                civ["EGY"].state = 4;
            }
            break;
        case "post_ww2_europe_borders":
            // big hungary
            if (rng(91, nextYear) <= unlikely) {
                civ["HUN"].state = 2;
                civ["HUN"].strong = true;
                civ["CZE"].name = "Czechia";
                civ["SER"].state = 6;
                civ["SER"].x += 5;
                civ["SER"].name = "Serbia";
            }

            // alternate germanies
            if (rng(104, nextYear) <= uncommon) {
                civ["GERe"].state = 2;
                civ["GER"].state = 16;
                civ["POL"].state = 'a';
            }
            // soviets take all of germany
            if (rng(105, nextYear) <= incrediblyUnlikely || !c.superpowers.includes("USA")) {
                civ["GER"].state = 'c';
                civ["GER"].ideology = "communism";
                civ["GER"].color = [152, 33, 33];
                civ["GER"].name = "Communist Germany";
                civ["GERe"].strength = 0;
                civ["POL"].state = 'a';
            }
            break;
        
        case "csa_victory_timeline":
            civ["CSA"].color = [211, 56 ,56];
            civ["CSA"].adjective = "CSA";

            if (c.unitedStates == 1867) {
                if (rng(121, nextYear) <= likely && civ["TEX"] <= 0) {
                    civ["CSA"].state = 4;
                }
            }
        
            if (c.unitedStates == 1880) {
                if (rng(121, nextYear) <= unlikely && civ["CSA"].strength > 5) {
                    civ["ENGk"].owner = "CSA";
                    civ["CEN"].state = 1;
                    civ["CEN"].hideName = true;
                    civ["CEN"].color = [195, 92, 92];
                }
            }
            
            if (c.unitedStates == 1906) {
                if (rng(121, nextYear) <= superUnlikely &&
                    c.usa_exists && civ["TEX"].strength <= 0
                ) {
                    civ["CSA"].state = 6;
                    civ["CSA"].name = "Confederacy of the Golden Circle";
                    civ["CSA"].y += 40;
                    civ["CSA"].size += 2;
                    civ["MEX"].name = "Mexico (CSA)";
                    civ["MEX"].size -= 4;
                    civ["MEX"].y += 20;
                }
            }
            break;

        case "us_annex_canada":
            worldNews(`US Annexes Canada`,
                        `The United States has formally annexed Canada, dissolving the Canadian government and expanding U.S. territory.`,
                        "https://i.ytimg.com/vi/PjdNW_l_TD4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD6pQ0zRN1iQH9uawJ1fIEmn5vaLw",
                        true, 96, nextYear, 2, true);

            civ["USA"].merge = ["CAN","ALA"];
            civ["USA"].y -= 50;
            civ["USA"].size++;
            civ["USA"].whiteLines = false;
            civ["CAN"].strength = 0;
            civ["ALA"].strength = 0;
            c.big_usa = true;
            break;
        
        case "minor_nuclear_war":
            worldNews(`Nuclear Exchange`,
                        `Several nuclear weapons have been detonated, causing severe destruction but stopping short of extreme escalation.`,
                        "https://m.media-amazon.com/images/I/71JuTvHwssL.jpg",
                        true, 97, nextYear, 2, true);
            civ["nuclear"].strength = 20;
            c.defcon = 2;
            break;

        case "major_nuclear_war":
            // Nuclear Fallout
            c.defcon = 1;
            worldNews(`Nuclear War`,
                        `Major nuclear powers have launched widespread strikes, devastating cities worldwide and collapsing international order within hours.`,
                        "https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/images/methode/2015/11/05/68d473e2-83a2-11e5-a124-da27c43e9149_1280x720.jpg?itok=TVXbk70U",
                        true, 98, nextYear, 4, true);

            if (c.yearsNuclear == null) {
                c.yearsNuclear = 0;
            }
            if (c.defcon <= 1) {
                c.yearsNuclear++;
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
                        "GERe"
                    ];
                    countriesNuked.forEach(country => {
                        civ[country].strength = 0;
                    });

                } else {
                    civ["nuclear"].strength += 3000;
                }
            }
            if (c.yearsNuclear == rngRange(rng(23, nextYear), 1, 8)) {
                if (civ["nuclear"].state == 3) {
                    civ["nuclear"].state = 2;
                }
            }
            if (c.yearsNuclear == rngRange(rng(24, nextYear), 4, 12)) {
                civ["DENc"].name = "Greenland";
                civ["FRAx"].strength = 0;
                civ["MAL"].strength = 100;
                civ["MAL"].name = "";
                civ["TIB"].strength = 100;
                civ["VIE"].y += 30;
                civ["MEX"].y += 20;

                civ["ALA"].x = 360;
                civ["ALA"].y = 140;
                civ["ALA"].size = 8;
            }
            break;
        
        case "man_in_the_high_castle":
            /*if (RNG("WWII",year) <= incrediblyUnlikely) {
                civ["CAN"].name = "Greater Nazi Reich";
                civ["CAN"].x -= 60;
                civ["CAN"].y += 20;
            }*/
            /*
            if (c.fuhrerreich && RNG("Japan's_Fate",year) <= impossible) {
            civ["USA"].state = "d";
            civ["USA"].name = "Japan / Neutral Zone";
            civ["USA"].size -= 4;
            c.big_japan = true;
            }
            */
            break;
    }
}