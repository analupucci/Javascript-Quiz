const questions = [
    {
      question: "What is the difference between let and var in JavaScript?",
      answers: {
        a: "let is block-scoped while var is function-scoped",
        b: "let is hoisted while var is not",
        c: "let is used for declaring constants while var is used for declaring variables"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the function of the 'this' keyword in JavaScript?",
      answers: {
        a: "It refers to the object that is calling the function",
        b: "It refers to the parent object of the function",
        c: "It refers to the global object"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the difference between == and === in JavaScript?",
      answers: {
        a: "== compares values only, while === compares both values and types",
        b: "== is used for comparing numbers, while === is used for comparing strings",
        c: "== is a new feature in ECMAScript 6, while === has always been available in JavaScript"
      },
      correctAnswer: "a"
    }
  ];

  let currentQuestion = 0;
  let score = 0;
  let timeLeft = 60;
  let timerId;

  const startButton = document.getElementById("start");
  startButton.addEventListener("click", startQuiz);

  function startQuiz() {
    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("questions").classList.remove("hide");
    timerId = setInterval(countdown, 1000);
    showQuestion();
  }

  function countdown() {
    if (timeLeft === 0) {
      clearInterval(timerId);
      endQuiz();
    } else {
      timeLeft--;
      document.getElementById("time").textContent = timeLeft;
    }
  }
  