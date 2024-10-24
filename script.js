
// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
    var navButton = document.getElementById("nav-button");
    var navMenu = document.getElementById("nav-menu");

    // Toggle the 'active' class to show/hide the menu
    if (navButton) {
        navButton.addEventListener("click", function() {
            navMenu.classList.toggle("active");
        });
    }

    // Close the navigation menu after clicking a link
    var menuLinks = document.querySelectorAll("#nav-menu a");

    menuLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            if (window.innerWidth <= 1024) { // Only hide the menu on mobile view
                navMenu.classList.remove("active");
            }
        });
    });

    // Ensure the menu resets properly on window resize
    window.addEventListener("resize", function() {
        if (window.innerWidth > 1024) {
            navMenu.classList.remove("active");
        }
    });
});

// Mobile navigation toggle
document.getElementById('nav-button').addEventListener('click', function() {
    var menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active'); // Toggle the menu visibility
});

// Ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    var logo = document.querySelector('.logo img');
    var navButton = document.getElementById("nav-button");

    if (logo && navButton) {
        var logoWidth = logo.offsetWidth; // Get the logo's width
        navButton.style.width = logoWidth + 'px'; // Apply the same width to the button
    }
});
