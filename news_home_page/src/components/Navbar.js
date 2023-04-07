import React, { useState } from 'react'
import {AiOutlineMenu} from "react-icons/ai"
import Menu from './Menu'
import { useContext } from 'react'
import {  useToggleContext } from '../context/toggleContext'

export default function Navbar() {
  const {close,onClose} =useToggleContext()
  return (
          <div className= ' flex justify-between pt-10 md:px-[100px] px-8 items-center '>
            <h1 className='font-interBold text-3xl font-bold'>W.</h1>
            {close ?<Menu/>:<AiOutlineMenu  size={30} className=' md:hidden'onClick={onClose} />}
            <ul className='md:flex hidden text-DarkGrayishBlue'>
                <li className="px-4 hover:text-SoftRed duration-500"><a href='#home'>Home</a></li>
                <li className="px-4 hover:text-SoftRed duration-500"><a href='#home'>New</a></li>
                <li className="px-4 hover:text-SoftRed duration-500"><a href='#home'>Popular</a></li>
                <li className="px-4 hover:text-SoftRed duration-500"><a href='#home'>Trending</a></li>
                <li className="px-4 hover:text-SoftRed duration-500"><a href='#home'>Catetories</a></li>
            </ul>
          </div>
  )
}
