import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface GasState {
  showModal: boolean;
  showAlert: boolean;
  showOrderDetails: boolean;
  marginTop: number;
  prevScrollY: string;
  deliveryNote: string;
  litres: number;
  isSelected: number;
  selectedIndex: number;
}
const initialState: GasState = {
  showModal: false,
  showAlert: false,
  showOrderDetails: false,
  marginTop: 500,
  prevScrollY: '',
  deliveryNote: '',
  litres: 0,
  isSelected: 0,
  selectedIndex: 0,
};

const gasSlice = createSlice({
  name: 'gas',
  initialState,
  reducers: {
    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload;
    },
    setShowAlert: (state, action: PayloadAction<boolean>) => {
      state.showAlert = action.payload;
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
    setDeliveryNote: (state, action: PayloadAction<string>) => {
      state.deliveryNote = action.payload;
    },
    setLitres: (state, action: PayloadAction<number>) => {
      state.litres = action.payload;
    },
    setIsSelected: (state, action: PayloadAction<number>) => {
      state.isSelected = action.payload;
    },
    setSelectedIndex: (state, action: PayloadAction<number>) => {
      state.selectedIndex = action.payload;
    },
  },
});

export const {
  setShowModal,
  setShowOrderDetails,
  setMarginTop,
  setPrevScrollY,
  setIsSelected,
  setLitres,
  setSelectedIndex,
  setDeliveryNote,
  setShowAlert,
} = gasSlice.actions;

export default gasSlice.reducer;
