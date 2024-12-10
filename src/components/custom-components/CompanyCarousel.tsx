'use client'
import React,{useEffect,useState} from 'react';
import {motion,AnimatePresence} from 'motion/react'
import Image from 'next/image';

const logos = [
    {
        url:'/logos/logo1.svg',
        alt:'logo'
    },
    {
        url:'/logos/logo2.svg',
        alt:'logo'
    },
    {
        url:'/logos/logo3.svg',
        alt:'logo'
    },
    {
        url:'/logos/logo4.svg',
        alt:'logo'
    },
    {
        url:'/logos/logo5.svg',
        alt:'logo'
    },
    {
        url:'/logos/logo6.svg',
        alt:'logo'
     },
    {
        url:'/logos/logo7.svg',
        alt:'logo'
    },
    // {
    //     url:'/logos/logo8.svg',
    //     alt:'logo'
    // },
    // {
    //     url:'/logos/logo9.svg',
    //     alt:'logo'
    // },
    // {
    //     url:'/logos/logo10.svg',
    //     alt:'logo'
    // },
    // {
    //     url:'/logos/logo11.svg',
    //     alt:'logo'
    // },
    // {
    //     url:'/logos/logo12.svg',
    //     alt:'logo'
    // },
    {
        url:'/logos/logo13.svg',
        alt:'logo'
    },
    {
        url:'/logos/logo14.svg',
        alt:'logo'
    },
    {
        url:'/logos/logo15.svg',
        alt:'logo'
    },
    {
        url:'/logos/logo16.svg',
        alt:'logo'
    },
    // {
    //     url:'/logos/logo17.svg',
    //     alt:'logo'
    // },
]


const CompanyCarousel = () => {
    const [currentIndex,setCurrentIndex] = useState<number>(0);

    useEffect(()=>{
        const interval = setInterval((prev)=>{
            setCurrentIndex((prev) => prev === logos.length - 1 ? 0:prev +1)
        },5000)

        return ()=>{
            clearInterval(interval);
        }
    },[])

  return (

    <div>
      <div className="flex text-3xl md:pt-10 px-10 items-center justify-center font-bold
      bg-gradient-to-r
      from-blue-600
      to-green-300
      bg-clip-text
      text-transparent
      capitalize
      ">
        Over 100+ brands have worked with ipsumlogo tech group with 98% satisfaction rate.
      </div>
      {/* logos */}
      <div className="grid grid-cols-3 justify-center mx-auto md:space-x-4 md:p-4 md:flex">
        <AnimatePresence
            custom={currentIndex}
            
        >
            {logos.map((logo,index)=>(
                <motion.div key={logo.url}
                initial={{opacity:0}}
                animate={{
                    opacity: index === currentIndex ? 1:0.65,
                    scale: index === currentIndex ? 1.3:1,
                    transition:{duration:0.5},
                }}
                exit={{opacity:0}}
                custom={index}
                transition={{opacity:{duration:0.5}}}

                className='md:flex items-center justify-center mx-auto w-40 h-40'
                >
                    <Image src={logo.url} className='items-center justify-center mx-auto h-20 w-20 object-contain '  width={200} height={200} alt={logo.alt}/>
                </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default CompanyCarousel
