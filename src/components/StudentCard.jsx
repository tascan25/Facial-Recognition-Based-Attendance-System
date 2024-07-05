import React from 'react'
import StudentDetailsCont from './StudentDetailsCont'
function StudentCard({stid,stname,stattendance,stlattendance
    ,ststartyear,styear,stmajor,stimage
}) {
  return (
    <div className='w-[25vw] h-fit bg-[#1c1b1b] flex flex-col justify-center 
    items-center gap-5 p-2 rounded-lg hover:transform hover:scale-[0.95] hover:shadow-md hover:shadow-neutral-600 transition-all ease-in-out duration-300 cursor-pointer'>
    <img src={stimage} alt="student_image" className='object-contain w-20 rounded-md' />
    <div className='flex w-[90%] flex-col gap-5'>
    <StudentDetailsCont value={stname} label={"Name"}/>
    <StudentDetailsCont value={stid} label={"Roll no"}/>
    <StudentDetailsCont value={stmajor} label={"Branch"}/>
    <StudentDetailsCont value={stattendance} label={'Attendance'}/>
    <StudentDetailsCont value={ststartyear} label={"Starting year"}/>
    <StudentDetailsCont value={styear} label={'Current Year'}/>
    </div>
    </div>
  )
}

export default StudentCard
