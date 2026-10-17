function register(login, password) {
    localStorage.setItem("login", login);
    localStorage.setItem("password", password);
}

register("admin", "1234");
