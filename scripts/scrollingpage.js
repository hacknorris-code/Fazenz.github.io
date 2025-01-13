document.addEventListener("DOMContentLoaded", () => {
    console.log("Le fichier scrolling-page.js est bien chargé !");
    
    let currentSectionIndex = 0;
    const sections = document.querySelectorAll('.section');
    const elementsToShow = document.querySelectorAll('.element-to-show');
    let isTransitioning = false;
    let scrollAmount = 0;
    const scrollThreshold = window.innerHeight;

    function changeSection(direction) {
        if (isTransitioning) return;

        isTransitioning = true;

        sections[currentSectionIndex].classList.remove('visible');
        sections[currentSectionIndex].classList.add('hidden');

        if (direction === 'down' && currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
        } else if (direction === 'up' && currentSectionIndex > 0) {
            currentSectionIndex--;
        }

        sections[currentSectionIndex].classList.remove('hidden');
        sections[currentSectionIndex].classList.add('visible');

        showElementsForSection(currentSectionIndex);

        setTimeout(() => {
            isTransitioning = false;
        }, 1000);
    }

    function showElementsForSection(sectionIndex) {
        elementsToShow.forEach(element => element.classList.remove('visible'));
        const sectionElements = sections[sectionIndex].querySelectorAll('.element-to-show');
        sectionElements.forEach(element => {
            element.classList.add('visible');
        });
    }

    window.addEventListener('wheel', (e) => {
        if (isTransitioning) return;

        scrollAmount += e.deltaY;

        if (scrollAmount >= scrollThreshold) {
            changeSection('down');
            scrollAmount = 0;
        } else if (scrollAmount <= -scrollThreshold) {
            changeSection('up');
            scrollAmount = 0;
        }
    });

    sections[currentSectionIndex].classList.add('visible');
    showElementsForSection(currentSectionIndex);
});