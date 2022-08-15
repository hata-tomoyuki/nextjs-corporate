import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div className='flex justify-around text-xl py-16 lg:py-32 px-6 lg:px-10 bg-gray-300 flex-col lg:flex-row'>
      <div className='lg:flex-[2] mb-12 lg:mb-0'>
        <h2 className='text-4xl lg:text-5xl font-bold text-white bg-emerald-600 p-2 w-fit mb-8 lg:mb-4'>PRO. CREATIVES</h2>
        <h2 className='text-4xl lg:text-5xl font-bold underline'>
          <a href='/contact' passHref className='flex items-center'>
            <span className='mr-4'>WORK WITH US</span>
            <Image 
              src="/img/link.png"
              alt='Image'
              width='40px'
              height='40px'
            />
          </a>
        </h2>
      </div>
      <div className='lg:flex-1 mr-8 mb-8 lg:mb-0'>
        <div className='mb-8'>
          12 ADAM STREET NY <br className='hidden sm:block' /> USA
        </div>
        <div>
          Mail: pro_creative@gmail.com <br />Tel: 111 1111 11111
        </div>
      </div>
      <div className='lg:flex-1'>
        <div className='mb-16'>
          FOLLOW US: <br /> __FB __IN __BE __TW
        </div>
        <div className='text-xs text-center lg:text-left'>
          @ 2022 PRO. CREATIVES,<br className='hidden sm:block' /> ALL RIGHT RESERVED
        </div>
      </div>
    </div>
  )
}

export default Footer