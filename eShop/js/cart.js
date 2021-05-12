const GET_URL = 'http://localhost:3000/cart';
const POST_URL = 'http://localhost:3000/removefromcart';

Vue.component('appheader', {
    methods: {
        toCatalogpage() {
            document.location = 'index.html'
        }
    },
    template: `
    <div class="header">          
        <button class="cart_button" type="button" @click="toCatalogpage">к Каталогу</button>
    </div>
    `
})
Vue.component('goods_item', {
    props: ['item'],
    data() {
        return {
            isExist: true,
        }
    },
    methods: {
        removeFromCart() {
            fetch(POST_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(this.item)
            })
                .then(response => response.text())
                .then(result => {
                    if (result == '0') {
                        this.isExist = false;
                    } else {
                        console.log('an ERROR occurred');
                    }
                })
        }
    },
    template: `
    <div class="goods_item"  v-if="isExist">
        <div class="rect"></div>
        <h2>{{ item.product_name }}</h2>
        <p>{{ item.price }} рублей</p>
        <button class="to_cart_button" @click="removeFromCart">Удалить</button>
    </div>
    `
})
Vue.component('appmain', {
    props: ['initlist'],
    template: `    
    <div class="goods_list">
        <goods_item v-for='good in initlist' :item='good' :key='good.id_product'></goods_item>
    </div>    
    `
})
var app = new Vue({
    el: '#app',
    data: {
        cart: [],
        errMsg: '',
    },
    methods: {
        getGoods() {
            fetch(GET_URL)
                .then(r => r.json())
                .then(r => this.cart = r)
                .catch(e => this.errMsg = e)
        }
    },
    mounted() {
        this.getGoods()
    }
})