// This function is AI-generated.
function getBrightness(hex) {
    const sanitizedHex = hex.replace("#", "")
    let longHex;
    if (sanitizedHex.length === 3) {
        longHex = sanitizedHex.split('').map(char => char + char).join('');
    } else if (sanitizedHex.length === 6) {
        longHex = sanitizedHex;
    } else {
        console.error("Invalid hex code length.");
        return null;
    }

    const r = parseInt(longHex.substring(0, 2), 16);
    const g = parseInt(longHex.substring(2, 4), 16);
    const b = parseInt(longHex.substring(4, 6), 16);

    return Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
}

if (localStorage.getItem("themeColors")) {
    var colors = localStorage.getItem("themeColors").split(",");
    if (getBrightness(colors[0]) > 127.5) {
        var tcolor = "black"
    } else {
        var tcolor = "white"
    }
    var cssvars = `
        --back-color: ${colors[0]} !important;
        --text-color: ${tcolor} !important;
        --accent: ${colors[1]} !important;
    `;
    if (tcolor == "white" && getBrightness(colors[1]) > 127.5) {
        cssvars += "\n--hover-text-color: black !important;"
    } else if (tcolor == "black" && getBrightness(colors[1]) < 127.5) {
        cssvars += "\n--hover-text-color: white !important;"
    }
    document.documentElement.style = cssvars;
}