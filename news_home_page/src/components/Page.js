import React from 'react'
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import { useToggleContext } from '../context/toggleContext';

export default function Page() {
    const {close,onClose} = useToggleContext()
  return (
    <main>
        <nav> <Navbar/></nav>
        <Home/>
        <Footer/>
    </main>
  )
}
