function addtolist(){
    let taskname=document.getElementById('taskname').value
let tododiv=document.getElementById('mytodo')

let newtodoitems=document.createElement('div')
let todoname=document.createElement('li')
todoname.innerHTML=taskname
let deletebtn=document.createElement('i')
deletebtn.classList.add('far')
deletebtn.classList.add('fa-trash-alt')
newtodoitems.appendChild(todoname)
newtodoitems.appendChild(deletebtn)
tododiv.appendChild(newtodoitems)
}

let tododiv=document.getElementById('mytodo')
tododiv.addEventListener('onclick',deleteitem)
function deleteitem(){
    
}