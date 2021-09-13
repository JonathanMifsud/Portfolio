//When user scrolls page, execute stickyMenu
window.onscroll = function() {stickyMenu()};

//Get the navbar
var navbar = document.getElementById("navbar");

//Get offset position of the navbar
var sticky = navbar.offsetTop;

//Add sticky class to navbar when reaches scroll position. Remove "sticky" when leaving scroll position
function stickyMenu(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}