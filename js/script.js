var navigation = document.querySelector(".navigation");
var button = document.getElementById("clicker");

button.addEventListener("click", showNavigation);


function showNavigation(event) {
    navigation.classList.toggle("closed");
    navigation.classList.add("ease");
    changeIcon();
};

function changeIcon() {
    if (document.querySelector(".navigation").classList.contains("closed")) {
        document.querySelector(".material-icons").innerHTML = "menu_open";
    } else {
        document.querySelector(".material-icons").innerHTML = "menu";
    }
}

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.querySelector(".material-icons").innerHTML = "menu";
    } else {
        document.querySelector(".material-icons").innerHTML = "";
        navigation.classList.remove("ease");
    }
}

var x = window.matchMedia("(max-width: 600px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes