document.addEventListener("DOMContentLoaded", function () {
    // Load nav
    fetch("assets/Components/nav.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
            document.querySelector(".hamburger").addEventListener("click", toggleMenu);

            // Highlight current menu item after nav is loaded
            highlightActiveLink();
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation for nav:", error);
        });

    // Load footer
    fetch("assets/Components/footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
        })
        .catch(error => console.error("Error loading footer:", error));
});

function toggleMenu() {
    var navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");

    var hamburgerIcon = document.querySelector(".hamburger i");
    if (hamburgerIcon.classList.contains("fa-bars")) {
        hamburgerIcon.classList.remove("fa-bars");
        hamburgerIcon.classList.add("fa-times");
    } else {
        hamburgerIcon.classList.remove("fa-times");
        hamburgerIcon.classList.add("fa-bars");
    }
}

function highlightActiveLink() {
    const currentLocation = window.location.href;
    const menuItems = document.querySelectorAll(".nav-links ul li a");

    menuItems.forEach(item => {
        if (item.href === currentLocation) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}

highlightActiveLink();