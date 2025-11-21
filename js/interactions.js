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
    ContactDialog.classList.add("slide-in-elliptic-top-fwd");
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

//Nas páginas de artigo, verifica se o usuário clicou no botão de compartilhar e então abre o diálogo nativo de compartilhamento da plataforma (se houver)
const url = window.location.href;
const title = document.querySelector("h1").innerHTML;
const shareLink = url.substring(url.lastIndexOf('/')+1);

const shareData = {
    title: title,
    url: shareLink,
};

const shareTrigger = document.querySelector("#share");

if (shareTrigger) {
    // Guardrail para caso não exista botão share, ele não execute o código
    shareTrigger.addEventListener("click", async () => {
        navigator.share(shareData);
    });
}

//Nas páginas de artigo, verifica se o usuário clicou no botão copiar e se sim, copia a URL da página e então aplica uma animação ao botão;
const botao = document.getElementById('copy');

if (botao) {
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
}

// No CTA final da página, substitui a frase por uma aleatória quando o conteúdo carrega
document.addEventListener("DOMContentLoaded", () => {
    const frases = [
        'Vamos criar algo fantástico juntos?',
        'Pronto pra ter um produto fantástico?',
        'Pronto para tirar sua ideia do papel?',
        'Vamos dar vida ao seu projeto?',
        'Bora construir algo que funciona de verdade?',
        'Pronto para melhorar sua experiência digital?',
        'Quer um design que realmente funciona?',
        'Vamos transformar sua ideia em produto?',
        'Seu projeto merece um profissional experiente... como eu :)',
        'Bora começar seu projeto do jeito certo?',
        'Ta na hora daquele upgrade no seu produto, né?',
        'Design de alto padrão, sem complicação.',
        'Excelência em cada detalhe do seu projeto.',
        'Vamos colocar essa ideia pra rodar?'
    ];

    // Seleciona o elemento
    const mycta = document.querySelector("#cta");
    if (!mycta) return; // Se não existir, não faz nada

    // Seleciona uma frase aleatória
    const fraseLegal = frases[Math.floor(Math.random() * frases.length)];

    // Troca o conteúdo do CTA
    mycta.textContent = fraseLegal;
});

// Verifica se o elemento class="spec" está em tela e se estiver, ativa a animação
document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll(".spec");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                // Captura o índice original do elemento
                const index = [...elementos].indexOf(entry.target);

                // Define o delay baseado na posição
                const delay = index * 0.25; // 0.25s por elemento

                // Aplica o delay inline antes de adicionar a animação
                entry.target.style.animationDelay = `${delay}s`;

                // Adiciona a animação
                entry.target.classList.add("slit-in-horizontal");

                // Evita reanimar ao voltar ao viewport
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    elementos.forEach(el => observer.observe(el));
});





