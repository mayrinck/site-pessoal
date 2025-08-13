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
    alert("O compartilhamento nativo não é suportado neste dispositivo/navegador, mas você pode copiar o link no botão ao lado");
    }
});