//singleton is made from constructor
// eg Object.create


// object literals

const mysym = Symbol("mykey1")

 const JsUser = {
    name : "palak",
    age : 21,
    [mysym]: "mykey1",
    location: "mumbai",
    email : "palak@delloitte.com",
    isloggedin : false,
    lastloggedindays : ["Monday", "Saturday"]
 }
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mysym]);

JsUser.email = "palakgoogl.com"
// Object.freeze(JsUser)
JsUser.email = "palak@jio.com"
// console.log(JsUser);

JsUser.greeting = function() {
   console.log("Hello js");
}


JsUser.greetingtwo  = function() {
   console.log(`Hello js user ${this.name}`);
}

 console.log(JsUser.greeting());
 console.log(JsUser.greetingtwo());
 