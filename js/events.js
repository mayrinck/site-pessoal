function addClickListener() {
    const copyButton = document.getElementById("copy");
    const shareButton = document.getElementById("share");
    const jobButton = document.getElementById("orcamento");
    const contactButton = document.getElementById("email");

    if (copyButton) {
        copyButton.addEventListener("click", function() {
        window.sa_event && window.sa_event('compartilhamento_de_artigos');
        });
    }

    if (shareButton) {
        shareButton.addEventListener("click", function() {
        window.sa_event && window.sa_event('compartilhamento_de_artigos');
        });
    }

    if (contactButton) {
        contactButton.addEventListener("click", function() {
        window.sa_event && window.sa_event('contato');
        });
    }

    if (jobButton) {
        jobButton.addEventListener("click", function() {
        window.sa_event && window.sa_event('contato');
        });
    }
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", addClickListener);