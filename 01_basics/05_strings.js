const name = "palak"
const repocount = 50

// console.log(name + repocount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String('palak-pc')

console.log(gamename[0]);
console.log(gamename.__proto__);

// console.log(gamename.length);
// console.log(gamename.toUpperCase());
console.log(gamename.charAt("2"));
console.log(gamename.indexOf("a"));

const newString = gamename.substring(0,4)
console.log(newString);

const anotherString = gamename.slice(0,-4)
console.log(anotherString);


const newstringOne = "   palak   "
console.log(newstringOne);
console.log(newstringOne.trim());

const url = "https://palak.com/palak%20damgude"
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));


console.log(gamename.split('-'));
