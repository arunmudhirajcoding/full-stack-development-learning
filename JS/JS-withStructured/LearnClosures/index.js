


function outerFunction() {
  let name = "Babbar"; // name is binding with inner funcn it is called closures
  // not a copy it will Reference
  function innerFunction() {
    console.log(name);
  }

  return innerFunction;
}
let inner = outerFunction();

inner();
