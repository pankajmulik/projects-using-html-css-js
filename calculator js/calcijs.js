function display(value){
    document.getElementById('textarea').value+=value //the it is text area property, value+=value gets and sets value in display
    console.log(value)
}
function calculate(){
    let value =document.getElementById('textarea').value
    let answer = eval(value)
    console.log(answer)
    document.getElementById('textarea').value=answer
}
function clr(){
    document.getElementById('textarea').value=''
}