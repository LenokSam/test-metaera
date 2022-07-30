import React from 'react';
import s from './Field.module.css';

type PositionPropsType = {
  title: string
  subtitle: string
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