async function addItem(userCart, userItem){
    userCart.push(userItem);
}

async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1)
    }
}

async function removeItem(userCart, index){
    if(index >= 0 && index < userCart.length){
        userCart.splice(index, 1);
    }

}

async function getTotal(userCart){
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`R$${result}`);
}

async function displayCart(myCart) {
    console.log("\nShopee cart list:");
    myCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`)
    })
    
}

export{
    addItem,
    deleteItem,
    removeItem,
    getTotal,
    displayCart
}