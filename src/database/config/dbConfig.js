let mongoose = require('mongoose');
let config = require('config');
import dotenv from 'dotenv';
dotenv.config();

let DBHost = process.env.NODE_ENV !== 'test' ? process.env.DB_DEV:process.env.DB_TEST;

mongoose.connect(DBHost,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
},
(err) => {
    if (!err) {
        console.log('Successfully Established Connection with MongoDB')
    }
    else {
        console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
    }
});
module.exports = mongoose;