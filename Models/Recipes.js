const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Recipes = new Schema({
    title:'string',
    content: 'string',
    active: {
        default:true,
        type: 'boolean',
    },
    description: {
        timer: 'string',
        piece: 'number',
        service: 'string',
    },
    comment:[{
        author: 'string',
        content: 'string',
    }],
    created_at:{
        type: Date,
        default: Date.now,
    }
})


module.exports = mongoose.model('recipes',Recipes)
