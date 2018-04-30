import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, PrimaryGeneratedColumn} from "typeorm";
import {usuario} from "./usuario";
import {subasta} from "./subasta";


@Entity("puja")
@Index("fk_puja_subasta1_idx",["IdSubasta",])
@Index("fk_puja_usuario1_idx",["IdComprador",])
export class puja {


    @PrimaryGeneratedColumn()
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
        

    @Column("timestamp",{ 
        nullable:true,
        name:"FechaHora"
        })
    FechaHora:Date;
        
}
