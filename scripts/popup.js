function popup(cardElement) {
    // Récupère le contenu de la carte (back-content)
    const backContent = cardElement.querySelector('.work-cards-title-back .back-content').innerHTML;

    // Met le contenu dans le popup
    const popupContent = document.getElementById('popupContent');
    popupContent.innerHTML = backContent;

    // Affiche la popup et l'overlay avec effet
    const popupCard = document.getElementById('popupCard');
    const overlay = document.getElementById('overlay');

    // Ajout de la classe active
    popupCard.classList.add('active');
    overlay.classList.add('active');
}

function closePopup() {
    const popupCard = document.getElementById('popupCard');
    const overlay = document.getElementById('overlay');

    // Ajout de l'animation de fermeture
    popupCard.classList.add('closing');
    overlay.classList.remove('active');

    // Attendre la fin de l'animation avant de masquer complètement
    setTimeout(() => {
        popupCard.classList.remove('active', 'closing');
    }, 500); // Durée correspondant aux transitions CSS
}