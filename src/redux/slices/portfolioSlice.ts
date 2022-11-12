import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios.js';
export type Item = {
  _id: string;
  imageUrl: string;
  price: number;
  text: string;
};
export const fetchPortfolio = createAsyncThunk('portfolio/fetchPortfolio', async () => {
  const { data } = await axios.get<Item[]>('/');
  return data;
});
type portfolioSliceType = {
  items: Item[];
  status: string;
};
const initialState: portfolioSliceType = {
  items: [],
  status: 'loading',
};
const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchPortfolio.pending, (state) => {
        state.items = [];
        state.status = 'loading';
      })
      .addCase(fetchPortfolio.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'loaded';
      })
      .addCase(fetchPortfolio.rejected, (state) => {
        state.items = [];
        state.status = 'error';
      });
  },
});

export const portfolioReducer = portfolioSlice.reducer;
