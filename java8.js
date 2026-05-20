
let padhu=document.getElementById("one_on");
function dataentry(){
    let padma=document.getElementById("sri").innerHTML="skill hub";
    console.log(padma);
}
padhu.onclick=dataentry();
let sri=document.getElementById("one_of");
function sri_1(){
    let padhu1=document.getElementById("padhu").innerHTML="hello padhu";
    console.log(padhu1);
}
 sri.addEventListener("click",dataentry);
sri.addEventListener("keydown",sri_1);
sri.addEventListener("keyup",sri_1);