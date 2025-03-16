document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent page jump

            const sectionId = this.getAttribute("data-section");

            // Hide all sections
            sections.forEach((section) => section.style.display = "none");

            // Show the selected section
            document.getElementById(sectionId).style.display = "block";
        });
    });
});
