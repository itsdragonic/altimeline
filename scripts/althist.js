function altHist(year,id) {
    let nextYear = year;
    let civ = civs[nextYear];
    c = civ["conditions"];

    switch (id) {
        case "alternate_american_names":
            if (rng(31) <= incrediblyUnlikely) {
                c.newWorld = "Vespuccia";
            } else if (rng(31) <= veryUnlikely) {
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
                    if (rng(25) < unlikely) {
                        civ["ARG"].name = "Silverland";
                    } else {
                        civ["ARG"].name = "New Yorkshire";
                    }
                    if (rng(27) < unlikely) {
                        civ["EQU"].name = "Equitoria";
                    }
                    if (rng(28) < veryUnlikely) {
                        civ["CHL"].name = "Landend";
                    } else {
                        civ["CHL"].name = "Winchester";
                    }
                    civ["CHL"].x -= 30;
                    if (rng(29) < possible) {
                        civ["PAR"].name = "St. George";
                    }
                    break;
                case "FRA":
                    civ["ARG"].name = "Louisiana";
                    break;
                case "DUT":
                    civ["ARG"].name = "New Zeeland";
                    civ["ARG"].color = [211, 65, 39];
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
            if (nextYear == 1947 && rng(97) < superUnlikely && rng(99) < unlikely) {
                civ["FRA"].ideology = "communism";
                civ["FRA"].name = "French Commune";
                civ["FRA"].color = [213, 68, 68];
                civ["FRA"].x -= 85;
                civ["USA"].adjective = "Oceanian";
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
                civ["nuclear"].strength = 500;
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
                annex(civ,"USA",["ICE", "DENc", "IRE"]);
                annex(civ,"CHI",["MON", "KOR"]);
                annex(civ,"RUS",["ITA", "GRE", "OTT"]);
            }
            if (nextYear == 1974 && c.orwell1984) {
                civ["nuclear"].strength = 0;
                civ["USA"].whiteLines = false;
                annex(civ,"RUS",["FIN", "DEN", "SWE"]);
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
                annex(civ,"CHI",["JAP"]);
                civ["RUS"].whiteLines = false;
                civ["RUS"].x -= 200;
                civ["MOR"].state = 4;
                civ["MOR"].name = "Morocco";
            }
            break;
        case "post_ww2_europe_borders":
            // big hungary
            if (rng(91) <= unlikely) {
                civ["HUN"].state = 2;
                civ["HUN"].strong = true;
                civ["CZE"].name = "Czechia";
                civ["SER"].state = 6;
                civ["SER"].x += 5;
                civ["SER"].name = "Serbia";
            }

            // alternate germanies
            if (rng(104) <= uncommon) {
                civ["GERe"].state = 2;
                civ["GER"].state = 16;
                civ["POL"].state = 'a';
            }
            // soviets take all of germany
            if (rng(105) <= incrediblyUnlikely) {
                civ["GER"].state = 'c';
                civ["GER"].ideology = "communism";
                civ["GER"].color = [152, 33, 33];
                civ["GER"].name = "Communist Germany";
                civ["GERe"].strength = 0;
                civ["POL"].state = 'a';
            }
    }
}