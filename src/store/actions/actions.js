export default {
    ADD_TO_CART({commit}, product){
        commit('SET_CART', product)
    },
    // async createProduct ({commit, getters}, payload) {
    async createProduct ({commit}, payload) {
            commit('clearError')
            commit('setLoading', true)
            console.log(payload)
            // const image = payload.image
            try {
                // const newProduct = new Product (
                //     payload.title,
                //     payload.vendor,
                //     payload.color,
                //     payload.material,
                //     payload.price,
                //     payload.description,
                //     getters.user.id,
                //     payload.promo

                // )
                // commit('creatProduct new exemplar', newProduct) // text for delete

                // const product = await fb.database().ref('products').push(newProduct)
                // const imageExt = image.name.slice(image.name.lastIndexOf('.'))
                // const fileData = await fb.storage().ref(`products/${product.key}.${imageExt}`).put(image)
                // const imageSrc = await fb.storage().ref().child(fileData.ref.fullPath).getDownLoadURL()
                // await fb.database().ref('products').child(product.key).update({imageSrc})
                commit('setLoading', false)
                // commit('createProduct', {
                //     ...newProduct,
                //     id: product.key,
                //     imageSrc
                // })
            } catch (error) {
                commit('setError', error.message)
                commit('setLoading', false)
                throw error
            }
    },
    async fetchProducts ({commit}) {
      commit('clearError')
      commit('setLoading', true)
      const resultProducts = []
      try {
        // const productsVal = await fb.database().ref('products').once('value')
        // const products = productsVal.val()
        // Object.keys(products).forEach(key => {
        //   const product = products[key]
        //   resultProducts.push(
        //     new Product(
        //       product.title,
        //       product.vendor,
        //       product.color,
        //       product.material,
        //       product.price,
        //       product.description,
        //       product.ownerId,
        //       product.imageSrc,
        //       product.promo,
        //       key
        //     )
        //   )
          commit('loadProducts', resultProducts)
          commit('setLoading', false)
        // })
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },
    async updateProduct ({commit}, {title, description, id}) {
      console.log(title + description + id)
        commit('clearError')
        commit('setLoading', true)
        // try {
        //   await fb.database().ref('products').child(id).update({
        //     title,
        //     description
        //   })
        //   commit('updateProduct', {
        //     title,
        //     description,
        //     id
        //   })
        //   commit('setLoading', false)
        // } catch (error) {
        //   commit('setError', error.message)
        //   commit('setLoading', false)
        //   throw error
        // }
      }
    
}