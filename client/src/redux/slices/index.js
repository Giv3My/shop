import { combineReducers } from 'redux';

import cartSlice from './cartSlice';
import menuSlice from './menuSlice';
import goodsSlice from './goodsSlice';
import modalSlice from './modalSlice';
import ordersSlice from './ordersSlice';

const reducers = combineReducers({
  cart: cartSlice,
  menu: menuSlice,
  goods: goodsSlice,
  order: ordersSlice,
  modal: modalSlice,
});

export default reducers;