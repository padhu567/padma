console.log("hello");

let count;
let lally;
let isRunning=false;
let updated_count;
let one=document.createElement("p");

function padhu_g(){
let start= parseInt(document.getElementById("siva").value);
 console.log(start);
let stop= parseInt(document.getElementById("nandu").value);
 console.log(stop);
let two=document.getElementById("header_e");  
     
if(start>stop){
    count=start;
}
else{
    count=stop;
}
function data(){
    if(isRunning===true);{
        count=updated_count;
        isRunning=false;
    }
}      


count--
console.log(count);
one.textContent=count;
two.appendChild(one);
if(count===0){
    one.textContent="time exceed";
    one.style.color="blue";
    updated_count=count;
    clearInterval(lally);
    isRunning=false;

}
lally=setInterval(data,1000);
}
function lally_g(){
    updated_count=count;
    isRunning=true;
    clearInterval(lally);
    updated_count=count;
    isRunning=true;
    one.textContent="time out";
    one.style.color="red";
}