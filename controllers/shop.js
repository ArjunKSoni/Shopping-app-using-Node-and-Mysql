const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('shop/product-list', {
        prods: rows,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(([product]) => {
      res.render('shop/product-detail', {
        product: product[0],
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('shop/index', {
        prods: rows,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => console.log(err));
};

exports.getCart = (req, res, next) => {
  Cart.getCart().then(([row,fieldData])=>{
    // console.log(row);
    res.render('shop/cart', {
      path: '/cart',
      pageTitle: 'Your Cart',
      products: row
    })
  })
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
    Cart.addProduct(prodId);
    res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
    Cart.deleteProduct(prodId);
    res.redirect('/cart');
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};

exports.getLogin = (req, res, next) => {
  res.render('authentication/Login', {
    path: '/login',
    pageTitle: 'Login'
  })
}
exports.postLogin = (req, res, next) => {
  res.render('authentication/Login', {
    path: '/login',
    pageTitle: 'Login'
  })
}
