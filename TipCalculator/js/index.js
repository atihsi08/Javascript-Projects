let billAmount = document.getElementById("cost");
let people = document.getElementById("people");
let services = document.getElementById("serviceSelect");
let calculate = document.getElementById("calculate");
let service = "";
let container = document.getElementsByClassName("container")[0];
let message = document.getElementById("message");

services.addEventListener("change",() => {
    service = services.options[services.selectedIndex].value;
})

calculate.addEventListener("click",() => {
    if( billAmount.value === "" && people.value === "" && service === "" ) {
        alert("Fill all input fields");
    }
    else{
        let tip = service === "great" ? 20: service === "good" ? 10 : 2;
        let totalAmount = Number(billAmount.value)+Number(((Number(billAmount.value) * tip)/100).toFixed(2));
        let str = `<p>Bill Amount => ${billAmount.value}</p><p>Total Amount => ${totalAmount}</p><p>Each Person ows => ${(totalAmount/people.value)}</p>`;
        message.innerHTML = str;
    }
})