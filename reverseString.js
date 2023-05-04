const reverseStringIterative = (someText) => {
  let count = someText.length - 1;
  let newText = "";
  for (let i = count; i >= 0; i--) {
    newText += someText[i];
  }
  return newText
}




const reverseStringRecursive = (someText, newText = "") => {
  
  if (newText.length == someText.length) {
    return newText
  }
  let arrayOfLeters = someText;

  newText += arrayOfLeters[(arrayOfLeters.length - 1) - newText.length];
  someText = arrayOfLeters.toString(); 

  return reverseStringRecursive(someText, newText);
}

console.log(reverseStringRecursive("ABC"))