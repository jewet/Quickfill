import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {chat_data} from '../../sample-data/chat';

interface OrdersState {
  showModal: boolean;
  isSelected: number;
  activeNav: number;
  messages: typeof chat_data;
  currentMessage: string;
  showMoreInfo: boolean;
  selectedReason: string | null;
  customReason: string;
  uploadedImage: string | null;
}

const initialState: OrdersState = {
  showModal: false,
  isSelected: 0,
  activeNav: 0,
  messages: chat_data,
  currentMessage: '',
  showMoreInfo: false,
  selectedReason: null,
  customReason: '',
  uploadedImage: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload;
    },
    setIsSelected: (state, action: PayloadAction<number>) => {
      state.isSelected = action.payload;
    },
    setActiveNav: (state, action: PayloadAction<number>) => {
      state.activeNav = action.payload;
    },
    setMessages: (state, action: PayloadAction<typeof chat_data>) => {
      state.messages = action.payload;
    },
    setCurrentMessage: (state, action: PayloadAction<string>) => {
      state.currentMessage = action.payload;
    },
    setShowMoreInfo: (state, action: PayloadAction<boolean>) => {
      state.showMoreInfo = action.payload;
    },
    sendMessage: state => {
      if (state.currentMessage.trim()) {
        const newMessage = {
          id: (state.messages.length + 1).toString(),
          sender: 'sender',
          message: state.currentMessage,
          timestamp: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
        };
        state.messages.push(newMessage);
        state.currentMessage = ''; 
      }
    },
    setSelectedReason: (state, action: PayloadAction<string | null>) => {
      state.selectedReason = action.payload;
    },
    setCustomReason: (state, action: PayloadAction<string>) => {
      state.customReason = action.payload;
    },
    setUploadedImage: (state, action: PayloadAction<string | null>) => {
      state.uploadedImage = action.payload;
    },
  },
});

export const {
  setShowModal,
  setIsSelected,
  setActiveNav,
  setMessages,
  setCurrentMessage,
  setShowMoreInfo,
  sendMessage,
  setSelectedReason,
  setCustomReason,
  setUploadedImage
} = ordersSlice.actions;

export default ordersSlice.reducer;
