import React from 'react'

const Spinner = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[70vh]'>
      <div className='spinner'></div>
      <p>Loading...</p>
    </div>    
  )
}

export default Spinner