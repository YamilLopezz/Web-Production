let button = document.querySelector('#button');
let msg = document.querySelector('#message');

button.addEventListener('click', ()=>{
  msg.classList.toggle('reveal');
})

let button = document.querySelector('#another');
let msg = document.querySelector('#message1');

button.addEventListener('click', ()=>{
  msg.classList.toggle('reveal');
})
