export default {
    SET_CART: (state, id) => {
        let found = state.cart.find(product => product.id == id) 
        // console.log('product found', found);
        if (found) {
            found.quantity ++;
            found.totalPrice = found.quantity * found.price;
            state.totalPrice += found.price
        } else {
            let found2 = state.products.find(product => product.id == id) 
            console.log('product totalPrice', state.totalPrice);
            found2.quantity = 1;
            found2.totalPrice = found2.price;
            state.cart.push(found2);
            state.totalPrice += found2.price
        }
         
        state.cartCount++
    },
    
}
 