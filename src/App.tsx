import React from 'react';
import './App.css';
import {documents, usersArchives} from './store/store';
import ArchivesLists from './component/ArchiveList';


function App() {
  return (
    <div className="App">
      <ArchivesLists
        archives={usersArchives}
        documents={documents}
      />
    </div>
  );
}

export default App;
