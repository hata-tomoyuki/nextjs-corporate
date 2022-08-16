import React from 'react'
import Circle from '../components/Circle'
import { motion } from 'framer-motion'

function contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }} // 初期状態
      animate={{ opacity: 1 }} // マウント時
      exit={{ opacity: 0 }}    // アンマウント時
      transition={{ ease: "easeOut", duration: 0.3 }}
    >
      <div className='overflow-scroll'>
        <div className='flex flex-col items-center justify-center relative pb-20 lg:mb-52 overflow-hidden'>
            <Circle backgroundColor="lightgreen" left='-40vh' top='-20vh' />
            <Circle backgroundColor="yellow" right='-30vh' bottom='-60vh' />
            <h2 className='text-4xl lg:text-5xl font-bold mt-32 mb-20'>
                GET IN TOUCH
            </h2>
            <from className='w-11/12 h-full md:w-[500px] md:h-[500px] flex flex-wrap'>
                <div className='md:flex gap-4 w-full md:mb-10'>
                    <input type="text" placeholder='Name' className='w-full md:w-1/2 mb-10 md:mb-0 h-16 pl-4 border border-gray-500' />
                    <input type="text" placeholder='Phone' className='w-full md:w-1/2 mb-10 md:mb-0 h-16 pl-4 border border-gray-500' />
                </div>
                <input type="text" placeholder='Email' className='w-full mb-10 h-16 pl-4 border border-gray-500' />
                <input type="text" placeholder='Subject' className='w-full mb-10 h-16 pl-4 border border-gray-500' />
                <textarea cols="30" rows="10" placeholder='Message' className='w-full pl-4 pt-4 border border-gray-500'></textarea>
                <button className='mt-10 py-4 rounded bg-emerald-600 text-white w-full cursor-pointer text-xl'>SUBMIT</button>
            </from>
        </div>
      </div>
    </motion.div>
  )
}

export default contact