const myobject = {
    js : 'javascript',
    cpp : ' c++',
    rb : "ruby",
    swift: "swift by apple"
}

for (const key in myobject) {
//    console.log(`${key} shortcut is for ${myobject[key]}`); 
}

const programing = ["js","rb","py"]
for (const key in programing) {
    // console.log(programing[key]); 
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('FR',"France")
map.set('IN',"India")

for (const key in map) {
    console.log(key);  
}
