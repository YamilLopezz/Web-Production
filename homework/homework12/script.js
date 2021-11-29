let button = document.querySelector('#button');
let msg = document.querySelector('#message');

button.addEventListener('click', ()=>{
  msg.classList.toggle('reveal');
})

let second = document.querySelector('#another');
let message = document.querySelector('#message1');

second.addEventListener('click', function(){
   message.classList.toggle('reveal1');
})
