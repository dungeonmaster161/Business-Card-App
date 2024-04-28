const mongoose = require('mongoose')

mongoose.connect('mongodb://admin:Shikhar123@ac-6h8j4vb-shard-00-00.ug1y1jt.mongodb.net:27017,ac-6h8j4vb-shard-00-01.ug1y1jt.mongodb.net:27017,ac-6h8j4vb-shard-00-02.ug1y1jt.mongodb.net:27017/?ssl=true&replicaSet=atlas-8tgq48-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0')

const businessCardSchema = new mongoose.Schema({
    name:String,
    description:String,
    socialMedia:[{
        handleName:String,
        handleLink:String
    }],
    interest:[string]
})

const businessCard = mongoose.model('businessCards',businessCardSchema)

module.exports = {
    businessCard
}