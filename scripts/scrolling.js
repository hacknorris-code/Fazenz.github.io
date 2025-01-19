document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".title");

    if (!title) {
        console.warn("L'élément .title n'a pas été trouvé !");
        return;
    }

    function calculateFontSize() {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollY = window.scrollY;

        // Désactive les calculs si overflow-x: hidden ou pas de défilement vertical
        if (maxScroll <= 0) {
            title.style.fontSize = "14em";
            return;
        }

        const isMobile = window.innerWidth <= 800;
        const minSize = isMobile ? 6 : 16; // Taille minimale
        const maxSize = isMobile ? 24 : 70; // Taille maximale

        const newSize = Math.min(
            maxSize,
            minSize + (scrollY / maxScroll) * (maxSize - minSize)
        );
        title.style.fontSize = `${newSize}em`;
    }

    function handleScroll() {
        requestAnimationFrame(calculateFontSize);
    }

    function handleResize() {
        calculateFontSize();
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    calculateFontSize();
});