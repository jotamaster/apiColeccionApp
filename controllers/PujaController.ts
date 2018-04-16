import * as Entities from "../models/Index";
import {getConnection} from "typeorm"; 
import config from "../config/main";
import { puja } from "../models/puja";
 
export async function getAll(req, res, next) { 

    let connection = getConnection();
      let puja = await connection.getRepository(Entities.puja).find();
 
    if ( puja.length > 0 ) {
        res.status(200).json(  puja  );
    }else{  
        res.status(404).json( { "error" : "No tiene puja" } );
    }
}
export async function getOne(req, res, next ) {
    const id = req.params.id;
    let connection = getConnection();
    let puja =  await connection.getRepository(Entities.puja).find({Id:id});
    
    if ( puja.length > 0 ) {
        res.status(200).json(  puja );
    }else{
        res.status(404).json( { "error" : "puja no encontrado" } );
    }
}
export async function create(req, res, next ) {

await res.status(200).json({"success": "creaste un puja"});

}

export async function update(req, res, next ) {
    await res.status(200).json({"success": "actualizaste puja"});
    
} 