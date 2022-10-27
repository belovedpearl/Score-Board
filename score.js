let newGame = document.querySelector('.ng');
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2")
let score = 0;

function increase1() {
  score += 1;
  score1.textContent = score;
}

function increase2(){
  score += 2;
  score1.textContent = score;
}

function increase3(){
  score += 3;
  score1.textContent = score;
}

let scoreb = 0
function increase4() {
  scoreb += 1;
  score2.textContent = scoreb;
}

function increase5() {
  scoreb += 2;
  score2.textContent = scoreb;
}

function increase6() {
  scoreb += 3;
  score2.textContent = scoreb;
}

newGame.addEventListener('click', function(){
  let score = 0;
  let scoreb = 0;
  score1.textContent = score;
  score2.textContent = scoreb;
})