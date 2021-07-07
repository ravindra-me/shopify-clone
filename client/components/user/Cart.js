import React from 'react';
import CartItem from './CartItem';
function Cart(props) {
  const { setState, state } = props;
  const { sideNav } = state;
  return (
    <div className={`bg-black sidenav  ${sideNav ? 'width-25' : ''}`}>
      <div
        onClick={() => setState({ ...state, sideNav: false })}
        className="text-white text-4xl mt-4 mx-8"
      >
        <i class="fas fa-times "></i>
      </div>
      <div className="px-8 border">
        <CartItem />
      </div>
    </div>
  );
}

export default Cart;
