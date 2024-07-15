
// Re-arrange Nations (lower = higher priority)
function rearrange(nations) {
    let civ = civs[timeline];
    let c = civ["conditions"];

    // North America
    endItem(nations, "BRA");
    if (timeline >= 1822) {
        frontItem(nations, "BRA");
    }
    if (civ["QUE"].name != "Louisiana") {
        endItem(nations, "QUE");
    }
    endItem(nations, "IRO");
    endItem(nations, "CAN");
    frontItem(nations, "FRAk");
    frontItem(nations, "MEXa");
    frontItem(nations, "USAo");
    frontItem(nations, "CEN");

    frontItem(nations, "DUTc");
    frontItem(nations, "SWEc");
    frontItem(nations, "USA"); 
    frontItem(nations, "CSA");
    frontItem(nations, "TEX");

    // South America
    if (timeline >= 1800) {
        endItem(nations, "SPAc");
        frontItem(nations, "URU");
    }
    if (civ["DUT"].dutch_brazil) {
        endItem(nations, "SUR");
    }

    // Oceania
    endItem(nations, "PORi");
    endItem(nations, "AUZ");
    endItem(nations, "ENGa");
    frontItem(nations, "HAI");

    frontItem(nations, "FRAz");
    frontItem(nations, "PORz");
    frontItem(nations, "DUTz");

    // Africa
    endItem(nations, "FRAx");
    endItem(nations, "ALG");
    endItem(nations, "CHA");
    endItem(nations, "DUTs");
    endItem(nations, "EGY");
    endItem(nations, "ENGx");
    frontItem(nations, "SOK");
    frontItem(nations, "EAF");
    frontItem(nations, "SOM");
    frontItem(nations, "LBR");
    if (civ["ITAx"].weak) {
        endItem(nations, "ITAx");
    }

    // Asia
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
    /*if (events[timeline]["conditions"].occupied_iran) {
      endItem(nations, "PER");
    }*/
    endItem(nations, "CAM");
    if (civ["CHI"].ideology == "communism") {
        endItem(nations, "QIN");
    }
    frontItem(nations, "RAJ");
    frontItem(nations, "JAPn");
    frontItem(nations, "PAK");
    frontItem(nations, "KZH");
    frontItem(nations, "DRK");
    frontItem(nations, "JAPc");

    frontItem(nations, "SIB");
    frontItem(nations, "MON");
    frontItem(nations, "KZH");
    frontItem(nations, "TIB");
    if (civ["YEM"].united) {
        frontItem(nations, "YEM");
    }
    if (civ["VIE"].owner != null || civ["VIE"].owner != "none") {
        frontItem(nations, "VIE");
    }
    frontItem(nations, "CHM");

    // Europe
    if (civ["GRE"].strong) {
        frontItem(nations, "GRE");
    }
    frontItem(nations, "ROM");
    frontItem(nations, "BYZ");
    if (civ["CAR"].strong || civ["CAR"].name == "Vandals") {
        frontItem(nations, "CAR");
    }
    endItem(nations, "IRE");
    endItem(nations, "SCO");
    endItem(nations, "ITA");
    endItem(nations, "GTH");

    endItem(nations, "HUN");
    endItem(nations, "RUS");
    if (civ["HUN"].small) {
        endItem(nations, "HUN");
    }
    endItem(nations, "SPA");

    if (timeline > 855 && timeline < 1861) {
        endItem(nations, "ITA");
    }
    if (timeline > 1800) {
        endItem(nations, "HRE");
    }
    frontItem(nations, "VEN");
    frontItem(nations, "GEN");
    frontItem(nations, "BRI");
    frontItem(nations, "OTT");
    frontItem(nations, "FRK");
    frontItem(nations, "ENG");
    frontItem(nations, "AQU");

    frontItem(nations, "SWI");
    frontItem(nations, "DUT");
    frontItem(nations, "BEL");
    frontItem(nations, "LIT");

    frontItem(nations, "FLO");
    frontItem(nations, "VEZ");
    frontItem(nations, "PAP");

    frontItem(nations, "COR");
    frontItem(nations, "GER");
    frontItem(nations, "EU");
    
    // Exceptions
    frontItem(nations, "ISL");
    if (timeline > 1800) {
        endItem(nations, "ISL");
        endItem(nations, "OTT");
    }

    // Seven Years War
    if (civ["AUS"].strong) {
        frontItem(nations, "POL");
        frontItem(nations, "AUS");
    }

    if (civ["RAJ"].name == "India") {
        frontItem(nations, "BUR");
    }

    // WWII
    if (civ["SER"].weak) {
        endItem(nations, "SER");
    }

    // Modern Era
    if (civ["OTT"].name == "Turkey") {
        frontItem(nations, "OTT");
    }

    /*if (civ["ABY"].name == "Italian East Africa") {
      endItem(nations, "ABY");
    }*/

    frontItem(nations, "lakes");
    frontItem(nations, "nuclear");
    endItem(nations, "BG");
}