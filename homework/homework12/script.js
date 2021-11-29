let button = document.querySelector('#button');
let msg = document.querySelector('#message');

button.addEventListener('click', ()=>{
  msg.classList.toggle('reveal');
})

let second = document.querySelector('#button1');
let message = document.querySelector('#message1');
second.addEventListener('click', ()=>{
  message.classList.toggle('reveal');
})
