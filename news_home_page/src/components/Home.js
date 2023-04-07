import React from 'react'
import web from "../assets/images/image-web-3-mobile.jpg"
import desktop from "../assets/images/image-web-3-desktop.jpg"
import Article from './Article'


const datas=[
  {title:"Hydrogen VS Electric Cars",
   text:" Will hydrogen-fueled cars ever catch up to EVs?"
   },
   {title:" The Downsides of AI Artistry",
   text:" What are the possible adverse effects of on-demand AI image generation?"
   }
]

export default function Home() {
  return (
    <div className='px-8 flex flex-col py-6 md:px-[100px] md:flex-row gap-7'>
        <div className='w-[100%]'>
            <img src={web} alt='web' width="100%" height="100% " className='md:hidden'/>
            <img src={desktop} alt='web' width="100%" height="100% " className='hidden md:flex'/>
            <div className='pt-5 md:flex flex-row gap-10 md:mt-2'>
            <h1 className='font-bold text-4xl md:text-5xl'> The Bright Future of Web 3.0?</h1>
            <div className=' '>
                <p className=' text-DarkGrayishBlue py-3 text-[15px]]'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                But is it really fulfilling its promise?
                </p>
                <button className='bg-SoftRed py-2 px-10 text-OffWhite text-[15px] hover:bg-black text-sm mt-5'>Read more</button>
            </div>
        </div>
        </div>
        <div className=' bg-VeryDarkBlue my-8 px-4 py-6 md:my-0'>
          <h1 className='text-SoftOrange pb-4 text-3xl font-semibold'>New</h1>
          {datas.map((data,index)=>{
            return(
              <Article key={index} title={data.title} text={data.text}/>
            )
          })}
          <h2 className='text-OffWhite py-2 text-xl'><a href='#home' className=' hover:text-SoftOrange'>Is VC Funding Drying Up?</a></h2>
          <p className='text-DarkGrayishBlue text-[15px] font-interBold'> Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>
    </div>
  )
}
