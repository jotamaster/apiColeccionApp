import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {usuario} from "./usuario";
import {favoritosubasta} from "./favoritosubasta";
import {lotesubasta} from "./lotesubasta";
import {puja} from "./puja";


@Entity("subasta")
@Index("fk_subasta_usuario1_idx",["IdComprador",])
@Index("fk_subasta_usuario2_idx",["Idvendedor",])
export class subasta {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"Id"
        })
    Id:number;
        

   
    @ManyToOne(type=>usuario, IdComprador=>IdComprador.subastas)
    @JoinColumn({ name:'IdComprador'})
    IdComprador:usuario;
    

   
    @ManyToOne(type=>usuario, Idvendedor=>Idvendedor.subastas2)
    @JoinColumn({ name:'Idvendedor'})
    Idvendedor:usuario;
    

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"Nombre"
        })
    Nombre:string;
        

    @Column("date",{ 
        nullable:true,
        name:"HoraInicio"
        })
    HoraInicio:string;
        

    @Column("date",{ 
        nullable:true,
        name:"HoraTermino"
        })
    HoraTermino:string;
        

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
