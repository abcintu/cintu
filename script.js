// Add an event listener to the navigation button
document.getElementById("nav-button").addEventListener("click", function() {
    var navMenu = document.getElementById("nav-menu");
    
    // Toggle between showing and hiding the menu
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "block";
    }
});

// Close the navigation menu after clicking a link
var menuLinks = document.querySelectorAll("#nav-menu a");

menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        var navMenu = document.getElementById("nav-menu");
        navMenu.style.display = "none"; // Hide the menu after a link is clicked
    });
});

