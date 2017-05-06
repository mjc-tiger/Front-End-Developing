var title = document.querySelector('#one')
var button = document.querySelector('button')

// Hover (mouseover and mouseout)
title.addEventListener('mouseover',function(){
  title.textContent = "Mouse currently Over the game title!";
  title.style.color = '#1D3557';
})

title.addEventListener('mouseout',function(){
  title.textContent = "Tic Tac Toe Game!"
  title.style.color = '#E63946';
})

// Hover (button)
button.addEventListener('mouseover',function(){
  button.textContent = "RESTART!";
  button.style.color = '#1D3557';
})

button.addEventListener('mouseout',function(){
  button.textContent = "Guess what I can!"
  button.style.color = '#F1FAEE';
})
