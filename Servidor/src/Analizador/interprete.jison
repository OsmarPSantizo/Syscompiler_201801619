/* Definición lexica */
%lex
%options case-insensitive

//Expresiones regulares
num [0-9]+
id [a-zñA-ZÑ_][a-zñA-ZÑ0-9_]*

//--> Cadena validar las secuencias de escape
escapechar  [\'\"\\nrt]
escape      \\{escapechar}
aceptacion  [^\"\\]  // (^) indica que acepta todo
cadena      (\" ({escape}|{aceptacion})*\")

//--> Caracter 
escapechar2  [\'\"\\nrt]
escape2      \\{escapechar2}
aceptacion2  [^\'\\]  // (^) indica que acepta todo
caracter      (\' ({escape2}|{aceptacion2})\')


%%

/* Comentarios */
"//".*              {/* Ignoramos los comentarios simples */}
"/*"((\*+[^/*])|([^*]))*\**"*/"     {/*Ignorar comentarios con multiples lineas*/}  

/* Simbolos del programa */
 


"++"                 { console.log("Reconocio : " + yytext);  return 'INCRE' } 
"=="                 { console.log("Reconocio : " + yytext);  return 'IGUALIGUAL' } 



"("                  { console.log("Reconocio : " + yytext);  return 'PARA' } 
")"                  { console.log("Reconocio : " + yytext);  return 'PARC' } 
"["                  { console.log("Reconocio : " + yytext);  return 'CORA' } 
"]"                  { console.log("Reconocio : " + yytext);  return 'CORC' } 
","                  { console.log("Reconocio : " + yytext);  return 'COMA' } 
";"                  { console.log("Reconocio : " + yytext);  return 'PYC' } 
"PI"                 { console.log("Reconocio : " + yytext);  return 'PI' } 
"E"                  { console.log("Reconocio : " + yytext);  return 'E' } 
"="                 { console.log("Reconocio : " + yytext);  return 'IGUAL' } 


/* Operadores aritmeticos */
"+"                  { console.log("Reconocio : " + yytext);  return 'MAS' } 
"-"                  { console.log("Reconocio : " + yytext);  return 'MENOS' } 
"*"                  { console.log("Reconocio : " + yytext);  return 'MULTI' }
"/"                  { console.log("Reconocio : " + yytext);  return 'DIV' } 
"^"                  { console.log("Reconocio : " + yytext);  return 'POT' } 
"!"                  { console.log("Reconocio : " + yytext);  return 'NOT' } 
"%"                  { console.log("Reconocio : " + yytext);  return 'MOD' } 
/* Operadores relacionales */
"<="                  { console.log("Reconocio : " + yytext);  return 'MENORIGUAL' } 
"<"                  { console.log("Reconocio : " + yytext);  return 'MENORQUE' } 
">="                  { console.log("Reconocio : " + yytext);  return 'MAYORIGUAL' } 
">"                  { console.log("Reconocio : " + yytext);  return 'MAYORQUE' } 
"!="                  { console.log("Reconocio : " + yytext);  return 'DIFERENTE' } 


/* Operadores logicos */

"||"                  { console.log("Reconocio : " + yytext);  return 'OR' } 
"&&"                  { console.log("Reconocio : " + yytext);  return 'AND' } 
"!"                  { console.log("Reconocio : " + yytext);  return 'NOT' } 


/* Palabras reservadas */
"evaluar"             {console.log("Reconocio: "+yytext); return 'EVALUAR'}
"true"             {console.log("Reconocio: "+yytext); return 'TRUE'}
"false"             {console.log("Reconocio: "+yytext); return 'FALSE'}

"int"             {console.log("Reconocio: "+yytext); return 'INT'}
"string"             {console.log("Reconocio: "+yytext); return 'STRING'}
"double"             {console.log("Reconocio: "+yytext); return 'DOUBLE'}
"char"             {console.log("Reconocio: "+yytext); return 'CHAR'}
"boolean"             {console.log("Reconocio: "+yytext); return 'BOOLEAN'}

"writeline"             {console.log("Reconocio: "+yytext); return 'WRITELINE'}


//SIMBOLOS ER
[0-9]+("."[0-9]+)?\b  {console.log("Reconocio: "+yytext); return 'DECIMAL'}
{num}                 {console.log("Reconocio: "+yytext); return 'ENTERO'}
{id}                 {console.log("Reconocio: "+yytext); return 'ID'}
{cadena}                 {console.log("Reconocio: "+yytext); return 'CADENA'}
{caracter}                 {console.log("Reconocio: "+yytext); return 'CARACTER'}


/*Espacios*/
[\s\r\n\t]            {/*Espacios se ignoran */ }

<<EOF>>               return 'EOF'
.                     return 'ERROR'

/lex

//AREA DE IMPORTS
%{
    const evaluar = require('../Interprete/Evaluar');
    const aritmetica = require('../Interprete/Expresiones/Operaciones/Aritmetica');
    const primitivo = require('../Interprete/Expresiones/Primitivo');

    const writeline = require('../Interprete/Instrucciones/Writeline');
    const declaracion = require('../Interprete/Instrucciones/Declaracion');
    const ast = require('../Interprete/AST/Ast');
    const tipo = require('../Interprete/TablaSimbolos/Tipo');
    const identificador = require('../Interprete/Expresiones/identificador');
%}

/* PRECEDENCIA */

%left 'OR'
%left 'AND'
%right 'NOT'
%left 'IGUALIGUAL' 'DIFERENTE' 'MENORQUE' 'MENORIGUAL' 'MAYORQUE' 'MAYORIGUAL'
%left 'MAS' 'MENOS'
%left 'MULTI' 'DIV'
%left 'POT'
%right 'MOD'
%right UMINUS

%start inicio

%% /* Gramática del lenguaje */

inicio : instrucciones EOF {$$ = new ast.default($1); return $$};

instrucciones : instrucciones instruccion   {$$ = $1; $$.push($2);}
            | instruccion                   {$$ = new Array(); $$.push($1);}
            ;

instruccion : declaracion {$$ = $1;}
            | writeline   {$$ = $1;}
            ;

declaracion : tipo lista_ids IGUAL e PYC    {$$ = new declaracion.default($1,$2,$4,$1.first_line, $1.last_line);}
            | tipo lista_ids PYC            {$$ = new declaracion.default($1,$2,null,$1.first_line, $1.last_line);}
            ;

tipo : DOUBLE       {$$ = new tipo.default("DOBLE");}
     | INT          {$$ = new tipo.default("ENTERO");}
     | STRING       {$$ = new tipo.default("CADENA");}
     | CHAR         {$$ = new tipo.default("CARACTER");}
     | BOOLEAN      {$$ = new tipo.default("BOOLEAN");}
     ;


lista_ids : lista_ids COMA ID           {$$ = $1; $$.push($3);}
          | ID                          {$$ = new Array(); $$.push($1);}
          ; 


writeline : WRITELINE PARA e PARC PYC  {$$ = new writeline.default($3,$1.first_line, $1.last_line);}
          ;


e
    : e MAS e                   {$$ = new aritmetica.default($1, '+', $3, $1.first_line, $1.last_line, false);}
    | e MENOS e                 {$$ = new aritmetica.default($1, '-', $3, $1.first_line, $1.last_line, false);}
    | e MULTI e                 {$$ = new aritmetica.default($1, '*', $3, $1.first_line, $1.last_line, false);}
    | e DIV e                   {$$ = new aritmetica.default($1, '/', $3, $1.first_line, $1.last_line, false);}
    | e POT e                   {$$ = new aritmetica.default($1, '^', $3, $1.first_line, $1.last_line, false);}
    | e MOD e                   {$$ = new aritmetica.default($1, '%', $3, $1.first_line, $1.last_line, false);}
    | e MAYORIGUAL e 
    | e MAYORQUE e
    | e MENORIGUAL e
    | e MENORQUE e
    | e IGUALIGUAL e
    | e DIFERENTE e
    | e AND e 
    | e OR e
    | e NOT
    | MENOS e %prec UMINUS      {$$ = new aritmetica.default($2, 'UNARIO', null, $1.first_line, $1.last_line, true);}
    | PARA e PARC               {$$ = $2;}
    | DECIMAL                   {$$ = new primitivo.default(Number($1),'DOBLE',$1.first_line, $1.last_line);}
    | ENTERO                    {$$ = new primitivo.default(Number($1),'ENTERO',$1.first_line, $1.last_line);}
    | ID                        {$$ = new identificador.default($1,$1.first_line, $1.last_line);}
    | CADENA                    {$1 = $1.slice(1,$1.length-1);$$ = new primitivo.default($1,'CADENA',$1.first_line, $1.last_line);}
    | CARACTER                  {$1 = $1.slice(1,$1.length-1);$$ = new primitivo.default($1,'CARACTER',$1.first_line, $1.last_line);}
    | TRUE                      {$$ = new primitivo.default(true,'BOOLEAN',$1.first_line, $1.last_line);}
    | FALSE                     {$$ = new primitivo.default(false,'BOOLEAN',$1.first_line, $1.last_line);}
    ;


