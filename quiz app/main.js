const quizData = [{
        question: 'How old is Marzyah',
        a: '12',
        b: '15',
        c: '25',
        d: '37',
        correct: 'c',
    },
    {
        question: 'what is most used programming language in 2020?',
        a: 'Java',
        b: 'C',
        c: 'Java Script',
        d: 'Python',
        correct: 'c',
    }, {
        question: 'who is the author of Animal Farm?',
        a: 'Albert',
        b: 'George',
        c: 'Zan',
        d: 'Tolstoy',
        correct: 'b',
    }, {
        question: 'What dose HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading style sheet',
        c: "Helicopters Terminal Motorboats lamborgini",
        d: 'Application programming interface',
        correct: 'a',
    }, {
        question: 'what year was JS launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of above',
        correct: 'b',
    }
]

const quizEl = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById('question')
const a_textEl = document.getElementById('a_text');
const b_textEl = document.getElementById('b_text');
const c_textEl = document.getElementById('c_text');
const d_textEl = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let secure = 0;
loadQuestion();

function loadQuestion() {
    deselectedAnswer();
    const currentQuizDate = quizData[currentQuiz];
    questionEl.innerText = currentQuizDate.question;
    a_textEl.innerText = currentQuizDate.a;
    b_textEl.innerText = currentQuizDate.b;
    c_textEl.innerText = currentQuizDate.c;
    d_textEl.innerText = currentQuizDate.d;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    });
    return answer;
}

function deselectedAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {

    const answer = getSelected();
    console.log(answer)

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            secure++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {

            loadQuestion();


        } else {
            //TODOa: show result
            quizEl.innerHTML = `<h2>You answered correctly at ${secure}/${quizData.length} questions</h2>`
        }
    }


})