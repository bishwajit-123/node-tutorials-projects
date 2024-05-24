

const mongoose = require('mongoose');
// Define mongodb url
const mongoURL = 'mongodb://localhost:27017/hotels'

// set up connection o
mongoose.connect(mongoURL,{
    useNewUrlParser : true,
     useUnifiedTopology : true
}
)

const db = mongoose.connection;

// Message 

db.on('connected',() =>{
    console.log('Connection Established')
})

db.on('error',(error) =>{
    console.log('Connection Established',error)
})

db.on('disconnected',() =>{
    console.log('disconnected MongoDb')
})
module.exports = db;