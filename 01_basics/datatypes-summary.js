// Primitive

// 7 types : String, Number, Boolean, null, Undefined, Symbol, Bigint

const score = 100
const scorevalue = 100.3

const islogedin = false
const outsidetemp = null
let userEmail =undefined;

const id = Symbol("123")
const anotherid = Symbol("123")
console.log(id === anotherid);

const bigNumber = 3456789876543333333325699434553999342n




// Reference (Non-Primitive)

// Array, Objects, Functions

const heros =  ["mother", "father","teacher"];

let pet = {
    name: "ruru",
    age:2,
    color:"white"
}

const myfunction = function() {
    console.log("Hello World!");
}

console.log(typeof pet);
