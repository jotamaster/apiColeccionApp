import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {usuario} from "./usuario";
import {item} from "./item";


@Entity("favoritomoneda")
@Index("fk_FAVORITO_USUARIO1_idx",["Idusuario",])
@Index("fk_FAVORITO_MONEDAS1_idx",["Idmonedas",])
export class favoritomoneda {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"Id"
        })
    Id:number;
        

   
    @ManyToOne(type=>usuario, Idusuario=>Idusuario.favoritomonedas)
    @JoinColumn({ name:'Idusuario'})
    Idusuario:usuario;
    

   
    @ManyToOne(type=>item, Idmonedas=>Idmonedas.favoritomonedas)
    @JoinColumn({ name:'Idmonedas'})
    Idmonedas:item;
    
}
