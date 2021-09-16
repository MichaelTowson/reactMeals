import {useReducer} from 'react';

import CartContext from './cart-context';

//NOTE: Because app.js is going to be using this context, all of this logic could have also been put in there. However, by putting this into a wrapper component, we keep the file lean.

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    
    //concat returns a new array. We don't want to edit previous state reference
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }

  }
  return defaultCartState
};


const CartProvider = props => {
  //Initialize reducer
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = item => {
    dispatchCartAction({type: 'ADD', item: item});
  };

  const removeItemFromCartHandler = item => {
    dispatchCartAction({type: 'REMOVE', id: item.id});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
};

export default CartProvider