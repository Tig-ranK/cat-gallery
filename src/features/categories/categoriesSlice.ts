import { createSlice } from '@reduxjs/toolkit';

interface Category {
  id: number;
  name: string;
}
const initialState: Category[] = [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export default categoriesSlice.reducer


