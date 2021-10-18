
import Errores from "../../AST/Errores";
import Nodo from "../../AST/Nodo";
import Controlador from "../../Controlador";
import { Expresion } from "../../Interfaces/Expresion";
import { Instruccion } from "../../Interfaces/Instruccion";
import TablaSimbolos from "../../TablaSimbolos/TablaSimbolos";
import Break from "../SentenciadeTransferencia/Break";
import Caso from "./Caso";



export default class Switch implements Instruccion{
    public condicion: Expresion;
    public lista_casos : Array<Caso>;
    public inst_default: Instruccion;
    public linea : number;
    public columna : number;

    constructor (condicion: Expresion, lista_casos: Array<Caso>, inst_default: Instruccion, linea: number, columna:number){
        this.condicion = condicion;
        this.lista_casos = lista_casos;
        this.inst_default = inst_default;
        this.linea = linea;
        this.columna = columna;
    }

    ejecutar( controlador : Controlador, ts:TablaSimbolos){
        let ts_local = new TablaSimbolos(ts);
        let bandera = false;

        for(let caso of this.lista_casos){
            if( this.condicion.getTipo(controlador,ts)== caso.valor.getTipo(controlador,ts)){
                if(this.condicion.getValor(controlador,ts)== caso.valor.getValor(controlador,ts)){
                    let res:any = caso.ejecutar(controlador,ts_local)
                    if(res instanceof Break){
                        bandera = true;
                        return res;
                    }
                }
            }else{
                let error = new Errores("Semantico",`Los tipos son incompatibles. Para utilizar el switch deben ser los mismos tipos`,this.linea,this.columna);
                controlador.errores.push(error);
                controlador.append(`ERROR: Semántico, Los tipos son incompatibles. Para utilizar el switch deben ser los mismos tipos. En la linea ${this.linea} y columna ${this.columna}`);
            }
        }


        if(!bandera && this.inst_default != null){
            let res:any = this.inst_default.ejecutar(controlador,ts_local);
            if(res instanceof Break){
                bandera = true;
                return res;
            }

        }
    }

    recorrer(): Nodo{
        throw new Error("Method not implemented.")
    }





}