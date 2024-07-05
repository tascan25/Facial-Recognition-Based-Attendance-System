import React from 'react'

function StudentDetailsCont({label,value}) {
  return (
    <span className='text-slate-100 bg-[#181717] rounded-lg shadow-lg font-font_mons text-sm  w-fit px-2 py-1'>
      <span className='text-slate-300'>{label}</span>:&nbsp;&nbsp;{value}
    </span>
  )
}

export default StudentDetailsCont
