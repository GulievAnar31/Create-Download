import React from 'react';
import styles from './style.module.css';

export const FileList: React.FC<{ fileList: any[] }> = ({ fileList, setFileList }) => {
  return (
    <div className={styles.fileList}>
      {fileList && fileList?.map((file, i) => {
        return (
          <li className={styles.field} key={`${file.name}${i}`}>
            {file.name} {file.value}
            <button onClick={() => {
              setFileList(fileList.filter((item, index) => item.name !== file.name && index !== i))
            }}>X</button>
          </li>
        );
      })}
    </div>
  )
};