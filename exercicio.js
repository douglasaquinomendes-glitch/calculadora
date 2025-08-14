function verificarAprovacao(nota) {
    if (nota >= 7) {
        console.log("Aprovado")
        return "Aprovado";
    }
    console.log("Reprovado")
    return "Reprovado";
}

verificarAprovacao(80)