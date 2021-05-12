'use strict';
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';

class Catalog {
    goods = []; // [{ id_product: Number, product_name: String, price: Number }]
    purchases = [];

    async _loadFromBackend(url) {
        let response = await fetch(url);
        this.goods = await response.json();
        console.log(this.goods);
    }

    buildGoodsCatalog() {
        this._loadFromBackend(API_URL)
            .then(() => this._render())
            .then(() => this._addCartBtnEventListener());
    }

    _render() {
        const goodsTemplates = this.goods.map((item, index) => this._getoodsItemTemplate(item, index));

        document.querySelector('.goods_list').innerHTML = goodsTemplates.join('\n');
    }

    _getoodsItemTemplate({ product_name, price }, index) {
        return `    <div class="goods_item">
            <div class="rect"></div>
            <h2>${product_name}</h2>
            <p>${price} рублей</p>
            <button class="to_cart_button" data-idx=${index}>В корзину</button>
        </div>`;
    }

    _addCartBtnEventListener() {
        document.querySelectorAll('.to_cart_button').forEach(item =>
            item.addEventListener('click', () => this._addToCart(item)))
    }

    _addToCart(pButton) {
        let index = pButton.dataset.idx;
        let product = this.goods[+index];

        let isExists = this.purchases.findIndex(item => item.id_product == product.id_product);

        if (isExists === -1) {
            this.purchases.push(product);
            pButton.innerText = 'уже в Корзине';
            sessionStorage.setItem('prodIdx'.concat(index), JSON.stringify(product));
        }
    }
}

function btnInit() {
    document.getElementById('catalog').addEventListener('click', () => list.buildGoodsCatalog());
    document.getElementById('cart').addEventListener('click', () => document.location = 'cart.html');
}

const list = new Catalog();
btnInit();

