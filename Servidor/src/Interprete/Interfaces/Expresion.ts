import Nodo from "../AST/Nodo";
import Controlador from "../Controlador";
import TablaSimbolos from "../TablaSimbolos/TablaSimbolos";
import { tipo } from "../TablaSimbolos/Tipo";


export interface Expresion{

    getTipo(controlador : Controlador,ts: TablaSimbolos): tipo;

    getValor(controlador : Controlador,ts: TablaSimbolos): any;

    recorrer() : Nodo;
}