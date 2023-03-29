const squares=document.querySelectorAll('.square');
const timeLeft=document.getElementById('timeLeft');
const score=document.getElementById('score');
const mole=document.querySelector('.mole');

let result=0;
let position;
let currTime=60;
let timerId=null;

function rSquare(){
    squares.forEach(square=>{
        square.classList.remove('mole');

    })

    let randomSquare= squares[Math.round(Math.random*9)];
    randomSquare.classList.add('mole');

    position=randomSquare.id;
}

squares.forEach(square=>{
    square.addEventListener('mousedown', ()=>{
        if(square.id == position){
            result++;
            score.textContent=result;
            position=null;
        }
    })
})

function moveMole() {
    timerId=setInterval(rSquare,500);
}

moveMole();

function countDown(){
    currTime--;
    timeLeft.textContent=currTime;

    if(currTime==0){
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('GAME OVER! Your final score is '+result);
    }

}

let countDownTimerId=setInterval(countDown, 1000);


