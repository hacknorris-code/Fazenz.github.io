document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".hidden");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        elements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;

            // Si l'élément est visible dans la fenêtre
            if (elementTop < windowHeight - 50) {
                el.classList.add("visible");
            }
        });
    };

    // Écoute les événements de scroll
    window.addEventListener("scroll", revealOnScroll);

    // Exécute une fois pour les éléments visibles au chargement
    revealOnScroll();
});