import { createSlice } from '@reduxjs/toolkit';

const getCartFromLocalStorage = () => {
  const localCart = localStorage.getItem('cart');

  if (localCart) {
    return JSON.parse(localCart);
  } else {
    localStorage.setItem('cart', JSON.stringify([]));

    return [];
  }
};

const initialState = {
  cartItems: getCartFromLocalStorage()
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const exist = state.cartItems.find((item) => item.id === payload.id);

      if (exist) {
        state.cartItems = state.cartItems.map((item) => item.id === payload.id ? { ...exist, quantity: exist.quantity + 1 } : item);
      } else {
        state.cartItems = [...state.cartItems, { ...payload, quantity: 1 }]
      }

      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, { payload }) => {
      if (payload.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== payload.id);
      } else {
        state.cartItems = state.cartItems.map((item) => item.id === payload.id ? { ...payload, quantity: payload.quantity - 1 } : item);
      }

      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];

      localStorage.setItem('cart', JSON.stringify([]));
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;