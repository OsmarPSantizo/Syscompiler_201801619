var parser = require("../../gramatica").parser;

function exec(input){
    return parser.parse(input)
}

var twenty = exec("Evaluar[1+1];")