var url="https://database-50df4-default-rtdb.firebaseio.com/users.json"
await fetch(url,{
    "method":"POST",
    "headers":{
        "Content-Type":"application/json"
    },
    "body":JSON.stringify({
        "username":"Ameer@2003",
        "password":"Ameer@5d5"
    })
})
.then(res=>res.json())
.then(res=>{
    // for(var obj in res){
    //     console.log(res[0])
    // }
    console.log(res)
})
.catch(err=>console.log(err))