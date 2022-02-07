function contar() {
    let containerResultado = document.querySelector("div#resultado")

    let inputInicio = document.querySelector("input#numInicio")
    let inputFim = document.querySelector("input#numFim")
    let inputPasso = document.querySelector("input#numPasso")

    let inicio = Number(inputInicio.value);
    let fim = Number(inputFim.value);
    let passos = Number(inputPasso.value);

    if(inputInicio.value.length == 0 || inputFim.value.length == 0 || inputPasso.value.length == 0) {
        alert("ERRO. Preencha todos os campos.")
        containerResultado.innerHTML = "Assim não dá pra contar"
    } else if (inputPasso.value <= 0) {
        inputPasso.value = 1;
        contar();
    } else {
        containerResultado.innerHTML = "Contando... <br>"

        if(inicio < fim) {
                //Contagem crescente
            for (let c = inicio; c <= fim; c += passos) {
                containerResultado.innerHTML += `${c} \u{1F539} `
            }
        } else {
                //Contagem decrescente
            for (let c = inicio; c >= fim; c -= passos) {
                containerResultado.innerHTML += `${c} \u{1F539} `
            }
        }

        containerResultado.innerHTML += ` \u{1F3C1}`
    }
}