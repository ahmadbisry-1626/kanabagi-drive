import { homeCard } from '@/constants'
import Image from 'next/image'
import React, { useState } from 'react'
import { Separator } from './ui/separator'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Button } from './ui/button'
import DetailsButton from './DetailsButton'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

type HomeCardProps = {
    searchTerm: string,
}

const pageSize = 6;


const HomeCard = ({ searchTerm }: HomeCardProps) => {
    const [originalContent, setOriginalContent] = useState(homeCard);
    const [currentPage, setCurrentPage] = useState(1);
    const [openDialog, setOpenDialog] = useState(false)

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const filteredContent = originalContent.filter(card => {
        return card.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const currentData = filteredContent.slice(startIndex, endIndex);

    const handlePageChange = (page: any) => {
        setCurrentPage(page);
    };

    return (

        <section className='flex flex-col items-center w-full'>
            {currentData.length > 0 ? (
                <div className='grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 w-full place-items-center gap-10 md:gap-[50px] pb-10'>
                    {currentData.map((card) => (
                        <div className='group flex flex-col bg-gray-50 rounded-b-[12px] shadow-lg' key={card.id} onClick={() => setOpenDialog(true)}>
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
                            {/* <DetailsButton style='hidden group-hover:flex' currentData={currentData}/> */}
                        </div>
                    ))}
                </div>
            ) : (
                <div className='flex items-center justify-center w-full bg-gray-100 rounded-[12px] py-[36px]'>
                    <h2 className='text-[18px] md:text-[24px] font-medium'>"{searchTerm}" Not Found</h2>
                </div>
            )}

            <Pagination className='pb-4 pt-4'>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" onClick={() => handlePageChange(currentPage - 1)} />
                    </PaginationItem>
                    {/* Loop through pages */}
                    {Array.from({ length: Math.ceil(homeCard.length / pageSize) }, (_, index) => (
                        <PaginationItem key={index}>
                            <PaginationLink href="#" onClick={() => handlePageChange(index + 1)} isActive={index + 1 === currentPage}>
                                {index + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        <PaginationNext href="#" onClick={() => handlePageChange(currentPage + 1)} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>

        </section>
    )
}

export default HomeCard