import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {countries} from '../../sample-data/input';

interface ProfileState {
  showModal: boolean;
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  otp: string[];
  countdown: number;
  isResendEnabled: boolean;
  showPassword: boolean;
  error: string | null;
  selectedCountry: (typeof countries)[number];
  showDropdown: boolean;
  searchQuery: string;
}

const initialState: ProfileState = {
  showModal: false,
  fullName: '',
  email: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
  otp: ['', '', '', ''],
  countdown: 60,
  isResendEnabled: false,
  showPassword: false,
  error: null,
  selectedCountry: countries.find(c => c.country === 'Nigeria') || countries[0],
  showDropdown: false,
  searchQuery: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload;
    },
    setFullName: (state, action: PayloadAction<string>) => {
      state.fullName = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action: PayloadAction<string>) => {
      state.confirmPassword = action.payload;
    },
    setOtp: (state, action: PayloadAction<string[]>) => {
      state.otp = action.payload;
    },
    setCountdown: (state, action: PayloadAction<number>) => {
      state.countdown = action.payload;
    },
    setIsResendEnabled: (state, action: PayloadAction<boolean>) => {
      state.isResendEnabled = action.payload;
    },
    toggleShowPassword: state => {
      state.showPassword = !state.showPassword;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setSelectedCountry: (
      state,
      action: PayloadAction<(typeof countries)[number]>,
    ) => {
      state.selectedCountry = action.payload;
    },
    setShowDropdown: (state, action: PayloadAction<boolean>) => {
      state.showDropdown = action.payload;
    },
    setShowPassword: (state, action: PayloadAction<boolean>) => {
      state.showPassword = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  setShowModal,
  setFullName,
  setEmail,
  setPhoneNumber,
  setPassword,
  setConfirmPassword,
  setOtp,
  setCountdown,
  setIsResendEnabled,
  toggleShowPassword,
  setError,
  setSelectedCountry,
  setShowDropdown,
  setSearchQuery,
  setShowPassword,
} = authSlice.actions;

export default authSlice.reducer;
