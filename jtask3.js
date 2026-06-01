console.log("hello");
fetch("https://apis.ccbp.in/countries-data")
.then(res=>res.json())
.then(data=>{
    let m=document.getElementById("container");
    data.map(list =>{
        let s=document.createElement("img");
        let para=document.createElement("p");
        para.textContent=list. name
        s.src=list.flag
        m.appendChild(s)
        m.appendChild(para)
})

console.log(data)})