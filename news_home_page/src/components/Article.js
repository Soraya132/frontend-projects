import React from 'react'


export default function Article({title,text}) {
  return (
    <>
     <h2 className='text-OffWhite pt-4 pb-2 text-xl '><a href='#home' className=' hover:text-SoftOrange'>{title}</a></h2>
     <p className='text-DarkGrayishBlue pb-4 text-[15px]'>{text}</p>
     <div className='border-b border-DarkGrayishBlue py-4'></div>
    </>
  )
}
