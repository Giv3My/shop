import { createSlice } from '@reduxjs/toolkit';

import { fetchOrder } from './fetching';

const initialState = {
  currentOrder: null
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOrder.fulfilled]: (state, { payload }) => {
      state.currentOrder = payload;
    },
    [fetchOrder.rejected]: (state, { payload }) => {
      state.currentOrder = payload;
    }
  }
});

export default ordersSlice.reducer;