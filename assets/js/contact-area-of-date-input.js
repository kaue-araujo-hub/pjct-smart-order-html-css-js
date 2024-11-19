/*
Aumentando a área de contato de todos os inputs do tipo date
Utilizando função anônima com método showPicker
*/

document.getElementById("dateOfServiceInput").addEventListener("click", function() {
    this.showPicker(); 
});

document.getElementById("departureDateInput").addEventListener("click", function() {
    this.showPicker(); 
});

document.getElementById("returnDateInput").addEventListener("click", function() {
    this.showPicker(); 
});