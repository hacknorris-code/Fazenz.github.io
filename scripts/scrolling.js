document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".title");

    // Vérifie si l'élément .title est trouvé
    if (!title) {
        console.warn("L'élément .title n'a pas été trouvé !");
        return;
    } else {
        console.log("Élément .title trouvé :", title);
    }

    // Calcul de la taille de police en fonction du scroll
    function calculateFontSize() {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollY = window.scrollY;

        // Vérifie les valeurs de maxScroll et scrollY
        console.log("maxScroll:", maxScroll, "scrollY:", scrollY);

        // Si la page ne défile pas, utiliser une taille fixe minimale
        if (maxScroll <= 0) {
            title.style.fontSize = "14em"; // Taille par défaut
            console.log("Taille de police par défaut appliquée : 12em");
            return;
        }

        const isMobile = window.innerWidth <= 800;
        const minSize = isMobile ? 4 : 12; // Taille minimale
        const maxSize = isMobile ? 24 : 70; // Taille maximale

        // Calcul de la nouvelle taille de police
        const newSize = Math.min(maxSize, minSize + (scrollY / maxScroll) * (maxSize - minSize));
        title.style.fontSize = `${newSize}em`;

        console.log("Nouvelle taille de police : ", newSize); // Log pour vérifier le calcul
    }

    // Fonction pour gérer le défilement
    function handleScroll() {
        console.log("Scroll détecté");
        requestAnimationFrame(calculateFontSize);
    }

    // Fonction pour gérer le redimensionnement de la fenêtre
    function handleResize() {
        console.log("Redimensionnement de la fenêtre détecté");
        calculateFontSize(); // Recalcule la taille lors du redimensionnement
    }

    // Ajoute les écouteurs d'événements
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Appel initial pour définir la taille de police
    calculateFontSize();
});