import config from "../config/main";
import * as jwt from "jwt-simple";
import * as moment from "moment";

export  function authorize() {
    //crea una variable que sera enviada hacia la funccion siguiente en caso de que lo requiera
    return (req, res, next) => {
      if (!req.headers.authorization) {
        return res.status(403).json({
          "message": "no ha enviado una autorizacion"
        });
      } else {
        try {
          let isBearer = req.headers.authorization.startsWith("Bearer ")
          if (isBearer) {
            // despeja el Bearer del token
            let token =  req.headers.authorization.split(" ")[1];
            //desencripta el jwt
            let payload = jwt.decode(token, config.encryp_secret);
              //pasa el nick que viene en el token para pasarlo a la siguiente funcion
              req.email = payload.sub;
              //si la fecha de expiracion es menor que la fecha actual, significa que expiro
              if (payload.exp <= moment().unix()) {
                return res.status(401).json({
                  "message": "el token ha expirado"
                });
              }
            } 
          else{
            return res.status(500).json({
              "message": "falta identificador bearer"
            });
          }
        } catch (err) {
          return res.status(500).json({
            "message": "token invalido"
          });
        }
      }
      next();
    }
  }