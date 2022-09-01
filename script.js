"use strict";
let inputNome = document.querySelector(".nome");
let inputStatus = document.getElementsByName("status");
let inputData = document.querySelector(".data");
let inputTextArea = document.querySelector(".descricaoArea");
let novosCards = [];
class Card {
    constructor(_nome, _descricao, _data, _status, _id) {
        this.nome = _nome;
        this.descricao = _descricao;
        this.data = _data;
        this.status = _status;
        this.id = _id;
    }
    get Nome() {
        return this.nome;
    }
    set Nome(value) {
        this.nome = value;
    }
    get Descricao() {
        return this.descricao;
    }
    set Descricao(value) {
        this.descricao = value;
    }
    get Data() {
        return this.data;
    }
    set Data(value) {
        this.data = value;
    }
    get Status() {
        return this.status;
    }
    set Status(value) {
        this.status = value;
    }
    get Id() {
        return this.id;
    }
    set Id(value) {
        this.id = value;
    }
}
function obterCardsApi() {
    fetch('https://62361b7feb166c26eb2f488a.mockapi.io/pacotes')
        .then(resposta => resposta.json())
        .then((dados) => {
        return dados.map(dadosCard => {
            return new Card(dadosCard.nome, dadosCard.descricao, dadosCard.data, dadosCard.status, dadosCard.id);
        });
    })
        .then(dadosNovosCards => {
        injetarDados(dadosNovosCards);
        novosCards = dadosNovosCards;
        console.log(novosCards);
        //
    });
}
function criarCards() {
    inputNome.value;
    validacaoStatus(inputStatus);
    inputData.value;
    inputTextArea.value;
}
function validacaoStatus(status) {
    status = inputStatus;
    for (let i = 0; i < status.length; i++) {
        if (status[i].checked) {
            return status = status[i].value;
        }
    }
    return status;
}
function dataTexto(data) {
    let newDate = new Date(data);
    console.log(newDate);
    let dataString;
    dataString = (newDate.getDate().toString() + "/"
        + newDate.getMonth().toString() + "/"
        + newDate.getFullYear().toString());
    return dataString;
}
function injetarDados(arrayNovosCards) {
    // let converterData = formatarData (data)
    let cardNovo = document.querySelector('.cardAPI');
    // console.log(cardNovo);
    for (let i = 0; i < arrayNovosCards.length; i++) {
        cardNovo.innerHTML += `<div class="container">
        <h2 class="nomeAPI">${arrayNovosCards[i].nome} </h2>
        <p class="txtAPI">${arrayNovosCards[i].descricao}</p>
        <p class="txtData">Data: ${dataTexto(arrayNovosCards[i].data)} </p>
        <button type="submit" class="editar">Editar</button>
        <button type="submit" class="excluir">Excluir</button>
    </div>`;
    }
    console.log(dataTexto(arrayNovosCards[0].data));
}
window.onload = () => {
    obterCardsApi();
};
// arrayNovosCards.map((x: any)=>console.log(x)
// )
