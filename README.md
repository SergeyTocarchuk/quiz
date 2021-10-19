quiz app


1 render questions with options from array
2 add correct option to questions data..
3 on submit, check the result and print score
  4/5 correct.
    where 4 number of correct answers
    5 is total number of questions
4. in separate div print wrong answers alongside correct options.
  questions you got wrong:
    question: 'who old are you?', your answer: '12', correct answer: 24
    question: 'who are you?', your answer: '', correct answer: 24

hint:

  questions = [
    {
      title: 'what is your name?',
      name: 'name',
      options: [
        'serghei',
        'andrei'
      ]
    },
    {
      title: 'what is your age?',
      name: 'age',
      options: [
        'serghei',
        '33'
      ]
    }
  ]


let options = q.options.map(opt => (
  `
    <li class="option">
      <input type="radio" id=${opt} name=${q.name} value=${opt} required>
      <label for=${opt}>${opt}</label>
    </li>
  `
))

.each
.map
object entries
interpolation
onSubmit
innerHTML

    
