


const deleteModal = document.getElementById("deleteModal");
        
const resetButton = document.getElementById("showDeleteModal__button");
resetButton.addEventListener('click', showDeleteModal);

function showDeleteModal() {
    deleteModal.style.display = 'block';
}



const cancelButton = document.getElementById("cancelResetForm__button");
cancelButton.addEventListener('click', closeDeleteModal);

function closeDeleteModal() {
    deleteModal.style.display = 'none';
}



const confirmButton = document.getElementById("confirmResetForm__button");
confirmButton.addEventListener('click', activateResetButton);

function activateResetButton() {
    const formFields = document.getElementById("osForm");
    // confirmButton.reset();
    formFields.reset();
    
    deleteModal.style.display = "none";
}