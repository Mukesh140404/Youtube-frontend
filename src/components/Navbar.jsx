import React, { useState } from 'react'
import useLayout from '../context/SidebarContext.js'
import {
    SearchBar,
    Button,
    ProfileImg
} from "../components/index.js"

export default function Navbar(){
    const [IsAuth,setIsAuth] = useState(true)
    const {toggleSideBarMode} = useLayout()
    return (
        <div className='w-full bg-gray-50 border'>
            <div className='w-[98vw] m-auto flex justify-between'>
                <div className='flex'>
                    <div className='pt-3' onClick={toggleSideBarMode} >
                        <i className="fa-solid fa-bars text-2xl"></i>
                    </div>
                    <div className='flex h-14'>
                        <img src='/MytubeLogo.png'/>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-44 md:w-[320px] flex'>
                        <SearchBar/>
                    </div>
                    {
                        IsAuth ? (
                            <div className='flex'>
                                <div className='flex justify-center items-center mx-3'>
                                    <Button label='Create' icon='+'/>
                                </div>
                                <div className='h-12 w-12 mt-1'>
                                    <ProfileImg/>
                                </div>
                            </div>
                        ) : 
                        (
                            <div className='flex'>
                                <div className='flex justify-center items-center mx-3'>
                                    <Button label='Login' icon='>'/>
                                </div>
                            </div>
                        )
                    }
                    {

                    }
                   
                </div>
            </div>
            
        </div>
    )
}