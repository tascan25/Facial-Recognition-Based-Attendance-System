import React from 'react'
import InfoCont from './InfoCont'
import ArrowCont from './ArrowCont'
function ModelInfoCont() {
  return (
    <div className='flex flex-col gap-5 max-w-fit max-h-fit mx-auto mt-10'>
      <span className='text-zinc-200 text-xl font-font_pops'>How, this model Works?</span>
      <div className='max-w-[80vw] max-h-[60vh] p-2 rounded-md border-0 border-slate-800 mt-5 overflow-y-scroll
            flex flex-col justify-start gap-8 '>
        <InfoCont>
          <h3 className='text-slate-100 font-font_pops text-xl'>Siamese Network</h3>
          <p className='text-slate-300 font-font_pops text-sm text-justify'>
            This model is using Siamese Network in the backend for the facial Recognition.
            A Siamese network is a specific neural network architecture designed to compare similar inputs. It consists of two identical subnetworks that process two separate inputs.  These subnetworks learn a way to represent the inputs, and then a Siamese function (like Euclidean distance) compares these representations to measure similarity.  This makes them useful for tasks like facial recognition or finding similar items.
          </p>
        </InfoCont>
        <ArrowCont/>
        <InfoCont>
          <h3 className='text-slate-100 text-xl font-font_pops'>Facial Recognition</h3>
          <p className='text-slate-300 font-font_pops text-sm text-justify'>
          Facial recognition with Siamese networks involves processing two images (known face and test face) through identical subnetworks. These networks extract facial features and encode them. Then, a distance function (like Euclidean distance) compares the encoded representations. A smaller distance indicates a higher similarity, suggesting a potential match between the known and test faces.
          </p>
        </InfoCont>
        <ArrowCont/>
        <InfoCont>
        <h3 className='text-slate-100 text-xl font-font_pops'>Verfication</h3>
        <p className='text-slate-300 font-font_pops text-sm text-justify'>
        Facial verification for student  in database works by comparing a live image to a stored one. The system extracts facial features from both images and creates a unique code for each. These codes are then compared using a distance function. If the distance between the codes is below a certain threshold, it indicates a high similarity, meaning the live image likely matches the person in the database.
        </p>
        </InfoCont>
        <ArrowCont/>
        <InfoCont>
        <h3 className='text-slate-100 text-xl font-font_pops'>Attendance Marked</h3>
        <p className='text-slate-300 font-font_pops text-sm text-justify'>
        After successful facial recognition verification, the system retrieves the student's ID associated with the recognized face. It then checks the "last attendance time" stored for that student. To prevent duplicate entries for quick exits, the system only updates the database if the current time falls outside a predefined window (like 5 minutes) after the "last attendance time". If the timeframe is valid, the database is updated with a new timestamp marking the student's current attendance.
        </p>
        </InfoCont>
      </div>
    </div>
  )
}

export default ModelInfoCont
