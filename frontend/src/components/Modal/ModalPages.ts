import { ElementType } from 'react';
import { ModalStateKeys } from '../../types';
import SignInForm from '../SignInForm';
import SignUpForm from '../SignUpForm';

type ModalPages = {
  [key in ModalStateKeys]: ElementType | null
};

const modalPages: ModalPages = {
  SIGNIN: SignInForm,
  SIGNUP: SignUpForm,
  CLOSE: null,
};

export default modalPages;
