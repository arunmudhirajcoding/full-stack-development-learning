// let src = {
//     age:12,
//     wt:68,
//     ht:180
// };

// let dest = {};
// //cloning using iteration
// for(let key in src) {
//     let newKey = key;
//     let newValue = src[key];
//     //insert newKey and value in dest and create a clone
//     dest[newKey] = newValue;
// }

// src.age = 90;

// console.log("src: ", src);
// console.log("dest: ", dest);

// let src2 = {
//     value:101,
//     name: "Love babbar"
// }

// let dest = Object.assign({}, src, src2);

// src.age = 90;

// console.log("src: ", src);
// console.log("dest: ", dest);

// let dest = {...src};
// //let dest = src;

// src.age = 90;

// console.log("src: ", src);
// console.log("dest: ", dest);

// console.log(obj)

// obj.color = "White";

// console.log(obj)

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
