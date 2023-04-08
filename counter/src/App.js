import pinterest from "./images/icon-pinterest.svg"
import instagram from "./images/icon-instagram.svg"
import facebook from "./images/icon-facebook.svg"
import Time from "./components/Time"
import { useState } from "react"
import { useEffect } from "react"

function App() {


  const [day,setDay] = useState()
  const [hour,setHour] = useState()
  const [minute,setMinute] = useState()
  const [second,setSecond] = useState()


  const startTimer = ()=>{
    let interval
    const countDownDate = new Date("April 20, 2023").getTime();
      interval = setInterval(()=>{
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance/(24*60*60*1000))
      let hours = Math.floor(distance % (24*60*60*1000)/(1000*60*60))
      const minutes = Math.floor(distance%(60 * 60 *1000)/(60*1000))
      const seconds =Math.floor(distance%(60*1000)/1000)

      const format = (number)=>{
        if(number<10){
          return "0"+number
        }else{
          return number
        }
      }

      if(distance<0){
        clearInterval()
      }else{
        setDay(format(days))
        setHour(format(hours))
        setMinute(format(minutes))
        setSecond(format(seconds))
    }
    }
)}
useEffect(()=>{
  startTimer()
})


  return (
    <main className="h-screen bg-VeryDarkBlue w-screen">
      <section className="h-[70%] flex flex-col justify-center align-top">
        <h1 className=" uppercase tracking-[5px] font-bold text-White text-center md:text-[25px] py-10"> We're launching soon</h1>
        <div className="grid grid-cols-4 lg:gap-x-6 sm:gap-x-4 items-center gap-x-2 lg:mx-[200px] mx-3 ">
          <Time time={day} text="days"/>
          <Time time={hour} text="hours"/>
          <Time time={minute} text="minutes"/>
          <Time time={second} text="seconds"/>
        </div>
      </section>
      <div className="h-[30%] second flex flex-row justify-center items-center">
        <a href="#" className="px-4"><img className="hover:bg-SoftRed w-8 duration-300" src={facebook}/></a>
        <a href="#" className="px-4"><img  className="hover:bg-SoftRed w-8 duration-300"src={pinterest}/></a>
        <a href="#" className="px-4"><img  className="hover:bg-SoftRed w-8 duration-300"src={instagram}/></a>
      </div>
    </main>
  )}
export default App
