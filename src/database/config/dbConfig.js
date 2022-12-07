let mongoose = require('mongoose');
let config = require('config');

let DBHost = config.util.getEnv('NODE_ENV') !== 'test' ? "mongodb://127.0.0.1:27017/Testing_dev?authSource=admin":"mongodb://127.0.0.1:27017/Testing?authSource=admin";

mongoose.connect(DBHost,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    // useFindAndModify:false,
    // useCreateIndex:true,
    // strictQuery:false
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