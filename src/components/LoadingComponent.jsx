import React from 'react'

function LoadingComponent({children}) {
  return (
    <div className='mx-auto w-fit h-fit p-4 mt-10'>
      {children}
    </div>
  )
}

export default LoadingComponent
