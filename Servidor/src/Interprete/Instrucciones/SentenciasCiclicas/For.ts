import Errores from "../../AST/Errores";
import Nodo from "../../AST/Nodo";
import Controlador from "../../Controlador";
import { Expresion } from "../../Interfaces/Expresion";
import { Instruccion } from "../../Interfaces/Instruccion";
import TablaSimbolos from "../../TablaSimbolos/TablaSimbolos";
import { tipo } from "../../TablaSimbolos/Tipo";
import Break from "../SentenciadeTransferencia/Break";


export default class For implements Instruccion {
    public declarar_asignacion: Instruccion;
    public condicion : Expresion;
    public actualizacion : Instruccion;
    public lista_instrucciones: Array<Instruccion>;
    public linea: number;
    public columna: number;


    constructor (declara_asignacion: Instruccion, condicion: Expresion, actualizacion: Instruccion, lista_instrucciones: Array<Instruccion>, linea: number, columna:number){
        this.declarar_asignacion  = declara_asignacion;
        this.condicion = condicion;
        this.actualizacion = actualizacion;
        this.lista_instrucciones = lista_instrucciones;
        this.linea = linea;
        this.columna = columna;
    }

    ejecutar(controlador:Controlador, ts: TablaSimbolos){
        let ts_local = new TablaSimbolos(ts);
        let temp = controlador.sent_ciclica;
        controlador.sent_ciclica = true;

        this.declarar_asignacion.ejecutar(controlador,ts_local);
        

        if(this.condicion.getTipo(controlador,ts_local) == tipo.BOOLEAN){
            while(this.condicion.getValor(controlador,ts_local)){
                let ts_local2 = new TablaSimbolos(ts_local);
                for(let instrucciones of this.lista_instrucciones){
                    let salida = instrucciones.ejecutar(controlador,ts_local2)
                    if(salida instanceof Break){
                        return salida;
                    }
                }
                this.actualizacion.ejecutar(controlador,ts_local);
            }
        }else{
            let error = new Errores("Semantico",`La condicion no es booleana`,this.linea,this.columna);
            controlador.errores.push(error);
            controlador.append(`ERROR: Semántico, La condicion no es booleana. En la linea ${this.linea} y columna ${this.columna}`);
            return null;
        }
        
    }

    recorrer(): Nodo{

        throw new Error("Method not implemented.")
    }





}