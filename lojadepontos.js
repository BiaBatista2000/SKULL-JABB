// Função para mostrar a imagem do carrossel
function showImage(imageId) {
    // Aqui você vai esconder e mostrar a imagem do carrossel conforme o id da imagem selecionada
    const images = document.querySelectorAll('.carousel-item'); // Ajuste se necessário para seu carrossel
    images.forEach(image => {
      image.style.display = 'none'; // Esconde todas as imagens
    });
  
    const selectedImage = document.getElementById(imageId);
    if (selectedImage) {
      selectedImage.style.display = 'block'; // Mostra a imagem selecionada
    }
  }


document.addEventListener('DOMContentLoaded', function () {
  const carousels = document.querySelectorAll('.carousel, .carousel2'); 

  carousels.forEach(carousel => {
      const items = carousel.querySelector('.items');
      const prevButton = carousel.querySelector('.prev, .prev');
      const nextButton = carousel.querySelector('.next, .next');
      
      let currentPosition = 0;
      const itemWidth = items.querySelector('.item').clientWidth; 
      const itemMargin = parseInt(window.getComputedStyle(items.querySelector('.item')).marginRight); 
      const visibleItems = 3; 
      const totalItems = items.querySelectorAll('.item').length; 

      
      nextButton.addEventListener('click', () => {
          if (currentPosition < totalItems - visibleItems) {
              currentPosition++;
              updateCarousel();
          }
      });

      prevButton.addEventListener('click', () => {
          if (currentPosition > 0) {
              currentPosition--;
              updateCarousel();
          }
      });

      function updateCarousel() {
          const newTransform = -(currentPosition * (itemWidth + itemMargin));
          items.style.transform = `translateX(${newTransform}px)`;
      }
  });
});

function toggleLanguageOptions() {
    const languageOptions = document.getElementById('language-options');
    languageOptions.style.display = (languageOptions.style.display === 'block') ? 'none' : 'block';
}

// Função para alterar o idioma
function changeLanguage(language) {
    console.log('Idioma selecionado:', language);
    toggleLanguageOptions(); // Oculta as opções após a seleção
}

// Função para fechar o dropdown ao clicar fora dele
function closeDropdown(event) {
    const languageOptions = document.getElementById('language-options');
    
    // Verifica se o clique foi fora do dropdown e do botão
    if (!languageOptions.contains(event.target) && !document.getElementById('language-button').contains(event.target)) {
        languageOptions.style.display = 'none';
    }
}

// Adiciona listeners de evento para idioma
document.addEventListener('DOMContentLoaded', () => {
    const languageButton = document.getElementById('language-button');
    
    languageButton.addEventListener('click', toggleLanguageOptions);
    document.addEventListener('click', closeDropdown); // Escuta cliques fora do dropdown
});





