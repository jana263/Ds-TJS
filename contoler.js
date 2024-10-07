// Controller.js

class ProductController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Display all products initially
        this.view.displayProducts(this.model.getAllProducts());

        // Bind events
        this.view.bindSearch(this.handleSearch.bind(this));
        this.view.bindShowAvailable(this.handleShowAvailable.bind(this));
    }

    handleSearch(query) {
        const filteredProducts = this.model.searchProducts(query);
        this.view.displayProducts(filteredProducts);
    }

    handleShowAvailable() {
        const availableProducts = this.model.getAvailableProducts();
        this.view.displayProducts(availableProducts);
    }
}
