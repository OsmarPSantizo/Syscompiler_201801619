import Errores from "./AST/Errores";



export default class Controlador{

    public errores: Array<Errores>;
    public consola : string;

    constructor(){
        this.errores = new Array<Errores>();
        this.consola = "";

    }

    append(cadena : string){
        this.consola = this.consola + cadena +"\n";
    }

}
