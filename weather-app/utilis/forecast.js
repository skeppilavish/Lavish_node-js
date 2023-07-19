const { SocketAddress } = require('net')
const request= require('postman-request')
const { callbackify } = require('util')

const forecast=(latitude,longitude,callback)=>{
    const url= 'http://api.weatherstack.com/current?access_key=88834fb0231b149c3689d8d37eb2fc6a&query=' + latitude+','+ longitude + '&units=f'
    request({url:url, json:true},(error,response)=>{
        if(error)
        {
            callback("unable to connect", undefined)
        }
        else if(response.body.error)
        {
            callback("isssue",response.body.error.info)

        }
        else{
             callback(undefined,{
                Precipitation: response.body.current.precip ,
                Wind_Speed:response.body.current.wind_speed,
                Humidity: response.body.current.humidity,
                place: response.body.location.name
            })
        }
    })
}

module.exports=forecast
