// Convert object to string
function objectToString(obj) {
    let result = "";
    for (let key in obj) {
      result += `${key}@@${obj[key]}&&`;
    }
    // Remove the last separator character '&&'

    return result.slice(0, -2);
  }
  
  // Convert string to object
  function stringToObject(str) {
    const obj = {};
    const pairs = str.split("&&");
    for (let pair of pairs) {
      const [key, value] = pair.split("@@");
      obj[key] = value;
    }
    return obj;
  }
  
  // Usage
  const inputObject = { name: "ali", family: "rahmani" };
  const outputString = objectToString(inputObject);
  console.log(outputString);
  
  const inputString = "name@@ali&&family@@rahmani";
  const outputObject = stringToObject(inputString);
  console.log(outputObject);