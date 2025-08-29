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

const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const productImageInput = document.getElementById("product-image");
const productDescriptionInput = document.getElementById("product-description");
const addProductBtn = document.getElementById("add-product-btn");
let nextProductId = products.length + 1;
addProductBtn.addEventListener("click", () => {
    const name = productNameInput.value.trim();
    const price = parseFloat(productPriceInput.value);
    const image = productImageInput.value.trim();
    const description = productDescriptionInput.value.trim();
    const newProduct = new Product(price, name, image, nextProductId, description);
    nextProductId += 1;
    product_list.push(newProduct);
    renderProducts();
    productNameInput.value = "";
    productPriceInput.value = "";
    productImageInput.value = "";
    productDescriptionInput.value = "";
});

function renderCart(cart) {
    cartDiv.innerHTML = "";

    if (cart.items_list.length === 0) {
        const emptyMsg = document.createElement("p");
        emptyMsg.textContent = "Cart is empty.";
        cartDiv.appendChild(emptyMsg);
        return;
    }

    const list = document.createElement("ul");
    cart.items_list.forEach(
        item => {
            const li = document.createElement("li");
            li.style.marginBottom = "10px";
            li.innerHTML = `
                  ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}
                  <button data-id="${item.id}" class="remove-btn">Remove</button>
            `;
            list.appendChild(li);
        }
    );

    cartDiv.appendChild(list);
    const removeButtons = cartDiv.querySelectorAll(".remove-btn");
    removeButtons.forEach(button => {
            button.addEventListener("click", (e) => {
            const id = parseInt(e.target.getAttribute("data-id"));
            cart.removeProducts(id);renderCart(cart);
        });
    });
}

renderProducts();
renderCart(cart);