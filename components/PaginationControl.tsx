'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { homeCard } from '@/constants'

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
}

const PaginationControls: FC<PaginationControlsProps> = (
  {
    hasNextPage,
    hasPrevPage,
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1';
  const per_page = searchParams.get('per_page') ?? '6'

  return (
    <Pagination className='pb-4'>
      <PaginationContent>
        <PaginationItem>
          {!hasPrevPage ? (
            <PaginationPrevious className='cursor-default hover:bg-white' />
          ) : (
            <PaginationPrevious onClick={() => {
              router.push(`/?page=${Number(page) - 1}`)
            }} className='cursor-pointer' />
          )}
        </PaginationItem>

        {Array.from({ length: Math.ceil(homeCard.length / Number(per_page)) }, (_, index) => (
          <PaginationItem key={index}>
            <PaginationLink onClick={() => {
              router.push(`/?page=${index + 1}`)
            }} isActive={`${index + 1}` === page}>
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}


        <PaginationItem>
          {!hasNextPage ? (
            <PaginationNext className='cursor-default hover:bg-white' />
          ) : (
            <PaginationNext onClick={() => {
              router.push(`/?page=${Number(page) + 1}`)
            }} className='cursor-pointer' />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationControls