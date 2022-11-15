const mongoose = require('mongoose');
const Schema = mongoose.Schema; 





const Register = new Schema({
    email:{
        type:"string",
    },
    password:{
        type: 'Number',

    }
})

module.exports = mongoose.model('Register', Register);
