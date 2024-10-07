// View.js

class ProductView {
    constructor() {
        this.app = document.getElementById('app');
        
        this.searchInput = document.createElement('input');
        this.searchInput.placeholder = "Search for a product...";
        
        this.showAvailableButton = document.createElement('button');
        this.showAvailableButton.textContent = "Show Available";
        
        this.productList = document.createElement('ul');
        
        this.app.append(this.searchInput, this.showAvailableButton, this.productList);
    }

    displayProducts(products) {
        this.productList.innerHTML = '';
        products.forEach(product => {
            const productItem = document.createElement('li');
            productItem.textContent = `${product.name} (${product.category}) - $${product.price} - Available: ${product.isAvailable}`;
            this.productList.appendChild(productItem);
        });
    }

    bindSearch(handler) {
        this.searchInput.addEventListener('input', event => {
            handler(event.target.value);
        });
    }

    bindShowAvailable(handler) {
        this.showAvailableButton.addEventListener('click', () => {
            handler();
        });
    }
}