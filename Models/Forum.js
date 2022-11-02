const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Forum = new Schema({
    author: 'string',
    comment:[{
        title: 'string',
        content: 'string',
    }],
    area:{
        countries: 'string',
        city: 'string',
    },
    title: 'string',
    created_at: Date.now,
})

module.exports = mongoose.model('forum',Forum)


