var table=document.createElement("table")
document.body.append(table)
var row=document.createElement("tr")
table.appendChild(row)
var thead=["id","category","price"]
for(var head of thead){
    var theader=document.createElement("th")
    theader.innerText=head
    row.appendChild(theader)
}
var rowvalues=[
    [1,"men's clothing",109.95],
    [2,"jewelery",695],
    [3,"electronics",64]
]

for(var value of rowvalues){
    var row=document.createElement("tr")
    for(var cell of value){
        var td=document.createElement("td")
        td.innerHTML=cell
        row.appendChild(td)
    }
    table.appendChild(row)
}