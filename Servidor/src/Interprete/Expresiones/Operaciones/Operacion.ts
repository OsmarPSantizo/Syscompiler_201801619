import { sign } from "crypto";
import Nodo from "../../AST/Nodo";
import Controlador from "../../Controlador";
import { Expresion } from "../../Interfaces/Expresion";
import TablaSimbolos from "../../TablaSimbolos/TablaSimbolos";
import { tipo } from "../../TablaSimbolos/Tipo";

export enum Operador{
    SUMA,
    RESTA,
    MULTIPLICACION,
    DIVISION,
    POT,
    MOD,
    UNARIO,
    IGUALIGUAL,
    DIFERENCIA,
    MENORQUE,
    MAYORQUE,
    MENORIGUAL,
    MAYORIGUAL,
    OR,
    AND,
    NOT,
    X
}

export default class Operacion implements Expresion{
    public exp1: Expresion;
    public exp2: Expresion;
    public expU: boolean; 
    public linea: number;
    public columna: number;
    public signo_operador : string;
    public operador : Operador;

    constructor(exp1: Expresion,signo_operador : string,exp2: Expresion,linea: number,columna: number,expU: boolean){
        this.exp1 = exp1;
        this.exp2 = exp2;
        this.columna = columna;
        this.expU = expU;
        this.linea = linea;
        this.signo_operador = signo_operador;
        this.operador = this.GetOperador(signo_operador);

    }

    GetOperador(signo_operador:string) : Operador{
        if(signo_operador == '+'){
            return Operador.SUMA;
        }else if(signo_operador == '-'){
            return Operador.RESTA;
        }else if(signo_operador == '*'){
            return Operador.MULTIPLICACION;
        }else if(signo_operador == '/'){
            return Operador.DIVISION;
        }else if(signo_operador == 'UNARIO'){
            return Operador.UNARIO;
        }else if(signo_operador == '^'){
            return Operador.POT;
        }else if(signo_operador == '%'){
            return Operador.MOD;
        }else if(signo_operador == '=='){
            return Operador.IGUALIGUAL;
        }else if(signo_operador == '!='){
            return Operador.DIFERENCIA;
        }else if(signo_operador == '<'){
            return Operador.MENORQUE;
        }else if(signo_operador == '>'){
            return Operador.MAYORQUE;
        }else if(signo_operador == '<='){
            return Operador.MENORIGUAL;
        }else if(signo_operador == '>='){
            return Operador.MAYORIGUAL;
        }else if(signo_operador == '||'){
            return Operador.OR;
        }else if(signo_operador == '&&'){
            return Operador.AND;
        }else if(signo_operador == '!'){
            return Operador.NOT;
        }else{
            return Operador.X
        }
        
    }

    getTipo(controlador: Controlador, ts: TablaSimbolos): tipo {
        throw new Error("Method not implemented.");
    }
    getValor(controlador: Controlador, ts: TablaSimbolos) {
        throw new Error("Method not implemented.");
    }
    recorrer(): Nodo {
        throw new Error("Method not implemented.");
    }

}