function readingBook(){
console.log("readingBook..........1")
}
function writingBook(){
console.log("writingBook..........")
readingBook()
}
function printingData(){
console.log("printingData..........")
editingBook()
}
function editingBook(){
console.log("editingBook..........")
readingStory()
learningJS()
}
function readingStory(){
console.log("readingStory..........")
}
function learningJS(){
console.log("learningJS..........")
readingStory()
}
function readingBook(){
console.log("readingBook..........2")
printingData()
}
writingBook()
// console.log(printData)