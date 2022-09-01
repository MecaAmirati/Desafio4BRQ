let inputNome = document.querySelector(".nome") as HTMLInputElement;
let inputStatus = document.getElementsByName("status") as any;
let inputData = document.querySelector(".data") as HTMLInputElement;
let inputTextArea = document.querySelector(".descricaoArea") as HTMLInputElement;
let novosCards: Array<Card> = []

class Card {
    private nome: string;
    private descricao: string;
    private data: string;
    private status: string;
    private id: string;

    public get Nome(): string {
        return this.nome;
    }
    public set Nome(value: string) {
        this.nome = value;
    }

    public get Descricao(): string {
        return this.descricao;
    }
    public set Descricao(value: string) {
        this.descricao = value;
    }

    public get Data(): string {
        return this.data;
    }
    public set Data(value: string) {
        this.data = value;
    }

    public get Status(): string {
        return this.status;
    }
    public set Status(value: string) {
        this.status = value;
    }

    public get Id(): string {
        return this.id;
    }
    public set Id(value: string) {
        this.id = value;
    }

    constructor(_nome:string, _descricao:string, _data: string, _status: string, _id: string ){
        this.nome = _nome;
        this.descricao = _descricao;
        this.data = _data;
        this.status = _status;
        this.id = _id;
    }

}

interface ApiTipagem{
    nome: string;
    descricao: string;
    data: string;
    status: string;
    id: string;
}

function obterCardsApi():void{
    fetch('https://62361b7feb166c26eb2f488a.mockapi.io/pacotes')
    .then(resposta=>resposta.json())
    .then((dados:ApiTipagem [])=>{
        return dados.map(dadosCard=>{            
            return new Card(
                dadosCard.nome,
                dadosCard.descricao,
                dadosCard.data,
                dadosCard.status,
                dadosCard.id
            )
        })
    })
    .then(dadosNovosCards => {
        injetarDados(dadosNovosCards)
        novosCards = dadosNovosCards;
        console.log(novosCards);
//

    })
    
}

function criarCards() {


    inputNome.value;
    validacaoStatus (inputStatus);
    inputData.value;
    inputTextArea.value;

    
}

function validacaoStatus(status:any){
    status = inputStatus;
    for (let i = 0; i < status.length; i++) {
      if (status[i].checked) {
        return status = status[i].value
      }
    }
    return status
}

function dataTexto(data:string):string{
    let newDate = new Date(data)
    console.log(newDate);
    
    let dataString:string;
    dataString=(newDate.getDate().toString()+"/"
            +newDate.getMonth().toString()+"/"
            +newDate.getFullYear().toString()
            )
    return dataString
}

function injetarDados(arrayNovosCards:any){
    // let converterData = formatarData (data)
    let cardNovo = document.querySelector('.cardAPI') as HTMLElement
    // console.log(cardNovo);
    
    for (let i = 0; i < arrayNovosCards.length; i++) {
        cardNovo.innerHTML += `<div class="container">
        <h2 class="nomeAPI">${arrayNovosCards[i].nome} </h2>
        <p class="txtAPI">${arrayNovosCards[i].descricao}</p>
        <p class="txtData">Data: ${dataTexto (arrayNovosCards[i].data)} </p>
        <button type="submit" class="editar">Editar</button>
        <button type="submit" class="excluir">Excluir</button>
    </div>`
    }
    console.log(dataTexto(arrayNovosCards[0].data));
}

window.onload = () => {
    obterCardsApi();
};


// arrayNovosCards.map((x: any)=>console.log(x)
// )