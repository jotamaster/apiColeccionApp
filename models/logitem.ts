import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {usuario} from "./usuario";
import {item} from "./item";


@Entity("logitem")
@Index("fk_LogItem_Usuario1_idx",["IdUsuario",])
@Index("fk_LogItem_Item1_idx",["IdItem",])
export class logitem {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"Id"
        })
    Id:number;
        

   
    @ManyToOne(type=>usuario, IdUsuario=>IdUsuario.logitems)
    @JoinColumn({ name:'IdUsuario'})
    IdUsuario:usuario;
    

   
    @ManyToOne(type=>item, IdItem=>IdItem.logitems)
    @JoinColumn({ name:'IdItem'})
    IdItem:item;
    

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"ValorActual"
        })
    ValorActual:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"ValorAnterior"
        })
    ValorAnterior:string;
        

    @Column("timestamp",{ 
        nullable:true,
        default:"CURRENT_TIMESTAMP",
        name:"Fecha"
        })
    Fecha:Date;
        
}
