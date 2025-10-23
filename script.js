// Busca todas as linhas com dados financeiros
    const trElements = document.querySelectorAll('tr[data-situacao][data-valor]');

    // Formata e exibe os dados em uma tabela no console
    console.log('=== RELATÓRIO DE NOTAS FISCAIS ===');
    console.log('CHAVE DA NOTA'.padEnd(50), 'STATUS'.padEnd(20), 'VALOR');
    console.log('-'.repeat(80));
    
    trElements.forEach((trElement, index) => {
        const chave = trElement.getAttribute('data-chave');
        const situacao = trElement.getAttribute('data-situacao');
        const valor = trElement.getAttribute('data-valor');
        
        // Formata os valores para melhor visualização
        const statusFormatado = situacao.replace('P107_', '').replace('P104_', '').replace('P105_', '');
        const valorFormatado = `R$ ${valor}`;
        
        console.log(
            `${index + 1}. ${chave.substring(0, 20)}...`.padEnd(50),
            statusFormatado.padEnd(20),
            valorFormatado
        ); 
        
    });
