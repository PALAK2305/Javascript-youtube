// const useremail = "palad@jio.com"

// if (useremail) {
//    console.log("got user email");
// } else {
//     console.log("dont have user email");  
// }            having string = true value


// const useremail = ""

// if (useremail) {
//    console.log("got user email");
// } else {
//     console.log("dont have user email");  
// }       having empty string = false value


// const useremail = []

// if (useremail) {
//    console.log("got user email");
// } else {
//     console.log("dont have user email");  
// }       having empty array = true value


// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

// "0", 'false', " ", [], {}, function(){}


// Nullish coalescing operator (??) -> null undefined

let val1;
// val1 = 5 ??  10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

// terniary operator

// condition ? true : false 

const iceteaprice = 100
iceteaprice <= 80 ? console.log("less than 80") : console.log("more than 80");


