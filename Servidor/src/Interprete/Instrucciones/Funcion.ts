import Nodo from "../AST/Nodo";
import Controlador from "../Controlador";
import { Instruccion } from "../Interfaces/Instruccion";
import Simbolo from "../TablaSimbolos/Simbolo";
import TablaSimbolos from "../TablaSimbolos/TablaSimbolos";
import Tipo from "../TablaSimbolos/Tipo";




export default class Funcion extends Simbolo implements Instruccion{
    public lista_instrucciones : Array<Instruccion>;
    public linea : number;
    public columna : number;
// con el booleano vamos a saber si es un métdodo true o false
    constructor(simbolo:number, tipo:Tipo, identificador:string, lista_params: Array<Simbolo>, metodo:boolean, lista_instrucciones: Array<Instruccion>,linea :number, columna:number){
        super(simbolo,tipo,identificador,null,lista_params,metodo);
        this.lista_instrucciones = lista_instrucciones;
        this.linea = linea;
        this.columna = columna;

    }
        //Se crea un método para agregar el símbolo de la función a la tabla de símbolos
    agregarFuncionTS(ts:TablaSimbolos){

    }   
    ejecutar(controlador:Controlador, ts: TablaSimbolos){
        //con esto mandamos a ejecutar las instrucciones ya que las validaciones para llegar hasta aca se hacen en la llamada
    }

    recorrer(): Nodo{
        throw new Error("Method not implemented");
    }

}


