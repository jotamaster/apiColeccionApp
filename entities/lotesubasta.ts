import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {item} from "./item";
import {subasta} from "./subasta";


@Entity("lotesubasta")
@Index("fk_LoteSubasta_MONEDAS1_idx",["IdMoneda",])
@Index("fk_LoteSubasta_SUBASTA1_idx",["IdSubasta",])
export class lotesubasta {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"Id"
        })
    Id:number;
        

   
    @ManyToOne(type=>item, IdMoneda=>IdMoneda.lotesubastas)
    @JoinColumn({ name:'IdMoneda'})
    IdMoneda:item;
    

   
    @ManyToOne(type=>subasta, IdSubasta=>IdSubasta.lotesubastas)
    @JoinColumn({ name:'IdSubasta'})
    IdSubasta:subasta;
    
}
