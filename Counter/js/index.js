let countNum = document.getElementById("number");
let lowerCountButton = document.getElementById("lower");
let upperCountButton = document.getElementById("add");
let countValue = Number(countNum.innerText);

function changeCount(event) {
    if(event.target.id === "lower"){
        countValue--;
    }
    else if(event.target.id === "add"){
        countValue++;
    }

    countNum.innerText = `${countValue}`;
}

lowerCountButton.addEventListener("click",changeCount);
upperCountButton.addEventListener("click",changeCount);