import React from 'react'
import { FilterItems } from "../../util/util"
import { Button } from '@mui/joy'
import { Plus } from 'lucide-react'
const FilterItemsList = () => {
  return (
    <div className='flex gap-5 overflow-x-auto w-full justify-evenly my-4'>
        {FilterItems.map((item , index) => (
            <div className='flex gap-3 items-center' key={index}> 
                <p className='py-1 px-5 border-2 border-gray-400 rounded-full cursor-pointer hover:text-blue-500 hover:border-blue-500' >{item}</p>
            </div>
        ))}
        <Button sx={{paddingX : '2rem'}}><Plus/> Add</Button>
    </div>
  )
}

export default FilterItemsList