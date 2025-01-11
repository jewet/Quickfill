import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface GasState {
  showModal: boolean;
  isSelected: number ;
  activeNav: number ;
} 
const initialState: GasState = {
  showModal: false,
  isSelected: 0,
  activeNav: 0,
};

const ordersSlice = createSlice({
  name: 'gas',
  initialState,
  reducers: {
    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload;
    },
    setIsSelected: (state, action: PayloadAction<number>) => {
      state.isSelected = action.payload;
    }, 
    setActiveNav: (state, action: PayloadAction<number>) => {
      state.activeNav = action.payload;
    }, 
  },
});

export const {
  setShowModal,
  setIsSelected,
  setActiveNav,
} = ordersSlice.actions;

export default ordersSlice.reducer;
