document.addEventListener("DOMContentLoaded", function () {
    const showMoreBtn = document.getElementById("showMoreBtn");
    const testimonials = document.getElementById("testimonials");
    const extraTexts = document.querySelectorAll(".extra-text");

    let expanded = false;

    showMoreBtn.addEventListener("click", function () {
        if (!expanded) {
            testimonials.style.maxHeight = "600px"; // Augmente la hauteur de la div
            extraTexts.forEach(text => text.classList.remove("d-none")); // Affiche le texte masqué
            showMoreBtn.textContent = "Voir moins";
        } else {
            testimonials.style.maxHeight = "300px"; // Réduit la hauteur
            extraTexts.forEach(text => text.classList.add("d-none")); // Cache le texte
            showMoreBtn.textContent = "Voir plus";
        }
        expanded = !expanded;
    });

    // Activation automatique du carrousel
    const carousel = new bootstrap.Carousel(document.getElementById("testimonialCarousel"), {
        interval: 3000, // Change automatiquement toutes les 3 secondes
        wrap: true
    });
});
