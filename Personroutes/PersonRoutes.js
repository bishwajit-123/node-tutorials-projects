const person = require('../Person')
const express = require('express');
const router = express.Router();

router.post('/', async(req, res) => {
    try{
        const newPersonData = req.body;
        const newPerson = new person(newPersonData);

        const savedPerson = await newPerson.save();
        console.log('Saved person to database');
        res.status(201).json(savedPerson);

    }catch(error){
        console.error('Error saving person:', error);
 res.status(500).json({ error: 'Internal server error' });

    }
})


router.get('/:work', async(req, res) =>{
    try{
        const workType = req.params.work;
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
        const response = await person.find({work: workType});
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
    const newPersonData  = await person.find();
    console.log('data fetched');
    res.status(200).json(newPersonData);
    } catch (error) {
    console.error('Error fetching persons:', error);
    res.status(500).json({ error: 'Internal server error' });
    }
    });
    
  // Addedgit
    module.exports = router;