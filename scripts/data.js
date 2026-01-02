const presentYear = 2026;
const oppositeYear = -presentYear;
var firstYear = {};

firstYear[oppositeYear] = {
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
    "conditions": {
        superpowers: [],
        taken_names: [], // for colonies

        // 1400s
        constantinopleSurvives: true, // false
        byzantium: false, // false
        colonizingAmerica: undefined,

        // 1600s
        af_colonization: true, // true

        // 1700s
        usa_exists: true, // true
        pax_francia: false, // false
        napoleonic_wars: true, // true
        french_victory: false, // false

        // 1800s
        louisiana_purchase: false, // true
        manifest_destiny: true, // true
        csa_victory: false, // false
        unified_germany: true, // true
        unified_italy: true, // true

        // 1900s
        ww1: true, // true
        occupied_iran: false,
        cold_war: false, // true
        orwell1984: false, // false
        af_decolonization_level: 5, // 0 means none, 3 means nearly full decolonization
                                    // <= 1 means decolonized first / most likely
        israel: true, // true
        defcon: 5,

        // 2000s

        // [conditions]
    },
}

var allEvents = {
    1: {
        name: "Rome Wins Punic War",
        group: "Western Europe",
        type: "boolean",
        value: true,
        inverted: false,
    },
    2: {
        name: "Rome Colonizes America",
        group: "Western Europe",
        type: "boolean",
        value: false,
        inverted: true,
    },
    6: {
        name: "Persia Conquers Greece",
        group: "Eastern Europe",
        type: "boolean",
        value: false,
        inverted: true,
    },
    7: {
        name: "Rome Falls",
        group: "Western Europe",
        type: "boolean",
        value: true,
        inverted: false,
    },
    8: {
        name: "Mongols Invade Japan",
        group: "East Asia",
        type: "boolean",
        value: false,
        inverted: true,
    },
    10: {
        name: "Japan Becomes Christian",
        group: "East Asia",
        type: "boolean",
        value: false,
        inverted: true,
    },
    14: {
        name: "Russo-Japanese War (Japan Victory)",
        group: "East Asia",
        type: "boolean",
        value: true,
        inverted: false,
    },
    15: {
        name: "The Korean War",
        group: "East Asia",
        type: "range",
        value: 1,
        inverted: false,
    },
    16: {
        name: "Collapse of Gran Colombia",
        group: "South America",
        type: "boolean",
        value: true,
        inverted: false,
    },
    17: {
        name: "Collapse of Peru-Bolivia",
        group: "South America",
        type: "boolean",
        value: true,
        inverted: false,
    },
    // rng 25-29?
    // !!30
    30: {
        name: "Randomize Brazil Colonizer",
        group: "South America",
        type: "range",
        value: 1,
        inverted: false,
    },
    31: {
        name: "America's Name",
        group: "North America",
        type: "range",
        value: 1,
        inverted: false,
    },
    32: {
        name: "Seven Years War",
        group: "World",
        type: "range",
        value: 1,
        inverted: false,
    },
    // *
    33: {
        name: "The Fate of Austria*",
        group: "Western Europe",
        type: "range",
        value: 1,
        inverted: false,
    },
    34: {
        name: "Big Albania",
        group: "Eastern Europe",
        type: "boolean",
        value: false,
        inverted: true,
    },
    35: {
        name: "Big Arabia",
        group: "Middle East",
        type: "boolean",
        value: false,
        inverted: true,
    },
    36: {
        name: "Big Portugal",
        group: "Western Europe",
        type: "boolean",
        value: false,
        inverted: true,
    },
    // doesn't work
    37: {
        name: "Hala'ib Triangle",
        group: "North Africa",
        type: "boolean",
        value: false,
        inverted: true,
    },
    // doesn't work
    43: {
        name: "South Sudan",
        group: "North Africa",
        type: "boolean",
        value: true,
        inverted: false,
    },



    97: {
        name: "United States Turns Socialist",
        group: "North America",
        type: "boolean",
        value: false,
        inverted: true,
    },
    98: {
        name: "Enable Different Colonization Outcomes",
        group: "World",
        type: "boolean",
        value: false,
        inverted: true,
    },
    99: {
        name: "1984",
        group: "World",
        type: "boolean",
        value: false,
        inverted: true,
    },
    100: {
        name: "European Federation",
        group: "Western Europe",
        type: "boolean",
        value: false,
        inverted: true,
    }
};

var dependencies = {
    // Rome has to win Punic Wars to Rome colonizes America or fall
    2: ["1"],
    7: ["1"],
    //99: ["97"],
};

var allValues = {}
for (let i = 0; i < 200; i++) {
    allValues[i] = null;
}

var colonizeNewWorld = {};
var colonizeOldWorld = {};
civs = firstYear;

const specialSeeds = [0, "0", null, '', '1984', 'southern_victory'];

function rng(val, year) {
    // override1
    if (allValues[val] != null) return allValues[val];

    // override2
    if (
        !specialSeeds.includes(seed) &&
        seed.includes("{")
    ) {
        const match = seed.match(/\{([^}]+)\}/);
        if (match) {
            const rules = {};

            match[1].split(",").forEach(pair => {
                const [rawKey, rawValue] = pair.split("=");

                const key = rawKey.trim();
                const value = rawValue.trim();

                if (key === "def") {
                    rules.default = value === "true";
                } else if (key === "pod") {
                    rules.pointofdeviation = Number(value);
                } else {
                    rules[Number(key)] = Number(value);
                }
            });

            if (Object.prototype.hasOwnProperty.call(rules, val)) return rules[val];
            if (rules.default) return 1;
            if (typeof year === 'number' && rules.pointofdeviation > year) return 1;
        }
    }

    // special seeds
    if (!seed || seed == 0 || seed == "") return 1;
    if (seed == 'test') return 0;
    if (seed == '1984') {    
        if ([15, 97, 99, 105, 106, 124].includes(val)) {
            return 0;
        }
        return 1;
    }
    if (seed == 'southern_victory') {    
        if ([90, 121].includes(val)) {
            return 0;
        }
        return 1;
    }

    Math.seedrandom(seedNumber + val);
    return Math.random();
}

function rngRange(val, lowerBound, upperBound) {
    if (val == 1) {
        return Math.ceil((upperBound + lowerBound) / 2);
    } else {
        return Math.ceil(rng(val + 1) * (upperBound - lowerBound + 1)) + lowerBound;
    }
}

function rngInfluence(val, normalVal, conditionals) {
    if (val == 1) {
        return normalVal;
    } else {
        let newValue = normalVal;

        conditionals.forEach(condition => {
            const [name, weight] = condition;
            if (name === true) {
                newValue -= rngRange(rng(val), 0, 2 * weight);
            }
        });

        return newValue;
    }
}

function colonizingPercentage(RNG, array, bias, biasAmount, canBeFree) {
    RNG = Math.min(RNG, 0.999999999999);

    let cumulativeWeights = [];
    let totalWeight = 0;
    let colonizers = structuredClone(array);

    if (!canBeFree) {
        colonizers["none"] = 0;
    }


    if ((rng(98) < possible || rng(98) == 1) && colonizers[bias] > 0) {
        return bias;
    }

    for (var key in colonizers) {
        totalWeight += colonizers[key];
        if (key == bias) {
            totalWeight *= biasAmount;
        }
        cumulativeWeights.push({ key, weight: totalWeight });
    }

    var random = RNG * totalWeight;

    for (var i = 0; i < cumulativeWeights.length; i++) {
        if (random < cumulativeWeights[i].weight) {
            return cumulativeWeights[i].key;
        }
    }

    // Absolute safety fallback
    return cumulativeWeights[cumulativeWeights.length - 1].key;
}

function owner(civ, id, colors, name, name2, nameFirst) {
    if (colors == null) {
        colors = [100, 100, 100];
    }
    if (civ[id].owner == "none") {
        if (civ[id].defaultname) {
            civ[id].name = civ[id].defaultname;
        } else {
            civ[id].name = name;
        }
        if (civ[id].defaultcolor) {
            civ[id].color = civ[id].defaultcolor;
        } else {
            civ[id].color = colors;
        }
    } else if (civ[id].owner != null) {
        if (nameFirst || civ[id].nameFirst) {
            civ[id].name = civ[civ[id].owner].adjective + " " + name2;
        } else {
            civ[id].name = `${name2} ( ${civ[civ[id].owner].adjective.slice(0, 2)}. )`;
        }

        if (civ[civ[id].owner].defaultcolor) {
            civ[id].color = civ[civ[id].owner].defaultcolor;
        } else {
            civ[id].color = civ[civ[id].owner].color;
        }
        
        if (civ[id].autonomous) {
            if (civ[id].defaultcolor) {
                civ[id].color = civ[id].defaultcolor;
            } else {
                civ[id].color = colors;
            }
        }
    }
}

function newLand(civ, nation) {
    if (civ[nation].owner != null) {
        if (civ[civ[nation].owner].defaultname != null) {
            civ[nation].name = `New ${civ[civ[nation].owner].defaultname}`;
        } else {
            civ[nation].name = `New ${civ[civ[nation].owner].name}`;
        }
    }
}

function annex(civ, country, annexed) {
    civ[country].merge = [...civ[country].merge];

    annexed.forEach((value) => {
        if (!civ[country].merge.includes(value)) {
            civ[country].merge.push(value);
        }
        civ[value].strength = 0;
    });
}

// Alliances
var Allies = ["ENG", "FRA", "RUS", "SER"];

var Axis = ["GER", "AUS", "BUL", "OTT"];

function formatSide(civ, ids) {
    if (ids.length === 0) return "";
    if (ids.length === 1) return civ[ids[0]].name;

    if (ids.length === 2) {
        return `${civ[ids[0]].name} and ${civ[ids[1]].name}`;
    }

    let result = "";

    for (let i = 0; i < ids.length; i++) {
        if (i === ids.length - 1) {
            result += "and " + civ[ids[i]].name;
        } else {
            result += civ[ids[i]].name + ", ";
        }
    }

    return result;
}

function joinAlliance(nation, alliance) {
    let otherAlliance = Allies;
    if (alliance == Allies) {
        otherAlliance = Axis;
    }

    otherAlliance.remove(nation);
    alliance.remove(nation);
    alliance.append(nation);
}

function joinSameAlliance(nation, joinNation) {
    if (Allies.includes(joinNation)) {
        joinAlliance(nation, Allies);
    }
    if (Axis.includes(joinNation)) {
        joinAlliance(nation, Axis);
    }
}

function currentAlliance(nation) {
    if (Allies.includes(nation)) {
        return Allies;
    }
    if (Axis.includes(nation)) {
        return Axis;
    }
    return null;
}

function addCountry(id, name, state, x, y, size) {
    civs[oppositeYear][id] = {
        name: name,         //  - name
        state: state,       //  - current borders of country
        strength: 0,        //  - if > 0, will be shown on map
        techecon: 0,        //  - largely not used, but technically is how "advanced" a nation is

        x: x,               //  - x pos of text
        y: y,               //  - y pos of text
        size: size,         //  - size of text
        merge: [],          //  - used for annexing countries

        // adjective            - word used for colonies (ex: British America)
        // color                - color of country
        // defaultname
        // defaultcolor

        // ideology             - "communism" "democracy" "fasicsm" "monarchy" "socialism" "anarchy"
        // strong               - subjective based on country
    };
}

// Tribal
addCountry("BER", "Berbers", null, 1255, 385, 5);
addCountry("AYR", "Tuaregs", null, 1265, 410, 5);
addCountry("LUO", "Luo", null, 1475, 600, 7);
addCountry("LUB", "Luba", null, 1400, 725, 5);
addCountry("ZIM", "Mapungubwe", null, 1420, 825, 5);
addCountry("YOR", "Yoruba", null, 1220, 585, 5);
addCountry("HAR", "Ifat", null, 1540, 580, 6);

// Civilizations
addCountry("MES", "Assyria / Babylon", 1, 1500, 372, 5);
addCountry("GEO", "Colchis", 1, 1520, 315, 5);
addCountry("ARM", "Hayasha-Azzi", 1, 1486, 325, 5);
addCountry("BUR", "Dhanyawadi", 1, 1900, 490, 5);
addCountry("ROM", "Roman Empire", '1a', 1257, 330, 6);
addCountry("KOR", "Jin", 2, 2115, 375, 7);
addCountry("DRK", "Gojoseon", 2, 2080, 330, 5);

addCountry("MON", "Xiongnu", 1, 1890, 290, 15);
addCountry("HIT", "Hittites", 1, 1470, 343, 5);

addCountry("VIE", "Van Land", 1, 1985, 480, 5);
addCountry("LIB", "Libya", 1, 1365, 400, 5);
addCountry("GRE", "Greek Kingdoms", 1, 1400, 335, 5);
addCountry("CAR", "Carthage", 1, 1205, 345, 10);
addCountry("KSH", "Kushite Empire", 2, 1395, 460, 8);
addCountry("PER", "Median Empire", 1, 1543, 378, 7);
addCountry("IND", "Indian Kingdoms", 1, 1710, 454, 8);
addCountry("CHO", "Pandyas", 1, 1780, 560, 6);
addCountry("ABY", "Axum", 1, 1500, 530, 6);
addCountry("SPAc", "New Spain", 1, 670, 490, 12);
addCountry("CSA", "Confederate States of America", 1, 480, 390, 8);
addCountry("CAM", "Funan", 1, 1970, 555, 8);
addCountry("MOC", "Moche", 1, 640, 700, 6);
addCountry("YEM", "Himyar", 1, 1560, 530, 6);
addCountry("CHM", "Champa", 1, 2010, 540, 5);
addCountry("JAP", "Yamato", 1, 2185, 380, 8);
addCountry("BYZ", "Eastern Roman Empire", 1, 1370, 340, 9);
addCountry("GHA", "Ghana Empire", 1, 1145, 530, 5);
addCountry("INC", "Tiwanaku Empire", 1, 710, 780, 6);
addCountry("HNN", "Hunnic Empire", 1, 1375, 266, 7);
addCountry("AZX", "Teotihuacan", 1, 500, 500, 5);
addCountry("NEP", "Nepal", 1, 1845, 430, 4);

addCountry("GTH", "Gothic Kingdoms", 1, 1270, 300, 5);
addCountry("FRK", "Gauls", null, 1245, 280, 7);
addCountry("AQU", "Aquitaine", 1, 1235, 295, 5);
addCountry("ENG", "Wessex", 1, 1210, 250, 5);
addCountry("TUR", "Turkish Khaganate", 2, 1340, 280, 7);
addCountry("TIB", "Tibet", 1, 1860, 410, 8);
addCountry("ISL", "Rashidun Caliphate", 1, 1360, 410, 11);
addCountry("BUL", "Bulgaria", 1, 1450, 280, 5);
addCountry("SVJ", "Srivijaya", 1, 1930, 670, 8);
addCountry("CHA", "Kanem Empire", 1, 1310, 540, 5);
addCountry("SPA", "Asturias", 1, 1200, 310, 5);
addCountry("COR", "Visigoths", 0, 1190, 340, 7);
addCountry("ARA", "Aragon", 2, 1250, 320, 4);
addCountry("VEN", "Venice", 1, 1330, 290, 4);
addCountry("PAP", "Papal States", 1, 1315, 305, 3);
addCountry("ALG", "Tahert", 1, 1250, 365, 5);
addCountry("BRI", "Brittany", 1, 1227, 265, 3);
addCountry("SER", "Serbia", 1, 1375, 305, 3);
addCountry("NOR", "Norway", 1, 1260, 170, 8);
addCountry("SWE", "Sweden", 1, 1320, 188, 7);
addCountry("DEN", "Denmark", 2, 1309, 210, 4);

addCountry("HRE", "H.R.E.", 1, 1305, 250, 6);
addCountry("FRA", "France", 1, 1250, 280, 6);
addCountry("ITA", "", 1, 1240, 290, 5);
addCountry("RUS", "Kieven Rus'", 1, 1411, 240, 14);
addCountry("OMA", "Oman", 1, 1660, 480, 6);
addCountry("ICE", "Iceland", 1, 1145, 143, 5);
addCountry("HUN", "Hungary", 1, 1370, 275, 5);
addCountry("POL", "Poland", 2, 1375, 245, 4);
addCountry("FAT", "Fatamid Caliphate", 1, 1390, 400, 6);
addCountry("VIN", "Vinland", 1, 868, 250, 6);
addCountry("IRE", "Irish Kingdoms", 1);
addCountry("MAY", "Mayapan", 1, 570, 500, 6);
addCountry("GEN", "Genoa", 1, 1300, 313, 4);
addCountry("MOR", "Almoravids", 1, 1150, 390, 6);

addCountry("NAP", "Sicily", 1, 1350, 320, 3.5);
addCountry("POR", "Portugal", 1, 1150, 340, 4);
addCountry("BUN", "Kitara", 1, 1425, 650, 5);
addCountry("CZE", "Bohemia", 1, 1350, 255, 4);
addCountry("HAW", "Hawai'i", 1, 130, 485, 6);
addCountry("SOM", "Ajuran", 1, 1540, 620, 8);
addCountry("LIV", "Teutonic", 1, 1390, 200, 4);
addCountry("LIT", "Lithuania", 5, 1390, 215, 4);
addCountry("MAL", "Mali Empire", 1, 1140, 545, 6);
addCountry("SCO", "Scotland", 1, 1215, 205, 5);
addCountry("THA", "Sukhothal", 1, 1940, 530, 5);

addCountry("OTT", "Ottoman Empire", 1, 1380, 340, 9);
addCountry("KIL", "Kilwa", 1, 1545, 720, 6);
addCountry("NIG", "West African Kingdoms", 1, 1220, 585, 5);
addCountry("ZEA", "Maori", 1, 2350, 960, 10);
addCountry("MAJ", "Kediri", 1, 2050, 710, 7);
addCountry("ROA", "Wallachia", 1, 1410, 290, 4);
addCountry("JOL", "Jolof", 1, 1105, 535, 6);
addCountry("CHIi", "New China", 1, 2000, 540, 8); // *
addCountry("CHIa", "Chinese America", 1, 300, 370, 9); // *
addCountry("HOR", "Golden Horde", 1, 1490, 260, 10);
addCountry("KON", "Kongo", 1, 1325, 715, 7);
addCountry("MLY", "Malacca", 1, 1970, 630, 5);
addCountry("IRO", "Iroquois", 1, 755, 305, 4);
addCountry("QQO", "Qara Qoyunlu", 1, 1520, 360, 7);
addCountry("KUW", "Kuwait", 1, 1575, 415, 4);
addCountry("AUS", "Austria", 1, 1320, 275, 4);
addCountry("SON", "Songhay", 1, 1200, 530, 8);
addCountry("BRA", "Portuguese Brazil", 1, 906, 700, 8);

addCountry("KZH", "Yarkent", 1, 1735, 340, 9);
addCountry("VEZ", "Klein-Venedig", "a", 690, 580, 7);
addCountry("MAD", "Merina", 1, 1570, 790, 5);
addCountry("PHI", "Philippines ( SP )", 1, 2130, 555, 7);
addCountry("PORa", "Portuguese Colonies", 1, 1345, 775, 7);
addCountry("DUT", "U.P.", 1, 1290, 233, 4);
addCountry("DAR", "Darfur Sennar", 1, 1380, 540, 6);

addCountry("DENc", "Greenland ( Den. )", 2, 1000, 160, 8);
addCountry("CAN", "Canada", 1, 810, 290, 9);
addCountry("QUE", "Quebec", 1, 750, 270, 9);
addCountry("DUTc", "New Netherlands", 1, 760, 330, 4);
addCountry("GER", "Prussia", 1, 1340, 230, 5);
addCountry("DUTi", "Dutch East Indies", 1, 2000, 680, 9);
addCountry("FRAk", "St. Domingue", 1, 700, 505, 4);
addCountry("DUTb", "Dutch Brazil", 1, 900, 680, 9);
addCountry("PORi", "Timor", 1, 2170, 725, 4);
addCountry("QIN", "Qing Dynasty", 1, 1915, 320, 12);
addCountry("ENGk", "British Caribbean", 1);
addCountry("SWEc", "New Sweden", 1, 735, 343, 4);
addCountry("SUR", "Suriname", 1, 835, 595, 4);
addCountry("FGU", "French Guiana", 1, 860, 605, 4);
addCountry("SWI", "Switzerland", 1, 1310, 280, 2);
addCountry("DUTs", "Cape Colony", 1, 1280, 915, 7);

addCountry("FRAa", "Mauritius", 1);
addCountry("AFG", "Durrani Empire", 1, 1680, 390, 6);
addCountry("RAJ", "East India Co.", 1, 1720, 480, 8);
addCountry("USA", "United States of America", 1, 706, 343, 11);
addCountry("BHU", "Bhutan", 1, 1885, 430, 4);
addCountry("PORz", "Portuguese Australia", 1);
addCountry("FRAz", "French Australia", 1);
addCountry("DUTz", "Dutch Australia", 1);
addCountry("ENGa", "Pacific Islands", 1, 2170, 860, 9);
addCountry("ALA", "Russian America", 1, 360, 180, 7);
addCountry("ENGs", "South Africa", 1, 1270, 910, 9);

addCountry("LOU", "Louisiana", 1, 510, 320, 11);
addCountry("GUY", "British Guiana", 1, 820, 585, 4);
addCountry("FLO", "Spanish Florida", 2);
addCountry("HAI", "Haiti", 1, 710, 500, 4);
addCountry("SOK", "Sokoto", 1, 1270, 565, 10);
addCountry("ARG", "Rio de la Plata", 1, 762, 885, 8);
addCountry("PAR", "Paraguay", 1, 830, 845, 4);
addCountry("CHL", "Chile", 1, 740, 910, 7);
addCountry("GCO", "Gran Colombia", 1, 660, 610, 7);
addCountry("CEN", "Central America", 1, 570, 560, 6);
addCountry("MEX", "Mexico", 1, 480, 470, 10);
addCountry("PEU", "Peru", 1, 678, 755, 10);
addCountry("BOL", "Bolivia", 1, 765, 795, 7);
addCountry("EQU", "Equador", 1, 660, 665, 5.5);
addCountry("COL", "Colombia", 1, 670, 630, 8);
addCountry("URU", "Uruguay", 1, 854, 912, 5);
addCountry("FAK", "Falklands", 1, 900, 1070, 4);
addCountry("LBR", "Liberia", 1, 1145, 605, 5);
addCountry("BEL", "Bel.", 1, 1286, 249, 4);
addCountry("TEX", "Texas", 1, 545, 390, 8);
addCountry("AUZ", "Australia", 1, 2120, 850, 15);
addCountry("FRAx", "French Africa", 1, 1250, 365, 5);
addCountry("FRAs", "French Sudan", 1);
addCountry("DOM", "Dom. Rep.", 1, 745, 505, 4);
addCountry("ORE", "", 1, 450, 270, 9);
addCountry("FRAi", "Indochina", 1, 1985, 500, 5); //fix
addCountry("MEXa", "Mexican Empire", 1, 520, 490, 6);
addCountry("PNG", "Papau New Guinea", 1, 2340, 725, 10);
addCountry("GERc", "New Guinea", 1, 2300, 688, 10);
addCountry("GERx", "German Africa", 1, 1470, 720, 10);
addCountry("SPAx", "Spanish Sahara", 1, 980, 445, 8);
addCountry("ITAx", "Italian Africa", 1, 1290, 450, 9);
addCountry("ENGx", "British Colonies", 1, 1360, 490, 10);
addCountry("ENGn", "British Colonies", 1, 1200, 580, 7);

addCountry("JAPc", "", 1, 2030, 300, 6);
addCountry("CUB", "Cuba", 1, 680, 480, 7);
addCountry("ALB", "Albania", 1, 1390, 325, 3);
addCountry("SIB", "White Army", 1, 1770, 140, 20);
addCountry("ENGb", "British Middle East", 1, 1440, 370, 7);
addCountry("SYR", "Syria", 1, 1440, 375, 6);
addCountry("UKR", "Ukraine", "a", 1445, 260, 6);
addCountry("FIN", "Finland", 1, 1380, 160, 7);
addCountry("GERe", "East Germany", 1, 1340, 225, 5)
addCountry("ANT", "Antarctica", 1, 1155, 1260, 20);
addCountry("JAPn", "DPR Japan", 1, 2130, 325, 6);
addCountry("PAK", "Pakistan", 1, 1670, 430, 8);
addCountry("SRI", "Sri Lanka", 1, 1850, 590, 4);
addCountry("nuclear", "Nuclear Armageddon", 1);
addCountry("AFR", "", 1, 1010, 590, 10);
addCountry("EU", "European Federation", 1, 1110, 270, 7);
addCountry("EAF", "East African Federation", 2, 1520, 675, 7);
addCountry("KUR", "Kurdistan", 1, 1530, 362, 5);


// News
var news = {
    /* Example News
    "Rome vs. Carthage": {
        subtext: "Rome defeats Carthage!",
        image: "https://www.worldhistory.org/img/c/p/360x202/2171.jpg",
        altHistory: false,
        id: 1,
        startDate: -271,
        duration: 10,
        major: true,
    }*/
}
function worldNews(title, subtext, image, altHistory, id, startDate, duration, major) {
    news[title] = {
        subtext: subtext,
        image: image,
        altHistory: altHistory,
        id: id,
        startDate: startDate,
        duration: duration - 1,
        major: major,
    };
}