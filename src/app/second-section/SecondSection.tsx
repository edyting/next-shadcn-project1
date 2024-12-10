'use client'
import Image from 'next/image'
import React from 'react';

interface feature{
  name:string,
  description:string,
  image:string,
  alt:string
}

const features :feature[] = [
  {
    name:"Trust",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatem illum, magnam aliquam tempora delectus adipisci dicta doloremque",
    image:'/features/trust.png',
    alt:"quality"
  },
  {
    name:"Focus",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatem illum, magnam aliquam tempora delectus adipisci dicta doloremque.",
    image:'/features/focus.png',
    alt:"quality"
  },
  {
    name:"Experience",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatem illum, magnam aliquam tempora delectus adipisci dicta doloremque.",
    image:'/features/experience.png',
    alt:"quality"
  },
  {
    name:"Growth",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatem illum, magnam aliquam tempora delectus adipisci dicta doloremque.",
    image:'/features/growth.png',
    alt:"quality"
  },
  {
    name:"Team Work",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatem illum, magnam aliquam tempora delectus adipisci dicta doloremque.",
    image:'/features/team.png',
    alt:"quality"
  },
  {
    name:"Problem Solving",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatem illum, magnam aliquam tempora delectus adipisci dicta doloremque.",
    image:'/features/puzzle.png',
    alt:"quality"
  },  {
    name:"Creativity",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatem illum, magnam aliquam tempora delectus adipisci dicta doloremque.",
    image:'/features/idea.png',
    alt:"quality"
  },
  {
    name:"Success",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatem illum, magnam aliquam tempora delectus adipisci dicta doloremque.",
    image:'/features/award.png',
    alt:"quality"
  },
]

const SecondSection = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col justify-center items-center pb-10">
          <div className="justify-center md:w-1/3 p-5">
            <div className="bg-gradient-to-r capitalize from-blue-600 md:text-6xl font-bold pb-10 to-green-300 text-4xl bg-clip-text text-transparent">
                From ideas to reality,by the collaborative effort of the team.
            </div>
            {/* small text */}
            <div className="text-2xl capitaliz mb-8">
                Providing the best solution fit for any IT problem that may come your way. We've got you covered.
            </div>
            {/* button */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white md:w-1/3 p-4 justify-center flex rounded-lg">
              Get Started 
            </button>
          </div>
         
         {/* video */}
         <video className='rounded-xl shadow md:w-2/5 p-4 md:p-0' muted autoPlay loop>
            <source src='/videos/video2.mp4' type='video/mp4'/>
         </video>
      </div>

      {/* product feature */}
      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl flex
         justify-center 
         md:text-6xl
         font-bold
         pt-5
         pb-10
         bg-gradient-to-r
         from-purple-400
         to-blue-700
         bg-clip-text
         text-transparent
         ">
            Qualities
        </div>
        {/* list */}
        <div className="grid grid-cols-1 p-4 md:grid md:grid-cols-3 gap-4 md:px-40">
          {features.map((feature,index)=>(
            <div className="flex flex-col space-y-6 pb-10 boreder p-8  shadow-sm rounded-sm items-center justify-center hover:scale-105 w-full transform transition-all duration-500 ease-in-out " key={index}>
                <div className="text-gray-600  font-bold ">
                    <div className="w-full flex justify-center">
                    <Image src={feature.image} alt={feature.alt} width={70} height={70} className='object-contain h-20 w-20  mb-10' />
                    </div>
                    <div >
                      <div className="text-2xl md:text-4xl w-full flex justify-center pb-4 bg-gradient-to-t from-black to-gray-400 bg-clip-text text-transparent">
                          {feature.name}
                      </div>
                      <div className="bg-gradient-to-r from-gray-700 to-gray-400 bg-clip-text text-transparent">
                        {feature.description}
                      </div>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SecondSection
