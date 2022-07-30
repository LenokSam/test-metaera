import React from 'react';
import s from './Files.module.css'
import {archiveFilesType} from '../../store/store';

import {getIcon} from '../../modules/getIcon';
import {Arrow} from '../icons/Icons';

type FilesPropsType = {
  files: Array<archiveFilesType>
}

const Files: React.FC<FilesPropsType> = ({files}) => {

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
              <img className={s.item__icon} src={getIcon(f.file_name)} alt=""/>
              <div className={s.item__name}>{f.file_name}</div>
            </div>
          )
        })}
      </div>
    </div>


  );
};

export default Files;