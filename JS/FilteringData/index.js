let container=document.getElementsByClassName("container")[0]
let btncontainer=document.getElementsByClassName("btncontainer")[0]
async function getData(){
   let responce= await fetch("https://fakestoreapi.com/products")
   let res=await responce.json()
   localStorage.setItem("products",JSON.stringify(res))
   let products=JSON.parse(localStorage.getItem("products"))
   displayData(products)
}
getData()
function displayData(products){
    container.innerHTML=``
    let btnarray=[]
    if(products==null){
        container.innerHTML=``
    }
    else{
        for(let product of products){
            let {title,description,price,category,image}=product;
            let item=document.createElement("div")
            item.innerHTML=`
            <img src=${image}>
            <p>Title : ${title},Price : ${price}</p><p>${description}</p>
            `
            container.appendChild(item)
            btnarray.push(category)
        }
        displayButton()
    }
}

function displayButton(){
    btncontainer.innerHTML=``
    let products=JSON.parse(localStorage.getItem("products"))
    let all=document.createElement("button")
    all.innerText="All"
    all.addEventListener("click",()=>{
        console.log(products)
        displayData(products)
    })
    btncontainer.appendChild(all)
   let btns=products.map(btnn=>btnn.category)
    for(let btn of Array.from(new Set(btns))){
        let btnbtn=document.createElement("button")
        btnbtn.innerHTML=btn
        btncontainer.appendChild(btnbtn)
        btnbtn.addEventListener("click",function(){
            let filteredproducts=products.filter(e=>e.category==btn)
            console.log(filteredproducts)
            displayData(filteredproducts)
        })
    }
}