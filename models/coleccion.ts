import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {usuario} from "./usuario";
import {favoritocoleccion} from "./favoritocoleccion";
import {item} from "./item";


@Entity("coleccion")
@Index("fk_Album_Usuario_idx",["IdUsuario",])
export class coleccion {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"Id"
        })
    Id:number;
        

   
    @ManyToOne(type=>usuario, IdUsuario=>IdUsuario.coleccions)
    @JoinColumn({ name:'IdUsuario'})
    IdUsuario:usuario;
    

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"Nombre"
        })
    Nombre:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"Detalle"
        })
    Detalle:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"Fotos"
        })
    Fotos:string;
        

    @Column("date",{ 
        nullable:true,
        name:"FechaCreacion"
        })
    FechaCreacion:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"Tipo"
        })
    Tipo:string;
        

   
    @OneToMany(type=>favoritocoleccion, favoritocoleccions=>favoritocoleccions.IdColeccion)
    favoritocoleccions:favoritocoleccion[];
    

   
    @OneToMany(type=>item, items=>items.IdColeccion)
    items:item[];
    
}
