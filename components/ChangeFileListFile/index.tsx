import React from 'react';
import styles from './style.module.css';

export const ChangeFileListFile: React.FC<{ setFileList: any }> = ({ setFileList }) => {
  const nameRef = React.useRef<HTMLInputElement | null>(null);
  const valueRef = React.useRef<HTMLInputElement | null>(null);

  const onSubmit = (e: any) => {
    e.preventDefault();
    setFileList((prev: any) => [...prev, { name: nameRef.current?.value, value: valueRef.current?.value }]);
  };

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.form__label}>
          <span className={styles.form__title}>Name</span>
          <input className={styles.form__input} type="text" ref={nameRef} />
        </label>
        <label className={styles.form__label}>
          <span className={styles.form__title}>Value</span>
          <input className={styles.form__input} type="text" ref={valueRef} />
        </label>
        <button className={styles.form__button} onSubmit={onSubmit}>
          Добавить
        </button>
      </form>
    </>
  )
};