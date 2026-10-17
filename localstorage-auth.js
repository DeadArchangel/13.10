function checkAuth(login, password) {
    return localStorage.getItem("login") === login &&
           localStorage.getItem("password") === password;
}

console.log(checkAuth("admin", "1234"));
