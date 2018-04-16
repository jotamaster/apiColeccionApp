import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {usuario} from "./usuario";


@Entity("amistad")
@Index("FK_USUARIO_AMIGO_idx",["IdAmigo",])
@Index("FK_AMIGO_USUARIO_idx",["IdUsuario",])
export class amistad {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"Id"
        })
    Id:number;
        

   
    @ManyToOne(type=>usuario, IdAmigo=>IdAmigo.amistads2)
    @JoinColumn({ name:'IdAmigo'})
    IdAmigo:usuario;
    

   
    @ManyToOne(type=>usuario, IdUsuario=>IdUsuario.amistads)
    @JoinColumn({ name:'IdUsuario'})
    IdUsuario:usuario;
    

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
