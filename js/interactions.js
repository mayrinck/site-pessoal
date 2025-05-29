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

//Nas páginas de artigo, verifica se o usuário clicou no botão de compartilhar e então abre o diálogo nativo de compartilhamento da plataforma (se houver)
const url = window.location.href;
const title = document.querySelector("h1").innerHTML;
const shareLink = url.substring(url.lastIndexOf('/')+1);

const shareData = {
    title: title,
    url: shareLink,
};

const shareTrigger = document.querySelector("#share");

shareTrigger.addEventListener("click", async () => {
    navigator.share(shareData);
});

const botao = document.getElementById('copy');

botao.addEventListener('click', () => {
    navigator.clipboard.writeText(url)
    .then(() => {
        // Feedback visual
        const textoOriginal = botao.innerText;
        botao.innerText = '✅ Copiado!';
        botao.classList.add('copiado');

        setTimeout(() => {
        botao.innerText = textoOriginal;
        botao.classList.remove('copiado');
        }, 750);
    })
    .catch(err => {
        console.error('Erro ao copiar o link:', err);
        alert('❌ Não foi possível copiar o link.');
    });
});