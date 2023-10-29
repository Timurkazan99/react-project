import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ModalStateKeys } from '../../types';

const initialState: ModalStateKeys = 'CLOSE';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState as ModalStateKeys,
  reducers: {
    closeModal() {
      return 'CLOSE' as ModalStateKeys;
    },
    openModal(state, action: PayloadAction<Exclude<ModalStateKeys, 'CLOSE'>>) {
      return action.payload as ModalStateKeys;
    },
  },
});

export default modalSlice.reducer;
export const { closeModal, openModal } = modalSlice.actions;
