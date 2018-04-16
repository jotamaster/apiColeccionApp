import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {item} from "./item";


@Entity("monedaimagen")
@Index("fk_MonedaImagen_MONEDAS1_idx",["IdMoneda",])
export class monedaimagen {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"Id"
        })
    Id:number;
        

   
    @ManyToOne(type=>item, IdMoneda=>IdMoneda.monedaimagens)
    @JoinColumn({ name:'IdMoneda'})
    IdMoneda:item;
    

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"Nombre"
        })
    Nombre:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:150,
        name:"Ruta"
        })
    Ruta:string;
        

    @Column("date",{ 
        nullable:true,
        name:"Fecha"
        })
    Fecha:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"Descripcion"
        })
    Descripcion:string;
        
}
