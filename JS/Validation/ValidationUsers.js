var url="https://database-50df4-default-rtdb.firebaseio.com/users.json"
var divcontainer=document.getElementById("container")
async function displayData() {
    divcontainer.innerHTML=''
    await fetch(url)
    .then(res=>res.json())
    .then(res=>{
        for(let key in res){
            var item=document.createElement("div")
            item.className="item"
            // console.log(key)
            var p1=document.createElement("p")
            // var p2=document.createElement("p")
            var deletebtn=document.createElement("button")
            p1.textContent=res[key]["username"]
            // p2.textContent=res[key]["password"]
            deletebtn.textContent="Delete"
            item.append(p1,deletebtn);
            // deletebtn.addEventListener("click",()=>deleteData(key))
            divcontainer.appendChild(item)
            console.log(res[key]["username"],res[key]["password"])
        }
    })
}
displayData()

// async function deleteData(key){
// var delurl=`https://database-50df4-default-rtdb.firebaseio.com/users/${key}.json`
// await fetch(delurl,{"method":"DELETE"})
// .then(res=>{
//     if(res.ok){
//         displayData()
//         alert("DELETED SUCCESSFULLY")
//         console.log("DELETED SUCCESSFULLY")
//     }
// })
// }