import React from 'react';
import {userArchiveType} from '../../store/store';
import s from './User.module.css'
import {getPeriod, getType} from '../../modules/constantConversion';
import {Status} from '../icons/Icons';
import Files from './Files';
import {getDateWithPoint} from '../../modules/getDateInFormat';
import Field from './Field';

type UserPropsType = {
  user: userArchiveType
}

const User: React.FC<UserPropsType> = ({user}) => {
  let date = getDateWithPoint(user.archive_date)
  let last_tax_period_date = getDateWithPoint(user.last_tax_period_date)
  let document_date = getDateWithPoint(user.document_date)
  let periods = getPeriod(user.tax_period)
  let status = getType(user.document_type)
  return (
    <div className={s.inner}>
      <div
        className={s.header}
      >
        <span className={s.header__title}> Запись архива</span>
        <button className={s.header__btn}>X</button>

      </div>
      <div className={s.user__info}>
        <span className={s.bold}>{date}</span>
        <span className={s.bold}>{user.organization_presentation}</span>
        <Status status={user.archive_status}/>
      </div>

      <div className={s.document__info}>
        <div className={s.info__container}>
          <Field title={'Дата документа'} subtitle={document_date}/>
          <Field title={'Вид'} subtitle={user.presentation}/>
          <Field title={'Налоговый период'} subtitle={periods} last/>
        </div>
        <div>
          <Field title={'Номер'} subtitle={user.document_number}/>
          <Field title={'Тип'} subtitle={status}/>
          <Field title={'Конец периода'} subtitle={last_tax_period_date} last/>
        </div>
      </div>
      <Files files={user.files}/>
      <div className={s.comment}>
        <span className={s.comment__title}>Примечание</span>
        <div className={s.comment__text}>{user.archive_comment}</div>
      </div>
    </div>
  );
};

export default React.memo(User);
