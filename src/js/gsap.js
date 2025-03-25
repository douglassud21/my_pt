// Certificar-se de que o código só execute após o carregamento completo da página
document.addEventListener("DOMContentLoaded", function() {
    // Verificar se o GSAP e o ScrollTrigger estão disponíveis
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);

        // Animação de Seções ao Scroll
        gsap.utils.toArray(".section").forEach((section) => {
            gsap.from(section, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",  // Começa a animação quando a parte superior da seção estiver 80% visível
                    end: "bottom 20%", // Fim da animação quando 20% da seção estiver visível
                    scrub: true,
                },
            });
        });
    } else {
        console.error("GSAP ou ScrollTrigger não foram carregados corretamente.");
    }

    // Menu Responsivo
    const menuBtn = document.querySelector('.menu-hamburguer');
    const menu = document.querySelector('nav ul');

    // Verificar se o botão e o menu existem
    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('show');
        });
    } else {
        console.error("Botão de menu ou o menu não foram encontrados.");
    }
});
