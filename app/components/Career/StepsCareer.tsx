import React from 'react'

type Props = {}

const StepsCareer = (props: Props) => {
  return (
   
          <div className="px-4 py-16 mx-auto dark:bg-hsl-custom sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              
              <h2 className="max-w-lg mb-6  dark:text-white  font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="b902cd03-49cc-4166-a0ae-4ca1c31cedba"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#b902cd03-49cc-4166-a0ae-4ca1c31cedba)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className=" dark:text-white  relative">Steps</span>
                </span>{' '}
                to start your career with SpringBee
              </h2>
              <p className="text-base  dark:text-white  text-gray-700 md:text-lg">
              Ready to launch your career journey with SpringBee? Follow these straightforward steps to kickstart your adventure with us!
              </p>
            </div>
            <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-2xl font-bold">Explore</p>
                  <svg
                    className="w-6 text-gray-700  dark:text-white  transform rotate-90 sm:rotate-0"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="2"
                      y1="12"
                      x2="22"
                      y2="12"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="15,5 22,12 15,19 "
                    />
                  </svg>
                </div>
                <p className="text-gray-600  dark:text-gray-300">
                Explore our diverse range of job openings and find the perfect match for your skills and aspirations.

                </p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-2xl font-bold">Apply</p>
                  <svg
                    className="w-6 text-gray-700  dark:text-white transform rotate-90 sm:rotate-0"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="2"
                      y1="12"
                      x2="22"
                      y2="12"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="15,5 22,12 15,19 "
                    />
                  </svg>
                </div>
                <p className="text-gray-600  dark:text-gray-300">
                Take the plunge and apply for your desired position using our intuitive online application system.

                </p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-2xl font-bold">Train</p>
                  <svg
                    className="w-6 text-gray-700  dark:text-white transform rotate-90 sm:rotate-0"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="2"
                      y1="12"
                      x2="22"
                      y2="12"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="15,5 22,12 15,19 "
                    />
                  </svg>
                </div>
                <p className="text-gray-600  dark:text-gray-300 ">
                Upon selection, dive into our comprehensive training program designed to equip you with the knowledge and skills needed to excel in your role.

                </p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-2xl font-bold">Join</p>
                  <svg
                    className="w-8 dark:text-white text-gray-600"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <polyline
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      points="6,12 10,16 18,8"
                    />
                  </svg>
                </div>
                <p className="text-gray-600  dark:text-gray-300 ">
                Congratulations! Upon successful completion of training, you{`'`}ll officially join the SpringBee team and begin making a meaningful impact.
                </p>
              </div>
            </div>
          </div>
       
  )
}

export default StepsCareer