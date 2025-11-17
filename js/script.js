// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o input de pesquisa
    const searchInput = document.getElementById('searchInput');
    
    // Seleciona todos os botões de categoria
    const categoryButtons = document.querySelectorAll('.event-category');
    
    // Função para filtrar as categorias
    function filterCategories(searchTerm) {
        categoryButtons.forEach(function(button) {
            const categoryName = button.textContent.toLowerCase().trim();
            
            // Verifica se o termo de pesquisa está no nome da categoria
            if (searchTerm === '' || categoryName.includes(searchTerm)) {
                // Mostra a categoria
                button.style.display = 'flex';
            } else {
                // Esconde a categoria
                button.style.display = 'none';
            }
        });
    }
    
    // Adiciona evento de input para filtrar em tempo real
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            filterCategories(searchTerm);
        });
        
        // Adiciona evento para limpar a pesquisa quando o campo for limpo
        searchInput.addEventListener('search', function() {
            filterCategories('');
        });
    }
});

