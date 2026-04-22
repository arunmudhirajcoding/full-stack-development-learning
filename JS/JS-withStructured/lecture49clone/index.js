let src = {
    age:12,
    wt:68,
    ht:180
};

let dest = {};

//cloning using iteration
for(let key in src) {
    let newKey = key;
    let newValue = src[key];
    //insert newKey and value in dest and create a clone
    dest[newKey] = newValue;
}

src.age = 90;

console.log("src: ", src);
console.log("dest: ", dest);

let src2 = {
    value:101,
    name: "Love babbar"
}

// cloning by assign
let dest2 = Object.assign({}, src, src2);

src.age = 90;

console.log("src: ", src);
console.log("dest2: ", dest2);

// cloning by spread operator
let dest3 = {...src};
//let dest3 = src;

src.age = 90;

console.log("src: ", src);
console.log("dest3: ", dest3);

console.log(obj)

obj.color = "White";

console.log(obj)

let src = {
    age: 12,
    wt: 68,
    ht: 180,
};
// src.age = 13;
// console.log(src);

let data = src;
console.log(data);
src.age = 30;
// data.age = 20;
console.log(src);


// deep cloneing : _.cloneDeep, structuredClone(), JSON.parse(JSON.stringify(src))
let src3 = {
    age: 12,
    wt: 68,
    ht: 180,
}

// const _ = require('lodash')
// let desti = _cloneDeep(src3)
let desti = structuredClone(src3)
console.log(desti);
desti.age = 23
console.log(src3, desti);

let destin = JSON.parse(JSON.stringify(src3))
console.log(destin);




