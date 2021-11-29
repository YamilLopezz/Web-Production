let button = document.querySelector('#button');
let msg = document.querySelector('#message');

button.addEventListner('click', ()=>{
  msg.classList.toggle('reveal');
})

let button = document.querySelector('#button1');
let msg = document.querySelector('#message1');

button.addEventListener('click1', ()=>{
  msg.classList.toggle('reveal1');
})
