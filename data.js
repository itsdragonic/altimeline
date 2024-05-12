var civs = {};
civs[-2024] = {
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

        x: 1883,
        y: 365,
        size: 10,
    },
    "lakes": {
        name: "Lakes",
        state: 1,
        strength: 9999,
        techecon: 0,
    }
}


var events = {
    "American Revolution": {
        startingYear: 1775,
        variation: 5,

        preceding: "British North America",
    }
}