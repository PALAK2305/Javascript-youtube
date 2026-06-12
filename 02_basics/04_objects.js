
// singleton Object
// const tinderuser = new Object()


// non singleton object

const tinderuser = {}

tinderuser.ID = "123ABC"
tinderuser.name = "sammy"
tinderuser.isloggedin = false

// console.log(tinderuser);

const regularuser = {
    email : "raj@gmail.com",
    fullname : {
        userfullname : {
            firstname : "palak",
            lastname : "damgude",
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1 : "a", 2: "b"}
const obj2 = {3 : "a", 4: "b"}
const obj4 = {5 : "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2 , obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    // {
    //     id : 1,
    //     email: "h@gmail.com"  
    // },
    // {
    //     id : 1,
    //     email: "h@gmail.com"  
    // },
    // {
    //     id : 1,
    //     email: "h@gmail.com"  
    // },
]

// users[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));


const course = {
    coursename: "js in hindi",
    price : "999",
    courseInstructor :"hira"
}

// course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor);


// json syntax

// {
//    " name":" palak",
//    "age" : "22",
//    "nationality" :"India"
// }



