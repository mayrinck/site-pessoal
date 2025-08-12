const ContactTrigger = document.getElementById("contact");
const ContactAbort = document.getElementById("clear");
const ContactDialog = document.getElementById("contact-form");
const CloseTrigger = document.getElementById("close");
const header = document.querySelector('header');

// Função debounce para limitar a frequência da função checkScroll
const debounce = (func, wait = 10) => {
let timeout;
return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

// Função para verificar o scroll da página e alterar o header caso haja algum
const checkScroll = () => {
const { scrollY } = window;  // Usando desestruturação
    if (scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

// Escuta o evento de scroll da janela com debounce para otimizar a performance
window.addEventListener('scroll', debounce(checkScroll));

ContactTrigger.addEventListener("click", () => {
    ContactDialog.showModal();
});

CloseTrigger.addEventListener("click", () => {
    ContactDialog.close();
});

// Escuta o evento de clique de um botão e abre o compartilhador nativo da plataforma
document.getElementById("share").addEventListener("click", async () => {
    const tituloArtigo = document.querySelector("h1")?.textContent.trim() || "este artigo";
    const textoCompartilhamento = `Acabei de ler este artigo: ${tituloArtigo}, no site do @RenanMayrinck`;

    if (navigator.share) {
    try {
        await navigator.share({
        title: document.title,
        text: textoCompartilhamento,
        url: window.location.href
        });
        console.log("Compartilhamento realizado com sucesso!");
    } catch (error) {
        console.error("Erro ao compartilhar:", error);
    }
    } else {
    alert("O compartilhamento nativo não é suportado neste dispositivo/navegador.");
    }
});