import React from 'react';
import s from './Field.module.css';
import {archiveStatus, documentStatusType, periodsType} from '../../store/store';

type PositionPropsType = {
  title: string
  subtitle: string | periodsType| archiveStatus|documentStatusType
}


const Field: React.FC<PositionPropsType> = ({title, subtitle}) => {

  return <div>
    <div className={s.inner}>
      <span className={s.title}>{title}</span>
      <span className={s.subtitle}>{subtitle}</span>
    </div>
  </div>
}
export default React.memo(Field)