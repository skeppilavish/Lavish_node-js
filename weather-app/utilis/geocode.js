// Now we have created lib and able to fetch direct to run for any place






const request= require('postman-request')
const geocode= (address, callback)=>{

    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+ '.json?access_token=pk.eyJ1IjoibGllby0yIiwiYSI6ImNsazg1cXYwODBpbjAzanFyNnM3ampqMjEifQ.X5dGRg3lBzSzRQbY6F-UsA&limi=1'
    request({url:url, json:true},(error,response)=>{
        if(error){
            callback('Unable to connect',undefined)
        }
        else if(response.body.features.length===0)
        {
            callback("cant find location",undefined)
        }
        else{
            callback(undefined,{
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports=geocode