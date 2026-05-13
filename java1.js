console.log("hello padhu");
 
 let hello=document.getElementById("hello");
console.log(hello)
let d1=["1","3"];
console.log(typeof(d1))
let c1=[2,3,4,5,6,0,8];
console.log(c1[3])
let b1=[2,7,"padhu",8,9];
console.log(b1[2])
let obj_data={name:"padhu",num:546};
console.log(obj_data.num)
console.log(obj_data.name)

let nums=[1,8,9,6,5,4,10,30,40];
console.log(nums.length);
let names=["padma","lally","srivarsha","rajeswari","adinarayana"];
names.push("dheeraj");
console.log(names);
let fruits=["apple","grapes","mango","papaya","cherry"];
fruits.unshift("goava");
console.log(fruits);
let flowers=["rose","lilly","waterlilly","hibiscus","jasmine"];
flowers.shift();
console.log(flowers);
let veg=["tomato","onion","carrot","beetroot","chilly"];
veg.pop();
console.log(veg);
let age=70;
console.log(typeof(age));

console.log("nextday work");

console.log("hello");
let array_data=[1,3,5,"hello",8,9];
console.log(array_data)
let number=[10,20,30,40,50];
for(let i=0;i<number.length;i++){
    console.log(number[i]);
}
let fruit=["apple","mango","orange"];
fruit.forEach((item,index)=>{ 
 console.log(index,item);
})
 
let numbers=[1,2,3];
let result=numbers.map((item)=>{
 return item*2;
})
console.log(result);

let ages=[12,15,20,18,24];
let adults=ages.filter((item)=>{
return item>=15;
})
console.log(adults);