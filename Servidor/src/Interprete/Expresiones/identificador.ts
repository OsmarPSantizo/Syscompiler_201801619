import Errores from "../AST/Errores";
import Nodo from "../AST/Nodo";
import Controlador from "../Controlador";
import { Expresion } from "../Interfaces/Expresion";
import TablaSimbolos from "../TablaSimbolos/TablaSimbolos";
import { tipo } from "../TablaSimbolos/Tipo";



export default class Identificador implements Expresion{


    public identificador: string;
    public linea : number;
    public columna : number;

    constructor(identificador: string, linea : number, columna : number){
        this.identificador = identificador;
        this.linea = linea;
        this.columna = columna;
    }
    // writeline(x)
    getTipo(controlador: Controlador, ts: TablaSimbolos): tipo {
        let existe_id = ts.getSimbolo(this.identificador);
        if(existe_id != null){
            return existe_id.tipo.n_tipo;
        }else{
            return tipo.ERROR;
        }

    }
    getValor(controlador: Controlador, ts: TablaSimbolos) {
        let existe_id = ts.getSimbolo(this.identificador);
        if(existe_id != null){
            return existe_id.valor;
        }else{
            //reportar error semántico
            let error = new Errores("Semantico",`La variable no existe`,this.linea,this.columna);
            controlador.errores.push(error);
            controlador.append(`ERROR: Semántico, La variable no existe. En la linea ${this.linea} y columna ${this.columna}`);
            return null;
        }
    }
    recorrer(): Nodo {
        let padre = new Nodo("Identificador","");
        padre.AddHijo(new Nodo(this.identificador,""));

        return padre;
    }

}