import { Button } from '@/components/ui/button'
import React from 'react'

const HeroSection = () => {
  return (
    <section className='md:py-20 py-10 bg-gradient-to-r from-gray-50 to-gray-200 space-y-10 '>
        <div className="container mx-auto text-center">
            <div className="text-6xl flex justify-center font-bold md:px-20 pb-10 
            text-gradient
            bg-gradient-to-r
            from-blue-500
            to-green-300
            bg-clip-text
            text-transparent
            ">
                Let's Work Together For Greatness
            </div>
            <p className="text-lg md:text-xl mb-10 bg-gradient-to-r from-black to-gray-200 bg-clip-text text-transparent font-bold">
        Regardless of the type of problem, we will work together as a team to solve the challenge.
       </p>
       {/* buttons */}
       <div className="flex gap-4 justify-center pt-10">
        <button className='bg-blue-500 text-white px-10 py-4 rounded-md text-lg font-bold'>
            Get Started
        </button>
        <button className='bg-gray-600 text-white px-10 py-4 rounded-md text-lg font-bold'>
            Learn More
        </button>
       </div>

       {/* video */}
       <div className="pt-10">
       <video className="rounded-xl " autoPlay muted loop>
            <source src='/videos/video.mp4' type='video/mp4 '/>
       </video>
       </div>

        </div>
      
    </section>
  )
}

export default HeroSection
