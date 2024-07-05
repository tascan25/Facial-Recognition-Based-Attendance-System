import React from 'react'

function NoteForField({children}) {
  return (
    <ul className='w-[100%] rounded-md flex flex-col gap-4 p-2 bg-[#191818] mt-5 '>
      {children}
    </ul>
  )
}

export default NoteForField
