function login() {
    window.location.href = "login.html"
}

var pwd1 = document.getElementById("pwd1")
var pwd2 = document.getElementById("pwd2")
pwd2.style.borderBottomColor = "white";
pwd1.addEventListener("input", function (event) {
    var pwd1_value = event.target.value;
    var pwd2_value = pwd2.value
    if (pwd2_value === pwd1_value) {
        pwd2.style.borderBottomColor = "#0de901";
    } else {
        pwd2.style.borderBottomColor = "red";
    }
    pwd2.addEventListener("input", function (event) {
        var pwd2_value = event.target.value;
        console.log(pwd1_value)
        console.log(pwd2_value)
        if (pwd2_value === pwd1_value) {
            pwd2.style.borderBottomColor = "green";
        } else {
            pwd2.style.borderBottomColor = "red";
        }
    });
})


function confirmPwd(pwd1, pwd2) {
    return pwd1 === pwd2;
}


var home_btn = document.getElementById("home_btn");
home_btn.addEventListener("click", function () {
    window.location.href = "index.html";
});
var contact_btn = document.getElementById("contact_btn");
contact_btn.addEventListener("click", function () {
    window.location.href = "contact.html";
});

function showHide() {
    if (pwd1.type === "password") {
        pwd1.type = "text"
    } else {
        pwd1.type = "password"
    }
}
function showHide2() {
    if (pwd2.type === "password") {
        pwd2.type = "text"
    } else {
        pwd2.type = "password"
    }
}