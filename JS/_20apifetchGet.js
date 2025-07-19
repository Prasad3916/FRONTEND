var url ="http://localhost:3000/users"
fetch(url)
    .then(response=>response.json()) 
    .then(data=>{
        for(var res of data){
            var {id,name,age}=res
            console.log(id,name,age)
        }
    })
    
var url ="http://localhost:3000/users/1"
fetch(url)
    .then(response=>response.json()) 
    .then(data=>{
        console.log(data)
    })

var url ="http://localhost:3000/users/?name=Pavan"
fetch(url)
    .then(response=>response.json()) 
    .then(data=>{
        console.log(data)
    })

var url ="http://localhost:3000/users/?age=21"
fetch(url)
    .then(response=>response.json()) 
    .then(data=>{
        console.log(data)
    })

    //getting data using queries and params
var url ="http://localhost:3000/users/?name=Prasad"
fetch(url)
    .then(response=>response.json()) 
    .then(data=>{
        console.log(data)
    })

var url ="http://localhost:3000/users/?name=Prasad&age=21"
fetch(url)
    .then(response=>response.json()) 
    .then(data=>{
        console.log(data)
    })

//Sorting data based on id in Ascending order
var url ="http://localhost:3000/users/?_sort=id"
fetch(url)
    .then(response=>response.json()) 
    .then(data=>{
        console.log(data)
    })
//Sorting data based on id in Descending order
var url ="http://localhost:3000/users/?_sort=id"
fetch(url)
    .then(response=>response.json()) 
    .then(data=>{
        console.log(data)
    })

//Sorting data based on name in Ascending order
var url ="http://localhost:3000/users/?_sort=name"
fetch(url)
    .then(response=>response.json()) 
    .then(data=>{
        console.log(data)
    })

//Sorting data based on name in descending order
var url ="http://localhost:3000/users/?_sort=-name"
fetch(url)
    .then(response=>response.json()) 
    .then(data=>{
        console.log(data)
    })
     

