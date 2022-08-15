import Link from 'next/link'
import React, { useState } from 'react'

function Navbar() {
    const [open, setOpen] = useState(false)

  return (
    <div className='h-[50px] bg-black text-white flex items-center px-8 lg:px-32 justify-between fixed top-0 left-0 w-full z-50'>
        <h1 className='text-2xl font-bold'>
            <Link href='/'>PRO. CREATIVE</Link>
        </h1>
        <ul className='lg:flex ml-12 hidden'>
            <li className='mr-8'>
                <Link href='/products/design'>DESINGN</Link>
            </li>
            <li className='mr-8'>
                <Link href='/products/development'>DEVELOPMENT</Link>
            </li>
            <li className='mr-8'>
                <Link href='/products/production'>PRODUCTION</Link>
            </li>
            <li className='mr-8'>
                <Link href='/products/photography'>PHOTOGRAPHY</Link>
            </li>
            <li className='mr-8'>
                <Link href='/contact'>CONTACT</Link>
            </li>
        </ul>
        <div className='flex flex-col justify-between w-6 h-5 lg:hidden' onClick={() => setOpen(!open)}>
            <div className='w-full h-0.5 bg-white'></div>
            <div className='w-full h-0.5 bg-white'></div>
            <div className='w-full h-0.5 bg-white'></div>
        </div>
        <ul className={
            open 
                ? 'fixed top-[50px] right-0 h-[calc(100vh_-_50px)] w-[50vw] bg-black/80 font-bold text-gray-300 flex flex-col items-center z-50 ease-in duration-300'
                : 'fixed top-[50px] right-[-50vw] h-[calc(100vh_-_50px)] w-[50vw] bg-black/80 font-bold text-gray-300 flex flex-col items-center z-50 ease-in duration-300'
            }
            onClick={() => setOpen(false)}
        >
            <li className='mr-8 my-10'>
                <Link href='/products/design'>DESINGN</Link>
            </li>
            <li className='mr-8 my-10'>
                <Link href='/products/development'>DEVELOPMENT</Link>
            </li>
            <li className='mr-8 my-10'>
                <Link href='/products/production'>PRODUCTION</Link>
            </li>
            <li className='mr-8 my-10'>
                <Link href='/products/photography'>PHOTOGRAPHY</Link>
            </li>
            <li className='mr-8 my-10'>
                <Link href='/contact'>CONTACT</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar