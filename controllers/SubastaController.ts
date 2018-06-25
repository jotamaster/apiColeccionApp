import * as Entities from "../models/Index";
import {getConnection} from "typeorm"; 
import config from "../config/main";
import { subasta } from "../models/subasta";
 
export async function getAll(req, res, next) { 

    let connection = getConnection();
      let subasta = await connection.getRepository(Entities.subasta).find();
 
    if ( subasta.length > 0 ) {
        res.status(200).json(  subasta  );
    }else{  
        res.status(404).json( { "error" : "No tiene subasta" } );
    }
}
export async function getOne(req, res, next ) {
    const id = req.params.id;
    let connection = getConnection();
    let subasta =  await connection.getRepository(Entities.subasta).find({Id:id});
    
    if ( subasta.length > 0 ) {
        res.status(200).json(  subasta );
    }else{
        res.status(404).json( { "error" : "subasta no encontrado" } );
    }
}
export async function create(req, res, next ) {

await res.status(200).json({"success": "creaste una subasta"});

}

export async function update(req, res, next ) {
    await res.status(200).json({"success": "actualizaste subasta"});
    
} 