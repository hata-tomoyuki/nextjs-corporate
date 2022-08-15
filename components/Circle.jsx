import React from 'react'

function Circle(props) {
  return (
    <div className='w-[750px] h-[750px] rounded-[50%] absolute z-[-1] opacity-10 mx-auto' style={{ ...props }} />
  )
}

export default Circle