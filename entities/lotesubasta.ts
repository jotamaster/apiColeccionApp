import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {subasta} from "./subasta";
import {item} from "./item";


@Entity("lotesubasta")
@Index("fk_lotesubasta_subasta1_idx",["IdSubasta",])
@Index("fk_lotesubasta_item1_idx",["IdItem",])
export class lotesubasta {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"Id"
        })
    Id:number;
        

   
    @ManyToOne(type=>subasta, IdSubasta=>IdSubasta.lotesubastas)
    @JoinColumn({ name:'IdSubasta'})
    IdSubasta:subasta;
    

   
    @ManyToOne(type=>item, IdItem=>IdItem.lotesubastas)
    @JoinColumn({ name:'IdItem'})
    IdItem:item;
    
}
