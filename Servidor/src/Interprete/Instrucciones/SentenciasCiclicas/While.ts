import Errores from "../../AST/Errores";
import Nodo from "../../AST/Nodo";
import Controlador from "../../Controlador";
import { Expresion } from "../../Interfaces/Expresion";
import { Instruccion } from "../../Interfaces/Instruccion";
import TablaSimbolos from "../../TablaSimbolos/TablaSimbolos";
import { tipo } from "../../TablaSimbolos/Tipo";
import Break from "../SentenciadeTransferencia/Break";

export default class While implements Instruccion{
    public condicion: Expresion;
    public lista_instrucciones: Array<Instruccion>;
    public linea: number;
    public columna: number;


    constructor (condicion: Expresion, lista_instrucciones: Array<Instruccion>,linea:number, columna:number){
        this.condicion = condicion;
        this.lista_instrucciones = lista_instrucciones;
        this.linea = linea;
        this.columna = columna;

    }

    ejecutar(controlador: Controlador, ts: TablaSimbolos){
        let temp = controlador.sent_ciclica;
        controlador.sent_ciclica = true;

        if(this.condicion.getTipo(controlador,ts) == tipo.BOOLEAN){
            while(this.condicion.getValor(controlador,ts)){
                let ts_local = new TablaSimbolos(ts);
                for(let instrucciones of this.lista_instrucciones){
                    let salida = instrucciones.ejecutar(controlador,ts_local)
                    if(salida instanceof Break){
                        return salida;
                    }
                }
            }
        }else{
            let error = new Errores("Semantico",`La condicion no es booleana`,this.linea,this.columna);
            controlador.errores.push(error);
            controlador.append(`ERROR: Semántico, La condicion no es booleana. En la linea ${this.linea} y columna ${this.columna}`);
            return null;
        }

        controlador.sent_ciclica = temp;
        return null;
    }
    recorrer(): Nodo{
        throw new Error("Mehtod not implemented");
    }

}