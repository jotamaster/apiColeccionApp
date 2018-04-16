import * as Entities from "../models/Index";
import {getConnection} from "typeorm"; 
import config from "../config/main";
import { coleccion } from "../models/coleccion";
import {getRepository} from "typeorm";
 
export async function getAll(req, res, next) { 

    let connection = getConnection();
    let coleccion = await connection.getRepository(Entities.coleccion).find();
    
 
    if ( coleccion.length > 0 ) {
        res.status(200).json(  coleccion  );
    }else{  
        res.status(500).json( { "error" : "No tiene coleccion" } );
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

await res.status(200).json({"success": "creaste una coleccion"});

}

export async function update(req, res, next ) {
    await res.status(200).json({"success": "actualizaste coleccion"});
    
} 