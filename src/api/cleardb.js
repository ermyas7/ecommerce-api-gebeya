const Cart = require('./resources/cart/cart.model.js')
const User = require('./resources/user/user.model.js')
const Item = require('./resources/item/item.model.js')

module.exports = async () => {
  try{
    await Cart.remove({})
    await User.remove({})
    await Item.remove({})
    console.log('db Clean up successful')
  }catch(err){
    console.log({error: err})
  }
}