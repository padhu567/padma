console.log("hello padma");
function submit(){
 
let username=document.getElementById("padhu").value;
let email=document.getElementById("padhu1").value;
console.log(username);
console.log(email);
let name=document.createElement('li');
let a=document.getElementById("header");
if(username==="padma" && email==="padhu@gmail.com"){
    console.log(name);
    name.textContent=username+email;
     a.appendChild(name);
}
}
