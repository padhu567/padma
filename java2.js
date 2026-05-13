 console.log("image creation")
 let defalut_width=100;
 let padma=document.getElementById("padma");
 function siri(){ 
    defalut_width=defalut_width+40;
    padma.style.width=defalut_width+"px";
    let message=document.getElementById("message");
    if(defalut_width>=300){
      defalut_width=300;
      message.innerHTML="you exceed the limit";
      message.style.backgroundColor="yellow";
    }
 } 
  
 function giri(){
    defalut_width=defalut_width-50;
    padma.style.width=defalut_width+"px";
    let message1=document.getElementById("message1");
    if(defalut_width<=100){
      defalut_width=100;
      message1.innerHTML="you can't decrease width";
      message1.style.backgroundColor="red";
    }

 }
  