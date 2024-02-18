import Link from 'next/link'
import React from 'react'

type Props = {}

const HeroProduct = (props: Props) => {
  return (
    <>
    
<header>

  <div className="mx-auto max-w-screen-xl w-full overflow-hidden px-5 py-4 md:px-10 lg:px-20 lg:py-4">
  
    <div className="flex flex-col items-center gap-y-16 py-10 sm:gap-y-20 lg:py-20">
      
      <div className="max-w-3xl">
        <h1 className="m-5 text-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">Products that would enhance your Business.</h1>
        <p className="mx-auto mb-6 text-center text-sm text-[#636262] sm:px-8 sm:text-xl md:px-24 lg:mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus</p>
       
        <div className="mx-auto flex w-36 flex-col justify-center gap-x-5 gap-y-5 sm:w-full sm:flex-row sm:items-start">
          <Link href="#products" className="inline-block items-center rounded-md border border-solid border-black bg-black px-6 py-3 text-center font-semibold text-white">Learn more</Link>
          
        </div>
      </div>
    </div>
  </div>
  
  <div className="flex gap-3 overflow-hidden sm:gap-3">
    <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64aa5caeeb6dff02ed4569b5_fake-photo.png" alt="" className="h-auto w-36 rounded-2xl sm:w-72 lg:w-80" />
    <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64aa5caeeb6dff02ed4569b5_fake-photo.png" alt="" className="h-auto w-36 rounded-2xl sm:w-72 lg:w-80" />
    <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64aa5caeeb6dff02ed4569b5_fake-photo.png" alt="" className="h-auto w-36 rounded-2xl sm:w-72 lg:w-80" />
    <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64aa5caeeb6dff02ed4569b5_fake-photo.png" alt="" className="h-auto w-36 rounded-2xl sm:w-72 lg:w-80" />
   </div>
</header></>
  )
}

export default HeroProduct