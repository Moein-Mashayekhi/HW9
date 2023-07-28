const myArray = [1, 2, 3, 4, 5];

// forEach implementation using a for loop
function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

const mycallback = (v,i) =>{
  console.log(`Index: ${i}, Value: ${v}`);
}

// Usage
myForEach(myArray, mycallback);



// map implementation using a for loop
function myMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
  }

  const mycallback2 = (v) => v *2 
  
  
  // Usage
  const doubledArray = myMap(myArray, mycallback2);
  console.log(doubledArray);
  
  // find implementation using a for loop
  function myFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        return arr[i];
      }
    }
    return undefined;
  }
  
  const mycallback3 = (v) => v>3
  
  // Usage
  const foundValue = myFind(myArray, mycallback3);
  console.log(foundValue);

 