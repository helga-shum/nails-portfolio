import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios.js';

export const fetchClient = createAsyncThunk('client/fetchClient', async (params) => {
  const { data } = await axios.post('/', params);
  return data;
});
const initialState = {
  data: null,
  status: 'loading',
};
const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchClient.pending, (state) => {
        state.data = null;
        state.status = 'loading';
      })
      .addCase(fetchClient.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'loaded';
      })
      .addCase(fetchClient.rejected, (state) => {
        state.data = null;
        state.status = 'error';
      });
  },
});

export const clientReducer = clientSlice.reducer;
