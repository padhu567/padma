
let a=8;
console.log(a);
let b=Math.random();
console.log(b);
let c=Math.random()*100;
console.log(b*100);
console.log(Math.ceil(b));
console.log(Math.floor(b));
 
let headere=document.createElement("h1");
 
console.log(headere);
headere.textContent="Hello iam header tag from js";
  headere.setAttribute("id","header_js");

 document.body.appendChild(headere);
 let main_div=document.getElementById("main_div");
 main_div.appendChild(headere);
 let one_header=document.getElementById("one-header");
main_div.classList.add("fff");
 console.log(main_div);
//main_div.removeChild(headere);

let x=7;
if(x>7){
    console.log("A is greater num");
}
else if(x>=7){
    console.log("A is lesser num");
}
else if(x===7){
    console.log("A is equal to 7");
}


 