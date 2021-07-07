import React from 'react';
import { Link } from 'react-router-dom';
function CartItem() {
  return (
    <div className="mt-8">
      <Link className="flex justify-between items-center cart">
        <div className="font-0 flex-30">
          <img src="https://images.pexels.com/photos/5483375/pexels-photo-5483375.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
        <div className="flex-70 flex justify-between items-center px-4">
          <div className="text-white">
            <h4 className="font-bold text-white ">shoose black</h4>
            <h4>$40</h4>
          </div>
          <div className="text-white">
            <i class="fas fa-times"></i>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CartItem;
