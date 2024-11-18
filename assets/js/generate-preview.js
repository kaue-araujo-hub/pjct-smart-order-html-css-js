
/*

Pegando o valor dos inputs e armazenando no localStorage


*/

function saveDataPreview() {
    // Variaveis 1º bloco do formulário 
    const dataServico = document.getElementById('dateOfService').value;
    const tipoServico = document.getElementById('typeOfService').value;
    const fabricante = document.getElementById('equipmentBrand').value;
    // Armazenando os valores no localStorage 1º bloco
    localStorage.setItem('dateOfService', dataServico);
    localStorage.setItem('typeOfService', tipoServico);
    localStorage.setItem('equipmentBrand', fabricante);



    // Variaveis 2º bloco do formulário
    const nomeCliente = document.getElementById('institutionName').value;
    const contatoCliente = document.getElementById('customerContactName').value;
    const celTelCliente = document.getElementById('customerContactNumber').value;
    // Armazenando os valores no localStorage 2º bloco
    localStorage.setItem('institutionName', nomeCliente);
    localStorage.setItem('customerContactName', contatoCliente);
    localStorage.setItem('customerContactNumber', celTelCliente);



    // Variaveis 3º bloco do formulário
    const endCliente = document.getElementById('endereco-cliente').value;
    const municipioCliente = document.getElementById('municipio-cliente').value;
    const ufCliente = document.getElementById('uf').value;
    // Armazenando os valores no localStorage 3º bloco
    localStorage.setItem('endereco-cliente', endCliente);
    localStorage.setItem('municipio-cliente', municipioCliente);
    localStorage.setItem('uf', ufCliente);



    // Variaveis 4º bloco do formulário
    const nSerie = document.getElementById('n-serie').value;
    const nomeEquipamento = document.getElementById('nome-equipamento').value;
    const nChamado = document.getElementById('n-chamado').value;
    // Armazenando os valores no localStorage 4º bloco
    localStorage.setItem('n-serie', nSerie);
    localStorage.setItem('nome-equipamento', nomeEquipamento);
    localStorage.setItem('n-chamado', nChamado);



    // Variaveis 5º bloco do formulário
    let isCheckedRx = document.getElementById('rx-check').checked;
    let isCheckedMg = document.getElementById('mg-check').checked;
    let isCheckedUl = document.getElementById('ul-check').checked;
    let isCheckedOdonto = document.getElementById('odonto-check').checked;
    let isCheckedVet = document.getElementById('vet-check').checked;
    const statusEquip = document.getElementById('equip-status').value;
    // Armazenando os valores no localStorage 5º bloco
    localStorage.setItem('rx-check', isCheckedRx);
    localStorage.setItem('mg-check', isCheckedMg);
    localStorage.setItem('ul-check', isCheckedUl);
    localStorage.setItem('odonto-check', isCheckedOdonto);
    localStorage.setItem('vet-check', isCheckedVet);
    localStorage.setItem('equip-status', statusEquip);



    // Variaveis 6º bloco do formulário
    const dataIda = document.getElementById('data-ida').value;
    const horaInicioIda = document.getElementById('hora-inicio-ida').value;
    const horaChegadaIda = document.getElementById('hora-chegada-ida').value;
    const localOrigemIda = document.getElementById('local-origem-ida').value;
    const localDestinoIda = document.getElementById('local-destino-ida').value;
    // Armazenando os valores no localStorage 6º bloco
    localStorage.setItem('data-ida', dataIda);
    localStorage.setItem('hora-inicio-ida', horaInicioIda);
    localStorage.setItem('hora-chegada-ida', horaChegadaIda);
    localStorage.setItem('local-origem-ida', localOrigemIda);
    localStorage.setItem('local-destino-ida', localDestinoIda);



    // Variaveis 7º bloco do formulário
    const dataVolta = document.getElementById('data-volta').value;
    const horaInicioVolta = document.getElementById('hora-inicio-volta').value;
    const horaChegadaVolta = document.getElementById('hora-chegada-volta').value;
    const localOrigemVolta = document.getElementById('local-origem-volta').value;
    const localDestinoVolta = document.getElementById('local-destino-volta').value;
    // Armazenando os valores no localStorage 7º bloco
    localStorage.setItem('data-volta', dataVolta);
    localStorage.setItem('hora-inicio-volta', horaInicioVolta);
    localStorage.setItem('hora-chegada-volta', horaChegadaVolta);
    localStorage.setItem('local-origem-volta', localOrigemVolta);
    localStorage.setItem('local-destino-volta', localDestinoVolta);



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



