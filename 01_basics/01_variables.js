const accountId = 143636
let accountEmail = "palak@gmail.com"
var accountPassword = "123345"
accountCity = "Jaipur" 
let accountState;

// accountId = 2 / not allowed

accountEmail = "sdshd@gmail.com"
accountPassword = "2121"
accountCity = "mumbai"
console.log(accountId);

/*
prefer not to use var 
becoz of issue in block scope and fucntional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

