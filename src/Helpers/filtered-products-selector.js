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

    if(state.product.selectedActive === 'true' || state.product.selectedActive === 'false') {
        filteredProducts = filteredProducts.filter(product => product.is_active.toString() === state.product.selectedActive)
    }

    if(state.product.selectedPrice) {
        const range = state.product.selectedPrice.split('-')
        filteredProducts = filteredProducts.filter(product => (parseInt(range[0]) <= product.price && product.price <= parseInt(range[1])))
    }

    if(state.product.selectedRating) {
        filteredProducts = filteredProducts.filter(product => product.rating === parseInt(state.product.selectedRating))
    }

    return filteredProducts
}
