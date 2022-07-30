import React, {useCallback} from 'react';
import download from '../../assets/images/download.svg'
import s from './Files.module.css'
import {archiveFilesType} from '../../store/store';

import doc from '../../assets/images/doc.png'
import pdf from '../../assets/images/pdf.png'
import {getFileExtendingName} from '../../modules/getFileExtendingName';
import {Arrow} from '../icons/Icons';

type FilesPropsType = {
  files: Array<archiveFilesType>
}

const Files: React.FC<FilesPropsType> = ({files}) => {

  const getIconType= useCallback((link:string)=>{
    let strForCheck =getFileExtendingName(link)
    switch (strForCheck) {
      case '.png':
        return link
      case '.jpg':
        return link
      case '.docx':
        return doc
      case '.pdf':
        return pdf
      default:
        return ''
    }
  },[files])

  return (
    <div className={s.inner}>
      <div className={s.header}>
        <div className={s.header__text}>{files.length} файла</div>
        <Arrow/>
        <div className={s.line}></div>

      </div>
      <div className={s.files}>
        {files.map(f => {
          return (
            <div className={s.item} key={f.file_guid}>

              <img className={s.item__icon} src={getIconType(f.file_name)} alt=""/>
              <div className={s.item__name}>{f.file_name}</div>
            </div>
          )
        })}
      </div>
    </div>


  );
};

export default Files;