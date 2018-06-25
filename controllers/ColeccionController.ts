import * as Entities from "../models/Index";
import {getConnection} from "typeorm"; 
import config from "../config/main";
import { coleccion } from "../models/coleccion";
import {getRepository} from "typeorm";
import * as jwt from "jwt-simple";
 
export async function getAll(req, res, next) { 

    let connection = getConnection();
    let coleccion = await connection.getRepository(Entities.coleccion).find();
    
 
    if ( coleccion.length > 0 ) {
        res.status(200).json(  coleccion  );
    }else{  
        res.status(500).json( { "error" : "No tiene coleccion :c" } );
    }
}


export async function getOne(req, res, next ) {
    const id = req.params.id;
    let connection = getConnection();
    let coleccion =  await connection.getRepository(Entities.coleccion).find({Id:id});
    
    if ( coleccion.length > 0 ) {
        res.status(200).json(  coleccion );
    }else{
        res.status(500).json( { "error" : "coleccion no encontrada" } );
    }
}


export async function create(req, res, next ) {
    let connection = getConnection();
    let token =  req.headers.authorization.split(" ")[1];
    let payload = await jwt.decode(token, config.encryp_secret);
    let idusuario = payload.id;
    let nuevaColeccion = new Entities.coleccion();
    nuevaColeccion.Nombre = req.body.nombre;
    nuevaColeccion.Detalle = req.body.detalle;
    nuevaColeccion.Fotos   = req.body.fotos;
    nuevaColeccion.Tipo    = req.body.tipo;
    nuevaColeccion.IdUsuario = await connection.getRepository(Entities.usuario).findOne({Id:idusuario});
    console.log(payload.id);
    await connection.getRepository(Entities.coleccion).save(nuevaColeccion);
                res.status(200).json({
                    "success": "Coleccion agregado con dexito  !"
           });

}



export async function update(req, res, next ) {
    await res.status(200).json({"success": "actualizaste coleccion"});
    
} 