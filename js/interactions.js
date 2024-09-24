const ContactTrigger = document.getElementById("contact");
const ContactAbort = document.getElementById("clear");
const ContactDialog = document.getElementById("contact-form");
const CloseTrigger = document.getElementById("close");
const header = document.querySelector('header');

// Função debounce para limitar a frequência da função checkScroll
const debounce = (func, wait = 20) => {
let timeout;
return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

// Função para verificar o scroll da página
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

// Seleciona todos os links âncora da página que começam com '#'
const anchorLinks = document.querySelectorAll('a[href^="#"]');

// Função para realizar o smooth scroll
const smoothScroll = (event) => {
  event.preventDefault(); // Previne o comportamento padrão de pular direto para a âncora
  
  const targetId = event.currentTarget.getAttribute('href'); // Obtém o ID do destino
  const targetElement = document.querySelector(body); // Seleciona o elemento alvo
  
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth', // Faz o scroll suave
      block: 'start' // Alinha o topo do elemento com o topo da página
    });
  }
};

// Adiciona o evento de clique a cada link âncora
anchorLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

ContactTrigger.addEventListener("click", () => {
    ContactDialog.showModal();
});

CloseTrigger.addEventListener("click", () => {
    ContactDialog.close();
});