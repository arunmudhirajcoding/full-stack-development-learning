let a = 7

// This function takes a number as argument and returns the factorial of that number

// The factorial of a number is the product of all positive integers less than or equal to that number
// For example, factorial(5) = 5 * 4 * 3 * 2 * 1

// We use the reduce function to multiply all the numbers in an array

// The array is created using the keys() function of an array

// The keys() function returns an iterator of the keys of the array

// The slice() function is used to remove the first element of the array (which is 0)

// The reduce() function takes a callback function and an initial value as arguments

// The callback function takes two arguments (previous value and current value) and returns a value

// The reduce() function applies the callback function to each element of the array and returns the final result

function factorial(number){
   let arr = Array.from(Array(number+1).keys())
   let c = arr.slice(1,).reduce((a, b)=> a*b )
   return c
}


function facFor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    return fac
}
console.log(factorial(a))
console.log(facFor(a))