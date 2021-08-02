"use strict";

let toggle=document.querySelector('.toggle');
let navigation = document.querySelector('.navigation')
// console.log(toggle);

toggle.addEventListener('click', function()
{   
   navigation.classList.remove('navigation');
});

