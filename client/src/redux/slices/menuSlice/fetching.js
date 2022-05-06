import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../../common/api';

export const fetchMenuItems = createAsyncThunk('menu/fetchMenuItems',
  async () => {
    try {
      const { data } = await api.get('/categories');

      return data;
    } catch (err) {
      return [];
    }
  }
);