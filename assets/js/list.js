document.addEventListener("DOMContentLoaded", function () {
    const services = {
        soins: {
            image: "assets/img/soins.jpg",
            text: "Nos soins naturels utilisent des plantes médicinales pour apaiser le corps et l'esprit."
        },
        consultation: {
            image: "assets/img/consultation.jpg",
            text: "Prenez rendez-vous pour une consultation personnalisée avec notre tradi-praticien."
        },
        bien_etre: {
            image: "assets/img/bien_etre",
            text: "Découvrez nos soins de bien-être, incluant massages et relaxation."
        }
    };

    document.querySelectorAll(".service-item").forEach(item => {
        item.addEventListener("click", function () {
            const service = this.getAttribute("data-service");
            document.getElementById("service-image").src = services[service].image;
            document.getElementById("service-text").textContent = services[service].text;
            
            document.getElementById("service-image").classList.remove("d-none");
            document.getElementById("service-text").classList.remove("d-none");
        });
    });
});
