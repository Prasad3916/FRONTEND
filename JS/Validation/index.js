var url="https://database-50df4-default-rtdb.firebaseio.com/users.json"
var userinput=document.getElementById("username")
var password=document.getElementById("password")
var addbutton=document.getElementById("addbutton")
var divcontainer=document.getElementById("container")
addbutton.addEventListener('click',postData)
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
            alert("Data Posted Successfully")
            getData()
            console.log("Data Posted Successfully")
            console.log(username.value)
            console.log(password.value)
        }
    })
    .catch(err=>console.log(err))
}
async function getData() {
    divcontainer.innerHTML=''
    await fetch(url)
    .then(res=>res.json())
    .then(res=>{
        for(let key in res){
            var item=document.createElement("div")
            item.className="item"
            // console.log(key)
            var p1=document.createElement("p")
            var p2=document.createElement("p")
            var deletebtn=document.createElement("button")
            p1.textContent=res[key]["username"]
            p2.textContent=res[key]["password"]
            deletebtn.textContent="Delete"
            item.append(p1,p2,deletebtn);
            deletebtn.addEventListener("click",()=>deleteData(key))
            divcontainer.appendChild(item)
            console.log(res[key]["username"],res[key]["password"])
        }
    })
}
getData()
async function deleteData(key){
var delurl=`https://database-50df4-default-rtdb.firebaseio.com/users/${key}.json`
await fetch(delurl,{"method":"DELETE"})
.then(res=>res.json())
.then(res=>{
    getData()
    alert("DELETED SUCCESSFULLY")
    console.log("DELETED SUCCESSFULLY")
})
}
// delteData('-OW02BmRBS7xiyYJi4ZP')


