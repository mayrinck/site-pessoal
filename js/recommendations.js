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
});