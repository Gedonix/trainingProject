const GET_URL = 'http://localhost:3000/catalog';
const POST_URL = 'http://localhost:3000/addtocart';
//const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';
//const API_URL_1 = 'https://mock-api-builder.vercel.app/api/schema/get/602c166a89c4a60009ef7046';

Vue.component('appheader', {
    methods: {
        toCartpage() {
            document.location = 'cart.html'
        }
    },
    template: `
    <div class="header">          
        <button class="cart_button" type="button" @click="toCartpage">к Корзине</button>
    </div>
    `
})
Vue.component('goods_item', {
    props: ['item'],
    data() {
        return {
            inCart: false,
            bValue: 'В корзину',
        }
    },
    methods: {
        addToCart() {
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
                        this.inCart = true;
                        this.bValue = 'уже в корзине';
                    }
                })
        }
    },
    template: `
    <div class="goods_item">
        <div class="rect"></div>
        <h2>{{ item.product_name }}</h2>
        <p>{{ item.price }} рублей</p>
        <button class="to_cart_button" @click="addToCart" :disabled="inCart">{{ bValue }}</button>
    </div>
    `
})
Vue.component('appmain', {
    props: ['initlist'],
    data() {
        return {
            input: '',
            searchStatus: '',
            filtered: [],
            isFiltered: false,
        }
    },
    methods: {
        search() {
            if ((this.input == null) || (this.input.length == 0)) {
                this.searchStatus = "Поле пустое";
            } else {
                const regexp = new RegExp(this.input, 'i');
                this.filtered = this.initlist.filter(item => regexp.test(item.product_name));
                this.searchStatus = `Найдено товаров ${this.filtered.length}`;
                this.isFiltered = true;
            }
        },
        invert() {
            this.isFiltered = false;
            this.input = '';
            this.searchStatus = '';
        }
    },
    computed: {
        showlist() {
            if (this.isFiltered) {
                return this.filtered
            } else {
                return this.initlist
            }
        }
    },
    template: `
    <div class="container">
        <div class="search">
            <button class="search_button" type="button" v-if="isFiltered" @click='invert'>Назад к каталогу</button>
            <div v-if="!isFiltered">
                <input type="text" v-model="input">            
                <button class="search_button" type="button" @click='search'>Поиск</button>
            </div>
            <div id="searchStatus"> {{ searchStatus }}</div>
        </div>
        <div class="goods_list">
            <goods_item v-for='good in showlist' :item='good' :key='good.id_product'></goods_item>
        </div>
    </div>
    `
})
var app = new Vue({
    el: '#app',
    data: {
        catalog: [],
        errMsg: '',
    },
    methods: {
        getGoods() {
            fetch(GET_URL)
                .then(r => r.json())
                .then(r => this.catalog = r)
                .catch(e => this.errMsg = e)
        }
    },
    mounted() {
        this.getGoods()
    }
})