
import Errores from "../AST/Errores";
import Nodo from "../AST/Nodo";
import Controlador from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import { Instruccion } from "../Interfaces/Instruccion";
import TablaSimbolos from "../TablaSimbolos/TablaSimbolos";

export default class Asignacion implements Instruccion{
    public identificador: string;
    public valor: Expresion;
    public linea: number;
    public columna: number;



    constructor(indentificador: string, valor : Expresion, linea : number,columna:number){
        this.identificador = indentificador;
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }
    ejecutar(controlador : Controlador, ts: TablaSimbolos){
        //hay que revisar si existe en la tabla de símbolos
        
        if(ts.existe(this.identificador)){
             // si lo encontramos verificamos que el valor a asignar sea del mismo tipo de la variable
             let valor = this.valor.getValor(controlador,ts);
             let variable = ts.getSimbolo(this.identificador);

             if(variable?.tipo.n_tipo == this.valor.getTipo(controlador,ts)){
                 // si es del mismo tipo se asigna y si nó se reporta error
                 ts.getSimbolo(this.identificador)?.setValor(valor);
             }else{
                let error = new Errores("Semantico",`La variable ${this.identificador} no es del mismo tipo, entonces no se le puede asignar un valor`,this.linea,this.columna);
                controlador.errores.push(error);
                controlador.append(`ERROR: Semántico, La variable ${this.identificador} no es del mismo tipo, entonces no se le puede asignar un valor. En la linea ${this.linea} y columna ${this.columna}`);
                return null;
             }

        }else{
            let error = new Errores("Semantico",`La variable ${this.identificador} no ha sido declarada, entonces no se puede asignar un valor`,this.linea,this.columna);
            controlador.errores.push(error);
            controlador.append(`ERROR: Semántico, La variable ${this.identificador} no ha sido declarada, entonces no se puede asignar un valor. En la linea ${this.linea} y columna ${this.columna}`);
            return null;
        }
       
        

    }
    recorrer(): Nodo{
        throw new Error("Method not implemented");
    }
}