const getUserElements = () => {
    const userInput = prompt("Enter elements separated by comma:");
    const elements = userInput.split(" ");
    return elements.map(element => element.trim());
}
console.log(getUserElements())