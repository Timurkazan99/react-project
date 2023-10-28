import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type ModalComponents = 'signin' | 'signup';
const initialState = '';

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    closeModal() {
      return '';
    },
    openModal(state, action: PayloadAction<ModalComponents>) {
      return action.payload;
    },
  },
});

export default modalSlice.reducer;
export const { closeModal, openModal } = modalSlice.actions;
