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
    ]
  },
  {
    title: 'Capital of Moldova?',
    name: 'Moldova',
    options: [
      'Otaci',
      'Chisinau',
      'Balti',
      'Drochia'
    ]
  },
  {
    title: 'Capital of Poland?',
    name: 'Poland',
    options: [
      'Krakow',
      'Gdansk',
      'Wroclav',
      'Warszawa'
    ]
  }
]

html = questions.map(currentQuestion => (
  questionComponent(currentQuestion)
))
document.getElementById('question').innerHTML = html

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let data = {}
  let formData = new FormData(form);
  for (const entry of formData) {
    data[entry[0]] = entry[1]
  };

  html = resultComponent(data);
  document.getElementById('result').innerHTML = html;
});

// generates result
function resultComponent(data) {
  let content = ''

  for (const [key, value] of Object.entries(data)) {
    content += `<li>${key}: ${value}</li>`
  }

  return `<ul>${content}</ul>`
}

function questionComponent(currentQuestion) {
  
  let options = currentQuestion.options.map(opt => (
    `<li class="option">
      <input type="radio" id=${opt} name=${currentQuestion.name} value=${opt} required>
      <label for=${opt}>${opt}</label>
    </li>`
  ))

  return `
    <h3 class="title">${currentQuestion.title}</h3>
    <ul class="options">
        ${options}
    </ul>
    `
}