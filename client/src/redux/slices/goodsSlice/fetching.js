import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../../common/api';

export const fetchGoods = createAsyncThunk('good/fetchGoods',
  async (categoryId) => {
    if (categoryId === null) {
      const { data } = await api.get('/goods');

      return data;
    } else {
      const { data } = await api.get(`/goods?categoryId=${categoryId}`);

      return data;
    }
  }
);