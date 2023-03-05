import React from 'react';
import styles from './style.module.css';

export const InputFile: React.FC<{ setFileList: any }> = ({ setFileList }) => {
  const onChange = (event: any) => {
    const reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);
  };

  const onReaderLoad = (event: any) => {
    const obj = JSON.parse(event.target.result);
    setFileList(getData(obj));
  };

  const getData = (value: any) => {
    return value.array;
  };

  return (
    <input className={styles.inputFile} type="file" onChange={onChange} multiple />
  );
};