 
 const http= require('http')
 const url='http://api.weatherstack.com/current?access_key=88834fb0231b149c3689d8d37eb2fc6a&query=40,-75&units=f'

 const request= http.request(url,(response)=> {
    
        let data=''

        response.on('data',(chunk)=> {
            data= data+chunk.toString()
        })


        response.on('end',()=> {
            const body= JSON.parse(data)
            console.log(body)
        })
 })

 request.on('error',(error)=>{
    console.log('an error', error)
 })
 request.end()