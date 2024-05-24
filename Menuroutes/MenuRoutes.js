const menu = require('../MenuItem');
const express = require('express');
const router = express.Router();

router.post('/', async(req, res) => {
    try{
        const data = req.body;
        const menudata = new menu(data);

        const savedMenu = await menudata.save();
        console.log('Saved person to database');
        res.status(201).json(savedMenu);

    }catch(error){
        console.error('Error saving person:', error);
 res.status(500).json({ error: 'Internal server error' });

    }
})


router.get('/:taste', async (req, res) =>{
    try{
        const tasteType = req.params.taste;

    if(tasteType == 'sweet' || tasteType == 'spicy' || tasteType == 'sour'){
        const response = await menu.find({taste: tasteType});
        console.log("response fetched");
        res.status(200).json(response)

    }
    else{
        res.status(404).json({ error: 'Invalid work type' });
    }

    }catch(error){
        console.error('Error saving person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})


router.get('/', async (req, res) => {
    try {
    // Use the Mongoose model to fetch all persons from the
    const data  = await menu.find();
    console.log('data fetched');
    res.status(200).json(data);
    } catch (error) {
    console.error('Error fetching persons:', error);
    res.status(500).json({ error: 'Internal server error' });
    }
    });

    module.exports = router;