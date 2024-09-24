const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;

botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento){
    evento.preventDefault()
    
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

        if(checkBoxInput.checked){
            checkBoxCustomizado.classList.add("checked");
        } else {
            checkBoxCustomizado.classList.remove("checked");
        }
    })

    const checkBoxCustomizado = document.createElement("div");
    checkBoxCustomizado.classList.add("checkbox-customizado");

    checkBoxLabel.appendChild(checkBoxInput);
    checkBoxLabel.appendChild(checkBoxCustomizado);

    containerCheckBox.appendChild(checkBoxLabel);
    containerNomeDoItem.appendChild(containerCheckBox);

    const nomeDoItem = document.createElement("p");
    nomeDoItem.innerText = item.value;
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

    botaoRemover.appendChild(imagemRemover);
    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoRemover);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);
    itemDaLista.appendChild(containerItemLista);
    listaDeCompras.appendChild(itemDaLista);
}