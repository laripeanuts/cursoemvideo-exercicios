function verificar() {
    let data = new Date();
    let anoAtual = data.getFullYear();
    let inputAno = document.querySelector("input#txtano");
    let containerResultado = document.querySelector("div#resultado");
    let idade = anoAtual - Number(inputAno.value);
    let inputSexo = document.getElementsByName("radSexo");
    let genero;

    let img = document.createElement("img");
    img.setAttribute = ("id", "foto");

    if (inputAno.value.length == 0 || inputAno.value > anoAtual || inputAno.value <= 0) {
        alert("Digite um ano possível");
    } else {

        if(inputSexo[0].checked) {
            genero = "feminino";
        } else if (inputSexo[1].checked) {
            genero = "masculino"
        } else if (inputSexo[2].checked) {
            genero = "não binário"
        } else {
            genero = "não informado"
        }

        containerResultado.innerHTML = `Você tem ${idade} anos, é do gênero ${genero} e está na fase `;

        if (idade <= 12) {
            containerResultado.innerHTML += "infantil";
        } else if (idade <= 21){
            containerResultado.innerHTML += "juventude";
        } else if (idade <= 60){
            containerResultado.innerHTML += "adulta";
        } else {
            containerResultado.innerHTML += "da melhor idade";
        }
    }


}