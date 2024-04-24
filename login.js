function submit() {
    // ***********Add condition if disponible at the time set **********
    var nameInput = document.getElementById("first_name");
    var nameValue = nameInput.value;
    var nameParts = nameValue.split(" ");
    var firstName = nameParts[0];


    if (checkName(firstName)) {
        alert("You connected successfully")
        location.reload()
        return;
    } else {
        alert("Please enter a valid name containing only alphabetical characters.");
        return;
    }
}


function checkName(name) {
    var alpha = /^[A-Za-z]+$/;
    return alpha.test(name);
}

var home_btn = document.getElementById("home_btn");
home_btn.addEventListener("click", function () {
    window.location.href = "index.html";
});
var contact_btn = document.getElementById("contact_btn");
contact_btn.addEventListener("click", function () {
    window.location.href = "contact.html";
});

function createAccount() {
    window.location.href = "create_account.html"
}

function forgetPwd() {
    alert("We will send you confirmation message")
}

