
export const getDateWithPoint = (date:string) => {
  const newDate= new Date(date)
  return newDate.toLocaleDateString()
}

