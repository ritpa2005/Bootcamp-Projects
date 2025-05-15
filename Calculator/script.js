let result = document.getElementById('result');
let num1=0;
let num2=0;
let op='+';
let recent=false;

function calc(n1, n2, op){
    switch(op){
        case '+':
            return n1+n2;
        case '-':
            return n1-n2;
        case '*':
            return n1*n2;
        case '/':
            return n1/n2;
        case '%':
            return n1%n2;
        case 'e':
            return n1**n2;
        default:
            return 0;
    }
}

let clr = document.getElementById('c');
clr.addEventListener('click', ()=>{
    result.innerText="0";
});

let del = document.getElementById('del');
del.addEventListener('click', ()=>{
    let val = result.innerText;
    let newVal = val.slice(0,-1);
    result.innerText = newVal.length>0 ? newVal : "0";
});

let ops = "+-*/%e";
for(let b of ops){
    let btn = document.getElementById(b);
    btn.addEventListener('click', ()=>{
        num1 = Number(result.innerText);
        op=b;
        result.innerText="0";
    });
}

let eq = document.getElementById('=');
eq.addEventListener('click', ()=>{
    num2 = Number(result.innerText);
    let res = calc(num1, num2, op);
    result.innerText = String(res);
    recent=true;
});

let nums = "0123456789.";
for(let b of nums){
    let btn = document.getElementById(b);
    btn.addEventListener('click', ()=>{
        if(result.innerText==='0' || recent){
            recent=false;
            result.innerText = b;
        }
        else{
            let res = result.innerText;
            result.innerText = res+b;
        }
    });
}