class Answer
{
    constructor(correct, text)
    {
        this.correct = correct;
        this.text = text;
    }
}

class Question
{
    constructor(text, answers)
    {
        this.text = text;
        this.answers = answers;
    }
}

var current  = 0;


var questions = [
    new Question('какой это цвет', [
        new Answer(false, "синий"),
        new Answer(true, "желтый"),
        new Answer(false, "зеленый")
    ]),
    new Question('sdfasdf это цвет', [
        new Answer(false, "asdfсиний"),
        new Answer(true, "желasdfтый"),
        new Answer(false, "зasdfеленый")
    ])
]

// correct = prompt("Введите ответ, варианты: "+answers.map((e) => e.text).join(", "));

function initializeButtons(answers)
{
    var variants = document.getElementById("variants");
    variants.innerHTML = "";
    answers.forEach((answer, index) => {
        var knopka = document.createElement("a");
        knopka.classList.add("btn");
        knopka.onclick = function () {check(index)};
        knopka.innerText = answer.text;
        variants.appendChild(knopka);
    });
}

initializeButtons(questions[current].answers);

function check(index)
{
    current ++;
    if (current >= questions.length)
    {
        document.getElementById("rectangle").innerText = "THE END";
        initializeButtons([]);

    }
    initializeButtons(questions[current].answers);
    if (answers[index].correct)
    {
        document.getElementById("rectangle").innerText = questions[current].text;
    }
    else
    {

        document.getElementById("rectangle").innerText = questions[current].text;
    }

}




