export const getFileExtendingName =  (filename:string)=> {
  let reg = /\.[^\.]+$/;
  let matches = reg.exec(filename);
  if (matches) {
    return matches[0];
  }
  return '';
}