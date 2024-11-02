/*
Aumentando a área de textarea da descrição do serviço
Utilizando função anônima com método style.height
*/

const textarea = document.getElementById('desc-servico');

textarea.addEventListener('input', function() {
    this.style.height = 'auto'; // Reseta a altura para recalcular
    this.style.height = (this.scrollHeight) + 'px'; // Define a altura conforme o conteúdo
});
