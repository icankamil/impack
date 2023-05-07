const productRepository = require("../repositories/productRepository");

module.exports = {
  create(requestBody) {
    return productRepository.create(requestBody);
  },

  update(id, requestBody) {
    return productRepository.update(id, requestBody);
  },

  delete(id) {
    return productRepository.delete(id);
  },

  async list() {
    try {
      const products = await productRepository.findAll();
      const productcount = await productRepository.getTotalPost();

      return {
        data: products,
        count: productcount,
      };
    } catch (err) {
      throw err;
    }
  },

  get(id) {
    return productRepository.find(id);
  },
};
