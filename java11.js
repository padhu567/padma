console.log("padhu");
let a=20;
let b=30;
console.log(a+b);

let padhu="hello web"
let lally=padhu.length;
console.log(lally);

let num=8;
if(num%5==0){
    console.log("even number");

}
else{
    console.log("add number");
}

let max=Math.max(9,8,7,6,5,4,3);
let min=Math.min(1,2,3,4,5,6,7);
console.log(max);
console.log(min);
//fibonacci series
console.log("fibonacci");
let a1=0;
let b1=1;
console.log(a1);
console.log(b1);
for(let i=1; i<=8; i++){
    let c=a1+b1;
    console.log(c);
    a1=b1;
    b1=c;

}

console.log("prime num");
let number=17;
let isprime=true;
for(let i=2; i<num; i++){
    if(num%i===0){
        isprime=false;
        break;
        
    }
     
}
 console.log(isprime="prime"||"not prime");


 console.log("reverse");
let str="javascript";
console.log(
    str.split("").reverse().join("")); 
 
console.log("palindrowe");
let string="madam";
if(string===string.split("").reverse().join("")){
    console.log(string);
}