import './App.css'
import {Outlet} from 'react-router'
import {Navbar, SideBar} from './components'
import {LayoutContextProvider} from "./context/SidebarContext.js"
import { useState } from 'react'

function App() {
  const [SideBarIsOpen,setSideBarIsOpen] = useState(false) 
  const toggleSideBarMode = () => { setSideBarIsOpen((prev)=>!prev) }
  return (
    <LayoutContextProvider value={{SideBarIsOpen, toggleSideBarMode}}>
      
      {/* THIS IS THE WHOLE SCREEN */}
      <div className="h-screen w-screen overflow-hidden">

        {/* FIXED NAVBAR */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>

        {/* MAIN LAYOUT BELOW NAVBAR */}
        <div className="flex pt-[60px] h-full">
          
          {/* FIXED SIDEBAR */}
          <div className="fixed top-[60px] left-0 bottom-0 overflow-y-auto z-1">
            <SideBar />
          </div>

          {/* SCROLLABLE CONTENT AREA */}
          <div className={`flex-1 md:ml-14 md:opacity-100 ${SideBarIsOpen ? "md:ml-52 opacity-75" : " " }`}>
            <Outlet />
          </div>

        </div>
      </div>
    </LayoutContextProvider>
  )
}

export default App
