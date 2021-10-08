/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var interprete = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,8],$V1=[1,9],$V2=[1,10],$V3=[1,11],$V4=[1,12],$V5=[1,7],$V6=[5,14,15,16,17,18,21],$V7=[11,13,19],$V8=[1,26],$V9=[1,23],$Va=[1,22],$Vb=[1,24],$Vc=[1,25],$Vd=[1,27],$Ve=[1,28],$Vf=[1,29],$Vg=[1,30],$Vh=[1,34],$Vi=[1,35],$Vj=[1,36],$Vk=[1,37],$Vl=[1,38],$Vm=[1,39],$Vn=[1,40],$Vo=[1,41],$Vp=[1,42],$Vq=[1,43],$Vr=[1,44],$Vs=[1,45],$Vt=[1,46],$Vu=[1,47],$Vv=[1,48],$Vw=[13,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],$Vx=[13,23,24,25,30,31,32,33,34,35,36,37,38],$Vy=[13,23,24,25,26,27,30,31,32,33,34,35,36,37,38],$Vz=[13,23,24,25,26,27,28,30,31,32,33,34,35,36,37,38],$VA=[13,23,30,31,32,33,34,35,36,37,38];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"inicio":3,"instrucciones":4,"EOF":5,"instruccion":6,"declaracion":7,"writeline":8,"tipo":9,"lista_ids":10,"IGUAL":11,"e":12,"PYC":13,"DOUBLE":14,"INT":15,"STRING":16,"CHAR":17,"BOOLEAN":18,"COMA":19,"ID":20,"WRITELINE":21,"PARA":22,"PARC":23,"MAS":24,"MENOS":25,"MULTI":26,"DIV":27,"POT":28,"MOD":29,"MAYORIGUAL":30,"MAYORQUE":31,"MENORIGUAL":32,"MENORQUE":33,"IGUALIGUAL":34,"DIFERENTE":35,"AND":36,"OR":37,"NOT":38,"DECIMAL":39,"ENTERO":40,"CADENA":41,"CARACTER":42,"TRUE":43,"FALSE":44,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",11:"IGUAL",13:"PYC",14:"DOUBLE",15:"INT",16:"STRING",17:"CHAR",18:"BOOLEAN",19:"COMA",20:"ID",21:"WRITELINE",22:"PARA",23:"PARC",24:"MAS",25:"MENOS",26:"MULTI",27:"DIV",28:"POT",29:"MOD",30:"MAYORIGUAL",31:"MAYORQUE",32:"MENORIGUAL",33:"MENORQUE",34:"IGUALIGUAL",35:"DIFERENTE",36:"AND",37:"OR",38:"NOT",39:"DECIMAL",40:"ENTERO",41:"CADENA",42:"CARACTER",43:"TRUE",44:"FALSE"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,1],[7,5],[7,3],[9,1],[9,1],[9,1],[9,1],[9,1],[10,3],[10,1],[8,5],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,3],[12,2],[12,2],[12,3],[12,1],[12,1],[12,1],[12,1],[12,1],[12,1],[12,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
this.$ = new ast.default($$[$0-1]); return this.$
break;
case 2:
this.$ = $$[$0-1]; this.$.push($$[$0]);
break;
case 3: case 14:
this.$ = new Array(); this.$.push($$[$0]);
break;
case 4: case 5:
this.$ = $$[$0];
break;
case 6:
this.$ = new declaracion.default($$[$0-4],$$[$0-3],$$[$0-1],$$[$0-4].first_line, $$[$0-4].last_line);
break;
case 7:
this.$ = new declaracion.default($$[$0-2],$$[$0-1],null,$$[$0-2].first_line, $$[$0-2].last_line);
break;
case 8:
this.$ = new tipo.default("DOBLE");
break;
case 9:
this.$ = new tipo.default("ENTERO");
break;
case 10:
this.$ = new tipo.default("CADENA");
break;
case 11:
this.$ = new tipo.default("CARACTER");
break;
case 12:
this.$ = new tipo.default("BOOLEAN");
break;
case 13:
this.$ = $$[$0-2]; this.$.push($$[$0]);
break;
case 15:
this.$ = new writeline.default($$[$0-2],$$[$0-4].first_line, $$[$0-4].last_line);
break;
case 16:
this.$ = new aritmetica.default($$[$0-2], '+', $$[$0], $$[$0-2].first_line, $$[$0-2].last_line, false);
break;
case 17:
this.$ = new aritmetica.default($$[$0-2], '-', $$[$0], $$[$0-2].first_line, $$[$0-2].last_line, false);
break;
case 18:
this.$ = new aritmetica.default($$[$0-2], '*', $$[$0], $$[$0-2].first_line, $$[$0-2].last_line, false);
break;
case 19:
this.$ = new aritmetica.default($$[$0-2], '/', $$[$0], $$[$0-2].first_line, $$[$0-2].last_line, false);
break;
case 20:
this.$ = new aritmetica.default($$[$0-2], '^', $$[$0], $$[$0-2].first_line, $$[$0-2].last_line, false);
break;
case 21:
this.$ = new aritmetica.default($$[$0-2], '%', $$[$0], $$[$0-2].first_line, $$[$0-2].last_line, false);
break;
case 31:
this.$ = new aritmetica.default($$[$0], 'UNARIO', null, $$[$0-1].first_line, $$[$0-1].last_line, true);
break;
case 32:
this.$ = $$[$0-1];
break;
case 33:
this.$ = new primitivo.default(Number($$[$0]),'DOBLE',$$[$0].first_line, $$[$0].last_line);
break;
case 34:
this.$ = new primitivo.default(Number($$[$0]),'ENTERO',$$[$0].first_line, $$[$0].last_line);
break;
case 35:
this.$ = new identificador.default($$[$0],$$[$0].first_line, $$[$0].last_line);
break;
case 36:
$$[$0] = $$[$0].slice(1,$$[$0].length-1);this.$ = new primitivo.default($$[$0],'CADENA',$$[$0].first_line, $$[$0].last_line);
break;
case 37:
$$[$0] = $$[$0].slice(1,$$[$0].length-1);this.$ = new primitivo.default($$[$0],'CARACTER',$$[$0].first_line, $$[$0].last_line);
break;
case 38:
this.$ = new primitivo.default(true,'BOOLEAN',$$[$0].first_line, $$[$0].last_line);
break;
case 39:
this.$ = new primitivo.default(false,'BOOLEAN',$$[$0].first_line, $$[$0].last_line);
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:6,14:$V0,15:$V1,16:$V2,17:$V3,18:$V4,21:$V5},{1:[3]},{5:[1,13],6:14,7:4,8:5,9:6,14:$V0,15:$V1,16:$V2,17:$V3,18:$V4,21:$V5},o($V6,[2,3]),o($V6,[2,4]),o($V6,[2,5]),{10:15,20:[1,16]},{22:[1,17]},{20:[2,8]},{20:[2,9]},{20:[2,10]},{20:[2,11]},{20:[2,12]},{1:[2,1]},o($V6,[2,2]),{11:[1,18],13:[1,19],19:[1,20]},o($V7,[2,14]),{12:21,20:$V8,22:$V9,25:$Va,39:$Vb,40:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg},{12:31,20:$V8,22:$V9,25:$Va,39:$Vb,40:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg},o($V6,[2,7]),{20:[1,32]},{23:[1,33],24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,29:$Vm,30:$Vn,31:$Vo,32:$Vp,33:$Vq,34:$Vr,35:$Vs,36:$Vt,37:$Vu,38:$Vv},{12:49,20:$V8,22:$V9,25:$Va,39:$Vb,40:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg},{12:50,20:$V8,22:$V9,25:$Va,39:$Vb,40:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg},o($Vw,[2,33]),o($Vw,[2,34]),o($Vw,[2,35]),o($Vw,[2,36]),o($Vw,[2,37]),o($Vw,[2,38]),o($Vw,[2,39]),{13:[1,51],24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,29:$Vm,30:$Vn,31:$Vo,32:$Vp,33:$Vq,34:$Vr,35:$Vs,36:$Vt,37:$Vu,38:$Vv},o($V7,[2,13]),{13:[1,52]},{12:53,20:$V8,22:$V9,25:$Va,39:$Vb,40:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg},{12:54,20:$V8,22:$V9,25:$Va,39:$Vb,40:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg},{12:55,20:$V8,22:$V9,25:$Va,39:$Vb,40:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg},{12:56,20:$V8,22:$V9,25:$Va,39:$Vb,40:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg},{12:57,20:$V8,22:$V9,25:$Va,39:$Vb,40:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg},{12:58,20:$V8,22:$V9,25:$Va,39:$Vb,40:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg},{12:59,20:$V8,22:$V9,25:$Va,39:$Vb,40:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg},{12:60,20:$V8,22:$V9,25:$Va,39:$Vb,40:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg},{12:61,20:$V8,22:$V9,25:$Va,39:$Vb,40:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg},{12:62,20:$V8,22:$V9,25:$Va,39:$Vb,40:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg},{12:63,20:$V8,22:$V9,25:$Va,39:$Vb,40:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg},{12:64,20:$V8,22:$V9,25:$Va,39:$Vb,40:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg},{12:65,20:$V8,22:$V9,25:$Va,39:$Vb,40:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg},{12:66,20:$V8,22:$V9,25:$Va,39:$Vb,40:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg},o($Vw,[2,30]),o($Vw,[2,31]),{23:[1,67],24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,29:$Vm,30:$Vn,31:$Vo,32:$Vp,33:$Vq,34:$Vr,35:$Vs,36:$Vt,37:$Vu,38:$Vv},o($V6,[2,6]),o($V6,[2,15]),o($Vx,[2,16],{26:$Vj,27:$Vk,28:$Vl,29:$Vm}),o($Vx,[2,17],{26:$Vj,27:$Vk,28:$Vl,29:$Vm}),o($Vy,[2,18],{28:$Vl,29:$Vm}),o($Vy,[2,19],{28:$Vl,29:$Vm}),o($Vz,[2,20],{29:$Vm}),o($Vz,[2,21],{29:$Vm}),o($VA,[2,22],{24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,29:$Vm}),o($VA,[2,23],{24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,29:$Vm}),o($VA,[2,24],{24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,29:$Vm}),o($VA,[2,25],{24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,29:$Vm}),o($VA,[2,26],{24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,29:$Vm}),o($VA,[2,27],{24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,29:$Vm}),o([13,23,36,37],[2,28],{24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,29:$Vm,30:$Vn,31:$Vo,32:$Vp,33:$Vq,34:$Vr,35:$Vs,38:$Vv}),o([13,23,37],[2,29],{24:$Vh,25:$Vi,26:$Vj,27:$Vk,28:$Vl,29:$Vm,30:$Vn,31:$Vo,32:$Vp,33:$Vq,34:$Vr,35:$Vs,36:$Vt,38:$Vv}),o($Vw,[2,32])],
defaultActions: {8:[2,8],9:[2,9],10:[2,10],11:[2,11],12:[2,12],13:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

    const evaluar = require('../Interprete/Evaluar');
    const aritmetica = require('../Interprete/Expresiones/Operaciones/Aritmetica');
    const primitivo = require('../Interprete/Expresiones/Primitivo');

    const writeline = require('../Interprete/Instrucciones/Writeline');
    const declaracion = require('../Interprete/Instrucciones/Declaracion');
    const ast = require('../Interprete/AST/Ast');
    const tipo = require('../Interprete/TablaSimbolos/Tipo');
    const identificador = require('../Interprete/Expresiones/identificador');
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* Ignoramos los comentarios simples */
break;
case 1:/*Ignorar comentarios con multiples lineas*/
break;
case 2: console.log("Reconocio : " + yy_.yytext);  return 'INCRE' 
break;
case 3: console.log("Reconocio : " + yy_.yytext);  return 34 
break;
case 4: console.log("Reconocio : " + yy_.yytext);  return 22 
break;
case 5: console.log("Reconocio : " + yy_.yytext);  return 23 
break;
case 6: console.log("Reconocio : " + yy_.yytext);  return 'CORA' 
break;
case 7: console.log("Reconocio : " + yy_.yytext);  return 'CORC' 
break;
case 8: console.log("Reconocio : " + yy_.yytext);  return 19 
break;
case 9: console.log("Reconocio : " + yy_.yytext);  return 13 
break;
case 10: console.log("Reconocio : " + yy_.yytext);  return 'PI' 
break;
case 11: console.log("Reconocio : " + yy_.yytext);  return 'E' 
break;
case 12: console.log("Reconocio : " + yy_.yytext);  return 11 
break;
case 13: console.log("Reconocio : " + yy_.yytext);  return 24 
break;
case 14: console.log("Reconocio : " + yy_.yytext);  return 25 
break;
case 15: console.log("Reconocio : " + yy_.yytext);  return 26 
break;
case 16: console.log("Reconocio : " + yy_.yytext);  return 27 
break;
case 17: console.log("Reconocio : " + yy_.yytext);  return 28 
break;
case 18: console.log("Reconocio : " + yy_.yytext);  return 38 
break;
case 19: console.log("Reconocio : " + yy_.yytext);  return 29 
break;
case 20: console.log("Reconocio : " + yy_.yytext);  return 32 
break;
case 21: console.log("Reconocio : " + yy_.yytext);  return 33 
break;
case 22: console.log("Reconocio : " + yy_.yytext);  return 30 
break;
case 23: console.log("Reconocio : " + yy_.yytext);  return 31 
break;
case 24: console.log("Reconocio : " + yy_.yytext);  return 35 
break;
case 25: console.log("Reconocio : " + yy_.yytext);  return 37 
break;
case 26: console.log("Reconocio : " + yy_.yytext);  return 36 
break;
case 27: console.log("Reconocio : " + yy_.yytext);  return 38 
break;
case 28:console.log("Reconocio: "+yy_.yytext); return 'EVALUAR'
break;
case 29:console.log("Reconocio: "+yy_.yytext); return 43
break;
case 30:console.log("Reconocio: "+yy_.yytext); return 44
break;
case 31:console.log("Reconocio: "+yy_.yytext); return 15
break;
case 32:console.log("Reconocio: "+yy_.yytext); return 16
break;
case 33:console.log("Reconocio: "+yy_.yytext); return 14
break;
case 34:console.log("Reconocio: "+yy_.yytext); return 17
break;
case 35:console.log("Reconocio: "+yy_.yytext); return 18
break;
case 36:console.log("Reconocio: "+yy_.yytext); return 21
break;
case 37:console.log("Reconocio: "+yy_.yytext); return 39
break;
case 38:console.log("Reconocio: "+yy_.yytext); return 40
break;
case 39:console.log("Reconocio: "+yy_.yytext); return 20
break;
case 40:console.log("Reconocio: "+yy_.yytext); return 41
break;
case 41:console.log("Reconocio: "+yy_.yytext); return 42
break;
case 42:/*Espacios se ignoran */ 
break;
case 43:return 5
break;
case 44:return 'ERROR'
break;
}
},
rules: [/^(?:\/\/.*)/i,/^(?:\/\*((\*+[^/*])|([^*]))*\**\*\/)/i,/^(?:\+\+)/i,/^(?:==)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\])/i,/^(?:,)/i,/^(?:;)/i,/^(?:PI\b)/i,/^(?:E\b)/i,/^(?:=)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:\^)/i,/^(?:!)/i,/^(?:%)/i,/^(?:<=)/i,/^(?:<)/i,/^(?:>=)/i,/^(?:>)/i,/^(?:!=)/i,/^(?:\|\|)/i,/^(?:&&)/i,/^(?:!)/i,/^(?:evaluar\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:int\b)/i,/^(?:string\b)/i,/^(?:double\b)/i,/^(?:char\b)/i,/^(?:boolean\b)/i,/^(?:writeline\b)/i,/^(?:[0-9]+(\.[0-9]+)?\b)/i,/^(?:([0-9]+))/i,/^(?:([a-zñA-ZÑ_][a-zñA-ZÑ0-9_]*))/i,/^(?:(("((\\([\'\"\\nrt]))|([^\"\\]))*")))/i,/^(?:(('((\\([\'\"\\nrt]))|([^\'\\]))')))/i,/^(?:[\s\r\n\t])/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = interprete;
exports.Parser = interprete.Parser;
exports.parse = function () { return interprete.parse.apply(interprete, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}