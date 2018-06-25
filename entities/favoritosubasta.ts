import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {usuario} from "./usuario";
import {subasta} from "./subasta";


@Entity("favoritosubasta")
@Index("fk_favoritosubasta_usuario1_idx",["IdUsuario",])
@Index("fk_favoritosubasta_subasta1_idx",["IdSubasta",])
export class favoritosubasta {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"Id"
        })
    Id:number;
        

   
    @ManyToOne(type=>usuario, IdUsuario=>IdUsuario.favoritosubastas)
    @JoinColumn({ name:'IdUsuario'})
    IdUsuario:usuario;
    

   
    @ManyToOne(type=>subasta, IdSubasta=>IdSubasta.favoritosubastas)
    @JoinColumn({ name:'IdSubasta'})
    IdSubasta:subasta;
    
}
