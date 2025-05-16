const arr = Array(16).fill(0);
for(let i=0;i<5;++i){
    let idx = Math.floor(Math.random()*16);
    if(arr[idx]===1){
        i--; continue;
    }
    arr[idx]=1;
}

let bs = "https://ik.imagekit.io/d9mvewbju/Course/BigbinaryAcademy/battleship-image_e6bWCZ1w4.png";
let wt = "https://ik.imagekit.io/d9mvewbju/Course/BigbinaryAcademy/seamless-pattern-waves-various-shades-blue-vector-underwater-design-96891651_aSd5pmbaM.webp";

let j=0;
let count=0;
let clicks=0;
let tds = document.getElementsByTagName('td');
for(let td of tds){
    td.id = String(j);
    j++;
    td.addEventListener('click', handleClick);
}
function handleClick(event){
    clicks++;
    let jj = Number(event.target.id);
    count+= arr[jj];
    let cl = arr[jj] ? "battleship" : "water";
    event.target.classList.add(cl);    
    event.target.removeEventListener('click', handleClick);
    checkWin();
}

function checkWin(){
    if(count===5){
        setTimeout(()=>alert ("You Won!"),100);
    }
    else if(clicks===8){
        setTimeout(()=>alert ("You Lost!"),100);
    }
    else return;
    for(let td of tds){
        td.removeEventListener('click', handleClick);
    }
}

function resetGame(){
    j=0;
    count=0;
    clicks=0;
    for(let td of tds){
        td.id = String(j);
        j++;
        let arr = td.classList;
        td.classList.remove(...arr);
        td.addEventListener('click', handleClick);
    }
}