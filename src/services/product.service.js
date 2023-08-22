import axios from "axios";

class ProductService {
    static async getAll(){
        return await axios.get("https://dummyjson.com/products");
    }

    static async getProductById(productId) {
        return await axios.get("https://dummyjson.com/products/" + productId);
    }

    static async getProductLimit(limit, skip) {
        return await axios.get("https://dummyjson.com/products",
            {
                params: {limit: limit, skip: skip}
            });
    }
}

export default ProductService