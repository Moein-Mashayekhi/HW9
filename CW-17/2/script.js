function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") user.loginOk(); //frist ok - edited user.loginOk()
    else user.loginFail(); //frist fail - edited loginFail()
}
let user = {
    name: 'John',
    loginOk() {
        alert(`${this.name} logged in`);
    },
    loginFail() {
        alert(`${this.name} failed to log in`);
    },
};
askPassword(user.loginOk, user.loginFail);
