import Errores from "../../AST/Errores";
import Nodo from "../../AST/Nodo";
import Controlador from "../../Controlador";
import { Expresion } from "../../Interfaces/Expresion";
import { Instruccion } from "../../Interfaces/Instruccion";
import TablaSimbolos from "../../TablaSimbolos/TablaSimbolos";
import { tipo } from "../../TablaSimbolos/Tipo";
import Break from "../SentenciadeTransferencia/Break";
import Continue from "../SentenciadeTransferencia/Continue";
import Retorno from "../SentenciadeTransferencia/Return";

export default class Ifs implements Instruccion{
    public condicion : Expresion;
    public lista_instrucciones_ifs : Array<Instruccion>;
    public lista_instrucciones_elses : Array<Instruccion>;
    public linea : number;
    public columna : number;



    constructor(condicion: Expresion, lista_instrucciones_ifs: Array<Instruccion>, lista_instrucciones_elses: Array<Instruccion>, linea: number, columna:number){
        this.condicion = condicion;
        this.lista_instrucciones_ifs = lista_instrucciones_ifs;
        this.lista_instrucciones_elses = lista_instrucciones_elses;
        this.columna = columna;
        this.linea = linea;
    }

    ejecutar(controlador: Controlador, ts: TablaSimbolos){
        let ts_local = new TablaSimbolos(ts); //Creamos una tabla de simbolos local que se ejecute solo dentro del if
        let valor_condicion = this.condicion.getValor(controlador,ts); //true | false

        if(this.condicion.getTipo(controlador,ts)==tipo.BOOLEAN){ //vemos si es tipo booleano para entrar a hacer el ciclo
            if(valor_condicion){ // si la condicion se cumple
                for(let instrucciones of this.lista_instrucciones_ifs){
                    let salida = instrucciones.ejecutar(controlador,ts_local);
                    if(salida instanceof Break){
                        if(controlador.sent_ciclica){
                            return salida
                        }else{
                            let error = new Errores("Semantico",`No se puede tener un break dentro de un if`,this.linea,this.columna);
                            controlador.errores.push(error);
                            controlador.append(`ERROR: Semántico, No se puede tener un break dentro de un if. En la linea ${this.linea} y columna ${this.columna}`);
                            return null;
                        }
                    }
                    if(salida instanceof Continue){
                        if(controlador.sent_ciclica){
                            return salida;
                        }else{
                            let error = new Errores("Semantico",`No se puede ejecutar la sentencia de transferencia continue`,this.linea,this.columna);
                            controlador.errores.push(error);
                            controlador.append(`ERROR: Semántico, No se puede ejecutar la sentencia de transferencia continue. En la linea ${this.linea} y columna ${this.columna}`);
                            return null;
                        }
                    }
                    if(salida instanceof Retorno){
                        return salida;
                    }
                    if( salida != null){
                        return salida;
                    }
                }
            }else{
                for(let instrucciones of this.lista_instrucciones_elses){ //ejecutamos todas las instrucciones de esta lista
                    let salida = instrucciones.ejecutar(controlador,ts_local);
                    if(salida instanceof Break){ // verificamos si viene break
                        if(controlador.sent_ciclica){
                            return salida
                        }else{
                            let error = new Errores("Semantico",`No se puede tener un break dentro de un else`,this.linea,this.columna);
                            controlador.errores.push(error);
                            controlador.append(`ERROR: Semántico, No se puede tener un break dentro de un else. En la linea ${this.linea} y columna ${this.columna}`);
                            return null;
                        }
                    }
                    if(salida instanceof Retorno){
                        return salida;
                    }
                    if( salida != null){
                        return salida;
                    }
                }
            }
        }
        return null;


    }
    recorrer(): Nodo {
        throw new Error("Method not implemented");
    }

}