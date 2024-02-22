import React from 'react'

type Props = {}

const CorporateHero = (props: Props) => {
  return (
    <>
    
		<header>
		 
		  <div className="mx-auto max-w-7xl px-5 py-8 md:px-10 md:py-8 lg:py-12">
		    
		    <div className="mx-auto mb-8 w-full max-w-3xl text-center md:mb-12 lg:mb-16">
		    
		      <h1 className="mb-4 text-4xl font-bold md:text-6xl"> We deliver the Application you have ever thought about. </h1>
		      <p className="mx-auto mb-6 max-w-lg text-base text-[#636262] md:mb-10 lg:mb-12"> Transforming your ideas into reality, our custom applications redefine possibility. Experience seamless integration and functionality tailored precisely to your needs. </p>
		  
		      <div className="flex items-center justify-center">
		        <a href="#contact" className="mr-5 flex items-center bg-[#276ef1] px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] md:mr-6 lg:mr-8">
		          <p className="mr-6 font-bold">Get Started</p>
		          <svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-none">
		            <title>Arrow Right</title>
		            <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
		          </svg>
		        </a>
		       
		      </div>
		    </div>
		   
		    <img src="/assests/dashboard.png" alt="" className="inline-block max-h-[512px] w-full object-cover" />
		  </div>
		</header>
    </>
  )
}

export default CorporateHero