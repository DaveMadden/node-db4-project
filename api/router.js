const express = require('express');
const Recipe = require('./model');

const router = express.Router();

router.get('/:id', (req, res, next)=>{
    console.log("getting id of ", req.params.id)
    Recipe.getRecipeById(req.params.id)
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(next)
})

module.exports = router;