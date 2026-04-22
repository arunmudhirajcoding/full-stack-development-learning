// function definition
function sayMyName() {
    console.log("Love Babbar")
}

//function use - function call
sayMyName();

// loop in a fn
function printCounting() {
    for(let i=1; i<=100; i++) {
        console.log(i);
    }
}

printCounting();

// function printNumber(num) {
//     console.log("Printing NUmber:", num);
// }

// printNumber(5);

// function getAverage(num1, num2) {
//     let avg = (num1 + num2)/2;
//     console.log("Average: ", avg);
// }

// getAverage(3,70);

// return functions
function getSum(a,b,c) {
    let sum = a + b + c;
    return sum;
}

let ans = getSum(1,2,3);
console.log("Printing Sum: ", ans);

function getMyName(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    return fullName;
    //unreachable statements
//     let a = 10;
//     let b= 15;
//     let sum = a + b;
//     console.log(sum);
}

let fullName = getMyName(7, 7);
console.log("Full Name: ", fullName);

//func expression
const getMultiplication = function (a,b) { //best practicee
    return a*b;
}

let ans2 = getMultiplication(2,20);
console.log(ans2);

let squareNumber = function(num) {
    let ans = num**2;
    return ans;
}

let ans3 = squareNumber(5);
console.log(ans3);


// arrow func
let getExp = (x, y) => {
    let ans = x ** y;
    return ans;
};

console.log(getExp(2, 10));

//IIAF
(function() {
    console.log("imedidate invoke fn");
})()


// implicit and explict
const expli = ()=>{
    let a = 2; // need to explicit return
    // console.log(a);
    
}
const impli = ()=>(
    a=2 //implict return 
    // console.log(a);
    
)
let b = impli()
console.log(b);
