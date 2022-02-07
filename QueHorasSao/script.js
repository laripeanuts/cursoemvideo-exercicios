function renderizar() {
    let divMsg = document.querySelector("div#msg");
    let divImagem = document.getElementById("imagemHora");
    let hMsg = document.getElementById("msgDesejo");

    let data = new Date();
    let dataAtual = `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`
    let horaDoDia = data.getHours();
    let minutoDoDia = data.getMinutes();
    let horaCompleta = `${horaDoDia}:${minutoDoDia}`;

    divMsg.innerHTML = `Hoje é dia ${dataAtual} e são ${horaCompleta}h`;

    if (horaDoDia < 6) {
        // boa madrugada
        hMsg.innerHTML = "Boa madrugada!"
        divImagem.src = "assets/boamadrugada.jpg";
        document.body.style.background = "#253232";
    } else if (horaDoDia < 13) {
        //bom dia
        hMsg.innerHTML = "Bom dia!"
        divImagem.src = "assets/bomdia.jpg";
        document.body.style.background = "#c08616";
    } else if (horaDoDia < 18) {
        //boa tarde
        hMsg.innerHTML = "Boa tarde!"
        divImagem.src = "assets/boatarde.jpg";
        document.body.style.background = "#71271e";
    } else {
        //boa noite
        hMsg.innerHTML = "Boa noite!"
        divImagem.src = "assets/boanoite.jpg";
        document.body.style.background = "#2a2150";
    }
}

