import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface GasState {
  showModal: boolean;
  showBalance: boolean;
}
const initialState: GasState = {
  showModal: false,
  showBalance: true,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload;
    },
    setShowBalance: (state, action: PayloadAction<boolean>) => {
      state.showBalance = action.payload;
    },
  },
});

export const {setShowModal, setShowBalance} = homeSlice.actions;

export default homeSlice.reducer;
