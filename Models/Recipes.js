const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Recipes = new Schema({
    title:'string',
    content: 'string',
    desription: {
        time: 'string',
        piece: 'number',
    }
})


module.exports = mongoose.model('recipes',Recipes)
