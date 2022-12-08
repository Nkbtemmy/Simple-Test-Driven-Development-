import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import routers from './routes';
import config from 'config';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config({ override: true });

let app = express();
let port = process.env.PORT || (process.env.NODE_ENV == "test" ? 8081:8080);
//don't show the log when it is test
if(config.util.getEnv('NODE_ENV') !== 'test') {
    app.use(morgan('tiny'));
}
app.use(bodyParser.json());       
app.use(cors());                              
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  
app.use(routers)

app.listen(port);
console.log("Listening on port " + `localhost:${port}`);

module.exports = app; // for testing