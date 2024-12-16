
// Exibir o modal de preview
document.getElementById("previewButton").addEventListener("click", function() {
    document.getElementById("previewModal").classList.add("show");
    document.getElementById("overlay").style.display = "block";
});

document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("previewModal").classList.remove("show");
    document.getElementById("overlay").style.display = "none";
});


