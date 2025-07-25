var url="https://database-50df4-default-rtdb.firebaseio.com/users.json"
var userinput=document.getElementById("username")
var password=document.getElementById("password")
var addbutton=document.getElementById("addbutton")
console.log(userinput)
console.log(password)
console.log(addbutton)
addbutton.addEventListener('click',getData)

async function  getData() {
    await fetch(url,{
    "method":"POST",
    "headers":{
        "Content-Type":"application/json"
    },
    "body":JSON.stringify({
        "username":userinput.value,
        "password":password.value
        })
    })
    .then(res=>{
        if(res.ok){
            alert("Data Posted Successfully")
            console.log("Data Posted Successfully")
            console.log(username.value)
            console.log(password.value)
        }
    })
    .catch(err=>console.log(err))
}


