import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {usuario} from "./usuario";


@Entity("amistad")
@Index("fk_amistad_usuario1_idx",["IdUsuario",])
@Index("fk_amistad_usuario2_idx",["IdAmigo",])
export class amistad {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"Id"
        })
    Id:number;
        

   
    @ManyToOne(type=>usuario, IdUsuario=>IdUsuario.amistads)
    @JoinColumn({ name:'IdUsuario'})
    IdUsuario:usuario;
    

   
    @ManyToOne(type=>usuario, IdAmigo=>IdAmigo.amistads2)
    @JoinColumn({ name:'IdAmigo'})
    IdAmigo:usuario;
    

    @Column("int",{ 
        nullable:true,
        name:"Estado"
        })
    Estado:number;
        

    @Column("date",{ 
        nullable:true,
        name:"Inicio"
        })
    Inicio:string;
        

    @Column("date",{ 
        nullable:true,
        name:"Termino"
        })
    Termino:string;
        
}
