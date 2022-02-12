let inputNum = document.querySelector("input#iNum");
let btnAdd = document.querySelector("button#btnAdd");
let btnEnd = document.querySelector("button#btnEnd");
let divResultado = document.querySelector("div#resultado");
let selectLista = document.getElementById("flist"); 
let valores = [];

function isNumber(number) {
    if (number > 0 && number <= 100) {
        return true;
    } else { 
        return false;
    }
}

function inList(number, lista) {
    if (lista.indexOf(number) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (isNumber(inputNum.value) && !inList(inputNum.value, valores)) {
        valores.push(inputNum.value);
        item = document.createElement("option");
        item.text = `Valor ${inputNum.value} adiionado`;
        selectLista.appendChild(item);
        divResultado.innerHTML = "";
    } else {
        alert("Número inválido ou valor já contém na lista!")
    }

    inputNum.value = "";
    inputNum.focus();
}

function finalizar() {
    if (valores.length == 0) {
        alert("Por favor, adicionar itens a lista");
    } else {
        divResultado.innerHTML = "";

        let total = valores.length;
        divResultado.innerHTML += `Foram cadastrados ${total} números<br>`

        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
    
        for (let pos in valores) {
            soma += Number(valores[pos]);
            if (valores[pos] > maior) {
                maior = valores[pos];
            };
            if (valores[pos] < menor) {
                menor = valores[pos];
            }
        }

        divResultado.innerHTML += `Sendo o maior deles ${maior} e o menor ${menor}<br>`;

        divResultado.innerHTML += `Somando todos os valores, temos o total de  ${soma}<br>`;
        
        let media = Math.round(soma / total);
        divResultado.innerHTML += `A média entre eles é de ${media}<br>`;
    }

}