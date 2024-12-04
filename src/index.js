import createItem from "./services/item.js";
import * as cartServices from "./services/cart.js"

const myCart = [];

console.log("Welcome to your Shopee Cart!!");

const item1 = await createItem("Hot-Wheels", 7.99, 2);
const item2 = await createItem("Massageador", 27.99, 3);

await cartServices.addItem(myCart, item1);
await cartServices.addItem(myCart, item2);

// await cartServices.removeItem(myCart, 1);

await cartServices.displayCart(myCart)

console.log("\nShopee Cart Total is:");
await cartServices.getTotal(myCart);