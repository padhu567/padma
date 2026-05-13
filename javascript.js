console.log("hello console")
function submit_data(){
 
let Name=document.getElementById("Name").value;
console.log(Name)
let Password=document.getElementById("Password").value;
console.log(Password)
let PhoneNumber=document.getElementById("PhoneNumber").value;
console.log(PhoneNumber)
let email=document.getElementById("email").value;
console.log(email)
let city=document.getElementById("city").value;
console.log(city)
 
let header_con=document.getElementById("header_con");
 
if(Name==="padhu"||Password==="456"||PhoneNumber==="9348"||email==="padhu@123"||city==="jaggampeta"){
message.innerHTML="you logged in successfully";
  header_con.style.backgroundColor="yellow";
document.getElementById("pens").innerHTML=Name;
document.getElementById("book").innerHTML=Password;
document.getElementById("pencil").innerHTML=PhoneNumber;
document.getElementById("note").innerHTML=email;
document.getElementById("names").innerHTML=city;
} 
 
}