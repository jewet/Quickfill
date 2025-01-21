import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ProfileState {
  selectedType: string;
  showAddressDropDown: boolean;
  address: string;
  apartmentNumber: string;
  postalCode: string;
  landmark: string;
  showModal: boolean;
  showAlert: boolean;
  showBalance: boolean;
  showreferText: boolean;
  showMonthPicker: boolean;
  showDayPicker: boolean;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  phoneNumber: string;
  selectedMonth: string | null;
  selectedDay: string | null;
  countdown: number;
  isResendEnabled: boolean;
  activeNav: number;
  isSelected: number;
  amount: string;
  cardName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  deliveryNote: string;
}

const initialState: ProfileState = {
  selectedType: 'Home',
  showAddressDropDown: false,
  address: '',
  apartmentNumber: '',
  postalCode: '',
  landmark: '',
  showModal: false,
  showAlert: false,
  showBalance: true,
  showreferText: true,
  showMonthPicker: false,
  showDayPicker: false,
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  phoneNumber: '',
  selectedMonth: null,
  selectedDay: null,
  countdown: 60,
  isResendEnabled: false,
  activeNav: 0,
  isSelected: 0,
  amount: '',
  cardName: '',
  cardNumber: '',
  expiryDate: '',
  cvv: '',
  deliveryNote: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setSelectedType: (state, action: PayloadAction<string>) => {
      state.selectedType = action.payload;
    },
    setShowAddressDropDown: (state, action: PayloadAction<boolean>) => {
      state.showAddressDropDown = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setApartmentNumber: (state, action: PayloadAction<string>) => {
      state.apartmentNumber = action.payload;
    },
    setPostalCode: (state, action: PayloadAction<string>) => {
      state.postalCode = action.payload;
    },
    setLandmark: (state, action: PayloadAction<string>) => {
      state.landmark = action.payload;
    },
    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload;
    },
    setShowAlert: (state, action: PayloadAction<boolean>) => {
      state.showAlert = action.payload;
    },
    setShowBalance: (state, action: PayloadAction<boolean>) => {
      state.showBalance = action.payload;
    },
    setShowreferText: (state, action: PayloadAction<boolean>) => {
      state.showreferText = action.payload;
    },
    setShowMonthPicker: (state, action: PayloadAction<boolean>) => {
      state.showMonthPicker = action.payload;
    },
    setShowDayPicker: (state, action: PayloadAction<boolean>) => {
      state.showDayPicker = action.payload;
    },
    setFirstname: (state, action: PayloadAction<string>) => {
      state.firstname = action.payload;
    },
    setLastname: (state, action: PayloadAction<string>) => {
      state.lastname = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setSelectedMonth: (state, action: PayloadAction<string | null>) => {
      state.selectedMonth = action.payload;
      state.selectedDay = null;
    },
    setSelectedDay: (state, action: PayloadAction<string | null>) => {
      state.selectedDay = action.payload;
    },
    setCountdown: (state, action: PayloadAction<number>) => {
      state.countdown = action.payload;
    },
    setIsResendEnabled: (state, action: PayloadAction<boolean>) => {
      state.isResendEnabled = action.payload;
    },
    setActiveNav: (state, action: PayloadAction<number>) => {
      state.activeNav = action.payload;
    },
    setIsSelected: (state, action: PayloadAction<number>) => {
      state.isSelected = action.payload;
    },
    setAmount: (state, action: PayloadAction<string>) => {
      state.amount = action.payload;
    },
    setCardName: (state, action: PayloadAction<string>) => {
      state.cardName = action.payload;
    },
    setCardNumber: (state, action: PayloadAction<string>) => {
      state.cardNumber = action.payload;
    },
    setExpiryDate: (state, action: PayloadAction<string>) => {
      state.expiryDate = action.payload;
    },
    setCvv: (state, action: PayloadAction<string>) => {
      state.cvv = action.payload;
    },
    setDeliveryNote: (state, action: PayloadAction<string>) => {
      state.deliveryNote = action.payload;
    },
  },
});

export const {
  setSelectedType,
  setShowAddressDropDown,
  setAddress,
  setApartmentNumber,
  setPostalCode,
  setLandmark,
  setShowModal,
  setFirstname,
  setLastname,
  setUsername,
  setEmail,
  setPhoneNumber,
  setSelectedMonth,
  setSelectedDay,
  setCountdown,
  setIsResendEnabled,
  setShowMonthPicker,
  setShowDayPicker,
  setActiveNav,
  setShowBalance,
  setShowreferText,
  setIsSelected,
  setAmount,
  setCardName,
  setCardNumber,
  setExpiryDate,
  setCvv,
  setShowAlert,
  setDeliveryNote,
} = profileSlice.actions;

export default profileSlice.reducer;
