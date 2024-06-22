

const myButton = document.getElementById("myButton");
const label1= document.getElementById("label1");
const label2= document.getElementById("label2");
const label3= document.getElementById("label3");
const min = 1;
const max = 6;
let randomNUm1;
let randomNUm2;
let randomNUm3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNUm2 = Math.floor(Math.random() * max) + min;
    randomNUm3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNUm2;
    label3.textContent = randomNUm3;
}