function adicionaItem(event){

    let elementoNovo = document.createElement("article")
    elementoNovo.setAttribute("class", "item")

    elementoNovo.innerHTML = "Nada Não"

    let referencia = document.getElementById("container")

    referencia.insertAdjacentElement("beforeend", elementoNovo)
}


function removeItem(event){
    event.target.remove()
}


// function removeItem(event){
//     let removerItemClicar = document.querySelector(".item")
//     removerItemClicar.classList.remove("item")
// }



