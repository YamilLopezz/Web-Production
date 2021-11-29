let button = document.querySelector('#button');
let msg = document.querySelector('#message');

button.addEventListner('click', ()=>{
  msg.classList.toggle('reveal');
})
