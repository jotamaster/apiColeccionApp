import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable ,PrimaryGeneratedColumn} from "typeorm";
import {usuario} from "./usuario";
import {item} from "./item";


@Entity("favoritoitem")
@Index("fk_favoritoitem_usuario1_idx",["IdUsuario",])
@Index("fk_favoritoitem_item1_idx",["IdItem",])
export class favoritoitem {

    @PrimaryGeneratedColumn()
    Id:number;

   
    @ManyToOne(type=>usuario, IdUsuario=>IdUsuario.favoritoitems)
    @JoinColumn({ name:'IdUsuario'})
    IdUsuario:usuario;
    

   
    @ManyToOne(type=>item, IdItem=>IdItem.favoritoitems)
    @JoinColumn({ name:'IdItem'})
    IdItem:item;
    
}
