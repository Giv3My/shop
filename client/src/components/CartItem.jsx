import React from 'react';

function CartItem({ item, addToCart, removeFromCart }) {
  const onAddToCart = () => {
    addToCart(item);
  };

  const onRemoveFromCart = () => {
    removeFromCart(item);
  };

  return (
    <div key={item.id} className="cart__item">
      <p className="cart__item__title">{item.title}</p>
      <div className="left__side">
        <div className="cart__buttons">
          <button className="cart__button__dec" onClick={onRemoveFromCart}>
            <span>-</span>
          </button>
          <p className="cart__item__count">{item.quantity}</p>
          <button className="cart__button__inc" onClick={onAddToCart}>
            <span>+</span>
          </button>
        </div>
        <p className="cart__item__price">{item.quantity * item.price}₴</p>
      </div>
    </div>
  )
};

export default CartItem;