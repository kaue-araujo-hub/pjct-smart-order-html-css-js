
/*

Pegando o valor dos inputs e armazenando no localStorage


*/

function saveDataPreview() {
    // Variaveis 1º bloco do formulário 
    const dataServico = document.getElementById('dateOfServiceInput').value;
    const tipoServico = document.getElementById('typeOfServiceInput').value;
    const fabricante = document.getElementById('equipmentBrandInput').value;
    // Armazenando os valores no localStorage 1º bloco
    localStorage.setItem('dateOfServiceInput', dataServico);
    localStorage.setItem('typeOfServiceInput', tipoServico);
    localStorage.setItem('equipmentBrandInput', fabricante);



    // Variaveis 2º bloco do formulário
    const nomeCliente = document.getElementById('institutionNameInput').value;
    const contatoCliente = document.getElementById('customerContactNameInput').value;
    const celTelCliente = document.getElementById('customerContactNumberInput').value;
    // Armazenando os valores no localStorage 2º bloco
    localStorage.setItem('institutionNameInput', nomeCliente);
    localStorage.setItem('customerContactNameInput', contatoCliente);
    localStorage.setItem('customerContactNumberInput', celTelCliente);



    // Variaveis 3º bloco do formulário
    const endCliente = document.getElementById('addressCustomerInput').value;
    const municipioCliente = document.getElementById('municipalityInput').value;
    const ufCliente = document.getElementById('ufStatesInput').value;
    // Armazenando os valores no localStorage 3º bloco
    localStorage.setItem('addressCustomerInput', endCliente);
    localStorage.setItem('municipalityInput', municipioCliente);
    localStorage.setItem('ufStatesInput', ufCliente);



    // Variaveis 4º bloco do formulário
    const nSerie = document.getElementById('serialNumberInput').value;
    const nomeEquipamento = document.getElementById('nameOfEquipmentInput').value;
    const nChamado = document.getElementById('n-chamado').value;
    // Armazenando os valores no localStorage 4º bloco
    localStorage.setItem('n-serie', nSerie);
    localStorage.setItem('nome-equipamento', nomeEquipamento);
    localStorage.setItem('n-chamado', nChamado);



    // Variaveis 5º bloco do formulário
    let isCheckedRx = document.getElementById('rxCheckBoxInput').checked;
    let isCheckedMg = document.getElementById('mammoCheckBoxInput').checked;
    let isCheckedUl = document.getElementById('ulCheckBoxInput').checked;
    let isCheckedOdonto = document.getElementById('odontoCheckBoxInput').checked;
    let isCheckedVet = document.getElementById('vetCheckBoxInput').checked;
    const equipStatus = document.getElementById('euipStatusInput').value;
    // Armazenando os valores no localStorage 5º bloco
    localStorage.setItem('rxCheckBoxInput', isCheckedRx);
    localStorage.setItem('mammoCheckBoxInput', isCheckedMg);
    localStorage.setItem('ulCheckBoxInput', isCheckedUl);
    localStorage.setItem('odontoCheckBoxInput', isCheckedOdonto);
    localStorage.setItem('vetCheckBoxInput', isCheckedVet);
    localStorage.setItem('euipStatusInput', equipStatus);



    // Variaveis 6º bloco do formulário
    const dataIda = document.getElementById('departureDateInput').value; //departureDateField to GO
    const horaInicioIda = document.getElementById('departureTimeToGoInput').value; //departureTimeField to GO
    const horaChegadaIda = document.getElementById('arrivalTimeToGoInput').value; // arrivalTimeField to GO
    const localOrigemIda = document.getElementById('departureLocationToGoInput').value; // departureLocationField to GO
    const localDestinoIda = document.getElementById('arrivalLocationToGoInput').value; // arrivalLocationField to GO
    // Armazenando os valores no localStorage 6º bloco
    localStorage.setItem('departureDateInput', dataIda);
    localStorage.setItem('departureTimeToGoInput', horaInicioIda);
    localStorage.setItem('arrivalTimeToGoInput', horaChegadaIda);
    localStorage.setItem('departureLocationToGoInput', localOrigemIda);
    localStorage.setItem('arrivalLocationToGoInput', localDestinoIda);



    // Variaveis 7º bloco do formulário
    const dataVolta = document.getElementById('returnDateInput').value;
    const horaInicioVolta = document.getElementById('departureTimeToReturnInput').value;
    const horaChegadaVolta = document.getElementById('arrivalTimeToReturnInput').value;
    const localOrigemVolta = document.getElementById('departureLocationToReturnInput').value;
    const localDestinoVolta = document.getElementById('arrivalLocationToReturnInput').value;
    // Armazenando os valores no localStorage 7º bloco
    localStorage.setItem('returnDateInput', dataVolta);
    localStorage.setItem('departureTimeToReturnInput', horaInicioVolta);
    localStorage.setItem('arrivalTimeToReturnInput', horaChegadaVolta);
    localStorage.setItem('departureLocationToReturnInput', localOrigemVolta);
    localStorage.setItem('arrivalLocationToReturnInput', localDestinoVolta);



    // Variaveis 8º bloco do formulário
    const inicioServico = document.getElementById('inputbox-inicio-servico').value;
    const terminoServico = document.getElementById('inputbox-termino-servico').value;
    const statusAtend = document.getElementById('status-atend').value;
    const obsServico = document.getElementById('inputbox-obs').value;
    // Armazenando os valores no localStorage 8º bloco
    localStorage.setItem('inputbox-inicio-servico', inicioServico);
    localStorage.setItem('inputbox-termino-servico', terminoServico);
    localStorage.setItem('status-atend', statusAtend);
    localStorage.setItem('inputbox-obs', obsServico);



    // Variaveis 9º bloco do formulário
    const descricaoServico = document.getElementById('desc-servico').value;
    // Armazenando os valores no localStorage 9º bloco
    localStorage.setItem('desc-servico', descricaoServico);


    // window.open('window-print-preview.html');
}



