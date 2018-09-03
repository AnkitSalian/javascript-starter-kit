import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler =webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{//Webpack integration with Express
    noInfo : true,
    publicPath : config.output.publicPath
}));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.get('/users', function(req, res){
    res.json([
        {"id":1, "firstName": "Ankit", "lastName":"Salian", "email": "ankit@goole.com"},
        {"id":2, "firstName": "Anit", "lastName":"Salian", "email": "anit@goole.com"},
        {"id":3, "firstName": "Ashok", "lastName":"Salian", "email": "ashok@goole.com"}
    ]);
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    }
    else{
        open('http://localhost:' + port);
    }
});
