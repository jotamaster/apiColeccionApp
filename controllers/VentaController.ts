import * as Entities from "../models/Index";
import {getConnection} from "typeorm"; 
import config from "../config/main";
import { venta } from "../models/venta";
 
export async function getAll(req, res, next) { 

    let connection = getConnection();
      let venta = await connection.getRepository(Entities.venta).find();
 
    if ( venta.length > 0 ) {
        res.status(200).json(  venta  );
    }else{  
        res.status(404).json( { "error" : "No tiene Venta" } );
    }
}
export async function getOne(req, res, next ) {
    const id = req.params.id;
    let connection = getConnection();
    let venta =  await connection.getRepository(Entities.venta).find({Id:id});
    
    if ( venta.length > 0 ) {
        res.status(200).json(  venta );
    }else{
        res.status(404).json( { "error" : "venta no encontrado" } );
    }
}
export async function create(req, res, next ) {

await res.status(200).json({"success": "creaste una venta"});

}

export async function update(req, res, next ) {
    await res.status(200).json({"success": "actualizaste venta"});
    
} 