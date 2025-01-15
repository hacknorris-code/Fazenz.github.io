document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                smoothScroll(targetElement);
            }
        });
    });

    function smoothScroll(target) {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const duration = 1500; // Durée en ms
        const easing = (t) =>
            t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2; // Courbe de Bézier cubique (easeInOut)

        let startTime = null;

        function animationScroll(currentTime) {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1); // Limite à 1
            const ease = easing(progress); // Applique l'effet easeInOut
            const scrollPosition =
                startPosition + (targetPosition - startPosition) * ease;

            window.scrollTo(0, scrollPosition);

            if (progress < 1) {
                requestAnimationFrame(animationScroll);
            }
        }

        requestAnimationFrame(animationScroll);
    }
});