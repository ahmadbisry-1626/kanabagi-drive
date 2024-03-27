import { homeCard } from '@/constants'
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useRouter } from 'next/navigation'
import PaginationControls from './PaginationControl'

type HomeCardProps = {
    searchParams: { [key: string]: string | string[] | undefined },
    query: any,
    page?: string,
    itemPerPage?: number
}

const HomeCard = ({searchParams, query, itemPerPage}: HomeCardProps) => {
    const filteredContent = homeCard.filter(card => {
        return card.name.toLowerCase().includes(query.toLowerCase());
    });

    if(query) {
        itemPerPage = 999
    } else {
        itemPerPage = 6
    }

    const page = searchParams['page'] ?? '1'
    const per_page = searchParams['per_page'] ?? itemPerPage

    // mocked, skipped and limited in the real app
    const start = (Number(page) - 1) * Number(per_page) // 0, 5, 10 ...
    const end = start + Number(per_page) // 5, 10, 15 ...

    const entries = filteredContent.slice(start, end)

    return (

        <section className='flex flex-col items-center w-full'>
            {entries.length > 0 ? (
                <div className='grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 w-full place-items-center gap-10 md:gap-[50px] pb-10'>
                    {entries.map((card) => (
                        <div className='group flex flex-col bg-gray-50 rounded-b-[12px] shadow-lg' key={card.id}>
                            <div className='relative group'>
                                <Image src={card.imageUrl} alt='' width={400} height={400} className='rounded-t-[12px]' />
                                <span className='group absolute top-0 h-full w-full bg-black/50 text-white font-medium text-center flex items-center justify-center opacity-0 hover:!opacity-100 rounded-t-[12px] transition duration-200 ease-in-out flex-col'>
                                    <Separator className='w-[100px] opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:translate-x-[20px]' />
                                    <p className='opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out py-2 text-[20px]'>{card.name}</p>
                                    <Separator className='w-[100px] opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:-translate-x-[20px]' />
                                </span>
                            </div>

                            <div className='group-hover:hidden py-4 px-4 flex justify-between w-full items-center'>
                                <p className='text-[16px] font-medium group-hover:hidden transition duration-200 ease-in-out'>
                                    {card.file}
                                </p>
                                <Image src={card.iconUrl} alt='' width={24} height={24} className='group-hover:hidden' />
                            </div>

                            <Dialog key={card.id}>
                                <DialogTrigger className="hidden group-hover:flex w-full items-center justify-center p-4 transition-all duration-200 ease-in-out bg-blue-800 hover:bg-blue-900 rounded-b-[12px]">
                                    <div className='flex items-center gap-4'>
                                        <span className='font-medium text-[16px] text-white'>Details</span>
                                        <Image src="/assets/icons/info.png" alt='' width={20} height={20} />
                                    </div>
                                </DialogTrigger>
                                <DialogContent className=''>
                                    <DialogHeader className='gap-2'>
                                        <DialogTitle>{card.name}'s Details</DialogTitle>
                                        <Separator className='' />
                                        <div className='flex flex-col max-md:items-center gap-4 md:flex-row'>
                                            <Image src={card.imageUrl} alt='' width={350} height={350} className='rounded-[12px] md:w-[350] md:h-[350px] w-[250px] h-[250px] bg-contain object-cover' />

                                            <div className='flex flex-col gap-2 md:gap-0'>

                                                <div className='flex md:hidden items-center gap-4 justify-center'>
                                                    <h1 className='text-[24px] font-semibold'>{card.name}</h1> |
                                                    <div className='gap-2 flex items-center'>
                                                        <Image src={card.iconUrl} alt='' width={20} height={20} />
                                                        <p>{card.file}</p>
                                                    </div>
                                                </div>

                                                <h1 className='md:flex hidden text-[24px] font-semibold pb-2'>{card.name}</h1>
                                                <p className='text-gray-400 text-center md:text-start'>{card.description}</p>
                                                <div className='hidden md:flex gap-2 absolute bottom-20 items-center'>
                                                    <Image src={card.iconUrl} alt='' width={20} height={20} />
                                                    <p>{card.file}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </DialogHeader>
                                    <DialogFooter>
                                        <Button type="submit" className='w-full bg-blue-800 hover:bg-blue-900'>Download</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='flex items-center justify-center w-full bg-gray-100 rounded-[12px] py-[36px]'>
                    <h2 className='text-[18px] md:text-[24px] font-medium'>"{query}" Not Found</h2>
                </div>
            )}

            {query ? (
                <p></p>
            ): (
                <PaginationControls
                    hasNextPage={end < homeCard.length}
                    hasPrevPage={start > 0}
                />
            )}

        </section>
    )
}

export default HomeCard