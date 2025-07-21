var url="http://localhost:3000/products"
async function errorHandling(){
    try{
        let responce= await fetch(url)
        if(!responce.ok){
            throw new Error("Html Error : "+responce.status)
        }
        let result=await responce.json()
        console.log(result)
    }
    catch(err){
        console.log(err.message)
    }
    console.log("Error...........")
}
errorHandling()
