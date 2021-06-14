import { Tokenizer } from "./tokenizer.js";
import Parser from "./parser.js";
import Compiler from "./compiler.js";
import VM from "./vm.js";

var input =
  "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.";

var tokenizer = new Tokenizer();
var parser = new Parser();
var compiler = new Compiler();

var tokens = tokenizer.tokenize(input);
var ast = parser.parse(tokens);
var program = compiler.compile(ast);

var vm = new VM(program);
vm.run();
console.log(vm.output_buffer);
