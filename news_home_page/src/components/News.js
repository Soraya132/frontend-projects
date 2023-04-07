import React from 'react'

export default function News({imgUrl,title,text,id}) {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-6 mb-10'>
        <div className=''>
            <img src={imgUrl} alt="image" width="100%" height="100%" className=''/>
        </div >
        <div className=' lg:col-span-2'>
            <p className='text-DarkGrayishBlue md:text-[20px] font-bold '>{id}</p>
            <h3 className='text-VeryDarkBlue md:text-[20px] font-bold' ><a href="#hoeme" className="hover:text-SoftRed duration-500">{title}</a></h3>
            <p className='text-DarkGrayishBlue text-[15px] lg:pb-2 '>{text}</p>
        </div>
    </div>
  )
}
