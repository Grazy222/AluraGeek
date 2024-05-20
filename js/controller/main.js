import { servicesProducts } from "../service/products-service.js";
const container = document.querySelector("[data-product]");
const form = document.querySelector("[data-form]");


function createElement(name, price, image, id){
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="img-container"> 
            <img class="imagemCard" src="${image}" alt="${name}">
        </div>
        <div class="card-container--info">
            <p>${name}</p>
            <div class="card-container--value">
                <p>Preço: ${price}</p>
                <button class="delete-button" data-id="${id}">
                    <img class="lixeira" src="./imagens/excluir.png" alt="Ícono de eliminación">
                </button>
            </div>
         </div>
    `
    
    container.appendChild(card);
    return card;
}

const render = async () => {
    try{
        const listProduct = await servicesProducts.productList();
console.log(listProduct)
    listProduct.forEach(product => {
        container.appendChild(
            createElement(product.name, product.price, product.image, product.id)
        );
    });

    } catch (error) {
        console.log(error);
    }
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    
    servicesProducts.createProduct(name, price, image)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

});

render();


// <!-- <div class="cards">
// <img src="./imagens/xicara.png" alt="Imagen xicara">
// </div>

// <div class="card-container--info">
// <p>Xicara</p>
// <div class="card-container--value">
//     <p>Preço: $15.00</p>
//     <button class="delete-button">
//         <img class="lixeira" src="./imagens/excluir.png" alt="Ícono de eliminación">
//     </button>
// </div> -->