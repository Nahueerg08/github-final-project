function compute() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);

    if (isNaN(principal) || principal <= 0) {
        alert("Please enter a valid positive number for the principal.");
        document.getElementById("principal").focus();
        return;
    }

    if (isNaN(years) || years <= 0) {
        alert("Please select a valid number of years.");
        document.getElementById("years").focus();
        return;
    }

    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + years;
    var amount = principal + interest;

    var result = document.getElementById("result");

    result.innerHTML =
        "If you deposit $" + "<mark>" + principal + "</mark>" +
        "<br> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" +
        "<br> You will receive an amount of $" + "<mark>" + amount.toFixed(2) + "</mark>" +
        "<br> in the year " + "<mark>" + year + "</mark>";
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
