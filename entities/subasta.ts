import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {usuario} from "./usuario";
import {favoritosubasta} from "./favoritosubasta";
import {lotesubasta} from "./lotesubasta";
import {puja} from "./puja";


@Entity("subasta")
@Index("fk_Subasta_Usuario1_idx",["IdVendedor",])
@Index("fk_Usuario_Subasta_idx",["IdComprador",])
export class subasta {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"Id"
        })
    Id:number;
        

   
    @ManyToOne(type=>usuario, IdVendedor=>IdVendedor.subastas)
    @JoinColumn({ name:'IdVendedor'})
    IdVendedor:usuario;
    

   
    @ManyToOne(type=>usuario, IdComprador=>IdComprador.subastas2)
    @JoinColumn({ name:'IdComprador'})
    IdComprador:usuario;
    

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"Nombre"
        })
    Nombre:string;
        

    @Column("time",{ 
        nullable:true,
        name:"HoraInicio"
        })
    HoraInicio:string;
        

    @Column("time",{ 
        nullable:true,
        name:"Horatermino"
        })
    Horatermino:string;
        

    @Column("int",{ 
        nullable:true,
        name:"MinimoPuja"
        })
    MinimoPuja:number;
        

    @Column("int",{ 
        nullable:true,
        name:"MontoActual"
        })
    MontoActual:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"Descripcion"
        })
    Descripcion:string;
        

   
    @OneToMany(type=>favoritosubasta, favoritosubastas=>favoritosubastas.IdSubasta)
    favoritosubastas:favoritosubasta[];
    

   
    @OneToMany(type=>lotesubasta, lotesubastas=>lotesubastas.IdSubasta)
    lotesubastas:lotesubasta[];
    

   
    @OneToMany(type=>puja, pujas=>pujas.IdSubasta)
    pujas:puja[];
    
}
