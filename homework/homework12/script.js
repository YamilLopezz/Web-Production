let button = document.querySelector('#button');
let msg = document.querySelector('#message');
let button1 = document.querySelector('#button1');
let msg1 = document.querySelector('#message1');

button.addEventListener('click', ()=>{
  msg.classList.toggle('reveal');
})

button.addEventListener('click', ()=>{
  msg.classList.toggle('reveal1');
})
