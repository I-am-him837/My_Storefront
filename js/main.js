import Product from './Product.js';
product_list = [new Product(22.95, "Basketball", "images/Basketball.png", "Made from the finest leather in all the lands", 1)];
const productsDiv = document.getElementById("products");

function renderProducts() {
    productsDiv.innerHTML = "";
    product_list.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `<img src="${product.image}"/>;
        <p>${product.name} - $${product.price}</p>
        <button>Add to Cart</button>`;
        div.querySelector("button").addEventListener("click", () => {
            });
        productsDiv.appendChild(div);
    });
}

renderProducts();