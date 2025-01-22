document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".hidden");

    const handleVisibility = () => {
        const windowHeight = window.innerHeight;

        elements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            const elementBottom = el.getBoundingClientRect().bottom;

            // Si l'élément est visible dans la fenêtre
            if (elementTop < windowHeight - 50 && elementBottom > 50) {
                setTimeout(() => {
                el.classList.add("visible");
            }, 0);
            } else {
                el.classList.remove("visible");
            }
        });
    };

    // Écoute les événements de scroll
    window.addEventListener("scroll", handleVisibility);

    handleVisibility();
});