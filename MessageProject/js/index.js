let submitButton = document.getElementById("submit");
let inputMsg = document.getElementById("message");
let para = document.getElementsByTagName("p")[0];

window.onload = () => {
    inputMsg.value = "";
    para.innerText = "";
    para.classList.remove("show");
}

function displayMessage() {
    let msg = inputMsg.value;
    if (msg === "") {
        para.innerText = "Input field is empty!";
        para.classList.add("show");
    } else {
        para.classList.remove("show");
        para.innerText = msg;
        inputMsg.value = "";
    }
}

document.addEventListener("keydown", (event) => {
    if (event.code === 'Enter') {
        let msg = inputMsg.value;
        if (msg === "") {
            para.addClass("show");
            para.innerText = "Input field is empty!";
        } else {
            para.classList.remove("show");
            para.innerText = msg;
            inputMsg.value = "";
        }
    }
});

submitButton.addEventListener("click", displayMessage);