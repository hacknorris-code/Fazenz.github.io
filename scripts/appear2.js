document.addEventListener("DOMContentLoaded", () => {
    const containers = document.querySelectorAll(".work-card-title");

    const handleVisibility = () => {
        const windowHeight = window.innerHeight;

        containers.forEach((container) => {
            const containerTop = container.getBoundingClientRect().top;
            const containerBottom = container.getBoundingClientRect().bottom;

            // Vérifie si le conteneur est visible
            if (containerTop < windowHeight - 50 && containerBottom > 50) {
                const children = Array.from(container.children);

                children.forEach((child, index) => {
                    const delay = index * 200; // Délai progressif (en ms)

                    // Applique les classes après un délai
                    setTimeout(() => {
                        child.classList.add("visiblee");
                    }, delay);
                });
            } else {
                // Réinitialise les classes si l'élément n'est plus visible
                Array.from(container.children).forEach((child) => {
                    child.classList.remove("visiblee");
                });
            }
        });
    };

    // Écoute les événements de scroll
    window.addEventListener("scroll", handleVisibility);

    handleVisibility();
});