

document.addEventListener("DOMContentLoaded", function () {
    const previewButton = document.getElementById("showWindowPreview__button");
    const windowPreviewModal = document.getElementById("previewModal");
    const closeButton = document.getElementById("closeButton");

    // Função para abrir o modal
    function openPreview() {
        windowPreviewModal.style.display = "block";
    }

    // Função para fechar o modal
    function closePreview() {
        windowPreviewModal.style.display = "none";
    }

    // Evento para abrir o modal ao clicar no botão de preview
    previewButton.addEventListener("click", openPreview);

    // Evento para fechar o modal ao clicar no botão de fechar
    closeButton.addEventListener("click", closePreview);
});
