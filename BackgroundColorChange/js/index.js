let colorChangerButton = document.getElementById("colorChange");
let body = document.getElementsByTagName("body")[0];

function changeColor(){
    let colorRed = Math.ceil(Math.random() * 255);
    let colorGreen = Math.ceil(Math.random() * 255);
    let colorBlue = Math.ceil(Math.random() * 255);
    let color = `rgb(${colorRed},${colorGreen},${colorBlue})`;
    body.style.backgroundColor = color;
}

colorChangerButton.addEventListener("click",changeColor);