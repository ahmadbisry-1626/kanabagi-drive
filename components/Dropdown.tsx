import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



const Dropdown = () => {
    return (
        <Select>
            <SelectTrigger className="w-full md:py-2 border-none focus-visible:ring-transparent focus:ring-transparent bg-gray-200 rounded-full px-4 h-[54px] md:text-[16px]">
                <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
            </SelectContent>
        </Select>


    )
}

export default Dropdown