var container=document.createElement("div")
async function getData(){
    let response =await fetch("https://randomuser.me/api/")
    let data=await response.json()
    var content=data.results[0]
    console.log(content)
    console.log(content.picture)
    container.innerHTML=`
    <img src='${content.picture.large}'>
    <p>${content.name.title+ " " +content.name.first+ " " +content.name.last} </p>
    <p>Age : ${content.dob.age} Gender : ${content.gender} Phone : ${content.phone} <br>
        ${content.location.street.name+" "+content.location.city+" "+content.location.state} 
    </p>
    `
    document.body.appendChild(container)
}
setInterval(() => {
    getData()
}, 1000);