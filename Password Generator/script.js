function checkOptions(){
    let cbs = document.querySelectorAll('.cb');
    for(let cb of cbs){
        if(cb.checked){
            return true;
        }
    }
    showAlertMessage();
    return false;
}

let length = document.getElementById("value");
let slider = document.getElementById("total");
slider.addEventListener("input", function(){
    length.textContent = String(slider.value);
    generatePassword(slider.value);
});

function generatePassword(length){
    if(!checkOptions()){
        let passwd = document.getElementById("passwd");
        passwd.value = "";
        return;
    }
    const smallLetters = "abcdefghijklmnopqrstuvwxyz";
    const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const puncs = "!@#$^&*()[]{}_|,.<>?";

    let allowedChars="";
    let nums = document.getElementById("nums");
    let letters = document.getElementById("letters");
    let mixed = document.getElementById("mixed");
    let punc = document.getElementById("punc");

    if(nums.checked){
        allowedChars+= numbers;
    }
    if(letters.checked){
        allowedChars+= smallLetters;
    }
    if(mixed.checked){
        allowedChars+= capitalLetters;
        if(!letters.checked) allowedChars+= smallLetters;
    }
    if(punc.checked){
        allowedChars+= puncs;
    }

    let password = "";
    let n = allowedChars.length;
    for(let i=0;i<length;++i){
        password+=allowedChars[Math.floor(Math.random()*n)];
    }

    let passwd = document.getElementById("passwd");
    passwd.value = password;
}

function showAlertMessage(){
    let msg = document.getElementById("alertMessage");
    msg.style.display="block";
    setTimeout(clearAlertMessage,3000);
}

async function clearAlertMessage(){
    let msg = document.getElementById("alertMessage");
    msg.style.display="none";
}

function showCopyPassword(){
    let passwd = document.getElementById("passwd");
    if(passwd.value === "") return;
    let msg = document.getElementById("confirmMsg");
    msg.style.display="block";
    setTimeout(clearCopyPassword, 3000);
}

async function clearCopyPassword(){
    let msg = document.getElementById("confirmMsg");
    msg.style.display="none";
}