// let container=document.getElementsByClassName("container")[0]
// console.log(container)
// async function getData(){
//  let responce=await fetch("https://dummyjson.com/products")
//  let result=await responce.json()
//  localStorage.setItem("products",JSON.stringify(result.products))
//  displayData(result.products)
// }
// getData()

// function displayData(products){
//     console.log(products)
//     products.forEach((prd)=>{
//         let {id,brand,category,description,images,price,stock,title}=prd
//         let item=document.createElement("div")
//         item.className="item"
//         item.innerHTML=`
//         <img src='${images[0]}' alt = '${title}'>
//         <p><strong>Title :</strong> ${title}  <strong>Price</strong> <b>$</b>${price} <strong>Available Stock :</strong> ${stock}</p>
//         <p><strong>Brand :</strong> ${brand || "Not Available"} <strong>Category :</strong>  ${category}</p>
//         <p>${description}</p>
//         <button onclick="getMoreInfo(${id})">See More</button>
//         `
//         container.appendChild(item)
//     })
// }


// function getMoreInfo(id){
//     console.log(id)
//     window.location.href=`./More.html?id=${id}`
// }







    const container = document.getElementById("productContainer");
    const loading = document.getElementById("loading");

    async function getData() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();
        localStorage.setItem("products", JSON.stringify(result.products));
        displayData(result.products);
      } catch (err) {
        container.innerHTML = "<p>Failed to load products.</p>";
        console.error(err);
      } finally {
        loading.style.display = "none";
      }
    }

    function displayData(products) {
      products.forEach((prd) => {
        const { id, brand, category, description, images, price, stock, title } = prd;
        const item = document.createElement("div");
        item.className = "item";
        item.innerHTML = `
          <img src="${images[0]}" alt="${title}" onerror="this.src='fallback.jpg'">
          <p><strong>Title:</strong> ${title} <strong>Price:</strong> $${price} <br><strong>Stock:</strong> ${stock}</p>
          <p><strong>Brand:</strong> ${brand || "N/A"} <strong>Category:</strong> ${category}</p>
          <p class="description">${description}</p>
          <button onclick="getMoreInfo(${id})" aria-label="More about ${title}">See More</button>
        `;
        container.appendChild(item);
      });
    }

    function getMoreInfo(id) {
      window.location.href = `./More.html?id=${id}`;
    }

    getData();