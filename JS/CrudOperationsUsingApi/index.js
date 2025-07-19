var url="https://jsonserver-sy6i.onrender.com/user"
// var url="http://localhost:3000/users"
function addData(){
    var username=document.getElementById("username")
    var message=document.getElementById("message")
    postData(username,message)
}
function postData(username,message){
    if(username.value!="" && message.value!=""){
        fetch(url,{
            "method":"POST",
            "headers":{
                "Content-Type":"application/json"
            },
            "body":JSON.stringify({
                username : username.value,
                message : message.value 
            })
        }).then(res=>{
            if(res.ok){
                getData()
                alert("Data Added Successfully")
                username.value=""
                message.value=""
            }
        }).catch(err=>{
            alert("Oops Problem Occur On API")
            console.log(err)
        })
    }
    else{
        alert("input Can't Be Empty And Must Be Greater Than 8 Characters")
    }
}
function getData(){
    var container=document.getElementById("container")
    container.className="container  w-50 mt-3 rounded rounded-2 p-3 border border-2 border-warning"
    container.innerHTML=""
    fetch(url)
    .then(res=>res.json())
    .then(res=>{
        for(var obj of res){
            var {username,message}=obj;
            var item=document.createElement("div")
            item.className="item border border-2 border-info rounded rounded-2 mb-2 p-2 text-success text-uppercase d-flex align-items-center justify-content-between px-3"
            var itemcontainer=document.createElement("div")
            itemcontainer.className="itemcontainer w-75 "
            var userpara=document.createElement("p")
            var msgpara=document.createElement("p")
            var button=document.createElement("button")
            button.className="btn btn-primary btn-close"
            userpara.innerHTML=username
            msgpara.innerHTML=message
            container.appendChild(item)
            item.appendChild(itemcontainer)
            itemcontainer.appendChild(msgpara)
            itemcontainer.appendChild(userpara)
            item.appendChild(button)
            // button.addEventListener('click',()=>deleteItem(obj.id))
            button.onclick=()=>deleteItem(obj.id)
        }
    })
}
getData()


function deleteItem(id){
    fetch(url+"/"+id,{
        "method":"DELETE"
    }).then(res=>{
        if(res.ok){
            console.log("What Happend")
            alert("Deleted Successfully")
            getData()
        }
        else{
            console.log("Error")
        }
    }).catch(err=>console.log(err))
}

