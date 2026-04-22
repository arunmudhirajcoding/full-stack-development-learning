// for loop
for(let i=1; i<=10; i++) {
    console.log("babbar");
}


// do while
let i = 1;
do{
    console.log("babbar");
    //updation
    i++;
}while(i<=10);

// while loop
let j = 1;
while(j <= 10) {
    console.log("babbar");
    j++;
}

// for(let i =1; i<6; i++) {
//     console.log(i);
// }

// let i = 1;
// do{
//     console.log(i);
//     //updation
//     i++;
// }while(i<6);

// let i = 1;
// while(i<6) {
//     console.log(i);
//     i++;
// }

// for(let i=5; i>0; i--) {
//     console.log(i);
// }
// let i = 5;
// do{
//     console.log(i)
//     //updation
//     i--;
// }while(i>0);

// let i = 5;
// while(i>0) {
//     console.log(i);
//     i--;
// }

// loop with conditional
for(let i=1; i<=6; i++) {
    if(i == 4) {
        break;
    }
    else {
        console.log(i);
    }
}

// for(let i = 1; i<=4; i++) {
//     if(i == 3)
//         continue;
//     else
//         console.log(i);
// }

// let i = 1;
// while(i < 5) {
//     console.log("Inside the loop");
//     if(i==3){
//         i++;
//         continue;
//     }

//     else
//         console.log(i);
//     i++;
// }


// Strings - immutable
let firstName = "Love";
let lastName = 'Babbar'; // type string

let name = `Love
Babbar This is
my
Name
hello`;//template strings

console.log(name);

let lfirstName = new String("Love babbar"); // type object
console.log(lfirstName);

let op1 = "English ";
let op2 = "HINDI ";

console.log(op2.length);

let finalAns = `${op1}${op2}`; // concat
console.log(finalAns);

let ans = op1 + op2; // concat
console.log(ans);

// console.log(op1.toUpperCase());
// console.log(op2.toLowerCase())

// let str = "Babbar";
// console.log(str.substring(2,4));

//console.log(str.substring(2));

let sentence = "Hello \\Jee \\Kaise\\ \\ho \\saare";

let words = sentence.split("\\");

console.log(words);

console.log(words.join("-"));
