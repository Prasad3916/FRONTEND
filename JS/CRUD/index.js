var url ="http://localhost:3000/products"
var container=document.getElementById("container")
var btn=document.getElementById("add")
btn.addEventListener("click",function(){
    var tit=document.getElementById("title")
    var descr=document.getElementById("description")
    if(tit.value=="" || descr.value==""){
        alert("Invalid")
    }else{
 var options={
        "method":"POST",
        "headers":{
            "Content-Type":"application/json"
        },
        "body":JSON.stringify({
            "title":tit.value,
            "description":descr.value
        })
    }
    fetch(url,options)
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
        alert("Data Added Successfully")
        getData()
    })
    tit.value=""
    descr.value=""
}})
function getData(){
    fetch(url)
    .then(res=>res.json())
    .then(res=>displayData(res))
}
function displayData(data){
    container.innerHTML=``
    data.forEach(element => {
        let div=document.createElement("div")
        div.className="item"
        div.innerHTML=`
        <p class="p1">${element.title}</p>
        <p class="p2">${element.description}</p>
        <button onclick = deleteData('${element.id}')>DELETE</button>
        `
        container.append(div)
    });
    
}
getData()

function deleteData(id){
    var url =`http://localhost:3000/products/${id}`
    fetch(url,{
        "method":"DELETE"
    })
    .then(res=>res.json())
    .then(res=>{
        alert("Deleted Successfully")
        console.log(id)
        getData()
    })
}




