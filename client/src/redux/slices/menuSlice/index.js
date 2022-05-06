import { createSlice } from '@reduxjs/toolkit';
import { fetchMenuItems } from './fetching';

const initialState = {
  menuItems: [],
  activeMenuItem: {
    id: null,
    name: 'All goods'
  }
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setActiveMenuItem: (state, { payload }) => {
      state.activeMenuItem.id = payload.id;
      state.activeMenuItem.name = payload.name;
    }
  },
  extraReducers: {
    [fetchMenuItems.fulfilled]: (state, { payload }) => {
      state.menuItems = payload;
    }
  }
});

export const { setActiveMenuItem } = menuSlice.actions;

export default menuSlice.reducer;