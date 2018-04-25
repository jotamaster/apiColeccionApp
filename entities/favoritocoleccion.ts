import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {usuario} from "./usuario";
import {coleccion} from "./coleccion";


@Entity("favoritocoleccion")
@Index("fk_favoritocoleccion_usuario1_idx",["IdUsuario",])
@Index("fk_favoritocoleccion_coleccion1_idx",["IdColeccion",])
export class favoritocoleccion {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"Id"
        })
    Id:number;
        

   
    @ManyToOne(type=>usuario, IdUsuario=>IdUsuario.favoritocoleccions)
    @JoinColumn({ name:'IdUsuario'})
    IdUsuario:usuario;
    

   
    @ManyToOne(type=>coleccion, IdColeccion=>IdColeccion.favoritocoleccions)
    @JoinColumn({ name:'IdColeccion'})
    IdColeccion:coleccion;
    
}
