import Nodo from "../../AST/Nodo";
import Controlador from "../../Controlador";
import { Expresion } from "../../Interfaces/Expresion";
import TablaSimbolos from "../../TablaSimbolos/TablaSimbolos";
import { tipo } from "../../TablaSimbolos/Tipo";
import Operacion,{Operador} from "./Operacion";


export default class Relacional extends Operacion implements Expresion{
    public constructor(exp1: Expresion, signo_operador : string, exp2: Expresion, linea: number, columna:number , expU:boolean){
        super(exp1,signo_operador, exp2,linea,columna,expU)
    }


  
    getTipo(controlador: Controlador, ts:TablaSimbolos): tipo{
        let tipo_exp1 : tipo;
        let tipo_exp2 : tipo;
        tipo_exp1 = this.exp1.getValor(controlador,ts);
        tipo_exp2 = this.exp1.getValor(controlador,ts);
        

        if(this.expU == false){
            tipo_exp1 = this.exp1.getTipo(controlador,ts);
            tipo_exp2 = this.exp2.getTipo(controlador,ts);
            
            if(tipo_exp1 == tipo.ERROR || tipo_exp2 == tipo.ERROR){
                return tipo.ERROR;
            }

        }else{
            tipo_exp1 = this.exp1.getTipo(controlador,ts);
            if(tipo_exp1 == tipo.ERROR){
                return tipo.ERROR;
            }
            tipo_exp2 = tipo.ERROR;
            
        }

        switch (this.operador) {
            case Operador.IGUALIGUAL:
                if(tipo_exp1 == tipo.ENTERO){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.CARACTER){
                        return tipo.BOOLEAN
                    }else{
                        return tipo.ERROR
                    }
                }else if (tipo_exp1 == tipo.DOBLE){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.CARACTER){
                        return tipo.BOOLEAN
                    }else{
                        return tipo.ERROR
                    }
                }else if (tipo_exp1 == tipo.CARACTER){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.CARACTER){
                        return tipo.BOOLEAN
                    }else{
                        return tipo.ERROR
                    }
                }else{
                    return tipo.ERROR
                }
 
            case Operador.DIFERENCIA:
                if(tipo_exp1 == tipo.ENTERO){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.CARACTER){
                        return tipo.BOOLEAN
                    }else{
                        return tipo.ERROR
                    }
                }else if (tipo_exp1 == tipo.DOBLE){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.CARACTER){
                        return tipo.BOOLEAN
                    }else{
                        return tipo.ERROR
                    }
                }else if (tipo_exp1 == tipo.CARACTER){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.CARACTER){
                        return tipo.BOOLEAN
                    }else{
                        return tipo.ERROR
                    }
                }else{
                    return tipo.ERROR
                }

            case Operador.MENORQUE:
                if(tipo_exp1 == tipo.ENTERO){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.CARACTER){
                        return tipo.BOOLEAN
                    }else{
                        return tipo.ERROR
                    }
                }else if (tipo_exp1 == tipo.DOBLE){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.CARACTER){
                        return tipo.BOOLEAN
                    }else{
                        return tipo.ERROR
                    }
                }else if (tipo_exp1 == tipo.CARACTER){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.CARACTER){
                        return tipo.BOOLEAN
                    }else{
                        return tipo.ERROR
                    }
                }else{
                    return tipo.ERROR
                }
            case Operador.MENORIGUAL:
                if(tipo_exp1 == tipo.ENTERO){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.CARACTER){
                        return tipo.BOOLEAN
                    }else{
                        return tipo.ERROR
                    }
                }else if (tipo_exp1 == tipo.DOBLE){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.CARACTER){
                        return tipo.BOOLEAN
                    }else{
                        return tipo.ERROR
                    }
                }else if (tipo_exp1 == tipo.CARACTER){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.CARACTER){
                        return tipo.BOOLEAN
                    }else{
                        return tipo.ERROR
                    }
                }else{
                    return tipo.ERROR
                }
                
            case Operador.MAYORQUE:
                if(tipo_exp1 == tipo.ENTERO){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.CARACTER){
                        return tipo.BOOLEAN
                    }else{
                        return tipo.ERROR
                    }
                }else if (tipo_exp1 == tipo.DOBLE){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.CARACTER){
                        return tipo.BOOLEAN
                    }else{
                        return tipo.ERROR
                    }
                }else if (tipo_exp1 == tipo.CARACTER){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.CARACTER){
                        return tipo.BOOLEAN
                    }else{
                        return tipo.ERROR
                    }
                }else{
                    return tipo.ERROR
                }
            case Operador.MAYORIGUAL:
                if(tipo_exp1 == tipo.ENTERO){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.CARACTER){
                        return tipo.BOOLEAN
                    }else{
                        return tipo.ERROR
                    }
                }else if (tipo_exp1 == tipo.DOBLE){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.CARACTER){
                        return tipo.BOOLEAN
                    }else{
                        return tipo.ERROR
                    }
                }else if (tipo_exp1 == tipo.CARACTER){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.CARACTER){
                        return tipo.BOOLEAN
                    }else{
                        return tipo.ERROR
                    }
                }else{
                    return tipo.ERROR
                }
            default:
                break;
        }
        return tipo.ERROR;




    }

    getValor(controlador: Controlador, ts: TablaSimbolos){
        let valor_exp1;
        let valor_exp2;
        let valor_expU;

        let tipo_exp1: tipo;
        let tipo_exp2: tipo;
        let tipo_expU: tipo;

        if(this.expU == false){
            tipo_exp1 = this.exp1.getTipo(controlador,ts); // Me guarda el entero
            tipo_exp2 = this.exp2.getTipo(controlador,ts); // Me guarda el doble

            tipo_expU = tipo.ERROR;

            valor_exp1 = this.exp1.getValor(controlador,ts); // 1
            valor_exp2 = this.exp2.getValor(controlador,ts); // 2.5
        }else{
            tipo_expU = this.exp1.getTipo(controlador,ts);
            tipo_exp1 = tipo.ERROR;
            tipo_exp2 = tipo.ERROR;

            valor_expU = this.exp1.getValor(controlador,ts);
            
        }
        switch (this.operador){
            case Operador.IGUALIGUAL:
                if(tipo_exp1 == tipo.DOBLE){
                    if(tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.ENTERO ){
                        return valor_exp1 == valor_exp2;
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci1 = valor_exp2.charCodeAt(0);    
                        return valor_exp1 == num_ascci1
                    }else{
                        return null;
                    }
                }else if(tipo_exp1 == tipo.ENTERO){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE){
                        return valor_exp1 == valor_exp2;
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci1 = valor_exp2.charCodeAt(0);    
                        return valor_exp1 == num_ascci1
                    }else{
                        return null
                    }

                }else if(tipo_exp1 == tipo.CARACTER){
                    let num_ascci1 = valor_exp1.charCodeAt(0);
                    if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci2 = valor_exp2.charCodeAt(0);
                        return num_ascci1 == num_ascci2;
                    }else if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE){
                        return num_ascci1 == valor_exp2
                    }else{
                        return null
                    }
                }else if(tipo_exp1 == tipo.BOOLEAN){
                    if(tipo_exp2 == tipo.BOOLEAN){
                        return valor_exp1 == valor_exp2
                    }else{
                        return null
                    }
                }
            case Operador.DIFERENCIA:
                if(tipo_exp1 == tipo.DOBLE){
                    if(tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.ENTERO ){
                        console.log("hice esto");
                        
                        return valor_exp1 != valor_exp2;
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci1 = valor_exp2.charCodeAt(0);    
                        return valor_exp1 != num_ascci1
                    }else{
                        return null;
                    }
                }else if(tipo_exp1 == tipo.ENTERO){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE){
                        return valor_exp1 != valor_exp2;
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci1 = valor_exp2.charCodeAt(0);    
                        return valor_exp1 != num_ascci1
                    }else{
                        return null
                    }

                }else if(tipo_exp1 == tipo.CARACTER){
                    let num_ascci1 = valor_exp1.charCodeAt(0);
                    if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci2 = valor_exp2.charCodeAt(0);
                        return num_ascci1 != num_ascci2;
                    }else if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE){
                        return num_ascci1 != valor_exp2
                    }else{
                        return null
                    }
                }else if(tipo_exp1 == tipo.BOOLEAN){
                    if(tipo_exp2 == tipo.BOOLEAN){
                        return valor_exp1 != valor_exp2
                    }else{
                        return null
                    }
                }
            case Operador.MENORQUE:
                if(tipo_exp1 == tipo.DOBLE){
                    if(tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.ENTERO ){
                        
                        return valor_exp1 < valor_exp2;
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci1 = valor_exp2.charCodeAt(0);    
                        return valor_exp1 < num_ascci1
                    }else{
                        return null;
                    }
                }else if(tipo_exp1 == tipo.ENTERO){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE){
                        return valor_exp1 < valor_exp2;
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci1 = valor_exp2.charCodeAt(0);    
                        return valor_exp1 < num_ascci1
                    }else{
                        return null
                    }

                }else if(tipo_exp1 == tipo.CARACTER){
                    let num_ascci1 = valor_exp1.charCodeAt(0);
                    if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci2 = valor_exp2.charCodeAt(0);
                        return num_ascci1 < num_ascci2;
                    }else if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE){
                        return num_ascci1 < valor_exp2
                    }else{
                        return null
                    }
                }else if(tipo_exp1 == tipo.BOOLEAN){
                    if(tipo_exp2 == tipo.BOOLEAN){
                        return valor_exp1 < valor_exp2
                    }else{
                        return null
                    }
                }
            case Operador.MENORIGUAL:
                if(tipo_exp1 == tipo.DOBLE){
                    if(tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.ENTERO ){
                        
                        return valor_exp1 <= valor_exp2;
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci1 = valor_exp2.charCodeAt(0);    
                        return valor_exp1 <= num_ascci1
                    }else{
                        return null;
                    }
                }else if(tipo_exp1 == tipo.ENTERO){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE){
                        return valor_exp1 <= valor_exp2;
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci1 = valor_exp2.charCodeAt(0);    
                        return valor_exp1 <= num_ascci1
                    }else{
                        return null
                    }

                }else if(tipo_exp1 == tipo.CARACTER){
                    let num_ascci1 = valor_exp1.charCodeAt(0);
                    if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci2 = valor_exp2.charCodeAt(0);
                        return num_ascci1 <= num_ascci2;
                    }else if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE){
                        return num_ascci1 <= valor_exp2
                    }else{
                        return null
                    }
                }else if(tipo_exp1 == tipo.BOOLEAN){
                    if(tipo_exp2 == tipo.BOOLEAN){
                        return valor_exp1 <= valor_exp2
                    }else{
                        return null
                    }
                }
            case Operador.MAYORQUE:
                if(tipo_exp1 == tipo.DOBLE){
                    if(tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.ENTERO ){
                        
                        return valor_exp1 > valor_exp2;
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci1 = valor_exp2.charCodeAt(0);    
                        return valor_exp1 > num_ascci1
                    }else{
                        return null;
                    }
                }else if(tipo_exp1 == tipo.ENTERO){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE){
                        return valor_exp1 > valor_exp2;
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci1 = valor_exp2.charCodeAt(0);    
                        return valor_exp1 > num_ascci1
                    }else{
                        return null
                    }

                }else if(tipo_exp1 == tipo.CARACTER){
                    let num_ascci1 = valor_exp1.charCodeAt(0);
                    if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci2 = valor_exp2.charCodeAt(0);
                        return num_ascci1 > num_ascci2;
                    }else if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE){
                        return num_ascci1 > valor_exp2
                    }else{
                        return null
                    }
                }else if(tipo_exp1 == tipo.BOOLEAN){
                    if(tipo_exp2 == tipo.BOOLEAN){
                        return valor_exp1 > valor_exp2
                    }else{
                        return null
                    }
                }
            case Operador.MAYORIGUAL:
                if(tipo_exp1 == tipo.DOBLE){
                    if(tipo_exp2 == tipo.DOBLE || tipo_exp2 == tipo.ENTERO ){
                        
                        return valor_exp1 >= valor_exp2;
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci1 = valor_exp2.charCodeAt(0);    
                        return valor_exp1 >= num_ascci1
                    }else{
                        return null;
                    }
                }else if(tipo_exp1 == tipo.ENTERO){
                    if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE){
                        return valor_exp1 >= valor_exp2;
                    }else if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci1 = valor_exp2.charCodeAt(0);    
                        return valor_exp1 >= num_ascci1
                    }else{
                        return null
                    }

                }else if(tipo_exp1 == tipo.CARACTER){
                    let num_ascci1 = valor_exp1.charCodeAt(0);
                    if(tipo_exp2 == tipo.CARACTER){
                        let num_ascci2 = valor_exp2.charCodeAt(0);
                        return num_ascci1 >= num_ascci2;
                    }else if(tipo_exp2 == tipo.ENTERO || tipo_exp2 == tipo.DOBLE){
                        return num_ascci1 >= valor_exp2
                    }else{
                        return null
                    }
                }else if(tipo_exp1 == tipo.BOOLEAN){
                    if(tipo_exp2 == tipo.BOOLEAN){
                        return valor_exp1 >= valor_exp2
                    }else{
                        return null
                    }
                }
            default:
                break;

    }
  

}
    recorrer(): Nodo{
        throw new Error("Method not implemented.");
    }
}