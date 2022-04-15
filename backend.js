
function Cal() {
    var HW = parseFloat(document.getElementById("HW").value); // Hourly wage
    var NH = parseFloat(document.getElementById("NH").value); // Number of hours work each week
    var AYE = parseFloat(document.getElementById("AYE").value); // Average yearly expense
    var C = parseFloat(document.getElementById("C").value); // Cost 

    var hrs; // Number of hours one have to work for that item
    var mins; // Total minutes

    var monthlyE; // Percentage of one's monthly earning for that item
    var Exp; // The expenses that the cost of the item could cover

    // Calculations
    hrs = C/HW;
    mins = hrs*60; // Convert total hours to total minutes
    hrs = Math.trunc(hrs); // Remove decimal part from hours
    mins = mins%60; // Find remainder for minutes
    mins = Math.trunc(mins); // Remove decimal part from minutes

    monthlyE = (C/(NH*HW*4))*100;
    Exp = C/(AYE/365);

    // Rounding numbers
    monthlyE = Math.round((monthlyE + Number.EPSILON)*10)/10; // to 1 dp
    Exp = Math.round((Exp + Number.EPSILON)*10)/10; // to 1 dp

    // Output in HTML
    document.getElementById("tt").innerHTML = "To afford this item..";
    document.getElementById("p1").innerHTML = "- You would have to work "+hrs+" hour(s) & "+mins+" min(s) for it.";
    document.getElementById("p2").innerHTML = "- You would have to give up "+monthlyE+"% of your monthly earnings for it.";
    document.getElementById("p3").innerHTML = "- You would have to sacrifice "+Exp+" day(s) worth of expenses for it.";

}

function coff7() {
    // Output in HTML
    document.getElementById("coffout").innerHTML = "...will increase your yearly expense by roughly $1825.";
}

function coff3() {
    // Output in HTML
    document.getElementById("coffout").innerHTML = "...will increase your yearly expense by roughly $782.";
}

function coff1() {
    // Output in HTML
    document.getElementById("coffout").innerHTML = "...will increase your yearly expense by roughly $261.";
}