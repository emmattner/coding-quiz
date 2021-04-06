//VARIBLES
var secondsLeft = 60;
var leaderboard = [];
var savedNames = [];
var timerInterval;
const $timerEl = document.querySelector('#countdown-timer');
const $startButton = document.querySelector ('#start-btn'); 
const $nextButton = document.querySelector ('#next-btn');
    // Const for DisplayQuiz function
const $setctionTitle = document.querySelector ('#section-title');
const $sectionParagraph = document.querySelector ('#section-paragraph');
const $startQuizBtn = document.querySelector ('#startQuizBtn');
const $quizSection = document.querySelector ('#quiz-section');
    // Const for LaunchQuestions function
let questIndex = 0;
const $endQuizSection = document.querySelector ('#end-quiz-section');
const $quizQuestion = document.querySelector ('#quiz-question');
const $dataValueA = document.querySelector ('#chA');
const $dataValueB = document.querySelector ('#chB');
const $dataValueC = document.querySelector ('#chC');

    // LISTEN TO USERS CHOICE
const $userChoices = document.querySelector ('#user-choices');
    // SAVE SCORE
const $saveScoreBtn = document.querySelector ('#save-score-btn');
const $recordInitials = document.querySelector ('#record-initials');
var $saveBtn = 0;
// TIMER TO START COUNTING DOWN
function startTimer(){
    timerInterval = setInterval(function(){
        secondsLeft = secondsLeft - .1;
        $timerEl.textContent = secondsLeft.toFixed(2) + ' seconds left';

        if(secondsLeft === 0 | questIndex === questions.length){
            clearInterval(timerInterval);
            //sendMessage();
            }
    }, 100);}

// FUNCTION TO REMOVE HEADING AND DISPLAY QUIZ QUESTIONS
function displayQuiz(){
    $setctionTitle.classList.add('hide');
    $sectionParagraph.classList.add('hide');
    $startQuizBtn.classList.add('hide');
    $quizSection.style.display = "block"; 
}

// FUNCTION TO DISPLAY END OF QUIZ QUESTIONS
function launchQuestions(){
    if (questIndex === questions.length | secondsLeft === 0){  //<0
        $endQuizSection.classList.remove('hide');
        $quizSection.classList.add('hide');
        var score = secondsLeft;
        alert('You scored ' + score);
        leaderboard.push(score); 
    }}
    

var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
// this is a multidimensional array with 4 inner array elements with 5 elements inside them
var questions = [
  {
      question: "The condition in an if / else statment is enclosed within _____",
      a: "Quotes",
      b: "Parentheses",
      c: "Curly Brackets",
      answer: "B"
    },
  {
      question: "String values must be enclosed within _____ when being assigned to varibles.",
      a: "Sqaure Brackets",
      b: "Commas",
      c: "Quotes",
      answer: "C"
    },
  {
      question: "Commonly used data types DO NOT include:",
      a: "Alerts",
      b: "Booleans",
      c: "Strings",
      answer: "A"
    },
  {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      a: "Terminal/Bash",
      b: "For loop",
      c: "Console.log",
      answer: "C"
    }
  ];
// this get function is short for the getElementById function
function get(x){
  return document.getElementById(x);
}
// this function renders a question for display on the page
function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = `<h2>You got ${correct} of ${questions.length} questions correct</h2>
                        <input id="highscoreName"></input>
                        <button class="button" id="highScoreButton"></button>`;
    get("test_status").innerHTML = "Test completed"
    clearInterval(timerInterval);
    score = secondsLeft;
    $timerEl.textContent = 0;
    $saveBtn = document.querySelector('#highScoreButton')
    $saveBtn.addEventListener('click', function(){
        var playerName = document.querySelector("#highscoreName").value;
        localStorage.setItem(playerName, score.toFixed(0));
    })


    // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;

  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  // display the question
  test.innerHTML = "<h3>"+question+"</h3>";
  // display the answer options
  // the += appends to the data we started on the line above
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if(choice == questions[pos].answer){
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();
}
// Add event listener to call renderQuestion on page load event
window.addEventListener("load", renderQuestion);

// Function to display correct answer selection Yes or No alert
function selectAnswer(){
    if (event.target.textContent === quiz[questIndex].correctAnswer){
        alert('Woo!\n That is correct.');
    } else {
        alert('Oopsie daisy, wrong answer.');
        secondsLeft = secondsLeft - 05;
    }
}

// Event Listener function to start quiz timer and show questions with Start button
$startQuizBtn.addEventListener('click', function(){
    displayQuiz();
    startTimer();
    launchQuestions();
});