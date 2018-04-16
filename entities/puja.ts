import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {usuario} from "./usuario";
import {subasta} from "./subasta";


@Entity("puja")
@Index("fk_Pujas_USUARIO1_idx",["IdComprador",])
@Index("fk_Pujas_SUBASTA1_idx",["IdSubasta",])
export class puja {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"Id"
        })
    Id:number;
        

   
    @ManyToOne(type=>usuario, IdComprador=>IdComprador.pujas)
    @JoinColumn({ name:'IdComprador'})
    IdComprador:usuario;
    

   
    @ManyToOne(type=>subasta, IdSubasta=>IdSubasta.pujas)
    @JoinColumn({ name:'IdSubasta'})
    IdSubasta:subasta;
    

    @Column("int",{ 
        nullable:true,
        name:"Monto"
        })
    Monto:number;
        

    @Column("datetime",{ 
        nullable:true,
        name:"FechaHora"
        })
    FechaHora:Date;
        
}
