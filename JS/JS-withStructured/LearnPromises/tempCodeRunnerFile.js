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
