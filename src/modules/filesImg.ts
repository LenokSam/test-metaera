import add_btn from '../assets/images/add_btn.png'
type imagesDataType={
  [key: string]: any
}


const images:imagesDataType={
  'add_btn.png':add_btn
}
export const getImage = (imageName:string) => {
  return images[imageName]
}