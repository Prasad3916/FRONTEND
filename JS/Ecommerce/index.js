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
let login=document.getElementById("login")
// console.log(login)
// console.log(username)
// console.log(password)
menuicon.addEventListener("click",()=>
{
    nav.classList.toggle("visible")
    // console.log(nav)
});
async function getData(){
    let resonse=await fetch("https://dummyjson.com/carts")
    let result=await resonse.json()
    // console.log(result)
    // console.log(container)
    for(let cart of result.carts){
        // console.log(cart.products[0])
        let item=document.createElement("div")
        let {title,price,thumbnail,quantity,discountPercentage,discountedTotal,total}=cart.products[0];
        item.innerHTML=`<img src=${thumbnail} alt="Loading">
        <p class="title">${title}</p><p class="pricetag">Price : ${price}Rs Quantity : ${quantity}</p>
        <p class="total">Total : <strike>${total.toFixed(2)}/-</strike> ${discountedTotal}/-  <b>${discountPercentage}%<b> discount</p>
        <button class="addbtn">Add to Cart </button>`
        container.appendChild(item)
        // console.log(title,price,thumbnail,quantity,discountPercentage)
    }
}
getData()


async function  displayData() {
    let resonse=await fetch("https://ecommerce-cd13e-default-rtdb.firebaseio.com/users.json")
    let result=await resonse.json();
    // for(let user in result){
    //     let finduser=result[user]
    //     console.log(finduser.username)
    //     console.log(finduser.password) 
    // }
    return result;
}

login.addEventListener("click",async ()=>{
    let result = await displayData();
    for(let user in result){
        let finduser=result[user]
        if(username.value==finduser.username && password.value==finduser.password){
            // console.log(finduser.username);
            // console.log(finduser.password);
            window.location.href="./login.html"
        }
    }
})
// displayData()

// function initNavToggle() {
//   const menuIcon = document.querySelector('.menuicon');
//   const navItems = document.querySelector('.navitems');

//   function toggleNav() {
//     navItems.classList.toggle('active');
//     navItems.setAttribute('aria-hidden', !navItems.classList.contains('active'));
//   }

//   menuIcon.addEventListener('click', toggleNav);
//   menuIcon.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') toggleNav();
//   });
// }
// initNavToggle();
