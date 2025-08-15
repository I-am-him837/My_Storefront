export default class Product {
    constructor(price, name, image, description='', id) {
        this.price = price;
        this.name = name;
        this.image = image;
        this.description = description;
        this.id = id;
    }
}

