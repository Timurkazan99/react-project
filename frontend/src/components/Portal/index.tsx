import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

type Prop = {
  children: ReactNode
};

function Portal({ children }: Prop) {
  const portalRoot = useRef(document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(portalRoot.current);
    return () => {
      document.body.removeChild(portalRoot.current);
    };
  }, []);

  return createPortal(children, portalRoot.current);
}

export default Portal;
