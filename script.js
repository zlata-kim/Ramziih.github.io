document.getElementById("login-toggle").addEventListener("click", function () {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("signup-form").style.display = "none";
});

document.getElementById("signup-toggle").addEventListener("click", function () {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
});
