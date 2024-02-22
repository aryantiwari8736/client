import Link from 'next/link'
import React from 'react'

type Props = {}

const HeroCareer = (props: Props) => {
  return (
  
        <div className="bg-white dark:bg-hsl-custom">
          
    
          <div className="relative isolate px-6 pt-14 lg:px-8">
            
            <div className="mx-auto max-w-2xl py-6 sm:py-2 lg:py-4">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative dark:text-white rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Announcing our  recruitment.{' '}
                  <Link href="#careerpost" className="font-semibold text-indigo-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl dark:text-white font-bold tracking-tight text-gray-900 sm:text-6xl">
                Elevate Your Career with SpringBee
                </h1>
                <p className="mt-6  dark:text-white text-lg leading-8 text-gray-600">
                Reach new career heights with SpringBee{`'`}s dynamic opportunities. Discover a pathway to success in the forefront of digital innovation.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    href="career/form"
                    className="rounded-md bg-[#002A5E] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#102641] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#102641]"
                  >
                    Apply Now
                  </Link>
                 
                </div>
              </div>
            </div>
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
          </div>
        </div>
      
  )
}

export default HeroCareer