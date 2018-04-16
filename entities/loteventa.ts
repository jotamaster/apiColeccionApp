import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {item} from "./item";
import {venta} from "./venta";


@Entity("loteventa")
@Index("fk_LoteVenta_MONEDAS1_idx",["IdMoneda",])
@Index("fk_LoteVenta_VENTA1_idx",["IdVenta",])
export class loteventa {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"Id"
        })
    Id:number;
        

   
    @ManyToOne(type=>item, IdMoneda=>IdMoneda.loteventas)
    @JoinColumn({ name:'IdMoneda'})
    IdMoneda:item;
    

   
    @ManyToOne(type=>venta, IdVenta=>IdVenta.loteventas)
    @JoinColumn({ name:'IdVenta'})
    IdVenta:venta;
    
}
