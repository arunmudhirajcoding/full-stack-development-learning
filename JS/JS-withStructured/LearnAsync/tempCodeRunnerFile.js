
async function getData() {
    setTimeout(function() {
        console.log("I am inside set Timeout block")
      }, 3000);
      return Promise.resolve("arun");
}

// let output2  = await getData();
let output  = getData(); // if sync it doesnt wait for Promise and get {"arun"} but is async it wait for promise so {<pending>}
console.log(output);