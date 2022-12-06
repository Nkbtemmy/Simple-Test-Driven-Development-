import express from 'express';
import morgan from 'morgan'
import bodyParser from 'body-parser'
import routers from './routes'
import config from 'config'

let app = express();
let port = 8081;
//don't show the log when it is test
if(config.util.getEnv('NODE_ENV') !== 'test') {
    app.use(morgan('tiny'));
    port =8080 
}

app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  
app.use(routers)

app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing