
function Cal() {
    var HW = parseFloat(document.getElementById("HW").value); // Hourly wage
    var NH = parseFloat(document.getElementById("NH").value); // Number of hours work each week
    var AYE = parseFloat(document.getElementById("AYE").value); // Average yearly expense
    var C = parseFloat(document.getElementById("C").value); // Cost 

    var hrs; // Number of hours one have to work for that item
    var monthlyE; // Percentage of one's monthly earning for that item
    var Exp; // The expenses that the cost of the item could cover

    hrs = C/HW;
    monthlyE = (C/(NH*HW*4))*100;
    Exp = C/(AYE/365);

    var tt = document.getElementById("tt");
    var entertt = document.createTextNode("To afford this item...");

    var p1 = document.getElementById("p1");
    var enterp1 = document.createTextNode("- You would have to work "+hrs+" hour(s) for it.");

    var p2 = document.getElementById("p2");
    var enterp2 = document.createTextNode("- You would have to give up "+monthlyE+"% of your monthly earnings for it.");

    var p3 = document.getElementById("p3");
    var enterp3 = document.createTextNode("- You would have to sacrifice "+Exp+" day(s) worth of expenses for it.");

    tt.append(entertt);
    p1.append(enterp1);
    p2.append(enterp2);
    p3.append(enterp3);
}