import React from 'react';
import styles from './style.module.css';

export const Header: React.FC<any> = ({ children }) => {
  return (
    <header className={styles.header}>
      {children}
    </header>
  )
}