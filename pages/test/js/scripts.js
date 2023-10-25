// Define the answers and explanations for each question
var answers = {
    q1: {
        correct: "b",
        explanation: "不应该在电话中透露任何个人或银行信息。"
    },
	q2: {
	    correct: "b",
	    explanation: "你不应该将你的银行详细信息发送给不明来源的人，这可能是一个诈骗。"
	},
	q3: {
	    correct: "b",
	    explanation: "所有自称银行账户有问题要求把钱转到安全账户的都是诈骗"
	},
	
    // ... (Add answers for questions 3-10 in a similar format) ...
};

function showNextQuestion(questionNumber) {
    // Check if an option is selected
    var selectedOption = document.querySelector(`input[name="q${questionNumber - 1}"]:checked`);
    if (!selectedOption) {
        alert('请先回答这个问题！');
        return;
    }
    
    // Hide the current question
    document.getElementById(`question${questionNumber - 1}`).style.display = "none";

    // Check if there's a next question
    if (document.getElementById(`question${questionNumber}`)) {
        // Show the next question
        document.getElementById(`question${questionNumber}`).style.display = "block";
    } else {
        // Otherwise, calculate the score
        calculateScore();
    }
}

function showPreviousQuestion(questionNumber) {
    if (questionNumber >= 1) {
        // Hide the current question
        document.getElementById(`question${questionNumber + 1}`).style.display = "none";

        // Show the previous question
        document.getElementById(`question${questionNumber}`).style.display = "block";
    }
}

function calculateScore() {
    var score = 0;
    var output = "<p>答案解析:</p><ol>";

    // Iterate over each answer
    for (var question in answers) {
        var userAnswer = document.querySelector(`input[name="${question}"]:checked`).value;
        if (userAnswer === answers[question].correct) {
            score++;
        }
        output += `<li>正确答案: ${answers[question].correct}. 解析: ${answers[question].explanation}</li>`;
    }

    output += `</ol><p>您的得分是: ${score} / ${Object.keys(answers).length}</p>`;

    // Show the result
    document.getElementById("result").innerHTML = output;
    document.getElementById("result").style.display = "block";
}
