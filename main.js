
    document.addEventListener("DOMContentLoaded", function() {
        // Obtém todos os links de navegação
        const navLinks = document.querySelectorAll('.nav-link');

        // Adiciona um listener de rolagem
        window.addEventListener('scroll', function() {
            // Obtém a posição atual de rolagem
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;

            // Itera sobre os links de navegação
            navLinks.forEach(function(link) {
                // Obtém o alvo do link
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                // Verifica se a seção está visível na tela
                if (targetSection.offsetTop <= scrollPosition && targetSection.offsetTop + targetSection.offsetHeight > scrollPosition) {
                    // Adiciona a classe active ao link correspondente
                    link.classList.add('id');
                } else {
                    // Remove a classe active dos outros links
                    link.classList.remove('id');
                }
            });
        });
    });
