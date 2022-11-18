//quiz Q/A
const questions = [
  {
    question: "what is the full form of HTML?",
    a: "HyperText Markup Language",
    b: "HyperTransfer Markup Language",
    c: "HyperTransfer Markups Language",
    d: "HyperTransfer Protocol Language",
    ans: "ans1",
  },
  {
    question: "what is the full form of CSS?",
    a: "HyperText Markup Language",
    b: "HyperTransfer Markup Language",
    c: "Cascading Style Sheet",
    d: "HyperTransfer Protocol Language",
    ans: "ans3",
  },
  {
    question: "what is the full form of JS?",
    a: "HyperText Markup Language",
    b: "JavaScript",
    c: "Cascading Style Sheet",
    d: "HyperTransfer Protocol Language",
    ans: "ans2",
  }
];

// grabbing the elements using DOM methods
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  // console.log(questions[0].question);

  const questionList = questions[questionCount];
  question.innerText = questionList.question;

  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;
};

loadQuestion();

const getCheckAnswer = () => {
  let answer;

  answers.forEach((curAnsElem) => {
    if(curAnsElem.checked){
        answer = curAnsElem.id;
 }
});
return answer;
};

const deselectAll = () =>{
  answers.forEach((curAnsElem) => {
    curAnsElem.checked = false;
  });
};

submit.addEventListener("click", () => {
  const checkedAns = getCheckAnswer();
  //console.log(checkedAns);

  if(checkedAns === questions[questionCount].ans){
    score++;
  }

  questionCount++;

  deselectAll();

  if(questionCount < questions.length){
    loadQuestion();
  }else{
    showScore.innerHTML = `
      <h3> you Scored ${score}/${ questions.length}  &#9996;</h3>
      <button class="btn" onclick="location.reload()">Play Again</button>
    `;
    showScore.classList.remove('scoreArea');
  }

});


// let a=[13,30,50,100,67];

// // for(let i=0;i<a.length;i++){
// //   if(a[i]==100){
// //     console.log('success')
// //     //break;
// //   }
 
// // }

// // console.log('failed')
  
// a.forEach(index)