const quiz = [
    {
        question: 'だってばよ',
        answers: [
            'ナルト',
            'マダラ',
            'サスケ',
            'カカシ'
        ],
        correct: 'ナルト'
    },{
        question: '...うん',
        answers: [
            'デイダラ',
            'マダラ',
            'サスケ',
            'カカシ'
        ],
        correct: 'デイダラ'
    },{
        question: 'めんどくせえ',
        answers: [
            'ナルト',
            'シカマル',
            'サスケ',
            'カカシ'
        ],
        correct: 'シカマル'
    }
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length

//クイズの問題文と選択肢を定義
const setupQuiz = () =>{
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    };
};
setupQuiz();

//ボタンの正誤判定
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解');
        score++;
    } else{
        window.alert('不正解');
    };

    quizIndex++;
    if(quizIndex < quizLength){
        setupQuiz();
    }else{
        window.alert('終了！あなたの正解数は' + score + 'です')
    };
};

//ボタンクリック時の正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click', (e) =>{
        clickHandler(e);
    });
    handlerIndex++;
}
