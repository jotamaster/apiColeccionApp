import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, PrimaryGeneratedColumn} from "typeorm";
import {usuario} from "./usuario";


@Entity("amistad")
@Index("fk_amistad_usuario1_idx",["IdUsuario",])
@Index("fk_amistad_usuario2_idx",["IdAmigo",])
export class amistad {

  
    @PrimaryGeneratedColumn()
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
        

    @Column("datetime",{ 
        nullable:true,
        name:"Inicio",
        default: () => "CURRENT_TIMESTAMP"
        })
    Inicio:string;
        

    @Column("datetime",{ 
        nullable:true,
        name:"Termino",
        default: () => "CURRENT_TIMESTAMP"
        })
    Termino:string;
        
}
