import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable ,PrimaryGeneratedColumn} from "typeorm";
import {usuario} from "./usuario";
import {favoritocoleccion} from "./favoritocoleccion";
import {item} from "./item";


@Entity("coleccion")
@Index("fk_coleccion_usuario_idx",["IdUsuario"])
export class coleccion {

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
        name:"Detalle"
        })
    Detalle:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"Fotos"
        })
    Fotos:string;
        

    @Column("datetime",{ 
        nullable:true,
        name:"FechaCreacion",
        default: () => "CURRENT_TIMESTAMP"
        })
    FechaCreacion:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"Tipo"
        })
    Tipo:string;
        

   
    @ManyToOne(type=>usuario, IdUsuario=>IdUsuario.coleccions)
    @JoinColumn({ name:'IdUsuario'})
    IdUsuario:usuario;
    

   
    @OneToMany(type=>favoritocoleccion, favoritocoleccions=>favoritocoleccions.IdColeccion)
    favoritocoleccions:favoritocoleccion[];
    

   
    @OneToMany(type=>item, items=>items.IdColeccion)
    items:item[];
    
}
