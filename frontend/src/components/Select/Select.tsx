import React, {
  memo,
  MouseEvent, useCallback, useRef, useState,
} from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { Props } from './type';

function Select(props: Props) {
  const { children, title, onChange } = props;

  const [show, setShow] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const clickOutsideHandler = useCallback(() => {
    setShow(false);
  }, [setShow]);
  useOnClickOutside(containerRef, clickOutsideHandler);

  const clickHandler = (e: MouseEvent<HTMLElement>) => {
    const { target } = e;
    if (target instanceof HTMLLIElement) {
      onChange(String(target.dataset.value));
      setShow(false);
    }
  };

  /* eslint-disable
    jsx-a11y/click-events-have-key-events,
    jsx-a11y/no-noninteractive-element-interactions
    */
  return (
    <div className="select__container" ref={containerRef}>
      <button
        className="select__button"
        type="button"
        onClick={() => setShow(!show)}
      >
        {title}
      </button>
      {
        show && (
          <ul
            className="select__options"
            onClick={clickHandler}
          >
            {children}
          </ul>
        )
      }
    </div>
  );
  /* eslint-enable
jsx-a11y/click-events-have-key-events,
jsx-a11y/no-noninteractive-element-interactions
*/
}

export default memo(Select);
