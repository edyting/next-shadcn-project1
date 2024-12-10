import React from 'react'

const prices = [
    {
        name:"Basic",
        price:"$45/month",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nihil tenetur cumque?",
        fee:"3.7% + 30$ per transaction"
    },
    {
        name:"Standard",
        price:"$60/month",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nihil tenetur cumque?",
        fee:"5.2% + 40$ per transaction"
    },
    {
        name:"Premium",
        price:"$85/month",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nihil tenetur cumque?",
        fee:"8% + 50$ per transaction"
    },
]

const Prices = () => {
  return (
    <div className=' flex flex-col items-center justify-center'>
        <div className="text-4xl text-center md:text-6xl font-bold bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
            Pricing
            <div className="text-2xl text-center capitalize md:text-4xl font-bold md:py-10">
                Check Out our affordable prices below
            </div>
        </div>

        {/* cards */}
        <div className="flex">
            {prices.map((price,index)=>(
                <div key={index}
                className="p-4">
                    <div className="grid justify-center rounded-xl items-center gap-4 border p-4 w-96 h-96">
                        <div className="text-2xl text-black pb-4">{price.name}</div>
                        <div className="text-xl ">{price.price}</div>
                        <div className="text-xl ">{price.fee}</div>
                        <div className="text-xl ">{price.description}</div>
                        <div className="bg-blue-500 border rounded-xl items-center justify-center text-white p-4">
                        Get Started
                    </div>
                    </div>
                   
                </div>
            ))}
        </div>
    </div>
  )
}

export default Prices
