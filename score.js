let newGame = document.querySelector('.ng');
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2")

let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')

let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')


let score = 0;

btn1.addEventListener('click', function() {
  score += 1;
  score1.textContent = score;
  highlight()
})

btn2.addEventListener('click', function(){
  score += 2;
  score1.textContent = score;
  highlight()
})

btn3.addEventListener('click', function(){
  score += 3;
  score1.textContent = score;
  highlight()
})

let scoreb = 0


btn4.addEventListener('click', function() {
  scoreb += 1;
  score2.textContent = scoreb;
  highlight()
})

btn5.addEventListener('click', function() {
  scoreb += 2;
  score2.textContent = scoreb;
  highlight()
})

btn6.addEventListener('click', function() {
  scoreb += 3;
  score2.textContent = scoreb;
  highlight()
})

newGame.addEventListener('dblclick', function(){
  score = 0;
  scoreb = 0;
  score1.textContent = score;
  score2.textContent = scoreb;
  score2.classList.remove('highlight')
    score1.classList.remove('highlight')
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