let quizdata=[
    {
question : 'which framework is related to JS?',
a:'.net',
b:'flask',
c:'react',
d:'django',
correct: 'c'
},
{
    question : 'which is not a programming language?',
a:'html',
b:'java',
c:'python',
d:'js',
correct: 'a'
},
{
    question : 'which is not a framework?',
a:'react',
b:'javascript',
c:'angular',
d:'django',
correct: 'b'
},
{
    question : 'CSS stsnds for?',
a:'.Cascading style  state',
b:'cascading style sheet',
c:'cascading style of sheet',
d:'django',
correct: 'b'
}
]
let quiz=document.getElementById('quiz')
let answer=document.querySelectorAll('.answer')
let question=document.getElementById('question')
let option_a=document.getElementById('value_a')
let option_b=document.getElementById('value_b')
let option_c=document.getElementById('value_c')
let option_d=document.getElementById('value_d')
let submitbtn= document.getElementById('submit')

let currentQuestion =0
let quizscore=0
loadQuiz()

function loadQuiz(){
    deselect()
    question.innerHTML=quizdata[currentQuestion].question
option_a.innerText=quizdata[currentQuestion].a
option_b.innerText=quizdata[currentQuestion].b
option_c.innerText=quizdata[currentQuestion].c
option_d.innerText=quizdata[currentQuestion].d
}
function deselect(){
    answer.forEach(answer=>answer.checked=false)
}
submitbtn.addEventListener('click' ,()=>{
    let selectedoption;
    answer.forEach(answer=>{
        if(answer.checked){
            selectedoption=answer.id
        }
    })
    if(selectedoption==quizdata[currentQuestion].correct)
    {
        quizscore=quizscore+1
    }
    currentQuestion=currentQuestion+1;
   if(currentQuestion==quizdata.length){
document.getElementById('quedivs').innerHTML='<h1>you have answered '+quizscore+' out of '+quizdata.length+'</h1>'
   }else{
    loadQuiz();
   }
    
})