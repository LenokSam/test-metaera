import React from 'react';
import s from './Field.module.css';
import {archiveStatus, documentStatusType, periodsType} from '../../store/store';

type PositionPropsType = {
  title: string
  subtitle: string | periodsType| archiveStatus|documentStatusType
  last?:boolean
}

const Field: React.FC<PositionPropsType> = ({title, subtitle, last}) => {

  return <div>
    <div className={last?s.field_margin20 :s.field}>
      <span className={s.field__title}>{title}:</span>
      <span>{subtitle}</span>
    </div>
  </div>
}
export default React.memo(Field)