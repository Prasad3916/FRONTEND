var container=document.getElementById("container")
var url="https://asyncandawaitjson.onrender.com/products"
var idinput=document.getElementById("id")
var titleinput=document.getElementById("title")
var descriptioninput=document.getElementById("description")
var updatebutton=document.getElementById("button")
updatebutton.onclick=putOrPost
console.log(idinput)
console.log(titleinput)
console.log(descriptioninput)
console.log(updatebutton)

async function modifyData(element){
    var mainurl=`${url}/${element}`
    try{
        var response=await fetch(mainurl)
        var data=await response.json()
        idinput.value=data.id
        titleinput.value=data.title
        descriptioninput.value=data.description
        window.scroll({
        top: 0,
        behavior: "smooth"
        });
        console.log(element)
    }
    catch(err){
        console.log(err)
    }
}

async function putOrPost() {
    var method=idinput.value?"PUT":"POST"
    console.log(method)
    let mainurl=(method=="PUT")?`${url}/${idinput.value}`:url
    console.log(mainurl)
    try{
        let response=await fetch(mainurl,{
        method,
        "headers":{
            "Content-Type":"application/json"
        },
        "body":JSON.stringify({
            "title":titleinput.value,
            "description":descriptioninput.value
        })
    })
    if(response.ok){
        alert((method=="PUT")?"Modify Successfully":"Updated Successfully")
        displayData()
        titleinput.value=""
        descriptioninput.value=""
        idinput.value=""
    }
    }
    catch(err){
        console.log(err)
    }


}

async function displayData() {
    container.innerHTML=''
    try{
        let response=await fetch(url)
        let data=await response.json()
        data.forEach(element=>{
        var item=document.createElement("div")
        item.innerHTML=`
        <p>${element.title}</p>
        <p>${element.description}</p>
        <button onclick="deleteData('${element.id}')">Delete</button>
        <button onclick="modifyData('${element.id}')">Update</button>
        `
        titleinput.value=""
        idinput.value=""
        descriptioninput.value=""
        container.append(item)
    })
    }
    catch(err){
        
    }


}
displayData()
async function deleteData(id){
    try{
        var url=`https://asyncandawaitjson.onrender.com/products/${id}`
        let res=await fetch(url,{"method":"DELETE"})
        if(res.ok){
            alert("Deleted Successfully "+id)
            displayData()
            console.log(id)
        }
    }
    catch(err){
        console.log(err)
    }
}