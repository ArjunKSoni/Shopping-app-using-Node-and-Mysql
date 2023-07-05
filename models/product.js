const db = require('../util/database');
const cart=require("../models/cart")

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      'INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)',
      [this.title, this.price, this.imageUrl, this.description]
    );
  }

  static deleteById(id) {
    db.execute("delete from products where id=?",[id])
    cart.deleteProduct(id)
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {
    return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
  }
  static editProduct(prodId,updatedTitle,updatedPrice,updatedImageUrl,updatedDesc){
    db.execute("update products set title=?, price=?, imageUrl=?, description=? where id=?",[updatedTitle,updatedPrice,updatedImageUrl,updatedDesc,prodId])
  }
};
