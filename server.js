// const notes = require('./notes')
// const fs = require('fs');
// const os = require('os');
// console.log(os.userInfo())

// var _ = require('lodash');
// function array(numbers){
//     const even = _.filter(numbers, num=>num%2===0);
//     return _.sumBy(even)
// }
// const numbers = [1,2,5,6];
// console.log(array(numbers));

const express = require('express')
const app = express()
const db = require('./db.js')
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000; // Use 3000 as a default
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
// app.listen(3000) 

// app.get('/', function(req, res) {
//     var customizedData = {
//         name : "sony",
//         mode: 123456789,

// };
// res.json(customizedData);
// });
// app.listen(3000) 



// This is express router
const personRoutes = require('./Personroutes/PersonRoutes.js');
app.use('/person', personRoutes);

const menuRoutes = require('./Menuroutes/MenuRoutes.js');
app.use('/MenuItem', menuRoutes);





app.get('/items', function(req, res){
    res.send("Items are ready")
});
app.listen(PORT, () =>{
    console.log('listening on port 3000');
    })