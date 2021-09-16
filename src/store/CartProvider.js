

import CartContext from './cart-context';

//NOTE: Because app.js is going to be using this context, all of this logic could have also been put in there. However, by putting this into a wrapper component, we keep the file lean.

const CartProvider = props => {
  const addItemToCartHandler = item => {};

  const removeItemFromCartHandler = item => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
};

export default CartProvider