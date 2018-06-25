import * as Entities from "../models/Index";
import {getConnection} from "typeorm"; 
import config from "../config/main";
import { amistad } from "../models/amistad";
 
export async function getAll(req, res, next) { 

    let connection = getConnection();
      let amistad = await connection.getRepository(Entities.amistad).find();
 
    if ( amistad.length > 0 ) {
        res.status(200).json(  amistad  );
    }else{  
        res.status(500).json( { "error" : "No tiene Amistad" } );
    }
}
export async function getOne(req, res, next ) {
    const id = req.params.id;
    let connection = getConnection();
    let amistad =  await connection.getRepository(Entities.amistad).find({Id:id});
    
    if ( amistad.length > 0 ) {
        res.status(200).json(  amistad );
    }else{
        res.status(500).json( { "error" : "amistad no encontrada" } );
    }
}
export async function create(req, res, next ) {

await res.status(200).json({"success": "creaste una amistad"});

}

export async function update(req, res, next ) {
    await res.status(200).json({"success": "actualizaste amistad"});
    
} 