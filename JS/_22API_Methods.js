// var url ="http://localhost:3000/Employee/1"
// var options={
//     "method":"DELETE",
// }
// fetch(url,options)
//     .then(res=>{
//         if(res.ok){
//             console.log("Data Deleted..........")
//         }
//     })

// var options={
//     "method":"PUT",
//     "headers":{
//         "Content-Type":"application/json"
//     },
//     "body":JSON.stringify(
//         {
//             "id": "6",
//             "name": "Mokshit",
//             "designation": "Student",
//             "role": "Phone Pichodu"
//         }
//     )
// }
// fetch(url,options)
//     .then(res=>res.json())
//     .then(res=>console.log(res))

// var options={
//     "method":"PATCH",
//     "headers":{
//         "Content-Type":"application/json"
//     },
//     "body":JSON.stringify(
//         {
//             "designation": "Dhoola Cheydam"
//         }
//     )
// }
// fetch(url,options)
//     .then(res=>res.json())
//     .then(res=>console.log(res))

//deleting all objects
// var url ="http://localhost:3000/Employee"
// fetch(url)
//     .then(res=>res.json())
//     .then(res=>{
//         for(var obj of res){
//             fetch(`http://localhost:3000/Employee/${obj.id}`,{
//                 "method":"DELETE"
//             }).then(res=>{
//                 if(res.ok){
//                     console.log(`${obj.id} Object Deleted`)
//                 }
//                 else{
//                     console.log(res)
//                 }
//             })
//         }
//     })

var url ="http://localhost:3000/Employee?name=Mokshit"
fetch(url)
    .then(res=>res.json())
    .then(res=>{
        // fetch(`http://localhost:3000/Employee/${res[0].id}`,{
        //         "method":"DELETE"
        //     }).then(res=>{
        //         if(res.ok){
        //             console.log("Object Deleted.........")
        //         }
        //     })
        for(var obj of res){
            fetch(`http://localhost:3000/Employee/${obj.id}`,{
                "method":"DELETE"
            }).then(res=>{
                if(res.ok){
                    console.log(`${obj.id} Object Deleted`)
                }
                else{
                    console.log(res)
                }
            })
        }
    })