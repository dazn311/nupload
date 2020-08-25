export default {
    productsAll(state){
        return state.products
    },
    promoProducts(state){
        return state.products.filter(product => {
            return  product.promo  
        })
    },
    myProducts(state, getters){
        return state.products.filter(product => {
            // console.log('product.ownerId, getters.user.id', product.ownerId + ', ' +  getters.user);
            return  product.ownerId == getters.user  
        })
    },
    ProductById(state) {
        return productId => {
            return state.products.find(product => product.id === productId) 
        }
        
    },
    CART(state) { 
        return state.cart
    },
    CART_COUNT(state) {
        return state.cartCount
    },
    GET_TOTAL_PRICE(state) {
        return state.totalPrice
    },
    

}