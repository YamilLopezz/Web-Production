let button = document.querySelector('#button');
let msg = document.querySelector('#message');

button.addEventListener('click', ()=>{
  msg.classList.toggle('reveal');
})

let press = document.querySelector('#another');
let text = document.querySelector('#message1');

press.addEventListener('click', ()=>{
  text.classList.toggle('reveal');
})
