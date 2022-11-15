const mongoose = require('mongoose');
const Schema= mongoose.Schema;


const About = new Schema({
    'who_are_we': 'string',
    'what_are_we_make': 'string',
    'goals': 'string',
});

module.exports=mongoose.model('About',About);
