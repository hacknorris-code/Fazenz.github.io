function flipCard(card) {
  card.classList.toggle('flipped');
}

document.addEventListener('DOMContentLoaded', () => {
  const card2 = document.querySelector('.card2'); // La deuxième carte
  const buttonText2 = document.querySelector('.button-text2'); // Bouton à hover
  const buttonText3 = document.querySelector('.button-text3'); // Bouton à toggler
  const hiddenText = document.querySelector('.card2-text-hidden'); // Texte caché

  // Activer le toggle lorsque le bouton-text2 est hover
  buttonText2.addEventListener('mouseover', () => {
      buttonText3.classList.add('toggled'); // Ajouter la classe toggled
      buttonText2.classList.add('hidden'); // Rendre button-text2 invisible
  });

  // Réinitialiser l'état lorsque la carte retourne à sa position initiale
  card2.addEventListener('mouseleave', () => {
      buttonText3.classList.remove('toggled'); // Supprimer la classe toggled
      buttonText2.classList.remove('hidden'); // Rendre button-text2 visible
      hiddenText.style.display = 'flex'; // Masquer le texte caché au reset
      hiddenText.style= 'opacity: 0;'
  });

  // Gérer le toggle du texte caché lors du clic sur le bouton-text3
  buttonText2.addEventListener('mouseover', () => {
      if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
          hiddenText.style.display = 'flex';
          hiddenText.style= 'opacity: 1;' // Afficher le texte
      } else {
          hiddenText.style.display = 'none'; // Masquer le texte
      }
  });
});