import { homeCard } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { Separator } from './ui/separator'

const HomeCard = () => {
    return (
        <div className='grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 w-full place-items-center gap-10 md:gap-[50px] pb-10'>
            {homeCard.map((card) => (
                <div className='flex flex-col bg-gray-50 rounded-b-[12px] shadow-lg'>
                    <div className='relative group'>
                        <Image src={card.imageUrl} alt='' width={400} height={400} className='rounded-t-[12px]' />
                        <span className='group absolute top-0 h-full w-full bg-black/50 text-white font-medium text-center flex items-center justify-center opacity-0 hover:!opacity-100 rounded-t-[12px] transition duration-200 ease-in-out flex-col'>
                            <Separator className='w-[100px] opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:translate-x-[20px]'/>
                            <p className='opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out py-2 text-[20px]'>{card.name}</p>
                            <Separator className='w-[100px] opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:-translate-x-[20px]'/>
                        </span>
                    </div>

                    <div className='py-4 px-4 flex justify-between w-full items-center'>
                        <p className='text-[16px] font-medium'>
                            {card.description}
                        </p>
                        <Image src={card.iconUrl} alt='' width={24} height={24} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HomeCard