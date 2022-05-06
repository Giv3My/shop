import { createSlice } from '@reduxjs/toolkit';

import { fetchGoods } from './fetching';

const initialState = {
  goods: []
};

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGoods.fulfilled]: (state, { payload }) => {
      state.goods = payload;
    }
  }
});

export default goodsSlice.reducer;