import requests from './httpService';

const ProductServices = {
  getAllProducts() {
    return requests.get('/products');
  },

  getProductById(id) {
    return requests.post(`/products/${id}`);
  },

  addProduct(body) {
    return requests.post('/products/add', body);
  },

  updateProduct(id, body) {
    return requests.put(`/products/${id}`, body);
  },

  deleteProduct(id) {
    return requests.delete(`/products/${id}`);
  },
};

export default ProductServices;
