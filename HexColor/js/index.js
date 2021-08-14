let button = document.getElementsByTagName("button")[0];
let body = document.getElementsByTagName("body")[0];
let h2 = document.getElementsByTagName("h2")[0];
let hex = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

function hexColorDisplay(){
    let color = "#";
    for(let i=0;i<6;i++) {
        let index = Math.ceil(Math.random() * 14);
        console.log(index);
        color += hex[index];
    }
    h2.innerText = `Hex color:${color}`;
    body.style.backgroundColor = color;
}

button.addEventListener("click",hexColorDisplay);