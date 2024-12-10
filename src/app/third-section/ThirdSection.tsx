import Image from 'next/image'
import React from 'react'

const ThirdSection = () => {
  return (
    <div className='flex flex-col md:flex-row md:p-10 px-4 md:justify-evenly'>

      <div className="flex flex-col md:flex-row gap-6 md:px-10">
        <div className="md:w-2/3 w-full">
            <video className='rounded-xl' autoPlay muted loop>
                <source src='/videos/video3.mp4' type='video/mp4'/>
            </video>
        </div>
        {/* text */}
        <div className="flex-col flex border p-4 rounded-xl md:w-2/5">
            <div className="text-4xl flex justify-center text-center font-bold  items-center md:text-6xl bg-gradient-to-tr from-yellow-300 to-blue-400 bg-clip-text text-transparent capitalize">
                Safe space for creativity
            </div>
            <div className="flex-col items-center justify-center md:px-2 pt-2 space-y-6">

               <div className="flex pt-5 text-lg gap-2 md:gap-4">
               <Image src='/features/experience.png' alt='experience' width={70} height={70} />
                <div className="flex flex-col gap-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, saepe? Necessitatibus, aperiam?
                </div>
               </div>


               <div className="flex pt-5 gap-2 text-lg md:gap-4">
               <Image src='/features/growth.png' alt='growth' width={70} height={70} />
                <div className="flex flex-col gap-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, saepe? Necessitatibus, aperiam?
                </div>
               </div>


               <div className="flex pt-5 gap-2 text-lg md:gap-4">
               <Image src='/features/award.png' alt='award' width={70} height={70} />
                <div className="flex flex-col gap-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, saepe? Necessitatibus, aperiam?
                </div>
               </div>


               <div className="flex pt-5 gap-2 text-lg md:gap-4">
               <Image src='/features/trust.png' alt='trust' width={70} height={70} />
                <div className="flex flex-col gap-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, saepe? Necessitatibus, aperiam?
                </div>
               </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdSection
