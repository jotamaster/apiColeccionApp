import * as Entities from "../models/Index";
import {getConnection} from "typeorm"; 
import config from "../config/main";
import { favoritoitem } from "../models/favoritoitem";
 
export async function getAll(req, res, next) { 

    let connection = getConnection();
      let favoritomoneda = await connection.getRepository(Entities.favoritoitem).find();
 
    if ( favoritomoneda.length > 0 ) {
        res.status(200).json(  favoritomoneda  );
    }else{  
        res.status(404).json( { "error" : "No tiene favorito monedas" } );
    }
}
export async function getOne(req, res, next ) {
    const id = req.params.id;
    let connection = getConnection();
    let favoritomoneda =  await connection.getRepository(Entities.favoritoitem).find({Id:id});
    
    if ( favoritomoneda.length > 0 ) {
        res.status(200).json(  favoritomoneda );
    }else{
        res.status(404).json( { "error" : "favorito moneda no encontrada" } );
    }
}
export async function create(req, res, next ) {

await res.status(200).json({"success": "creaste una coleccion"});

}

export async function update(req, res, next ) {
    await res.status(200).json({"success": "actualizaste coleccion"});
    
} 