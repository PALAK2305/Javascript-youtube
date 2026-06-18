const user  = {
    Username: "palak",
    price:999,

    welcomeMessage : function ( ){
        console.log(`${this.Username}, welcome to website `);
    }
}
// user.welcomeMessage()

// function chai (){
//     let username = "palak"
//     console.log(this.username);  
// }
// chai()

// const chai = function (){
//      let username = "palak"
//      console.log(this.username);  
// }


// const chai =  () => {
//      let username = "palak"
//      console.log(this);  
// }
// chai()

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

// const addtwo = (num1, num2) =>  num1 + num2

// const addtwo = (num1, num2) => ( num1 + num2)

const addtwo = (num1, num2) => ({Username: "palak"})
console.log( addtwo(3, 4))