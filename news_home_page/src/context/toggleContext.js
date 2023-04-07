import React, { createContext, useState } from 'react'
import { useContext } from 'react'


 const ToggleContext = createContext(undefined)

export const ToggleProvider=({children}) =>{
  const [close,setClose] = useState(false)
  return (
    <ToggleContext.Provider value={{close,onClose:()=>setClose(!close)}}>
        {children}
    </ToggleContext.Provider>
  )
}
export const useToggleContext  = ()=> useContext(ToggleContext)







