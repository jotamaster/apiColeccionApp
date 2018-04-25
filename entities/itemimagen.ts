import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {item} from "./item";


@Entity("itemimagen")
@Index("fk_monedaimagen_item1_idx",["IdItem",])
export class itemimagen {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"Id"
        })
    Id:number;
        

   
    @ManyToOne(type=>item, IdItem=>IdItem.itemimagens)
    @JoinColumn({ name:'IdItem'})
    IdItem:item;
    

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"Nombre"
        })
    Nombre:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
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
