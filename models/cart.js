const db = require('../util/database');

module.exports = class Cart {
  static addProduct(id) {
    db.execute("select * from products where id=?",[id]).then(([row,fieldData])=>{
      db.execute("select * from cart where id=?",[row[0].id]).then(([row2,fieldData])=>{
        if(row2.length!=0){
          db.execute("update cart set quantity=? where id=?", [row2[0].quantity + 1, row[0].id])
        }else{
          db.execute("insert into cart values(?, ?, ?, ?, ?, ?)",[row[0].id,row[0].title,row[0].price,row[0].description,row[0].imageUrl,1])
        }
        // console.log(row2);
      })
      // console.log(row[0].id);
    })
  }

  static deleteProduct(id) {
    db.execute("delete from cart where id=?",[id])
  }

  static getCart() {
    return db.execute("select id, quantity, title from cart")
  }
};
