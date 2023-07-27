const myArray = [1, 2, 3, 4, 5];

// forEach implementation using a for loop
function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

// Usage
myForEach(myArray, (value, index) => {
  console.log(`Index: ${index}, Value: ${value}`);
});

// map implementation using a for loop
function myMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
  }
  
  // Usage
  const doubledArray = myMap(myArray, (value) => value * 2);
  console.log(doubledArray);
  
  // find implementation using a for loop
  function myFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        return arr[i];
      }
    }
    return undefined;
  }
  
  // Usage
  const foundValue = myFind(myArray, (value) => value > 3);
  console.log(foundValue);