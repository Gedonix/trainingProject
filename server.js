const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(express.static('./eShop'));
app.use(bodyParser.json());
// app.use((req, res, next) => {
//     res.append('Access-Control-Allow-Origin', ['*']);
//     res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.append('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });
app.get('/catalog', (req, res) => {
    fs.readFile('catalog.json', 'utf8', (err, data) => {
        res.send(data);
    });
});
app.get('/cart', (req, res) => {
    fs.readFile('cart.json', 'utf8', (err, data) => {
        res.send(data);
    });
});
app.post('/addtocart', (req, res) => {
    fs.readFile('cart.json', 'utf-8', (err, data) => {
        if (err) {
            res.send('2')
        } else {
            const cart = JSON.parse(data);
            const item = req.body;
            cart.push(item);
            fs.writeFile('cart.json', JSON.stringify(cart), err => {
                if (err) {
                    res.send('1');
                } else {
                    res.send('0');
                }
            });
        }
    })
});
app.post('/removefromcart', (req, res) => {
    fs.readFile('cart.json', 'utf-8', (err, data) => {
        if (err) {
            res.send('2')
        } else {
            const cart = JSON.parse(data);
            const good = req.body;

            let idx = cart.findIndex(item => item.product_id === good.product_id);
            cart.splice(idx, 1);

            fs.writeFile('cart.json', JSON.stringify(cart), err => {
                if (err) {
                    res.send('1');
                } else {
                    res.send('0');
                }
            });
        }
    })
});

app.listen(3000, () => {
    console.log('server is running on port 3000');
})