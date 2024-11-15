


const deleteModal = document.getElementById("deleteModal");
        
const resetButton = document.getElementById("btn-reset");
resetButton.addEventListener('click', showDeleteModal);

function showDeleteModal() {
    deleteModal.style.display = 'block';
}



const cancelButton = document.getElementById("cancelDeleteButton");
cancelButton.addEventListener('click', closeDeleteModal);

function closeDeleteModal() {
    deleteModal.style.display = 'none';
}



const confirmButton = document.getElementById("confirmDeleteButton");
confirmButton.addEventListener('click', activateResetButton);

function activateResetButton() {
    const formFields = document.getElementById("form");
    // confirmButton.reset();
    formFields.reset();
    
    deleteModal.style.display = "none";
}