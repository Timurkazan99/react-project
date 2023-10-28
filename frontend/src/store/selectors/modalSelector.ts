import { RootState } from '../store';

enum ModalName {
  CLOSE = '',
  SIGNIN = 'signin',
  SIGNUP = 'signup',
}
type ModalComponents = ModalName.CLOSE | ModalName.SIGNIN | ModalName.SIGNUP;
const getModalState = (state: RootState) => state.modal as ModalComponents;

export default getModalState;
