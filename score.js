let newGame = document.querySelector('.ng');
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2")
let score = 0;

function increase1() {
  score += 1;
  score1.textContent = score;
  highlight()
}

function increase2(){
  score += 2;
  score1.textContent = score;
  highlight()
}

function increase3(){
  score += 3;
  score1.textContent = score;
  highlight()
}

let scoreb = 0
function increase4() {
  scoreb += 1;
  score2.textContent = scoreb;
  highlight()
}

function increase5() {
  scoreb += 2;
  score2.textContent = scoreb;
  highlight()
}

function increase6() {
  scoreb += 3;
  score2.textContent = scoreb;
  highlight()
}

newGame.addEventListener('click', function(){
  let score = 0;
  let scoreb = 0;
  score1.textContent = score;
  score2.textContent = scoreb;
})

function highlight(){
  if (score > scoreb){
    score1.classList.add('highlight')
    score2.classList.remove('highlight')
  }else if (score < scoreb){
    score2.classList.add('highlight')
    score1.classList.remove('highlight')
  }else{
    score2.classList.remove('highlight')
    score1.classList.remove('highlight')
  }
}