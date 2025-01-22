document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation pour le gradient du texte
    gsap.to(".language-title", {
        scrollTrigger: {
            trigger: ".language-container", // Élément déclencheur
            start: "top center", // Début de l'animation
            end: "bottom center", // Fin de l'animation
            scrub: true, // Synchronisation avec le scroll
        },
        backgroundPosition: "200% center", // Change la position du gradient
        ease: "none", // Animation linéaire
    });
});