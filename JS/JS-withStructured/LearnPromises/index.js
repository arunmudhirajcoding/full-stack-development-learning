let firstPromise = new Promise( (resolve, reject) => {

    setTimeout(function sayMyName() {
        console.log("My Name is Love babbar");
    }, 0);
} );

let promiseing = new Promise((resolve, reject)=> {
    let success = true;
    if(success) {
        resolve(10);
    }
    else {
        reject("Internal Server Error");
    }
});

promiseing
    .then((message) => {
        console.log("first msg:" + message);
        return 20;
    })
    .then((message) => {
        console.log("second msg: " + message);
        return 30;
    })
    .then((message) => {
        console.log("third msg: " + message);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally((message) => {
        console.log("Main to final hu, chalunga pakka");
    });

// promise1.then((message) => {
//     console.log("Then ka message is " + message);
// }).catch((error)=> {
//     console.log("Error: " + error);
// })

let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "First");
});
let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Second");
});
let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "Third");
});

Promise.all([promise3, promise2, promise1])
    .then((values) => {
        console.log(values);
    })
    .catch((error) => {
        console.error("error:" + error);
    });

let pro = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("hii im setTimeout");
        // resolve("resolve kuda aipoaye")
    },4000);
    return(1);
});
const pr02 = setTimeout(()=>{
    console.log("hii im setTimeout");
    // resolve("resolve kuda aipoaye")
},4000);
clearTimeout(pro);

let pr = new Promise((resolve, reject) => {
    reject("arun solves");
});
pr.catch(()=>{
    console.log("not solved");
})


//Applicaton
function loadScript(src) {
    return new Promise(function(resolve, reject) {
      let script = document.createElement('script');
      script.src = src;
  
      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`Script load error for ${src}`));
  
      document.head.append(script);
    });
  }

  loadScript(index.js)


function changeColor(color,deplay) {
    return new Promise((res,rej)=>{
        setTimeout(() => {
        console.log(color);
        res()
    }, deplay);
    })
    
}
// function changeColor(color,deplay,callback=()=>{}) {
//     setTimeout(() => {
//         console.log(color);
//         callback()
//     }, deplay);
// }
    
// v1 manual time
// changeColor("red",1000)
// changeColor("orange",2000)
// changeColor("green",3000)

// v2 callBack (callback hell)
// changeColor("red",1000,()=>{

//     changeColor("orange",1000,()=>{
//         changeColor("green",1000)
//     })
// })


// v3 promise
// nested
changeColor("red",1000)
.then(
    ()=>changeColor("green",1000)
    .then(
        ()=>changeColor("blue",1000)
    )
)
.catch(()=>{
    console.log("not change");
    
})
// chaining
changeColor("red",2000)
.then(
    ()=>changeColor("green",1000)
)
.then(
    ()=>changeColor("blue",1000)
)
.catch(()=>{
    console.log("not change");
    
})


// v4 in async folder
