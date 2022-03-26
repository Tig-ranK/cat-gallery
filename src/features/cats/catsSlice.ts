import { createSlice } from '@reduxjs/toolkit';

interface Cat {
  id: number;
  name: string;
}
const initialState: Cat[] = [];

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
  },
});

export default catsSlice.reducer;

