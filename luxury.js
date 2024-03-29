var house_btns = document.getElementsByClassName("learn_more");
for (var i = 0; i < house_btns.length; i++) {
    house_btns[i].addEventListener("click", function (e) {
        var house_id = e.target.parentNode.getAttribute("id");
        goForDetails(house_id)
    });
}

function goForDetails(id) {
    window.location.href = id + ".html";
}

var home_btn = document.getElementById("home_btn");
home_btn.addEventListener("click", function () {
    window.location.href = "index.html";
});
var contact_btn = document.getElementById("contact_btn");
contact_btn.addEventListener("click", function () {
    window.location.href = "contact.html";
});
var map_img = document.getElementById("map_img")
var url_map = "https://www.google.com/maps/place/ISIG+(Institut+Sup%C3%A9rieur+D'informatique+Et+De+Gestion)/@35.6767118,10.1028139,17z/data=!3m1!4b1!4m6!3m5!1s0x12fdc538fbf86c21:0xe96d05a32fb5ca07!8m2!3d35.6767075!4d10.1053888!16s%2Fg%2F1td2pl6k?entry=ttu"
map_img.addEventListener("click", function () {
    window.open(url_map)
})