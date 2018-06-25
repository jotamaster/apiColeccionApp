import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable ,PrimaryGeneratedColumn} from "typeorm";
import {amistad} from "./amistad";
import {coleccion} from "./coleccion";
import {favoritocoleccion} from "./favoritocoleccion";
import {favoritoitem} from "./favoritoitem";
import {favoritosubasta} from "./favoritosubasta";
import {logitem} from "./logitem";
import {puja} from "./puja";
import {subasta} from "./subasta";
import {venta} from "./venta";


@Entity("usuario")
export class usuario {

   
    @PrimaryGeneratedColumn()
    Id:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"Nombre"
        })
    Nombre:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"Apellido"
        })
    Apellido:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"Clave"
        })
    Clave:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"Email"
        })
    Email:string;
        

    @Column("int",{ 
        nullable:true,
        name:"Telefono"
        })
    Telefono:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"Ciudad"
        })
    Ciudad:string;
        

    @Column("datetime",{ 
        nullable:true,
        name:"InicioHobby",
        default: () => "CURRENT_TIMESTAMP"
        })
    InicioHobby:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"TipoColeccionista"
        })
    TipoColeccionista:string;
        

   
    @OneToMany(type=>amistad, amistads=>amistads.IdUsuario)
    amistads:amistad[];
    

   
    @OneToMany(type=>amistad, amistads2=>amistads2.IdAmigo)
    amistads2:amistad[];
    

   
    @OneToMany(type=>coleccion, coleccions=>coleccions.IdUsuario)
    coleccions:coleccion[];
    

   
    @OneToMany(type=>favoritocoleccion, favoritocoleccions=>favoritocoleccions.IdUsuario)
    favoritocoleccions:favoritocoleccion[];
    

   
    @OneToMany(type=>favoritoitem, favoritoitems=>favoritoitems.IdUsuario)
    favoritoitems:favoritoitem[];
    

   
    @OneToMany(type=>favoritosubasta, favoritosubastas=>favoritosubastas.IdUsuario)
    favoritosubastas:favoritosubasta[];
    

   
    @OneToMany(type=>logitem, logitems=>logitems.IdUsuario)
    logitems:logitem[];
    

   
    @OneToMany(type=>puja, pujas=>pujas.IdComprador)
    pujas:puja[];
    

   
    @OneToMany(type=>subasta, subastas=>subastas.IdComprador)
    subastas:subasta[];
    

   
    @OneToMany(type=>subasta, subastas2=>subastas2.Idvendedor)
    subastas2:subasta[];
    

   
    @OneToMany(type=>venta, ventas=>ventas.IdComprador)
    ventas:venta[];
    

   
    @OneToMany(type=>venta, ventas2=>ventas2.IdVendedor)
    ventas2:venta[];
    
}
