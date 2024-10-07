function calcularRanqueadas(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;

    // Determina o nível com base no número de vitórias
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorna o resultado final
    return {
        saldoVitorias,
        nivel
    };
}

// Função para exibir o resultado
function exibirResultado(vitorias, derrotas) {
    const resultado = calcularRanqueadas(vitorias, derrotas);
    console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
}

// Exemplo de uso
const vitorias = 85;  // Substitua com o número de vitórias desejado
const derrotas = 20;  // Substitua com o número de derrotas desejado

exibirResultado(vitorias, derrotas);
