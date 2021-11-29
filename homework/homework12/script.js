let button = document.querySelector('#button');
let msg = document.querySelector('#message');
let second = document.querySelector('#button1');
let message = document.querySelector('#message1');

button.addEventListener('click', ()=>{
  msg.classList.toggle('reveal');
})

second.addEventListener('click', ()=>{
  message.classList.toggle('reveal1');
})
