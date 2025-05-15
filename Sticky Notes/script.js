let key=0;
let arr=[];

function addNote(){
    let note = document.getElementById('notet');
    if(arr) arr.push(note.value);
    else{
        arr=Array(0);
        arr.push(note.value);
    }
    note.value="";
    note.autofocus=true;
    updateNote();
}


function updateNote(){
    const notes=document.getElementById('notes');
    notes.innerHTML="";
    for(let i in arr){
        let div=document.createElement('div');
        let p= document.createElement('p');
        p.style.paddingLeft = "10px";
        let btn= document.createElement('button');
        btn.innerHTML = "<span>&times;</span>";
        btn.id = String(i);
        btn.addEventListener('click', (event)=>{
            let idx = Number(event.target.id);
            let brr = [...arr.slice(0,idx),...arr.slice(idx+1)];
            arr=[...brr];
            updateNote();
        });
        btn.classList.add('btn');
        p.innerText = arr[i];
        div.style.backgroundColor = (i%2==0)? "#d1e1ff":"#fefffe";
        div.append(p,btn);
        notes.append(div);
    }
}