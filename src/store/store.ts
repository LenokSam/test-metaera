
export type archiveFilesType={
  file_guid:string
  file_name:string
  file_data:string
}

export type periodsType='PERIOD_MONTH' | 'PERIOD_Q1' | 'PERIOD_Q2' | 'PERIOD_Q3' | 'PERIOD_Q4' | 'PERIOD_YEAR'
export type archiveStatus='NEW' | 'IN_PROCESS' | 'FINISHED' | 'REJECTED'
export type documentStatusType='IN' | 'OUT' | ''

export type userArchiveType={
  archive_guid: string
  archive_date: string
  archive_comment: string
  archive_status: archiveStatus
  archive_status_comment: string
  organization_guid: string
  organization_presentation: string
  tax_period: periodsType
  last_tax_period_date:string
  document_date:string
  document_number:string
  document_type_guid:string
  files: Array<archiveFilesType>
  document_type:documentStatusType
  presentation:string
}

export type documentType={
  guid:string
  document_type:documentStatusType
  presentation:string
}

const usersArchivesJSON='[{"archive_guid":"856201d5-09bf-11ed-8e26-001c421b268a","archive_date":"2022-07-22 15:18:13","archive_comment":"Тестовый документ архива","archive_status":"FINISHED","archive_status_comment":"","organization_guid":"e35445c0-bb53-11e5-8244-00155d127904","organization_presentation":"ООО \'Инновационные технологии\'","tax_period":"PERIOD_Q3","last_tax_period_date":"2022-09-30 00:00:00","document_date":"2022-07-22 00:00:00","document_number":"","document_type_guid":"c3a61781-958d-11ec-8dd8-001c421b268a","files":[{"file_guid":"d28c3ee411484903b9e29336a528533f","file_name":"Xolo_Smart_Gale_Solutions_OU_INV2225683.pdf","file_data":""},{"file_guid":"e95c45b109bb44a08cc0e8528ded06b1","file_name":"Screenshot_42.jpg","file_data":""}]}]'


const documentsJSON='[{"guid":"c3a6177f-958d-11ec-8dd8-001c421b268a","presentation":"Не определено","document_type":""},{"guid":"c3a61780-958d-11ec-8dd8-001c421b268a","presentation":"Счет на оплату","document_type":"IN"},{"guid":"c3a61781-958d-11ec-8dd8-001c421b268a","presentation":"ТТН (входящая)","document_type":"IN"}]'

export const documents:Array<documentType>=JSON.parse(documentsJSON)
export const usersArchives:Array<userArchiveType> = JSON.parse(usersArchivesJSON)
