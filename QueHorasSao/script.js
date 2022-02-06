function renderizar() {
    let divMsg = document.querySelector("div#msg");
    let divImagem = document.getElementById("imagemHora");

    let data = new Date();
    let dataAtual = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
    let horaDoDia = data.getHours();
    let minutoDoDia = data.getMinutes();
    let horaCompleta = `${horaDoDia}:${minutoDoDia}`;

    horaDoDia = 19

    divMsg.innerHTML = `Hoje é dia ${dataAtual} e são ${horaCompleta} horas`;

    if (horaDoDia < 6) {
        // boa madrugada
        divImagem.src = "assets/boamadrugada.jpg";
        document.body.style.background = "#253232";
    } else if (horaDoDia < 13) {
        //bom dia
        divImagem.src = "assets/bomdia.jpg";
        document.body.style.background = "#c08616";
    } else if (horaDoDia < 18) {
        //boa tarde
        divImagem.src = "assets/boatarde.jpg";
        document.body.style.background = "#71271e";
    } else {
        //boa noite
        divImagem.src = "assets/boanoite.jpg";
        document.body.style.background = "#2a2150";
    }
}

