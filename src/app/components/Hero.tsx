import Image from 'next/image'
import React from 'react'
import HeroImg from "../../../public/image.png"
import Button from './Button'

const Hero = () => {
  return (
    <div className='w-full h-screen flex justify-between items-center'>
      <div className='flex flex-1 flex-col justify-start'>
      <div className="flex flex-col gap-2">
        <p className='font-bold '>Get Started</p>
        <h1 className='text-[60px]'>We help you to grow your business to the <span className='bg-[#B9FF67] p-2'>next level</span></h1>
        <p className='text-[20px]'>Quos aut sed nesciunt facere reprehenderit mollitia vero dignissimos aliquam officia nobis. Asperiores eius explicabo saepe est voluptas cum officia.</p>
        <div>
          <Button name="Get Started" width='130px' height='60px' backgroundColor='black' textColor='white' borderRadius='16px'/>
        </div>
      </div>
      </div>
      <div className="flex flex-1">
        <Image src={HeroImg} alt='hero'/>
      </div>
    </div>
  )
}

export default Hero