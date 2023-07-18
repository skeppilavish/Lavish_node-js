
const fs= require('fs');


// create object
 
// const book= {
//     title: "Node js training booklet",
//     author: " Lavish "

// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)


// const parseData=JSON.parse(bookJSON)
// console.log(parseData.author)  // written parsed data 


// fs.writeFileSync("1-json.json", bookJSON)
// const dataBuffer= fs.readFileSync("1-json.json")
// console.log(dataBuffer.toString()) 



const dataBuffer=fs.readFileSync("1-json.json")
console.log(dataBuffer)
const parseData = JSON.parse(dataBuffer.toString())
console.log(parseData);


parseData.name=" Nahi bataunga"
parseData.age=99
const updat= JSON.stringify(parseData)
fs.writeFileSync('1-json.json', updat)

const dataBuff=fs.readFileSync("1-json.json")
console.log(JSON.parse(dataBuff.toString()))