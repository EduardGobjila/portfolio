let i = 0;
let sentece = 'You should hire me for your next success';
let sentence = 'I can turn your usual visitors into customers';
let speed = 60;

function typo() {
   let text = document.getElementById('typing')
  if (i < sentece.length) {
   text.innerHTML += sentece.charAt(i);
    i++;
    setTimeout(typo, speed);
  } else if (i === sentece.length) {
    text.innerHTML = '';
    i = 0
    if (i < sentece.length) {
     text.innerHTML += sentence.charAt(i)
    }
  }
}
typo()
