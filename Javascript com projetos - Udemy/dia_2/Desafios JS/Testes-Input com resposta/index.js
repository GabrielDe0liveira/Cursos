const input = document.getElementById("nome");
const button = document.getElementById("button");
const resultado = document.getElementById("resultado");

button.addEventListener('click', function() {
    const valorInput = input.value.trim();
    resultado.textContent = `Você digitou ${valorInput}`;

    if (valorInput === "Joao Surdi") {
        resultado.textContent = "Você é bem guei";
    }
    else if (valorInput === "Joao Surdi de Melo") {
        resultado.textContent = "Você é Parente do padre Fábio de Melo";
    }
    else if (valorInput === "Gabrielle") {
        resultado.textContent = "Você é a mais linda do mundo, te amo";
    }
    else if (valorInput === "Rafael Borga") {
        resultado.textContent = "Parente do ex prefeito maconheri preferido do home(bem guei também)";
    }
    else if (valorInput === "") {
        resultado.textContent = "Você não digitou nada";
    }
});

