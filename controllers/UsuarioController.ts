import * as jwt from "jwt-simple";
import * as moment from "moment";
import * as Cryptr from "cryptr";
import * as Entities from "../models/Index";
import {getConnection} from "typeorm"; 
import config from "../config/main";
import { usuario } from "../models/usuario";
 

//funcion que trea todos GET------------------------------------------------------------
export async function getAll(req, res, next) { 

    let connection = getConnection();
      let usuario = await connection.getRepository(Entities.usuario).find();
 
    if ( usuario.length > 0 ) {
        res.status(200).json(  usuario  );
    }else{  
        res.status(500).json( { "error" : "No tiene usuarios" } );
    }
}
//--------------------------------------------------------------------------------

export async function agregarUsuario(req, res, next){
  

    if (!req.body.email || !req.body.clave || req.body.clave === '' || req.body.email === '' || req.body.nombre === '' ||req.body.apellido === ''||!req.body.nombre ||!req.body.apellido ) {
        res.status(403).json({
            "success": false,
            "type": "error",
            "message": "Debe ingresar todos los campos"
        });
    } else {
       
        // let email = req.body.email;
        // let connection = getConnection();
        // let usuario = await connection.getRepository(Entities.Usuario).findOne({
        //     Email: email
        // });

        // if (  usuario.Email === email) {
            
        //     res.status(403).json({
        //         "success": false,
        //         "type": "error",
        //         "message": "Usuario ya existe "+ email +"."
        //     });

        // } else {
            let connection = getConnection();
            let cryp = new Cryptr(config.encryp_secret);
            let nuevoUsuario = new Entities.usuario();
            nuevoUsuario.Nombre = req.body.nombre;
            nuevoUsuario.Apellido = req.body.apellido;
            nuevoUsuario.Clave = req.body.clave;
            nuevoUsuario.Email = req.body.email;
            nuevoUsuario.Telefono = req.body.telefono;
            nuevoUsuario.Ciudad = req.body.ciudad;
            nuevoUsuario.InicioHobby = req.body.iniciohobby;
            nuevoUsuario.TipoColeccionista = req.body.tipocoleccionista;
            try {
                await connection.getRepository(usuario).save(nuevoUsuario);
                res.status(200).json({
                    "success": "Usuario agregado con exito  !"
                });
            } catch (err) {
                res.status(500).json({
                    "error": "No se pudo agregar al usuario",
                    "details": err
                });
            }
        //}
     
    }
    

   
}
export async function authenticateUser(req, res, next) {


       if (!req.body.email || !req.body.clave || req.body.clave === '' || req.body.email === '') {
           res.status(403).json({
               "success": false,
               "type": "error",
               "message": "Debe ingresar Credenciales de Acceso"
           });
       } else {
           let email = req.body.email;
           let clave = req.body.clave;
   
           let connection = getConnection();
           
            //La expresión AWAINT provoca que la ejecución de una función async sea pausada hasta que una Promise sea terminada o rechazada,
            // y regresa a la ejecución de la función async después del término
           let usuario = await connection.getRepository(Entities.usuario).findOne({
               Email: email
           });

           if (usuario == null || usuario.Clave != clave) {
               res.status(403).json({
                   "success": false,
                   "type": "error",
                   "message": "Credenciales no valida"
               });
           } else {
               const payload = {
                   sub: usuario.Email,
                   aud: config.jwtOptions.aud,
                   iss: config.jwtOptions.iss,
                   iat: moment().unix(),
                   exp: moment().add(14, "days").unix()
               }
               res.status(200).json({
                   "success": true,
                   "type": "success",
                   access_token: jwt.encode(payload, config.encryp_secret),
                   "name":usuario.Nombre,
                   "email": usuario.Email
               });
           }
       }
   }