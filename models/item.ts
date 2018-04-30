import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable ,PrimaryGeneratedColumn} from "typeorm";
import {coleccion} from "./coleccion";
import {favoritoitem} from "./favoritoitem";
import {itemimagen} from "./itemimagen";
import {logitem} from "./logitem";
import {lotesubasta} from "./lotesubasta";
import {loteventa} from "./loteventa";


@Entity("item")
@Index("fk_item_coleccion1_idx",["IdColeccion",])
export class item {


    @PrimaryGeneratedColumn()
    Id:number;

   
    @ManyToOne(type=>coleccion, IdColeccion=>IdColeccion.items)
    @JoinColumn({ name:'IdColeccion'})
    IdColeccion:coleccion;
    

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"Nombre"
        })
    Nombre:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"itemcol"
        })
    itemcol:string;
        

    @Column("int",{ 
        nullable:true,
        name:"Anio"
        })
    Anio:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"Ceca"
        })
    Ceca:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"Nacionalidad"
        })
    Nacionalidad:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"Origen"
        })
    Origen:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"TipoMaterial"
        })
    TipoMaterial:string;
        

    @Column("decimal",{ 
        nullable:true,
        precision:10,
        scale:0,
        name:"Material"
        })
    Material:number;
        

    @Column("int",{ 
        nullable:true,
        name:"ValorNominal"
        })
    ValorNominal:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"TipoNominal"
        })
    TipoNominal:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"Diametro"
        })
    Diametro:string;
        

    @Column("decimal",{ 
        nullable:true,
        precision:10,
        scale:0,
        name:"Peso"
        })
    Peso:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:80,
        name:"Leyenda"
        })
    Leyenda:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"TemaAnverso"
        })
    TemaAnverso:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"DescripcionCanto"
        })
    DescripcionCanto:string;
        

    @Column("decimal",{ 
        nullable:true,
        precision:3,
        scale:0,
        name:"Espesor"
        })
    Espesor:number;
        

    @Column("int",{ 
        nullable:true,
        name:"Tiraje"
        })
    Tiraje:number;
        

    @Column("int",{ 
        nullable:true,
        name:"Giro"
        })
    Giro:number;
        

    @Column("int",{ 
        nullable:true,
        name:"Valorizacion"
        })
    Valorizacion:number;
        

    @Column("int",{ 
        nullable:true,
        name:"Km"
        })
    Km:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:250,
        name:"Descripcion"
        })
    Descripcion:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"DescripcionGrabado"
        })
    DescripcionGrabado:string;
        

    @Column("int",{ 
        nullable:true,
        name:"SobreFecha"
        })
    SobreFecha:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:3,
        name:"Estado"
        })
    Estado:string;
        

    @Column("decimal",{ 
        nullable:true,
        precision:5,
        scale:0,
        name:"PorsentajeEstado"
        })
    PorsentajeEstado:number;
        

   
    @OneToMany(type=>favoritoitem, favoritoitems=>favoritoitems.IdItem)
    favoritoitems:favoritoitem[];
    

   
    @OneToMany(type=>itemimagen, itemimagens=>itemimagens.IdItem)
    itemimagens:itemimagen[];
    

   
    @OneToMany(type=>logitem, logitems=>logitems.IdItem)
    logitems:logitem[];
    

   
    @OneToMany(type=>lotesubasta, lotesubastas=>lotesubastas.IdItem)
    lotesubastas:lotesubasta[];
    

   
    @OneToMany(type=>loteventa, loteventas=>loteventas.item_Id)
    loteventas:loteventa[];
    
}
