// Display current year in footer
document.addEventListener("DOMContentLoaded", function () {

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Highlight the current page in navigation
    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });

    // Character search functionality
    const characterSearch = document.getElementById("characterSearch");

    if (characterSearch) {

        characterSearch.addEventListener("input", function () {

            const searchValue = characterSearch.value.toLowerCase();

            const cards = document.querySelectorAll(".character-card");

            cards.forEach(function (card) {

                const characterName = card.textContent.toLowerCase();

                if (characterName.includes(searchValue)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }

            });

        });

    }

    // Jutsu search functionality
    const jutsuSearch = document.getElementById("jutsuSearch");

    if (jutsuSearch) {

        jutsuSearch.addEventListener("input", function () {

            const searchValue = jutsuSearch.value.toLowerCase();

            const cards = document.querySelectorAll(".jutsu-card");

            cards.forEach(function (card) {

                const jutsuName = card.textContent.toLowerCase();

                if (jutsuName.includes(searchValue)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }

            });

        });

    }

});