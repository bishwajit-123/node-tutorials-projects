// express with Mongoose schema
const mongoose = require('mongoose');
const personSchema = new mongoose.Schema({
    name: {
            type: String,
            required: true
    },
    age:{
         type: Number, 

    },
    work:{
        type: String,
        enum: ['chef', 'manager', 'waiter'],
        required: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,

    },
    address:{
        type: String,

    },

    salary:{
        type: Number,

    }
})

const Person = mongoose.model('Person', personSchema);

module.exports = Person;

