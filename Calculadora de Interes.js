function compute()
{
    var principal= document.getElementById("principal").value;
    var rate= document.getElementById("rate").value;
    var years= document.getElementById("years").value;
    var interest= principal * years * rate/100;
    var year= new Date().getFullYear() + parseInt(years);
    var amount= parseInt(principal) + parseFloat(interest);
    var result= document.getElementById("result");
    if (principal <=0) {
        alert("Ingrese un numero Positivo!! ");
        document.getElementById("principal").focus();
    }

     else {
                result.innerHTML = "Si depositas $" + "<mark>" + principal + "</mark>" + ",\<br\> a una tasa de interes de " + "<mark>" + rate + "%" + "</mark>" + "\<br\> Recibiras un monto de $" + "<mark>" + amount + "</mark>" + ",\<br\> en el año " + "<mark>" + year + "</mark>" + "\<br\>";
            }
        
    
}

function updateRate() {
var rateval = document.getElementById ("rate").value;
document.getElementById("rate_val").innerText = rateval;
}