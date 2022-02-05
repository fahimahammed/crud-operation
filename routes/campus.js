const express = require('express');
const router = express.Router();
const Campus = require('../models/campus');

router.get('/user', async (req, res) => {
    try {
        const users = await Campus.find();
        res.json(users); 
    }
    catch(err){
        res.send(err); 
    }
})


router.post('/user', async (req, res) => {
    const user = new Campus({
        name: req.body.name,
        age: req.body.age,
        result: req.body.result
    })
    try {
        const postUser = await user.save();
        res.json(postUser);
        console.log(res.statusCode);
    }
    catch(err){
        res.send(err);
        console.log(res.statusCode);
    }
})

router.get('/user/:id', async (req, res) => {
    try {
        const user = await Campus.findById(req.params.id);
        res.json(user); 
    }
    catch(err){
        res.send(err); 
    }
})

router.patch('/user/:id', async (req, res) => {
    try{
        const user = await Campus.findById(req.params.id);
        user.result = req.body.result;
        user.age = req.body.age;
        const updateUser = await user.save();
        res.json(updateUser);
    }
    catch(err){
        res.send(err); 
    }
})


router.delete('/user/:id', async (req, res) => {
    try{
        const user = await Campus.findByIdAndDelete(req.params.id);
        res.json("Deleted...");

    }
    catch(err){
        res.send(err); 
    }
})

module.exports = router;