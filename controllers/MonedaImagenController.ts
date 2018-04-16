import * as Entities from "../models/Index";
import {getConnection} from "typeorm"; 
import config from "../config/main";
import { monedaimagen } from "../models/monedaimagen";
 
export async function getAll(req, res, next) { 

    let connection = getConnection();
      let monedaimagen = await connection.getRepository(Entities.monedaimagen).find();
 
    if ( monedaimagen.length > 0 ) {
        res.status(200).json(  monedaimagen  );
    }else{  
        res.status(404).json( { "error" : "No tiene monedaimagen" } );
    }
}
export async function getOne(req, res, next ) {
    const id = req.params.id;
    let connection = getConnection();
    let monedaimagen =  await connection.getRepository(Entities.monedaimagen).find({Id:id});
    
    if ( monedaimagen.length > 0 ) {
        res.status(200).json(  monedaimagen );
    }else{
        res.status(404).json( { "error" : "monedaimagen no encontrado" } );
    }
}
export async function create(req, res, next ) {

await res.status(200).json({"success": "creaste un moneda imagen"});

}

export async function update(req, res, next ) {
    await res.status(200).json({"success": "actualizaste moneda imagen"});
    
} 