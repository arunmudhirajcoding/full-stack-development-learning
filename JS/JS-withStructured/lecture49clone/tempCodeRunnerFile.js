let src3 = {
    age: 12,
    wt: 68,
    ht: 180,
}

// const _ = require('lodash')
// let desti = _cloneDeep(src3)
let desti = structuredClone(src3)
console.log(desti);
desti.age = 23
console.log(src3, desti);

let destin = JSON.parse(JSON.stringify(src3))
console.log(destin);