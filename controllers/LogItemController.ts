import * as Entities from "../models/Index";
import {getConnection} from "typeorm"; 
import config from "../config/main";
import { logitem } from "../models/logitem";
 
export async function getAll(req, res, next) { 

    let connection = getConnection();
      let logitem = await connection.getRepository(Entities.logitem).find();
 
    if ( logitem.length > 0 ) {
        res.status(200).json(  logitem  );
    }else{  
        res.status(404).json( { "error" : "No tiene item" } );
    }
}
export async function getOne(req, res, next ) {
    const id = req.params.id;
    let connection = getConnection();
    let logitem =  await connection.getRepository(Entities.logitem).find({Id:id});
    
    if ( logitem.length > 0 ) {
        res.status(200).json(  logitem );
    }else{
        res.status(404).json( { "error" : "item no encontrado" } );
    }
}
export async function create(req, res, next ) {

await res.status(200).json({"success": "creaste un logitem"});

}

export async function update(req, res, next ) {
    await res.status(200).json({"success": "actualizaste logitem"});
    
} 