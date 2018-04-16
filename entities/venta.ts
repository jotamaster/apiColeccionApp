import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {usuario} from "./usuario";
import {loteventa} from "./loteventa";


@Entity("venta")
@Index("fk_Venta_Usuario1_idx",["IdComprador",])
@Index("fk_Venta_Usuario2_idx",["IdVendedor",])
export class venta {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"Id"
        })
    Id:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"Nombre"
        })
    Nombre:string;
        

    @Column("int",{ 
        nullable:true,
        name:"ValorVenta"
        })
    ValorVenta:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"Descripcion"
        })
    Descripcion:string;
        

   
    @ManyToOne(type=>usuario, IdComprador=>IdComprador.ventas)
    @JoinColumn({ name:'IdComprador'})
    IdComprador:usuario;
    

   
    @ManyToOne(type=>usuario, IdVendedor=>IdVendedor.ventas2)
    @JoinColumn({ name:'IdVendedor'})
    IdVendedor:usuario;
    

   
    @OneToMany(type=>loteventa, loteventas=>loteventas.IdVenta)
    loteventas:loteventa[];
    
}
