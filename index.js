// Your code here
 function runQuiz() {
    
    var questionsArr = [
        {
        question: 'JavaScript is the best language',
        answer: true
        }

        {
        question: 'Javascript is the same as HTML',
        answer: false
        }

        {
        question: 'CSS is primary used for styling in web development',
        answer: true
        }

        {
        question: 'JavaScript was invented in 1995',
        answer: true
        }

        {
        question: 'JavaScript was invented by Bill Gates',
        answer: false
        }
    ]

    var correctAnswers = 0;
    for(var i = 0; i < questionsArr.length; i++) {
        var userAnswer = confirm(questionsArr[i]);
        if(userAnswer === questionsArr[i].question)
    }

    var percentage = Math.round((correctAnswers / questionsArr.length) * 100);

    alert('Your total score is ' + percentage + '%')

}