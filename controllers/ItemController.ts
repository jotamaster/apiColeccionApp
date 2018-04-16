import * as Entities from "../models/Index";
import {getConnection} from "typeorm"; 
import config from "../config/main";
import { item } from "../models/item";
 
export async function getAll(req, res, next) { 

    let connection = getConnection();
      let item = await connection.getRepository(Entities.item).find();
 
    if ( item.length > 0 ) {
        res.status(200).json(  item  );
    }else{  
        res.status(404).json( { "error" : "No tiene item" } );
    }
}
export async function getOne(req, res, next ) {
    const id = req.params.id;
    let connection = getConnection();
    let item =  await connection.getRepository(Entities.item).find({Id:id});
    
    if ( item.length > 0 ) {
        res.status(200).json(  item );
    }else{
        res.status(404).json( { "error" : "item no encontrado" } );
    }
}
export async function create(req, res, next ) {

await res.status(200).json({"success": "creaste un item"});

}

export async function update(req, res, next ) {
    await res.status(200).json({"success": "actualizaste item"});
    
} 