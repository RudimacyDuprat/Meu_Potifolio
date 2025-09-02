// Seleciona todos os cards de contato
const contactCards = document.querySelectorAll('.contact-card');

contactCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = 'transform 0.3s ease';
    card.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = 'none';
  });
});
