import React from 'react'
import {data} from '../../data'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

function Product({product}) {
  return (
    <motion.div
      initial={{ opacity: 0 }} // 初期状態
      animate={{ opacity: 1 }} // マウント時
      exit={{ opacity: 0 }}    // アンマウント時
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <div className='flex p-16 lg:p-32  gap-20 lg:gap-8 flex-col-reverse lg:flex-row'>
        <div className='lg:w-3/5 flex flex-wrap'>
          {product.images.map(img => (
            <div key={img.id} className='w-full lg:w-[30%] my-8 lg:m-2'>
              <Image
                src={img.url}
                alt='Image'
                width='100%'
                height='100%'
                objectFit='cover'
                layout='responsive'
                className='rounded-[50%] lg:rounded'
              />
            </div>
          ))}
        </div>
        <div className='lg:w-2/5 mt-12 lg:mt-0'>
          <h2 className='text-4xl lg:text-7xl font-bold'>{product.title}</h2>
          <p className='break-words mt-10'>{product.longDesc}</p>
          <button className='bg-emerald-600 p-2 rounded text-white text-xl mt-12 cursor-pointer'>
            <Link href='/contact'>Contact</Link>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export const getStaticPaths = async () => {
    const products = data;
    const paths = products.map((item) => {
        return {
            params: { name: item.name },
        }
    });

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (ctx) => {
    const name = ctx.params.name;
    const product = data.filter((item) => item.name === name)[0];
    return {
      props: { product }
    }
}

export default Product