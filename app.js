const question = 'だってばよ';
const answers = [
    'ナルト',
    'マダラ',
    'サスケ',
    'カカシ'
];
const correct = 'ナルト';


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length

//クイズの問題文と選択肢を定義
const setupQuiz = () =>{
    document.getElementById('js-question').textContent = question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = answers[buttonIndex];
        buttonIndex++;
    };
};
setupQuiz();

//ボタンの正誤判定
const clickHandler = (e) => {
    if(correct === e.target.textContent){
        window.alert('正解');
    } else{
        window.alert('不正解');
    }
};

//ボタンクリック時の正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click', (e) =>{
        clickHandler(e);
    });
    handlerIndex++;
}
