
async function getData() {
    setTimeout(function() {
        console.log("I am inside set Timeout block")
      }, 3000);
      return Promise.resolve("arun");
}

// let output2  = await getData();
let output  = getData(); // if sync it doesnt wait for Promise and get {"arun"} but is async it wait for promise so {<pending>}
console.log(output);
// console.log(output2);

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 5000)
  });

  // let result = await promise; // wait until the promise resolves (*)

  alert(promise); // "done!"
}

f();

// ///await - ?

// //fetch API

// await is used in only async functions . 
// why async fn? they are automatically promise fn like fetching data 
// why await? to stop next async functions which is depend on first await async fn
// these async, await or promises may have rejections or failure . so to handle them use trycatch 
function changeColor(color,deplay) {
    return new Promise((res,rej)=>{
        setTimeout(() => {
        console.log(color);
        res()
    }, deplay);
    })
}

//v4 async-await
async function color() {
  try {
    await changeColor("red",1000)
    await changeColor("green",1000)
  } catch (error) {
    console.log("not changed"+error);
  } // this trycatch handle the error and our fn works after error also .means below code runs

  console.log("hi arun");
  
}
// async function getData() {

//     // get request - async
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
//     // parse json - async
//     let data = await response.json();
//     console.log( data );
// }
// getData();
//scenario:
//prepare url / api endpoint -> sync
//await //fetch data - > network call -> async
//process data ->sync

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
    method: "POST",
    body: JSON.stringify({ username: "love babbar" }),
    headers: myHeaders,
  };

//apikey
async function getData() {
    const url = "https://dummyjson.com/posts";
    const response = await fetch(url);
    let data = await response.json();
    console.log("get data response: ", data);
}
async function postData() {
    const response = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Love babbar -> I am in love with someone.',
          userId: 5,
          /* other post data */
        })
      })
    let data = await response.json();
    console.log("post data response: ", data);
}

async function processData() {
    await postData();
    await getData();
}
processData();
 
async function myapi() {
  let end_point = await fetch('https://jsonplaceholder.typicode.com/todos/posts')
  console.log(end_point.json())
}

myapi()


// axios is better than fetch bcoz fetch only rejects when network failure but axios rejects for page not found (400) or internal server failure (500) etc and it automatically converts the response to json .





