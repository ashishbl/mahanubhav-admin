import requests from './httpService';

const CategoryServices = {
  getAllCategory() {
    return requests.get('/category');
  },

  getCategoryById(id) {
    return requests.get(`/category/${id}`);
  },

  addCategory(body) {
    return requests.post('/category/add', body);
  },

  updateCategory(id, body) {
    return requests.put(`/category/${id}`, body);
  },

  deleteCategory(id) {
    return requests.patch(`/category/${id}`);
  },
};

export default CategoryServices;
