let count=1;
let obj={};
let win=0;

let tds = document.getElementsByTagName("td");
for(let td of tds){
    td.addEventListener('click', function (event){
        if(win) return;
        if(event.target.textContent) return;
        event.target.innerText = count%2? "x":"o";
        obj[event.target.id] = count%2? "x":"o";
        count++;
        handleEnd();
    });
}
function handleEnd(){
    if(count<5) return;
    const winPatterns = [
        [1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],
        [3,6,9],[1,5,9],[3,5,7]
    ];
    for(let pat of winPatterns){
        const [a,b,c] = pat;
        let i1 = String(a); let elem1=document.getElementById(i1);
        let i2 = String(b); let elem2=document.getElementById(i2);
        let i3 = String(c); let elem3=document.getElementById(i3);
        if(obj[i1] && obj[i1]===obj[i2] && obj[i1]===obj[i3]){
            elem1.style.backgroundColor="lightgreen";
            elem2.style.backgroundColor="lightgreen";
            elem3.style.backgroundColor="lightgreen";
            if(obj[i1]==="x"){
                displayWinner("X");
            }
            if(obj[i1]==="o"){
                displayWinner("O");
            }
            return;
        }
    }
    if(count===9) displayWinner(0);
}

let div = document.getElementById("winner");
function displayWinner(winner){
    if(winner===0){
        div.innerText = "It's a draw!";
    }
    else{
        div.innerText=`${winner} wins!`;
    }
    win=1;
}

function handleReset(){
    count=1;
    obj={};
    win=0;
    for(let td of tds){
        td.textContent = "";
        td.style.backgroundColor="white";
    }
    div.innerHTML="<br>";
}