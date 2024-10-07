//model.js 
class Product{
    constructor(category, name, price, isAvailable) {
        this.category = category;
        this.name = name;
        this.price = price;
        this.isAvailable = isAvailable;
    }

}

class ProductModel{
    constructor(){
        this.products = [
            new Product('Fruits','Apple',1,true),
            new Product('Vegetables','Peas',1,true),
            new Product ('Fruits','Dargonfruit',1,true),
            new Product('Fruits','Passionfruit',2,false),
            new Product ('Vegetables','Spinach',2,true),
            new Product ('Vegetables','Pumpkin',4,true)

        ];
    }
    getAllProducts() {
        return this.products;
    }

    searchProducts(query) {
        return this.products.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase())
        );
    }

    getAvailableProducts() {
        return this.products.filter(product => product.isAvailable);
    }
}
