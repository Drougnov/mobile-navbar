// Get all navigation items
const navItems = document.querySelectorAll(".navbar__item");

// Add click event listener to each navigation item
navItems.forEach((item) => {
    item.addEventListener("click", () => {
        // Remove active class from all items
        navItems.forEach((navItem) =>
            navItem.classList.remove("navbar__item--active")
        );

        // Add active class to the clicked item
        item.classList.add("navbar__item--active");
    });
});

// Get the mobile navbar container & close icon
const mobileNavbarContainer = document.getElementById(
    "mobile-navbar-container"
);
const navbarCloseIcon = document.getElementById("navbar-close-icon");

// on close icon click
navbarCloseIcon.addEventListener("click", () => {
    // hide the mobile navbar
    mobileNavbarContainer.style.display = "none";
});
