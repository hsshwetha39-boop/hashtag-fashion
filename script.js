function filterProducts(category) {

    const products = document.querySelectorAll('.product-link');

    products.forEach(product => {

        const card = product.querySelector('.product-card');

        if (card.dataset.category === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

    document.getElementById('products').scrollIntoView({
        behavior: 'smooth'
    });
}

function showAllProducts() {

    const products = document.querySelectorAll('.product-link');

    products.forEach(product => {
        product.style.display = "block";
    });

}