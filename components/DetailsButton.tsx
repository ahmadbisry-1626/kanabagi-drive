import React from 'react'
import { homeCard } from '../constants/index';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from './ui/separator';
import Image from 'next/image';


type DetailsButtonProps = {
    style: string
    currentData: typeof homeCard
}

const DetailsButton = ({ style, currentData }: DetailsButtonProps) => {
    return (
        <div className={`${style}`}>
            <Dialog>
                <DialogTrigger className="hidden group-hover:flex w-full items-center justify-center p-4 transition-all duration-200 ease-in-out bg-blue-800 hover:bg-blue-900 rounded-b-[12px]">
                    <div className='flex items-center gap-4'>
                        <span className='font-medium text-[16px] text-white'>Details</span>
                        <Image src="/assets/icons/info.png" alt='' width={20} height={20} />
                    </div>
                </DialogTrigger>
                {currentData.map((card) => (
                    <DialogContent className=''>
                        <DialogHeader className='gap-2'>
                            <DialogTitle>{card.name}'s Details</DialogTitle>
                            <Separator className='' />
                            <div className='flex flex-col gap-4 md:flex-row'>
                                <Image src={card.imageUrl} alt='' width={350} height={350} className='rounded-[12px]' />

                                <div className='flex flex-col'>
                                    <h1 className='text-[24px] font-semibold pb-2'>{card.name}</h1>
                                    <p className='text-gray-400'>File: {card.file}</p>
                                </div>
                            </div>
                        </DialogHeader>
                    </DialogContent>
                ))}
            </Dialog>
        </div>
    )
}

export default DetailsButton