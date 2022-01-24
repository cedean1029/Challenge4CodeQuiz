var timer = 100;
var score = 0;
var i = 0;
var startButtonEl = document.getElementById('start');
var timerEl = document.getElementById('timer');
var answerEl = document.getElementsByTagName('li');

var questionArray = [
    {
        question: "What is my favorite color?",
        answers: ["blue", "purple", "green", "black"],
        answerTrue: "green"
    },
    {
        question: "What is my middle name?",
        answers: ["Mary", "Elizabeth", "Joy", "Debbie"],
        answerTrue: "Elizabeth"
    }
]

function timerFunction () {
    timerEl.innerHTML = `Time Remaing: ${timer}`;
    var interval = setInterval(()=> {
    timer--
    timerEl.innerHTML = `Time Remaing: ${timer}`;
    }, 1000)
};



function startQuiz (){
    console.log("quiz started");
    timerFunction();
    document.getElementById('intro').setAttribute('hidden','');
    showQuestions();
};

function showQuestions (){
    var questionsTitle = document.getElementById('questions-title');
    var questionAnswer = document.getElementById('question-answer-container'); 
    questionsTitle.innerHTML = questionArray[i].question;
    for (var j = 0; j < questionArray[i].answers.length; j++){
        var liEl = document.createElement("li");
        liEl.innerHTML = questionArray[i].answers[j];
        questionAnswer.appendChild(liEl);
        liEl.setAttribute("onclick","nextQuestion()");
    } 
};

function nextQuestion() {
    // if ()
    var liEl = document.querySelector("#li");
    liEl.remove();
    i++
    console.log(i);
    showQuestions();
}

// Start the quiz
startButtonEl.addEventListener('click', startQuiz);