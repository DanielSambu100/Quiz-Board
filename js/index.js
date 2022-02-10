let marks = 0;
let correctAnswer = {
    question1: "A",
    question2: "B",
    question3: "D",
    question4: "C",
    question5: "B"
};

let userForm = document.querySelector("#quizboard");
userForm.addEventListener('submit', (e)=> {
    e.preventDefault()
    let userData = new FormData(userForm);
    dataLogic(userData);
    

})

dataLogic = (userData) => {
    let answer1 = userData.get('question1');
    let answer2 = userData.get('question2');
    let answer3 = userData.get('question3');
    let answer4 = userData.get('question4');
    let answer5 = userData.get('question5');

    if (answer1 === correctAnswer['question1']){
        marks = marks += 20;
    }
    if ( answer2 === correctAnswer['question2']){
        marks +=20;
    }
    if ( answer3 === correctAnswer['question3']){
        marks +=20;
    }
    if ( answer4 === correctAnswer['question4']){
        marks +=20;
    }
    if ( answer5 === correctAnswer['question5']){
        marks +=20;
    }

    if(marks > 70){
        var remarks = 'You score is ' + marks + " % : Excellent!"
    }
    else if(marks == 60){
        var remarks = 'You score is ' + marks + " % : Pass."
    }
    else{
        var remarks = 'You score is ' + marks + " % : Sorry, you lost narrowly. Please try again."
    }

    //output display set to a class on the document

    let userPerformance = document.querySelector('#feedback');
    userPerformance.textContent = remarks;
    userForm.style.display = 'none';


}
