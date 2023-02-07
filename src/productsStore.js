// Coffee: price_1MXceyBXhs8eJYMKQZFiGv5U
// Sunglasses: price_1MXckWBXhs8eJYMKRIAqqVDE
// Camera: price_1MXckxBXhs8eJYMKUXfaKLAG

const productsArray = [
    {
        id: "price_1MXceyBXhs8eJYMKQZFiGv5U",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "price_1MXckWBXhs8eJYMKRIAqqVDE",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1MXckxBXhs8eJYMKUXfaKLAG",
        title: "Camera",
        price: 39.99
    }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID:" + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };