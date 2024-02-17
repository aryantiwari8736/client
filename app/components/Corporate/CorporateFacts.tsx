import React from 'react'
import CountUp from 'react-countup'
type Props = {}

const CorporateFacts = (props: Props) => {
  return (
   <>
   <section>
    
     <div className="px-5 py-4 md:px-10 md:py-4 lg:py-8">
     
       <div className="mx-auto flex w-full max-w-[798px] flex-col rounded-[36px] bg-black py-8 text-white">
      
         <div className="grid h-full w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-0">
           
           <div className="flex flex-col items-center justify-center lg:border-r lg:border-solid lg:border-r-[#c3c0c04d]">
             <h4 className="mb-4 text-2xl font-bold md:text-3xl"><CountUp start={0} end={100000} duration={15} suffix='+' /></h4>
             <p className="text-sm">Lines of Code</p>
           </div>
         
           <div className="flex flex-col items-center justify-center lg:border-r lg:border-solid lg:border-r-[#c3c0c04d]">
             <h4 className="mb-4 text-2xl font-bold md:text-3xl"><CountUp start={0} end={50} duration={5} suffix='+' /></h4>
             <p className="text-sm">Partners</p>
           </div>
         
           <div className="flex flex-col items-center justify-center lg:border-r lg:border-solid lg:border-r-[#c3c0c04d]">
             <h4 className="mb-4 text-2xl font-bold md:text-3xl"><CountUp start={0} end={1550} duration={10} suffix='+' /></h4>
             <p className="text-sm">Customers</p>
           </div>
           
           <div className="flex flex-col items-center justify-center lg:border-r lg:border-solid lg:border-r-[#c3c0c04d]">
             <h4 className="mb-4 text-2xl font-bold md:text-3xl"><CountUp start={0} end={890} duration={10} suffix='+' /></h4>
             <p className="text-sm">Support Tickets</p>
           </div>
         </div>
       </div>
     </div>
   </section></>
  )
}

export default CorporateFacts