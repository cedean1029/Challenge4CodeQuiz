var timer = 100;
var score = 0;
var i = 0;
var startButtonEl = document.getElementById('start');
var timerEl = document.getElementById('timer');
var answerEl = document.getElementsByTagName('li');

var questionArray = [
    {
        question: "What does HTML stand for?",
        answers: ["Hypertext Markup Language", "Hottext Makeup Language", "Hypertext Make Language", "Hypertech Missing Language"],
        answerTrue: "Hypertext Markup Language"
    },
    {
        question: "When was Javascript created?",
        answers: ["1997", "1991", "1995", "2002"],
        answerTrue: "1995"
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
    var ulEl = document.createElement('ul');
    ulEl.setAttribute('id', 'answerContainer');
    questionAnswer.appendChild(ulEl);
    for (var j = 0; j < questionArray[i].answers.length; j++){
        var liEl = document.createElement("li");
        liEl.innerHTML = questionArray[i].answers[j];
        ulEl.appendChild(liEl);
        liEl.setAttribute("onclick","nextQuestion(event)");
    } 
};

function nextQuestion(e) {
    console.log(e.target);
    console.log(e.target.textContent);
    var answersEl = document.getElementById("answerContainer");
    answersEl.remove();
    if (e.target.textContent !== questionArray[i].answerTrue) {
        timer -= 5;  
    };
    i++;
    if (i < questionArray.length) {
        showQuestions();
    } else {
        var questionContainer = document.getElementById("questions-container");
        questionContainer.remove();
    };
};

function submitScore() {
    var initials = document.getElementById("initials").value;
    var score = timer;
    localStorage.setItem(initials, score);
    console.log(score);
    showScores();
};

function showScores() {
    var table = document.getElementById("highscores");
    var listScores = Object.entries(localStorage);
    console.log(listScores);
};

// Start the quiz
startButtonEl.addEventListener('click', startQuiz);