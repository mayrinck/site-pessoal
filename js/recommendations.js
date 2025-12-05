<<<<<<< HEAD
// ALGORITMO ALEATÓRIO DE RECOMENDAÇÕES
const elementos = [
    '<a class="entry" title="Clique para ler o artigo completo" href="../artigos/whiteboarding-no-penpot"><div class="card"><img src="../media/images/blog/UWK.webp" alt="Whiteboard no Penpot"><span class="title">Como fazer Whiteboarding no Penpot</span><p class="date">escrito em 15/06/2024</p><p class="snippet">Ler artigo</p></div></a>',
    '<a class="entry" title="Clique para ler o artigo completo" href="../artigos/alternativas-gratuitas-pacote-adobe"><div class="card"><img src="../media/images/blog/adobe-alternativas.webp" alt="Alternativas para Adobe CC"><span class="title">Alternativas gratuitas para os programas da Adobe!</span><p class="date">escrito em 08/04/2025</p><p class="snippet">Ler artigo</p></div></a>',
    '<a class="entry" title="Clique para ler o artigo completo" href="../artigos/ocio-criativo"><div class="card"><img src="../media/images/blog/ocio.webp" alt="Ócio, para criativos"><span class="title">Ócio Criativo: Você está realmente descansando?</span><p class="date">escrito em 08/04/2025</p><p class="snippet">Ler artigo</p></div></a>',
    '<a class="entry" title="Clique para ler o artigo completo" href="../artigos/design-no-linux"><div class="card"><img src="../media/images/blog/design-linux.webp" alt="Design no Linux"><span class="title">Dá para ser designer usando Linux?</span><p class="date">escrito em 16/09/2025</p><p class="snippet">Ler artigo</p></div></a>',
    '<a class="entry" title="Clique para ler o artigo completo" href="../artigos/figma-vs-penpot"><div class="card"><img src="../media/images/blog/figma-vs-penpot.webp" alt="Figma vs Penpot"><span class="title">Figma vs Penpot: Uma comparação honesta</span><p class="date">escrito em 15/11/2025</p><p class="snippet">Ler artigo</p></div></a>',
];

// Embaralha os elementos (algoritmo Fisher-Yates)
function embaralharArray(arr) {
    const copia = [...arr];
    for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

// Seleciona 4 elementos aleatórios
const selecionados = embaralharArray(elementos).slice(0, 4);

// Insere no #blog-wrapper
const container = document.getElementById('blog-wrapper');
selecionados.forEach(html => {
    const div = document.createElement('div');
    div.innerHTML = html;
    container.appendChild(div.firstElementChild);
=======
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

//Nas páginas de artigo, verifica se o usuário clicou no botão copiar e se sim, copia a URL da página e então aplica uma animação ao botão;
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

// ALGORITMO ALEATÓRIO DE RECOMENDAÇÕES
const elementos = [
    '<a class="entry" title="Clique para ler o artigo completo" href="../artigos/whiteboarding-no-penpot.html"><div class="card"><div class="image whiteboard"></div><span class="title">Como fazer Whiteboarding no Penpot</span><p class="date">escrito em 15/06/2024</p><p class="snippet">Ler artigo</p></div></a>',
    '<a class="entry" title="Clique para ler o artigo completo" href="../artigos/alternativas-gratuitas-pacote-adobe.html"><div class="card"><div class="image placeholder"></div><span class="title">Alternativas gratuitas para os programas da Adobe!</span><p class="date">escrito em 08/04/2025</p><p class="snippet">Ler artigo</p></div></a>',
    '<a class="entry" title="Clique para ler o artigo completo" href="../artigos/ocio-criativo.html"><div class="card"><div class="image ocio"></div><span class="title">Sobre o Ocio Criativo: Você está realmente descansando?</span><p class="date">escrito em 08/04/2025</p><p class="snippet">Ler artigo</p></div></a>',
    '<a class="entry" title="Clique para ler o artigo completo" href="../artigos/whiteboarding-no-penpot.html"><div class="card"><div class="image placeholder"></div><span class="title">Só um título de placeholder...</span><p class="date">escrito em 08/04/2025</p><p class="snippet">Ler artigo</p></div></a>',
    '<a class="entry" title="Clique para ler o artigo completo" href="../artigos/whiteboarding-no-penpot.html"><div class="card"><div class="image placeholder"></div><span class="title">Título de placeholder</span><p class="date">escrito em 08/04/2025</p><p class="snippet">Ler artigo</p></div></a>',
    '<a class="entry" title="Clique para ler o artigo completo" href="../artigos/whiteboarding-no-penpot.html"><div class="card"><div class="image placeholder"></div><span class="title">Placeholders podem ser mais legais</span><p class="date">escrito em 08/04/2025</p><p class="snippet">Ler artigo</p></div></a>',
    '<a class="entry" title="Clique para ler o artigo completo" href="../artigos/whiteboarding-no-penpot.html"><div class="card"><div class="image placeholder"></div><span class="title">Título?</span><p class="date">escrito em 08/04/2025</p><p class="snippet">Ler artigo</p></div></a>',
    '<a class="entry" title="Clique para ler o artigo completo" href="../artigos/whiteboarding-no-penpot.html"><div class="card"><div class="image placeholder"></div><span class="title">Talvez um título, ou talvez não...</span><p class="date">escrito em 08/04/2025</p><p class="snippet">Ler artigo</p></div></a>',
];

// Embaralha os elementos (algoritmo Fisher-Yates)
function embaralharArray(arr) {
    const copia = [...arr];
    for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

// Seleciona 4 elementos aleatórios
const selecionados = embaralharArray(elementos).slice(0, 4);

// Insere no #blog-wrapper
const container = document.getElementById('blog-wrapper');
selecionados.forEach(html => {
    const div = document.createElement('div');
    div.innerHTML = html;
    container.appendChild(div.firstElementChild);
>>>>>>> d25b43c (syncing)
});