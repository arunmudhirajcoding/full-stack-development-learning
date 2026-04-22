// let obj = {
//     name: "Love",
//     age: 25,
//     weight: 85,
//     height: "6ft 1in",
//     greet: function(){
//         console.log("hello jee kaise ho saare");
//     }
// };

// for in uses for enumerable properties like objects
// for(let key in obj) {
//     console.log(key, " ", obj[key]);
// }

// console.log(obj)
// obj.greet();

// console.log(typeof(obj))

// // let obj2 = obj;

// //creation of arrays
// let arr = [1,2,3,4,5];
// //array constructor
// let brr = new Array('love',100,true);// type=object
// brr.push('Babbar'); // from right
// brr.pop();// from right

// brr.shift();// from left
// brr.unshift('Love Babbar');//from left
// brr.push(20);
// brr.push(40);

// brr.push(70);

// // console.log(brr.slice(2,4) );

// brr.splice(1,0,'kunal');//remove and insert

// console.log(brr);

// // console.log(brr);

// // console.log(typeof(brr));

// let arr = [10,20,30,11,21,44,51];

// let evenArray = arr.filter((number) => {
//     return number%2 === 0; // shortend of bellow ifelse
//     // if(number%2 === 0) {
//     //     return true;
//     // }
//     // else {
//     //     return false;
//     // }
// });
// let arr = [1, 2, 3, "arun", 4, 2, "tharun"];

// let ans = arr.filter((num) => {
//     if (typeof num === "string") {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(ans);

// console.log(evenArray)

// arr.map((number,index) => {
//     console.log(number);
//     console.log(index);
// })

// let ansArray  = arr.map((number) => {
//     return number*number;
// })

// console.log(ansArray)

// let arr = [1,2,'love','kunal', null];

// let ans = arr.filter((value) => {
//     if(typeof(value) == 'number') {
//         return true;
//     }
//     else {
//         return false;
//     }
// });

// console.log(ans);

// let arr = [10, 20, 30, 40];

// let ans = arr.reduce((acc, curr) => {
//     return acc + curr;
// }, 0); // 0 is accumilater initialize value. if there is anyother like 2 then the value  acc+curr = 2+arr

// console.log(ans);

let arr = [9, 1, 7, 4, 2, 8];
// arr.sort();
// //HW: how to do sort in descending order ?
// arr.sort((a,b)=>{
//     return b-a
// });
// console.log(arr);

// console.log(arr.indexOf(9));

// let arr = [10,20,30];

// let length = arr.length;
// console.log("length: " , length);
// //tradiotional loop

// for(let index = 0; index < length; index++) {
//     console.log(arr[index]);
// }

// for each is used if uses for every elemts
// arr.forEach((value, index) => {
//     console.log("Number: ", value, " Index: ", index);
// })

// let arr = [10, 20, 30, 40];

// let get = (value) => {
//     let sum = 0;
//     value.forEach((ele) => {
//         sum = sum + ele;
//     });
//     return sum;
// };

// let ans = get(arr);
// console.log(ans);

// used in iterable like arrray or string
// for(let value of arr) {
//     console.log(value);
// }

// let fullName = "babbar";

// for(let val of fullName) {
//     console.log(val);
// }

// let arr = [10,20,30,40,50];

// let getSum = (arr) => {
//     let sum = 0;
//     arr.forEach((value) => {
//         sum = sum + value;
//     })
//     return sum;
// }

// let totalSum = getSum(arr);
// console.log(totalSum);
