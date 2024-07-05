import React from 'react'

function InfoCont({children}) {
  return (
    <div className='w-[60vw] h-fit flex justify-center items-center'>
<div className='flex flex-col justify-start gap-2 w-[30vw] h-fit p-4 cursor-pointer rounded-lg bg-[#1c1b1b] ml-0'>
      {children}
    </div>
    </div>
  )
}
export default InfoCont
