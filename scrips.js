"use strict";

let num = 20;

function showFirstMessage(text){
    console.log(text);
    num = 10;
}

showFirstMessage('Hello');
console.log(num);