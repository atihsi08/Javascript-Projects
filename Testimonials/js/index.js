let clientArray = [];
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let customer = document.getElementById("customer");
let userName = document.getElementById("userName");
let profile = document.getElementById("profile");
let index = 1;

function Client(imgUrl, name, profile) {
    this.imgUrl = imgUrl;
    this.name = name;
    this.profile = profile;
}

let client1 = new Client("img/img1.jpg", "Sandy", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, nam accusantium temporibus aliquam ratione aut fuga laudantium, reiciendis harum voluptatem facere dicta cum quo voluptate minus assumenda. Possimus debitis amet unde odio.");

let client2 = new Client("img/img2.jpg", "Ishita", "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock");

let client3 = new Client("img/img3.jpg", "Kinu", "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.");

let client4 = new Client("img/img4.jpg", "Jungkook", "Rather be dead than living without passion.");

let client5 = new Client("img/img5.jpg", "Suga", "Those who don’t have a dream, it’s okay. It’s okay if you don’t have a dream. You just have to be happy.");
clientArray.push(client1);
clientArray.push(client2);
clientArray.push(client3);
clientArray.push(client4);
clientArray.push(client5);

function display(event) {
    if (event.target.id === "previous") {
        index = index < 0 ? 4 : index;
        userName.innerText = clientArray[index].name;
        profile.innerText = clientArray[index].profile;
        customer.src = clientArray[index].imgUrl;
        console.log(userName.innerText+" "+profile.innerText);
        index--;
    }
    else if(event.target.id === "next") {
        index = index > 4 ? 0 : index;
        console.log(clientArray[index]);
        userName.innerText = clientArray[index].name;
        profile.innerText = clientArray[index].profile;
        customer.src = clientArray[index].imgUrl;
        console.log(userName.innerText+" "+profile.innerText);
        index++;
    }
}

previous.addEventListener("click", display);
next.addEventListener("click", display);