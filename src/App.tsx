import { useState } from 'react'
import './App.css'
import { InputFile } from '../components/InputFile';
import { ChangeFileListFile } from '../components/ChangeFileListFile';
import { FileList } from '../components/FileList';
import { DownloadFile } from '../components/DonwloadFile';
import { Header } from '../components/Header';

function App() {
  const [fileList, setFileList] = useState([]);

  return (
    <div className="App">
      <Header>
        <InputFile setFileList={setFileList} />
        <DownloadFile fileList={fileList} />
      </Header>
      <ChangeFileListFile setFileList={setFileList} />
      <FileList fileList={fileList} setFileList={setFileList} />
    </div>
  )
}

export default App
