/*
Aumentando a área de contato de todos os inputs do tipo date
Utilizando função anônima com método showPicker

*/

document.getElementById("data-servico").addEventListener("click", function() {
    this.showPicker(); 
});

document.getElementById("data-ida").addEventListener("click", function() {
    this.showPicker(); 
});

document.getElementById("data-volta").addEventListener("click", function() {
    this.showPicker(); 
});