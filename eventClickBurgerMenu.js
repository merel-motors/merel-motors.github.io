document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.getElementById("burger_menu");
    const navMenu = document.getElementById("menu");

    hamburgerIcon.addEventListener("click", function() {
        this.classList.toggle("active");
        navMenu.classList.toggle("show");
    });

    document.addEventListener("click", function(event) {
        if (!navMenu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
            hamburgerIcon.classList.remove("active");
            navMenu.classList.remove("show");
        }
    });
});