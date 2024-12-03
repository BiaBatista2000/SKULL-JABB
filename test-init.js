$(document).ready(function(){
  $('.popular-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false, // Mantém as setas do Slick ocultas
    infinite: true
  });

  // Funções para os botões customizados de navegação
  $('.botton').click(function() {
    $('.popular-carousel').slick('slickPrev');
  });
  
  $('.botton-two').click(function() {
    $('.popular-carousel').slick('slickNext');
  });

  // Efeito de expansão ao passar o mouse
  $('.popular-carousel .carousel-item').hover(
    function() {
      $(this).css({
        'transform': 'scale(1.1)',
        'transition': 'transform 0.3s ease'
      });
    }, 
    function() {
      $(this).css('transform', 'scale(1)');
    }
  );
});

    // Adiciona listeners de evento para idioma
    document.addEventListener('DOMContentLoaded', () => {
      const languageButton = document.getElementById('language-button');
      
      languageButton.addEventListener('click', toggleLanguageOptions);
      document.addEventListener('click', closeDropdown); // Escuta cliques fora do dropdown
  });

  document.addEventListener("DOMContentLoaded", function() {
      const searchBar = document.querySelector(".search-bar");
      const searchIcon = document.querySelector(".search-icon");
    
      function performSearch() {
          const query = searchBar.value.trim();
          if (query) {
              window.location.href = `Pesquisa.html`;
          }
      }
    
      searchIcon.addEventListener("click", performSearch);
    
      searchBar.addEventListener("keypress", function(event) {
          if (event.key === "Enter") {
              performSearch();
          }
      });
    
      const inputs = document.querySelectorAll(".code-input");
      const submitButton = document.querySelector(".submit-button");
    
      inputs.forEach((input, index) => {
          input.addEventListener("input", () => {
              if (input.value.length === 1 && index < inputs.length - 1) {
                  inputs[index + 1].focus();
              }
          });
    
          input.addEventListener("keydown", (e) => {
              if (e.key === "Backspace" && index > 0 && input.value === "") {
                  inputs[index - 1].focus();
              }
          });
      });
    
      submitButton.addEventListener("click", () => {
          const code = Array.from(inputs).map(input => input.value).join("");
          if (code.length === inputs.length) {
              alert(`Código digitado: ${code}`);
          } else {
              alert("Por favor, preencha todos os campos.");
          }
      });
    });

//Função para alternar a exibição das opções de idioma
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