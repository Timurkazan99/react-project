import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type ModalNames = 'signin' | 'signup';
const initialState: string = '';

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    closeModal() {
      return '';
    },
    openModal(state, action: PayloadAction<ModalNames>) {
      return action.payload;
    },
  },
});

export default modalSlice.reducer;
export const { closeModal, openModal } = modalSlice.actions;
