import React, { useState } from 'react'
import {AiOutlineClose} from "react-icons/ai"
import { useToggleContext } from '../context/toggleContext'

export default function Menu() {
    const {close,onClose} =useToggleContext()
    return (
         <div className=' w-[100%] h-screen fixed top-0 right-0 md:top-[-100%] md:hidden bg-backgroundColor'>
            <div className=' absolute top-0 right-0  w-[60%] bg-white h-screen pt-6 pl-5 '>
                <div className="absolute top-11 right-7">
                    <AiOutlineClose size={30} onClick={onClose} />
                </div>
                <ul className=' text-lg absolute top-[130px] left-7 '>
                    <li className="mb-4  hover:text-SoftRed"><a href='#home'>Home</a></li>
                    <li className="mb-4  hover:text-SoftRed"><a href='#home'>New</a></li>
                    <li className="mb-4  hover:text-SoftRed"><a href='#home'>Popular</a></li>
                    <li className="mb-4  hover:text-SoftRed"><a href='#home'>Trending</a></li>
                    <li className="mb-4  hover:text-SoftRed"><a href='#home'>Catetories</a></li>
                </ul>
            </div>
        </div>
  )
}