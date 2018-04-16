import * as express from "express";  
import * as bodyParser from "body-parser";  
import * as logger from "morgan";
import * as helmet from "helmet";

export default (app) => { 
    app.use(  bodyParser.urlencoded( { extended: false} ) );  
    app.use(  bodyParser.json() );  
    app.use(  logger( "dev" ) );  
    app.use(  helmet()  );  
    
    app.use(function(req, res, next) {

   // activa el web server para que soporte distintos verbos desde distintos origenes
   // se activa el acceso como API
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With");
        if (req.method == 'OPTIONS') {
            res.send(200);
        }
        else {
            next();
        } 
    });
};