import React from 'react'

function FrequentlyDetailCont({cont}) {
  return (
    <div className='w-[40vw] flex justify-start p-2 h-[10vh] bg-[#1c1b1b] rounded-md transition-all ease-in-out duration-500'>
        <p className='text-justify text-slate-300 '>
            {cont}
        </p>
      
    </div>
  )
}

export default FrequentlyDetailCont
