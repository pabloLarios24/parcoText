import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductInterface, UserInterface } from '../types';

const initialState: UserInterface = {};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUserInitialState(state) {
      state = { ...initialState };
    },
    addProductSlice(state, action: PayloadAction<ProductInterface[]>){
      state.products = action.payload;
    },
    removeProductSlice(state, action: PayloadAction<ProductInterface>){
      state.products = state.products.filter((product) => action.payload.name !== product.name);
    },
    editTotalNutriotion(state, action: PayloadAction<any>){
      state.cal = action.payload.cal;
      state.car = action.payload.car;
      state.pro = action.payload.pro;
    },
  },
  extraReducers: builder => {
  }
});

export const {
    setUserInitialState,
    addProductSlice,
    removeProductSlice,
    editTotalNutriotion
} = userSlice.actions;
export default userSlice.reducer;
