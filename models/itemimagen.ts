import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable , PrimaryGeneratedColumn} from "typeorm";
import {item} from "./item";


@Entity("itemimagen")
@Index("fk_monedaimagen_item1_idx",["IdItem",])
export class itemimagen {

 
    @PrimaryGeneratedColumn()
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
        

    @Column("datetime",{ 
        nullable:true,
        name:"Fecha",
        default: () => "CURRENT_TIMESTAMP"
        })
    Fecha:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"Descripcion"
        })
    Descripcion:string;
        
}
