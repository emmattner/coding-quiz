var pos = 0;
var correct = 0;
var test, test_status, question, choice, choices, chA, chB, chC, chD;

// this is a multidimensional array with 4 inner array elements with 5 elements inside them
var questions = [
    {
        question: "The condition in an if / else statment is enclosed within _____.",
        answers:{
        a: "Quotes",
        b: "Curly Brackets",
        c: "Parentheses",
        d: "Square Brackets",
        },
        correctAnswer: "C"
      },
    {
        question: "String values must be enclosed within _____ when being assigned to varibles.",
        answers: {
        a: "Commas",
        b: "Parentheses",
        c: "Square Brackets",
        d: "Quotes",
        answer: "D"
        },
        correctAnswer: ""
      },
    {
        question: "x:",
        a: "Strings",
        b: "Alerts",
        c: "Booleans",
        d: "Numbers",
        answer: "B"
      },
    {
        question: "What is 8 x 12?",
        a: "88",
        b: "112",
        c: "96",
        answer: "C"
      }
    ];

    function get(x){
        return document.getElementById(x);
      }
// this function renders a question for display on the page
function renderQuestion(){
    test = get("test");
    if(pos >= questions.length){
      test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
      get("test_status").innerHTML = "Test completed";
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

// var button = 
// document.createElement("button");
// button.innerHTML = "Start Quiz";

// var body =
// document.getElementsByTagName("body")[0];
// body.appendChild(button);

// button.addEventListener ("click", function()
// {
//     alert("did somdtehing");

// });

// var startQuizBtn = 

// function QuizToStart(event){



// }


// startQuizBtn.addEventListener("click", QuizToStart)

// function startQuiz() {
//     document.getElementById("demo").innerHTML = "String values must be enclosed within _____ when being assigned to varibles.";


// const myQuestions = [
//     {
//         question: "The condition in an if / else statment is enclosed within _____.",
//         Choices:["Quotes","Curly Brackets","Parentheses", "Square Brackets"],
//         correctAnswers: "Parentheses"
//     },
//     {
//         question: "Banana Colour",
//         Choices:["Red","Green","Bkue", "Yelloe"],
//         correctAnswers: "Yellow"
//     },
//     {
//         question: "Banana Shape",
//         Choices:["Sqaure","Round","Obtuse", "Long"],
//         correctAnswers: "Long"
//     },
// ]


// function startQuiz(event){
//     event.preventDefault();
//     var myTimer = setInterval (function(){
//         time = time -0.10
//     },10);
// }

// question.array.forEach(element => {
    
// });
// var timerEl = documentQuerySelector("#timer")