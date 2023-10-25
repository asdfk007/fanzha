function checkAnswers() {
    var answer = document.querySelector('input[name="q1"]:checked').value;
    var resultDiv = document.querySelector('.result');
    if (answer === "1") {
        resultDiv.innerHTML = "正确！你对电信诈骗有基本的了解。";
    } else {
        resultDiv.innerHTML = "错误。请再学习并了解更多关于电信诈骗的信息。";
    }
    resultDiv.style.display = "block";
}
