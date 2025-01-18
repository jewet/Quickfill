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
  amount: string;
  meterNumber: string;
  meterName: string;
  searchQuery: string;
  lastUsedMeterNumber: string;
  filteredData: ElectricityProps[];
  filteredElectricityHistoryData: ElectricityTransactionProps[];
  selectedProvider: ElectricityProps | null;
  isSelected: number | null;
}

const initialState: ElectricityState = {
  showElectricityProviderModal: false,
  amount: '',
  meterNumber: '',
  meterName: '',
  searchQuery: '',
  lastUsedMeterNumber: '',
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
    setLastUsedMeterNumber: (state, action: PayloadAction<string>) => {
      state.lastUsedMeterNumber = action.payload;
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
  setLastUsedMeterNumber,
} = electricitySlice.actions;

export default electricitySlice.reducer;
