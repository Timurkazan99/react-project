import { ReactNode } from 'react';

export type Props = {
  children: ReactNode | ReactNode[],
  onChange: (value: string) => void
  title: string
};
