const inputString = "hello i’m a student and search my problems in google";

let modifiedString = inputString
  .replace(/a/g, "@")
  .replace(/e/g, "3")
  .replace(/g/g, "&")
  .replace(/i/g, "!")
  .replace(/o/g, "0");

console.log(modifiedString);