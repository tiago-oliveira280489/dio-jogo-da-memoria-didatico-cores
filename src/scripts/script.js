const cores = [
    {nome: "Vermelho", cor: "#FF0000"},
    {nome: "Verde", cor: "#009933"},
    {nome: "Azul", cor: "#0033CC"},
    {nome: "Roxo", cor: "#660066"},
    {nome: "Preto", cor: "#000000"},
    {nome: "Marrom", cor: "#663300"},
    {nome: "Cinza", cor: "#999999"},
    {nome: "Laranja", cor: "#FF9933"},
    {nome: "Vermelho", cor: "#FF0000"},
    {nome: "Verde", cor: "#009933"},
    {nome: "Azul", cor: "#0033CC"},
    {nome: "Roxo", cor: "#660066"},
    {nome: "Preto", cor: "#000000"},
    {nome: "Marrom", cor: "#663300"},
    {nome: "Cinza", cor: "#999999"},
    {nome: "Laranja", cor: "#FF9933"}
];
let openCards = [];

let shuffleCores = cores.sort(() => (Math.random() > 0.5 ? 1 : -1));

for (let i = 0; i < cores.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = `
    <div class="color-box" style="background-color: ${shuffleCores[i].cor}">
      <div class="color-name">${shuffleCores[i].nome}</div>
    </div>`;
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick(){
    if (openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length == 2){
        setTimeout(checkMatch, 500);
    }
}

function checkMatch(){
    const cor1 = openCards[0].querySelector('.color-box').style.backgroundColor;
    const cor2 = openCards[1].querySelector('.color-box').style.backgroundColor;

    if (cor1 === cor2){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }
    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === cores.length){
        alert("Você venceu!");
    }
}

