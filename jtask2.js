let form=document.getElementById("myForm");

let firstname=document.getElementById("one");
let lastname=document.getElementById("two");
let email=document.getElementById("three");
let password=document.getElementById("four");

let firstnameerror=document.getElementById("firstnameerror");
let lastnameerror=document.getElementById("lastnameerror");
let emailerror=document.getElementById("emailerror");

let submitBtn=document.getElementById("submitBtn");
let resetBtn=document.getElementById("resetBtn");

let charCount=document.getElementById("charCount");

let passwordstrength=document.getElementById("passwordstrength");

let course=document.getElementById("course");

let courseText=document.getElementById("courseText");

let successMessage=document.getElementById("successMessage"); 

let heading=document.getElementById("heading");

let darkmodeBtn=document.getElementById("darkmodeBtn");

let timer=document.getElementById("timer");

//FOCUS EVENT

firstname.addEventListener("focus",function(){
    firstname.style.borderColor="blue";
});

//BLUR EVENT

firstname.addEventListener("blur",function(){ 
    if(firstname.value===""){
        firstnameerror.textContent="Required";
    }
    else{
        firstnameerror.textContent="";
    }
});

//INPUT EVENT
firstname.addEventListener("input",function(){
    charCount.textContent="character:"+firstname.value.length;
});

//KEYDOWN EVENT

firstname.addEventListener("keydown",function(){
    if(event.key==="enter"){
        console.log("enter key pressed");
    }
});

//CHANGE EVENT

    course.addEventListener("change",function(){
    courseText.textContent="selected course:"+course.value;
});

//MOUSEOUT EVENT

submitBtn.addEventListener("click",function(){
    submitBtn.style.backgroundColor="bule";
});

 //CLICK EVENT
 resetBtn.addEventListener("click",function(){
    form.reset();
    charCount.textContent="";
passwordstrength.textContent="";
courseText.textContent=""
successMessage.textContent="";
 });

 //DOUBLE CLICK EVENT
 heading.addEventListener("dblclick",function(){
heading.style.color="red";
 });

 //SUBMIT EVENT
 form.addEventListener("submit",function(){
    event.preventDefault();
    let isValid=true;
    //if(firstname.value===""){
      //  firstnameerror.textContent="reduired"
    //}
if(lastname.value===""){
    lastnameerror.textContent="required";
    isValid=false;
}
else{
   lastnameerror.textContent=""; 
}
if(email.value.includes("@")===false){
    emailerror.textContent="invalid email";
    isValid=false;

}

 });