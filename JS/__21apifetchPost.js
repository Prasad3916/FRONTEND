var url="http://localhost:3000/Employee";
var options={
    "method":"POST",
    "headers":{
        "Content-Type":"application/json"
    },
    "body":`
    {
        "id":"6","name":"Lokesh",
        "designation":"Student",
        "role":"Burra Thinadam "
    }`
}
fetch(url,options)
    .then(res=>{
        if(res.ok){
            console.log("Status : ",res.status,"Status Text : ",res.statusText)
        }
        else{
            console.log(res.status)
        }
    })


var url="http://localhost:3000/Employee";
var options={
    "method":"POST",
    "headers":{
        "Content-Type":"application/json"
    },
    "body":'{"id":"6","name":"Lokesh","designation":"Student","role":"Burra Thinadam "}'
}
fetch(url,options)
    .then(res=>{
        if(res.ok){
            console.log("Status : ",res.status,"Status Text : ",res.statusText)
        }
        else{
            console.log(res.status)
        }
    })

var url="http://localhost:3000/Employee";
var options={
    "method":"POST",
    "headers":{
        "Content-Type":"application/json"
    },
    "body":JSON.stringify(
    {
        "id":"6","name":"Lokesh",
        "designation":"Student",
        "role":"Burra Thinadam "
    })
}
fetch(url,options)
    .then(res=>{
        if(res.ok){
            console.log("Status : ",res.status,"Status Text : ",res.statusText)
        }
        else{
            console.log(res.status)
        }
    })