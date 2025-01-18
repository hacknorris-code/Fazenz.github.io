document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Empêche le comportement par défaut du lien

            const targetId = this.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                smoothScroll(targetElement, 240); // Applique le défilement fluide personnalisé
            }
        });
    });

    function smoothScroll(target, duration) {
        const startPosition = window.scrollY || window.pageYOffset; // Position actuelle du défilement
        const targetPosition = target.offsetTop; // Position de l'élément cible par rapport au haut de la page
        const distance = targetPosition - startPosition; // Distance à parcourir

        let startTime = null;

        // Fonction d'easing avec effet de rebond (bounce)
        const easing = (t) => {
            return t < 0.5
                ? 4 * t * t * t // Plus lent au début pour un rebond
                : 1 - Math.pow(-2 * t + 2, 3) / 2; // Rebond avant la fin
        };

        function animationScroll(currentTime) {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1); // Limiter la progression à 1 (fin de l'animation)
            const ease = easing(progress); // Appliquer l'effet de rebond

            const scrollPosition = startPosition + distance * ease; // Calculer la nouvelle position du défilement
            window.scrollTo(0, scrollPosition); // Appliquer la position

            if (progress < 1) {
                requestAnimationFrame(animationScroll); // Continue l'animation si ce n'est pas encore terminé
            }
        }

        requestAnimationFrame(animationScroll); // Démarrer l'animation
    }
});