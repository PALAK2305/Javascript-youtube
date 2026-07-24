// if

// if(true){

// }



// const temp = 41

// if ( temp === 50) {
//     console.log("temp is equal to 50 ");
// } else {
//     console.log("temp is greater  than 50");
// }

// const score = 200;

// if(score > 100){
//     const power = " fly"
//     console.log(`user power: ${power}`); 
// }

const balance = 1000

// if( balance > 500) console.log("test"),console.log("test2");

// if(balance < 500){
//     console.log("less than"); 
// } else if (balance < 750) {
//     console.log("less than 750"); 
// } else{
// console.log("less than 1200"); 
// }

// const userloggedIn = true 
// const debitcard = true

//  if ( balance < 500){
//     console.log("less than 500");
//  }
//  else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }

const userloggedIn = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromEmail = true

if (userloggedIn && debitcard) {
    console.log("Allow to buy course "); 
}

if(loggedinfromEmail || loggedinfromgoogle)  {
    console.log("user logged in");
}

