import * as Entities from "../models/Index";
import {getConnection} from "typeorm"; 
import config from "../config/main";
import { item } from "../models/item";
import * as jwt from "jwt-simple";
 
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
    let connection = getConnection();
    let nuevoItem = new Entities.item();
    nuevoItem.Nombre = req.body.nombre;
    nuevoItem.Anio   = req.body.anio;
    nuevoItem.Ceca    = req.body.ceca;
    nuevoItem.Nacionalidad = req.body.noacionalidad;
    nuevoItem.Origen   = req.body.Origen;
    nuevoItem.TipoMaterial    = req.body.tipomaterial;
    nuevoItem.Material = req.body.material;
    nuevoItem.ValorNominal   = req.body.valornominal;
    nuevoItem.TipoNominal    = req.body.tiponominal;
    nuevoItem.Diametro = req.body.diametro;
    nuevoItem.Peso   = req.body.peso;
    nuevoItem.Leyenda    = req.body.leyenda;
    nuevoItem.TemaAnverso = req.body.temanverso;
    nuevoItem.DescripcionCanto   = req.body.descripcioncanto;
    nuevoItem.Espesor    = req.body.espesor;
    nuevoItem.Tiraje    = req.body.tiraje;
    nuevoItem.Giro = req.body.giro;
    nuevoItem.Valorizacion   = req.body.valorizacion;
    nuevoItem.Km    = req.body.km;
    nuevoItem.Descripcion = req.body.Descripcion;
    nuevoItem.DescripcionGrabado   = req.body.descripciongrabado;
    nuevoItem.SobreFecha    = req.body.sobrefecha;
    nuevoItem.Estado    = req.body.estado;
    nuevoItem.PorsentajeEstado    = req.body.porsentajeestado;
    nuevoItem.IdColeccion = await connection.getRepository(Entities.coleccion).findOne({Id:1});

    await connection.getRepository(Entities.item).save(nuevoItem);
                res.status(200).json({
                    "success": "Item agregado con dexito  !"
           });

}

export async function update(req, res, next ) {
    await res.status(200).json({"success": "actualizaste item"});
    
} 