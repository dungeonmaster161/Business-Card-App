const express = require('express')
const cors = require('cors')
const { businessCard } = require('./db')
const { createBusinessCard } = require('./types')

const app = express()

app.use(express.json())
app.use(cors())

//Get all business card
app.get('/businessCards',async (req,res)=>{
    const businessCards  = await businessCard.find()
    res.status(200).json({
        data: businessCards
    })
})

//Add business card
app.post('/addBusinessCard',(req,res)=>{
    const createPayload = req.body
    console.log(createPayload);
    const parsePayload = createBusinessCard.safeParse(createPayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg:"Invalid input",
            error:parsePayload
        })
        return
    }
    res.status(200).json({
        msg:"Card is created"
    })
})

//Update business card
app.put('/updateBusinessCard',(req,res)=>{

})

app.listen(8080,()=>{
    console.log("App is running on port 8080")
})