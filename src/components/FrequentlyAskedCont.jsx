import React from 'react'
import FrequentlyDetailCont from './FrequentlyDetailCont'
import { useState } from 'react'
function FrequentlyAskedCont({ title, cont }) {
    const [open, setoepn] = useState(false)
    function handelOpenClose(){
        setoepn((prev)=>!prev)
    }
    return (
        <div className='w-[60vw] flex flex-col gap-2 items-center justify-center transition-all ease-in-out duration-500 hover:scale-105'
        >
            <div className='w-[40vw] bg-[#1c1b1b] flex justify-between items-center p-2 rounded-md '  >
                <span className='text-slate-100 text-base font-font_pops'>{title}</span>
                <span className='text-slate-100 text-lg font-font_pops cursor-pointer'
               onClick={handelOpenClose}>{open?'-':'+'}</span>
            </div>
            {open&&<FrequentlyDetailCont cont={cont}/>}
        </div>

    )
}

export default FrequentlyAskedCont
