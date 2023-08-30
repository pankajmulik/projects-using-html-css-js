let quizdata = [
    {
        question: 'What should come in place of the question mark (?) in the following question 24% of 420 × 50% of 74 = ? ',

        a: '3729.6',

        b: '101.17',

        c: '68.432',

        d: 'None of these',

        correct: 'a',


    },

    {
        question: 'A semi- circular sheet of metal of diameter 28 cm.is bent into an open conical cup.The depth of the cup is approximately',


        a: '15 cm.',

        b: '14 cm.',

        c: '11 cm.',

        d: '12 cm.',

        correct: 'd',
    }
]

let quiz = document.getElementById('quiz');
let answer = document.getElementById('.answer');
let question = document.getElementById('question');
let option_a = document.getElementById('value_b');
let option_b = document.getElementById('value_a');
let option_c = document.getElementById('value_c');
let option_d = document.getElementById('value_d');
let submitbtn = document.getElementById('submit');

let currentQuestion = 0;
let quizscore = 0;
loadQuiz();

function loadQuiz() {
    deselect();
    question.innerHTML = quizdata[currentQuestion].question;
    option_a.innerText=quizdata[currentQuestion].a;
    option_b.innerText=quizdata[currentQuestion].b;
    option_c.innerText=quizdata[currentQuestion].c;
    option_d.innerText=quizdata[currentQuestion].d;
}
function deselect(){
    answer.forEach(answer=>answer.checked=false)
}

