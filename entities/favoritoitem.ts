import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {usuario} from "./usuario";
import {item} from "./item";


@Entity("favoritoitem")
@Index("fk_favoritoitem_usuario1_idx",["IdUsuario",])
@Index("fk_favoritoitem_item1_idx",["IdItem",])
export class favoritoitem {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"Id"
        })
    Id:number;
        

   
    @ManyToOne(type=>usuario, IdUsuario=>IdUsuario.favoritoitems)
    @JoinColumn({ name:'IdUsuario'})
    IdUsuario:usuario;
    

   
    @ManyToOne(type=>item, IdItem=>IdItem.favoritoitems)
    @JoinColumn({ name:'IdItem'})
    IdItem:item;
    
}
