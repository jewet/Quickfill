import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface GasState {
  showModal: boolean;
  showOrderDetails: boolean;
  marginTop: number;
  prevScrollY: string;
  isSelected: number ;
} 
const initialState: GasState = {
  showModal: false,
  showOrderDetails: false,
  marginTop: 500,
  prevScrollY: '', 
  isSelected: 0,
};

const gasSlice = createSlice({
  name: 'gas',
  initialState,
  reducers: {
    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload;
    },
    setShowOrderDetails: (state, action: PayloadAction<boolean>) => {
      state.showOrderDetails = action.payload;
    }, 
    setMarginTop: (state, action: PayloadAction<number>) => {
      state.marginTop = action.payload;
    },
    setPrevScrollY: (state, action: PayloadAction<string>) => {
      state.prevScrollY = action.payload;
    }, 
    setIsSelected: (state, action: PayloadAction<number>) => {
      state.isSelected = action.payload;
    }, 
  },
});

export const {
  setShowModal,
  setShowOrderDetails,
  setMarginTop,
  setPrevScrollY,
  setIsSelected,
} = gasSlice.actions;

export default gasSlice.reducer;
