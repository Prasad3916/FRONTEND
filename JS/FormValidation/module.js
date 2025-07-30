// export function getSum(...a){
//     return a.reduce((acc,ele)=>acc+ele)
// }
// export function getProduct(...a){
//     return a.reduce((acc,ele)=>acc*ele)
// }
// export function getStringArray(str){
//     try{
//         if(typeof(str)!='string'){
//             throw TypeError("Invalid Input string Is Not a String")
//         }
//         else{
//             return [...str]
//         }
//     }
//     catch(err){
//         console.log(err)
//     }
//     return str
// }
function getSum(...a){
    if(a.length==0){
        return "Zero Parameters"
    }
    return a.reduce((acc,ele)=>acc+ele)
}
function getProduct(...a){
    if(a.length==0){
        return "Zero Parameters"
    }
    return a.reduce((acc,ele)=>acc*ele)
}
function getStringArray(str="❌"){ //if string empty
    try{
        if(typeof(str)!='string'){
            throw TypeError("Invalid Input string Is Not a String")
        }
        else{
            return [...str]
        }
    }
    catch(err){
        console.log(err)
    }
    return str
}

export default function trimSpaces(string="❌"){
    return string.trim().toUpperCase()
}
export {
    getSum,getProduct,getStringArray
}