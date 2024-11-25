
/*

Pegando o valor dos inputs e armazenando no localStorage


*/

function saveDataPreview() {
    // Variaveis 1º bloco do formulário 
    const dataServico = document.getElementById('dateOfServiceInput').value;
    const numeroChamado = document.getElementById('numberOfOrderInput').value;
    const tipoServico = document.getElementById('typeOfServiceInput').value;
    const fabricante = document.getElementById('equipmentBrandInput').value;
    // Armazenando os valores no localStorage 1º bloco
    localStorage.setItem('dateOfServiceInput', dataServico);
    localStorage.setItem('numberOfOrderInput', numeroChamado);
    localStorage.setItem('typeOfServiceInput', tipoServico);
    localStorage.setItem('equipmentBrandInput', fabricante);



    // Variaveis 2º bloco do formulário
    const nomeCliente = document.getElementById('institutionNameInput').value;
    const endCliente = document.getElementById('addressCustomerInput').value;
    const municipioCliente = document.getElementById('municipalityInput').value;
    const ufCliente = document.getElementById('ufStatesInput').value;
    const contatoCliente = document.getElementById('customerContactNameInput').value;
    const celTelCliente = document.getElementById('customerContactNumberInput').value;
    // Armazenando os valores no localStorage 2º bloco
    localStorage.setItem('institutionNameInput', nomeCliente);
    localStorage.setItem('addressCustomerInput', endCliente);
    localStorage.setItem('municipalityInput', municipioCliente);
    localStorage.setItem('ufStatesInput', ufCliente);
    localStorage.setItem('customerContactNameInput', contatoCliente);
    localStorage.setItem('customerContactNumberInput', celTelCliente);




    // Variaveis 3º bloco do formulário
    const nomeEquipamento = document.getElementById('equipmentNameInput').value;
    const nSerie = document.getElementById('serialNumberInput').value;
    const modalidadeEquipamento = document.getElementById('equipmentBrandInput').value;
    const equipStatus = document.getElementById('equipStatusInput').value;
    // Armazenando os valores no localStorage 3º bloco
    localStorage.setItem('equipmentNameInput', nomeEquipamento);
    localStorage.setItem('serialNumberInput', nSerie);
    localStorage.setItem('equipmentBrandInput', modalidadeEquipamento);
    localStorage.setItem('equipStatusInput', equipStatus);
    
    


    // Variaveis 4º bloco do formulário
    const dataIda = document.getElementById('departureDateInput').value; //departureDateField to GO
    const horaInicioIda = document.getElementById('departureTimeToGoInput').value; //departureTimeField to GO
    const horaChegadaIda = document.getElementById('arrivalTimeToGoInput').value; // arrivalTimeField to GO
    const localOrigemIda = document.getElementById('departureLocationToGoInput').value; // departureLocationField to GO
    const localDestinoIda = document.getElementById('arrivalLocationToGoInput').value; // arrivalLocationField to GO
    // Armazenando os valores no localStorage 4º bloco
    localStorage.setItem('departureDateInput', dataIda);
    localStorage.setItem('departureTimeToGoInput', horaInicioIda);
    localStorage.setItem('arrivalTimeToGoInput', horaChegadaIda);
    localStorage.setItem('departureLocationToGoInput', localOrigemIda);
    localStorage.setItem('arrivalLocationToGoInput', localDestinoIda);



    // Variaveis 5º bloco do formulário
    const dataVolta = document.getElementById('returnDateInput').value;
    const horaInicioVolta = document.getElementById('departureTimeToReturnInput').value;
    const horaChegadaVolta = document.getElementById('arrivalTimeToReturnInput').value;
    const localOrigemVolta = document.getElementById('departureLocationToReturnInput').value;
    const localDestinoVolta = document.getElementById('arrivalLocationToReturnInput').value;
    // Armazenando os valores no localStorage 5º bloco
    localStorage.setItem('returnDateInput', dataVolta);
    localStorage.setItem('departureTimeToReturnInput', horaInicioVolta);
    localStorage.setItem('arrivalTimeToReturnInput', horaChegadaVolta);
    localStorage.setItem('departureLocationToReturnInput', localOrigemVolta);
    localStorage.setItem('arrivalLocationToReturnInput', localDestinoVolta);



    // Variaveis 6º bloco do formulário
    const inicioServico = document.getElementById('startTimeInput').value;
    const terminoServico = document.getElementById('endTimeInput').value;
    const statusAtend = document.getElementById('serviceStatusInput').value;
    // Armazenando os valores no localStorage 6º bloco
    localStorage.setItem('startTimeInput', inicioServico);
    localStorage.setItem('endTimeInput', terminoServico);
    localStorage.setItem('serviceStatusInput', statusAtend);
    


    // Variaveis 7º bloco do formulário
    const descricaoServico = document.getElementById('serviceDescriptionInput').value;
    // Armazenando os valores no localStorage 9º bloco
    localStorage.setItem('serviceDescriptionInput', descricaoServico);


    // window.open('window-print-preview.html');
}



