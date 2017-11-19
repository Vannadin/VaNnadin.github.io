function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "head_menu") {
        x.className += " responsive";
    } else {
        x.className = "head_menu";
    }
}