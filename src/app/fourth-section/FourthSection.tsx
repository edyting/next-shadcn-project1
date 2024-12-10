import React from 'react'

const FourthSection = () => {
  return (
    <div className='items-center flex justify-center md:py-10 px-20'>
      <div className="text-center capitalize md:text-6xl text-4xl bg-gradient-to-r from-blue-700 to-purple-400 bg-clip-text text-transparent p-10 font-bold">
        Project management system. Made simple
        <div className="flex justify-center w-11/12 text-center mx-auto items-center md:pt-10 p-10">
        <video className='rounded-xl' autoPlay loop muted>
            <source src='/videos/video4.mp4' type='video/mp4' />
        </video>
      </div>
      </div>
      
    </div>
  )
}

export default FourthSection
