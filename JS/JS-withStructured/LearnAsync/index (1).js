
// async function getData() {
//     setTimeout(function() {
//         console.log("I am inside set Timeout block")
//       }, 3000);
//       return Promise.resolve("arun");
// }

// let output  = getData();

// async function f() {

//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 5000)
//   });

//   // let result = await promise; // wait until the promise resolves (*)

//   alert(promise); // "done!"
// }

// f();

// // ///await - ?

// // //fetch API

// // async function getData() {

// //     // get request - async
// //     let response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
// //     // parse json - async
// //     let data = await response.json();
// //     console.log( data );
// // }
// // getData();
// //scenario:
// //prepare url / api endpoint -> sync
// //await //fetch data - > network call -> async
// //process data ->sync

// const myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// const url = "https://jsonplaceholder.typicode.com/posts";

// const options = {
//     method: "POST",
//     body: JSON.stringify({ username: "love babbar" }),
//     headers: myHeaders,
//   };
// //apikey
// async function getData() {
//     const url = "https://dummyjson.com/posts";
//     const response = await fetch(url);
//     let data = await response.json();
//     console.log("get data response: ", data);
// }
// async function postData() {
//     const response = await fetch('https://dummyjson.com/posts/add', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           title: 'Love babbar -> I am in love with someone.',
//           userId: 5,
//           /* other post data */
//         })
//       })
//     let data = await response.json();
//     console.log("post data response: ", data);
// }

// async function processData() {
//     await postData();
//     await getData();
// }
// processData();

async function myapi() {
  let end_point = await fetch('https://jsonplaceholder.typicode.com/todos/posts')
  console.log(end_point.json())
}

myapi()

