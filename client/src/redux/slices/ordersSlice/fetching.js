import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../../common/api';

export const fetchOrder = createAsyncThunk('order/fetchOrder',
  async (orderId, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`orders/${orderId}`);

      return data;
    } catch (err) {
      return rejectWithValue(null);
    }
  }
);