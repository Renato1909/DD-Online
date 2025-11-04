// Aguarda o carregamento completo do DOM (Document Object Model)
document.addEventListener('DOMContentLoaded', function() {
    // Obtém referências aos elementos do HTML
    const btnCalcular = document.getElementById('btnCalcular');
    // Busca elemento pelo ID 'btnCalcular'
    const inputAno = document.getElementById('anoNascimento');
    // Busca elemento pelo ID 'anoNascimento'
    const resultado = document.getElementById('resultado');
    // Busca elemento pelo ID 'resultado'
    
    // Adiciona evento de clique ao botão
    btnCalcular.addEventListener('click', calcularIdade);
    // Quando botão for clicado, executa função calcularIdade
    
    // Adiciona evento de Enter no campo de input
    inputAno.addEventListener('keypress', function(e) {
        // 'e' é o objeto evento que contém informações sobre a tecla pressionada
        if (e.key === 'Enter') {
            // Se a tecla pressionada foi Enter
            calcularIdade(); // Executa a função calcularIdade
        }
    });
    
    // Função principal que calcula a idade
    function calcularIdade() {
        // Obtém e limpa o valor do campo (remove espaços extras)
        const anoNascimento = inputAno.value.trim();
        // .trim() remove espaços no início e fim
        
        // Validações - Verifica se campo está vazio
        if (anoNascimento === '') {
            exibirResultado('Por favor, digite o ano de nascimento.', 'erro');
            return; // Para a execução da função aqui
        }
        
        // Converte string para número inteiro
        const ano = parseInt(anoNascimento);
        // Obtém o ano atual
        const anoAtual = new Date().getFullYear();
        // new Date() cria objeto com data atual, getFullYear() retorna o ano
        
        // Verifica se a conversão resultou em NaN (Not a Number)
        if (isNaN(ano)) {
            exibirResultado('Por favor, digite um ano válido.', 'erro');
            return;
        }
        
        // Verifica se o ano está dentro do range válido
        if (ano < 1900 || ano > anoAtual) {
            exibirResultado(`Por favor, digite um ano entre 1900 e ${anoAtual}.`, 'erro');
            // Template string usando crase permite variáveis dentro de ${}
            return;
        }
        
        // Calcula a idade (ano atual - ano nascimento)
        const idade = anoAtual - ano;
        
        // Exibe o resultado com tratamento para singular/plural
        let mensagem = `Sua idade é: ${idade} anos.`;
        if (idade === 1) {
            mensagem = `Sua idade é: ${idade} ano.`; // Mensagem para 1 ano
        }
        
        exibirResultado(mensagem, 'sucesso');
    }
    
    // Função auxiliar para exibir resultados com estilos
    function exibirResultado(mensagem, tipo) {
        resultado.textContent = mensagem;
        // Define o texto do elemento resultado
        
        // Remove classes anteriores de estilo
        resultado.classList.remove('sucesso', 'erro');
        // classList permite manipular classes CSS
        
        // Adiciona classe baseada no tipo (sucesso ou erro)
        resultado.classList.add(tipo);
    }
});

// Adiciona estilos dinâmicos para os resultados
const style = document.createElement('style');
// Cria elemento <style> dinamicamente
style.textContent = `
    /* Template string com CSS */
    .sucesso {
        background-color: #d4edda;  /* Verde claro */
        color: #155724;             /* Verde escuro */
        border: 2px solid #c3e6cb;  /* Borda verde */
    }
    
    .erro {
        background-color: #f8d7da;  /* Vermelho claro */
        color: #721c24;             /* Vermelho escuro */
        border: 2px solid #f5c6cb;  /* Borda vermelha */
    }
`;
// Adiciona o elemento style ao head do documento
document.head.appendChild(style);
// appendChild insere o elemento como último filho