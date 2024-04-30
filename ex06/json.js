// Fetch API를 사용해 aaa.json 파일을 읽어옵니다.
fetch("https://jwonchi.github.io/kopoclass/JSON/quiz.json")
    .then((response) => {
        // JSON 형태로 응답을 변환합니다.
        return response.json();
    })
    .then((data) => {
        if (data.quizzes.length > 0) {
            makeQuiz(data.quizzes);
        }
        console.debug(`data.quizzes.length : ${data.quizzes.length}`);
    })
    .catch((error) => {
        console.error("파일을 읽는 중 오류 발생:", error);
    });

function makeQuiz(quizzes) {
    quizzes.forEach((element) => {
        var questions = element["question"];
        var options = element["options"];

        var answer = element["answer"];
        console.log(questions, options, answer);
        const bd = document.getElementById("bd");
        bd.innerHTML += `<h2">${questions}</h2>`;
        bd.innerHTML += `<ol id="${questions}">`;
        const quest = document.getElementById(`${questions}`);
        quest.innerHTML += `<li>${options["a"]}</li>`;
        quest.innerHTML += `<li>${options["b"]}</li>`;
        quest.innerHTML += `<li>${options["c"]}</li>`;
        quest.innerHTML += `<li>${options["d"]}</li>`;
    });
}
