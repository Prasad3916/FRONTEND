var obj={"one":1,"two":2,"three":3,"four":4,"five":5}
//Accessing
console.log(obj)
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(obj.one)
console.log(obj["five"])
var movie={"name":"Devara","director":"K Siva","Hero":"NTR","Heroine":"j Kapoor","budget":"500cr","producer":"NTR Arts"}
console.log(movie)
//Updating
movie.budget='520cr'
console.log(movie)
movie["budget"]='550cr'
console.log(movie)
//Adding New Key Value Pair
movie.Heroremuneration='100cr'
console.log(movie)
movie.HeroInfo={
    heroname:"Jr NTR",
    movieResult:"BlockBuster",
    parts:2,
    profit:"300cr",
    breakeven:"3days"
}
console.log(movie)

console.log(movie.HeroInfo.heroname)
console.log(movie.HeroInfo.movieResult)
console.log()
//Iterating Keys In Object
for(key in movie){
    if(key=="HeroInfo"){
        console.log("Movie Info")
        for(keys in movie.HeroInfo){
            console.log(keys," > ",movie.HeroInfo[keys])
        }
    }
    else{
        console.log(movie[key])
    }
}
console.log()
console.log(movie)
console.log()
//Deleting Key Value Pair
delete movie["HeroInfo"]["parts"]
console.log(movie)


//Destructuring
var {name,director,Hero,HeroInfo:{heroname,movieResult,profit,breakeven}}=movie
console.log(name)
console.log(director)
console.log(Hero)
console.log(heroname)
console.log(movieResult)
console.log(profit)
console.log(breakeven)

var obj3=Object.assign({name:"prasad"})
var obj4=Object.fromEntries([["name","prasad"]])
var obj5=Object.create({name:"prasad"})
// obj5.name="Prasad"
console.log(obj3)
console.log(obj4)
console.log(obj5)
console.log(obj3.name)
console.log(obj4.name)
console.log(obj5.name)

console.log()
var obj1={"state":"TG"}
var obj2=obj1
console.log(obj1)
console.log(obj2)
//Shallow Copy
obj2.state="AP"
console.log()
console.log(obj1)
console.log(obj2)