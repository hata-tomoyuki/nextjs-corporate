import Circle from './Circle'
import {users} from '../data'
import Image from 'next/image'
import { FadeIn } from '../components/FadeIn';

function Testimonials() {
  return (
    <div className='relative flex flex-col items-center justify-around my-12 lg:my-32 max-w-[1280px] mx-auto'>
        <Circle backgroundColor="lightgreen" top="-70vh" left="0" right="0" />
        <h2 className='text-3xl lg:text-5xl font-bold text-center mb-2 lg:mb-28'>Testimonials</h2>
        <FadeIn>
            <div className='flex flex-wrap items-center justify-around flex-col lg:flex-row'>
                {users.map(user => (
                    <div key={user.id} className='w-[30%] my-10 lg:my-0'>
                        <Image
                            src={`/img/${user.logo}`}
                            alt='Image'
                            width='30'
                            height='30'
                        />
                        <p className='text-xl font-light break-words my-4'>
                            {user.comment}
                        </p>
                        <div className='flex items-center'>
                            <Image
                                className='rounded-[50%]'
                                src={`/img/${user.avater}`}
                                alt='Image'
                                width='45'
                                height='45'
                                objectFit='cover'
                            />
                            <div className='flex flex-col ml-4'>
                                <span className='font-bold text-gray-600'>{user.name}</span>
                                <span className='text-sm'>{user.title}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </FadeIn>
    </div>
  )
}

export default Testimonials