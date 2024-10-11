

function gerarPDF() {
    var doc = new jsPDF();

    // Seleciona o conteúdo que deseja capturar
    var elementHTML = document.body;

    // Usa html2canvas para capturar o conteúdo da página como uma imagem
    html2canvas(elementHTML, {
        useCORS: true // Ajuda a evitar problemas de Cross-Origin com imagens externas
    }).then(function(canvas) {
        // Converte o canvas para imagem
        var imgData = canvas.toDataURL('image/png');

        // Adiciona a imagem ao PDF
        doc.addImage(imgData, 'PNG', 10, 10, 190, 240);

        // Salva o PDF com o nome "smart-os.pdf"
        doc.save('smart-os.pdf');
    });
}

