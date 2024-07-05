import React, { useContext, useRef, useEffect,useState } from 'react';
import { StudentDataContext } from '../context/StudentsDataProvider';
import { StudentImageContext } from '../context/StudentImageProvider';
import { useForm } from 'react-hook-form';
import NoteForField from './NoteForField';
import LoadingComponent from './LoadingComponent';
import storage from '../firebase';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
const delay = (d) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, d * 1000);
  });
};
function ModalForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm();
  const [image, setImage] = useState(null);
  const { open, handelOpenFalse } = useContext(StudentDataContext);
  const dialog = useRef();
  const { fetchImages } = useContext(StudentImageContext);
  const upload = async () => {
    if (image == null) return;
    const imageRef = ref(storage, `Images/${image.name}`);
    await uploadBytes(imageRef, image);
    await fetchImages();
    alert('Image uploaded successfully');
  };
  const onSubmit = async (data) => {
    await delay(5);
    try {
      const resp = await fetch(`https://facial-attendance-system-75cbe-default-rtdb.firebaseio.com/Students/${data.id}.json`, {
        method: 'PUT', 
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!resp.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await resp.json();
      console.log('Data sent successfully:', responseData);
      await upload();
      await fetchImages();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
    reset();  
  };

  

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return (
    <dialog ref={dialog} className='backdrop:bg-stone-900/90 mx-auto mt-16 bg-slate-700 rounded-lg'>
      <div className='flex flex-col justify-around gap-2 bg-[#1d1d1d] w-[50vw] h-[80vh] p-4'>
        <div className='mx-auto p-2 flex flex-col gap-5 w-[90%] h-[80%] rounded-lg bg-[#232323] overflow-y-scroll'>
          {isSubmitting? (
            <LoadingComponent>
              <div className="flex gap-2">
                <div className="w-5 h-5 rounded-full animate-pulse bg-neutral-400"></div>
                <div className="w-5 h-5 rounded-full animate-pulse bg-neutral-400"></div>
                <div className="w-5 h-5 rounded-full animate-pulse bg-neutral-400"></div>
              </div>
            </LoadingComponent>
          ) : isSubmitSuccessful? (
            <LoadingComponent>
              <div className="flex flex-col items-center gap-5 justify-center h-full">
                <span className="text-5xl">🎉</span>
                <p className="text-slate-300 font-font_pops mt-4">Form submitted successfully!</p>
                <button 
                  className='bg-[#1c1b1b] text-slate-100 w-fit px-2 py-1 rounded-md font-font_pops hover:scale-110 transition-all ease-in-out duration-300 hover:shadow-md hover:shadow-neutral-300 hover:gradient-text-main'
                  onClick={() => reset()}>
                  Submit Another
                </button>
              </div>
            </LoadingComponent>
          ) : (
            <>
             <form action="" onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-around gap-5 w-[90%]'>
              <label className='text-neutral-200 font-font_pops'>Name</label>
              <input
                type="text"
                {...register("name", {
                  required: {
                    value: true,
                    message: "This is required, hence cannot remain empty",
                  },
                  minLength: {
                    value: 3,
                    message: "The minimum length of the name should be 3",
                  },
                  maxLength: {
                    value: 30,
                    message: "The maximum length of the name cannot exceed 30",
                  },
                })}
                placeholder='Enter Name'
                className='outline-none bg-[#191818] text-slate-300 p-2 rounded-lg w-[80%] focus:outline-slate-500'
              />
              {errors.name && <span className='custom-bg text-sm text-slate-100 font-font_pops rounded-md w-[90%] py-1'>⚠️ {errors.name.message}</span>}

              <label className='text-neutral-200 font-font_pops'>Roll no</label>
              <input
                type="text"
                {...register("id", {
                  required: {
                    value: true,
                    message: "This is required, hence cannot remain empty",
                  },
                  minLength: {
                    value: 1,
                    message: "The minimum length of the roll number should be 1",
                  },
                  maxLength: {
                    value: 30,
                    message: "The maximum length of the roll number cannot exceed 30",
                  },
                })}
                placeholder='Enter Roll no'
                className='outline-none bg-[#191818] text-slate-300 p-2 rounded-lg w-[80%] focus:outline-slate-500'
              />
              {errors.id && <span className='custom-bg text-sm text-slate-100 font-font_pops rounded-md w-[90%] py-1'>⚠️ {errors.id.message}</span>}

              <label className='text-neutral-200 font-font_pops'>Branch</label>
              <input
                type="text"
                {...register("major", {
                  required: {
                    value: true,
                    message: "This is required, hence cannot remain empty",
                  },
                  minLength: {
                    value: 4,
                    message: "The minimum length of the branch should be 4",
                  },
                  maxLength: {
                    value: 10,
                    message: "The maximum length of the branch cannot exceed 10",
                  },
                })}
                placeholder='Branch Enrolled in'
                className='outline-none bg-[#191818] text-slate-300 p-2 rounded-lg w-[80%] focus:outline-slate-500'
              />
              {errors.major && <span className='custom-bg text-sm text-slate-100 font-font_pops rounded-md w-[90%] py-1'>⚠️ {errors.major.message}</span>}
              <NoteForField>
                <li className='text-slate-300 font-font_pops text-xs'>Note: </li>
                <li className='text-slate-300 font-font_pops text-xs'>The image must be in <strong>"216 x 216"</strong> dimension</li>
                <li className='text-slate-300 font-font_pops text-xs'>Name of the image must be same as the student roll no, ex- <strong>"825471.png"</strong></li>
                <li className='text-slate-300 font-font_pops text-xs'>The field below is not optional. </li>
            </NoteForField>
            <label className='text-neutral-200 font-font_pops'>Image</label>
                <input type='file' className='outline-none bg-[#191818] text-slate-300 p-2 rounded-lg w-[50%] focus:outline-slate-500 text-xs'
                onChange={(e) => setImage(e.target.files[0])}/>
              
              <label className='text-neutral-200 font-font_pops'>Starting Year</label>
              <input
                type="number"
                {...register("starting_year", {
                  required: {
                    value: true,
                    message: "This is required, hence cannot remain empty",
                  },
                  minLength: {
                    value: 4,
                    message: "The minimum length of the starting year should be 4",
                  },
                  maxLength: {
                    value: 4,
                    message: "The maximum length of the starting year should be 4",
                  },
                })}
                placeholder='Enrolled year'
                className='outline-none bg-[#191818] text-slate-300 p-2 rounded-lg w-[80%] focus:outline-slate-500'
              />
              {errors.starting_year && <span className='custom-bg text-sm text-slate-100 font-font_pops rounded-md w-[90%] py-1'>⚠️ {errors.starting_year.message}</span>}

              <label className='text-neutral-200 font-font_pops'>Current Year</label>
              <input
                type="number"
                {...register("year", {
                  required: {
                    value: true,
                    message: "This is required, hence cannot remain empty",
                  },
                  minLength: {
                    value: 1,
                    message: "The minimum length of the current year should be 1",
                  },
                  maxLength: {
                    value: 5,
                    message: "The maximum length of the current year should be 5",
                  },
                })}
                placeholder='Current course year'
                className='outline-none bg-[#191818] text-slate-300 p-2 rounded-lg w-[80%] focus:outline-slate-500'
              />
              {errors.year && <span className='custom-bg text-sm text-slate-100 font-font_pops rounded-md w-[90%] py-1'>⚠️ {errors.year.message}</span>}

              <label className='text-neutral-200 font-font_pops'>Attendance</label>
              <input
                type="number"
                {...register("total_attendance", {
                  required: {
                    value: true,
                    message: "This is required, hence cannot remain empty",
                  },
                  minLength: {
                    value: 1,
                    message: "The minimum length of attendance should be 1",
                  },
                  maxLength: {
                    value: 50,
                    message: "The maximum length of attendance should be 50",
                  },
                })}
                placeholder='Total Attendance'
                className='outline-none bg-[#191818] text-slate-300 p-2 rounded-lg w-[80%] focus:outline-slate-500'
              />
              {errors.total_attendance && <span className='custom-bg text-sm text-slate-100 font-font_pops rounded-md w-[90%] py-1'>⚠️ {errors.total_attendance.message}</span>}

              <NoteForField>
                <li className='text-slate-300 font-font_pops text-xs'>Note: </li>
                <li className='text-slate-300 font-font_pops text-xs'>Value in the below field should be entered in this <strong>"2024-2-11 00:54:34"</strong> format only</li>
                <li className='text-slate-300 font-font_pops text-xs'>If not known, copy the value provided above. The database can handle it later.</li>
                <li className='text-slate-300 font-font_pops text-xs'>The field below is optional. </li>
              </NoteForField>

              <label className='text-neutral-200 font-font_pops'>Last Attendance</label>
              <input
                defaultValue={'2024-2-11 00:54:34'}
                type="text"
                {...register("last_attendance_time")}
                placeholder='Last Attendance Time'
                className='outline-none bg-[#191818] text-slate-300 p-2 rounded-lg w-[80%] focus:outline-slate-500'
              />
              <div className='w-full p-2 flex justify-end'>
                <input disabled={isSubmitting} type='submit' value="submit" className='w-fit h-fit bg-zinc-700 text-slate-100 text-sm py-1 px-2 rounded-lg font-font_pops cursor-pointer' />
              </div>
            </form>
            
            </>
           
          )}
        </div>

        <form method="dialog">
          <button onClick={() => { 
            handelOpenFalse();
            reset();
          }} className='text-sm w-fit h-fit bg-zinc-700 text-slate-100 py-1 px-2 rounded-lg font-font_pops'>
            Close
          </button>
        </form>
      </div>
    </dialog>
  );
}

export default ModalForm;
