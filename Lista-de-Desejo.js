document.addEventListener('DOMContentLoaded', function () {
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
});

function toggleLanguageOptions() {
    const languageOptions = document.getElementById('language-options');
    languageOptions.style.display = (languageOptions.style.display === 'block') ? 'none' : 'block';
}


function changeLanguage(language) {
    console.log('Idioma selecionado:', language);
    toggleLanguageOptions(); // Oculta as opções após a seleção
}


function closeDropdown(event) {
    const languageOptions = document.getElementById('language-options');
    if (!languageOptions.contains(event.target) && !document.getElementById('language-button').contains(event.target)) {
        languageOptions.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const languageButton = document.getElementById('language-button');
    languageButton.addEventListener('click', toggleLanguageOptions);
    document.addEventListener('click', closeDropdown); // Escuta cliques fora do dropdown
});


function toggleSelect() {
    const selectContainer = document.getElementById('order-select');
    const arrow = document.getElementById('arrow');

    if (selectContainer.style.display === 'block') {
        selectContainer.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
    } else {
        selectContainer.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
    }
}

function orderImages(order) {
    var imageItems = Array.from(document.querySelectorAll('.image-item'));

    imageItems.sort(function(a, b) {
        var nameA = a.getAttribute('data-name').toLowerCase();
        var nameB = b.getAttribute('data-name').toLowerCase();
        var priceA = parseFloat(a.getAttribute('data-price'));
        var priceB = parseFloat(b.getAttribute('data-price'));
        var discountA = parseInt(a.getAttribute('data-discount'));
        var discountB = parseInt(b.getAttribute('data-discount'));
        var dateA = new Date(a.getAttribute('data-date'));
        var dateB = new Date(b.getAttribute('data-date'));

        if (order === 'az') {
            return nameA > nameB ? 1 : -1;
        } else if (order === 'za') {
            return nameA < nameB ? 1 : -1;
        } else if (order === 'precos') {
            return priceA - priceB;
        } else if (order === 'descontos') {
            return discountB - discountA;
        } else if (order === 'data-lancamento') {
            return dateB - dateA;
        } else if (order === 'novos') {
            return dateB - dateA;
        } else {
            return 0;
        }
    });

    var container = document.querySelector('.images');
    container.innerHTML = '';
    imageItems.forEach(function(item) {
        container.appendChild(item);
    });

    document.getElementById('order-select').style.display = 'none';
    document.getElementById('arrow').style.transform = 'rotate(0deg)';
}


document.getElementById('order-button').addEventListener('click', toggleSelect);


const options = document.querySelectorAll('#order-select div');
options.forEach(option => {
    option.addEventListener('click', function() {
        const order = this.getAttribute('data-value');
        orderImages(order);
    });
});


document.addEventListener('click', function(event) {
    const selectContainer = document.getElementById('order-select');
    if (!selectContainer.contains(event.target) && !document.getElementById('order-button').contains(event.target)) {
        selectContainer.style.display = 'none';
        document.getElementById('arrow').style.transform = 'rotate(0deg)';
    }
});
