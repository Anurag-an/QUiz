function Quiz(question) {
    this.score = 0;
    this.question = question;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.question[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score=this.score+3;
    }
    else{
        this.score=this.score-1;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.question.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Questions " + currentQuestionNumber + " of " + quiz.question.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Thank you For Participating in quiz </h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
var question = [
    new Question("1: Washing soda is the common name for", ["Sodium carbonate", "Calcium bicarbonate","Sodium bicarbonate", "Calcium carbonate"], "Sodium carbonate"),
    new Question("2: The Vedic deity Indra is the God of about..", ["Wind", "Eternity", "Rain and Thunder", "Fire"], "Rain and Thunder"),
    new Question("3: Which of the following is a non metal that remains liquid at room temperature?", ["Phosphorous", "Bromine", "Chlorine", "Helium"], "Bromine"),
    new Question("4: To which professions earlier leaders who struggled for freedom of India mainly belonged?", ["Lawyers", "Teachers", "Journalists", "All of the above"], "All of the above"),
    new Question("5: The minimum age to qualify for election to the Lok Sabha is", ["25 years", "21 years", "35 years", "18 years"], "25 years"),
    new Question("6: Most modern TV's draw power even if turned off. The circuit the power is used in does what function?", ["Sound", "Remote control", "Color balance", "High voltage"], "Remote control"),
    new Question("7: The purpose of choke in tube light is ?", ["To decrease the current", "To increase the current", "To decrease the voltage momentarily", "To increase the voltage momentarily"], "To increase the voltage momentarily"),
    new Question("8: Which of the following place is famous for its gigantic rock-cut statue of Buddha?", ["Bamiyan", "Borobudur", "Anuradhapuram", "Angor Vat"], "Bamiyan"),
    new Question("9: To evolve a peaceful settlement of the conflict between India and China, which of the following non-aligned Afro-Asian nations participated in a conference held in December 1962?", ["Burma (now Myanmar), Combodia, Indonesia and UAR", "Burma, Sri Lanka, Combodia and Indonesia", "Burma, Indonesia, Ghana and Sri Lanka", "All of the above"], "All of the above"),
    new Question("10: What is the capital of Andhra Pradesh?", ["Hyderabad", "Amravati", "Tirupati", "Vijayawada"], "Amravati")
];
 
var quiz = new Quiz(question);
 
populate();