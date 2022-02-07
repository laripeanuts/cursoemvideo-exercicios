function calcular(){
    let inputNumero = document.querySelector("input#txtNum");
    let btnCalcular = document.querySelector("input#btnTabuada");
    let containerResultado = document.querySelector("div#resultado");
    let tab = document.getElementById("selTabuada");

    if (inputNumero.value.length == 0 || inputNumero.value == 0) {
        alert("Digite um valor diferente de zero");
    } else {
        let numero = Number(inputNumero.value);
        let c = 1;
        tab.innerHTML = ""
        while (c <= 10){
            let item = document.createElement("option");
            item.text = `${numero} * ${c} = ${numero*c}`;
            tab.appendChild(item);
            c++;
        }
    }
}