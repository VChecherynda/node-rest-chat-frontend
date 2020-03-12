import React, { 
  useState,
  useEffect,
  useContext,
  useRef
  } from 'react';
import ReactDOM from "react-dom";

import styles from './styles.module.scss';

export const Context = React.createContext<any>(null);

interface IProps {
  children?: React.ReactNode;
}

export function ModalProvider({ children }: IProps) {
  const modalRef = useRef<HTMLDivElement | any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [context, setContext] = useState();

  const handleOpen = () => { console.log('handleModalOpen'); setIsModalOpen(true) };

  const handleClose = () => { console.log('handleModalClose'); setIsModalOpen(false) };

  useEffect(() => {
    setContext(modalRef.current);
  }, []);

  return (
    <div ref={modalRef} style={{ width: '100%', height: '100%' }}>
      <Context.Provider value={{ 
        isModalOpen: isModalOpen,
        modalNode: context, 
        handleOpen: handleOpen,
        handleClose: handleClose,
      }}>
        {children}
      </Context.Provider>
    </div>
  );
}

export function Modal({ children, ...props }: IProps) {
  const { isModalOpen, modalNode } = useContext(Context);

  return isModalOpen && modalNode
    ? ReactDOM.createPortal(
      <div className={styles.Overlay}>
        <div className={styles.Dialog} {...props}>
          {children}
        </div>
      </div>,
      modalNode
    )
    : null;
}

export default Modal;
