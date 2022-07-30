import add_btn from '../assets/images/add_btn.png'
import screenshot_42 from '../assets/images/Screenshot_42.jpg'
type imagesDataType={
  [key: string]: any
}

export const images:imagesDataType={
  'add_btn.png':add_btn,
  'Screenshot_42.jpg': screenshot_42
}
export const getImage = (imageName:string) => {
  return images[imageName]
}