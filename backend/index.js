const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

//Get all business card
app.get('/',(req,res)=>{

})

//Add business card
app.post('/addBusinessCard',(req,res)=>{

})

//Update business card
app.put('/updateBusinessCard',(req,res)=>{

})

app.listen(8080,()=>{
    console.log("App is running on port 8080")
})