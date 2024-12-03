

// Declarando evento DOMContentLoaded numa função anonima

/*
    1. Pegando o valor do localStorage e formatando
    2. Verifica se a data foi armazenada e está no formato aaaa-mm-dd
    3. Dividir a data em [ano, mês, dia]
    4. Adicionar conversão de data para [dia, mês, ano]
*/

document.addEventListener("DOMContentLoaded", function () {

    // Data de Serviço
    // Pegando o valor do localStorage e formatando
    let dateOfService = localStorage.getItem('dateOfServiceInput');

        // Verifica se a data foi armazenada e está no formato aaaa-mm-dd
        if (dateOfService) {

        // Divide a data em [ano, mês, dia]
        let [year, month, day] = dateOfService.split('-');

        //Adicionar conversão de data para [dia, mês, ano]
        document.getElementById('dateOfServiceInput__preview').textContent = `${day}/${month}/${year}`;
    };

    // Data de Deslocamento de IDA
    let departureDate = localStorage.getItem('departureDateInput');
        if (departureDate) {
        let [year, month, day] = departureDate.split('-');
        document.getElementById('departureDateInput__preview').textContent = `${day}/${month}/${year}`;
    };

    // Data de Deslocamento de VOLTA
    let returnDate = localStorage.getItem('returnDateInput');
        if (returnDate) {
        let [year, month, day] = returnDate.split('-');
        document.getElementById('returnDateInput__preview').textContent = `${day}/${month}/${year}`;
    };



});