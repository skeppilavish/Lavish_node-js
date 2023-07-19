// // Object property shorthand

const { Console } = require("console")


// const name="Andres"
// const userAge=27

// const user={
//     name: name,
//     age: userAge,
//     location:'Philadelphia'
// }


// console.log(user)
const product={
        label:'Red Notebook',
        price:3,
        stock: 201,
        saleprice:undefined,
        rating: 4.2
    }
//cons label= product.label
//condt stock= product.stock

// const{label.productLabel, stock, rating =5}=productconsole.log(productLabel)
// Console.log(productLabel)
// console.log(stock)
// console.log(rating)


const transaction =(type,{label,stock})=> {
    console.log(type,label,stock)
}


transaction('order', product)