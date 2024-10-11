document.addEventListener('DOMContentLoaded', function() {
    // Referência ao formulário e elementos de input
    const formulario = document.getElementById('meuFormulario');
    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');
    const mensagem = document.getElementById('mensagem');

    // Adicionando um evento de submissão ao formulário
    formulario.addEventListener('submit', function(event) {
        // Impedir o comportamento padrão de submissão do formulário
        event.preventDefault();

        // Capturando os valores dos campos
        const valorA = parseFloat(campoA.value);
        const valorB = parseFloat(campoB.value);

        // Verificando se o valor B é maior que o valor A
        if (valorB > valorA) {
            mensagem.textContent = "Formulário válido! O número B é maior que o número A.";
            mensagem.className = "success";
        } else {
            mensagem.textContent = "Formulário inválido. O número B deve ser maior que o número A.";
            mensagem.className = "error";
        }
    });
});
