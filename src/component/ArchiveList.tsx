import React from 'react';
import {documents, documentType, userArchiveType} from '../store/store';
import User from './user/User';


export type ArchivesListPropsType = {
  archives: Array<userArchiveType>
  documents:Array<documentType>
}

const ArchivesLists: React.FC<ArchivesListPropsType> = ({archives, documents}) => {

  let userData = archives.map(a=>{
    let document= documents.find(d=>d.guid === a.document_type_guid )
    // @ts-ignore
    return {...a, document_type:document.document_type, presentation:document.presentation}
  })
  let userRenderList=userData.map(a=><User user={a} key={a.archive_guid}/>)

  return (
    <div className={'archiveList'}>
      {userRenderList}
    </div>
  );
};

export default React.memo(ArchivesLists);