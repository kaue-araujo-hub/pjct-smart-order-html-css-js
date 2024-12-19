
document.addEventListener("DOMContentLoaded", function() {

    
    // typeOfService__section
    document.getElementById('dateOfServiceInput__preview').textContent = localStorage.getItem('dateOfServiceInput');
    document.getElementById('numberOfOrderInput__preview').textContent = localStorage.getItem('numberOfOrderInput');
    document.getElementById('typeOfServiceInput__preview').textContent = localStorage.getItem('typeOfServiceInput');
    document.getElementById('equipmentBrandInput__preview').textContent = localStorage.getItem('equipmentBrandInput');


    // customer__section
    document.getElementById('institutionNameInput__preview').textContent = localStorage.getItem('institutionNameInput');
    document.getElementById('addressCustomerInput__preview').textContent = localStorage.getItem('addressCustomerInput');
    document.getElementById('municipalityInput__preview').textContent = localStorage.getItem('municipalityInput');
    document.getElementById('ufStatesInput__preview').textContent = localStorage.getItem('ufStatesInput');
    document.getElementById('customerContactNameInput__preview').textContent = localStorage.getItem('customerContactNameInput');
    document.getElementById('customerContactNumberInput__preview').textContent = localStorage.getItem('customerContactNumberInput');


    // equipment__section
    document.getElementById('nameOfEquipmentInput__preview').textContent = localStorage.getItem('nameOfEquipmentInput');
    document.getElementById('serialNumberInput__preview').textContent = localStorage.getItem('serialNumberInput');
    document.getElementById('equipmentModalityInput__preview').textContent = localStorage.getItem('equipmentModalityInput');
    document.getElementById('equipStatusInput__preview').textContent = localStorage.getItem('equipStatusInput');


    // displacement__section to GO
    document.getElementById('departureDateInput__preview').textContent = localStorage.getItem('departureDateInput');
    document.getElementById('departureTimeToGoInput__preview').textContent = localStorage.getItem('departureTimeToGoInput');
    document.getElementById('arrivalTimeToGoInput__preview').textContent = localStorage.getItem('arrivalTimeToGoInput');
    document.getElementById('departureLocationToGoInput__preview').textContent = localStorage.getItem('departureLocationToGoInput');
    document.getElementById('arrivalLocationToGoInput__preview').textContent = localStorage.getItem('arrivalLocationToGoInput');


    // displacement__section to RETURN
    document.getElementById('returnDateInput__preview').textContent = localStorage.getItem('returnDateInput');
    document.getElementById('departureTimeToReturnInput__preview').textContent = localStorage.getItem('departureTimeToReturnInput');
    document.getElementById('arrivalTimeToReturnInput__preview').textContent = localStorage.getItem('arrivalTimeToReturnInput');
    document.getElementById('departureLocationToReturnInput__preview').textContent = localStorage.getItem('departureLocationToReturnInput');
    document.getElementById('arrivalLocationToReturnInput__preview').textContent = localStorage.getItem('arrivalLocationToReturnInput');


    // timeAndDescription__section
    document.getElementById('startTimeInput__preview').textContent = localStorage.getItem('startTimeInput');
    document.getElementById('endTimeInput__preview').textContent = localStorage.getItem('endTimeInput');
    document.getElementById('serviceStatusInput__preview').textContent = localStorage.getItem('serviceStatusInput');
    document.getElementById('serviceDescriptionInput__preview').textContent = localStorage.getItem('serviceDescriptionInput');
    
});