let button = document.querySelector('#button');
let msg = document.querySelector('#message');
let msg1 = document.querySelector('#message1');

button.addEventListener('click', ()=>{
  msg.classList.toggle('reveal');
  msg1.classList.toggle('reveal1');
})
