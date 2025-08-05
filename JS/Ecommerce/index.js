// let result=[]
// await fetch("https://ecommerce-cd13e-default-rtdb.firebaseio.com/users/-OWjY-8xDMY5bydcG1EK.json")
// .then(res=>res.json())
// .then(res=>{
//     result=res["products"]
//     result.push(  {
//           "id": 117,
//           "title": "Sportbike Motorcycle",
//           "price": 7499.99,
//           "quantity": 2,
//           "total": 14999.98,
//           "discountPercentage": 19.83,
//           "discountedTotal": 12025.48,
//           "thumbnail": "https://cdn.dummyjson.com/products/images/motorcycle/Sportbike%20Motorcycle/thumbnail.png"
//         })
// })



// await fetch("https://ecommerce-cd13e-default-rtdb.firebaseio.com/users/-OWjY-8xDMY5bydcG1EK.json",{
//     "method":"PATCH",
//     "headers":{
//         "Content-Type":"Application/json"
//     },
//     "body":JSON.stringify({
//         "products":result
//     })
// })
// .then(res=>res.json())
// .then(res=>{
//     console.log(result)
// })



// async function updateProducts() {
//   const res = await fetch("https://ecommerce-cd13e-default-rtdb.firebaseio.com/users/-OWjY-8xDMY5bydcG1EK.json")
//   const data = await res.json()

//   const result = data["products"] || []

//   result.push({
//     id: 117,
//     title: "Sportbike Motorcycle",
//     price: 7499.99,
//     quantity: 2,
//     total: 14999.98,
//     discountPercentage: 19.83,
//     discountedTotal: 12025.48,
//     thumbnail: "https://cdn.dummyjson.com/products/images/motorcycle/Sportbike%20Motorcycle/thumbnail.png"
//   })

//   const patchRes = await fetch("https://ecommerce-cd13e-default-rtdb.firebaseio.com/users/-OWjY-8xDMY5bydcG1EK.json", {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ products: result })
//   })

//   const finalData = await patchRes.json()
//   console.log(finalData)
// }

// updateProducts()


// async function updateProducts() {
//   const res = await fetch("https://ecommerce-cd13e-default-rtdb.firebaseio.com/users/-OWjY-8xDMY5bydcG1EK.json")
//   const data = await res.json()

//   const patchRes = await fetch("https://ecommerce-cd13e-default-rtdb.firebaseio.com/users/-OWjY-8xDMY5bydcG1EK.json", {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ username: "Prasad_3916" })
//   })

//   const finalData = await patchRes.json()
//   console.log(finalData)
// }
// updateProducts()





// async function updateProducts() {
//   const patchRes = await fetch("https://ecommerce-cd13e-default-rtdb.firebaseio.com/users.json", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ 
//         "username":"Venu_2007",
//         "password":"Venu_5899",
//         "products":[JSON.stringify({
//           "id": 134,
//           "title": "Vivo S1",
//           "price": 249.99,
//           "quantity": 5,
//           "total": 1249.95,
//           "discountPercentage": 5.64,
//           "discountedTotal": 1179.45,
//           "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/thumbnail.png"
//         })]  
//          })
//   })

//   const finalData = await patchRes.json()
//   console.log(finalData)
// }

// updateProducts()







let container=document.getElementsByClassName("container")[0];
let menuicon=document.getElementsByClassName("menuicon")[0];
let nav=document.getElementsByClassName("navitems")[0];
let username=document.getElementById("username");
let password=document.getElementById("password");
let susername=document.getElementById("susername");
let spassword=document.getElementById("spassword");
let fusername=document.getElementById("fusername");
let fpassword=document.getElementById("fpassword");
let login=document.getElementById("login");
let signup=document.getElementById("signup");
let fpbtn=document.getElementById("fpbtn");
menuicon.addEventListener("click",()=>{
    nav.classList.toggle("visible");
});
signup.addEventListener("click",async ()=>{
    await signUpUser();
    susername.value="";
    spassword.value="";
})
async function getData(){
    let response=await fetch("https://dummyjson.com/carts")
    let result=await response.json()
    let products=[];
    for(let cart of result.carts){
        let item=document.createElement("div")
        let {title,price,thumbnail,quantity,discountPercentage,discountedTotal,total}=cart.products[0];
        products.push(...cart.products)
        // console.log(cart.products)
        item.innerHTML=`<img src=${thumbnail} alt="Loading">
        <p class="title">${title}</p><p class="pricetag">Price : ${price}Rs Quantity : ${quantity}</p>
        <p class="total">Total : <strike>${total.toFixed(2)}/-</strike> ${discountedTotal}/-  <b>${discountPercentage}%<b> discount</p>
        <button class="addbtn" data-bs-target="#firstmodal" data-bs-toggle="modal">Add to Cart </button>`
        container.appendChild(item)
    }
    localStorage.setItem("products",JSON.stringify(products))
}
console.log(JSON.parse(localStorage.getItem("products")))
getData()
login.addEventListener("click",async ()=>{
    let response=await fetch("https://ecommerce-cd13e-default-rtdb.firebaseio.com/users.json")
    let result=await response.json();
    for(let user in result){
        let finduser=result[user]
        if(username.value==finduser.username && password.value==finduser.password){
            navigateLoginPage(user)
        }
    }
})
function navigateLoginPage(id){
    window.location.href=`./Login.html?id=${id}`
}

async function  signUpUser() {
    let options={
        "method":"POST",
        "headers":{
            "Content-Type":"application/json"
        },
        "body":JSON.stringify({
            "username":susername.value,
            "password":spassword.value,
            "products":JSON.parse((localStorage.getItem("products")))
        })
    }
    let response=await fetch("https://ecommerce-cd13e-default-rtdb.firebaseio.com/users.json",options);
    console.log(response.status,response.statusText)
}


fusername.addEventListener("keypress",async ()=>{
    let response=await fetch("https://ecommerce-cd13e-default-rtdb.firebaseio.com/users.json");
    let result=await response.json();
    for(let user in result){
        let finduser=result[user];
        if(finduser.username==fusername.value){
            fpassword.focus();
            fpbtn.addEventListener("click",()=>{
                console.log(fpassword.value)
            });
        }
    }
})


