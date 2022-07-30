import {archiveStatus, documentStatusType, periodsType} from '../store/store';

export  const getPeriod=(period:periodsType)=> {
  switch (period) {
    case 'PERIOD_MONTH':
      return 'месяц'
    case 'PERIOD_Q1':
      return '1 квартал'
    case 'PERIOD_Q2':
      return '2 квартал'
    case 'PERIOD_Q3':
      return '3 квартал'
    case 'PERIOD_Q4':
      return '4 квартал '
    case 'PERIOD_YEAR':
      return '1 год'
    default:
      return ''
  }
}

export  const getStatus=(status:archiveStatus)=> {
  switch (status) {
    case 'NEW':
      return 'Новая'
    case 'IN_PROCESS':
      return 'В обработке'
    case 'FINISHED':
      return 'Завершена'
    case 'REJECTED':
      return 'Отвергнута'
    default:
      return
  }
}

export  const getType=(type:documentStatusType)=> {
  switch (type) {
    case 'IN':
      return 'Входящий'
    case 'OUT':
      return 'Исходящий'
    case '':
      return ''
    default:
      return
  }
}
