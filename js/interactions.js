const ContactTrigger = document.getElementById("contact");
const ContactTrigger2 = document.getElementById("othercontact");
const ContactAbort = document.getElementById("clear");
const ContactDialog = document.getElementById("contact-form");
const NavTrigger = document.getElementById("menu-trigger");
const NavDialog = document.getElementById("mobnav");
const NavClose = document.getElementById("navclose");
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

ContactTrigger2.addEventListener("click", () => {
    NavDialog.close();
    ContactDialog.showModal();
});

NavTrigger.addEventListener("click", () => {
    NavDialog.showModal();
});

CloseTrigger.addEventListener("click", () => {
    ContactDialog.close();
});

NavClose.addEventListener("click", () => {
    NavDialog.close();
});