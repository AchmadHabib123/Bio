var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var homeBtn = document.getElementById("homeBtn")

sideNav.style.paddingRight = "-250px";
menuBtn.onclick = function() {
    if (sideNav.style.paddingRight == "-250px") {
        sideNav.style.paddingRight = "0";
    } else {
        sideNav.style.paddingRight = "-250px";
    }
}
var scroll = new SmoothScroll('a[href*="#"', {
    speed: 1000,
    speedAsDuration: true
});