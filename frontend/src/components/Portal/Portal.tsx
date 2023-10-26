import React, { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

type Prop = {
  children: ReactNode;
  setActive: React.Dispatch<React.SetStateAction<boolean>>
};

function Portal({ children, setActive }: Prop) {
  const portalRoot = document.createElement('div');
  const element = children;
  useEffect(() => {
    function ch() {
      console.log('yyyy');
      setActive(false);
    }
    document.addEventListener('popstate', ch);
    document.body.append(portalRoot);
    return () => {
      document.body.removeChild(portalRoot);
      document.removeEventListener('popstate', ch);
    };
  }, []);
  return createPortal(element, portalRoot);
}

export default Portal;
