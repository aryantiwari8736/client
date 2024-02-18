import React from 'react'

type Props = {}

const HeroCareer = (props: Props) => {
  return (
    
<div className="bg-white dark:bg-gray-800 ">
    <div className="text-center w-full mx-auto py-4 px-4 sm:px-6 lg:py-8 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">
                Want to start your Career?
            </span>
            <span className="block text-[#002A5E]">
                It&#x27;s today or never.
            </span>
        </h2>
        <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
            I had noticed that both in the very poor and very rich extremes of society the mad were often allowed to mingle freely
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-10 inline-flex rounded-md shadow">
                <button type="button" className="py-4 px-6  bg-[#002A5E] hover:bg-[#162638] focus:ring-[#002A5E] focus:ring-offset-[#002A5E] text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Get started
                </button>
            </div>
        </div>
    </div>
</div>

  )
}

export default HeroCareer