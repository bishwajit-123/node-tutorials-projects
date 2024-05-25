
const express = require('express')
const app = express()
const db = require('./db.js')
require('dotenv').config();
const passport = require('./auth.js');


const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000; // Use 3000 as a default



// Middleware Function
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
    next(); // Move on to the next phase
}
app.use(logRequest);

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', {session: false})



// This is express router
const personRoutes = require('./Personroutes/PersonRoutes.js');
app.use('/person', personRoutes);

const menuRoutes = require('./Menuroutes/MenuRoutes.js');
app.use('/MenuItem', menuRoutes);





app.get('/', function(req, res){
    res.send("Items are ready")
});
app.listen(PORT, () =>{
    console.log('listening on port 3000');
    })