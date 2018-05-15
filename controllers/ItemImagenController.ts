import * as Entities from "../models/Index";
import {getConnection} from "typeorm"; 
import config from "../config/main";
import { itemimagen } from "../models/itemimagen";
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null,  Date.now() + '-'+ file.originalname)
    }
  })
  
  const upload = multer({ storage: storage });

 
export async function getAll(req, res, next) { 

    let connection = getConnection();
      let monedaimagen = await connection.getRepository(Entities.itemimagen).find();
 
    if ( monedaimagen.length > 0 ) {
        res.status(200).json(  monedaimagen  );
    }else{  
        res.status(404).json( { "error" : "No tiene monedaimagen" } );
    }
}
export async function getOne(req, res, next ) {
    const id = req.params.id;
    let connection = getConnection();
    let monedaimagen =  await connection.getRepository(Entities.itemimagen).find({Id:id});
    
    if ( monedaimagen.length > 0 ) {
        res.status(200).json(  monedaimagen );
    }else{
        res.status(404).json( { "error" : "monedaimagen no encontrado" } );
    }
}
export async function create(req, res, next) {
    let connection = getConnection();
    let nuevoItemImagen = new Entities.itemimagen();
    nuevoItemImagen.Nombre = req.body.nombre;
    nuevoItemImagen.Ruta =  req.file.path;
    console.log(req.file);
    nuevoItemImagen.Descripcion    = req.body.descripcion;
    nuevoItemImagen.IdItem = await connection.getRepository(Entities.item).findOne({Id:1});
    
    await connection.getRepository(Entities.itemimagen).save(nuevoItemImagen);
                res.status(200).json({
                    "success": "Imagen agregado con exito!"
           });

}

export async function update(req, res, next ) {
    await res.status(200).json({"success": "actualizaste moneda imagen"});
    
} 