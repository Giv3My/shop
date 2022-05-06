import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { HeaderMenu } from '../components';

const closedState = {
  onOpen: {
    top: '50%',
    opacity: 1,
  },
  onClose: {
    top: '30px',
    opacity: 0,
  }
};

const openState = {
  onOpen: {
    top: '50%',
    opacity: 1,
  },
  onClose: {
    top: '-30px',
    opacity: 0,
  }
};

function Header({ cartItems }) {
  const { activeMenuItem } = useSelector(({ menu }) => menu);

  const [menuActive, setMenuActive] = React.useState(false);
  const [cartActive, setCartActive] = React.useState(false);

  const header = React.useRef();

  React.useEffect(() => {
    const sticky = header.current.offsetHeight + 100;

    window.onscroll = () => {
      if (window.pageYOffset > sticky) {
        header.current.classList.add('sticky');
      } else {
        header.current.classList.remove('sticky');
      }
    };
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    setCartActive(false);
  };

  const toggleCart = () => {
    setCartActive(!cartActive);
    setMenuActive(false);
  };

  return (
    <div ref={header} className="header">
      <div className="header__wrapper">
        <Link to='/' className="header__logo">
          <h1>SHOP</h1>
        </Link>
        <div className="header__buttons">
          <div className="menu__button" onClick={toggleMenu}>
            <span className="icon">
              <svg
                style={!menuActive ? closedState.onOpen : closedState.onClose}
                xmlns="http://www.w3.org/2000/svg" width="22" height="17" viewBox="0 0 22 17"
              >
                <g fill="#585858">
                  <path d="M0 0h22v3H0zM0 7h22v3H0zM0 14h22v3H0z" />
                </g>
              </svg>
              <svg
                style={menuActive ? openState.onOpen : openState.onClose}
                xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"
              >
                <path fill="#585858" d="M17 2.1L14.9 0 8.5 6.4 2.1 0 0 2.1l6.4 6.4L0 14.9 2.1 17l6.4-6.4 6.4 6.4 2.1-2.1-6.4-6.4z" />
              </svg>
            </span>
          </div>
          <div className="cart__button" onClick={toggleCart}>
            <span className="icon">
              <svg
                style={!cartActive ? closedState.onOpen : closedState.onClose}
                xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19"
              >
                <g fill="#595859">
                  <path d="M5 6L4 4l4-4 1.6 1.1L5 6zM16 6l1-2-4-4-2 1 5 5zM0 7l2 12h17l2-12H0z" />
                </g>
              </svg>
              <svg
                style={cartActive ? openState.onOpen : openState.onClose}
                xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                <path fill="#585858" d="M17 2.1L14.9 0 8.5 6.4 2.1 0 0 2.1l6.4 6.4L0 14.9 2.1 17l6.4-6.4 6.4 6.4 2.1-2.1-6.4-6.4z" />
              </svg>
            </span>
            {cartItems.length ? <span className="badge">{cartItems.length}</span> : ''}
          </div>
          <HeaderMenu
            menuActive={menuActive}
            setMenuActive={setMenuActive}
            activeMenuItem={activeMenuItem.id}
            cartActive={cartActive}
            cartItems={cartItems}
          />
        </div>
      </div>
    </div>
  )
};

export default Header;