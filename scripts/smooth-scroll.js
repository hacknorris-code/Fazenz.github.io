document.addEventListener('DOMContentLoaded', function () {
    // Sélectionne toutes les ancres ayant un href commençant par "#"
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // ID cible
            const targetElement = document.getElementById(targetId); // Élément cible

            // Vérifie si l'élément cible existe
            if (!targetElement) {
                console.error(`Élément cible avec l'id "${targetId}" introuvable.`);
                return;
            }

            // Calcul des positions pour le défilement
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 250; // Durée de l'animation (en ms) prolongée pour un défilement lent
            let startTime = null;

            // Fonction d'animation pour le scroll
            function scrollAnimation(currentTime) {
                if (!startTime) startTime = currentTime; // Définit le temps de départ
                const timeElapsed = currentTime - startTime;

                // Calcul de la position actuelle en utilisant la fonction d'easing
                const scrollAmount = easeInOutBounce(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, Math.round(scrollAmount)); // Utilise Math.round pour éviter le "saut"

                // Continue l'animation si le temps écoulé est inférieur à la durée
                if (timeElapsed < duration) {
                    requestAnimationFrame(scrollAnimation);
                } else {
                    // Si l'animation est terminée, ajuste la position à la cible exacte
                    window.scrollTo(0, targetPosition);
                }
            }

            // Fonction d'easing avec effet de rebond
            function easeInOutBounce(t, b, c, d) {
                const p = 0.3;  // Fréquence du rebond
                const a = 1;    // Amplitude du rebond

                if (t < d / 2) {
                    return (a * Math.pow(2, 10 * (t / d - 1))) + b;
                } else {
                    return (a * Math.pow(2, -10 * (t / d - 1))) + c + b;
                }
            }

            // Lance l'animation
            requestAnimationFrame(scrollAnimation);
        });
    });
});