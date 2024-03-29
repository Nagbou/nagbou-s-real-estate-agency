var category = ["category", "luxury", "residential", "home", "commercial", "house", "houses", "shop"];
var contact = ["contact", "phone", "map", "call", "email", "address", "visit",
    "location", "reach out", "message", "get in touch", "reach", "communicate", "connect", "info", "directions"];
var about = ["about", "us", "who", "what", "our", "story", "mission", "vision",
    "history", "team", "values", "philosophy", "background", "purpose", "overview"];

const search_btn = document.getElementById("search_btn")
var search_input = document.getElementById("search_input");

search_input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        search_btn.click();
    }
});

search_btn.addEventListener("click", function () {
    var i = 0
    var input_value = search_input.value.trim().split(" ");
    var exit = false

    do {
        if (itIncludes(category, input_value)) {
            goForSection(category_section)
            exit = true
        } else {
            i++
        }
    } while ((i < category.length) && (exit === false))
    if (exit === false) {
        i = 0
        do {
            if (itIncludes(contact, input_value)) {
                goForSection(contact_section)
                exit = true
            } else {
                i++
            }
        } while ((i < contact.length) && (exit === false))
    }
    if (exit === false) {
        i = 0
        do {
            if (itIncludes(about, input_value)) {
                goForSection(about_section)
                exit = true
            } else {
                i++
            }
        } while ((i < contact.length) && (exit === false))
    }

})

function goAbout() {
    window.location.href = "about.html"
}

function goForSection(section_id) {
    switch (section_id) {
        case category_section:
            var section = document.getElementById("category_section");
            break;
        case contact_section:
            window.location.href = "contact.html"
            break;
        case about_section:
            window.location.href = "about.html";
            break;
        default:
    }

    section.scrollIntoView({ behavior: 'smooth' });
}

function itIncludes(array1, array2) {
    let j = 0
    let k = 0
    let found = false
    do {
        do {
            if (array1[j] === array2[k]) {
                found = true
                return found
            }

            else {
                k++
            }
        } while ((found === false) && (k < array2.length))
        if (found === false) {
            j++
            k = 0
        }
    } while ((j < array1.length) && (found === false))
    return found
}

function luxury() {
    window.location.href = "luxury.html";
}
function residential() {
    window.location.href = "residential.html";
}
function commercial() {
    window.location.href = "commercial.html";
}

var home_btn = document.getElementById("home_btn");
home_btn.addEventListener("click", function () {
    window.location.href = "index.html";
});
var contact_btn = document.getElementById("contact_btn");
contact_btn.addEventListener("click", function () {
    window.location.href = "contact.html";
});

var section = document.getElementById("about_section");
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function onScroll() {
    if (isInViewport(section)) {
        var counter = document.getElementById("counter");
        var i = 0;
        setInterval(function () {
            if (i <= 125) {
                counter.innerText = "+ " + i;
                i++;
            } else {
                clearInterval();
            }
        }, 60);
    }
}
window.addEventListener("scroll", onScroll);

var map_img = document.getElementById("map_img")
var url_map = "https://www.google.com/maps/place/ISIG+(Institut+Sup%C3%A9rieur+D'informatique+Et+De+Gestion)/@35.6767118,10.1028139,17z/data=!3m1!4b1!4m6!3m5!1s0x12fdc538fbf86c21:0xe96d05a32fb5ca07!8m2!3d35.6767075!4d10.1053888!16s%2Fg%2F1td2pl6k?entry=ttu"
map_img.addEventListener("click", function () {
    window.open(url_map)
})