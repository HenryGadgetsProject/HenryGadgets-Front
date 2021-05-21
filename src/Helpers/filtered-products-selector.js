export function filteredProductsSelector(state) {

    let filteredProducts = state.product.products

    if(state.product.selectedCategory) {
        filteredProducts = filteredProducts.filter(product => product.categories.some(category => category.name === state.product.selectedCategory))
    }

    if(state.product.selectedAvailability === 'available') {
        filteredProducts = filteredProducts.filter(product => product.stock > 0)
    }

    if(state.product.selectedAvailability === 'not available') {
        filteredProducts = filteredProducts.filter(product => product.stock === 0)
    }

    return filteredProducts
}
