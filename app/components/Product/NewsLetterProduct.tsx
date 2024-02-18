import Image from 'next/image'
import React from 'react'

type Props = {}

const NewsLetterProduct = (props: Props) => {
  return (
    
<div className="bg-white mx-auto max-w-screen-xl dark:bg-gray-800">
    <div className="relative px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16">
        <h2 className="text-2xl font-semibold font-display text-black dark:text-white sm:text-3xl">
            We&#x27;ve got more coming...
        </h2>
        <p className="mt-2 max-w-xl text-base text-gray-400">
            Want to hear from us when we add new products? Sign up for our newsletter and we&#x27;ll email you every time we release a new product.
        </p>
        <form>
            <div className="mt-6 sm:flex jusitfy-start">
                <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                    <div className=" relative ">
                        <input type="text" id="&quot;form-subscribe-Subscribe" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email"/>
                        </div>
                        <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                            Subscribe
                        </button>
                    </form>
                </div>
            </form>
            <div className="absolute inset-y-0 right-0 hidden lg:block lg:left-2/3 xl:left-1/2">
                <picture>
                    <source srcSet="/images/object/5.webp" type="image/webp"/>
                        <source srcSet="/images/object/5.png"/>
                            <Image width={100} height={100} className="object-cover w-1/2 mx-auto maw-w-44" src="/assests/laptop.png"  alt=""/>
                        </picture>
                    </div>
                </div>
            </div>

  )
}

export default NewsLetterProduct