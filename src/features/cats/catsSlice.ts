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
    initialCats(state,action) {
      state=action.payload
    },
    addCats(state, action) {
      state.push(action.payload);
    },
  },
});

export default catsSlice.reducer;

export const { addCats } = catsSlice.actions;
