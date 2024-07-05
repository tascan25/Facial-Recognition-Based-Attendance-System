import React, { useContext } from 'react';
import { StudentDataContext } from '../context/StudentsDataProvider';
import { StudentImageContext } from '../context/StudentImageProvider';
import StudentCard from './StudentCard';
import LoadingComponent from './LoadingComponent';

function StudentCardCont() {
    const { students, loading } = useContext(StudentDataContext);
    const studentImageUrls = useContext(StudentImageContext);

    return (
        <div className='flex flex-col gap-5 max-w-fit max-h-fit mx-auto mt-10'>
            <span className='text-zinc-200 text-xl font-font_pops'>Enrolled Students</span>
            <div className='max-w-[80vw] max-h-[60vh] p-2 rounded-md border-0 border-slate-800 mt-5 overflow-y-scroll
            flex flex-wrap justify-start gap-5'>
                {loading ? (
                    <LoadingComponent>
                        <div className="relative flex justify-center items-center">
                            <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
                            <img src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg" className="rounded-full h-28 w-28" alt="Loading"/>
                        </div>
                    </LoadingComponent>
                ) : (
                    students.map((student) => (
                        <StudentCard
                            key={student.id}
                            stattendance={student.total_attendance}
                            stlattendance={student.last_attendance_time}
                            ststartyear={student.starting_year}
                            stid={student.id}
                            stimage={studentImageUrls[student.id] || 'default_image_url_here'} 
                            stname={student.name}
                            styear={student.year}
                            stmajor={student.major}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default StudentCardCont;
