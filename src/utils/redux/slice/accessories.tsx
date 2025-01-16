import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  accessories_data,
  AccessoriesProps,
  cart_data,
  items_data,
  ItemsProps,
} from '../../sample-data/accessories';

interface GasState {
  showModal: boolean;
  showOrderDetails: boolean;
  isFavourite: boolean;
  openSearch: boolean;
  isSelected: number;
  itemCounts: number[];
  searchQuery: string;
  selectedFilter: string;
  filteredData: AccessoriesProps[];
  filteredItemData: ItemsProps[];
}
const initialState: GasState = {
  showModal: false,
  isFavourite: false,
  showOrderDetails: false,
  openSearch: false,
  isSelected: 0,
  searchQuery: '',
  selectedFilter: '',
  filteredData: accessories_data,
  filteredItemData: items_data,
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
    setOpenSearch: (state, action: PayloadAction<boolean>) => {
      state.openSearch = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSelectedFilter: (state, action: PayloadAction<string>) => {
      state.selectedFilter = action.payload;
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
    filterItemData: (state, action: PayloadAction<string>) => {
      state.filteredItemData =
        action.payload.trim() === ''
          ? items_data
          : items_data.filter(item =>
              item.item.name
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
  setOpenSearch,
  filterItemData,
  setSelectedFilter
} = accessoriesSlice.actions;

export default accessoriesSlice.reducer;
