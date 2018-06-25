import * as express from "express";
import "reflect-metadata";
import service  from "./middlewares/server";
import {createConnection} from "typeorm";
import router from "./routers/routes"; // importa el archivo routes.ts, para poder ocupar las rutas del proyecto
import config from "./config/main"; // importa arcvhio main.ts, el cual debe tener todas las propiedaeds que serán propias de configuracion, conexion string, puertos, folder, credenciales, etc
import * as Entities from "./models/Index";

// init express (WebServer)
const app = express(); // se crea una variable que contega a express, para poder implementar el web server

const  cnx = "default"; /// 
createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "coleccion123",
    database: "dbcolec",
    entities: [
        Entities.coleccion,
        Entities.usuario,
        Entities.favoritocoleccion,
        Entities.item,
        Entities.favoritoitem,
        Entities.logitem,
        Entities.lotesubasta,
        Entities.amistad,
        Entities.favoritosubasta,
        Entities.loteventa,
        Entities.itemimagen,
        Entities.puja,
        Entities.venta,
        Entities.subasta
    ],
    synchronize: true,
    logging: false
}).then(connection => {
    // here you can start to work with your entities
}).catch(error => console.log(error)); 
 

service( app );
// routers

router( app );
// la importacion de routes, retorna una funcion, 
//la cual se utiliza para el direccionamiento e implementacion de rutas y activacion sobre express

// init server
let server;
server = app.listen( config.port, () => {
    console.log ( `server start in port ${config.port}`);//importa el port desde archivo config
});


