const express = require('express')
const app = express()
const PORT = 8000;

const musicians = {
    'olamide':{
        'birthname':'Olamide Gbenga Adedeji',
        'aka':'Olamide Baddo',
        'birthdate':'15 March 1989 (age 35)',

    },
    'davido':{
        'birthname':'David Adedeji Adeleke',
        'aka':'OBO',
        'birthdate':'November 21, 1992 (age 31)',

    },
    'dylan':{
        'birthname':'dylan',
        'aka':'dylan',
        'birthdate':'dylan',
    }
}

app.get('/api/:rapperName',(request,response) => {
    const rapper = request.params.rapperName.toLowerCase()

    if(musicians[rapper]){
    response.json(musicians[rapper])
    }else{
        response.json(musicians['dylan'])
    }
   
})

app.get('/',(request,response)=>{
response.sendFile(__dirname + '/index.html')
})

app.listen(PORT, () => {
    console.log(`This server is running on PORT ${PORT} better go get it`)
})