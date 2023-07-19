const request= require('postman-request')
const  chalk =require('chalk')
const geocode= require('./utilis/geocode')
const forecast= require('./utilis/forecast')

//const url ='http://api.weatherstack.com/current?access_key=88834fb0231b149c3689d8d37eb2fc6a&query='

// request({url:url, json:true},(error,response)=>{
//     // console.log(response.body.current)
//     //console.log(error)   want easy output

//     if(error)
//     {
//         console.log(chalk.bold.red.inverse("Unable to connect"))
//     }
//     else if(response.body.error)
//     {
//         console.log(response.body.error.info)
//     }
//     else
//     {
//         console.log(response.body.current.weather_descriptions[0]+ '\n' + "Temparture: "+ response.body.current.temperature)
//         console.log("But Feels like "+ response.body.current.feelslike)   
//     }
// })


// geocoding = to take address and convert in latitude and longitude


// const wurl= 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGllby0yIiwiYSI6ImNsazg1cXYwODBpbjAzanFyNnM3ampqMjEifQ.X5dGRg3lBzSzRQbY6F-UsA'
// request({url:wurl,json:true},(error,response)=>{

//     if(error)
//     {
//         console.log("Error aagya")
//     }
//     else if(response.body.features.length===0)  // give error like location latitude etc where it gives 0 feature .. if we edit something in token it not able to fetch
//     {
//         console.log("Wrong link daaal diya hai aapne")
//     }
//     else{
//         console.log("Coordinates are: Latitude " + response.body.features[0].center[1])
//         console.log("Coordinates are: Longitude " + response.body.features[0].center[0])
//     }
//     //console.log("Coordinates are: Latitude " + response.body.features[0].center[1])
//     //console.log("Coordinates are: Longitude " + response.body.features[0].center[0])

// })




// geocode('Boston',(error,data)=>{
//     console.log("error,Error",error)
//     console.log('Data', data)
// })


// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })



const address= process.argv[2]

if(!address)
{
    console.log('Please provide ann address')
}
else{
    geocode(address,(error,data)=>{
        if(error){
            return console.log(error)
        }
        forecast(data.latitude, data.longitude , (error, forecastData) => {
            if(error)
            {
                return console.log(error)
            }      
            
            console.log(data.location)
            console.log(forecastData)
        })
    })

}

// geocode('Boston',(error,data)=>{
//     console.log("error,Error",error)
//     console.log('Data', data)
//     forecast(data.latitude, data.longitude , (error, data) => {
//         console.log('Error', error)
//         console.log('Data', data)
//       })
// })


geocode(address,(error,{latitude,longitude,location}={})=>{

})
