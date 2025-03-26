document.addEventListener("DOMContentLoaded", function () {
    // Initialisation du carrousel Bootstrap
    let testimonialCarousel = new bootstrap.Carousel(document.getElementById("testimonialCarousel"), {
        interval: 5000, // Change d'élément toutes les 5 secondes
        ride: "carousel"
    });

    // Gestion du bouton "Voir plus"
    let showMoreBtn = document.getElementById("showMoreBtn");
    let extraTexts = document.querySelectorAll(".extra-text");

    let expanded = false;

    showMoreBtn.addEventListener("click", function () {
        if (!expanded) {
            extraTexts.forEach(text => text.classList.remove("d-none")); // Affiche le texte caché
            showMoreBtn.textContent = "Voir moins";
        } else {
            extraTexts.forEach(text => text.classList.add("d-none")); // Cache le texte
            showMoreBtn.textContent = "Voir plus";
        }
        expanded = !expanded; // Alterne entre voir plus et voir moins
    });
});
