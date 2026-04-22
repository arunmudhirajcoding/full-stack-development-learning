var age = 25;

if(true) {
    console.log(age);
}

// functioned scope var//
function solve() {
    var age = 25;
    console.log(age);
}
console.log(age);
solve();

// re-assign var
var x = 10;
var x = 20;

// blocked scope let
// {
//     let a = 10;
//     console.log(a);
// }

// cant re-assign
let a = 20;
a = 30;

// let a = 10; // syntax error due to redeclared
a = "bababr";
a = true;
a = null;

const b = 28;
console.log(b);

// b = 20; // type error due to reassignment
console.log(b);

// let marks = 20.2345;
// marks = "Babbar";
// marks = true;

let marks = 923691643589612956198435971349858734895674398175698173971389678913768917638965718936789173598671893768917368973896718976891378917;
console.log(marks); // unbounded identifers in js

// let mark;
// console.log(typeof(mark));
// var a = 10;
// let a = "arun";
// console.log(a);
// console.log(a);
// a = True;
// a = 10;
