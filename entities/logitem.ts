import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {item} from "./item";
import {usuario} from "./usuario";


@Entity("logitem")
@Index("fk_logitem_usuario1_idx",["IdUsuario",])
@Index("fk_logitem_item1_idx",["IdItem",])
export class logitem {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"Id"
        })
    Id:number;
        

   
    @ManyToOne(type=>item, IdItem=>IdItem.logitems)
    @JoinColumn({ name:'IdItem'})
    IdItem:item;
    

   
    @ManyToOne(type=>usuario, IdUsuario=>IdUsuario.logitems)
    @JoinColumn({ name:'IdUsuario'})
    IdUsuario:usuario;
    

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
        name:"Fecha"
        })
    Fecha:Date;
        
}
