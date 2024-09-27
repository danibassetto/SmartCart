import { editarItem } from "./editarItem.js";
import { excluirItem } from "./excluirItem.js";
import { verificarListaComprados } from "./verificarListaComprados.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");
let contador = 0;

export function criarItemDaLista(item) {
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");

    const containerNomeDoItem = document.createElement("div");
    
    const containerCheckBox = document.createElement("div");
    containerCheckBox.classList.add("container-checkbox");
    
    const checkBoxInput = document.createElement("input");
    checkBoxInput.type = "checkbox";
    checkBoxInput.classList.add("input-checkbox");
    checkBoxInput.id = "checkbox-" + contador++;

    const checkBoxLabel = document.createElement("label");
    checkBoxLabel.setAttribute("for", checkBoxInput.id);

    checkBoxLabel.addEventListener("click", function(evento) {
        const checkBoxInput = evento.currentTarget.querySelector(".input-checkbox");
        const checkBoxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");

        if(checkBoxInput.checked){
            checkBoxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(itemDaLista);
        } else {
            checkBoxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista);
        }

        verificarListaComprados(listaComprados);
    })

    const checkBoxCustomizado = document.createElement("div");
    checkBoxCustomizado.classList.add("checkbox-customizado");

    checkBoxLabel.appendChild(checkBoxInput);
    checkBoxLabel.appendChild(checkBoxCustomizado);

    containerCheckBox.appendChild(checkBoxLabel);
    containerNomeDoItem.appendChild(containerCheckBox);

    const nomeDoItem = document.createElement("p");
    nomeDoItem.innerText = item;
    nomeDoItem.id = "item-titulo";
    containerNomeDoItem.appendChild(nomeDoItem);

    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    const botaoEditar = document.createElement("button");
    botaoRemover.classList.add("item-lista-button");
    botaoEditar.classList.add("item-lista-button");

    const imagemRemover = document.createElement("img");
    const imagemEditar = document.createElement("img");
    imagemRemover.src = "./assets/delete.svg";
    imagemEditar.src = "./assets/edit.svg";
    imagemRemover.alt = "remover";
    imagemEditar.alt = "editar";

    botaoRemover.addEventListener("click", function(){
        excluirItem(itemDaLista);
    })

    botaoEditar.addEventListener("click", function() {
        editarItem(itemDaLista);
    })

    botaoRemover.appendChild(imagemRemover);
    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoRemover);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);

    const itemData = document.createElement("p");
    itemData.innerText = `${new Date().toLocaleDateString("pt-BR", { weekday: "long" })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" })}`;
    itemData.classList.add("texto-data");

    itemDaLista.appendChild(containerItemLista);
    itemDaLista.appendChild(itemData);    

    return itemDaLista;
}