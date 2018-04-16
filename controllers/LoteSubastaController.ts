import * as Entities from "../models/Index";
import {getConnection} from "typeorm"; 
import config from "../config/main";
import { lotesubasta } from "../models/lotesubasta";
 
export async function getAll(req, res, next) { 

    let connection = getConnection();
      let lotesubasta = await connection.getRepository(Entities.lotesubasta).find();
 
    if ( lotesubasta.length > 0 ) {
        res.status(200).json(  lotesubasta  );
    }else{  
        res.status(404).json( { "error" : "No tiene lote subasta" } );
    }
}
export async function getOne(req, res, next ) {
    const id = req.params.id;
    let connection = getConnection();
    let lotesubasta =  await connection.getRepository(Entities.lotesubasta).find({Id:id});
    
    if ( lotesubasta.length > 0 ) {
        res.status(200).json(  lotesubasta );
    }else{
        res.status(404).json( { "error" : "lote subasta no encontrado" } );
    }
}
export async function create(req, res, next ) {

await res.status(200).json({"success": "creaste un lote subasta"});

}

export async function update(req, res, next ) {
    await res.status(200).json({"success": "actualizaste lotesubasta"});
    
} 