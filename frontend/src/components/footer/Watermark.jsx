import React from 'react'

const Watermark = () => {
  return (
    <div className='flex justify-center items-center pb-3 bg-shfPurple font-light text-xs'>
      <p className=' text-gray-300'>Designed By&nbsp;</p>
      <a href="https://beenait.uk/" target='new'>
        <p className=' text-gray-300 xl:hover:text-white'>beenaIT Solutions</p>
      </a>

    </div>
  )
}

export default Watermark