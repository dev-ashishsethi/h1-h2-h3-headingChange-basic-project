let textInput= document.querySelector("#textInput");
let btnH1= document.querySelector("#btnH1");
let btnH2= document.querySelector("#btnH2");
let btnH3= document.querySelector("#btnH3");
let output= document.querySelector("#output");

btnH1.addEventListener("click",textH1);
btnH2.addEventListener("click",textH2);
btnH3.addEventListener("click",textH3);

function textH1(){
    output.innerHTML=`<h1>${textInput.value}</h1>`;
}

function textH2(){
    output.innerHTML=`<h2>${textInput.value}</h2>`;
}

function textH3(){
    output.innerHTML=`<h3>${textInput.value}</h3>`;
}