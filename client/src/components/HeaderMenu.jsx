import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMenuItems } from './../redux/slices/menuSlice/fetching';
import { setActiveMenuItem } from '../redux/slices/menuSlice';
import { setModalVisible } from '../redux/slices/modalSlice';
import { addToCart, removeFromCart } from '../redux/slices/cartSlice';

import { CartItem } from '../components';

function HeaderMenu({ menuActive, setMenuActive, activeMenuItem, cartActive, cartItems }) {
  const dispatch = useDispatch();
  const { menuItems } = useSelector(({ menu }) => menu);

  const totalPrice = cartItems.reduce((acc, product) => acc + product.price * product.quantity, 0);

  React.useEffect(() => {
    dispatch(fetchMenuItems());
  }, []);

  const onMenuItemClick = (id, name) => {
    dispatch(setActiveMenuItem({ id, name }));

    setMenuActive(false);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleMakeOrder = () => {
    dispatch(setModalVisible(true));
  };

  return (
    <div className={`menu ${(menuActive || cartActive) && "menu__active"}`}>
      <div className="menu__body">
        {menuActive && (
          <div className="menu__wrapper">
            <ul className="menu__list">
              <div className="categories">
                <li
                  className={`menu__list__item ${activeMenuItem === null ? 'active' : ''}`}
                  onClick={() => onMenuItemClick(null, 'All goods')}
                >
                  All goods
                </li>
                {menuItems.map(({ id, name }) => {
                  return (
                    <li
                      key={id}
                      className={`menu__list__item ${activeMenuItem === id ? 'active' : ''}`}
                      onClick={() => onMenuItemClick(id, name)}
                    >
                      {name}
                    </li>
                  )
                })}
              </div>
              <Link
                to='/orders'
                className="menu__list__item order__menu__item"
                onClick={() => setMenuActive(false)}
              >
                <li>Orders</li>
              </Link>
            </ul>
          </div>
        )}
        {cartActive && (
          <div className="cart__wrapper">
            <div className="cart__items">
              {cartItems.length ? cartItems.map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    item={item}
                    addToCart={handleAddToCart}
                    removeFromCart={handleRemoveFromCart}
                  />
                )
              }) : (
                <p className="cart__empty">Cart is empty</p>
              )}
            </div>
            {cartItems.length ? (
              <>
                <p className="total__price">Total price: {totalPrice}₴</p>
                <button className="checkout__button" onClick={handleMakeOrder}>Checkout</button>
              </>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </div>
  )
};

export default HeaderMenu;