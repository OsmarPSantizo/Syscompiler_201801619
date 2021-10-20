import Errores from "../../AST/Errores";
import Nodo from "../../AST/Nodo";
import Controlador from "../../Controlador";
import { Expresion } from "../../Interfaces/Expresion";
import TablaSimbolos from "../../TablaSimbolos/TablaSimbolos";
import { tipo } from "../../TablaSimbolos/Tipo";





export default class Typeof implements Expresion{
    public expresion : Expresion;
    public linea : number;
    public columna: number;

    constructor (expresion: Expresion, linea : number, columna: number){
        this.expresion = expresion;
        this.linea = linea;
        this.columna = columna;
    
    } 

    getTipo(controlador: Controlador, ts:TablaSimbolos):tipo{
        let tipo_valor = this.expresion.getTipo(controlador,ts);
        if(tipo_valor == tipo.ENTERO ||tipo_valor == tipo.DOBLE || tipo_valor == tipo.BOOLEAN || tipo_valor == tipo.CADENA || tipo_valor == tipo.CARACTER ){
            return  tipo.CADENA
        }else{
            return tipo.ERROR
        }

    }
    getValor(controlador: Controlador, ts:TablaSimbolos):tipo{
        let valor;
        let tipo_valor:tipo;

        tipo_valor = this.expresion.getTipo(controlador,ts);
        valor = this.expresion.getValor(controlador,ts);

        if(tipo_valor ==tipo.ENTERO){
            //return "int"
            return tipo.ENTERO
        }else{
            let error = new Errores("Semantico",`La expresión es de un tipo no soportado `,this.linea,this.columna);
            controlador.errores.push(error);
            controlador.append(`ERROR: Semántico, La expresión es de un tipo no soportado . En la linea ${this.linea} y columna ${this.columna}`);
            return tipo.ERROR;
        }

    }
    recorrer(): Nodo{
        throw new Error("Method not implemented");
    }

}