import React from 'react';

function OrderItem({ orderItem }) {
  return (
    <div key={orderItem.id} className="order__item">
      <div className="order__item__img">
        <img src={orderItem.img} alt="orderItemImg" />
      </div>
      <p className="order__item__title">{orderItem.title}</p>
      <p className="order__item__price">{orderItem.quantity} x {orderItem.price}₴</p>
    </div>
  )
};

export default OrderItem;