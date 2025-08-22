export default class Cart{
    constructor() {
        this.items_list = [];
    }
    function addProduct(product) {
        const existingItem = this.items_list.find(items_list => items_list.id === product.id);
        if (!existingItem) {
            this.items_list.push({ ...product, quantity: 1 });
        }else{
            existingItem.quantity += 1;
        }
    }

    function removeProducts {
        const existingItem = this.items_list.find(items_list => items_list.id === product.id);
        if (!existingItem){
            return;
        }else{
            existingItem.quantity -= 1;

            if (existingItem.quantity === 0;) {
                this.items_list = this.items_list.filter(items_list => items_list.id !== productId);
            }
        }
    }
}