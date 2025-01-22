import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {countries} from '../../sample-data/input';

interface AuthState {
  showModal: boolean;
  firstName: string;
  lastName: string;
  email: string;
  signUpEmail: string;
  forgotPasswordEmail: string;
  phoneNumber: string;
  password: string;
  signUpPassword: string;
  resetPassword: string;
  signUpConfirmPassword: string;
  resetConfirmPassword: string;
  otp: string[];
  countdown: number;
  isResendEnabled: boolean;
  showPassword: boolean;
  error: string | null;
  selectedCountry: (typeof countries)[number];
  showDropdown: boolean;
  searchQuery: string;
  errors: { [key: string]: string | null };}

const initialState: AuthState = {
  showModal: false,
  firstName: '',
  lastName: '',
  email: '',
  signUpEmail: '',
  forgotPasswordEmail: '',
  phoneNumber: '',
  password: '',
  signUpPassword: '',
  resetPassword: '',
  signUpConfirmPassword: '',
  resetConfirmPassword: '',
  otp: ['', '', '', ''],
  countdown: 60,
  isResendEnabled: false,
  showPassword: false,
  error: null,
  selectedCountry: countries.find(c => c.country === 'Nigeria') || countries[0],
  showDropdown: false,
  searchQuery: '',
  errors: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload;
    },
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setSignUpEmail: (state, action: PayloadAction<string>) => {
      state.signUpEmail = action.payload;
    },
    setForgotPasswordEmail: (state, action: PayloadAction<string>) => {
      state.forgotPasswordEmail = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setSignUpPassword: (state, action: PayloadAction<string>) => {
      state.signUpPassword = action.payload;
    },
    setResetPassword: (state, action: PayloadAction<string>) => {
      state.resetPassword = action.payload;
    },
    setSignUpConfirmPassword: (state, action: PayloadAction<string>) => {
      state.signUpConfirmPassword = action.payload;
    },
    setResetConfirmPassword: (state, action: PayloadAction<string>) => {
      state.resetConfirmPassword = action.payload;
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
    // setError: (state, action: PayloadAction<{ field: string; error: string | null }>) => {
    //   state.errors[action.payload.field] = action.payload.error;
    // },
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
  setFirstName,
  setLastName,
  setEmail,
  setPhoneNumber,
  setPassword,
  setResetConfirmPassword,
  setOtp,
  setCountdown,
  setIsResendEnabled,
  toggleShowPassword,
  setError,
  setSelectedCountry,
  setShowDropdown,
  setSearchQuery,
  setShowPassword,
  setForgotPasswordEmail,
  setResetPassword,
  setSignUpConfirmPassword,
  setSignUpEmail,
  setSignUpPassword
} = authSlice.actions;

export default authSlice.reducer;
