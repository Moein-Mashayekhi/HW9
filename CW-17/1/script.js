function f() {
    alert(this); // object windows
}
let user = {
    g: f.bind(null)
};
// console.log(user.g())   undefiend
user.g(); //null
