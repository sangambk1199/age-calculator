import React from 'react'
import Image from 'next/image'

function SeparatorWithArrow() {
  return (
    <div className='flex items-center'>
        <hr className='w-full h-1' />
        <div className='rounded-full bg-violet-500 inline-block p-4'>
            <Image src="/icon-arrow.svg" width={30} height={30} alt="Arrow" />
        </div>        
    </div>
  )
}

export default SeparatorWithArrow