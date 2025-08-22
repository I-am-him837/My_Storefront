import Product from './Product.js';
import Cart from './cart.js';
const product_list = [new Product(22.95, "Basketball", "images/Basketball.png", 1, "Made from the finest leather in all the lands"), new Product(80, "Tennis Shoes", "images/Tennis_Shoes.png", 2)];
const productsDiv = document.getElementById("products");
const cartDiv = document.getElementById("cart");
const cart = new Cart();

function renderProducts() {
    productsDiv.innerHTML = "";
    product_list.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `<img src="${product.image}"/>
        <p>${product.name} - $${product.price}</p>
        ${product.description ? `<p>${product.description}</p>` : ''}
        <button>Add to Cart</button>`;
        div.querySelector("button").addEventListener("click", () => {
        cart.addProduct(product);renderCart(cart);});
        productsDiv.appendChild(div);
    });
}

function renderCart() {

}
renderProducts();