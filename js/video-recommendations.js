// ALGORITMO ALEATÓRIO DE RECOMENDAÇÕES
const elementos = [
    '<a class="entry" title="Clique para assistir o vídeo" href="https://www.youtube.com/watch?v=Qgl7wZJulD8"><div class="card"><img src="media/images/thumbs/not-fraud.webp" alt="Thumbnail" class="thumb"><span class="title">Você NÃO é uma FRAUDE por não fazer PESQUISA (UX Design)</span><p class="date">aprox. 9min</p><p class="snippet">Assistir agora</p></div></a>',
    '<a class="entry" title="Clique para assistir o vídeo" href="https://www.youtube.com/watch?v=ZDFNB7Cf59A"><div class="card"><img src="media/images/thumbs/dark-patterns.webp" alt="Thumbnail" class="thumb"><span class="title">Padrões obscuros no Design (dark patterns)</span><p class="date">aprox. 13min</p><p class="snippet">Assistir agora</p></div></a>',
    '<a class="entry" title="Clique para assistir o vídeo" href="https://www.youtube.com/watch?v=gtjYaEetL08"><div class="card"> <img src="media/images/thumbs/research.webp" alt="Thumbnail" class="thumb"> <span class="title">Como se começa uma pesquisa de UX?</span> <p class="date">aprox. 3min</p> <p class="snippet">Assistir agora</p> </div> </a>',
    '<a class="entry" title="Clique para assistir o vídeo" href="https://youtu.be/3EAbFhohRp4?si=RijUFR7K7ugMzLwc"> <div class="card"> <img src="media/images/thumbs/paradoxo.webp" alt="Thumbnail" class="thumb"> <span class="title">O Paradoxo da escolha (UX Design)</span> <p class="date">aprox. 10min</p> <p class="snippet">Assistir agora</p> </div> </a>',
    '<a class="entry" title="Clique para assistir o vídeo" href="https://www.youtube.com/watch?v=cztKoJz5NPs"> <div class="card"> <img src="media/images/thumbs/programas.webp" alt="Thumbnail" class="thumb"> <span class="title">Conheça as MELHORES ferramentas de DESIGN - 100% GRATUITAS e OPEN-SOURCE</span> <p class="date">aprox. 9min</p> <p class="snippet">Assistir agora</p> </div> </a>',
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

// Seleciona 3 elementos aleatórios
const selecionados = embaralharArray(elementos).slice(0, 3);

// Insere no #blog-wrapper
const container = document.getElementById('blog-wrapper');
selecionados.forEach(html => {
    const div = document.createElement('div');
    div.innerHTML = html;
    container.appendChild(div.firstElementChild);
});