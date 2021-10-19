const form = document.getElementById('quiz');

const questions = [
  {
    title: 'Capital of Ukraine?',
    name: 'Ukraine',
    options: [
      'Lviv',
      'Dnipro',
      'Kyiv',
      'Kharkiv'
    ],
    correctAnswer: 'Kyiv'
  },
  {
    title: 'Capital of Moldova?',
    name: 'Moldova',
    options: [
      'Otaci',
      'Chisinau',
      'Balti',
      'Drochia'
    ],
    correctAnswer: 'Chisinau'
  },
  {
    title: 'Capital of Poland?',
    name: 'Poland',
    options: [
      'Krakow',
      'Gdansk',
      'Wroclav',
      'Warszawa'
    ],
    correctAnswer: 'Warszawa'
  }
]

// Avoid unexpected comma using map() with join method
html = questions.map(currentQuestion => (
  questionComponent(currentQuestion)
)).join("")
document.getElementById('question').innerHTML = html

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let data = {}
  let formData = new FormData(form);
  for (const entry of formData) {
    data[entry[0]] = entry[1]
  };

  resultComponent(data);
  document.querySelector('.result').innerHTML = showScore(data);
  document.querySelector('.correct-answer').innerHTML = correctAnswer(data);
});

// generates result
function resultComponent(data) {
  let content = ''

  for (const [key, value] of Object.entries(data)) {
    content += `<li>${key}: ${value}</li>`
  }

  return `<ul>${content}</ul>`
}

// check the result and print score
function showScore(data){
  let correctNum = 0;
  let totalNum = questions.length;
  let i = 0;
  
  for (const [key, value] of Object.entries(data)) {
    if( value === questions[i].correctAnswer ){
      correctNum++;
    }
    i++;
  } 
  return `Final result: ${correctNum} / ${totalNum}`;
}

// print wrong answers alongside correct options
function correctAnswer(data){
  let correctResult = ''
  let i = 0;
  for (const [key, value] of Object.entries(data)) {
    if( value !== questions[i].correctAnswer ){
      correctResult += `
        <li class="answer">
        ${questions[i].title} 
        </li>
        <li><span class="wrong"><s>${value}</s></span>
        <span class="correct">${questions[i].correctAnswer}</span> 
        </li>`;
    }
    i++;
  }
  return `<ul>${correctResult}</ul>`
}

// show question and options
function questionComponent(currentQuestion) {
  
  let options = currentQuestion.options.map(opt => (
    `<li class="option">
      <input type="radio" id=${opt} name=${currentQuestion.name} value=${opt} required>
      <label for=${opt}>${opt}</label>
    </li>`
  ))
// Avoid unexpected comma using map() with join method
  return `
    <h3 class="title">${currentQuestion.title}</h3>
    <ul class="options">
        ${options.join("")}
    </ul>
    `
}