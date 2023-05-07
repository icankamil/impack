const { Product } = require("../models");

module.exports = {
  create(createArgs) {
    return Product.create(createArgs);
  },

  update(id, updateArgs) {
    return Product.update(updateArgs, {
      where: {
        id,
      },
    });
  },

  delete(id) {
    return Product.destroy(id);
  },

  find(id) {
    return Product.findByPk(id);
  },

  findAll() {
    return Product.findAll();
  },

  getTotalPost() {
    return Product.count();
  },
};
