import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  electricity_data,
  meter_data,
  ElectricityProps,
  ElectricityTransactionProps,
  electricity_transaction_history,
} from '../../sample-data/electricity';

interface ElectricityState {
  showElectricityProviderModal: boolean;
  showAlert: boolean;
  amount: string;
  meterNumber: string;
  meterName: string;
  searchQuery: string;
  lastUsedProvider: string;
  lastUsedMeterNo: string;
  lastUsedMeterName: string;
  lastUsedAddress: string;
  filteredData: ElectricityProps[];
  filteredElectricityHistoryData: ElectricityTransactionProps[];
  selectedProvider: ElectricityProps | null;
  isSelected: number | null;
}

const initialState: ElectricityState = {
  showElectricityProviderModal: false,
  showAlert: false,
  amount: '',
  meterNumber: '',
  meterName: '',
  searchQuery: '',
  lastUsedProvider: '',
  lastUsedMeterNo: '',
  lastUsedMeterName: '',
  lastUsedAddress: '',
  filteredData: electricity_data,
  filteredElectricityHistoryData: electricity_transaction_history,
  selectedProvider: null,
  isSelected: null,
};

const electricitySlice = createSlice({
  name: 'electricity',
  initialState,
  reducers: {
    setAmount: (state, action: PayloadAction<string>) => {
      state.amount = action.payload;
    },
    setShowAlert: (state, action: PayloadAction<boolean>) => {
      state.showAlert = action.payload;
    },
    setMeterNumber: (state, action: PayloadAction<string>) => {
      state.meterNumber = action.payload;
      if (action.payload.length === 10) {
        const randomIndex = Math.floor(Math.random() * meter_data.length);
        state.meterName = meter_data[randomIndex].name;
      } else {
        state.meterName = '';
      }
    },
    setMeterName: (state, action: PayloadAction<string>) => {
      state.meterName = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setLastUsedProvider: (state, action: PayloadAction<string>) => {
      state.lastUsedProvider = action.payload;
    },
    setLastUsedMeterNo: (state, action: PayloadAction<string>) => {
      state.lastUsedMeterNo = action.payload;
    },
    setLastUsedMeterName: (state, action: PayloadAction<string>) => {
      state.lastUsedMeterName = action.payload;
    },
    setLastUsedAddress: (state, action: PayloadAction<string>) => {
      state.lastUsedAddress = action.payload;
    },
    setSelectedProvider: (
      state,
      action: PayloadAction<ElectricityProps | null>,
    ) => {
      state.selectedProvider = action.payload;
    },
    setIsSelected: (state, action: PayloadAction<number | null>) => {
      state.isSelected = action.payload;
    },
    toggleElectricityProviderModal: (state, action: PayloadAction<boolean>) => {
      state.showElectricityProviderModal = action.payload;
    },
    filterElectricityData: (state, action: PayloadAction<string>) => {
      state.filteredData =
        action.payload.trim() === ''
          ? electricity_data
          : electricity_data.filter(item =>
              item.electricity
                .toLowerCase()
                .includes(action.payload.toLowerCase()),
            );
    },
    filterElectricityHistoryData: (state, action: PayloadAction<string>) => {
      state.filteredElectricityHistoryData =
        action.payload.trim() === ''
          ? electricity_transaction_history
          : electricity_transaction_history.filter(item =>
              Object.values(item).some(value =>
                String(value)
                  .toLowerCase()
                  .includes(action.payload.toLowerCase()),
              ),
            );
    },
  },
});

export const {
  setAmount,
  setMeterNumber,
  setMeterName,
  setSearchQuery,
  setSelectedProvider,
  setIsSelected,
  toggleElectricityProviderModal,
  filterElectricityData,
  filterElectricityHistoryData,
  setLastUsedProvider,
  setShowAlert,
  setLastUsedAddress,
  setLastUsedMeterName,
  setLastUsedMeterNo,
} = electricitySlice.actions;

export default electricitySlice.reducer;
