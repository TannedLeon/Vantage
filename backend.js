
// Get button
var backTopButton = document.getElementById("backTop");
// When the user scrolls down 150px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        backTop.style.display = "block";
    } else {
        backTop.style.display = "none";
    }
}
// Scroll back up function
function Top() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function getStarted() {
    document.getElementById('black').scrollIntoView();
}

function Check() {
    document.getElementById('red').scrollIntoView();
}

// Function to calculate the true cost of a product
function Cal1() {
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
    document.getElementById("coffOut").innerHTML = "...will increase your yearly expense by roughly $1825.";
}
function coff3() {
    // Output in HTML
    document.getElementById("coffOut").innerHTML = "...will increase your yearly expense by roughly $782.";
}
function coff1() {
    // Output in HTML
    document.getElementById("coffOut").innerHTML = "...will increase your yearly expense by roughly $261.";
}


// Function to calculate retirement age
function Cal2() {
    var RA = parseFloat(document.getElementById("RA").value); // Retirement age
    var CS = parseFloat(document.getElementById("CS").value); // Current savings
    var AGE = parseFloat(document.getElementById("AGE").value); // Age
    var AYE = parseFloat(document.getElementById("AYE").value); // Average yearly expense

    var money; // Total amount of money needed
    var year; // Yearly contribution to reach goal
    var month; // Monthly contribution to reach goal
    var week; // Weekly contribution to reach goal
    var day; // Daily contribution to reach goal

    // Calculation
    money = ((90-RA)*AYE);
    year = (((90-RA)*AYE)-CS) / (RA-AGE);
    month = year/12;
    week = year/52;
    day = year/365;

    // Rounding numbers
    year = Math.round((year + Number.EPSILON)*100)/100; // to 2 dp
    month = Math.round((month + Number.EPSILON)*100)/100; // to 2 dp
    week = Math.round((week + Number.EPSILON)*100)/100; // to 2 dp
    day = Math.round((day + Number.EPSILON)*100)/100; // to 2 dp

    // Output to HTML
    document.getElementById("ageOut").innerHTML = "To retire at the age of "+RA+", You would need to save";
    document.getElementById("moneyOut").innerHTML = "$"+money+" in total";
    document.getElementById("yearOut").innerHTML = "$"+year+" every year";
    document.getElementById("monthOut").innerHTML = "$"+month+" every month";
    document.getElementById("weekOut").innerHTML = "$"+week+" every week";
    document.getElementById("dayOut").innerHTML = "$"+day+" every day";

}

function MCQ1() {
    if (document.getElementById("time").checked == false && document.getElementById("money").checked == false) {
        document.getElementById("MCQ1").innerHTML = "Neither?"; 
    } else if (document.getElementById("time").checked == false && document.getElementById("money").checked == true) {
        document.getElementById("MCQ1").innerHTML = "Alright, understandable."; 
    } else if (document.getElementById("time").checked == true && document.getElementById("money").checked == false) {
        document.getElementById("MCQ1").innerHTML = "Okay, wise."; 
    } else if (document.getElementById("time").checked == true && document.getElementById("money").checked == true) {
        document.getElementById("MCQ1").innerHTML = "That's right! Being able to have both is surely ideal."; 
    }
}
function Reveal() {
    var x = document.getElementById("reveal");
    x.style.display = "inline";
}

