

const mongoose = require('mongoose');
require('dotenv').config();
// Define mongodb url
const mongoURL =  process.env.MONGODB_LOCAL;
// const mongoURL = process.env.MONGODB_GLOBAL;

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