function printData(){
    console.log(1)
    setTimeout(()=>{
        console.log(2)
    },1000)
    console.log(3) 
}                                                   // 1 3 5 4 6 2 1 3 2
printData()   
function asynchronous(){
    console.log(5)
    setTimeout(printData,2000)
    console.log(4)
    setTimeout(()=>{console.log(6)},200)    
}
asynchronous()                      
console.log()
function async(){
    setTimeout(()=>{
        console.log(3000)
    },3000)
    for(var a=1;a<10000;a++){
        // console.log("i")
    }
    setTimeout(()=>{
        console.log(2000)
    },2000)
}
async()