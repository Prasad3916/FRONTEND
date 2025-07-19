var url="https://fakestoreapi.com/products?limit=10"
var container=document.createElement("div")
container.className="container"
document.body.append(container)
fetch(url)
.then(res=>res.json())
.then(res=>{
    for(var obj of res){
        var {title,price,image,category}=obj
        var item=document.createElement("div")
        item.className="item"
        var category1=document.createElement("p")
        category1.innerHTML=category
        var imageparent=document.createElement("div")
        imageparent.className="imageparent"
        imageparent.innerHTML=`<img src='${image}' alt="" >`
        var footer=document.createElement("div")
        footer.className="footer"
        var title1=document.createElement("p")
        title1.innerHTML=title
        var price1=document.createElement("p")
        price1.innerHTML="Price : "+price+"/-"
        container.appendChild(item)
        item.appendChild(category1)
        item.appendChild(imageparent)
        item.appendChild(footer)
        footer.appendChild(title1)
        footer.appendChild(price1)
    }
})
