import * as Entities from "../models/Index";
import {getConnection} from "typeorm"; 
import config from "../config/main";
import { favoritosubasta } from "../models/favoritosubasta";
 
export async function getAll(req, res, next) { 

    let connection = getConnection();
      let favoritosubasta = await connection.getRepository(Entities.favoritosubasta).find();
 
    if ( favoritosubasta.length > 0 ) {
        res.status(200).json(  favoritosubasta  );
    }else{  
        res.status(404).json( { "error" : "No tiene favorito subasta" } );
    }
}
export async function getOne(req, res, next ) {
    const id = req.params.id;
    let connection = getConnection();
    let favoritosubasta =  await connection.getRepository(Entities.favoritosubasta).find({Id:id});
    
    if ( favoritosubasta.length > 0 ) {
        res.status(200).json(  favoritosubasta );
    }else{
        res.status(404).json( { "error" : "favorito subasta no encontrada" } );
    }
}
export async function create(req, res, next ) {

await res.status(200).json({"success": "creaste un favorito"});

}

export async function update(req, res, next ) {
    await res.status(200).json({"success": "actualizaste favorito subasta"});
    
} 