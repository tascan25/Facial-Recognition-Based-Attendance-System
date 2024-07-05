import React, { useContext, useState } from 'react';
import { StudentDataContext } from '../context/StudentsDataProvider';
import LoadingComponent from './LoadingComponent';

function FaceAnalyzercont() {
  const { enable, setEnable } = useContext(StudentDataContext);
  const [loading, setLoading] = useState(false);

  const startFaceRecognition = async () => {
    setLoading(true);
    try {
      setEnable(true);
      const response = await fetch('http://localhost:5000/start-recognition', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('There was an error!', error);
    }
    setLoading(false);
  };

  const stopFaceRecognition = async () => {
    setLoading(true);
    try {
      setEnable(false);
      const response = await fetch('http://localhost:5000/stop-recognition', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('There was an error!', error);
    }
    setLoading(false);
  };

  const shutdownServer = async () => {
    setLoading(true);
    try {
        setEnable(false)
      const response = await fetch('http://localhost:5000/shutdown', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('There was an error!', error);
    }
    setLoading(false);
  };

  return (
    <div className='mx-auto w-fit h-fit p-4 mt-10'>
      {loading ? (
        <LoadingComponent>
          <span className='text-lg font-semibold font-font_mons text-slate-200'>Loading...</span>
        </LoadingComponent>
      ) : (
        <>
          {enable ? (
             <button
             onClick={shutdownServer}
             className='bg-[#ff4b4b] text-slate-100 w-fit px-2 py-1 rounded-md font-font_pops hover:scale-110 transition-all ease-in-out duration-300 hover:shadow-md hover:shadow-neutral-300 hover:gradient-text-button mt-4'>
             Exit and Shutdown Server
           </button>
          ) : (
            <button
              onClick={startFaceRecognition}
              className='bg-[#1c1b1b] text-slate-100 w-fit px-2 py-1 rounded-md font-font_pops hover:scale-110 transition-all ease-in-out duration-300 hover:shadow-md hover:shadow-neutral-300 hover:gradient-text-main'>
              Launch Model
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default FaceAnalyzercont;
