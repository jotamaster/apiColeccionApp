import * as express from "express"; // el routing neceista del servidor express
 

import * as itemCtrl from "../controllers/ItemController";  //importas controllador para llamar a funciones
import * as logitemCtrl from "../controllers/LogItemController";  //importas controllador para llamar a funciones
import * as lotesubastaCtrl from "../controllers/LoteSubastaController";  //importas controllador para llamar a funciones
import * as loteventaCtrl from "../controllers/LoteVentaController";  //importas controllador para llamar a funciones
import * as amistadCtrl from "../controllers/AmistadController";  //importas controllador para llamar a funciones
import * as coleccionCtrl from "../controllers/ColeccionController";  //importas controllador para llamar a funciones
import * as favoritocoleccionCtrl from "../controllers/FavoritoColeccionController";  //importas controllador para llamar a funciones
import * as favoritomonedaCtrl from "../controllers/FavoritoItemController";  //importas controllador para llamar a funciones
import * as monedaimagenCtrl from "../controllers/ItemImagenController";  //importas controllador para llamar a funciones
import * as pujaCtrl from "../controllers/PujaController";  //importas controllador para llamar a funciones
import * as subastaCtrl from "../controllers/SubastaController";  //importas controllador para llamar a funciones
import * as usuarioCtrl from "../controllers/UsuarioController";  //importas controllador para llamar a funciones
import * as ventaCtrl from "../controllers/VentaController";  //importas controllador para llamar a funciones
import * as authorization from '../middlewares/autorizacion'
// exportamos la funcion que utiliza posteriormeente el archivo init.ts para iniciar el encapsulamiento de
// retun controller --> retorna route( app )
export default (app) => { 

    const apiRoutes = express.Router(); // la utilizaremos para que englobe todas las rutas
    const profesorRoutes = express.Router(); // esta la utilizaremos especificamente para embeber las rutas del controlador profesor
    const usuarioRoutes = express.Router(); // esta la utilizaremos especificamente para embeber las rutas del controlador usuario
    const itemRoutes = express.Router();
    const logitemRoutes = express.Router();
    const lotesubastaRoutes = express.Router();
    const loteventaRoutes = express.Router();
    const amistadRoutes = express.Router();
    const coleccionRoutes = express.Router();
    const favoritocoleccionRoutes = express.Router();
    const favoritomonedaRoutes = express.Router();
    const monedaimagenRoutes = express.Router();
    const pujaRoutes = express.Router();
    const subastaRoutes = express.Router();
    const ventaRoutes = express.Router();
   
     
    // profesorRoutes.get("/", profeCtrl.getAll);
    // profesorRoutes.get("/:rut", profeCtrl.getOne);
    // profesorRoutes.post("/",  profeCtrl.create);
    // profesorRoutes.put("/:rut",  profeCtrl.update); 
    // // esta linea crea un moddleware el cual crea la ruta /profesor y embebe los verbos y rutas que asignamos a clienteRoute
    // apiRoutes.use("/profesor", profesorRoutes);
    coleccionRoutes.get("/",authorization.authorize(),coleccionCtrl.getAll);
    coleccionRoutes.post("/",authorization.authorize(),coleccionCtrl.create);
    apiRoutes.use("/colecciones",coleccionRoutes);

    // esta linea crea un moddleware el cual crea la ruta /usuario y embebe los verbos y rutas que asignamos a clienteRoute
    usuarioRoutes.post("/",usuarioCtrl.agregarUsuario);
    usuarioRoutes.post("/authenticate",usuarioCtrl.authenticateUser);
    apiRoutes.use("/usuario", usuarioRoutes);




    
 
    app.use("/api", apiRoutes);
};