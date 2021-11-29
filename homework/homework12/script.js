let button = document.querySelector('#another');
let msg = document.querySelector('#message1');

button.addEventListener('click', ()=>{
  msg.classList.toggle('reveal1');
})

let second = document.querySelector('#another');
let message = document.querySelector('#message1');

second.addEventListener('click', function(){
   message.classList.toggle('reveal');
})
