import * as Entities from "../models/Index";
import {getConnection} from "typeorm"; 
import config from "../config/main";
import { favoritocoleccion } from "../models/favoritocoleccion";
 
export async function getAll(req, res, next) { 

    let connection = getConnection();
      let favoritocoleccion = await connection.getRepository(Entities.favoritocoleccion).find();
 
    if ( favoritocoleccion.length > 0 ) {
        res.status(200).json(  favoritocoleccion  );
    }else{  
        res.status(404).json( { "error" : "No tiene coleccion" } );
    }
}
export async function getOne(req, res, next ) {
    const id = req.params.id;
    let connection = getConnection();
    let favoritocoleccion =  await connection.getRepository(Entities.favoritocoleccion).find({Id:id});
    
    if ( favoritocoleccion.length > 0 ) {
        res.status(200).json(  favoritocoleccion );
    }else{
        res.status(500).json( { "error" : "favorito coleccion no encontrada" } );
    }
}
export async function create(req, res, next ) {

await res.status(200).json({"success": "creaste una coleccion"});

}

export async function update(req, res, next ) {
    await res.status(200).json({"success": "actualizaste coleccion"});
    
} 