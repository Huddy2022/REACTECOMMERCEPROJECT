// Coffee: price_1NedddIuX1xpM2hzg6WJLXKz
// Sunglasses: price_1NedelIuX1xpM2hzIrTmPRZd
// Camera: price_1NedfKIuX1xpM2hzl21KpjeN

const productsArray = [
    {
        id: "price_1NedddIuX1xpM2hzg6WJLXKz",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "price_1NedelIuX1xpM2hzIrTmPRZd",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1NedfKIuX1xpM2hzl21KpjeN",
        title: "Camera",
        price: 39.99
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };