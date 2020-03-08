import React from 'react';

import styles from './styles.module.scss';

import useHooks from './hooks';

interface ModalProps {
  children: React.ReactNode
  reject: () => void
  accept: () => void
}

const Modal = ({ children, reject, accept }: ModalProps) => {

  const { useCloseModal } = useHooks({ reject });

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Backdrop} onClick={useCloseModal}/>
      <div 
        className={styles.Modal}>
        <div className={styles.Header}>
          <h3 className={styles.HeaderTitle}>Chose user name to start conversation</h3>
          <span className={styles.Close} onClick={useCloseModal}>×</span>
        </div>
        <div className={styles.Body}>
          {children}
        </div>
        {/* <div className={styles.Footer}>
          <button className={styles.Cancel} onClick={useCloseModal}>CLOSE</button>
          <button className={styles.Continue} onClick={accept}>CONTINUE</button>
        </div> */}
      </div>
    </div>
  )
}

export default Modal;
