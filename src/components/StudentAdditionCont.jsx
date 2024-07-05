import React from 'react'
import { useContext } from 'react'
import { StudentDataContext } from '../context/StudentsDataProvider'
function StudentAdditionCont() {
    const {handelOpenTrue} = useContext(StudentDataContext)
    return (
        <div className='max-w-[80vw] h-fit flex flex-col gap-5 justify-center items-center mx-auto mt-10'>
            <div className='w-[80vw] flex justify-start'>
                <span className='text-lg font-font_pops font-medium text-slate-100'>Want to add more students?</span>
            </div>
            <button className='hover:scale-110 transition-all ease-in-out duration-300 hover:shadow-sm hover:gradient-text-main hover:shadow-neutral-300
    w-fit h-fit py-1 px-2 bg-[#1c1b1b] text-slate-100 rounded-md' onClick={handelOpenTrue}>
                Add students
            </button>
        </div>
    )
}

export default StudentAdditionCont
