// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Obtém referências aos elementos
    const btnVerificar = document.getElementById('btnVerificar');
    const inputNumero = document.getElementById('numero');
    const resultado = document.getElementById('resultado');
    
    // Adiciona evento de clique ao botão
    btnVerificar.addEventListener('click', verificarParImpar);
    
    // Adiciona evento de Enter no campo de input
    inputNumero.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            verificarParImpar();
        }
    });
    
    // Função principal que verifica par/ímpar
    function verificarParImpar() {
        // Obtém e limpa o valor do campo
        const numero = inputNumero.value.trim();
        
        // Validações - Verifica se campo está vazio
        if (numero === '') {
            exibirResultado('Por favor, digite um número.', 'erro');
            return;
        }
        
        // Converte string para número (pode ser decimal)
        const num = parseFloat(numero);
        // parseFloat converte para número com casas decimais
        
        // Verifica se a conversão resultou em NaN
        if (isNaN(num)) {
            exibirResultado('Por favor, digite um número válido.', 'erro');
            return;
        }
        
        // Verifica se é par ou ímpar
        // Para números decimais, verifica se é inteiro primeiro
        if (!Number.isInteger(num)) {
            // Number.isInteger() retorna true se for número inteiro
            exibirResultado(`O número ${num} é DECIMAL.`, 'decimal');
            return; // Para a execução se for decimal
        }
        
        // Verifica se é par (resto da divisão por 2 é 0)
        if (num % 2 === 0) {
            // % é operador módulo - retorna resto da divisão
            exibirResultado(`O número ${num} é PAR.`, 'par');
        } else {
            exibirResultado(`O número ${num} é ÍMPAR.`, 'impar');
        }
    }
    
    // Função auxiliar para exibir resultados
    function exibirResultado(mensagem, tipo) {
        resultado.textContent = mensagem;
        
        // Remove classes anteriores
        resultado.classList.remove('par', 'impar', 'decimal', 'erro');
        
        // Adiciona classe baseada no tipo
        resultado.classList.add(tipo);
    }
});

// Adiciona estilos dinâmicos para os resultados
const style = document.createElement('style');
style.textContent = `
    .par {
        background-color: #d4edda;  /* Verde - para números pares */
        color: #155724;
        border: 2px solid #c3e6cb;
    }
    
    .impar {
        background-color: #fff3cd;  /* Amarelo - para números ímpares */
        color: #856404;
        border: 2px solid #ffeaa7;
    }
    
    .decimal {
        background-color: #d1ecf1;  /* Azul claro - para decimais */
        color: #0c5460;
        border: 2px solid #bee5eb;
    }
    
    .erro {
        background-color: #f8d7da;  /* Vermelho - para erros */
        color: #721c24;
        border: 2px solid #f5c6cb;
    }
`;
document.head.appendChild(style);