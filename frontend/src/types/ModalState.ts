// eslint-disable-next-line import/prefer-default-export
export enum ModalStateTypes {
  SIGNIN = 'signin',
  SIGNUP = 'signup',
}

export type ModalStateKeys = keyof typeof ModalStateTypes;
