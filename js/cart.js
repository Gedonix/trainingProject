class Cart {
    purchases = [];
    constructor() {
        let keys = Object.keys(sessionStorage);
        for (let key of keys) {
            if (key.includes('prodIdx'))
                this.purchases.push(JSON.parse(sessionStorage.getItem(key)));
        }
        console.log(this.purchases);
    }
    show() {
        document.getElementById('show').addEventListener('click', () => console.log(this.purchases)); //, this.totalPrice()
    }

    removeFromCart() { }

    renderPurchases() { }

    totalPrice() {
        return this.purchases.reduce((sum, item) => sum + item.price, 0);
    }
}
const cart = new Cart();
cart.show();