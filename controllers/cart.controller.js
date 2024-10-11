const Product = require("../models/product.model");

async function addCartItem() {
  let product;
  try {
    product = await Product.findById(req.body.productId);
  } catch (error) {
    next(error);
    return;
  }
  const cart = res.locals.cart;
  res.locals.cart.addItem(product);
  res.session.cart = cart;

  req.status(201).json({
    message: 'Cart updated!',
    newTotalItems: cart.totalQuantity
  });
}

module.exports = {
  addCartItem: addCartItem,
};
