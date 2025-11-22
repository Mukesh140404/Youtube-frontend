import { createContext, useContext } from "react";

export const LayoutContext = createContext({
    SideBarIsOpen : false,
    toggleSideBarMode :()=>{}
    
})

export const LayoutContextProvider = LayoutContext.Provider

export default function useLayout(){
    return useContext(LayoutContext)
}