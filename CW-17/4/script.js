function debounce(func, delay) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    }
}

let f = debounce(alert, 1000);
f("a");
setTimeout(() => f("b"), 200);
setTimeout(() => f("c"), 500);
// debounced function waits 1000ms after the last call and then runs:
// alert("c")   

