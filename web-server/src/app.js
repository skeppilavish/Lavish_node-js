const path= require('path')
const express = require('express')
const hbs=require('hbs')
const geocode=require('./utilis/geocode')
const forecast = require('./utilis/forecast')


const app = express()


// definr paths for express config
console.log(__dirname) // directory location
const publicDirectorypath= path.join(__dirname, '../public')
const viewPath= path.join(__dirname,"../template/views")
const partialPath =path.join(__dirname,'../template/partials')


// setup handlebars engine and viewa location
app.set('view engine','hbs')
app.set("views",viewPath)
hbs.registerPartials(partialPath)

// static directory to use
console.log(publicDirectorypath);
app.use(express.static(publicDirectorypath))


app.get('/',(req,res)=> {
    res.render('index',{
        title:'Weather App',
        location:"gurgaon"
    })  // now accessible by index.hbs
})

// dynamic hbs file   /// inhe route handler kehte hai
app.get('/about',(req,res)=> {
    res.render('about',{
        title:'about',
        location:"gurgaon"
    })  // now accessible by index.hbs
})

app.get('/help',(req,res)=> {
    res.render('help',{
        title:'help page',
        name:"Lavish this side"
    })  // now accessible by index.hbs
})


//http://localhost:3000/products?search=ddd
app.get("/products",(req,res)=> {
    if(!req.query.search){
        return res.send({
            error: "Pls provide search term "
        })
    }
    console.log(req.query.search) // display in terminal
        res.send({
            products:[]
        })
    
})

app.get('/weather',(req,res)=> {
    if(!req.query.address)
    {
        res.send({
            error: "Pls mention ythe address"
        })
    }

    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error)
        {
            return res.send({error})
        }

        forecast(latitude,longitude,(error,forecastData)=>{
            if(error)
            {
                return res.send({error})
            }

            res.send({
                forecast: forecastData,
                location,
                address:req.query.address
            })
        })
    })


    // console.log(req.query.address)
    // res.send([{forecase:"dddd"},{location:"ddd"},{address:"req.query.address"}]) 
})

// when nothing match then it gives error with * thsi as wild card
app.get('*',(req,res)=>
{
    res.render('404',{
        title:'page',
        msg: "error msg"
    })
})



// req= request ...... 
// res = response



// app.get('/help',(req,res)=> {
//     //res.send("I m a helper page")
//     res.send([{
//     name: 'lavsih',
//     age:23}])// array
// })

// app.get('/weather',(req,res)=> {
//     res.send([{forecase:"dddd"},{location:"ddd"}]) 
// })

// app.get('/about',(req,res)=> {
//     res.send("<h2>Mei hoon about page</h2>")
// })

// app.com and shows multiple pages c

// app.com/help
//app.com/about


app.listen(3000,()=>{
    console.log('server is at port 3000.')
})