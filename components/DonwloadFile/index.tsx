import React from 'react';

export const DownloadFile: React.FC<{ fileList: any }> = ({ fileList }) => {

  function downloadObjectAsJson(exportObj: string, exportName: string) {
    try {
      let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
      let downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", exportName + ".json");
      document.body.appendChild(downloadAnchorNode); // required for firefox
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    } catch (err) {
      alert(err);
    }
  }

  return (
    <>
      <button onClick={() => downloadObjectAsJson(fileList, 'newFile.json')}>
        Download
      </button>
    </>
  )
};