"use strict";

let toggle = document.querySelector(".toggle");
let toggleClose = document.querySelector(".toggle-close");
let navigation = document.querySelector(".navigation");
// console.log(toggle);

toggle.addEventListener("click", function () 
{
  navigation.classList.add("navigation");
  navigation.classList.remove("hide");
  toggleClose.classList.remove("hide");
  
});


toggleClose.addEventListener("click", function () 
{
  
    toggleClose.classList.add("hide");
    navigation.classList.remove("navigation");
    navigation.classList.add("hide");
  
});



