import React from 'react'

function Footer() {
  return (
    <div className='w-full  flex flex-col align-bottom justify-end  '>
      <div className='bg-gray-400 h-28 flex flex-row'>
       <div>
        <div  className='flex flex-row'>
        <p className='pt-4 pl-4 '>©</p>
        <p className='pt-4 pl-1'>React Developer</p>
        </div>

        <div className='flex flex-row'>
          <p className='pl-7'>Info</p>
        </div>

        </div>
        
      </div>
    </div>
  )
}

export default Footer