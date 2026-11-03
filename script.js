"use strict";

const addEventsOnManyElements=function(elements,eventType,callback){
    let len=elements.length;
    for(let i=0;i<len;i++){
        elements[i].addEventListener(eventType,callback);
    }
}
//do navbar
const navbar=document.querySelector("[data-navbar]");
const menuButton=document.querySelector(".menu");

const toggleActive=function(){
    navbar.classList.toggle("active");
    menuButton.classList.toggle("active");
}

addEventsOnManyElements([menuButton],"click",toggleActive);