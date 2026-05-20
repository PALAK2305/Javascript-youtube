let score = "33"
console.log(typeof score); // aata value string madhe dakhavte pn mala number pahije
let valueInNumber = Number(score)
console.log(typeof valueInNumber);// number
console.log(valueInNumber);// number

let scores = "33abc"
console.log(typeof scores);// string
let valueInNumbers = Number(scores)//number
console.log(typeof valueInNumbers); 
console.log(valueInNumbers);// NaN NOT A NUMBER
// typescript doesnot check strictly

let scored = null
console.log(typeof scored);// object
let valueInNumberd = Number(scored)
console.log(typeof valueInNumberd); //number
console.log( valueInNumberd);// 0

let scoress = undefined
console.log(typeof scoress);// undefined
let valueInNumberss = Number(scoress)
console.log(typeof valueInNumberss); //number
console.log( valueInNumberss);// NaN NOT A NUMBER

let isloggedin = true
console.log(typeof isloggedin);// boolean
let idealgoal = Number(isloggedin)
console.log(typeof idealgoal); //number
console.log( idealgoal);// 1

//"33" => 33
//"33abc" => NaN
//true =>1; false => 0
//"" => false
//"palak" => true