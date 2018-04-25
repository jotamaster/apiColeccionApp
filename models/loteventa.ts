import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {venta} from "./venta";
import {item} from "./item";


@Entity("loteventa")
@Index("fk_loteventa_venta1_idx",["IdVenta",])
@Index("fk_loteventa_item1_idx",["item_Id",])
export class loteventa {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"Id"
        })
    Id:number;
        

   
    @ManyToOne(type=>venta, IdVenta=>IdVenta.loteventas)
    @JoinColumn({ name:'IdVenta'})
    IdVenta:venta;
    

   
    @ManyToOne(type=>item, item_Id=>item_Id.loteventas)
    @JoinColumn({ name:'item_Id'})
    item_Id:item;
    
}
