import React from 'react'


const style={
    boxShadow:"0px 17px hsl(234, 17%, 12%)",
    textShadow:"1px 1px",
    lineHeight:'40px',
}
export default function Time({time,text}) {
  return (
    <div className='flex flex-col'>
      <h1 style={style}
      className='md:py-[50px] lg:py-[70px] py-[20px]  bg-DarkDesaturatedBlue text-center text-5xl md:text-[5xl] lg:text-[95px] font-bold  rounded-lg  text-SoftRed'>
        {time}</h1>
      <p className='text-center sm:tracking-[7px] sm:font-extrabold text-[12px] sm:text-[15px] text-GrayishBlue uppercase mt-5'>{text}</p>
    </div>
  )
}
