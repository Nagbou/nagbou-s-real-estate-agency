function submit() {
    var nameInput = document.getElementById("name");
    var nameValue = nameInput.value;
    var nameParts = nameValue.split(" ");
    var firstName = nameParts[0];
    var phone_input = document.getElementById("phone")
    var phone = phone_input.value
    if (checkName(firstName) && checkPhone(phone)) {
        alert("Thank You " + firstName.charAt(0).toUpperCase() + firstName.slice(1) + " for your time. We will certainly call you on this phone number: " + phone)
        location.reload()
    } else {
        if (checkName(firstName)) {
            alert("please enter a valid phone number")
        } else {
            alert("Please enter a valid name containing only alphabetical characters.");
        }
    }
}

function checkName(name) {
    var alpha = /^[A-Za-z]+$/;
    return alpha.test(name);
}


function checkPhone(phone) {
    var numbers = /^[0-9]+$/;
    return numbers.test(phone);
}

var home_btn = document.getElementById("home_btn");
home_btn.addEventListener("click", function () {
    window.location.href = "index.html";
});

var textarea = document.getElementById("myTextarea");
textarea.addEventListener("input", function () {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
});

var map_img = document.getElementById("map_img")
var url_map = "https://www.google.com/maps/place/ISIG+(Institut+Sup%C3%A9rieur+D'informatique+Et+De+Gestion)/@35.6767118,10.1028139,17z/data=!3m1!4b1!4m6!3m5!1s0x12fdc538fbf86c21:0xe96d05a32fb5ca07!8m2!3d35.6767075!4d10.1053888!16s%2Fg%2F1td2pl6k?entry=ttu"
map_img.addEventListener("click", function () {
    window.open(url_map)
})