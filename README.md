Simple Quiz App

1. render questions with options from array
2. add correct option to questions data.
3. on submit, check the result and print score
  4/5 correct.
    where 4 number of correct answers
    5 is total number of questions
4. in separate div print wrong answers alongside correct options.
  questions you got wrong:
    question: 'who old are you?', your answer: '12', correct answer: 24
    question: 'who are you?', your answer: '', correct answer: 24

To add new questions just add new elements to array questions by the following way:

  questions = [
    {
      title: 'your question?',
      name: 'name',
      options: [
        'opt 1',
        'opt 2'
      ],
      correctAnswer: 'opt X'
    },
    ...
  ]

Themes to cover:
- .each
- .map
- object entries
- interpolation
- onSubmit
- innerHTML

    
