console.log("iam padhu");
let count=0;
function setcount(){
    count=count+10;
    console.log(count);
  if(count==30){
        console.log("30 timer")
        clearInterval(uniqId)  
  
}
    
     }
 let uniqId=setInterval(setcount,1000);
  