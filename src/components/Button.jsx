import React,{useId} from 'react'

export default function Button({label,icon,type="button",className="",...props}){
    const id =  useId();
    return (
        <>
        <button  id={id} type={type} className={`hidden md:block w-full rounded-xl shadow px-3 py-2 text-gray-200 hover:bg-gray-800 hover:text-white bg-gray-700 ${className}`} {...props}>
            {label}
        </button>
        <button  id={id} type={type} className={`block md:hidden text-2xl w-full rounded-xl shadow px-3 py-2 text-gray-200 hover:bg-gray-800 hover:text-white bg-gray-700 ${className}`} {...props}>
            {icon}
        </button>
        </>
    )
}