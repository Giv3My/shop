import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalVisible: false
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalVisible: (state, { payload }) => {
      state.modalVisible = payload
    }
  },
});

export const { setModalVisible } = modalSlice.actions;

export default modalSlice.reducer;