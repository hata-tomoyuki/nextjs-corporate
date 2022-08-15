import React from 'react'
import Image from 'next/image'
import Circle from './Circle'

function Intro() {
  return (
    <div className='w-full h-[calc(100vh_-_50px)] flex flex-col lg:flex-row mt-[50px] overflow-hidden'>
        <div className='lg:w-1/2 p-8 lg:p-32 flex flex-col justify-around relative'>
            <Circle backgroundColor="yellow" top='-50%' left='-50%' />
            <Circle backgroundColor="yellow" right='-50%' bottom='-50%' />
            <h2 className='text-4xl lg:text-5xl font-bold'><span className='text-emerald-600 mb-4 block lg:inline'>PRO. CREATIVE </span>DIGITAL PRODUCT AGENCY</h2>
            <p className='text-xl mt-4 mb-8 lg:my-0'>We will give you the best quality through web site development!</p>
            <button className='text-white font-bold w-32 py-3 bg-emerald-600 cursor-pointer rounded'>DISCOVER</button>
        </div>
        <div className='lg:w-1/2 flex flex-col relative'>
            <Image 
                src='/img/intro.jpg' 
                alt='image' 
                width='100%'
                height='100%'
                layout='responsive'
                objectFit='cover'
            />
        </div>
    </div>
  )
}

export default Intro