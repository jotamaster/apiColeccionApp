import * as Entities from "../models/Index";
import {getConnection} from "typeorm"; 
import config from "../config/main";
import { loteventa } from "../models/loteventa";
 
export async function getAll(req, res, next) { 

    let connection = getConnection();
      let loteventa = await connection.getRepository(Entities.loteventa).find();
 
    if ( loteventa.length > 0 ) {
        res.status(200).json(  loteventa  );
    }else{  
        res.status(404).json( { "error" : "No tiene lote venta" } );
    }
}
export async function getOne(req, res, next ) {
    const id = req.params.id;
    let connection = getConnection();
    let loteventa =  await connection.getRepository(Entities.loteventa).find({Id:id});
    
    if ( loteventa.length > 0 ) {
        res.status(200).json(  loteventa );
    }else{
        res.status(404).json( { "error" : "lote venta no encontrado" } );
    }
}
export async function create(req, res, next ) {

await res.status(200).json({"success": "creaste un lote venta"});

}

export async function update(req, res, next ) {
    await res.status(200).json({"success": "actualizaste lote venta"});
    
} 