function errorHandling1(){
    try{
        var a=10;
        var b=0;
        var c=a/b
        if(a==0 || b==0){
            throw "values cant be zero"
        }
        console.log(c)
    }
    catch(err){
        console.error(err)
    }
}
errorHandling1()
function errorHandling2(){
    try{
        var a=10;
        var b=0;
        var c=a/b
        if(a==0 || b==0){
            throw new Error("Error..........")
        }
        console.log(c)
    }
    catch(err){
        console.error(err.message)
    }
    console.log("Helldkjfkdfh")
}
errorHandling2()
