//sk_test_51NedXkIuX1xpM2hzqWrQsUYgyiv9zkttSFj96n2Hc1hqMtcJyvDqB4sgEjTY4nAAsfK61sYk3JUVHxNF37Gf1XUa00vRD3aLSk;
// Coffee: price_1NedddIuX1xpM2hzg6WJLXKz
// Sunglasses: price_1NedelIuX1xpM2hzIrTmPRZd
// Camera: price_1NedfKIuX1xpM2hzl21KpjeN

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51NedXkIuX1xpM2hzqWrQsUYgyiv9zkttSFj96n2Hc1hqMtcJyvDqB4sgEjTY4nAAsfK61sYk3JUVHxNF37Gf1XUa00vRD3aLSk');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]

    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) => {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        );
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));