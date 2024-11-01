/* eslint-disable no-undef */

const questions = [
    {
        question: 'Thủ đô của Việt Nam là gì?',
        answers: ['Hà Nội', 'TP.HCM', 'Đà Nẵng'],
    },
    {
        question: 'Năm nào Việt Nam giành độc lập?',
        answers: ['1945', '1975', '1986'],
    },
    {
        question: 'Tác giả của bài thơ “Truyện Kiều” là ai?',
        answers: ['Nguyễn Du', 'Nguyễn Trãi', 'Hồ Xuân Hương'],
    },
    {
        question: 'Sông nào dài nhất Việt Nam?',
        answers: ['Sông Mekong', 'Sông Hồng', 'Sông Đồng Nai'],
    },
    {
        question: 'Quốc kỳ của Việt Nam có bao nhiêu ngôi sao?',
        answers: ['1', '5', '3'],
    },
];

let currentQuestionIndex = 0;

function showQuestion() {
    // eslint-disable-next-line no-undef
    const questionContainer = document.getElementById('questionContainer');
    const question = questions[currentQuestionIndex];

    // Hiển thị câu hỏi
    questionContainer.innerHTML = `<p>${question.question}</p>`;

    // Hiển thị các câu trả lời
    question.answers.forEach((answer) => {
        questionContainer.innerHTML += `<button class="answer-btn" onclick="nextQuestion()">${answer}</button>`;
    });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        // eslint-disable-next-line no-undef
        alert('Mời bạn đăng nhập để tiếp tục');
        // Có thể reset lại trắc nghiệm ở đây
        currentQuestionIndex = 0;
        window.location.href = '/';
    }
}

// Bắt đầu trắc nghiệm
showQuestion();
