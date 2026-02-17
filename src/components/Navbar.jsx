import { Search } from 'lucide-react';
import { Handbag } from 'lucide-react';
import {TextAlignJustify} from 'lucide-react'

export const Navbar=()=>{
    return(
        <>
        <div  className='h-15 w-full flex justify-between  bg-amber-200 items-center' >
            <div className='flex justify-between items-center' ><div  className='w-25 h-18 relative ' ><img   className='w-full h-full object-center' src="../../public/images/logoPlant.png" alt="" /></div><p>Planto</p></div>
            <ul className='flex justify-between' >
                <li>Home</li>
                <li>Plants Type</li>
                <li>More</li>
                <li>Contact</li>
            </ul>
            <div className='flex justify-between' >
                <Search/>
                <Handbag />
                <TextAlignJustify />
            </div>
        </div>
        </>
    )
}