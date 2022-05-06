import React from 'react';

function GoodItem({ item, addToCart }) {
  const onAddtoCart = () => {
    addToCart(item);
  };

  return (
    <div key={item.id} className="good__item">
      <img src={item.img} alt="itemImg" />
      <h3 className="item__title">{item.title}</h3>
      <ul className='item__desc'>

        {item.desc.split(';').map((descItem, index) => {
          return (
            <li key={index}>{descItem}</li>
          )
        })}
      </ul>
      <div className="bottom__block">
        <button
          className="add-to-cart__button"
          onClick={onAddtoCart}
        >
          Add to cart
        </button>
        <h4 className="item__price">{item.price}₴</h4>
      </div>
    </div>
  )
};

export default GoodItem;