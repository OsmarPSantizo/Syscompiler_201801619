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
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[5,7],$V2=[1,9],$V3=[1,10],$V4=[1,11],$V5=[1,12],$V6=[1,13],$V7=[1,14],$V8=[1,15],$V9=[1,16],$Va=[1,17],$Vb=[1,19],$Vc=[1,20],$Vd=[1,21],$Ve=[1,22],$Vf=[1,23],$Vg=[1,24],$Vh=[1,25],$Vi=[1,26],$Vj=[1,27],$Vk=[1,28],$Vl=[1,29],$Vm=[1,30],$Vn=[1,31],$Vo=[1,32],$Vp=[1,33],$Vq=[10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,28],$Vr=[10,12,13,18,19,20,21,22,23,24,25,26,28],$Vs=[10,12,13,14,15,18,19,20,21,22,23,24,25,26,28],$Vt=[10,12,13,14,15,16,18,19,20,21,22,23,24,25,26,28],$Vu=[10,18,19,20,21,22,23,24,25,26,28];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"inicio":3,"instrucciones":4,"EOF":5,"instruccion":6,"EVALUAR":7,"CORA":8,"e":9,"CORC":10,"PYC":11,"MAS":12,"MENOS":13,"MULTI":14,"DIV":15,"POT":16,"MOD":17,"MAYORIGUAL":18,"MAYORQUE":19,"MENORIGUAL":20,"MENORQUE":21,"IGUALIGUAL":22,"DIFERENTE":23,"AND":24,"OR":25,"NOT":26,"PARA":27,"PARC":28,"DECIMAL":29,"ENTERO":30,"ID":31,"CADENA":32,"CARACTER":33,"TRUE":34,"FALSE":35,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"EVALUAR",8:"CORA",10:"CORC",11:"PYC",12:"MAS",13:"MENOS",14:"MULTI",15:"DIV",16:"POT",17:"MOD",18:"MAYORIGUAL",19:"MAYORQUE",20:"MENORIGUAL",21:"MENORQUE",22:"IGUALIGUAL",23:"DIFERENTE",24:"AND",25:"OR",26:"NOT",27:"PARA",28:"PARC",29:"DECIMAL",30:"ENTERO",31:"ID",32:"CADENA",33:"CARACTER",34:"TRUE",35:"FALSE"},
productions_: [0,[3,2],[4,2],[4,1],[6,5],[9,3],[9,3],[9,3],[9,3],[9,3],[9,3],[9,3],[9,3],[9,3],[9,3],[9,3],[9,3],[9,3],[9,3],[9,2],[9,2],[9,3],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
this.$ = $$[$0-1]; return this.$
break;
case 2:
this.$ = $$[$0-1]; this.$.push($$[$0]);
break;
case 3:
this.$ = new Array(); this.$.push($$[$0]);
break;
case 4:
this.$ = new evaluar.default($$[$0-2]);
break;
case 5:
this.$ = new aritmetica.default($$[$0-2], '+', $$[$0], $$[$0-2].first_line, $$[$0-2].last_line, false);
break;
case 6:
this.$ = new aritmetica.default($$[$0-2], '-', $$[$0], $$[$0-2].first_line, $$[$0-2].last_line, false);
break;
case 7:
this.$ = new aritmetica.default($$[$0-2], '*', $$[$0], $$[$0-2].first_line, $$[$0-2].last_line, false);
break;
case 8:
this.$ = new aritmetica.default($$[$0-2], '/', $$[$0], $$[$0-2].first_line, $$[$0-2].last_line, false);
break;
case 9:
this.$ = new aritmetica.default($$[$0-2], '^', $$[$0], $$[$0-2].first_line, $$[$0-2].last_line, false);
break;
case 10:
this.$ = new aritmetica.default($$[$0-2], '%', $$[$0], $$[$0-2].first_line, $$[$0-2].last_line, false);
break;
case 20:
this.$ = new aritmetica.default($$[$0], 'UNARIO', null, $$[$0-1].first_line, $$[$0-1].last_line, true);
break;
case 21:
this.$ = $$[$0-1];
break;
case 22:
this.$ = new primitivo.default(Number($$[$0]),'DOBLE',$$[$0].first_line, $$[$0].last_line);
break;
case 23:
this.$ = new primitivo.default(Number($$[$0]),'ENTERO',$$[$0].first_line, $$[$0].last_line);
break;
case 25:
$$[$0] = $$[$0].slice(1,$$[$0].length-1);this.$ = new primitivo.default($$[$0],'CADENA',$$[$0].first_line, $$[$0].last_line);
break;
case 26:
$$[$0] = $$[$0].slice(1,$$[$0].length-1);this.$ = new primitivo.default($$[$0],'CARACTER',$$[$0].first_line, $$[$0].last_line);
break;
case 27:
this.$ = new primitivo.default(true,'BOOLEAN',$$[$0].first_line, $$[$0].last_line);
break;
case 28:
this.$ = new primitivo.default(false,'BOOLEAN',$$[$0].first_line, $$[$0].last_line);
break;
}
},
table: [{3:1,4:2,6:3,7:$V0},{1:[3]},{5:[1,5],6:6,7:$V0},o($V1,[2,3]),{8:[1,7]},{1:[2,1]},o($V1,[2,2]),{9:8,13:$V2,27:$V3,29:$V4,30:$V5,31:$V6,32:$V7,33:$V8,34:$V9,35:$Va},{10:[1,18],12:$Vb,13:$Vc,14:$Vd,15:$Ve,16:$Vf,17:$Vg,18:$Vh,19:$Vi,20:$Vj,21:$Vk,22:$Vl,23:$Vm,24:$Vn,25:$Vo,26:$Vp},{9:34,13:$V2,27:$V3,29:$V4,30:$V5,31:$V6,32:$V7,33:$V8,34:$V9,35:$Va},{9:35,13:$V2,27:$V3,29:$V4,30:$V5,31:$V6,32:$V7,33:$V8,34:$V9,35:$Va},o($Vq,[2,22]),o($Vq,[2,23]),o($Vq,[2,24]),o($Vq,[2,25]),o($Vq,[2,26]),o($Vq,[2,27]),o($Vq,[2,28]),{11:[1,36]},{9:37,13:$V2,27:$V3,29:$V4,30:$V5,31:$V6,32:$V7,33:$V8,34:$V9,35:$Va},{9:38,13:$V2,27:$V3,29:$V4,30:$V5,31:$V6,32:$V7,33:$V8,34:$V9,35:$Va},{9:39,13:$V2,27:$V3,29:$V4,30:$V5,31:$V6,32:$V7,33:$V8,34:$V9,35:$Va},{9:40,13:$V2,27:$V3,29:$V4,30:$V5,31:$V6,32:$V7,33:$V8,34:$V9,35:$Va},{9:41,13:$V2,27:$V3,29:$V4,30:$V5,31:$V6,32:$V7,33:$V8,34:$V9,35:$Va},{9:42,13:$V2,27:$V3,29:$V4,30:$V5,31:$V6,32:$V7,33:$V8,34:$V9,35:$Va},{9:43,13:$V2,27:$V3,29:$V4,30:$V5,31:$V6,32:$V7,33:$V8,34:$V9,35:$Va},{9:44,13:$V2,27:$V3,29:$V4,30:$V5,31:$V6,32:$V7,33:$V8,34:$V9,35:$Va},{9:45,13:$V2,27:$V3,29:$V4,30:$V5,31:$V6,32:$V7,33:$V8,34:$V9,35:$Va},{9:46,13:$V2,27:$V3,29:$V4,30:$V5,31:$V6,32:$V7,33:$V8,34:$V9,35:$Va},{9:47,13:$V2,27:$V3,29:$V4,30:$V5,31:$V6,32:$V7,33:$V8,34:$V9,35:$Va},{9:48,13:$V2,27:$V3,29:$V4,30:$V5,31:$V6,32:$V7,33:$V8,34:$V9,35:$Va},{9:49,13:$V2,27:$V3,29:$V4,30:$V5,31:$V6,32:$V7,33:$V8,34:$V9,35:$Va},{9:50,13:$V2,27:$V3,29:$V4,30:$V5,31:$V6,32:$V7,33:$V8,34:$V9,35:$Va},o($Vq,[2,19]),o($Vq,[2,20]),{12:$Vb,13:$Vc,14:$Vd,15:$Ve,16:$Vf,17:$Vg,18:$Vh,19:$Vi,20:$Vj,21:$Vk,22:$Vl,23:$Vm,24:$Vn,25:$Vo,26:$Vp,28:[1,51]},o($V1,[2,4]),o($Vr,[2,5],{14:$Vd,15:$Ve,16:$Vf,17:$Vg}),o($Vr,[2,6],{14:$Vd,15:$Ve,16:$Vf,17:$Vg}),o($Vs,[2,7],{16:$Vf,17:$Vg}),o($Vs,[2,8],{16:$Vf,17:$Vg}),o($Vt,[2,9],{17:$Vg}),o($Vt,[2,10],{17:$Vg}),o($Vu,[2,11],{12:$Vb,13:$Vc,14:$Vd,15:$Ve,16:$Vf,17:$Vg}),o($Vu,[2,12],{12:$Vb,13:$Vc,14:$Vd,15:$Ve,16:$Vf,17:$Vg}),o($Vu,[2,13],{12:$Vb,13:$Vc,14:$Vd,15:$Ve,16:$Vf,17:$Vg}),o($Vu,[2,14],{12:$Vb,13:$Vc,14:$Vd,15:$Ve,16:$Vf,17:$Vg}),o($Vu,[2,15],{12:$Vb,13:$Vc,14:$Vd,15:$Ve,16:$Vf,17:$Vg}),o($Vu,[2,16],{12:$Vb,13:$Vc,14:$Vd,15:$Ve,16:$Vf,17:$Vg}),o([10,24,25,28],[2,17],{12:$Vb,13:$Vc,14:$Vd,15:$Ve,16:$Vf,17:$Vg,18:$Vh,19:$Vi,20:$Vj,21:$Vk,22:$Vl,23:$Vm,26:$Vp}),o([10,25,28],[2,18],{12:$Vb,13:$Vc,14:$Vd,15:$Ve,16:$Vf,17:$Vg,18:$Vh,19:$Vi,20:$Vj,21:$Vk,22:$Vl,23:$Vm,24:$Vn,26:$Vp}),o($Vq,[2,21])],
defaultActions: {5:[2,1]},
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
case 3: console.log("Reconocio : " + yy_.yytext);  return 22 
break;
case 4: console.log("Reconocio : " + yy_.yytext);  return 27 
break;
case 5: console.log("Reconocio : " + yy_.yytext);  return 28 
break;
case 6: console.log("Reconocio : " + yy_.yytext);  return 8 
break;
case 7: console.log("Reconocio : " + yy_.yytext);  return 10 
break;
case 8: console.log("Reconocio : " + yy_.yytext);  return 11 
break;
case 9: console.log("Reconocio : " + yy_.yytext);  return 'PI' 
break;
case 10: console.log("Reconocio : " + yy_.yytext);  return 'E' 
break;
case 11: console.log("Reconocio : " + yy_.yytext);  return 'IGUAL' 
break;
case 12: console.log("Reconocio : " + yy_.yytext);  return 12 
break;
case 13: console.log("Reconocio : " + yy_.yytext);  return 13 
break;
case 14: console.log("Reconocio : " + yy_.yytext);  return 14 
break;
case 15: console.log("Reconocio : " + yy_.yytext);  return 15 
break;
case 16: console.log("Reconocio : " + yy_.yytext);  return 16 
break;
case 17: console.log("Reconocio : " + yy_.yytext);  return 26 
break;
case 18: console.log("Reconocio : " + yy_.yytext);  return 17 
break;
case 19: console.log("Reconocio : " + yy_.yytext);  return 20 
break;
case 20: console.log("Reconocio : " + yy_.yytext);  return 21 
break;
case 21: console.log("Reconocio : " + yy_.yytext);  return 18 
break;
case 22: console.log("Reconocio : " + yy_.yytext);  return 19 
break;
case 23: console.log("Reconocio : " + yy_.yytext);  return 23 
break;
case 24: console.log("Reconocio : " + yy_.yytext);  return 25 
break;
case 25: console.log("Reconocio : " + yy_.yytext);  return 24 
break;
case 26: console.log("Reconocio : " + yy_.yytext);  return 26 
break;
case 27:console.log("Reconocio: "+yy_.yytext); return 7
break;
case 28:console.log("Reconocio: "+yy_.yytext); return 34
break;
case 29:console.log("Reconocio: "+yy_.yytext); return 35
break;
case 30:console.log("Reconocio: "+yy_.yytext); return 29
break;
case 31:console.log("Reconocio: "+yy_.yytext); return 30
break;
case 32:console.log("Reconocio: "+yy_.yytext); return 31
break;
case 33:console.log("Reconocio: "+yy_.yytext); return 32
break;
case 34:console.log("Reconocio: "+yy_.yytext); return 33
break;
case 35:/*Espacios se ignoran */ 
break;
case 36:return 5
break;
case 37:return 'ERROR'
break;
}
},
rules: [/^(?:\/\/.*)/i,/^(?:\/\*((\*+[^/*])|([^*]))*\**\*\/)/i,/^(?:\+\+)/i,/^(?:==)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\])/i,/^(?:;)/i,/^(?:PI\b)/i,/^(?:E\b)/i,/^(?:=)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:\^)/i,/^(?:!)/i,/^(?:%)/i,/^(?:<=)/i,/^(?:<)/i,/^(?:>=)/i,/^(?:>)/i,/^(?:!=)/i,/^(?:\|\|)/i,/^(?:&&)/i,/^(?:!)/i,/^(?:evaluar\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:[0-9]+(\.[0-9]+)?\b)/i,/^(?:([0-9]+))/i,/^(?:([a-zñA-ZÑ_][a-zñA-ZÑ0-9_]*))/i,/^(?:(("((\\([\'\"\\nrt]))|([^\"\\]))*")))/i,/^(?:(('((\\([\'\"\\nrt]))|([^\'\\]))')))/i,/^(?:[\s\r\n\t])/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],"inclusive":true}}
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