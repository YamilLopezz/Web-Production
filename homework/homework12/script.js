let button = document.querySelector('#button, #another');
let msg = document.querySelector('#message, #message1');

button.addEventListener('click', ()=>{
  msg.classList.toggle('reveal');
})
