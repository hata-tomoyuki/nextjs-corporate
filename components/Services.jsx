import Link from 'next/link'
import Image from 'next/image'
import { scrollFadeIn } from './scrollFadein';
import { useEffect } from 'react';

function Services({services}) {

  useEffect(() => {
    scrollFadeIn();
  }, []);

  return (
    <div className='p-8 lg:p-32 overflow-hidden max-w-[1440px] mx-auto lg:mt-0'>
      <h2 className='text-4xl sm:border-b-4 sm:border-emerald-600 w-fit font-bold mt-12 lg:mt-0'>What We Can Do?</h2>
      <h2 className='text-4xl lg:text-5xl text-emerald-700 font-bold mt-6'>Services we can help you with</h2>
      <div className='flex flex-wrap justify-center md:justify-between mt-10 gap-10 lg:gap-20'>
        {services.map((service) => (
          <Link passHref key={service.id} href={`/products/${service.name}`}>
            {/* <FadeIn> */}
              <div className='w-[245px] h-[245px] sm:w-[500px] sm:h-[500px] flex justify-center items-center p-2 sm:p-4 bg-gray-200 lg:mb-10 relative group rounded js-show-on-scroll'>
                <div className='w-[70%] text-center absolute z-50 bg-gray-300/80 rounded-tr-xl p-4 opacity-0 group-hover:opacity-100 ease-in duration-300 select-none'>{service.desc}</div>
                <span className='absolute top-4 left-4 text-gray-600 font-light tracking-widest uppercase'>{service.title}</span>
                <div className='w-[70%] h-[70%] sm:w-[85%] sm:h-[85%] rounded-[50%] overflow-hidden group-hover:scale-110 ease-in duration-300 mt-4 lg:mt-0'>
                  {service.video ? (
                    <video 
                      className='w-full h-full object-cover' 
                      src={`/img/${service.video}`} 
                      autoPlay 
                      loop 
                      muted 
                    />
                  ) : (
                    <Image 
                      src={`/img/${service.photo}`} 
                      alt='Image'
                      width='100%'
                      height='100%'
                      layout='responsive'
                      objectFit='cover'
                    />
                  )}
                </div>
              </div>
            {/* </FadeIn> */}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Services