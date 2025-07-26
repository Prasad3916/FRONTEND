var url="https://database-50df4-default-rtdb.firebaseio.com/users.json"
var userinput=document.getElementById("username")
var password=document.getElementById("password")
var addbutton=document.getElementById("addbutton")
var divcontainer=document.getElementById("container")
var loginbutton=document.getElementById("loginbuuton")
var form=document.getElementById("form")
addbutton.addEventListener('click',postData)
loginbutton.addEventListener('click', (e)=> {
    e.preventDefault();
    validateUser();
});


function resetInputs() {
    userinput.value = "";
    password.value = "";
}

async function  postData() {
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
            alert("User Registered Successfully")
            resetInputs()
            console.log(username.value)
            console.log(password.value)
        }
    })
    .catch(err=>console.log(err))
}

async function validateUser(){
    let flag=false;
    await fetch(url)
    .then(res=>res.json())
    .then(res=>{
        for(let user in res){
            if(res[user]["username"]===userinput.value && res[user]["password"]===password.value){
                flag=true;
                break
            }
        }
        resetInputs()
        alert(flag?"User Exists":"User Not Exists")
        console.log(flag)
        flag?form.submit():divcontainer.innerHTML="User Not Exists"
    })
}


