import React from 'react'
import News from './News'



const newses=[
    {id:"01",
     title:"Reviving Retro PCs",
     text:" What happens when old PCs are given modern upgrades?",
     imgUrl:()=>require("../assets/images/image-retro-pcs.jpg")
     },
     {id:"02",
    title:" Top 10 Laptops of 2022",
     text:"  Our best picks for various needs and budgets.",
     imgUrl:()=>require("../assets/images/image-top-laptops.jpg")
     },
     {id:"03",
     title:"  The Growth of Gaming",
     text:" How the pandemic has sparked fresh opportunities.",
     imgUrl:()=>require("../assets/images/image-gaming-growth.jpg")
    }
  ]

export default function Footer() {
  return (
    <div className='px-8 md:px-[100px] py-11 md:grid lg:grid-cols-3 gap-x-3 md:grid-cols-2'>
      {newses.map(data =>{
        return(
        <News key={data.id} {...data} imgUrl={data.imgUrl()}/>
        )
      })}
    </div>
  )
}
