function greet(name="padma"){
    console.log("welcome"+name)
}
greet();
greet("lally");

let padma=function(name="guest",subgreet){
    console.log("welcome"+name)
}
function subgreet(){
    console.log("flower")
}
padma("function",subgreet())
function add(a,b){
    return(a+b);
}
let result=add(4,6)
console.log(result);

let number=[10,20,30,40,];
console.log(number.find(n=>n>10));

let array=[1,2,3,4,5,6,7];
console.log(array.includes(3));

let names=[1,3,4,6,5,2,7,8,];
console.log(names.slice(1,8));

let a=[1,2,3];
let b=[4,5,6,];
console.log(a.concat(b));

let padhu=[2,30,3,40,4,60]
console.log(padhu.sort());

let sri=["rabbit","cat","dog"];
console.log(sri.reverse());

let nums=['1','2'];
console.log(nums.join('-'));

let adi=[1,3,4,6,5,7,2,8,];
console.log(adi);