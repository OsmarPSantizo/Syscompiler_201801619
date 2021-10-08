import Controlador from "../Controlador";
import Declaracion from "../Instrucciones/Declaracion";
import { Instruccion } from "../Interfaces/Instruccion";
import TablaSimbolos from "../TablaSimbolos/TablaSimbolos";
import Nodo from "./Nodo";





export default class Ast implements Instruccion{
    public lista_instrucciones : Array<Instruccion>;

    constructor(lista_instrucciones : Array<Instruccion>){
        this.lista_instrucciones = lista_instrucciones;
    }

    ejecutar(controlador: Controlador, ts: TablaSimbolos){
        //Vamos a recorrer las instrucciones que vienen desde la gramática


        //1era pasada. Se ejecuta las declaraciones de variables
        for(let instruccion of this.lista_instrucciones){
            if(instruccion instanceof Declaracion){
                instruccion.ejecutar(controlador,ts);
            }
        }
        //2da pasada ejecutamos las demás instrucciones
        for(let instruccion of this.lista_instrucciones){
            if(!(instruccion instanceof Declaracion)){
                instruccion.ejecutar(controlador,ts);
            }
        }
    }
    recorrer():Nodo{
        throw new Error("Method not implemented.");
    }

    
}