let inputElems= document.getElementsByTagName('input');
for(let inputElem of inputElems){
    const handleClickedInput = () => {
        inputElem.style.border = "";
        inputElem.style.border = "2px solid #ff5722";
    };
    const handleBlurInput = () => {
        inputElem.style.border = "";
    };
    inputElem.addEventListener('input', handleClickedInput);
    inputElem.addEventListener('blur', handleBlurInput);
}

const submitBtn = document.getElementById("submit-btn");
const dialog = document.getElementById("alert-box");

submitBtn.addEventListener("click", function (event){
    let inputs = document.getElementsByTagName('input');
    let check = true;
    for(let input of inputs){
        if(!input.value) check = false;
    }
    if(!check){
        event.preventDefault();
        dialog.show();
    }
});
function closeDialog(){
    dialog.close();
}

const form = document.getElementById("form1");
form.addEventListener("submit", function (event){
    event.preventDefault();
    form.style.display = "none";

    document.getElementById('displayEventName').innerText = document.getElementById('eventName').value;
    document.getElementById('displayEventDate').innerText = document.getElementById('eventDate').value;
    document.getElementById('displayStartTime').innerText = document.getElementById('startTime').value;
    document.getElementById('displayEndTime').innerText = document.getElementById('endTime').value;
    document.getElementById('displayLocation').innerText = document.getElementById('location').value;
    document.getElementById('displayDescription').innerText = document.getElementById('description').value;
});