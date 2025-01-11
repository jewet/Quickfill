import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  accessories_data,
  AccessoriesProps,
  cart_data,
} from '../../sample-data/accessories';

interface GasState {
  showModal: boolean;
  showOrderDetails: boolean;
  isFavourite: boolean;
  isSelected: number;
  itemCounts: number[];
  searchQuery: string;
  filteredData: AccessoriesProps[];
}
const initialState: GasState = {
  showModal: false,
  isFavourite: false,
  showOrderDetails: false,
  isSelected: 0,
  searchQuery: '',
  filteredData: accessories_data,
  itemCounts: cart_data.map(() => 1) as number[],
};

const accessoriesSlice = createSlice({
  name: 'gas',
  initialState,
  reducers: {
    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload;
    },
    setShowOrderDetails: (state, action: PayloadAction<boolean>) => {
      state.showOrderDetails = action.payload;
    },
    setItemCounts: (state, action: PayloadAction<number[]>) => {
      state.itemCounts = action.payload;
    },
    setIsSelected: (state, action: PayloadAction<number>) => {
      state.isSelected = action.payload;
    },
    setIsfavourite: (state, action: PayloadAction<boolean>) => {
      state.isFavourite = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    filterAccessoriesData: (state, action: PayloadAction<string>) => {
      state.filteredData =
        action.payload.trim() === ''
          ? accessories_data
          : accessories_data.filter(item =>
              item.item.title
                .toLowerCase()
                .includes(action.payload.toLowerCase()),
            );
    },
  },
});

export const {
  setShowModal,
  setShowOrderDetails,
  setIsSelected,
  setIsfavourite,
  setItemCounts,
  setSearchQuery,
  filterAccessoriesData,
} = accessoriesSlice.actions;

export default accessoriesSlice.reducer;
