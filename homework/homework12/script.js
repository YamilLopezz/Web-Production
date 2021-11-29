let press = document.querySelector('#button');
let text = document.querySelector('#message');

press.addEventListener('click', ()=>{
  text.classList.toggle('reveal');
})

let pres = document.querySelector('#another');
let tex = document.querySelector('#message1');

pres.addEventListener('click', ()=>{
  tex.classList.toggle('reveal');
})
