
// Exibir o modal de preview
document.getElementById("previewButton").addEventListener("click", function() {
    document.getElementById("previewModal").classList.add("show");
    document.getElementById("overlay").style.display = "block";
});

// Função para imprimir o conteúdo do iframe
document.getElementById("printButton").addEventListener("click", function() {
    const iframe = document.getElementById("previewFrame").contentWindow;
    iframe.focus(); // Garante que o conteúdo do iframe está ativo
    iframe.print(); // Imprime o conteúdo do iframe
});

document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("previewModal").classList.remove("show");
    document.getElementById("overlay").style.display = "none";
});
