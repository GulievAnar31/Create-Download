import React from 'react';
import styles from './style.module.css';

export const InputFile: React.FC<{ setFileList }> = ({ setFileList }) => {
  const onChange = (event) => {
    const reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);
  };

  const onReaderLoad = (event) => {
    const obj = JSON.parse(event.target.result);
    setFileList(getData(obj));
  };

  const getData = (value) => {
    return value.array;
  };

  return (
    <input className={styles.inputFile} type="file" onChange={onChange} multiple />
  );
};