import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {coleccion} from "./coleccion";
import {favoritomoneda} from "./favoritomoneda";
import {logitem} from "./logitem";
import {lotesubasta} from "./lotesubasta";
import {loteventa} from "./loteventa";
import {monedaimagen} from "./monedaimagen";


@Entity("item")
@Index("fk_Moneda_Album1_idx",["IdColeccion",])
export class item {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"Id"
        })
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
        name:"TipoNomimal"
        })
    TipoNomimal:string;
        

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
        length:45,
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
        name:"Valorisacion"
        })
    Valorisacion:number;
        

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
        name:"PorcentajeEstado"
        })
    PorcentajeEstado:number;
        

   
    @OneToMany(type=>favoritomoneda, favoritomonedas=>favoritomonedas.Idmonedas)
    favoritomonedas:favoritomoneda[];
    

   
    @OneToMany(type=>logitem, logitems=>logitems.IdItem)
    logitems:logitem[];
    

   
    @OneToMany(type=>lotesubasta, lotesubastas=>lotesubastas.IdMoneda)
    lotesubastas:lotesubasta[];
    

   
    @OneToMany(type=>loteventa, loteventas=>loteventas.IdMoneda)
    loteventas:loteventa[];
    

   
    @OneToMany(type=>monedaimagen, monedaimagens=>monedaimagens.IdMoneda)
    monedaimagens:monedaimagen[];
    
}
