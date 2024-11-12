// Pegando os elementos de atendimento presencial e remoto
// Variaveis utilizando DOM dos elementos que serão manipulados
// getElementById -> método DOM de pegar elemento HTML com base no ID
// querySelector -> método DOM de pegar elemento HTML com base no ID ou Classe ou Tag
const presencial = document.getElementById('atendimento-presencial');
const remoto = document.getElementById('atendimento-remoto');
const deslocamentoBlock = document.querySelector('.deslocamento-group');
const previewDeslocamentoBlock = document.querySelector('.preview-deslocamento-group');

// Função Condicional para trocar o estado de atendimento
// Função -> Nome da Função -> Parâmetro
// A condição IF -> Verdadeira, será executada com base no parâmetro OPCAO
// A condição ELSE -> Falsa, será executada com base no parâmetro OPCAO
function selecionarAtendimento(opcao) {
    if (opcao === 'presencial') { // Condicional true: Presencial
        presencial.classList.add('selected');
        remoto.classList.remove('selected');
        deslocamentoBlock.style.display = 'block'; // Mostrar o bloco de deslocamento
        previewDeslocamentoBlock.style.display ='block';
    } else { // Condicional false: Remoto
        remoto.classList.add('selected');
        presencial.classList.remove('selected');
        deslocamentoBlock.style.display = 'none'; // Esconder o bloco de deslocamento
        previewDeslocamentoBlock.style.display = 'none'; 
    }
}

// Definindo o atendimento presencial como padrão ao carregar a página
// window -> classe JS, onload -> método da classe window
window.onload = function() {
    selecionarAtendimento('presencial');
}

// Adicionando eventos de clique aos cards
// addEventListener -> adiciona ação de click e executa a função condicional true: presencial
presencial.addEventListener('click', function() {
    selecionarAtendimento('presencial');
});

// addEventListener -> adiciona ação de click e executa a função condicional false: remoto
remoto.addEventListener('click', function() {
    selecionarAtendimento('remoto');
});