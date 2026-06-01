console.log("hello");
const user1={title:"eee",country:"india"}
const m12={
    method:"GET",
    header:{"content-Type":"application/json"},
}
fetch("https://jsonplaceholder.typicode.com/posts/",m12)
.then(res=>res.json())
.then(data=>{console.log(data)});


const user2={title:"eee",country:"india"}
const m1={
    method:"POST",
    header:{"content-Type":"application/json"},
    body:JSON.stringify(user2)
}
//fetch(url,methods)
fetch("https://jsonplaceholder.typicode.com/posts/",m1)
.then(res=>res.json())
.then(data=>{console.log(data)});

    const user14={title:"JS",country:"india"}
    const m3={
        method:"DELETE",
        header:{"content-Type":"application/json"},
        body:JSON.stringify(user14)
    }
    fetch("https://jsonplaceholder.typicode.com/posts/7",m3)
    .then(res=>res.json())
.then(data=>{console.log(JSON.stringify(data))});

const user15={title:"java script",country:"india"}
    const m22={
        method:"PATCH",
        header:{"content-Type":"application/json"},
        body:JSON.stringify(user15)
    }
    fetch("https://jsonplaceholder.typicode.com/posts/3",m22)
    .then(res=>res.json())
.then(data=>{console.log(JSON.stringify(data))});

