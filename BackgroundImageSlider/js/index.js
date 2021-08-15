let imageContainer = document.getElementById("imageContainer");

let imageArray = ['http://lorempixel.com/200/200/food/1', 'http://lorempixel.com/200/200/food/2', 'http://lorempixel.com/200/200/food/3', 'http://lorempixel.com/200/200/food/4', 'http://lorempixel.com/200/200/food/5'];

let previousButton = document.getElementById("previous");
let nextButton = document.getElementById("next");

let index = 1;
let url = "";

function slideImage(event) {
    if (event.target.id === "previous") {
        index = index < 0 ? 4 : index;
        url = imageArray[index];
        index--;
    }
    else if (event.target.id === "next") {
        index = index > 4  ? 0 : index;
        url = imageArray[index];
        index++;
    }

    imageContainer.style.backgroundImage = `url(${url})`;
}

previousButton.addEventListener("click", slideImage);
nextButton.addEventListener("click", slideImage);