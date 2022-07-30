import {getImage} from './filesImg';
import doc from '../assets/images/doc.png';
import pdf from '../assets/images/pdf.png';
import none from '../assets/images/none.png';

export const getIconType =  (filename:string)=> {
  let reg = /\.[^\.]+$/;
  let matches = reg.exec(filename);
  if (matches) {
    return matches[0];
  }
  return '';
}

export const getIcon= (link:string)=>{
  let strForCheck =getIconType(link)
  switch (strForCheck) {
    case '.png':
      return getImage(link)
    case '.jpg':
      return getImage(link)
    case '.docx':
      return doc
    case '.pdf':
      return pdf
    default:
      return none
  }
}

