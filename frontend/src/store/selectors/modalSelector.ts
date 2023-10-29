import { RootState } from '../store';

type ModalComponents = '' | 'signin' | 'signup';
const getModal = (state: RootState) => state.modal as ModalComponents;

export default getModal;
