        let container=document.getElementsByClassName("container-fluid")[0];
        let urlSearchParams=new URLSearchParams(window.location.search);
        let logout=document.getElementsByClassName("logout")[0];
        let addproducts=document.getElementsByClassName("addproducts")[0];
        let title=document.getElementById("title");
        let productimage=document.getElementById("productimage");
        let noofitems=document.getElementById("noofitems");
        let discountPercentage=document.getElementById("discountPercentage");
        let price=document.getElementById("price");
        let addproduct=document.getElementById("addproduct");
        let urlbyid=`https://ecommerce-cd13e-default-rtdb.firebaseio.com/users/${urlSearchParams.get("id")}.json`;
        let userid=document.getElementsByClassName("userid")[0];
        let viewcarts=document.getElementsByClassName("viewcarts")[0];
        logout.addEventListener("click",()=>{
            location.href="./index.html"
        });





        async function displayData(){
            container.innerHTML=``;
            let response=await fetch(urlbyid);
            let result=await response.json();
            userid.innerHTML=`${result.username}`
            // console.log(result);
            if(result.products==undefined){
                container.innerHTML=`No Products Available Click On Add Products To Add Products`
            }
            else{
                for(let cart of result.products){
                    let item=document.createElement("div");
                    let div=document.createElement("div");
                    div.className="itembtn";
                    let addtocart=document.createElement("button");
                    addtocart.innerText="Add to Cart";
                    addtocart.className="addbtn btn btn-success";
                    let removeproduct=document.createElement("button");
                    removeproduct.innerText="Remove";
                    removeproduct.className="addbtn btn btn-danger";
                    let {id,title,price,thumbnail,quantity,discountPercentage,discountedTotal,total}=cart;
                    item.innerHTML=`<img src=${thumbnail} alt="Loading">
                    <p class="title">${title}</p><p class="pricetag">Price : ${price}Rs Quantity : ${quantity}</p>
                    <p class="total">Total : <strike>${total.toFixed(2)}/-</strike> ${discountedTotal}/-  <b>${discountPercentage}%</b> discount</p>
                    `
                    div.append(addtocart,removeproduct);
                    item.append(div);
                    container.appendChild(item)
                    removeproduct.addEventListener("click",async e=>{
                        // console.log(result.products,id)
                        await removeItem(result.products,id);
                    })
                    addtocart.addEventListener("click",()=>{
                        let addcartitem=document.createElement("div")
                        addcartitem.innerHTML=`<img src=${thumbnail} alt="Loading">
                        <p class="title">${title}</p><p class="pricetag">Price : ${price}Rs Quantity : ${quantity}</p>
                        <p class="total">Total : <strike>${total.toFixed(2)}/-</strike> ${discountedTotal}/-  <b>${discountPercentage}%</b> discount</p>
                        `
                        viewcarts.appendChild(addcartitem)
                    })
                }
            }
        }
         window.addEventListener("DOMContentLoaded",displayData);



        async function  removeItem(result,id) {
            let res=result.filter(e=>e.id!=id);
            let options = {
                "method":"PATCH",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body":JSON.stringify({
                    "products":res
                })
            }
            let response=await fetch(urlbyid,options);
            console.log(response.status,response.statusText)
            await displayData();

        }




