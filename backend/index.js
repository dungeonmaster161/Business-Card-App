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
app.post('/addBusinessCard',async (req,res)=>{
    const createPayload = req.body
    const parsePayload = createBusinessCard.safeParse(createPayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg:"Invalid input",
            error:parsePayload
        })
        return
    }
    const addBusinessCard = await businessCard.create(req.body)
    res.status(200).json({
        msg:"Card is created",
        success:true
    })
})

//Update business card
app.put('/updateBusinessCard',async (req,res)=>{
    const updatePayLoad = req.body
    const parsePayload = createBusinessCard.safeParse(updatePayLoad)
    if(!parsePayload.success){
        res.status(411).json({
            msg:"Invalid input",
            error:parsePayload
        })
        return
    }
    const updateBusinessCard = await businessCard.findOneAndUpdate({_id:updatePayLoad.id},req.body)
    res.status(204).json({
        msg:"Card is updated"
    })
})

app.delete('/deleteBusinessCard',async (req,res)=>{
    const deletePayLoad = req.body
    const deleteBusinessCard = await businessCard.findOneAndDelete({_id:deletePayLoad.id})
    res.status(200).json({
        msg:"Card is deleted"
    })
})

app.listen(8080,()=>{
    console.log("App is running on port 8080")
})