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
                civ["FRA"].color = [79, 62, 147];
                civ["FRA"].adjective = "Oceanian";
                c.orwell1984 = true;
            }
            if (nextYear == 1950 && c.orwell1984) {
                civ["ENG"].color = [79, 62, 147];
                civ["ENG"].adjective = "Oceanian";
                civ["ENG"].name = "Oceania";
                civ["FRA"].name = "Oceania";
                civ["USA"].name = "Oceania";
                civ["USA"].size ++;
                c.colonizingAfrica = -9999;
            }

            if (nextYear == 1955 && c.orwell1984) {
                const valuesToAdd = ["AUZ", "ENGs", "MEX", "PNG", "ZEA"];

                valuesToAdd.forEach((value) => {
                if (!civ["USA"].merge.includes(value)) {
                    civ["USA"].merge.push(value);
                }
                civ[value].strength = 0;
                });
            }

            if (nextYear == 1960 && c.orwell1984) {
                const valuesToAdd = ["CUB", "CEN", "HAI", "VEZ", "DUTi", "PORi"];

                valuesToAdd.forEach((value) => {
                if (!civ["USA"].merge.includes(value)) {
                    civ["USA"].merge.push(value);
                }
                civ[value].strength = 0;
                });

                civ["PORa"].strength = 0;
                civ["KON"].strength = 0;
                civ["LIB"].strength = 0;
            }

            if (nextYear == 1970 && c.orwell1984) {
                const valuesToAdd = ["DOM", "COL", "GUY", "FGU", "SUR", "BRA", "PAR", "ARG", "CHL", "BOL", "URU", "PEU", "EQU", "FRAa", "ENGa", "FAK", "ANT"];

                valuesToAdd.forEach((value) => {
                if (!civ["USA"].merge.includes(value)) {
                    civ["USA"].merge.push(value);
                }
                civ[value].strength = 0;
                });
            }
            break;
    }
}