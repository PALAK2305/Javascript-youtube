

function sayMyName (){
    console.log("P");
    console.log("A");
    console.log("L");
    console.log("A");
    console.log("K");
}
// sayMyName()


// function addTwoNumbers (no1, no2){
//    console.log( no1 + no2);
// }
// addTwoNumbers(5,7)

function addTwoNumbers(no1, no2){
    
    // let result = no1 + no2
    // return result
    

    return no1 + no2
}
const result = addTwoNumbers(3, 5)
// console.log("result: ",result);


function loginUserMessage (username = "sam"){
    if (username === undefined) {
        console.log("Please enter a udername");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("palak"));

function calculatecartprice (val, val2, ...num1) {     //rest operator ...num
    return num1
}
// console.log(calculatecartprice(200, 400, 500));

const user = {
    username : "hitesh",
    price :"230",
}

function handledobject (anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handledobject(user)



